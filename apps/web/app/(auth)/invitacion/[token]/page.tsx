"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Sparkles, Loader2, ArrowRight, CheckCircle2, XCircle, UserPlus, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner"
import { getInvitationByToken, acceptInvitation } from "@/app/actions/subscriptions"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"

export default function InvitationPage() {
    const { token } = useParams()
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [accepting, setAccepting] = useState(false)
    const [invite, setInvite] = useState<any>(null)
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const checkStatus = async () => {
            const supabase = createClient()
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)

            const details = await getInvitationByToken(token as string)
            setInvite(details)
            setLoading(false)
        }
        checkStatus()
    }, [token])

    const handleAccept = async () => {
        if (!user) {
            toast.info("Casi listo", {
                description: "Primero debes iniciar sesión o registrarte para unirte al equipo."
            })
            // Save token in session storage to accept after login
            sessionStorage.setItem("pending_invite_token", token as string)
            router.push(`/login?invite=${token}`)
            return
        }

        setAccepting(true)
        try {
            const result = await acceptInvitation(token as string)
            if (result.success) {
                toast.success("¡Bienvenido al equipo!", {
                    description: `Ahora eres parte de ${invite.tenants.name}`
                })
                router.push("/dashboard")
                router.refresh()
            }
        } catch (error: any) {
            toast.error("Error", { description: error.message })
        } finally {
            setAccepting(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
                <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
            </div>
        )
    }

    if (!invite || invite.expired || invite.status === 'accepted') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fafafa] p-4">
                <Card className="max-w-md w-full border-none shadow-2xl rounded-[2.5rem] p-10 text-center space-y-6">
                    <div className="mx-auto h-20 w-20 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                        <XCircle className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">Invitación No Válida</h1>
                        <p className="text-gray-500 font-medium">
                            {invite?.expired
                                ? "Esta invitación ha expirado. Solicita una nueva a tu administrador."
                                : invite?.status === 'accepted'
                                    ? "Esta invitación ya ha sido utilizada."
                                    : "No pudimos encontrar esta invitación. Verifica el link e inténtalo de nuevo."}
                        </p>
                    </div>
                    <Button asChild className="w-full h-14 rounded-2xl font-black uppercase tracking-widest bg-gray-900">
                        <Link href="/">Volver al Inicio</Link>
                    </Button>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fafafa] p-4 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px]" />
            </div>

            <div className="w-full max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10">
                <Card className="border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-[3rem] overflow-hidden bg-white/80 backdrop-blur-2xl">
                    <CardHeader className="pt-16 pb-8 text-center space-y-4">
                        <div className="mx-auto h-16 w-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 mb-4 animate-bounce">
                            <Sparkles className="h-8 w-8" />
                        </div>
                        <div>
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-2 block">Invitación de Equipo</span>
                            <CardTitle className="text-4xl font-black text-gray-900 tracking-tighter leading-tight">
                                Has sido invitado a unirte a <br />
                                <span className="text-blue-600">{invite.tenants.name}</span>
                            </CardTitle>
                        </div>
                        <CardDescription className="text-gray-500 font-medium text-lg px-8">
                            {invite.profiles.name} quiere que formes parte de su equipo profesional en InmoCMS.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-12 pt-4 space-y-10">
                        <div className="bg-blue-50/50 rounded-[2rem] p-8 border border-blue-100 flex items-center gap-6">
                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm border border-blue-50">
                                <CheckCircle2 className="h-7 w-7" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-gray-900 mb-1">Acceso Completo</p>
                                <p className="text-xs text-blue-600/70 font-bold uppercase tracking-widest">Plan Agencia Activado</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {!user ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Button
                                        variant="outline"
                                        className="h-16 rounded-[1.5rem] font-black uppercase tracking-widest text-xs border-2 border-gray-100 hover:border-blue-600 hover:text-blue-600 transition-all group"
                                        onClick={() => {
                                            sessionStorage.setItem("pending_invite_token", token as string)
                                            router.push(`/login?invite=${token}`)
                                        }}
                                    >
                                        <LogIn className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" /> Ya tengo cuenta
                                    </Button>
                                    <Button
                                        className="h-16 rounded-[1.5rem] font-black uppercase tracking-widest text-xs bg-blue-600 hover:bg-black text-white shadow-xl shadow-blue-500/20 transition-all group"
                                        onClick={() => {
                                            sessionStorage.setItem("pending_invite_token", token as string)
                                            router.push(`/signup?invite=${token}`)
                                        }}
                                    >
                                        <UserPlus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" /> Soy nuevo
                                    </Button>
                                </div>
                            ) : (
                                <Button
                                    className="w-full h-16 bg-blue-600 hover:bg-black text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/20 transition-all group"
                                    onClick={handleAccept}
                                    disabled={accepting}
                                >
                                    {accepting ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Aceptar Invitación <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                </Button>
                            )}

                            <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                Al aceptar, tu cuenta se vinculará a la inmobiliaria {invite.tenants.name}.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-12 text-center">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">InmoCMS Luxury Edition &copy; 2026</p>
                </div>
            </div>
        </div>
    )
}
