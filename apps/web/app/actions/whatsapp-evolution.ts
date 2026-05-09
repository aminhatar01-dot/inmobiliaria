'use server';

/**
 * WHATSAPP EVOLUTION MANAGER v2.1 (Resiliente)
 * 
 * Gestiona instancias de WhatsApp Baileys de forma automática para cada tenant.
 * Optimizaciones para entornos Cloud (Vercel) y VPS limitados.
 */

const GLOBAL_URL = (process.env.EVOLUTION_GLOBAL_API_URL || 'https://assets-dean-registered-issue.trycloudflare.com').trim();
const GLOBAL_KEY = (process.env.EVOLUTION_GLOBAL_API_KEY || 'ADMIN_GLOBAL_KEY_INMOCMS_123').trim();

// Desactivar validación TLS para túneles de desarrollo (Ngrok/Cloudflare)
if (GLOBAL_URL.includes('localhost') || GLOBAL_URL.includes('trycloudflare.com')) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

function getInstanceName(tenantId: string): string {
    return `inmocms_${tenantId.substring(0, 8)}`;
}

function formatQr(qr: string | null): string | null {
    if (!qr) return null;
    if (qr.startsWith('data:')) return qr;
    // Si la API devuelve solo el base64 sin prefijo
    return `data:image/png;base64,${qr}`;
}

/**
 * Helper resiliente para fetch con abort controller
 */
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 12000): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const response = await fetch(url, { 
            ...options, 
            signal: controller.signal,
            cache: 'no-store' // Evitar cache de Next.js en acciones críticas
        });
        return response;
    } finally {
        clearTimeout(timer);
    }
}

/**
 * Asegura la existencia de la instancia
 */
export async function ensureWhatsAppInstance(tenantId: string) {
    const instanceName = getInstanceName(tenantId);
    console.log(`[EVOLUTION_AUDIT] Verificando instancia para tenant: ${tenantId} -> ${instanceName}`);
    
    try {
        const response = await fetchWithTimeout(
            `${GLOBAL_URL}/instance/create`,
            {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'apikey': GLOBAL_KEY 
                },
                body: JSON.stringify({
                    instanceName: instanceName,
                    integration: 'WHATSAPP-BAILEYS',
                    qrcode: true
                })
            }
        );

        const data = await response.json();
        
        // Manejo explícito de instancia ya existente
        if (response.status === 403 || response.status === 409 || data.error?.includes('already exists')) {
            console.log(`[EVOLUTION_AUDIT] Instancia ya operativa: ${instanceName}`);
            return { instanceName, success: true, qr: null };
        }

        if (!response.ok) {
            throw new Error(data.message || `Error API Evolution: ${response.status}`);
        }

        console.log(`[EVOLUTION_AUDIT] Nueva instancia creada: ${instanceName}`);
        const qr = data.qrcode?.base64 || data.base64 || null;
        
        return { 
            instanceName, 
            success: true, 
            qr: formatQr(qr) 
        };

    } catch (error: any) {
        console.error('[EVOLUTION_AUDIT] Error en ensureWhatsAppInstance:', error.message);
        // Si hay error pero es timeout, asumimos que la instancia podría estar creándose
        return { instanceName, success: true, error: error.message }; 
    }
}

/**
 * Obtiene el QR de conexión
 */
export async function getWhatsAppQR(tenantId: string) {
    const instanceName = getInstanceName(tenantId);
    
    try {
        const response = await fetchWithTimeout(
            `${GLOBAL_URL}/instance/connect/${instanceName}`,
            { headers: { 'apikey': GLOBAL_KEY } }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`[EVOLUTION_AUDIT] Error al conectar (${response.status}):`, errorText);
            return { status: 'error' as const, error: `Error ${response.status}` };
        }

        const data = await response.json();
        
        // Estado: Ya conectado
        if (data.instance?.state === 'open' || data.state === 'open') {
            return { status: 'connected' as const };
        }

        // Mapeo flexible de QR para v2.0 y v2.1
        const qrBase64 = data.qrcode?.base64 || data.base64;
        if (qrBase64) {
            return { status: 'qr' as const, qr: formatQr(qrBase64) };
        }

        // Soporte para pairing code
        if (data.pairingCode) {
            return { status: 'pairing' as const, code: data.pairingCode };
        }

        return { status: 'loading' as const };

    } catch (error: any) {
        console.error('[EVOLUTION_AUDIT] Error obteniendo QR:', error.message);
        return { status: 'error' as const, error: 'Servidor fuera de línea o inaccesible' };
    }
}

/**
 * Verifica estado de conexión
 */
export async function checkWhatsAppConnection(tenantId: string) {
    const instanceName = getInstanceName(tenantId);
    try {
        const response = await fetchWithTimeout(
            `${GLOBAL_URL}/instance/connectionState/${instanceName}`,
            { headers: { 'apikey': GLOBAL_KEY } },
            5000
        );
        const data = await response.json();
        const state = data.instance?.state || data.state;
        return state === 'open' ? 'connected' : 'disconnected';
    } catch {
        return 'disconnected';
    }
}

/**
 * Cierre de sesión y eliminación
 */
export async function logoutWhatsApp(tenantId: string) {
    const instanceName = getInstanceName(tenantId);
    try {
        // Intento de logout
        await fetchWithTimeout(
            `${GLOBAL_URL}/instance/logout/${instanceName}`,
            { method: 'DELETE', headers: { 'apikey': GLOBAL_KEY } },
            5000
        ).catch(() => null);
        
        // Eliminación física de la instancia para liberar RAM
        await fetchWithTimeout(
            `${GLOBAL_URL}/instance/delete/${instanceName}`,
            { method: 'DELETE', headers: { 'apikey': GLOBAL_KEY } },
            5000
        );
        
        return { success: true };
    } catch (error: any) {
        console.error('[EVOLUTION_AUDIT] Error en logout:', error.message);
        return { success: false, error: error.message };
    }
}

