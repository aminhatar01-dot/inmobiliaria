"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sparkles, Loader2, ArrowRight, Search, UserCircle } from "lucide-react"
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
            return
        }

        toast.success("Bienvenido de nuevo")
        router.push("/dashboard")
        router.refresh()
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
                        <CardTitle className="text-2xl font-bold text-gray-800">Iniciar Sesión</CardTitle>
                        <CardDescription className="text-gray-400">Introduce tus credenciales para acceder</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
                                <Input
                                    type="email"
                                    placeholder="laura@inmocms.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contraseña</label>
                                    <Link href="#" className="text-[10px] font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider">¿Olvidaste tu contraseña?</Link>
                                </div>
                                <Input
                                    type="password"
                                    required
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
                                        Entrar <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                )}
                            </Button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                            <p className="text-sm text-gray-400 font-medium text-center">
                                ¿No tienes cuenta?{" "}
                                <Link href="/signup" className="text-blue-600 font-bold hover:underline underline-offset-4">
                                    Regístrate gratis
                                </Link>
                            </p>

                            <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-blue-50 transition-colors" onClick={() => router.push('/portal')}>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                                        <Search className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-700">¿Buscas una propiedad?</p>
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Acceder al Portal Público</p>
                                    </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
