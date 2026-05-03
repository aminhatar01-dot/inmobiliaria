/**
 * WhatsApp Cloud API Service
 * 
 * Envía mensajes de WhatsApp directamente usando la API oficial de Meta.
 * Requiere configuración previa de:
 * - whatsapp_api_token: Token de acceso permanente de Meta Business
 * - whatsapp_phone_id: ID del número de teléfono registrado en WhatsApp Business
 * 
 * Documentación: https://developers.facebook.com/docs/whatsapp/cloud-api
 */

const WHATSAPP_API_BASE = 'https://graph.facebook.com/v21.0';

export interface WhatsAppConfig {
    apiToken: string;
    phoneNumberId: string;
    n8nWebhookUrl?: string;
    whatsappToken?: string;
}

export interface WhatsAppSendResult {
    success: boolean;
    messageId?: string;
    error?: string;
}

/**
 * Normaliza un número de teléfono argentino al formato internacional E.164
 * Ejemplos:
 *   "011 15 1234-5678" → "5491112345678"
 *   "+54 9 11 1234 5678" → "5491112345678"
 *   "1512345678" → "5491112345678" (asume Buenos Aires)
 */
export function normalizeArgentinePhone(phone: string): string {
    // Eliminar todo excepto dígitos
    let cleaned = phone.replace(/\D/g, '');

    // Si empieza con '+', ya fue limpiado, solo verificar
    // Remover prefijo 0 (formato local)
    if (cleaned.startsWith('0')) {
        cleaned = cleaned.substring(1);
    }

    // Si no empieza con código de país, agregar Argentina (54)
    if (!cleaned.startsWith('54') && cleaned.length <= 12) {
        cleaned = '54' + cleaned;
    }

    // Normalizar números con '15' interno (formato celular argentino antiguo)
    // 54 + area + 15 + number → 54 + 9 + area + number
    if (cleaned.startsWith('54') && !cleaned.startsWith('549')) {
        const rest = cleaned.substring(2);
        // Buscar el '15' que indica celular
        if (rest.length >= 10) {
            // Patrones comunes: 11 15 xxxx xxxx, 351 15 xxxx xxxx
            const twoDigitArea = rest.substring(0, 2);
            const threeDigitArea = rest.substring(0, 3);

            if (rest.substring(2, 4) === '15') {
                // Área de 2 dígitos (ej: 11, 22, etc.)
                cleaned = `549${twoDigitArea}${rest.substring(4)}`;
            } else if (rest.substring(3, 5) === '15') {
                // Área de 3 dígitos (ej: 351, 261, etc.)
                cleaned = `549${threeDigitArea}${rest.substring(5)}`;
            }
        }
    }

    return cleaned;
}

/**
 * Envía un mensaje de texto plano por WhatsApp usando la Cloud API de Meta.
 * 
 * @param config Configuración de la API de WhatsApp
 * @param to Número de teléfono del destinatario (se normaliza automáticamente)
 * @param message Texto del mensaje a enviar
 * @returns Resultado del envío
 */
export async function sendWhatsAppMessage(
    config: WhatsAppConfig,
    to: string,
    message: string
): Promise<WhatsAppSendResult> {
    if (!config.apiToken || !config.phoneNumberId) {
        return {
            success: false,
            error: 'Configuración de WhatsApp incompleta. Configura el token y el ID del teléfono en Ajustes → Comunicaciones.'
        };
    }

    const normalizedPhone = normalizeArgentinePhone(to);

    try {
        const response = await fetch(
            `${WHATSAPP_API_BASE}/${config.phoneNumberId}/messages`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${config.apiToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messaging_product: 'whatsapp',
                    recipient_type: 'individual',
                    to: normalizedPhone,
                    type: 'text',
                    text: {
                        preview_url: false,
                        body: message,
                    },
                }),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            const errorMsg = result?.error?.message || `Error HTTP ${response.status}`;
            console.error('[WHATSAPP] Error sending message:', result);
            return { success: false, error: errorMsg };
        }

        const messageId = result?.messages?.[0]?.id;
        console.log(`[WHATSAPP] ✅ Mensaje enviado a ${normalizedPhone}. ID: ${messageId}`);

        return { success: true, messageId };
    } catch (error: any) {
        console.error('[WHATSAPP] Network error:', error);
        return {
            success: false,
            error: `Error de red al enviar WhatsApp: ${error.message}`
        };
    }
}

/**
 * Genera un link de WhatsApp Web para fallback cuando no hay API configurada.
 * Este link permite al usuario enviar el mensaje manualmente haciendo clic.
 */
export function buildWhatsAppLink(phone: string, message: string): string {
    const cleaned = normalizeArgentinePhone(phone);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleaned}?text=${encodedMessage}`;
}

/**
 * Envía un mensaje de WhatsApp a través del flujo de n8n (WhatsApp as a Service).
 * 
 * @param webhookUrl URL del webhook de n8n para este usuario/tenant
 * @param whatsappToken Token del proveedor de WhatsApp (Whapi/WPPConnect)
 * @param to Número de teléfono del destinatario
 * @param message Texto del mensaje
 * @returns Resultado del envío
 */
export async function sendWhatsAppViaN8n(
    webhookUrl: string,
    whatsappToken: string,
    to: string,
    message: string
): Promise<WhatsAppSendResult> {
    if (!webhookUrl || !whatsappToken) {
        return {
            success: false,
            error: 'Configuración de n8n o WhatsApp incompleta.'
        };
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: to,
                message: message,
                whatsapp_token: whatsappToken
            }),
        });

        if (!response.ok) {
            return { success: false, error: `Error en n8n: ${response.statusText}` };
        }

        return { success: true };
    } catch (error: any) {
        console.error('[WHATSAPP-N8N] Error:', error);
        return { success: false, error: error.message };
    }
}
