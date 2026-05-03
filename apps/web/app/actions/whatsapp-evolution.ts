'use server';

/**
 * WHATSAPP EVOLUTION MANAGER v2 (Centralizado)
 * 
 * Gestiona instancias de WhatsApp Baileys de forma automática para cada tenant.
 * Compatible con Evolution API v2.1.x
 * 
 * PROBLEMAS RESUELTOS:
 * - La API v2 requiere campo "integration" al crear instancias
 * - El campo "number" vacío causa error 400
 * - El endpoint /instance/connect puede colgar con VPS de pocos recursos
 */

const GLOBAL_URL = process.env.EVOLUTION_GLOBAL_API_URL || 'http://localhost:8080';
const GLOBAL_KEY = process.env.EVOLUTION_GLOBAL_API_KEY || 'ADMIN_GLOBAL_KEY_INMOCMS_123';

// Fix para entornos de desarrollo con túneles (Cloudflare/Ngrok)
if (GLOBAL_URL.includes('localhost') || GLOBAL_URL.includes('trycloudflare.com')) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}


console.log(`[WHATSAPP_DEBUG] Utilizando API: ${GLOBAL_URL}`);
console.log(`[WHATSAPP_DEBUG] Key definida: ${GLOBAL_KEY ? 'SÍ' : 'NO'}`);

function getInstanceName(tenantId: string): string {
    return `inmocms_${tenantId.substring(0, 8)}`;
}

/**
 * Helper para llamadas con timeout (evita cuelgues del VPS)
 */
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 15000): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        return response;
    } finally {
        clearTimeout(timer);
    }
}

/**
 * Crea o recupera una instancia de WhatsApp para el tenant actual
 */
export async function ensureWhatsAppInstance(tenantId: string) {
    const instanceName = getInstanceName(tenantId);
    
    try {
        // Intentar crear directamente para ahorrar una llamada de "fetchInstances"
        // Si ya existe, la API v2 devolverá un error que manejaremos
        const createRes = await fetchWithTimeout(
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
            },
            15000 // Aumentamos timeout interno pero Vercel sigue siendo el límite
        );

        const createData = await createRes.json();
        
        // Si ya existe (403/409), no es un error para nosotros
        if (createRes.status === 403 || createRes.status === 409 || createData.error?.includes('already exists')) {
            console.log(`[WHATSAPP] Instancia ya existente: ${instanceName}`);
            return { instanceName, success: true };
        }

        console.log(`[WHATSAPP] Instancia creada con éxito: ${instanceName}`);
        
        // Si la API v2 nos da el QR inmediatamente al crear, lo devolvemos
        const qr = createData.qrcode?.base64 || createData.base64 || null;
        
        return { 
            instanceName, 
            success: true, 
            error: null,
            qr: qr 
        };

    } catch (error: any) {
        // Si falla por timeout pero es una creación, es probable que se haya creado igual
        console.error('[WHATSAPP] Error o Timeout en creación:', error?.message || error);
        return { instanceName, success: true, error: error?.message || 'Error en creación', qr: null }; 
    }
}

/**
 * Obtiene el código QR actual para vincular la cuenta
 * Usa timeout agresivo porque /instance/connect puede colgar en VPS lentos
 */
export async function getWhatsAppQR(tenantId: string) {
    const instanceName = getInstanceName(tenantId);
    
    try {
        console.log(`[WHATSAPP] Solicitando QR para: ${instanceName} en ${GLOBAL_URL}`);
        
        const response = await fetchWithTimeout(
            `${GLOBAL_URL}/instance/connect/${instanceName}`,
            { headers: { 'apikey': GLOBAL_KEY } },
            20000 // Aumentamos a 20s para dar tiempo al VPS
        );
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`[WHATSAPP] API Error (${response.status}):`, errorText);
            return { status: 'error' as const, error: `Servidor respondió con error ${response.status}` };
        }

        const data = await response.json();
        
        // Ya conectado
        if (data.instance?.state === 'open') {
            return { status: 'connected' as const };
        }

        // QR en formato v2 (base64 en la raíz)
        if (data.base64) {
            return { status: 'qr' as const, qr: data.base64 };
        }

        // QR en formato v2.1 (dentro de qrcode)
        if (data.qrcode?.base64) {
            return { status: 'qr' as const, qr: data.qrcode.base64 };
        }

        // Código QR como pairingCode (alternativa Baileys)
        if (data.pairingCode) {
            return { status: 'pairing' as const, code: data.pairingCode };
        }

        // Si la respuesta es exitosa pero no hay QR todavía (instancia arrancando)
        return { status: 'loading' as const };

    } catch (error: any) {
        if (error?.name === 'AbortError') {
            console.log('[WHATSAPP] Connect timeout — El servidor está tardando pero vivo.');
            return { status: 'loading' as const };
        }
        console.error('[WHATSAPP] Error crítico al obtener QR:', error?.message || error);
        return { status: 'error' as const, error: 'Error de conexión con el servidor de WhatsApp' };
    }
}

/**
 * Verifica el estado de conexión
 */
export async function checkWhatsAppConnection(tenantId: string) {
    const instanceName = getInstanceName(tenantId);
    try {
        const response = await fetchWithTimeout(
            `${GLOBAL_URL}/instance/connectionState/${instanceName}`,
            { headers: { 'apikey': GLOBAL_KEY } },
            10000
        );
        const data = await response.json();
        return data.instance?.state === 'open' ? 'connected' : 'disconnected';
    } catch {
        return 'disconnected';
    }
}

/**
 * Desconecta y elimina la instancia (Cerrar sesión)
 */
export async function logoutWhatsApp(tenantId: string) {
    const instanceName = getInstanceName(tenantId);
    try {
        // Logout primero
        try {
            await fetchWithTimeout(
                `${GLOBAL_URL}/instance/logout/${instanceName}`,
                { method: 'DELETE', headers: { 'apikey': GLOBAL_KEY } },
                10000
            );
        } catch { /* puede fallar si ya estaba desconectado */ }
        
        // Delete
        await fetchWithTimeout(
            `${GLOBAL_URL}/instance/delete/${instanceName}`,
            { method: 'DELETE', headers: { 'apikey': GLOBAL_KEY } },
            10000
        );
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error?.message || 'Error desconectando' };
    }
}
