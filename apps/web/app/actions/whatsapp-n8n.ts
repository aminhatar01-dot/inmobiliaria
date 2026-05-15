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

const GLOBAL_URL = (process.env.EVOLUTION_GLOBAL_API_URL || 'https://assets-dean-registered-issue.trycloudflare.com').trim();
const GLOBAL_KEY = process.env.EVOLUTION_GLOBAL_API_KEY || 'ADMIN_GLOBAL_KEY_INMOCMS_123';

/**
 * Obtiene una configuración del sistema con prioridad:
 * 1. Variables de Entorno (env)
 * 2. Base de Datos (system_config)
 * 3. Valor por defecto
 */
async function getConfig(key: string, defaultValue: string): Promise<string> {
    // 1. Prioridad: Base de Datos (Cambios realizados en el Panel)
    try {
        const supabase = await createAdminClient();
        const { data, error } = await supabase
            .from('system_config')
            .select('value')
            .eq('key', key)
            .single();
        
        if (data?.value) return data.value;
    } catch (err) {
        console.warn(`[CONFIG] No se pudo leer ${key} de la DB (usando fallback de env)`);
    }

    // 2. Fallback: Variable de Entorno (Vercel/Local)
    const envValue = process.env[key];
    if (envValue) return envValue;

    // 3. Fallback: Valor por defecto (Hardcoded)
    return defaultValue;
}

/**
 * Guarda configuración global (Solo SuperAdmin)
 */
export async function saveSystemConfig(key: string, value: string) {
    if (!(await isSuperAdmin())) throw new Error('No autorizado');
    
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        
        const adminSupabase = await createAdminClient();
        const { error } = await adminSupabase
            .from('system_config')
            .upsert({ 
                key, 
                value, 
                updated_at: new Date().toISOString(),
                updated_by: user?.id 
            }, { onConflict: 'key' });

        if (error) {
            // Si el error es que la tabla no existe en el Supabase remoto
            if (error.message?.includes('relation "system_config" does not exist')) {
                console.warn('[CONFIG] La tabla no existe en la nube, usando variables de entorno...');
                return { success: true };
            }
            throw error;
        }
        
        return { success: true };
    } catch (error: any) {
        console.error(`[CONFIG] Error guardando ${key}:`, error.message);
        throw error;
    }
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

        // 1. Asegurar Instancia en Evolution API (FAST)
        const instance = await ensureWhatsAppInstance(tenantId);
        
        // 2. Asegurar Flujo en n8n (No crítico para mostrar el QR)
        try {
            const provision = await provisionUserFlow(user.id);
            if (provision.success && provision.webhookUrl) {
                await linkEvolutionToN8N(tenantId, provision.webhookUrl);
            }
        } catch (n8nError: any) {
            console.error('[N8N_NON_BLOCKING] Error en provisión:', n8nError.message);
        }

        revalidatePath('/marketing/canales');
        return { success: true, qr: instance.qr };

    } catch (error: any) {
        console.error('[WHATSAPP_BINDING] Error crítico:', error.message);
        return { success: false, error: error.message };
    }
}

/**
 * Acción dedicada para obtener solo el QR (Polling rápido)
 */
export async function getLatestQR() {
    try {
        const supabase = await createClient();
        const tenantId = await getTenantId(supabase);
        if (!tenantId) return { success: false };

        const qrResult = await getWhatsAppQR(tenantId);
        return { 
            success: true, 
            qr: qrResult.status === 'qr' ? qrResult.qr : null,
            status: qrResult.status 
        };
    } catch {
        return { success: false };
    }
}

/**
 * Configura el webhook en Evolution API para que apunte al flujo de n8n del agente
 */
async function linkEvolutionToN8N(tenantId: string, webhookUrl: string) {
    const evolutionUrl = await getConfig('EVOLUTION_API_URL', GLOBAL_URL);
    const evolutionKey = await getConfig('EVOLUTION_API_KEY', GLOBAL_KEY);
    const instanceName = `inmocms_${tenantId.substring(0, 8)}`;

    if (!evolutionUrl || !evolutionKey) return;

    try {
        await fetch(`${evolutionUrl}/webhook/set/${instanceName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': evolutionKey
            },
            body: JSON.stringify({
                url: webhookUrl,
                enabled: true
            })
        });
    } catch (error: any) {
        console.error('[EVOLUTION] Error vinculando webhook:', error.message);
    }
}

/**
 * Obtiene la configuración de infraestructura para el panel de administración
 */
export async function getSystemInfrastructureInfo() {
    return {
        EVOLUTION_API_URL: await getConfig('EVOLUTION_API_URL', GLOBAL_URL),
        EVOLUTION_API_KEY: await getConfig('EVOLUTION_API_KEY', GLOBAL_KEY),
        N8N_API_URL: await getConfig('N8N_API_URL', 'http://localhost:5678/api/v1'),
        N8N_API_KEY: await getConfig('N8N_API_KEY', ''),
        N8N_MASTER_FLOW_ID: await getConfig('N8N_MASTER_FLOW_ID', '1'),
        N8N_WEBHOOK_BASE_URL: await getConfig('N8N_WEBHOOK_BASE_URL', 'http://localhost:5678')
    };
}

/**
 * Clona el flujo maestro de n8n para el usuario
 */
async function provisionUserFlow(userId: string) {
    const adminSupabase = await createAdminClient();

    // Configuración Maestra
    const n8nUrl = await getConfig('N8N_API_URL', 'http://localhost:5678/api/v1');
    const n8nKey = await getConfig('N8N_API_KEY', '');
    const masterId = await getConfig('N8N_MASTER_FLOW_ID', '1');
    const webhookBase = await getConfig('N8N_WEBHOOK_BASE_URL', 'http://localhost:5678');

    if (!n8nUrl || !n8nKey || !masterId) {
        return { success: false, error: 'Infraestructura de automatización no configurada por el administrador global.' };
    }

    // Verificar si ya tiene flujo
    const { data: profile } = await adminSupabase
        .from('profiles')
        .select('n8n_webhook_url, name')
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
            name: `WhatsApp InmoCMS - ${profile?.name || userId}`,
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
