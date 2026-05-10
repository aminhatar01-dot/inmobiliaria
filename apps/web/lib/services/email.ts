/**
 * Email Service
 * 
 * Envía correos electrónicos usando la configuración SMTP del tenant.
 * Utiliza nodemailer para el envío real.
 */

// nodemailer will be dynamically imported only on the server side to avoid bundling issues
// import nodemailer from 'nodemailer';

export interface SMTPConfig {
    host?: string;
    port?: number;
    user?: string;
    pass?: string;
    fromName: string;
    fromEmail: string;
    resendApiKey?: string;
    googleAccessToken?: string;
    googleRefreshToken?: string;
    tenantId?: string; // Necesario para persistir el token refrescado en la DB
}

export interface EmailSendResult {
    success: boolean;
    messageId?: string;
    error?: string;
}

/**
 * Refresca un Google access token expirado usando el refresh token.
 * Requiere GOOGLE_CLIENT_ID y GOOGLE_CLIENT_SECRET en variables de entorno.
 */
async function refreshGoogleAccessToken(refreshToken: string): Promise<string | null> {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        console.warn('[EMAIL-GMAIL] GOOGLE_CLIENT_ID o GOOGLE_CLIENT_SECRET no configurados. No se puede refrescar el token.');
        return null;
    }

    try {
        const response = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                refresh_token: refreshToken,
                grant_type: 'refresh_token'
            }).toString()
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('[EMAIL-GMAIL] Error al refrescar token:', data.error_description || data.error || data);
            return null;
        }

        console.log('[EMAIL-GMAIL] ✅ Token refrescado exitosamente.');
        return data.access_token;
    } catch (error: any) {
        console.error('[EMAIL-GMAIL] Error de red al refrescar token:', error.message);
        return null;
    }
}

/**
 * Persiste el nuevo access token en la base de datos del tenant.
 */
async function persistRefreshedToken(tenantId: string, accessToken: string) {
    try {
        const { createClient } = await import('@/lib/supabase/server');
        const supabase = await createClient();
        await supabase
            .from('tenant_communication_settings')
            .update({
                google_access_token: accessToken,
                updated_at: new Date().toISOString()
            })
            .eq('tenant_id', tenantId);
        console.log('[EMAIL-GMAIL] Token actualizado en DB para tenant:', tenantId);
    } catch (err: any) {
        console.error('[EMAIL-GMAIL] No se pudo persistir el token refrescado:', err.message);
    }
}

/**
 * Envía un correo electrónico usando la API de Google, Resend o la configuración SMTP proporcionada.
 */
export async function sendEmail(
    config: SMTPConfig,
    to: string,
    subject: string,
    htmlBody: string,
    textBody?: string
): Promise<EmailSendResult> {
    // --- MÉTODO 1: Gmail API (con refresh automático de token) ---
    if (config.googleAccessToken) {
        let accessToken = config.googleAccessToken;

        const tryGmailSend = async (token: string) => {
            const rawMessage = [
                `From: ${config.fromName || 'InmoCMS'} <${config.fromEmail || 'no-reply@inmocms.com'}>`,
                `To: ${to}`,
                `Subject: =?utf-8?B?${Buffer.from(subject).toString('base64')}?=`,
                'MIME-Version: 1.0',
                'Content-Type: text/html; charset=utf-8',
                '',
                htmlBody
            ].join('\r\n');

            const encodedMessage = Buffer.from(rawMessage)
                .toString('base64')
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=+$/, '');

            const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ raw: encodedMessage })
            });

            const data = await response.json();
            return { response, data };
        };

        try {
            let { response, data } = await tryGmailSend(accessToken);

            if (response.ok) {
                console.log(`[EMAIL-GMAIL] ✅ Correo enviado a ${to}. ID: ${data.id}`);
                return { success: true, messageId: data.id };
            }

            // Token expirado → intentar refrescar automáticamente
            if (response.status === 401 && config.googleRefreshToken) {
                console.warn('[EMAIL-GMAIL] Token expirado (401). Intentando refrescar automáticamente...');
                const newToken = await refreshGoogleAccessToken(config.googleRefreshToken);

                if (newToken) {
                    // Persistir el nuevo token en DB
                    if (config.tenantId) {
                        await persistRefreshedToken(config.tenantId, newToken);
                    }

                    // Reintentar con el token fresco
                    const retry = await tryGmailSend(newToken);
                    if (retry.response.ok) {
                        console.log(`[EMAIL-GMAIL] ✅ Correo enviado a ${to} con token refrescado. ID: ${retry.data.id}`);
                        return { success: true, messageId: retry.data.id };
                    }
                    console.warn('[EMAIL-GMAIL] El reintento con token refrescado también falló (HTTP ' + retry.response.status + ').');
                    data = retry.data;
                    response = retry.response;
                } else {
                    console.warn('[EMAIL-GMAIL] No se pudo refrescar el token. Verificá GOOGLE_CLIENT_ID y GOOGLE_CLIENT_SECRET.');
                }
            }

            // Si llegamos acá, Gmail falló definitivamente → log y fallback
            if (response.status === 401 || response.status === 403) {
                console.warn(`[EMAIL-GMAIL] Fallo definitivo (HTTP ${response.status}). Intentando método alternativo...`);
            } else {
                console.error(`[EMAIL-GMAIL] Error HTTP ${response.status}:`, data.error?.message || data);
            }
        } catch (error: any) {
            console.error('[EMAIL-GMAIL] Error de red o API:', error.message);
        }
        // Fall through a Resend o SMTP
    }

    // Si tiene Resend API Key configurada, priorizamos usar Resend
    if (config.resendApiKey) {
        try {
            const fromEmail = config.fromEmail || 'no-reply@resend.dev'; // Resend default if not set
            const response = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${config.resendApiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: `${config.fromName || 'InmoCMS'} <${fromEmail}>`,
                    to: [to],
                    subject,
                    html: htmlBody,
                    text: textBody || htmlBody.replace(/<[^>]*>/g, '')
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || `HTTP ${response.status}`);
            }

            console.log(`[EMAIL-RESEND] ✅ Correo enviado a ${to}. ID: ${data.id}`);
            return { success: true, messageId: data.id };
        } catch (error: any) {
            console.error('[EMAIL-RESEND] Error sending email via Resend:', error);
            return { success: false, error: `Error Resend: ${error.message}` };
        }
    }

    // Si no tiene Resend, usamos SMTP tradicional con Nodemailer
    if (!config.host || !config.user || !config.pass) {
        return {
            success: false,
            error: 'Configuración de correo incompleta. Configura Gmail (OAuth), Resend o SMTP en Ajustes.'
        };
    }

    try {
        const nodemailer = (await import('nodemailer')).default;
        const transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port || 587,
            secure: config.port === 465,
            auth: {
                user: config.user,
                pass: config.pass,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const from = `"${config.fromName || 'InmoCMS'}" <${config.fromEmail || config.user}>`;

        const info = await transporter.sendMail({
            from,
            to,
            subject,
            text: textBody || htmlBody.replace(/<[^>]*>/g, ''),
            html: htmlBody,
        });

        console.log(`[EMAIL-SMTP] ✅ Correo enviado a ${to}. ID: ${info.messageId}`);

        return { success: true, messageId: info.messageId };
    } catch (error: any) {
        console.error('[EMAIL-SMTP] Error sending email:', error);
        return {
            success: false,
            error: `Error al enviar correo SMTP: ${error.message}`
        };
    }
}

/**
 * Genera un HTML básico para correos de recordatorio
 */
export function buildReminderEmailHtml(params: {
    title: string;
    greeting: string;
    body: string;
    footer?: string;
}): string {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; padding: 20px; margin: 0;">
    <div style="max-width: 560px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
        <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 28px 32px;">
            <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 800;">${params.title}</h1>
        </div>
        <div style="padding: 32px;">
            <p style="color: #374151; font-size: 16px; margin: 0 0 16px; font-weight: 600;">${params.greeting}</p>
            <p style="color: #6b7280; font-size: 14px; line-height: 1.7; margin: 0 0 24px; white-space: pre-line;">${params.body}</p>
            ${params.footer ? `<p style="color: #9ca3af; font-size: 12px; margin: 24px 0 0; padding-top: 16px; border-top: 1px solid #e5e7eb;">${params.footer}</p>` : ''}
        </div>
        <div style="background: #f9fafb; padding: 16px 32px; text-align: center;">
            <p style="color: #9ca3af; font-size: 11px; margin: 0;">Enviado por InmoCMS · Sistema de Gestión Inmobiliaria</p>
        </div>
    </div>
</body>
</html>`;
}
