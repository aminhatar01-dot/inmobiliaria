"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { connectPortal, getGlobalPortalConfig } from "@/app/actions/portals"
import { Link2, Loader2, Mail, ExternalLink, Copy, Check, ChevronRight, Info, ShieldCheck, KeyRound } from "lucide-react"
import { useEffect } from "react"
import { toast } from "sonner"
import { PORTAL_LABELS } from "@inmocms/shared"
import { useRouter } from "next/navigation"

interface ConnectPortalDialogProps {
    portalName: string | null
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ConnectPortalDialog({
    portalName,
    open,
    onOpenChange
}: ConnectPortalDialogProps) {
    const router = useRouter()
    const [step, setStep] = useState(1) // 0: Config, 1: Email/Link, 2: Success
    const [subStep, setSubStep] = useState(1) // subSteps for step 0
    const [email, setEmail] = useState("")
    const [clientId, setClientId] = useState("")
    const [clientSecret, setClientSecret] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [feedUrl, setFeedUrl] = useState<string | null>(null)
    const [isCopied, setIsCopied] = useState(false)
    const [hasGlobalConfig, setHasGlobalConfig] = useState(true)
    const [isChecking, setIsChecking] = useState(true)

    useEffect(() => {
        if (open && portalName === 'mercadolibre') {
            checkConfig()
        } else {
            setIsChecking(false)
        }
    }, [open, portalName])

    const checkConfig = async () => {
        if (!portalName) return
        setIsChecking(true)
        try {
            const config = (await getGlobalPortalConfig(portalName)) as any
            if (!config || !config.client_id) {
                setHasGlobalConfig(false)
                setStep(0)
            } else {
                setHasGlobalConfig(true)
                // If it's the platform default, we can go straight to Step 1
                setStep(1)
                
                // If it's NOT a platform default, pre-fill keys
                if (!config.is_platform_default) {
                    setClientId(config.client_id)
                    setClientSecret(config.client_secret || "")
                }
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsChecking(false)
        }
    }

    const handleResetConfig = () => {
        setHasGlobalConfig(false)
        setStep(0)
    }

    if (!portalName) return null

    const handleConnect = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (step === 0) {
            if (!clientId || !clientSecret) {
                toast.error("Por favor, completa las credenciales API")
                return
            }
            setStep(1)
            return
        }

        if (!email) {
            toast.error("Por favor, ingrese un correo electrónico")
            return
        }

        setIsLoading(true)
        try {
            const configParams = !hasGlobalConfig ? { clientId, clientSecret } : undefined
            const origin = typeof window !== 'undefined' ? window.location.origin : undefined
            const result = await connectPortal(portalName, email, configParams, origin)
            
            if (result.type === 'redirect') {
                // For OAuth portals (Mercado Libre)
                window.location.href = result.url
                return
            }

            if (result.type === 'success') {
                // For XML/Feed portals
                setFeedUrl(result.feedUrl)
                setStep(2)
                toast.success("Configuración inicial completada")
                router.refresh()
            }
        } catch (error: any) {
            toast.error(`Error: ${error.message}`)
        } finally {
            setIsLoading(false)
        }
    }

    const copyToClipboard = () => {
        if (feedUrl) {
            navigator.clipboard.writeText(feedUrl)
            setIsCopied(true)
            toast.success("URL copiada al portapapeles")
            setTimeout(() => setIsCopied(false), 2000)
        }
    }

    return (
        <Dialog open={open} onOpenChange={(val) => {
            onOpenChange(val)
            if (!val) {
                setStep(1)
                setFeedUrl(null)
            }
        }}>
            <DialogContent className="sm:max-w-[500px] rounded-[2.5rem] p-0 border-none overflow-hidden shadow-2xl">
                <div className="bg-indigo-600 p-10 text-white relative">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <Link2 className="h-24 w-24" />
                    </div>
                    <DialogHeader className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            {!hasGlobalConfig && (
                                <>
                                    <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-black ${step === 0 ? 'bg-white text-indigo-600' : 'bg-indigo-400 text-white'}`}>0</span>
                                    <div className="h-px w-4 bg-indigo-400" />
                                </>
                            )}
                            <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-black ${step === 1 ? 'bg-white text-indigo-600' : 'bg-indigo-400 text-white'}`}>1</span>
                            <div className="h-px w-4 bg-indigo-400" />
                            <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-black ${step === 2 ? 'bg-white text-indigo-600' : 'bg-indigo-400 text-white'}`}>2</span>
                        </div>
                        <DialogTitle className="text-3xl font-black leading-tight tracking-tighter">
                            Vincular {PORTAL_LABELS[portalName as keyof typeof PORTAL_LABELS]}
                        </DialogTitle>
                        <DialogDescription className="text-indigo-100 font-medium mt-2 text-base">
                            {step === 0 
                                ? "Configuración Técnica Inicial (Solo una vez)"
                                : step === 1 
                                    ? "Sigue los pasos para conectar tu cuenta personal."
                                    : "Tu enlace de integración está listo."}
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <div className="p-10">
                    {isChecking ? (
                        <div className="flex flex-col items-center justify-center py-20 space-y-4">
                            <Loader2 className="h-12 w-12 animate-spin text-indigo-600" />
                            <p className="text-sm font-bold text-gray-500 animate-pulse">VERIFICANDO CONFIGURACIÓN...</p>
                        </div>
                    ) : step === 0 ? (
                        <div className="space-y-6">
                            {/* Sub-step Indicator */}
                            <div className="flex justify-between items-center px-4">
                                {[1, 2, 3, 4].map((s) => (
                                    <div key={s} className="flex items-center">
                                        <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-black ${subStep >= s ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                            {subStep > s ? <Check className="h-3 w-3" /> : s}
                                        </div>
                                        {s < 4 && <div className={`h-0.5 w-10 mx-1 ${subStep > s ? 'bg-indigo-600' : 'bg-gray-100'}`} />}
                                    </div>
                                ))}
                            </div>

                            {subStep === 1 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <div className="space-y-3 text-center">
                                        <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <ShieldCheck className="h-8 w-8 text-blue-600" />
                                        </div>
                                        <h3 className="text-xl font-black text-gray-900 leading-tight">1. Tu Cuenta de Mercado Libre</h3>
                                        <p className="text-sm text-gray-500 font-medium leading-relaxed px-4">
                                            Para vincular tus ventas, primero debes tener una cuenta real de Mercado Libre (o crear una nueva ahora).
                                        </p>
                                        <div className="grid grid-cols-2 gap-3 pt-4">
                                            <Button 
                                                asChild 
                                                variant="outline" 
                                                className="h-14 rounded-xl border-gray-100 font-bold hover:bg-gray-50"
                                            >
                                                <a href="https://www.mercadolibre.com.ar/registration" target="_blank">
                                                    CREAR CUENTA
                                                </a>
                                            </Button>
                                            <Button 
                                                asChild 
                                                variant="outline" 
                                                className="h-14 rounded-xl border-gray-100 font-bold hover:bg-gray-50"
                                            >
                                                <a href="https://www.mercadolibre.com.ar/auth/login" target="_blank">
                                                    INICIAR SESIÓN
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                    <Button onClick={() => setSubStep(2)} className="w-full h-14 bg-gray-900 text-white rounded-xl font-black">
                                        YA TENGO CUENTA, CONTINUAR
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            )}

                            {subStep === 2 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-black text-gray-900">2. Panel de Desarrolladores</h3>
                                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                            Ahora entra al <b>Dev Center</b> de Mercado Libre y haz clic en el botón amarillo que dice <b>"Crear Aplicación"</b>.
                                        </p>
                                        <Button 
                                            asChild 
                                            variant="outline" 
                                            className="w-full h-14 rounded-xl border-indigo-100 bg-indigo-50 text-indigo-700 font-bold hover:bg-indigo-100 hover:text-indigo-800"
                                        >
                                            <a href="https://developers.mercadolibre.com.ar/apps/list" target="_blank">
                                                <ExternalLink className="mr-2 h-5 w-5" />
                                                IR A MIS APLICACIONES
                                            </a>
                                        </Button>
                                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-[10px] text-amber-800 font-bold flex gap-3">
                                            <Info className="h-4 w-4 shrink-0" />
                                            <span>Si es tu primera vez, ML te pedirá completar unos datos básicos de desarrollador.</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button variant="ghost" onClick={() => setSubStep(1)} className="flex-1 h-14 rounded-xl font-bold text-gray-400">ATRÁS</Button>
                                        <Button onClick={() => setSubStep(3)} className="flex-[2] h-14 bg-gray-900 text-white rounded-xl font-black">
                                            LISTO, YA ESTOY CREANDO
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {subStep === 3 && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-black text-gray-900">3. Configura la URL de Retorno</h3>
                                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                            Dentro del formulario de tu App, baja hasta encontrar el campo <b>Redirect URI</b> y pega este enlace exacto:
                                        </p>
                                        <div className="bg-white p-4 rounded-2xl border-2 border-indigo-600 border-dashed font-mono text-[10px] text-indigo-600 break-all flex items-center justify-between gap-3">
                                            <span className="font-bold underline">{typeof window !== 'undefined' ? window.location.origin : '...'}/api/auth/callback/mercadolibre</span>
                                            <Button type="button" variant="ghost" size="icon" className="h-8 w-8 hover:bg-indigo-50 shrink-0" onClick={() => {
                                                navigator.clipboard.writeText(`${window.location.origin}/api/auth/callback/mercadolibre`)
                                                toast.success("Enlace copiado")
                                            }}>
                                                <Copy className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <p className="text-[10px] text-gray-400 font-bold italic text-center uppercase tracking-widest pt-2">
                                            ¡No olvides guardar los cambios en Mercado Libre!
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button variant="ghost" onClick={() => setSubStep(2)} className="flex-1 h-14 rounded-xl font-bold text-gray-400">ATRÁS</Button>
                                        <Button onClick={() => setSubStep(4)} className="flex-[2] h-14 bg-gray-900 text-white rounded-xl font-black">
                                            CONFIGURADO, SIGUIENTE
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {subStep === 4 && (
                                <form onSubmit={handleConnect} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-black text-gray-900">4. Pega tus Llaves</h3>
                                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                            Finalmente, copia el <b>App ID</b> y el <b>Client Secret</b> que generó Mercado Libre para tu nueva aplicación.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">App ID / Client ID</Label>
                                                <Input
                                                    value={clientId}
                                                    onChange={(e) => setClientId(e.target.value)}
                                                    placeholder="Ej: 123456789"
                                                    className="h-12 rounded-xl border-gray-100 bg-gray-50 font-bold"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Secret Key</Label>
                                                <Input
                                                    type="password"
                                                    value={clientSecret}
                                                    onChange={(e) => setClientSecret(e.target.value)}
                                                    placeholder="Tu clave secreta"
                                                    className="h-12 rounded-xl border-gray-100 bg-gray-50 font-bold"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button variant="ghost" onClick={() => setSubStep(3)} className="flex-1 h-14 rounded-xl font-bold text-gray-400">ATRÁS</Button>
                                        <Button type="submit" className="flex-[2] h-14 bg-indigo-600 text-white rounded-xl font-black shadow-xl shadow-indigo-500/20">
                                            GUARDAR Y VINCULAR TOTAL
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    ) : step === 1 ? (
                        <form onSubmit={handleConnect} className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-gray-400">
                                        Tu Correo en {PORTAL_LABELS[portalName as keyof typeof PORTAL_LABELS]}
                                    </Label>
                                    {portalName === 'mercadolibre' && (
                                        <button 
                                            type="button" 
                                            onClick={handleResetConfig}
                                            className="text-[10px] font-black text-indigo-600 hover:underline"
                                        >
                                            EDITAR CONFIGURACIÓN TÉCNICA
                                        </button>
                                    )}
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="tu-cuenta@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-12 h-16 rounded-2xl border-gray-100 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 font-bold text-lg"
                                        required
                                    />
                                </div>
                                <div className="flex gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100 italic">
                                    <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                    <p className="text-xs text-blue-800 font-medium leading-relaxed">
                                        {portalName === 'mercadolibre' 
                                            ? "Al continuar, serás redirigido a Mercado Libre para autorizar el acceso de forma segura."
                                            : "Generaremos un enlace único XML que deberás proporcionar a tu portal para la sincronización."}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-16 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black shadow-xl shadow-indigo-500/20 text-lg group"
                                >
                                    {isLoading ? (
                                        <Loader2 className="h-6 w-6 animate-spin mr-2" />
                                    ) : (
                                        <>
                                            {portalName === 'mercadolibre' ? 'IR A MERCADO LIBRE' : 'SIGUIENTE PASO'}
                                            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => onOpenChange(false)}
                                    className="w-full h-12 rounded-xl font-bold text-gray-500"
                                >
                                    CANCELAR
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="space-y-4">
                                <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 text-emerald-900">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                            <Check className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-black text-lg">Enlace Generado</h3>
                                    </div>
                                    <p className="text-sm font-medium opacity-80 leading-relaxed">
                                        Copia el siguiente enlace y envíalo a tu asesor comercial de {PORTAL_LABELS[portalName as keyof typeof PORTAL_LABELS]} para completar la vinculación.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Tu URL de Integración XML</Label>
                                    <div className="flex gap-2">
                                        <div className="flex-1 bg-gray-900 text-green-400 p-4 rounded-2xl font-mono text-xs overflow-x-auto whitespace-nowrap self-center border border-gray-800">
                                            {feedUrl}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={copyToClipboard}
                                            className="h-12 w-12 rounded-2xl shrink-0 border-gray-100 hover:bg-gray-50 bg-white"
                                        >
                                            {isCopied ? <Check className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5 text-gray-500" />}
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <Button
                                onClick={() => onOpenChange(false)}
                                className="w-full h-16 bg-gray-900 text-white rounded-2xl font-black text-lg"
                            >
                                ENTENDIDO
                            </Button>
                        </div>
                    )}
                </div>

                <div className="bg-gray-50 p-6 flex items-center justify-center border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-emerald-500" />
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Cifrado de Punto a Punto activo</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
