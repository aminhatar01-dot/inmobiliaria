"use client"

import { useState } from "react"
import { MessageSquare, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InviteAgentDialog } from "./invite-agent-dialog"

export function MessagesHeader() {
    const [isInviteOpen, setIsInviteOpen] = useState(false)

    console.log("Rendering MessagesHeader component")

    return (
        <div className="flex items-center justify-between">
            <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                        <MessageSquare className="h-5 w-5" />
                    </div>
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Chat Interno</h2>
                </div>
                <p className="text-gray-500 font-medium text-lg ml-13">Comunicate con tu equipo en tiempo real.</p>
            </div>

            <Button
                onClick={() => setIsInviteOpen(true)}
                className="rounded-2xl h-14 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-sm uppercase tracking-widest px-8 shadow-xl shadow-indigo-500/20 border-none transition-all hover:scale-105 active:scale-95"
            >
                <UserPlus className="h-5 w-5 mr-3" /> Invitar Agente
            </Button>

            <InviteAgentDialog 
                open={isInviteOpen}
                onOpenChange={setIsInviteOpen}
            />
        </div>
    )
}
