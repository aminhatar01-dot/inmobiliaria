'use server';

import { createClient } from '@/lib/supabase/server';
import { sendWhatsAppMessage, WhatsAppConfig } from '@/lib/services/whatsapp';
import { sendEmail, SMTPConfig, buildReminderEmailHtml } from '@/lib/services/email';
import { replaceTemplateVariables, TemplateVariables } from '@/lib/services/templates';

export type AutomationEvent = 'new_lead' | 'lead_status_change' | 'property_published' | 'task_assigned' | 'visit_scheduled';

/**
 * Procesa las reglas de automatización para cualquier evento del sistema.
 */
export async function processAutomationRules(
    event: AutomationEvent,
    tenantId: string,
    context: {
        lead?: any;
        property?: any;
        agent?: any;
        extraVars?: Record<string, string>;
    }
) {
    try {
        const supabase = await createClient();

        // 1. Obtener reglas activas para este evento
        const { data: rules, error: rulesError } = await supabase
            .from('automation_rules')
            .select('*')
            .eq('tenant_id', tenantId)
            .eq('trigger_type', event)
            .eq('is_active', true);

        if (rulesError || !rules || rules.length === 0) return;

        // 2. Obtener configuración de comunicaciones del tenant
        const { data: settings } = await supabase
            .from('tenant_communication_settings')
            .select('*')
            .eq('tenant_id', tenantId)
            .maybeSingle();

        // 3. Ejecutar cada regla
        for (const rule of rules) {
            try {
                // Verificar trigger_condition si existe (ej: status específico)
                if (rule.trigger_condition?.status && context.lead?.status !== rule.trigger_condition.status) {
                    continue;
                }

                const actionType = rule.action_type; 
                const actionConfig = rule.action_config || {};
                
                // Determinar destinatario y su nombre
                // Si la regla dice que el target es el agente, usamos el agente. Si no, el lead.
                const isTargetAgent = rule.target_type === 'agent' || actionConfig.target === 'agent';
                const recipientProfile = isTargetAgent ? context.agent : context.lead;
                
                if (!recipientProfile) continue;

                // Preparar variables para el mensaje
                const vars: TemplateVariables = {
                    nombre: recipientProfile.name || recipientProfile.full_name || 'Cliente',
                    propiedad: context.property?.title || '',
                    agente: context.agent?.full_name || '',
                    inmobiliaria: settings?.smtp_from_name || 'Nuestra Inmobiliaria',
                    fecha: new Date().toLocaleDateString('es-AR'),
                    hora: new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
                    ...(context.extraVars || {})
                };

                const template = actionConfig.message || (rule.templates && rule.templates[0]?.content) || '';
                if (!template) continue;

                const message = replaceTemplateVariables(template, vars);
                const recipientPhone = recipientProfile.phone;
                const recipientEmail = recipientProfile.email;

                // Ejecución directa según modo configurado
                if (actionType === 'whatsapp' && recipientPhone) {
                    if (settings?.whatsapp_mode === 'api' && settings?.whatsapp_api_token) {
                        await sendWhatsAppMessage({
                            apiToken: settings.whatsapp_api_token,
                            phoneNumberId: settings.whatsapp_phone_id
                        }, recipientPhone, message);
                    } else if (settings?.whatsapp_mode === 'webhook' && settings?.evolution_api_url) {
                        // Enviar usando Evolution API externa (API Key va en header apikey y/o Bearer)
                        const evolutionPayload = {
                            number: recipientPhone,
                            textMessage: { text: message },
                            options: { delay: 1200 }
                        };
                        try {
                            await fetch(settings.evolution_api_url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'apikey': settings.evolution_api_key || '',
                                    'Authorization': `Bearer ${settings.evolution_api_key || ''}`
                                },
                                body: JSON.stringify(evolutionPayload)
                            });
                        } catch (err) {
                            console.error('[AUTOMATION] Evolution API fetch error:', err);
                        }
                    } else {
                        // Fallback a notificación interna (Link Manual)
                        const cleanPhone = recipientPhone.replace(/\D/g, '');
                        const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
                        
                        await supabase.from('notifications').insert({
                            tenant_id: tenantId,
                            user_id: context.agent?.id || recipientProfile.id,
                            title: rule.name || 'Mensaje de WhatsApp pendiente',
                            message: JSON.stringify({ text: message, url: waUrl }),
                            type: 'automation'
                        });
                    }
                } 
                else if (actionType === 'email' && recipientEmail && (settings?.smtp_host || settings?.resend_api_key || settings?.google_access_token)) {
                    const html = buildReminderEmailHtml({
                        title: rule.name || 'Notificación automática',
                        greeting: `Hola ${vars.nombre}`,
                        body: message
                    });
                    await sendEmail({
                        host: settings.smtp_host || undefined,
                        port: settings.smtp_port || undefined,
                        user: settings.smtp_user || undefined,
                        pass: settings.smtp_pass || undefined,
                        fromName: settings.smtp_from_name || 'InmoCMS',
                        fromEmail: settings.smtp_from_email || 'no-reply@inmocms.com',
                        resendApiKey: settings.resend_api_key || undefined,
                        googleAccessToken: settings.google_access_token || undefined
                    }, recipientEmail, rule.name || 'Notificación', html);
                }
                else {
                    // Si el actionType no es ni whatsapp ni email, o falta configuración, ya creamos la notificación arriba para WhatsApp
                    // Para otros tipos podríamos agregar lógica aquí
                }

            } catch (ruleErr) {
                console.error(`[AUTOMATION] Error executing rule ${rule.id}:`, ruleErr);
            }
        }
    } catch (err) {
        console.error('[AUTOMATION] Fatal error in processAutomationRules:', err);
    }
}
