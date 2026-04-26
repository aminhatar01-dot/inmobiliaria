"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { Visit } from "@inmocms/shared"

export async function getVisits(): Promise<any[]> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    const { data, error } = await supabase
        .from("visits")
        .select(`
            *,
            lead:leads(name, email, phone),
            property:properties(title, address, price, currency)
        `)
        .eq("tenant_id", tenantId)
        .order("scheduled_at", { ascending: true })

    if (error) {
        console.error("Error fetching visits:", error)
        return []
    }

    return data
}

import { createGoogleCalendarEvent } from '@/lib/services/calendar';

export async function createVisit(formData: Partial<Visit>) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized or no tenant assigned")

    const { data, error } = await supabase
        .from("visits")
        .insert([{
            ...formData,
            tenant_id: tenantId,
            status: formData.status || "scheduled"
        }])
        .select(`
            *,
            lead:leads(name, email),
            property:properties(title, address)
        `)
        .single()

    if (error) {
        console.error("Error creating visit:", error)
        throw new Error(error.message)
    }

    // -- INICIO SINCRONIZACIÓN GOOGLE CALENDAR --
    if (data.scheduled_at) {
        const { data: settings } = await supabase
            .from('tenant_communication_settings')
            .select('google_access_token')
            .eq('tenant_id', tenantId)
            .maybeSingle();

        if (settings?.google_access_token) {
            const startDate = new Date(data.scheduled_at);
            const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hora por defecto
            
            const leadName = data.lead?.name ? ` con ${data.lead.name}` : '';
            const propTitle = data.property?.title ? ` - ${data.property.title}` : '';
            
            const eventDesc = [
                `Visita gestionada desde InmoCMS.`,
                data.lead?.name ? `Cliente: ${data.lead.name}` : '',
                data.lead?.email ? `Email: ${data.lead.email}` : '',
                data.property?.title ? `Propiedad: ${data.property.title}` : '',
                data.notes ? `\nNotas: ${data.notes}` : ''
            ].filter(Boolean).join('\n');

            await createGoogleCalendarEvent(settings.google_access_token, {
                summary: `[InmoCMS] Visita${leadName}${propTitle}`,
                description: eventDesc,
                location: data.property?.address || undefined,
                start: { dateTime: startDate.toISOString(), timeZone: 'America/Argentina/Buenos_Aires' },
                end: { dateTime: endDate.toISOString(), timeZone: 'America/Argentina/Buenos_Aires' },
                attendees: data.lead?.email ? [{ email: data.lead.email }] : undefined
            });
        }
    }
    // -- FIN SINCRONIZACIÓN GOOGLE CALENDAR --

    revalidatePath("/visitas")
    revalidatePath("/tareas") // Visitas might show up in agenda
    return data
}

export async function updateVisitStatus(id: string, status: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { data, error } = await supabase
        .from("visits")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", id)
        .eq("tenant_id", tenantId)
        .select()
        .single()

    if (error) {
        console.error(`Error updating visit status ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/visitas")
    return data
}

export async function updateVisit(id: string, formData: Partial<Visit>) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { data, error } = await supabase
        .from("visits")
        .update({
            ...formData,
            updated_at: new Date().toISOString()
        })
        .eq("id", id)
        .eq("tenant_id", tenantId)
        .select()
        .single()

    if (error) {
        console.error(`Error updating visit ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/visitas")
    return data
}

export async function deleteVisit(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("visits")
        .delete()
        .eq("id", id)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error(`Error deleting visit ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/visitas")
}
