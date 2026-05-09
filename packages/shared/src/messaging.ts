// Profile type (for messaging participants)
export interface Profile {
    id: string
    email: string
    full_name?: string
    avatar_url?: string
}

// Messaging Types
export interface Conversation {
    id: string
    tenant_id: string
    lead_id?: string
    name?: string
    is_group?: boolean
    type?: 'direct' | 'group' | 'lead'
    created_at: string
    updated_at: string
}

export interface ConversationParticipant {
    conversation_id: string
    user_id: string
    joined_at: string
    last_read_at: string
}

export interface Message {
    id: string
    conversation_id: string
    sender_id: string
    content: string
    created_at: string
}

// Extended types with relations for UI
export interface ConversationWithDetails extends Conversation {
    participants?: (ConversationParticipant & { profile?: Profile })[]
    last_message?: Message & { sender?: Profile }
    unread_count?: number
    other_user?: Profile // For 1-on-1 conversations
    lead?: {
        id: string
        name: string
        email?: string
        phone?: string
        status?: string
    }
}

export interface MessageWithSender extends Message {
    sender?: Profile
}
