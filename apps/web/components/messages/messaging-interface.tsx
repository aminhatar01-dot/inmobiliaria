"use client"

import { useState, useEffect } from "react"
import {
    Search,
    Filter,
    Phone,
    Video,
    Info,
    Mail,
    MessageSquare,
    Loader2,
    Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { MessageList } from "./message-list"
import { MessageInput } from "./message-input"
import { NewChatDialog } from "./new-chat-dialog"
import { getMessages, markAsRead, getConversations } from "@/app/actions/messages"
import type { ConversationWithDetails, MessageWithSender } from "@inmocms/shared"
import { useRouter } from "next/navigation"

interface MessagingInterfaceProps {
    initialConversations: ConversationWithDetails[]
    currentUserId: string
}

export function MessagingInterface({ initialConversations, currentUserId }: MessagingInterfaceProps) {
    const router = useRouter()
    const [conversations, setConversations] = useState(initialConversations)
    const [filterType, setFilterType] = useState<"all" | "team" | "leads">("all")
    const [selectedConversation, setSelectedConversation] = useState<ConversationWithDetails | null>(
        initialConversations[0] || null
    )
    const [messages, setMessages] = useState<MessageWithSender[]>([])
    const [isLoadingMessages, setIsLoadingMessages] = useState(false)
    const [isNewChatOpen, setIsNewChatOpen] = useState(false)

    // Load messages when conversation changes
    useEffect(() => {
        if (selectedConversation) {
            loadMessages(selectedConversation.id)
            markAsRead(selectedConversation.id)
        }
    }, [selectedConversation?.id])

    const loadMessages = async (conversationId: string) => {
        setIsLoadingMessages(true)
        try {
            const msgs = await getMessages(conversationId)
            setMessages(msgs)
        } catch (error) {
            console.error("Error loading messages:", error)
        } finally {
            setIsLoadingMessages(false)
        }
    }

    const refreshConversations = async (newSelectedId?: string) => {
        try {
            const updated = await getConversations()
            setConversations(updated)
            if (newSelectedId) {
                const found = updated.find(c => c.id === newSelectedId)
                if (found) setSelectedConversation(found)
            }
        } catch (error) {
            console.error("Error refreshing conversations:", error)
        }
    }

    const handleConversationSelect = (conv: ConversationWithDetails) => {
        setSelectedConversation(conv)
    }

    const handleMessageSent = () => {
        if (selectedConversation) {
            loadMessages(selectedConversation.id)
            refreshConversations()
        }
    }

    const filteredConversations = conversations.filter(conv => {
        if (filterType === "team") return !conv.lead_id
        if (filterType === "leads") return !!conv.lead_id
        return true
    })

    const renderSidebarItem = (conv: ConversationWithDetails) => {
        const isSelected = selectedConversation?.id === conv.id
        const isClient = !!conv.lead_id
        const displayName = isClient
            ? conv.lead?.name
            : (conv.other_user?.full_name || conv.other_user?.email || 'Colega')
        const displaySub = isClient ? 'Cliente' : 'Equipo'
        const avatarInitial = (isClient ? conv.lead?.name?.[0] : (conv.other_user?.full_name?.[0] || conv.other_user?.email?.[0])) || '?'

        return (
            <div
                key={conv.id}
                onClick={() => handleConversationSelect(conv)}
                className={`p-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-all group ${isSelected ? 'bg-blue-600 shadow-lg shadow-blue-500/20' : 'hover:bg-white'
                    }`}
            >
                <div className="relative shrink-0">
                    <Avatar className={`h-12 w-12 border-2 ${isSelected ? 'border-white/20' : 'border-transparent'}`}>
                        <AvatarFallback className={`${isClient
                            ? 'bg-gradient-to-br from-amber-400 to-orange-500'
                            : 'bg-gradient-to-br from-blue-500 to-purple-500'
                            } text-white font-black`}>
                            {avatarInitial}
                        </AvatarFallback>
                    </Avatar>
                    {isClient && !isSelected && (
                        <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center">
                            <Users className="h-2.5 w-2.5 text-white" />
                        </div>
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                        <h4 className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                            {displayName}
                        </h4>
                        <span className={`text-[10px] font-medium ${isSelected ? 'text-white/70' : 'text-gray-400'}`}>
                            {conv.last_message ? new Date(conv.last_message.created_at).toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' }) : ''}
                        </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <p className={`text-xs truncate ${isSelected ? 'text-white/80' : 'text-gray-500 font-medium'}`}>
                            {conv.last_message?.content || 'Sin mensajes'}
                        </p>
                        {(conv.unread_count || 0) > 0 && !isSelected && (
                            <Badge className="h-4 min-w-[1rem] px-1 bg-red-500 text-white text-[9px] font-black border-none rounded-full flex items-center justify-center">
                                {conv.unread_count}
                            </Badge>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="h-[calc(100vh-140px)] flex bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 animate-in fade-in duration-500">
            {/* Sidebar de Chats */}
            <div className="w-80 md:w-96 border-r border-gray-100 flex flex-col shrink-0 bg-gray-50/30">
                <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Inbox</h2>
                        <Button
                            onClick={() => setIsNewChatOpen(true)}
                            className="rounded-xl h-10 w-10 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 p-0"
                        >
                            <Mail className="h-5 w-5 text-white" />
                        </Button>
                    </div>

                    <div className="flex p-1 bg-gray-100/50 rounded-2xl h-11">
                        {(['all', 'team', 'leads'] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`flex-1 flex items-center justify-center text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${filterType === type
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {type === 'all' ? 'Todos' : type === 'team' ? 'Equipo' : 'Clientes'}
                            </button>
                        ))}
                    </div>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Buscar en el chat..."
                            className="h-10 pl-9 bg-white border-none shadow-sm rounded-xl text-xs font-medium"
                        />
                    </div>
                </div>

                <ScrollArea className="flex-1">
                    <div className="px-3 pb-6 space-y-1">
                        {filteredConversations.length > 0 ? (
                            filteredConversations.map(renderSidebarItem)
                        ) : (
                            <div className="p-8 text-center text-gray-400 text-xs font-medium">
                                No hay conversaciones en esta categoría
                            </div>
                        )}
                    </div>
                </ScrollArea>
            </div>

            {/* Ventana de Chat */}
            {selectedConversation ? (
                <div className="flex-1 flex flex-col bg-white">
                    {/* Header del Chat */}
                    <div className="h-20 px-8 border-b border-gray-100 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-4">
                            <Avatar className={`h-10 w-10 border ${selectedConversation.lead_id ? 'border-amber-100' : 'border-gray-100'}`}>
                                <AvatarFallback className={`${selectedConversation.lead_id
                                    ? 'bg-gradient-to-br from-amber-400 to-orange-500'
                                    : 'bg-gradient-to-br from-blue-500 to-purple-500'
                                    } text-white font-black`}>
                                    {(selectedConversation.lead_id
                                        ? selectedConversation.lead?.name?.[0]
                                        : (selectedConversation.other_user?.full_name?.[0] || selectedConversation.other_user?.email?.[0])) || '?'}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-sm font-black text-gray-900 leading-none">
                                    {selectedConversation.lead_id
                                        ? selectedConversation.lead?.name
                                        : (selectedConversation.other_user?.full_name || selectedConversation.other_user?.email || 'Usuario')}
                                </h3>
                                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                                    <span className={`h-1.5 w-1.5 rounded-full ${selectedConversation.lead_id ? 'bg-amber-400' : 'bg-blue-400'}`} />
                                    {selectedConversation.lead_id ? 'Cliente' : 'Equipo'} • {selectedConversation.lead_id ? selectedConversation.lead?.email : selectedConversation.other_user?.email}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                                <Phone className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                                <Video className="h-4 w-4" />
                            </Button>
                            <div className="h-6 w-px bg-gray-100 mx-2" />
                            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                                <Info className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Mensajes */}
                    {isLoadingMessages ? (
                        <div className="flex-1 flex items-center justify-center">
                            <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
                        </div>
                    ) : (
                        <MessageList messages={messages} currentUserId={currentUserId} />
                    )}

                    {/* Input de Mensaje */}
                    <MessageInput conversationId={selectedConversation.id} onMessageSent={handleMessageSent} />
                </div>
            ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                    <div className="text-center space-y-4">
                        <div className="h-20 w-20 mx-auto rounded-3xl bg-white shadow-xl shadow-gray-200/50 flex items-center justify-center text-blue-500">
                            <MessageSquare className="h-10 w-10" />
                        </div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Selecciona una conversación</p>
                    </div>
                </div>
            )}

            <NewChatDialog
                open={isNewChatOpen}
                onOpenChange={setIsNewChatOpen}
                onConversationCreated={(id) => refreshConversations(id)}
            />
        </div>
    )
}

