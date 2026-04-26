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
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [passwordStrength, setPasswordStrength] = useState({
        score: 0,
        label: "Muy Débil",
        color: "bg-red-500",
        isValid: false,
    })
    const [showVerification, setShowVerification] = useState(false)
    const [verificationMethod, setVerificationMethod] = useState<'email' | 'phone'>('email')
    const [verificationCode, setVerificationCode] = useState("")
    const router = useRouter()
    const inviteToken = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('invite') : null

    // Validations state
    const passwordValidations = [
        { regex: /.{8,}/, message: "Mínimo 8 caracteres" },
        { regex: /[A-Z]/, message: "Al menos una mayúscula" },
        { regex: /[0-9]/, message: "Al menos un número" },
        { regex: /[^A-Za-z0-9]/, message: "Al menos un carácter especial" }
    ]

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (!passwordStrength.isValid) {
            toast.error("Contraseña insegura", { description: "La contraseña no cumple con los requisitos de seguridad obligatorios." })
            return
        }

        setLoading(true)

        const supabase = createClient()

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                    agency_name: inviteToken ? null : agencyName,
                    phone: phone,
                    subscription_tier: inviteToken ? 'Invitado' : 'Gratuito'
                }
            }
        })

        setLoading(false)

        if (error) {
            toast.error("Error de registro", { description: error.message })
            return
        }

        setShowVerification(true)
        toast.info("Verifica tu cuenta", { description: `Se ha enviado un código a tu ${verificationMethod === 'email' ? 'email' : 'teléfono'}.` })
    }

    const handleVerifyAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const supabase = createClient()
        
        const { error } = await supabase.auth.verifyOtp({
            email,
            token: verificationCode,
            type: 'signup'
        })

        setLoading(false)

        if (error) {
            toast.error("Código Incorrecto", { description: "Revisa tu correo e intenta nuevamente." })
            return
        }

        toast.success("Cuenta Verificada", { description: "¡Bienvenido a InmoCMS!" })

        if (inviteToken) {
            router.push(`/invitacion/${inviteToken}`)
        } else {
            router.push("/dashboard")
        }
    }

    const handleResendCode = async () => {
        const supabase = createClient()
        toast.loading("Reenviando código...")
        
        const { error } = await supabase.auth.resend({
            type: 'signup',
            email: email,
        })
        
        toast.dismiss()
        if (error) {
            toast.error("Error al reenviar", { description: error.message })
        } else {
            toast.success("Código reenviado", { description: "Revisa tu bandeja de entrada o spam." })
        }
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
                        <div className="space-y-6">
                            <Button
                                type="button"
                                onClick={async () => {
                                    const supabase = createClient()
                                    await supabase.auth.signInWithOAuth({
                                        provider: 'google',
                                        options: {
                                            redirectTo: `${window.location.origin}/auth/callback`,
                                            queryParams: {
                                                access_type: 'offline',
                                                prompt: 'consent',
                                            },
                                            scopes: 'https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/contacts'
                                        }
                                    })
                                }}
                                className="w-full h-14 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-100 font-black text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-3"
                            >
                                <svg className="h-6 w-6" aria-hidden="true" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    <path d="M1 1h22v22H1z" fill="none" />
                                </svg>
                                Registrarme con Google
                            </Button>
                            
                            <p className="text-[10px] font-bold text-center text-gray-400 uppercase tracking-widest mt-4">
                                Solo permitimos el registro a través de Google para sincronizar tus propiedades y agenda.
                            </p>
                        </div>

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
