'use server';

import { createClient } from '@/lib/supabase/server';

// Estas variables deben configurarse en Vercel una vez que Amin despliegue su Docker
// Por defecto usarán un valor local para pruebas
const EVOLUTION_GLOBAL_API_URL = process.env.EVOLUTION_GLOBAL_API_URL || 'http://localhost:8080';
const EVOLUTION_GLOBAL_API_KEY = process.env.EVOLUTION_GLOBAL_API_KEY || 'ADMIN_GLOBAL_KEY_INMOCMS_123';

/**
 * Crea una instancia de WhatsApp en Evolution API para un agente (tenant) específico
 */
export async function createWhatsAppInstance(tenantId: string) {
    try {
        const instanceName = `inmocms_${tenantId.replace(/-/g, '')}`;
        
        const response = await fetch(`${EVOLUTION_GLOBAL_API_URL}/instance/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': EVOLUTION_GLOBAL_API_KEY
            },
            body: JSON.stringify({
                instanceName: instanceName,
                qrcode: true,
                integration: "WHATSAPP-BAILEYS",
                webhook: "", // Aquí podríamos poner el webhook global si Evolution lo requiere
                webhook_by_events: false
            })
        });

        const data = await response.json();
        
        // Guardamos el nombre de la instancia en la base de datos
        const supabase = await createClient();
        await supabase.from('tenant_communication_settings').update({
            evolution_api_url: `${EVOLUTION_GLOBAL_API_URL}/message/sendText/${instanceName}`,
            evolution_api_key: EVOLUTION_GLOBAL_API_KEY, // O una API Key específica de la instancia
            whatsapp_mode: 'webhook'
        }).eq('tenant_id', tenantId);

        return { success: true, data };
    } catch (error: any) {
        console.error("Error creating WhatsApp instance:", error);
        return { success: false, error: error.message };
    }
}

/**
 * Obtiene el código QR en base64 para que el agente lo escanee
 */
export async function getWhatsAppQR(tenantId: string) {
    try {
        const instanceName = `inmocms_${tenantId.replace(/-/g, '')}`;
        
        const response = await fetch(`${EVOLUTION_GLOBAL_API_URL}/instance/connect/${instanceName}`, {
            method: 'GET',
            headers: {
                'apikey': EVOLUTION_GLOBAL_API_KEY
            }
        });

        const data = await response.json();
        return { success: true, base64: data.base64 || data.qrcode || null };
    } catch (error: any) {
        console.error("Error fetching QR:", error);
        return { success: false, error: error.message };
    }
}

/**
 * Verifica el estado de la conexión de WhatsApp
 */
export async function checkWhatsAppConnection(tenantId: string) {
    try {
        const instanceName = `inmocms_${tenantId.replace(/-/g, '')}`;
        
        const response = await fetch(`${EVOLUTION_GLOBAL_API_URL}/instance/connectionState/${instanceName}`, {
            method: 'GET',
            headers: {
                'apikey': EVOLUTION_GLOBAL_API_KEY
            }
        });

        const data = await response.json();
        return { success: true, state: data.instance?.state || 'open' }; // 'open' significa conectado
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

/**
 * Desconecta la instancia y limpia la configuración
 */
export async function disconnectWhatsApp(tenantId: string) {
    try {
        const instanceName = `inmocms_${tenantId.replace(/-/g, '')}`;
        
        await fetch(`${EVOLUTION_GLOBAL_API_URL}/instance/logout/${instanceName}`, {
            method: 'DELETE',
            headers: {
                'apikey': EVOLUTION_GLOBAL_API_KEY
            }
        });

        const supabase = await createClient();
        await supabase.from('tenant_communication_settings').update({
            evolution_api_url: null,
            evolution_api_key: null,
            whatsapp_mode: 'link'
        }).eq('tenant_id', tenantId);

        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
