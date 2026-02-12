import { Suspense } from "react"
import { getConversations } from "@/app/actions/messages"
import { createClient } from "@/lib/supabase/server"
import { MessagingInterface } from "@/components/messages/messaging-interface"
import { MessageSquare, Loader2 } from "lucide-react"

export default async function MensajesPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return (
            <div className="h-[calc(100vh-140px)] flex items-center justify-center">
                <p className="text-gray-400">No autenticado</p>
            </div>
        )
    }

    const conversations = await getConversations()

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-8">
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
            </div>

            <Suspense fallback={
                <div className="h-[calc(100vh-240px)] flex items-center justify-center bg-gray-50 rounded-3xl">
                    <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
                </div>
            }>
                <MessagingInterface
                    initialConversations={conversations}
                    currentUserId={user.id}
                />
            </Suspense>
        </div>
    )
}
