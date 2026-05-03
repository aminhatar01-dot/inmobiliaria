'use server';

import { createClient, createAdminClient, getTenantId } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { ensureWhatsAppInstance, getWhatsAppQR, checkWhatsAppConnection } from './whatsapp-evolution';

/**
 * Verifica si el usuario actual es SuperAdministrador del sistema
 */
export async function isSuperAdmin() {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return false;

        const { data } = await supabase
            .from('profiles')
            .select('is_superadmin')
            .eq('id', user.id)
            .single();

        return !!data?.is_superadmin;
    } catch {
        return false;
    }
}

/**
 * Obtiene una configuración global de la tabla system_config
 */
async function getSystemConfig(key: string): Promise<string | null> {
    const adminSupabase = await createAdminClient();
    const { data } = await adminSupabase
        .from('system_config')
        .select('value')
        .eq('key', key)
        .single();
    return data?.value || null;
}

/**
 * Guarda configuración global (Solo SuperAdmin)
 */
export async function saveSystemConfig(key: string, value: string) {
    if (!(await isSuperAdmin())) throw new Error('No autorizado');
    
    const adminSupabase = await createAdminClient();
    const { data: { user } } = await adminSupabase.auth.getUser();

    const { error } = await adminSupabase
        .from('system_config')
        .upsert({ 
            key, 
            value, 
            updated_at: new Date().toISOString(),
            updated_by: user?.id 
        });

    if (error) throw error;
    return { success: true };
}

/**
 * Inicia el proceso de vinculación para un agente (QR o Token)
 */
export async function startWhatsAppBinding() {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('No autorizado');

        const tenantId = await getTenantId(supabase);
        if (!tenantId) throw new Error('No se encontró el tenant');

        // 1. Asegurar Instancia en Evolution API
        const instance = await ensureWhatsAppInstance(tenantId);
        
        // 2. Asegurar Flujo en n8n
        const provision = await provisionUserFlow(user.id);

        // 3. Vincular Webhook de Evolution a n8n
        if (provision.success && provision.webhookUrl) {
            await linkEvolutionToN8N(tenantId, provision.webhookUrl);
        }

        revalidatePath('/marketing/canales');
        return { success: true, qr: instance.qr };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

/**
 * Configura el webhook en Evolution API para que apunte al flujo de n8n del agente
 */
async function linkEvolutionToN8N(tenantId: string, webhookUrl: string) {
    const evolutionUrl = process.env.EVOLUTION_GLOBAL_API_URL || await getSystemConfig('EVOLUTION_API_URL');
    const evolutionKey = process.env.EVOLUTION_GLOBAL_API_KEY || await getSystemConfig('EVOLUTION_API_KEY');
    const instanceName = `inmocms_${tenantId.substring(0, 8)}`;

    if (!evolutionUrl || !evolutionKey) return;

    await fetch(`${evolutionUrl}/webhook/set/${instanceName}`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'apikey': evolutionKey 
        },
        body: JSON.stringify({
            url: webhookUrl,
            enabled: true,
            events: ["MESSAGES_UPSERT", "MESSAGES_UPDATE", "SEND_MESSAGE"]
        })
    });
}

/**
 * Clona el flujo maestro de n8n para el usuario
 */
async function provisionUserFlow(userId: string) {
    const adminSupabase = await createAdminClient();

    // Configuración Maestra (Prioridad: Env > SystemConfig)
    const n8nUrl = process.env.N8N_API_URL || await getSystemConfig('N8N_API_URL');
    const n8nKey = process.env.N8N_API_KEY || await getSystemConfig('N8N_API_KEY');
    const masterId = process.env.N8N_MASTER_FLOW_ID || await getSystemConfig('N8N_MASTER_FLOW_ID');
    const webhookBase = process.env.N8N_WEBHOOK_BASE_URL || await getSystemConfig('N8N_WEBHOOK_BASE_URL');

    if (!n8nUrl || !n8nKey || !masterId) {
        return { success: false, error: 'Infraestructura de automatización no configurada por el administrador global.' };
    }

    // Verificar si ya tiene flujo
    const { data: profile } = await adminSupabase
        .from('profiles')
        .select('n8n_webhook_url, full_name')
        .eq('id', userId)
        .single();

    if (profile?.n8n_webhook_url) {
        return { success: true, webhookUrl: profile.n8n_webhook_url };
    }

    try {
        // Clonar flujo maestro
        const masterRes = await fetch(`${n8nUrl}/workflows/${masterId}`, {
            headers: { 'X-N8N-API-KEY': n8nKey }
        });
        
        if (!masterRes.ok) throw new Error('Error al acceder al flujo maestro');
        const masterFlow = await masterRes.json();

        const newFlowData = {
            name: `WhatsApp InmoCMS - ${profile?.full_name || userId}`,
            nodes: masterFlow.nodes,
            connections: masterFlow.connections,
            settings: masterFlow.settings,
            active: true
        };

        const createRes = await fetch(`${n8nUrl}/workflows`, {
            method: 'POST',
            headers: { 'X-N8N-API-KEY': n8nKey, 'Content-Type': 'application/json' },
            body: JSON.stringify(newFlowData)
        });

        const newFlow = await createRes.json();
        
        // Activar
        await fetch(`${n8nUrl}/workflows/${newFlow.id}/activate`, {
            method: 'POST',
            headers: { 'X-N8N-API-KEY': n8nKey }
        });

        const webhookUrl = `${webhookBase || n8nUrl.replace('/api/v1', '')}/webhook/${newFlow.id}/whatsapp-webhook`;

        await adminSupabase
            .from('profiles')
            .update({ n8n_webhook_url: webhookUrl })
            .eq('id', userId);

        return { success: true, webhookUrl };
    } catch (error: any) {
        console.error('[N8N] Error en provisión:', error.message);
        return { success: false, error: error.message };
    }
}

/**
 * Obtiene el estado actual de la conexión para el agente
 */
export async function getWhatsAppServiceStatus() {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return { status: 'disconnected' };

        const tenantId = await getTenantId(supabase);
        if (!tenantId) return { status: 'disconnected' };

        const { data: profile } = await supabase
            .from('profiles')
            .select('n8n_webhook_url')
            .eq('id', user.id)
            .single();

        // Verificar estado real en Evolution API
        const connStatus = await checkWhatsAppConnection(tenantId);
        
        if (connStatus === 'connected') {
            return { status: 'connected', webhookUrl: profile?.n8n_webhook_url };
        }

        if (profile?.n8n_webhook_url) {
            return { status: 'pending_binding' };
        }

        return { status: 'disconnected' };
    } catch {
        return { status: 'error' };
    }
}

/**
 * Desconecta el servicio (Logout)
 */
export async function disconnectWhatsAppService() {
    try {
        const supabase = await createClient();
        const tenantId = await getTenantId(supabase);
        if (!tenantId) throw new Error('No autorizado');

        const { data: { user } } = await supabase.auth.getUser();
        
        // Logout en Evolution
        const { logoutWhatsApp } = await import('./whatsapp-evolution');
        await logoutWhatsApp(tenantId);

        // Limpiar perfil
        await supabase
            .from('profiles')
            .update({ n8n_webhook_url: null })
            .eq('id', user?.id);

        revalidatePath('/marketing/canales');
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
