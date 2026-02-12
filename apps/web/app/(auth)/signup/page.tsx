"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sparkles, Loader2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"

export default function SignupPage() {
    const [loading, setLoading] = useState(false)
    const [fullName, setFullName] = useState("")
    const [agencyName, setAgencyName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const supabase = createClient()

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                    agency_name: agencyName,
                }
            }
        })

        setLoading(false)

        if (error) {
            toast.error("Error de registro", { description: error.message })
            return
        }

        toast.success("Cuenta creada", { description: "Por favor revisa tu email para confirmar." })
        // Opcional: auto login o redirigir a una página de "check email"
        // Por ahora redirigimos al login
        router.push("/login")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] p-4">
            <div className="w-full max-w-md space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="text-center space-y-2">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/20">
                        <Sparkles className="h-7 w-7" />
                    </div>
                    <h1 className="text-3xl font-black text-blue-950 tracking-tight">InmoCMS</h1>
                    <p className="text-gray-500 text-sm font-medium">Gestión inmobiliaria inteligente</p>
                </div>

                <Card className="border-none shadow-2xl shadow-blue-900/5 rounded-[2rem] overflow-hidden bg-white/80 backdrop-blur-xl">
                    <CardHeader className="pt-8 pb-4 text-center">
                        <CardTitle className="text-2xl font-bold text-gray-800">Crear Cuenta</CardTitle>
                        <CardDescription className="text-gray-400">Comienza a gestionar tu inmobiliaria gratis</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                        <form onSubmit={handleSignup} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Nombre Completo</label>
                                <Input
                                    placeholder="Juan Pérez"
                                    required
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Nombre de Inmobiliaria</label>
                                <Input
                                    placeholder="Inmobiliaria Pérez"
                                    required
                                    value={agencyName}
                                    onChange={(e) => setAgencyName(e.target.value)}
                                    className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
                                <Input
                                    type="email"
                                    placeholder="hola@inmobiliaria.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Contraseña</label>
                                <Input
                                    type="password"
                                    required
                                    minLength={6}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all group"
                                disabled={loading}
                            >
                                {loading ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Registrarse <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                )}
                            </Button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                            <p className="text-sm text-gray-400 font-medium">
                                ¿Ya tienes cuenta?{" "}
                                <Link href="/login" className="text-blue-600 font-bold hover:underline underline-offset-4">
                                    Iniciar Sesión
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
