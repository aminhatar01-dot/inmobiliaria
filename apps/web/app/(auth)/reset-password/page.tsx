"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sparkles, Loader2, ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"

export default function ResetPasswordPage() {
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordStrength, setPasswordStrength] = useState({
        score: 0,
        label: "Muy Débil",
        color: "bg-red-500",
        isValid: false,
    })
    const router = useRouter()

    // Validations state (same as signup)
    const passwordValidations = [
        { regex: /.{8,}/, message: "Mínimo 8 caracteres" },
        { regex: /[A-Z]/, message: "Al menos una mayúscula" },
        { regex: /[0-9]/, message: "Al menos un número" },
        { regex: /[^A-Za-z0-9]/, message: "Al menos un carácter especial" }
    ]

    useEffect(() => {
        // Supabase puts the error in the URL hash if the recovery link is invalid/expired
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        const errorDescription = hashParams.get('error_description')
        if (errorDescription) {
            toast.error("Enlace Invalido", { description: errorDescription.replace(/\+/g, ' ') })
        }
    }, [])

    const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!passwordStrength.isValid) {
            toast.error("Contraseña insegura", { description: "La contraseña no cumple con los requisitos mínimos de seguridad." })
            return
        }

        setLoading(true)
        const supabase = createClient()

        // When the user clics the recovery link from email, Supabase automatically establishes a session 
        // from the URL fragment (#access_token). So we just update the user.
        const { error } = await supabase.auth.updateUser({
            password: password
        })

        setLoading(false)

        if (error) {
            toast.error("Error al actualizar", { description: error.message })
            return
        }

        toast.success("Contraseña actualizada con éxito", { description: "Ya puedes ingresar al panel." })
        router.push("/dashboard")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] p-4">
            <div className="w-full max-w-md space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="text-center space-y-2">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/20">
                        <ShieldCheck className="h-7 w-7" />
                    </div>
                    <h1 className="text-3xl font-black text-blue-950 tracking-tight">Nueva Contraseña</h1>
                    <p className="text-gray-500 text-sm font-medium">Establece tu nueva contraseña de acceso</p>
                </div>

                <Card className="border-none shadow-2xl shadow-blue-900/5 rounded-[2rem] overflow-hidden bg-white/80 backdrop-blur-xl">
                    <CardHeader className="pt-8 pb-4 text-center">
                        <CardTitle className="text-2xl font-bold text-gray-800">Seguridad Requerida</CardTitle>
                        <CardDescription className="text-gray-400">Ingresa una contraseña fuerte para proteger tu cuenta</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                        <form onSubmit={handleReset} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Nueva Contraseña</label>
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
                                        Restablecer Contraseña <ArrowRight className={`h-4 w-4 transition-transform ${passwordStrength.isValid ? 'group-hover:translate-x-1' : ''}`} />
                                    </span>
                                )}
                            </Button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                            <p className="text-sm text-gray-400 font-medium">
                                <Link href="/login" className="text-blue-600 font-bold hover:underline underline-offset-4">
                                    Volver a Iniciar Sesión
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
