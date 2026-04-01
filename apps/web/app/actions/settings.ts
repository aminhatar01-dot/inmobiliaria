"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export type AgencySettings = {
    id: string
    name: string
    slug: string
    plan: string
    default_currency: string
    logo_url?: string
    phone?: string
    email?: string
    address?: string
    website?: string
    social_links?: any
}

export type Branch = {
    id: string
    name: string
    address?: string
    phone?: string
    email?: string
}

export async function getAgencySettings(): Promise<AgencySettings | null> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return null

    const { data, error } = await supabase
        .from("tenants")
        .select("*")
        .eq("id", tenantId)
        .single()

    if (error) {
        console.error("Error fetching agency settings:", error)
        return null
    }

    return data
}

export async function updateAgencySettings(settings: Partial<AgencySettings>) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("tenants")
        .update(settings)
        .eq("id", tenantId)

    if (error) {
        console.error("Error updating agency settings:", error)
        throw new Error(error.message)
    }

    revalidatePath("/ajustes")
}

export async function getBranches(): Promise<Branch[]> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    const { data, error } = await supabase
        .from("branches")
        .select("*")
        .eq("tenant_id", tenantId)
        .order("name")

    if (error) {
        console.error("Error fetching branches:", error)
        return []
    }

    return data
}

export async function createBranch(branch: Omit<Branch, 'id'>) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("branches")
        .insert({ ...branch, tenant_id: tenantId })

    if (error) {
        console.error("Error creating branch:", error)
        throw new Error(error.message)
    }

    revalidatePath("/ajustes")
}

export async function updateBranch(id: string, branch: Partial<Branch>) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("branches")
        .update(branch)
        .eq("id", id)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error("Error updating branch:", error)
        throw new Error(error.message)
    }

    revalidatePath("/ajustes")
}

export async function getNotificationSettings() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return null

    const { data, error } = await supabase
        .from("profiles")
        .select("notification_preferences")
        .eq("id", user.id)
        .single()

    if (error) {
        console.error("Error fetching notification settings:", error)
        return null
    }

    return data.notification_preferences
}

export async function updateNotificationSettings(preferences: any) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("profiles")
        .update({ notification_preferences: preferences })
        .eq("id", user.id)

    if (error) {
        console.error("Error updating notification settings:", error)
        throw new Error(error.message)
    }

    revalidatePath("/ajustes")
}

export async function deleteBranch(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("branches")
        .delete()
        .eq("id", id)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error("Error deleting branch:", error)
        throw new Error(error.message)
    }

    revalidatePath("/ajustes")
}
