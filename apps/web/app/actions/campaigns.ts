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


import nodemailer from "nodemailer"

export async function dispatchCampaign(
    leadIds: string[],
    messageContent: string,
    channel: "email" | "whatsapp"
) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    const { data: { user } } = await supabase.auth.getUser()

    if (!tenantId || !user) throw new Error("Unauthorized")

    // Fetch communication settings
    const { data: commSettings } = await supabase
        .from("tenant_communication_settings")
        .select("*")
        .eq("tenant_id", tenantId)
        .single()

    let successCount = 0
    const results: any[] = []



    // Helper to personalize message
    const personalize = (text: string, name: string) => {
        if (!text) return ""
        const cleanName = name || 'Cliente'
        
        // Supports [nombre], (nombre), {nombre}, <nombre>, and variations with spaces or capital letters
        // Also supports the literal string "Nombre" if surrounded by non-alphanumeric chars
        return text
            .replace(/[\(\[\{\<]\s*nombre\s*[\)\]\}\>]/gi, cleanName)
            .replace(/\[\s*Nombre del Lead\s*\]/gi, cleanName)
            .replace(/\[\s*Nombre\s*\]/gi, cleanName)
    }

    // Update results to include personalized messages for each lead
    if (channel === 'whatsapp' && (!commSettings || commSettings.whatsapp_mode === 'link')) {
        const { data: leads } = await supabase
            .from("leads")
            .select("id, name, phone")
            .in("id", leadIds)
            .eq("tenant_id", tenantId)

        return { 
            mode: 'sequential', 
            channel: 'whatsapp',
            leads: leads?.map(l => ({
                id: l.id,
                name: l.name,
                phone: l.phone,
                message: personalize(messageContent, l.name)
            })) || []
        }
    }

    // For Email or automated WhatsApp
    const transport = channel === 'email' && commSettings?.smtp_host ? nodemailer.createTransport({
        host: commSettings.smtp_host,
        port: commSettings.smtp_port,
        secure: commSettings.smtp_port === 465,
        auth: {
            user: commSettings.smtp_user,
            pass: commSettings.smtp_pass
        }
    }) : null

    for (const leadId of leadIds) {
        try {
            const { data: lead } = await supabase
                .from("leads")
                .select("id, name, email, phone")
                .eq("id", leadId)
                .eq("tenant_id", tenantId)
                .single()

            if (!lead) continue

            const personalizedMessage = personalize(messageContent, lead.name)
            let sent = false

            if (channel === 'email' && transport && lead.email) {
                try {
                    await transport.sendMail({
                        from: `"${commSettings?.smtp_from_name || 'Agencia Inmobiliaria'}" <${commSettings?.smtp_from_email || commSettings?.smtp_user}>`,
                        to: lead.email,
                        subject: "Información de Interés - Inmobiliaria",
                        text: personalizedMessage,
                        html: personalizedMessage.replace(/\n/g, '<br/>')
                    })
                    sent = true
                } catch (err) {
                    console.error(`Failed to send email to ${lead.email}:`, err)
                }
            } else if (channel === 'email' && commSettings?.resend_api_key && lead.email) {
                // Fallback to Resend API if configured
                try {
                    const res = await fetch('https://api.resend.com/emails', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${commSettings.resend_api_key}`
                        },
                        body: JSON.stringify({
                            from: commSettings.smtp_from_email || 'onboarding@resend.dev',
                            to: lead.email,
                            subject: "Información de Interés",
                            text: personalizedMessage
                        })
                    })
                    if (res.ok) sent = true
                } catch (err) {
                    console.error("Resend API failed:", err)
                }
            }

            // Record in CRM
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
                
                if (!convError) {
                    conversationId = newConversation.id
                    await supabase
                        .from("conversation_participants")
                        .insert({ conversation_id: conversationId, user_id: user.id })
                }
            }
            
            if (conversationId) {
                await supabase
                    .from("messages")
                    .insert({
                        conversation_id: conversationId,
                        sender_id: user.id,
                        content: `[Campaña de Captación - ${channel.toUpperCase()}]\n\n${personalizedMessage.trim()}`
                    })
                
                if (channel === 'email') {
                    successCount += sent ? 1 : 0
                } else {
                    successCount++ 
                }
            }
        } catch (error) {
            console.error(`Error processing lead ${leadId}`, error)
        }
    }

    revalidatePath("/mensajes")
    revalidatePath("/leads")

    return { successCount, totalRequested: leadIds.length, mode: 'direct' }
}
