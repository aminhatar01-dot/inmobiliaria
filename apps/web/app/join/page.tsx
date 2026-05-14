import { createClient, createAdminClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { acceptNetworkInvitation } from "@/app/actions/network"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Network, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

export default async function JoinPage({
    searchParams,
}: {
    searchParams: Promise<{ token?: string, error?: string }>
}) {
    const { token, error: errorMessage } = await searchParams
    if (!token) redirect("/")

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // 1. Si no está logueado, redirigir a login primero (evita que RLS bloquee la consulta)
    if (!user) {
        redirect(`/login?redirectTo=/join?token=${token}`)
    }

    // 2. Verify invitation (usamos admin client para evitar bloqueos de RLS)
    const adminClient = await createAdminClient()
    const { data: invitation, error: inviteError } = await adminClient
        .from("network_invitations")
        .select(`
            *,
            sender:sender_tenant_id(id, name)
        `)
        .eq("token", token)
        .eq("status", "pending")
        .single()

    if (inviteError || !invitation) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <Card className="max-w-md w-full p-8 text-center space-y-6 rounded-3xl shadow-2xl border-none">
                    <div className="h-20 w-20 bg-red-50 rounded-full flex items-center justify-center mx-auto">
                        <XCircle className="h-10 w-10 text-red-500" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-black text-gray-900">Invitación Inválida</h1>
                        <p className="text-gray-500">Este link ha expirado, ya fue utilizado, o la invitación no es para tu usuario.</p>
                    </div>
                    <Button asChild className="w-full h-12 rounded-xl font-bold bg-gray-900">
                        <Link href="/">Ir al inicio</Link>
                    </Button>
                </Card>
            </div>
        )
    }

    // 3. Render acceptance UI
    return (
        <div className="min-h-screen bg-indigo-600 flex items-center justify-center p-4">
            <Card className="max-w-md w-full p-10 text-center space-y-8 rounded-[2.5rem] shadow-2xl border-none animate-in zoom-in duration-500">
                <div className="h-24 w-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Network className="h-12 w-12 text-indigo-500" />
                </div>
                <div className="space-y-3">
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Invitación a Red</h1>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        <span className="font-bold text-indigo-600">{(invitation as any).sender?.name || 'Un agente'}</span> te invita a colaborar en InmoCMS.
                    </p>
                </div>
                
                {errorMessage && (
                    <div className="bg-red-50 p-4 rounded-xl text-sm text-red-600 font-medium border border-red-100 flex items-start gap-2 text-left">
                        <XCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                    </div>
                )}
                
                <div className="bg-gray-50 p-6 rounded-3xl text-sm text-gray-400 font-medium">
                    Al aceptar, podrán compartir propiedades y comunicarse por el chat interno.
                </div>
                
                <form action={async () => {
                    "use server"
                    let success = false;
                    try {
                        await acceptNetworkInvitation(invitation.id)
                        success = true;
                    } catch (error: any) {
                        redirect(`/join?token=${token}&error=${encodeURIComponent(error.message)}`)
                    }
                    
                    if (success) {
                        redirect("/mensajes")
                    }
                }}>
                    <Button type="submit" className="w-full h-16 rounded-2xl font-black text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl shadow-indigo-500/20 transition-all hover:scale-[1.02] border-none">
                        Aceptar Invitación
                    </Button>
                </form>
            </Card>
        </div>
    )
}
