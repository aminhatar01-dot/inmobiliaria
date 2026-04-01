"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { Campaign, AutomationRule } from "@inmocms/shared"

/**
 * CAMPAIGNS
 */

export async function getCampaigns(): Promise<Campaign[]> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    const { data, error } = await supabase
        .from("campaigns")
        .select("*")
        .eq("tenant_id", tenantId)
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching campaigns:", error)
        return []
    }

    return data
}

export async function getCampaignById(id: string): Promise<Campaign | null> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return null

    const { data, error } = await supabase
        .from("campaigns")
        .select("*")
        .eq("id", id)
        .eq("tenant_id", tenantId)
        .single()

    if (error) {
        console.error(`Error fetching campaign ${id}:`, error)
        return null
    }

    return data
}

export async function createCampaign(formData: FormData) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const campaignData = {
        tenant_id: tenantId,
        name: formData.get("name") as string,
        type: formData.get("type") as string,
        status: "draft",
        content: formData.get("content") ? JSON.parse(formData.get("content") as string) : {},
        target_audience: formData.get("target_audience") ? JSON.parse(formData.get("target_audience") as string) : {}
    }

    const { data, error } = await supabase
        .from("campaigns")
        .insert([campaignData])
        .select()
        .single()

    if (error) {
        console.error("Error creating campaign:", error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/campanas")
    return data
}

export async function updateCampaign(id: string, formData: FormData) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const updateData: Partial<Campaign> = {
        name: formData.get("name") as string || undefined,
        type: formData.get("type") as any || undefined,
        status: formData.get("status") as any || undefined,
        updated_at: new Date().toISOString()
    }

    // Remove undefined values
    Object.keys(updateData).forEach(key =>
        updateData[key as keyof Campaign] === undefined && delete updateData[key as keyof Campaign]
    )

    const { data, error } = await supabase
        .from("campaigns")
        .update(updateData)
        .eq("id", id)
        .eq("tenant_id", tenantId)
        .select()
        .single()

    if (error) {
        console.error(`Error updating campaign ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/campanas")
    revalidatePath(`/marketing/campanas/${id}`)
    return data
}

export async function deleteCampaign(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("campaigns")
        .delete()
        .eq("id", id)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error(`Error deleting campaign ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/campanas")
}

/**
 * AUTOMATION RULES
 */

export async function getAutomationRules(): Promise<AutomationRule[]> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    const { data, error } = await supabase
        .from("automation_rules")
        .select("*")
        .eq("tenant_id", tenantId)
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching automation rules:", error)
        return []
    }

    return data
}

export async function createAutomationRule(formData: FormData) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const targetType = (formData.get("target_type") as string) || "all"
    const targetId = formData.get("target_id") as string | null
    const templatesRaw = formData.get("templates") as string | null

    const ruleData = {
        tenant_id: tenantId,
        name: formData.get("name") as string,
        trigger_type: formData.get("trigger_type") as string,
        trigger_condition: formData.get("trigger_condition") ? JSON.parse(formData.get("trigger_condition") as string) : {},
        action_type: formData.get("action_type") as string,
        action_config: formData.get("action_config") ? JSON.parse(formData.get("action_config") as string) : {},
        is_active: true,
        target_type: targetType,
        target_id: targetType !== "all" && targetId ? targetId : null,
        templates: templatesRaw ? JSON.parse(templatesRaw) : []
    }

    const { data, error } = await supabase
        .from("automation_rules")
        .insert([ruleData])
        .select()
        .single()

    if (error) {
        console.error("Error creating automation rule:", error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/automatizaciones")
    return data
}


export async function toggleAutomationRule(id: string, isActive: boolean) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { data, error } = await supabase
        .from("automation_rules")
        .update({ is_active: isActive, updated_at: new Date().toISOString() })
        .eq("id", id)
        .eq("tenant_id", tenantId)
        .select()
        .single()

    if (error) {
        console.error(`Error toggling automation rule ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/automatizaciones")
    return data
}

export async function deleteAutomationRule(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("automation_rules")
        .delete()
        .eq("id", id)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error(`Error deleting automation rule ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/automatizaciones")
}
