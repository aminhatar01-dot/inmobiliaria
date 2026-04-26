'use server';

import { createClient, getTenantId } from '@/lib/supabase/server';
import { sendMessage, getOrCreateLeadConversation } from './messages';
import { sendWhatsAppMessage, WhatsAppConfig } from '@/lib/services/whatsapp';
import { sendEmail, SMTPConfig, buildReminderEmailHtml } from '@/lib/services/email';
import { replaceTemplateVariables, buildVisitTemplateVars, buildTaskTemplateVars } from '@/lib/services/templates';

/**
 * Main entry point for processing all pending reminders.
 */
export async function processPendingReminders() {
    try {
        const supabase = await createClient();
        const tenantId = await getTenantId(supabase);
        if (!tenantId) return;

        // Fetch communication settings once for the tenant
        const { data: settings } = await supabase
            .from('tenant_communication_settings')
            .select('*')
            .eq('tenant_id', tenantId)
            .maybeSingle();

        await Promise.allSettled([
            processTaskReminders(supabase, tenantId, settings),
            processVisitReminders(supabase, tenantId, settings),
        ]);
    } catch (err) {
        console.error('[REMINDERS] Fatal error in processPendingReminders:', err);
    }
}

async function processTaskReminders(supabase: any, tenantId: string, settings: any) {
    const now = new Date();

    const { data: tasks, error } = await supabase
        .from('tasks')
        .select('id, title, due_date, reminder_hours, reminder_channels, assigned_to')
        .eq('tenant_id', tenantId)
        .eq('agent_reminder_sent', false)
        .eq('status', 'pending')
        .not('due_date', 'is', null);

    if (error) {
        console.error('[REMINDERS] Error fetching tasks:', error.message);
        return;
    }

    if (!tasks || tasks.length === 0) return;

    for (const task of tasks) {
        try {
            const dueDate = new Date(task.due_date);
            const reminderHours = task.reminder_hours ?? 2;
            const reminderTime = new Date(dueDate.getTime() - reminderHours * 60 * 60 * 1000);

            if (now < reminderTime) continue;

            const channels = task.reminder_channels ?? ['in-app'];
            const timeStr = dueDate.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
            const dateStr = dueDate.toLocaleDateString('es-AR');

            // Get agent info for replacement
            const { data: agentProfile } = await supabase
                .from('profiles')
                .select('phone, full_name, email')
                .eq('id', task.assigned_to)
                .single();

            const vars = buildTaskTemplateVars({
                agentName: agentProfile?.full_name,
                taskTitle: task.title,
                dueDate: dateStr,
                dueTime: timeStr
            });

            const baseMsg = "Hola {nombre}, te recordamos la tarea: {propiedad} para el {fecha} a las {hora}.";
            const message = replaceTemplateVariables(baseMsg, vars);

            // 1. In-App Notification
            if (channels.includes('in-app') && task.assigned_to) {
                await createNotification(supabase, tenantId, task.assigned_to, {
                    title: 'Recordatorio de Tarea',
                    message,
                    type: 'task_reminder',
                    related_id: task.id,
                });
            }

            // 2. Automated WhatsApp
            if (channels.includes('whatsapp') && agentProfile?.phone && settings?.whatsapp_api_token) {
                const waConfig: WhatsAppConfig = {
                    apiToken: settings.whatsapp_api_token,
                    phoneNumberId: settings.whatsapp_phone_id
                };
                await sendWhatsAppMessage(waConfig, agentProfile.phone, message);
            }

            // 3. Automated Email
            if (channels.includes('email') && agentProfile?.email && settings?.smtp_host) {
                const smtpConfig: SMTPConfig = {
                    host: settings.smtp_host,
                    port: settings.smtp_port,
                    user: settings.smtp_user,
                    pass: settings.smtp_pass,
                    fromName: settings.smtp_from_name,
                    fromEmail: settings.smtp_from_email
                };
                const html = buildReminderEmailHtml({
                    title: 'Recordatorio de Tarea',
                    greeting: `Hola ${agentProfile.full_name}`,
                    body: message
                });
                await sendEmail(smtpConfig, agentProfile.email, 'Recordatorio de Tarea', html);
            }

            await supabase.from('tasks').update({ agent_reminder_sent: true }).eq('id', task.id);
        } catch (taskErr) {
            console.error(`[REMINDERS] Error processing task reminder ${task.id}:`, taskErr);
        }
    }
}

async function processVisitReminders(supabase: any, tenantId: string, settings: any) {
    const now = new Date();

    const { data: visits, error } = await supabase
        .from('visits')
        .select(`
            id, scheduled_at, reminder_hours,
            agent_id, agent_reminder_sent, agent_reminder_channels,
            client_reminder_sent, client_reminder_channels,
            lead:leads(id, name, phone, email),
            property:properties(title, address, price)
        `)
        .eq('tenant_id', tenantId)
        .eq('status', 'scheduled');

    if (error) {
        console.error('[REMINDERS] Error fetching visits:', error.message);
        return;
    }

    if (!visits || visits.length === 0) return;

    for (const visit of visits) {
        try {
            const scheduledAt = new Date(visit.scheduled_at);
            const reminderHours = visit.reminder_hours ?? 2;
            const reminderTime = new Date(scheduledAt.getTime() - reminderHours * 60 * 60 * 1000);

            if (now < reminderTime) continue;

            const timeStr = scheduledAt.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
            const dateStr = scheduledAt.toLocaleDateString('es-AR');

            const { data: agentProfile } = await supabase
                .from('profiles')
                .select('full_name, phone, email')
                .eq('id', visit.agent_id)
                .single();

            // 1. Process Agent Reminders
            if (!visit.agent_reminder_sent && visit.agent_id) {
                const agentChannels = visit.agent_reminder_channels ?? ['in-app'];
                
                // Variables para el agente: {nombre} es el Agente
                const agentVars = buildVisitTemplateVars({
                    leadName: visit.lead?.name, // El cliente sigue estando disponible como {agente} si se quiere, pero por ahora lo dejamos así
                    propertyTitle: visit.property?.title,
                    scheduledDate: dateStr,
                    scheduledTime: timeStr,
                    agentName: agentProfile?.full_name
                });
                // Sobrescribimos nombre para que sea el agente
                agentVars.nombre = agentProfile?.full_name || 'Agente';
                // Añadimos cliente como variable extra
                agentVars.cliente = visit.lead?.name || 'Cliente';

                const agentMsg = replaceTemplateVariables("Hola {nombre}, recordá tu visita con el cliente {cliente} por la propiedad {propiedad} hoy a las {hora}.", agentVars);

                if (agentChannels.includes('in-app')) {
                    await createNotification(supabase, tenantId, visit.agent_id, {
                        title: 'Recordatorio de Visita',
                        message: agentMsg,
                        type: 'visit_reminder',
                        related_id: visit.id,
                    });
                }

                if (agentChannels.includes('whatsapp') && agentProfile?.phone && settings?.whatsapp_api_token) {
                    await sendWhatsAppMessage({
                        apiToken: settings.whatsapp_api_token,
                        phoneNumberId: settings.whatsapp_phone_id
                    }, agentProfile.phone, agentMsg);
                }

                await supabase.from('visits').update({ agent_reminder_sent: true }).eq('id', visit.id);
            }

            // 2. Process Client Reminders
            if (!visit.client_reminder_sent && visit.lead) {
                const clientChannels = visit.client_reminder_channels ?? [];
                
                // Variables para el cliente: {nombre} es el Lead
                const clientVars = buildVisitTemplateVars({
                    leadName: visit.lead.name,
                    propertyTitle: visit.property?.title,
                    scheduledDate: dateStr,
                    scheduledTime: timeStr,
                    agentName: agentProfile?.full_name
                });
                // nombre ya es leadName por defecto en buildVisitTemplateVars

                const clientMsg = replaceTemplateVariables("Hola {nombre}, te recordamos tu visita para la propiedad {propiedad} hoy a las {hora}. ¡Te esperamos!", clientVars);

                if (clientChannels.includes('whatsapp') && visit.lead.phone && settings?.whatsapp_api_token) {
                    await sendWhatsAppMessage({
                        apiToken: settings.whatsapp_api_token,
                        phoneNumberId: settings.whatsapp_phone_id
                    }, visit.lead.phone, clientMsg);
                }

                if (clientChannels.includes('email') && visit.lead.email && settings?.smtp_host) {
                    const html = buildReminderEmailHtml({
                        title: 'Recordatorio de Visita',
                        greeting: `Hola ${visit.lead.name}`,
                        body: clientMsg
                    });
                    await sendEmail({
                        host: settings.smtp_host,
                        port: settings.smtp_port,
                        user: settings.smtp_user,
                        pass: settings.smtp_pass,
                        fromName: settings.smtp_from_name,
                        fromEmail: settings.smtp_from_email
                    }, visit.lead.email, 'Recordatorio de Visita', html);
                }

                await supabase.from('visits').update({ client_reminder_sent: true }).eq('id', visit.id);
            }
        } catch (err) {
            console.error(`[REMINDERS] Error processing visit reminder ${visit.id}:`, err);
        }
    }
}

async function createNotification(supabase: any, tenantId: string, userId: string, data: any) {
    const { error } = await supabase
        .from('notifications')
        .insert({ tenant_id: tenantId, user_id: userId, ...data });
    if (error) console.error('[REMINDERS] Notification error:', error.message);
}

export async function getNotifications() {
    const supabase = await createClient();
    const { data } = await supabase.from('notifications').select('*').order('created_at', { ascending: false }).limit(20);
    return data ?? [];
}

export async function markNotificationAsRead(id: string) {
    const supabase = await createClient();
    await supabase.from('notifications').update({ read: true }).eq('id', id);
    return { success: true };
}
