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
                        {!showVerification ? (
                            <form onSubmit={handleSignup} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="flex gap-2 p-1 bg-gray-100/50 rounded-2xl border border-gray-100">
                                        <button
                                            type="button"
                                            onClick={() => setVerificationMethod('email')}
                                            className={`flex-1 py-2 px-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${verificationMethod === 'email' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400'}`}
                                        >
                                            Verificar vía Email
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setVerificationMethod('phone')}
                                            className={`flex-1 py-2 px-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${verificationMethod === 'phone' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400'}`}
                                        >
                                            Verificar vía SMS
                                        </button>
                                    </div>
                                </div>

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
                                {!inviteToken && (
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
                                )}
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
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Teléfono Móvil</label>
                                    <Input
                                        type="tel"
                                        placeholder="+54 9 11 1234 5678"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Contraseña de Seguridad</label>
                                        <Input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                setPassword(val);
                                                // Robust password strength check
                                                let score = 0;
                                                const isValid = passwordValidations.every(v => v.regex.test(val));

                                                if (val.length >= 8) score++;
                                                if (val.length >= 12) score++;
                                                if (/[A-Z]/.test(val)) score++;
                                                if (/[0-9]/.test(val)) score++;
                                                if (/[^A-Za-z0-9]/.test(val)) score++;

                                                const strengths = [
                                                    { label: "Insuficiente", color: "bg-red-500", isValid: false },
                                                    { label: "Mediana", color: "bg-yellow-500", isValid: false },
                                                    { label: "Mediana", color: "bg-yellow-500", isValid: false },
                                                    { label: "Mediana", color: "bg-yellow-500", isValid: false },
                                                    { label: "Fuerte", color: "bg-emerald-500", isValid: true },
                                                    { label: "Excelente", color: "bg-blue-600", isValid: true }
                                                ];
                                                
                                                // Override strength if not meeting all criteria
                                                if (!isValid) {
                                                    setPasswordStrength({ score: Math.min(score, 3), label: "Insuficiente", color: "bg-red-500", isValid: false });
                                                } else {
                                                    setPasswordStrength({ score, ...strengths[score] || strengths[0] });
                                                }
                                            }}
                                            className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm"
                                        />
                                        <div className="mt-2 space-y-3">
                                            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full transition-all duration-500 ${passwordStrength.color}`}
                                                    style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                                                />
                                            </div>
                                            
                                            {/* Validation requirements breakdown */}
                                            {password.length > 0 && (
                                                <div className="grid grid-cols-2 gap-2 mt-2">
                                                    {passwordValidations.map((v, i) => {
                                                        const pass = v.regex.test(password);
                                                        return (
                                                            <div key={i} className={`flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold ${pass ? 'text-emerald-600' : 'text-gray-400'}`}>
                                                                <div className={`h-1.5 w-1.5 rounded-full ${pass ? 'bg-emerald-500' : 'bg-gray-300'}`} />
                                                                {v.message}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className={`w-full h-12 uppercase tracking-widest text-sm text-white font-black rounded-xl shadow-lg transition-all group ${
                                        passwordStrength.isValid ? 'bg-blue-600 hover:bg-black shadow-blue-500/30' : 'bg-gray-200 text-gray-400 shadow-none hover:bg-gray-200 cursor-not-allowed'
                                    }`}
                                    disabled={loading || (password.length > 0 && !passwordStrength.isValid)}
                                >
                                    {loading ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Registrarme <ArrowRight className={`h-4 w-4 transition-transform ${passwordStrength.isValid ? 'group-hover:translate-x-1' : ''}`} />
                                        </span>
                                    )}
                                </Button>

                                <div className="mt-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-100"></div>
                                        </div>
                                        <div className="relative flex justify-center text-xs">
                                            <span className="bg-white px-2 text-gray-400 font-bold tracking-widest uppercase text-[9px]">O continuar con</span>
                                        </div>
                                    </div>

                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={async () => {
                                            const supabase = createClient()
                                            await supabase.auth.signInWithOAuth({
                                                provider: 'google',
                                                options: {
                                                    redirectTo: `${window.location.origin}/auth/callback`
                                                }
                                            })
                                        }}
                                        className="w-full h-12 mt-4 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-100 font-black text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-3"
                                    >
                                        <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                            <path d="M1 1h22v22H1z" fill="none" />
                                        </svg>
                                        Registrarme con Google
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleVerifyAccount} className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                                <div className="text-center space-y-2 mb-4">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Verifica tu Identidad</p>
                                    <p className="text-[10px] text-blue-600 font-black">Hemos enviado un código a {verificationMethod === 'email' ? email : 'tu teléfono'}</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Código de Seguridad</label>
                                    <Input
                                        placeholder="000000"
                                        required
                                        maxLength={6}
                                        value={verificationCode}
                                        onChange={(e) => setVerificationCode(e.target.value)}
                                        className="h-14 bg-gray-50/50 border-gray-100 rounded-2xl focus:bg-white text-center text-xl font-black tracking-[0.5em] focus:ring-2 focus:ring-blue-100"
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
                                            Confirmar Cuenta <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                </Button>

                                <button
                                    type="button"
                                    onClick={() => handleResendCode()}
                                    className="w-full text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-blue-600 transition-colors mt-4"
                                >
                                    ¿No recibiste nada? Reenviar código
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setShowVerification(false)}
                                    className="w-full text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-gray-600 transition-colors"
                                >
                                    Volver atrás
                                </button>
                            </form>
                        )}

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
