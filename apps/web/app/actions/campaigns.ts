"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { Campaign } from "@inmocms/shared"

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

export async function dispatchCampaign(
    leadIds: string[],
    messageContent: string,
    channel: "email" | "whatsapp"
) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    const { data: { user } } = await supabase.auth.getUser()

    if (!tenantId || !user) throw new Error("Unauthorized")

    // Import this dynamically or at the top. Let's do it directly here for simplicity if needed
    // But better to just implement the message injection here to avoid circular logic
    
    let successCount = 0

    for (const leadId of leadIds) {
        try {
            // Verify lead belongs to tenant
            const { data: lead } = await supabase
                .from("leads")
                .select("id")
                .eq("id", leadId)
                .eq("tenant_id", tenantId)
                .single()

            if (!lead) continue

            // Find or create conversation
            const { data: existingConversation } = await supabase
                .from("conversations")
                .select("id")
                .eq("lead_id", leadId)
                .single()

            let conversationId = existingConversation?.id

            if (!conversationId) {
                const { data: newConversation, error: convError } = await supabase
                    .from("conversations")
                    .insert({ tenant_id: tenantId, lead_id: leadId })
                    .select()
                    .single()
                
                if (convError) continue
                conversationId = newConversation.id

                // Add participant
                await supabase
                    .from("conversation_participants")
                    .insert({ conversation_id: conversationId, user_id: user.id })
            }
            
            if (!conversationId) continue

            // Inject the system message to simulate the outgoing campaign
            const { error: messageError } = await supabase
                .from("messages")
                .insert({
                    conversation_id: conversationId,
                    sender_id: user.id, // The agent sent it
                    content: `[Campaña de Captación - ${channel.toUpperCase()}]\n\n${messageContent.trim()}`
                })

            if (!messageError) {
                successCount++
            } else {
                console.error(`Failed to record message for lead ${leadId}`, messageError)
            }
        } catch (error) {
            console.error(`Error processing lead ${leadId}`, error)
        }
    }

    revalidatePath("/mensajes")
    revalidatePath("/leads")

    return { successCount, totalRequested: leadIds.length }
}
