"use client"

import { useState } from "react"
import Link from "next/link"
import { Sparkles, Loader2, ArrowRight, ChevronLeft, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"

export default function RecoverPage() {
    const [loading, setLoading] = useState(false)
    const [method, setMethod] = useState<'email' | 'phone'>('email')
    const [identifier, setIdentifier] = useState("")
    const [sent, setSent] = useState(false)

    const handleRecover = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const supabase = createClient()

        if (method === 'email') {
            const { error } = await supabase.auth.resetPasswordForEmail(identifier, {
                redirectTo: `${window.location.origin}/reset-password`,
            })
            setLoading(false)
            if (error) {
                toast.error("Error", { description: error.message })
                return
            }
        } else {
            // Simulated phone recovery
            setTimeout(() => {
                setLoading(false)
                toast.success("Código enviado por SMS")
            }, 1000)
        }

        setSent(true)
        toast.success("Instrucciones enviadas", {
            description: `Revisa tu ${method === 'email' ? 'correo' : 'teléfono'} para continuar.`
        })
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
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mt-1 text-center">Safety First</span>
                        </div>
                    </Link>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tighter">Recuperar Acceso</h1>
                    <p className="text-gray-400 text-sm font-medium">Te ayudaremos a volver al dashboard</p>
                </div>

                <Card className="border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-[2.5rem] overflow-hidden bg-white/80 backdrop-blur-xl">
                    <CardHeader className="pt-10 pb-4 text-center">
                        <CardTitle className="text-xl font-black text-gray-900 tracking-tight uppercase">Seguridad</CardTitle>
                        <CardDescription className="text-gray-400 font-medium">Elige tu método de recuperación</CardDescription>
                    </CardHeader>
                    <CardContent className="p-10 pt-6">
                        {!sent ? (
                            <form onSubmit={handleRecover} className="space-y-6">
                                <div className="flex gap-2 p-1 bg-gray-100/50 rounded-2xl border border-gray-100">
                                    <button
                                        type="button"
                                        onClick={() => { setMethod('email'); setIdentifier(""); }}
                                        className={`flex-1 py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${method === 'email' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400'}`}
                                    >
                                        <Mail className="h-3 w-3" /> Email
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setMethod('phone'); setIdentifier(""); }}
                                        className={`flex-1 py-3 px-3 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${method === 'phone' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400'}`}
                                    >
                                        <Phone className="h-3 w-3" /> Teléfono
                                    </button>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                        {method === 'email' ? 'Tu Correo Electrónico' : 'Tu Número de Teléfono'}
                                    </label>
                                    <Input
                                        type={method === 'email' ? 'email' : 'tel'}
                                        placeholder={method === 'email' ? 'agente@inmo.com' : '+54 9 ...'}
                                        required
                                        value={identifier}
                                        onChange={(e) => setIdentifier(e.target.value)}
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
                                            Enviar Instrucciones <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        ) : (
                            <div className="text-center space-y-6 animate-in zoom-in duration-500">
                                <div className="h-20 w-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                                    <Sparkles className="h-10 w-10" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-lg font-black text-gray-900 tracking-tight leading-none">¡Enviado con éxito!</p>
                                    <p className="text-sm text-gray-400 font-medium px-4">Hemos enviado los pasos para restablecer tu contraseña a {identifier}.</p>
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full h-14 rounded-2xl font-black text-[10px] uppercase tracking-widest border-gray-100"
                                    onClick={() => setSent(false)}
                                >
                                    ¿No recibiste nada? Reintentar
                                </Button>
                            </div>
                        )}

                        <div className="mt-10 pt-8 border-t border-gray-50 text-center">
                            <Link href="/login" className="text-[10px] font-black text-blue-600 hover:text-indigo-600 transition-colors uppercase tracking-widest">
                                Volver al Inicio de Sesión
                            </Link>
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
