"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sparkles, Loader2, ArrowRight, Search, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const supabase = createClient()
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        setLoading(false)

        if (error) {
            toast.error("Error de autenticación", { description: error.message })
            setLoading(false)
            return
        }

        const { data: { user } } = await supabase.auth.getUser()

        if (user) {
            const { data: profile } = await supabase
                .from("profiles")
                .select("tenant_id")
                .eq("id", user.id)
                .single()

            toast.success("Bienvenido de nuevo")

            if (profile?.tenant_id) {
                router.push("/dashboard")
            } else {
                router.push("/cuenta/plan")
            }
            router.refresh()
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fafafa] p-4 relative overflow-hidden font-sans">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-400/5 rounded-full blur-[120px]" />
            </div>

            <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10">
                <div className="flex flex-col items-center text-center space-y-4">
                    <Link href="/" className="group flex items-center gap-2 mb-4">
                        <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                            <Sparkles className="h-6 w-6" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-2xl font-black text-gray-900 tracking-tighter leading-none">InmoCMS</span>
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mt-1 text-center">Luxury Edition</span>
                        </div>
                    </Link>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tighter">Acceso Profesional</h1>
                    <p className="text-gray-400 text-sm font-medium">Gestiona tu catálogo y leads con potencia IA</p>
                </div>

                <Card className="border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-[2.5rem] overflow-hidden bg-white/80 backdrop-blur-xl">
                    <CardHeader className="pt-10 pb-4 text-center">
                        <CardTitle className="text-xl font-black text-gray-900 tracking-tight uppercase">Iniciar Sesión</CardTitle>
                        <CardDescription className="text-gray-400 font-medium">Panel de Control para Inmobiliarias</CardDescription>
                    </CardHeader>
                    <CardContent className="p-10 pt-6">
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Correo Electrónico</label>
                                <Input
                                    type="email"
                                    placeholder="agente@tuinmobiliaria.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-14 bg-gray-50/50 border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all text-sm font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contraseña</label>
                                    <Link href="/recuperar" className="text-[9px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest transition-colors tracking-tighter">¿Recuperar clave?</Link>
                                </div>
                                <Input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="h-14 bg-gray-50/50 border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all text-sm font-medium"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-14 bg-blue-600 hover:bg-black text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/20 transition-all group"
                                disabled={loading}
                            >
                                {loading ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Entrar al Dashboard <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                )}
                            </Button>
                        </form>

                        <div className="mt-10 pt-8 border-t border-gray-50 space-y-6">
                            <p className="text-xs text-gray-400 font-bold text-center uppercase tracking-widest">
                                ¿Nuevo en la plataforma?{" "}
                                <Link href="/signup" className="text-blue-600 font-black hover:text-indigo-600 transition-colors">
                                    Crea tu Agencia
                                </Link>
                            </p>

                            <div
                                className="bg-gray-50/50 p-5 rounded-[1.5rem] border border-gray-100 flex items-center justify-between group cursor-pointer hover:bg-white hover:border-blue-200 transition-all shadow-sm"
                                onClick={() => router.push('/portal')}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-11 w-11 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                                        <Search className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-gray-900 tracking-tight leading-none mb-1">¿Buscas una propiedad?</p>
                                        <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">Acceso Directo al Portal Público</p>
                                    </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-center">
                    <Link href="/" className="flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-gray-900 uppercase tracking-[0.2em] transition-colors">
                        <ChevronLeft className="h-3 w-3" /> Volver al Inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}
