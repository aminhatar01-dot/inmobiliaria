"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import type { Conversation, Message, ConversationWithDetails, MessageWithSender } from "@inmocms/shared"

/**
 * Obtener todas las conversaciones del usuario actual
 * con detalles de participantes y último mensaje
 */
export async function getConversations(): Promise<ConversationWithDetails[]> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    const { data: { user } } = await supabase.auth.getUser()

    if (!tenantId || !user) return []

    // Obtener conversaciones en las que participa el usuario
    const { data: participations, error: participationError } = await supabase
        .from("conversation_participants")
        .select(`
            conversation_id,
            last_read_at,
            conversations (
                id,
                tenant_id,
                created_at,
                updated_at,
                lead_id
            )
        `)
        .eq("user_id", user.id)

    if (participationError) {
        console.error("Error fetching conversations:", participationError)
        return []
    }

    const conversations: ConversationWithDetails[] = []

    for (const participation of participations || []) {
        const conv = participation.conversations as unknown as Conversation
        if (!conv) continue

        // Obtener otros participantes
        const { data: participants, error: participantsError } = await supabase
            .from("conversation_participants")
            .select(`
                user_id,
                joined_at,
                profiles (
                    id,
                    email,
                    full_name,
                    avatar_url
                )
            `)
            .eq("conversation_id", conv.id)
            .neq("user_id", user.id)

        // Obtener último mensaje
        const { data: lastMessage } = await supabase
            .from("messages")
            .select(`
                id,
                conversation_id,
                sender_id,
                content,
                created_at,
                profiles:sender_id (
                    id,
                    email,
                    full_name,
                    avatar_url
                )
            `)
            .eq("conversation_id", conv.id)
            .order("created_at", { ascending: false })
            .limit(1)
            .single()

        // Calcular mensajes no leídos
        const { count: unreadCount } = await supabase
            .from("messages")
            .select("*", { count: 'exact', head: true })
            .eq("conversation_id", conv.id)
            .neq("sender_id", user.id)
            .gt("created_at", participation.last_read_at)

        const otherUser = participants?.[0]?.profiles as any

        // Fetch lead details if it's a client conversation
        let leadData = null
        if (conv.lead_id) {
            const { data: lead } = await supabase
                .from("leads")
                .select("id, name, email, phone, status")
                .eq("id", conv.lead_id)
                .single()
            leadData = lead
        }

        conversations.push({
            ...conv,
            last_message: lastMessage ? {
                ...lastMessage,
                sender: lastMessage.profiles as any
            } : undefined,
            unread_count: unreadCount || 0,
            other_user: otherUser,
            lead: leadData as any
        })
    }

    // Ordenar por última actividad
    conversations.sort((a, b) => {
        const aTime = a.last_message?.created_at || a.updated_at
        const bTime = b.last_message?.created_at || b.updated_at
        return new Date(bTime).getTime() - new Date(aTime).getTime()
    })

    return conversations
}

/**
 * Obtener mensajes de una conversación específica
 */
export async function getMessages(conversationId: string): Promise<MessageWithSender[]> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return []

    // Verificar que el usuario es participante de la conversación
    const { data: participation } = await supabase
        .from("conversation_participants")
        .select("conversation_id")
        .eq("conversation_id", conversationId)
        .eq("user_id", user.id)
        .single()

    if (!participation) {
        console.error("User is not a participant of this conversation")
        return []
    }

    const { data, error } = await supabase
        .from("messages")
        .select(`
            id,
            conversation_id,
            sender_id,
            content,
            created_at,
            profiles:sender_id (
                id,
                email,
                full_name,
                avatar_url
            )
        `)
        .eq("conversation_id", conversationId)
        .order("created_at", { ascending: true })

    if (error) {
        console.error("Error fetching messages:", error)
        return []
    }

    return data.map(msg => ({
        ...msg,
        sender: msg.profiles as any
    }))
}

/**
 * Enviar un mensaje a una conversación
 */
export async function sendMessage(conversationId: string, content: string, revalidate = true): Promise<Message | null> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || !content.trim()) return null

    const { data, error } = await supabase
        .from("messages")
        .insert({
            conversation_id: conversationId,
            sender_id: user.id,
            content: content.trim()
        })
        .select()
        .single()

    if (error) {
        console.error("Error sending message:", {
            error,
            conversationId,
            userId: user.id
        })
        // When called from background processes (revalidate=false), don't throw
        // to avoid crashing the entire reminder pipeline
        if (!revalidate) {
            return null
        }
        throw new Error(error.message)
    }

    if (revalidate) {
        revalidatePath("/mensajes")
    }
    return data
}

/**
 * Marcar conversación como leída
 */
export async function markAsRead(conversationId: string): Promise<void> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return

    const { error } = await supabase
        .from("conversation_participants")
        .update({ last_read_at: new Date().toISOString() })
        .eq("conversation_id", conversationId)
        .eq("user_id", user.id)

    if (error) {
        console.error("Error marking as read:", error)
    }

    revalidatePath("/mensajes")
}

/**
 * Obtener o crear una conversación con otro usuario
 */
export async function getOrCreateConversation(otherUserId: string): Promise<string | null> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    const { data: { user } } = await supabase.auth.getUser()

    if (!tenantId || !user) return null

    // Buscar conversación existente entre estos dos usuarios
    const { data: existingParticipations } = await supabase
        .from("conversation_participants")
        .select("conversation_id")
        .eq("user_id", user.id)

    if (existingParticipations) {
        for (const participation of existingParticipations) {
            const { data: otherParticipation } = await supabase
                .from("conversation_participants")
                .select("user_id")
                .eq("conversation_id", participation.conversation_id)
                .eq("user_id", otherUserId)
                .single()

            if (otherParticipation) {
                return participation.conversation_id
            }
        }
    }

    // Crear nueva conversación
    const { data: newConversation, error: convError } = await supabase
        .from("conversations")
        .insert({ tenant_id: tenantId })
        .select()
        .single()

    if (convError) {
        console.error("Error creating conversation:", convError)
        return null
    }

    // Agregar participantes
    const { error: participantsError } = await supabase
        .from("conversation_participants")
        .insert([
            { conversation_id: newConversation.id, user_id: user.id },
            { conversation_id: newConversation.id, user_id: otherUserId }
        ])

    if (participantsError) {
        console.error("Error adding participants:", participantsError)
        return null
    }

    revalidatePath("/mensajes")
    return newConversation.id
}

/**
 * Obtener lista de usuarios del tenant (para iniciar conversaciones)
 */
export async function getTenantUsers() {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    const { data: { user } } = await supabase.auth.getUser()

    if (!tenantId || !user) return []

    const { data, error } = await supabase
        .from("profiles")
        .select("id, email, full_name, avatar_url")
        .eq("tenant_id", tenantId)
        .neq("id", user.id) // Excluir al usuario actual

    if (error) {
        console.error("Error fetching tenant users:", error)
        return []
    }

    return data
}

/**
 * Obtener lista de Leads del tenant (para iniciar conversaciones con clientes)
 */
export async function getLeadsForMessaging() {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    const { data, error } = await supabase
        .from("leads")
        .select("id, name, email, phone, status")
        .eq("tenant_id", tenantId)
        .order("name")

    if (error) {
        console.error("Error fetching leads for messaging:", error)
        return []
    }

    return data
}

/**
 * Obtener o crear una conversación con un Lead
 */
export async function getOrCreateLeadConversation(leadId: string, revalidate = true): Promise<string | null> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    const { data: { user } } = await supabase.auth.getUser()

    if (!tenantId || !user) return null

    // Buscar conversación existente para este Lead
    const { data: existingConversation } = await supabase
        .from("conversations")
        .select("id")
        .eq("lead_id", leadId)
        .single()

    if (existingConversation) {
        // Asegurarse de que el usuario actual es participante
        const { data: isParticipant } = await supabase
            .from("conversation_participants")
            .select("conversation_id")
            .eq("conversation_id", existingConversation.id)
            .eq("user_id", user.id)
            .single()

        if (!isParticipant) {
            console.log(`DEBUG: Adding agent ${user.id} to lead conversation ${existingConversation.id}`)
            await supabase
                .from("conversation_participants")
                .insert({
                    conversation_id: existingConversation.id,
                    user_id: user.id
                })
        }

        return existingConversation.id
    }

    // Crear nueva conversación vinculada al Lead
    const { data: newConversation, error: convError } = await supabase
        .from("conversations")
        .insert({
            tenant_id: tenantId,
            lead_id: leadId
        })
        .select()
        .single()

    if (convError) {
        console.error("Error creating lead conversation:", convError)
        return null
    }

    // Agregar al usuario actual como participante
    const { error: participantError } = await supabase
        .from("conversation_participants")
        .insert({ conversation_id: newConversation.id, user_id: user.id })

    if (participantError) {
        console.error("Error adding participant to lead conversation:", participantError)
        return null
    }

    if (revalidate) {
        revalidatePath("/mensajes")
    }
    return newConversation.id
}
