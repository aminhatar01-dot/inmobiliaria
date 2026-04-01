'use server';

import { createClient, getTenantId } from '@/lib/supabase/server';
import { sendMessage, getOrCreateLeadConversation } from './messages';

/**
 * Main entry point for processing all pending reminders.
 * Runs task and visit reminders for the current tenant.
 * Designed to be called fire-and-forget: processPendingReminders().catch(console.error)
 */
export async function processPendingReminders() {
    try {
        const supabase = await createClient();
        const tenantId = await getTenantId(supabase);
        if (!tenantId) return;

        await Promise.allSettled([
            processTaskReminders(supabase, tenantId),
            processVisitReminders(supabase, tenantId),
        ]);
    } catch (err) {
        // Never throw from background processes – just log.
        console.error('[REMINDERS] Fatal error in processPendingReminders:', err);
    }
}

async function processTaskReminders(supabase: any, tenantId: string) {
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

            if (channels.includes('in-app') && task.assigned_to) {
                await createNotification(supabase, tenantId, task.assigned_to, {
                    title: 'Recordatorio de Tarea',
                    message: `Tienes la tarea "${task.title}" programada para las ${dueDate.toLocaleTimeString('es-AR')}.`,
                    type: 'task_reminder',
                    related_id: task.id,
                });
            }

            if (channels.includes('whatsapp') || channels.includes('email')) {
                console.log(`[REMINDERS][TASK] ${task.title} → agent ${task.assigned_to} via ${channels.filter((c: string) => c !== 'in-app').join(', ')}`);
            }

            // Mark as sent (best-effort)
            const { error: updateError } = await supabase
                .from('tasks')
                .update({ agent_reminder_sent: true })
                .eq('id', task.id);

            if (updateError) {
                console.error(`[REMINDERS] Could not mark task ${task.id} as sent:`, updateError.message);
            }
        } catch (taskErr) {
            console.error(`[REMINDERS] Error processing task reminder for ${task.id}:`, taskErr);
        }
    }
}

async function processVisitReminders(supabase: any, tenantId: string) {
    const now = new Date();

    const { data: visits, error } = await supabase
        .from('visits')
        .select(`
            id, scheduled_at, reminder_hours,
            agent_id, agent_reminder_sent, agent_reminder_channels,
            client_reminder_sent, client_reminder_channels,
            lead:leads(id, name),
            property:properties(title)
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

            const leadName = visit.lead?.name ?? 'Lead desconocido';
            const propertyTitle = visit.property?.title ?? 'Propiedad';
            const timeStr = scheduledAt.toLocaleTimeString('es-AR');

            // 1. Agent Notification
            if (!visit.agent_reminder_sent) {
                const agentChannels = visit.agent_reminder_channels ?? ['in-app'];

                if (agentChannels.includes('in-app') && visit.agent_id) {
                    await createNotification(supabase, tenantId, visit.agent_id, {
                        title: 'Recordatorio de Visita',
                        message: `Tienes una visita con ${leadName} para "${propertyTitle}" a las ${timeStr}.`,
                        type: 'visit_reminder',
                        related_id: visit.id,
                    });
                }

                if (agentChannels.includes('whatsapp') || agentChannels.includes('email')) {
                    console.log(`[REMINDERS][VISIT] ${propertyTitle} → agent ${visit.agent_id} via ${agentChannels.filter((c: string) => c !== 'in-app').join(', ')}`);
                }

                await supabase.from('visits').update({ agent_reminder_sent: true }).eq('id', visit.id);
            }

            // 2. Client Notification via messaging system
            if (!visit.client_reminder_sent) {
                const clientChannels = visit.client_reminder_channels ?? [];

                if (clientChannels.length > 0 && visit.lead?.id) {
                    const msg = `Hola ${leadName}, te recordamos tu visita para "${propertyTitle}" hoy a las ${timeStr}. ¡Te esperamos!`;
                    try {
                        const conversationId = await getOrCreateLeadConversation(visit.lead.id, false);
                        if (conversationId) {
                            await sendMessage(conversationId, msg, false);
                        }
                    } catch (msgErr) {
                        console.error('[REMINDERS] Could not send client message:', msgErr);
                    }
                }

                await supabase.from('visits').update({ client_reminder_sent: true }).eq('id', visit.id);
            }
        } catch (visitErr) {
            console.error(`[REMINDERS] Error processing visit reminder for ${visit.id}:`, visitErr);
        }
    }
}

/**
 * Creates a notification record. Silently fails if the table is unavailable
 * so that a schema issue doesn't break the entire reminder pipeline.
 */
async function createNotification(supabase: any, tenantId: string, userId: string, data: {
    title: string;
    message: string;
    type?: string;
    related_id?: string;
}) {
    if (!userId) {
        console.warn('[REMINDERS] createNotification called without userId – skipping.');
        return;
    }

    const { error } = await supabase
        .from('notifications')
        .insert({ tenant_id: tenantId, user_id: userId, ...data });

    if (error) {
        // Log but never throw – a missing table or RLS issue should not crash reminders.
        console.error('[REMINDERS] Error creating notification:', error.message);
    }
}

// ---------------------------------------------------------------------------
// Public API for the dashboard notification UI
// ---------------------------------------------------------------------------

export async function getNotifications() {
    try {
        const supabase = await createClient();
        const tenantId = await getTenantId(supabase);
        if (!tenantId) return [];

        const { data, error } = await supabase
            .from('notifications')
            .select('*')
            .eq('tenant_id', tenantId)
            .order('created_at', { ascending: false })
            .limit(20);

        if (error) {
            // Table may not exist yet – return empty gracefully.
            console.warn('[NOTIFICATIONS] Could not fetch notifications:', error.message);
            return [];
        }

        return data ?? [];
    } catch (err) {
        console.error('[NOTIFICATIONS] Unexpected error in getNotifications:', err);
        return [];
    }
}

export async function markNotificationAsRead(id: string) {
    try {
        const supabase = await createClient();
        const { error } = await supabase
            .from('notifications')
            .update({ read: true })
            .eq('id', id);

        if (error) {
            console.error('[NOTIFICATIONS] Error marking as read:', error.message);
            return { success: false };
        }

        return { success: true };
    } catch (err) {
        console.error('[NOTIFICATIONS] Unexpected error in markNotificationAsRead:', err);
        return { success: false };
    }
}
