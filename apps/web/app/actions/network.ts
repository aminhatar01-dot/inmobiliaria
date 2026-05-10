"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import crypto from "crypto"

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
            // Verificar si la partnership sigue activa
            const { data: partnership } = await supabase
                .from("tenant_partnerships")
                .select("id")
                .or(`requester_tenant_id.eq.${tenantId},responder_tenant_id.eq.${tenantId}`)
                .eq("status", "active")
                .limit(1)
            
            if (partnership && partnership.length > 0) {
                throw new Error("Este agente ya es parte de tu red")
            }
            // Partnership no existe → resetear para permitir re-invitar
            await supabase
                .from("network_invitations")
                .update({ status: 'cancelled' })
                .eq("id", existing.id)
            // Continuar con la nueva invitación
        }
    }

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error("User not found")

    const { data: invite, error } = await supabase
        .from("network_invitations")
        .insert({
            sender_tenant_id: tenantId,
            sender_id: user.id,
            recipient_email: email,
            token: crypto.randomUUID(),
            status: 'pending'
        })
        .select('token')
        .single()

    if (error) {
        console.error("Error creating invitation:", error)
        throw new Error("Error al crear la invitación")
    }

    // Enviar correo de invitación
    try {
        const { data: commSettings } = await supabase
            .from("tenant_communication_settings")
            .select("*")
            .eq("tenant_id", tenantId)
            .single()

        if (commSettings && (commSettings.resend_api_key || commSettings.smtp_host || commSettings.google_access_token)) {
            const { data: senderProfile } = await supabase
                .from("profiles")
                .select("full_name")
                .eq("id", user.id)
                .single()

            const { sendEmail } = await import("@/lib/services/email")
            const inviteLink = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/join?token=${invite?.token}`
            
            const html = `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 12px;">
                    <h2 style="color: #4f46e5;">Hola de parte de InmoCMS Network</h2>
                    <p><strong>${senderProfile?.full_name || 'Un agente'}</strong> te ha invitado a formar parte de su red de partners en InmoCMS.</p>
                    <p>Al ser partners, podrán compartir propiedades y colaborar en tiempo real para cerrar más ventas.</p>
                    <div style="margin: 30px 0; text-align: center;">
                        <a href="${inviteLink}" style="background: #4f46e5; color: white; padding: 14px 28px; text-decoration: none; border-radius: 10px; font-weight: bold; display: inline-block;">Unirme a la Red</a>
                    </div>
                    <p style="color: #666; font-size: 14px;">Si ya tienes una cuenta en InmoCMS, simplemente inicia sesión y podrás ver esta invitación en tu sección de Agentes > Red.</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="color: #999; font-size: 12px; text-align: center;">Enviado por InmoCMS Network</p>
                </div>
            `

            await sendEmail({
                host: commSettings.smtp_host,
                port: commSettings.smtp_port,
                user: commSettings.smtp_user,
                pass: commSettings.smtp_pass,
                fromName: commSettings.smtp_from_name || "InmoCMS Network",
                fromEmail: commSettings.smtp_from_email || "no-reply@inmocms.com",
                resendApiKey: commSettings.resend_api_key,
                googleAccessToken: commSettings.google_access_token,
                googleRefreshToken: commSettings.google_refresh_token,
                tenantId
            }, email, "Invitación a Red de Partners - InmoCMS", html)
        }
    } catch (emailErr) {
        console.error("Error sending network invitation email:", emailErr)
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

    // Get invitation (usamos admin client para evitar bloqueos de RLS)
    const { createAdminClient } = await import("@/lib/supabase/server")
    const adminClient = await createAdminClient()
    const { data: invitation } = await adminClient
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

    // 3. Automatically create a conversation between the sender and the acceptor
    let senderUserId = invitation.sender_id

    // Si sender_id es NULL (migración pendiente), buscar cualquier usuario del tenant emisor
    if (!senderUserId) {
        const { data: senderProfile } = await adminClient
            .from("profiles")
            .select("id")
            .eq("tenant_id", invitation.sender_tenant_id)
            .limit(1)
            .single()
        senderUserId = senderProfile?.id
    }

    if (senderUserId) {
        const { getOrCreateConversation } = await import("./messages")
        await getOrCreateConversation(senderUserId)
    }

    revalidatePath("/agentes")
    revalidatePath("/mensajes")
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