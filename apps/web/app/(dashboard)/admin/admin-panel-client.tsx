"use client"

import { useState } from "react"
import { generateDemoAccess, revokeDemoAccess, getDemoSessions } from "@/app/actions/admin"
import { toast } from "sonner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Shield, Copy, Mail, Clock, RefreshCw, Zap, Users,
    CheckCircle2, XCircle, Loader2, KeyRound, Trash2
} from "lucide-react"
import { formatDistanceToNow, isPast } from "date-fns"
import { es } from "date-fns/locale"

interface DemoSession {
    id: string
    email: string
    password_code: string
    expires_at: string
    created_at: string
    used_at: string | null
}

export default function AdminPanelClient({ initialSessions }: { initialSessions: DemoSession[] }) {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [sessions, setSessions] = useState<DemoSession[]>(initialSessions)
    const [lastGenerated, setLastGenerated] = useState<{ code: string; email: string; expiresAt: string } | null>(null)

    const handleGenerate = async () => {
        if (!email || !email.includes("@")) {
            toast.error("Ingresá un email válido")
            return
        }
        setLoading(true)
        try {
            const result = await generateDemoAccess(email)
            if (result.success && result.code) {
                setLastGenerated({ code: result.code, email, expiresAt: result.expiresAt! })
                setEmail("")
                toast.success("Acceso demo generado", { description: `El código es: ${result.code}` })
                await refreshSessions()
            } else {
                toast.error("Error al generar acceso", { description: result.error })
            }
        } finally {
            setLoading(false)
        }
    }

    const refreshSessions = async () => {
        setRefreshing(true)
        try {
            const data = await getDemoSessions()
            setSessions(data)
        } finally {
            setRefreshing(false)
        }
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        toast.success("Copiado al portapapeles")
    }

    const handleRevoke = async (emailToRevoke: string) => {
        const result = await revokeDemoAccess(emailToRevoke)
        if (result.success) {
            toast.success("Acceso revocado", { description: emailToRevoke })
            await refreshSessions()
        } else {
            toast.error("Error al revocar", { description: result.error })
        }
        if (lastGenerated?.email === emailToRevoke) setLastGenerated(null)
    }

    const activeSessions = sessions.filter(s => !isPast(new Date(s.expires_at)))
    const expiredSessions = sessions.filter(s => isPast(new Date(s.expires_at)))

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-20">
            {/* Header */}
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                    <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                    <h1 className="text-3xl font-black text-gray-800 tracking-tight">Panel Administrador</h1>
                    <p className="text-sm text-gray-500 font-medium">Gestión de accesos demo y control del sistema</p>
                </div>
                <Badge className="ml-auto bg-violet-100 text-violet-700 border-0 font-bold px-3 py-1">
                    <Zap className="h-3 w-3 mr-1" /> Superadmin
                </Badge>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
                <Card className="border-none shadow-sm rounded-3xl bg-gradient-to-br from-violet-50 to-indigo-50">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="h-10 w-10 rounded-2xl bg-violet-100 flex items-center justify-center"><Users className="h-5 w-5 text-violet-600" /></div>
                        <div>
                            <p className="text-2xl font-black text-gray-800">{sessions.length}</p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total demos</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-sm rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="h-10 w-10 rounded-2xl bg-green-100 flex items-center justify-center"><CheckCircle2 className="h-5 w-5 text-green-600" /></div>
                        <div>
                            <p className="text-2xl font-black text-gray-800">{activeSessions.length}</p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Activos</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-sm rounded-3xl bg-gradient-to-br from-red-50 to-rose-50">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="h-10 w-10 rounded-2xl bg-red-100 flex items-center justify-center"><XCircle className="h-5 w-5 text-red-500" /></div>
                        <div>
                            <p className="text-2xl font-black text-gray-800">{expiredSessions.length}</p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Vencidos</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Generator Card */}
                <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6">
                        <CardTitle className="text-white font-black flex items-center gap-2">
                            <KeyRound className="h-5 w-5" /> Generar Acceso Demo
                        </CardTitle>
                        <p className="text-violet-200 text-sm font-medium">Crea un código de 8 caracteres con validez de 7 días</p>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email del cliente</label>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="cliente@empresa.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                                    className="flex-1 h-12 rounded-xl bg-gray-50 border-gray-100 focus:bg-white"
                                />
                                <Button
                                    onClick={handleGenerate}
                                    disabled={loading}
                                    className="h-12 px-6 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-lg shadow-violet-500/20"
                                >
                                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Zap className="h-4 w-4" />}
                                </Button>
                            </div>
                        </div>

                        {/* Last generated result */}
                        {lastGenerated && (
                            <div className="mt-4 p-5 bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 rounded-2xl space-y-4">
                                <div className="flex items-center gap-2 text-violet-700">
                                    <CheckCircle2 className="h-4 w-4" />
                                    <span className="text-sm font-bold">Acceso generado exitosamente</span>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1">
                                        <Mail className="h-3 w-3" /> Email
                                    </p>
                                    <div className="flex items-center justify-between bg-white rounded-xl px-4 py-2.5 border border-violet-100">
                                        <span className="text-sm font-bold text-gray-800">{lastGenerated.email}</span>
                                        <button onClick={() => copyToClipboard(lastGenerated.email)} className="text-gray-400 hover:text-violet-600 transition-colors">
                                            <Copy className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1">
                                        <KeyRound className="h-3 w-3" /> Contraseña / Código
                                    </p>
                                    <div className="flex items-center justify-between bg-white rounded-xl px-4 py-2.5 border border-violet-100">
                                        <span className="text-xl font-black text-violet-700 tracking-widest">{lastGenerated.code}</span>
                                        <button onClick={() => copyToClipboard(lastGenerated.code)} className="text-gray-400 hover:text-violet-600 transition-colors">
                                            <Copy className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <Clock className="h-3 w-3" />
                                    <span>Válido hasta: <strong>{lastGenerated.expiresAt}</strong></span>
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full rounded-xl font-bold border-violet-200 text-violet-700 hover:bg-violet-50"
                                    onClick={() => copyToClipboard(`Email: ${lastGenerated.email}\nContraseña: ${lastGenerated.code}\nVálido hasta: ${lastGenerated.expiresAt}\n\nIngresar en: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://tu-dominio.com'}/login`)}
                                >
                                    <Copy className="h-4 w-4 mr-2" /> Copiar credenciales completas
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* How to share */}
                <Card className="border-none shadow-sm rounded-3xl">
                    <CardHeader className="p-6 pb-4">
                        <CardTitle className="font-black text-gray-800 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-violet-500" /> Instrucciones para el cliente
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 space-y-4">
                        {[
                            { step: "1", title: "Enviá las credenciales", desc: "Compartí el email y el código al cliente por WhatsApp o email. El sistema acepta el código directamente como contraseña." },
                            { step: "2", title: "El cliente accede", desc: "Ingresa en la pantalla de login con su email y el código como contraseña. El acceso es inmediato (email verificado)." },
                            { step: "3", title: "7 días de demo", desc: "Tiene 7 días para explorar el sistema completo sin restricciones de suscripción." },
                            { step: "4", title: "Al vencer el demo", desc: "El sistema le pide que se suscriba y cambie su contraseña. Puede continuar con el mismo email." },
                        ].map(({ step, title, desc }) => (
                            <div key={step} className="flex gap-4">
                                <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 font-black text-sm flex-shrink-0">{step}</div>
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">{title}</p>
                                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Sessions Table */}
            <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
                <CardHeader className="p-6 pb-4 flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="font-black text-gray-800 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-gray-400" /> Sesiones Demo
                        </CardTitle>
                        <p className="text-xs text-gray-400 font-medium mt-1">Historial de accesos generados</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={refreshSessions} className="rounded-xl text-gray-400 hover:text-violet-600 hover:bg-violet-50">
                        <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
                    </Button>
                </CardHeader>
                <CardContent className="p-0">
                    {sessions.length === 0 ? (
                        <div className="p-12 text-center">
                            <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-gray-300" />
                            </div>
                            <p className="font-bold text-gray-500">Sin sesiones demo aún</p>
                            <p className="text-sm text-gray-400 mt-1">Generá el primer acceso usando el formulario de arriba.</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-50">
                            {sessions.map((session) => {
                                const expired = isPast(new Date(session.expires_at))
                                return (
                                    <div key={session.id} className={`flex items-center gap-4 p-4 ${expired ? "opacity-60" : "hover:bg-violet-50/30"} transition-colors`}>
                                        <div className={`h-10 w-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${expired ? "bg-gray-100" : "bg-violet-100"}`}>
                                            <Mail className={`h-5 w-5 ${expired ? "text-gray-400" : "text-violet-600"}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-gray-800 text-sm truncate">{session.email}</p>
                                            <p className="text-[10px] text-gray-400 font-medium">
                                                Código: <span className="font-black text-gray-600 tracking-widest">{session.password_code}</span>
                                            </p>
                                        </div>
                                        <div className="text-right flex-shrink-0 hidden md:block">
                                            <p className="text-xs text-gray-400">
                                                {expired ? "Venció" : "Vence"}{" "}
                                                <span className="font-bold text-gray-600">
                                                    {formatDistanceToNow(new Date(session.expires_at), { addSuffix: true, locale: es })}
                                                </span>
                                            </p>
                                        </div>
                                        <Badge className={`border-0 font-bold text-[10px] uppercase tracking-wider ${expired ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
                                            {expired ? "Vencido" : "Activo"}
                                        </Badge>
                                        {!expired && (
                                            <button
                                                onClick={() => handleRevoke(session.email)}
                                                className="h-8 w-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                                                title="Revocar acceso"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
