"use client"

import { useEffect, useRef } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { CheckCheck } from "lucide-react"
import { format } from "date-fns"
import type { MessageWithSender } from "@inmocms/shared"

interface MessageListProps {
    messages: MessageWithSender[]
    currentUserId: string
}

export function MessageList({ messages, currentUserId }: MessageListProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    if (messages.length === 0) {
        return (
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="text-center space-y-2">
                    <p className="text-sm font-bold text-gray-400">No hay mensajes aún</p>
                    <p className="text-xs text-gray-300">Inicia la conversación enviando un mensaje</p>
                </div>
            </div>
        )
    }

    return (
        <ScrollArea className="flex-1 p-8">
            <div ref={scrollRef} className="space-y-8">
                <div className="flex items-center justify-center">
                    <Badge variant="outline" className="border-gray-50 bg-gray-50/50 text-[10px] font-bold text-gray-400 px-4 py-1.5 rounded-full uppercase tracking-widest">
                        {format(new Date(messages[0].created_at), "EEEE, d MMM")}
                    </Badge>
                </div>

                {messages.map((msg) => {
                    const isMe = msg.sender_id === currentUserId

                    return (
                        <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[70%] space-y-1 ${isMe ? 'items-end flex flex-col' : 'items-start flex flex-col'}`}>
                                <div className={`p-4 rounded-3xl text-sm font-medium shadow-sm ${isMe
                                        ? 'bg-blue-600 text-white rounded-tr-sm shadow-blue-500/10'
                                        : 'bg-gray-50 text-gray-800 rounded-tl-sm'
                                    }`}>
                                    {msg.content}
                                </div>
                                <div className="flex items-center gap-1 px-2">
                                    <span className="text-[9px] font-bold text-gray-400">
                                        {format(new Date(msg.created_at), "HH:mm")}
                                    </span>
                                    {isMe && <CheckCheck className="h-3 w-3 text-blue-500" />}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </ScrollArea>
    )
}
