"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { AutomationRule } from "@inmocms/shared"

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

    const ruleData = {
        tenant_id: tenantId,
        name: formData.get("name") as string,
        trigger_type: formData.get("trigger_type") as string,
        trigger_condition: formData.get("trigger_condition") ? JSON.parse(formData.get("trigger_condition") as string) : {},
        action_type: formData.get("action_type") as string,
        action_config: formData.get("action_config") ? JSON.parse(formData.get("action_config") as string) : {},
        is_active: true
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
