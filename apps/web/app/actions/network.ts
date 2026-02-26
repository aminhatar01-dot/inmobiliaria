"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function inviteNetworkAgent(email: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    // Check if invitation already exists
    const { data: existing } = await supabase
        .from("network_invitations")
        .select("id, status")
        .eq("sender_tenant_id", tenantId)
        .eq("recipient_email", email)
        .single()

    if (existing) {
        if (existing.status === 'pending') {
            throw new Error("Ya existe una invitación pendiente para este correo")
        }
        if (existing.status === 'accepted') {
            throw new Error("Este agente ya es parte de tu red")
        }
    }

    const { error } = await supabase
        .from("network_invitations")
        .insert({
            sender_tenant_id: tenantId,
            recipient_email: email,
            status: 'pending'
        })

    if (error) {
        console.error("Error creating invitation:", error)
        throw new Error("Error al crear la invitación")
    }

    revalidatePath("/agentes")
}

export async function getNetworkStatus() {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return { partners: [], sentInvitations: [], receivedInvitations: [] }

    // Get active partnerships
    const { data: partnerships } = await supabase
        .from("tenant_partnerships")
        .select(`
            *,
            requester:requester_tenant_id(id, name),
            responder:responder_tenant_id(id, name)
        `)
        .or(`requester_tenant_id.eq.${tenantId},responder_tenant_id.eq.${tenantId}`)
        .eq("status", "active")

    // Get sent invitations
    const { data: sentInvitations } = await supabase
        .from("network_invitations")
        .select("*")
        .eq("sender_tenant_id", tenantId)
        .order("created_at", { ascending: false })

    // Get received invitations (based on user email)
    const { data: { user } } = await supabase.auth.getUser()
    let receivedInvitations: any[] = []

    if (user?.email) {
        const { data } = await supabase
            .from("network_invitations")
            .select(`
                *,
                sender:sender_tenant_id(id, name)
            `)
            .eq("recipient_email", user.email)
            .eq("status", "pending")

        receivedInvitations = data || []
    }

    // Format partners list
    const partners = partnerships?.map(p => {
        const isRequester = p.requester_tenant_id === tenantId
        const partner = isRequester ? p.responder : p.requester
        return {
            partnershipId: p.id,
            partnerId: partner?.id || 'unknown',
            partnerName: partner?.name || 'Inmobiliaria Desconocida',
            connectedAt: p.created_at
        }
    }) || []

    return {
        partners,
        sentInvitations: sentInvitations || [],
        receivedInvitations
    }
}

export async function acceptNetworkInvitation(invitationId: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    // Get invitation
    const { data: invitation } = await supabase
        .from("network_invitations")
        .select("*")
        .eq("id", invitationId)
        .single()

    if (!invitation) throw new Error("Invitación no encontrada")
    if (invitation.status !== 'pending') throw new Error("Invitación no válida")

    // Start transaction (simplified as separate calls for Supabase implementation)

    // 1. Create partnership
    const { error: partnershipError } = await supabase
        .from("tenant_partnerships")
        .insert({
            requester_tenant_id: invitation.sender_tenant_id,
            responder_tenant_id: tenantId,
            status: 'active'
        })

    if (partnershipError) {
        console.error("Error creating partnership:", partnershipError)
        throw new Error("Error al aceptar la invitación")
    }

    // 2. Update invitation status
    await supabase
        .from("network_invitations")
        .update({ status: 'accepted' })
        .eq("id", invitationId)

    revalidatePath("/agentes")
}

export async function getNetworkProperties() {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    // RLS "Partners can view shared properties" handles the logic.
    // We just select shared properties regardless of tenant, RLS filters to only partners
    const { data, error } = await supabase
        .from("properties")
        .select(`
            *,
            property_media (*),
            tenant:tenant_id (name)
        `)
        .eq("is_shared", true)
        .neq("tenant_id", tenantId) // Exclude my own properties which might be shared
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching network properties:", error)
        return []
    }

    return data
}
