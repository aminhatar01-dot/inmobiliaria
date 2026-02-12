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
            lead:leads(name),
            property:properties(title)
        `)
        .single()

    if (error) {
        console.error("Error creating visit:", error)
        throw new Error(error.message)
    }

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
