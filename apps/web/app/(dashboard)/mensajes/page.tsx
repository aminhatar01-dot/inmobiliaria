import { Suspense } from "react"
import { getConversations } from "@/app/actions/messages"
import { createClient } from "@/lib/supabase/server"
import { MessagesHeader } from "@/components/messages/messages-header"
import { MessagingInterface } from "@/components/messages/messaging-interface"
import { Loader2 } from "lucide-react"

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
            <MessagesHeader />

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
