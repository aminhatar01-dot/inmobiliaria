/**
 * Email Service
 * 
 * Envía correos electrónicos usando la configuración SMTP del tenant.
 * Utiliza nodemailer para el envío real.
 */

import nodemailer from 'nodemailer';

export interface SMTPConfig {
    host: string;
    port: number;
    user: string;
    pass: string;
    fromName: string;
    fromEmail: string;
}

export interface EmailSendResult {
    success: boolean;
    messageId?: string;
    error?: string;
}

/**
 * Envía un correo electrónico usando la configuración SMTP proporcionada.
 * 
 * @param config Configuración SMTP
 * @param to Dirección de correo del destinatario
 * @param subject Asunto del correo
 * @param htmlBody Cuerpo del correo en HTML
 * @param textBody Cuerpo del correo en texto plano (fallback)
 * @returns Resultado del envío
 */
export async function sendEmail(
    config: SMTPConfig,
    to: string,
    subject: string,
    htmlBody: string,
    textBody?: string
): Promise<EmailSendResult> {
    if (!config.host || !config.user || !config.pass) {
        return {
            success: false,
            error: 'Configuración SMTP incompleta. Configura el servidor SMTP en Ajustes → Comunicaciones.'
        };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port || 587,
            secure: config.port === 465,
            auth: {
                user: config.user,
                pass: config.pass,
            },
        });

        const info = await transporter.sendMail({
            from: `"${config.fromName || 'InmoCMS'}" <${config.fromEmail || config.user}>`,
            to,
            subject,
            text: textBody || htmlBody.replace(/<[^>]*>/g, ''), // Strip HTML for plain text
            html: htmlBody,
        });

        console.log(`[EMAIL] ✅ Correo enviado a ${to}. ID: ${info.messageId}`);

        return { success: true, messageId: info.messageId };
    } catch (error: any) {
        console.error('[EMAIL] Error sending email:', error);
        return {
            success: false,
            error: `Error al enviar correo: ${error.message}`
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
