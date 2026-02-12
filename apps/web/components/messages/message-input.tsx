"use client"

import { useState, useEffect, useRef } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { sendMessage } from "@/app/actions/messages"
import { toast } from "sonner"

interface MessageInputProps {
    conversationId: string
    onMessageSent?: () => void
}

export function MessageInput({ conversationId, onMessageSent }: MessageInputProps) {
    const [content, setContent] = useState("")
    const [isSending, setIsSending] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const handleSend = async () => {
        if (!content.trim() || isSending) return

        setIsSending(true)
        try {
            await sendMessage(conversationId, content)
            setContent("")
            onMessageSent?.()

            // Auto-focus after sending
            setTimeout(() => {
                textareaRef.current?.focus()
            }, 100)
        } catch (error) {
            toast.error("Error al enviar mensaje")
            console.error(error)
        } finally {
            setIsSending(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <div className="p-6 shrink-0 border-t border-gray-100">
            <div className="bg-gray-50 rounded-[2.5rem] p-4 flex items-end gap-2 focus-within:ring-2 focus-within:ring-blue-100 transition-all border border-transparent focus-within:border-blue-200">
                <Textarea
                    ref={textareaRef}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe un mensaje..."
                    disabled={isSending}
                    className="bg-transparent border-none focus-visible:ring-0 resize-none min-h-[40px] max-h-[120px] py-3 font-medium placeholder:text-gray-400"
                />
                <Button
                    onClick={handleSend}
                    disabled={!content.trim() || isSending}
                    className="h-12 w-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/20 shrink-0 disabled:opacity-50"
                >
                    <Send className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}
