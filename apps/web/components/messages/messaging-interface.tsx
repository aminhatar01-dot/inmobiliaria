"use client"

import { useState, useEffect } from "react"
import {
    Search,
    Filter,
    Phone,
    Video,
    Info,
    Mail
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { MessageList } from "./message-list"
import { MessageInput } from "./message-input"
import { getMessages, markAsRead } from "@/app/actions/messages"
import type { ConversationWithDetails, MessageWithSender } from "@inmocms/shared"
import { useRouter } from "next/navigation"

interface MessagingInterfaceProps {
    initialConversations: ConversationWithDetails[]
    currentUserId: string
}

export function MessagingInterface({ initialConversations, currentUserId }: MessagingInterfaceProps) {
    const router = useRouter()
    const [conversations, setConversations] = useState(initialConversations)
    const [selectedConversation, setSelectedConversation] = useState<ConversationWithDetails | null>(
        initialConversations[0] || null
    )
    const [messages, setMessages] = useState<MessageWithSender[]>([])
    const [isLoadingMessages, setIsLoadingMessages] = useState(false)

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

    const handleConversationSelect = (conv: ConversationWithDetails) => {
        setSelectedConversation(conv)
    }

    const handleMessageSent = () => {
        if (selectedConversation) {
            loadMessages(selectedConversation.id)
            router.refresh() // Refresh to update unread counts
        }
    }

    if (conversations.length === 0) {
        return (
            <div className="h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50 rounded-3xl">
                <div className="text-center space-y-4">
                    <div className="h-20 w-20 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
                        <Mail className="h-10 w-10 text-blue-300" />
                    </div>
                    <div>
                        <h3 className="text-lg font-black text-gray-900">No hay conversaciones</h3>
                        <p className="text-sm text-gray-400 mt-1">Las conversaciones con tu equipo aparecerán aquí</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="h-[calc(100vh-140px)] flex bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 animate-in fade-in duration-500">
            {/* Sidebar de Chats */}
            <div className="w-80 md:w-96 border-r border-gray-100 flex flex-col shrink-0 bg-gray-50/30">
                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Mensajes</h2>
                        <Button variant="ghost" size="icon" className="rounded-xl h-9 w-9 text-gray-400">
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Buscar chats..."
                            className="h-10 pl-9 bg-white border-none shadow-sm rounded-xl text-xs font-medium"
                        />
                    </div>
                </div>

                <ScrollArea className="flex-1">
                    <div className="px-3 pb-6 space-y-1">
                        {conversations.map((conv) => {
                            const otherUser = conv.other_user
                            const isSelected = selectedConversation?.id === conv.id

                            return (
                                <div
                                    key={conv.id}
                                    onClick={() => handleConversationSelect(conv)}
                                    className={`p-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-all group ${isSelected ? 'bg-blue-600 shadow-lg shadow-blue-500/20' : 'hover:bg-white'
                                        }`}
                                >
                                    <div className="relative shrink-0">
                                        <Avatar className="h-12 w-12 border-2 border-transparent">
                                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-black">
                                                {otherUser?.full_name?.[0] || otherUser?.email?.[0] || '?'}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-0.5">
                                            <h4 className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                                                {otherUser?.full_name || otherUser?.email || 'Usuario'}
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
                        })}
                    </div>
                </ScrollArea>
            </div>

            {/* Ventana de Chat */}
            {selectedConversation ? (
                <div className="flex-1 flex flex-col bg-white">
                    {/* Header del Chat */}
                    <div className="h-20 px-8 border-b border-gray-100 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-10 w-10 border border-gray-100">
                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-black">
                                    {selectedConversation.other_user?.full_name?.[0] || selectedConversation.other_user?.email?.[0] || '?'}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-sm font-black text-gray-900 leading-none">
                                    {selectedConversation.other_user?.full_name || selectedConversation.other_user?.email || 'Usuario'}
                                </h3>
                                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                                    <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                                    {selectedConversation.other_user?.email}
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
                            <p className="text-sm text-gray-400">Cargando mensajes...</p>
                        </div>
                    ) : (
                        <MessageList messages={messages} currentUserId={currentUserId} />
                    )}

                    {/* Input de Mensaje */}
                    <MessageInput conversationId={selectedConversation.id} onMessageSent={handleMessageSent} />
                </div>
            ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                    <p className="text-gray-400">Selecciona una conversación</p>
                </div>
            )}
        </div>
    )
}
