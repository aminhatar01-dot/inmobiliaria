"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { Lead } from "@inmocms/shared"

export async function getLeads(): Promise<Lead[]> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    const { data, error } = await supabase
        .from("leads")
        .select("*")
        .eq("tenant_id", tenantId)
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching leads:", error)
        return []
    }

    return data
}

export async function createLead(formData: Partial<Lead>) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized or no tenant assigned")

    const { data, error } = await supabase
        .from("leads")
        .insert([{
            ...formData,
            tenant_id: tenantId,
            status: formData.status || "new",
            scoring: formData.scoring || 0
        }])
        .select()
        .single()

    if (error) {
        console.error("Error creating lead:", error)
        throw new Error(error.message)
    }

    revalidatePath("/leads")
    return data
}

export async function updateLeadStatus(id: string, status: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { data, error } = await supabase
        .from("leads")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", id)
        .eq("tenant_id", tenantId)
        .select()
        .single()

    if (error) {
        console.error(`Error updating lead status ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/leads")
    revalidatePath("/pipeline")
    return data
}

export async function updateLead(id: string, formData: Partial<Lead>) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { data, error } = await supabase
        .from("leads")
        .update({
            ...formData,
            updated_at: new Date().toISOString()
        })
        .eq("id", id)
        .eq("tenant_id", tenantId)
        .select()
        .single()

    if (error) {
        console.error(`Error updating lead ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/leads")
    revalidatePath(`/leads/${id}`)
    return data
}

export async function deleteLead(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("leads")
        .delete()
        .eq("id", id)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error(`Error deleting lead ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/leads")
}

export async function getLeadById(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return null

    const { data, error } = await supabase
        .from("leads")
        .select("*")
        .eq("id", id)
        .eq("tenant_id", tenantId)
        .single()

    if (error) {
        console.error(`Error fetching lead ${id}:`, error)
        return null
    }

    return data
}

