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
import { connectPortal, getGlobalPortalConfig, connectPortalManualToken } from "@/app/actions/portals"
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
    const [step, setStep] = useState(1) // 1: Email/Link, 2: Success
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [feedUrl, setFeedUrl] = useState<string | null>(null)
    const [isCopied, setIsCopied] = useState(false)

    if (!portalName) return null

    const handleConnect = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!email) {
            toast.error("Por favor, ingrese un correo electrónico")
            return
        }

        setIsLoading(true)
        try {
            // Allow ML to use real connectPortal flow
            const result = await connectPortal(portalName, email)
            
            if ('type' in result && result.type === 'error') {
                toast.error(`Error: ${result.message}`)
                return
            }

            if (result.type === 'redirect') {
                window.location.href = result.url
                return
            }

            if (result.type === 'success') {
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
            toast.success("Copiado al portapapeles")
            setTimeout(() => setIsCopied(false), 2000)
        }
    }

    return (
        <Dialog open={open} onOpenChange={(val) => {
            onOpenChange(val)
            if (!val) {
                setStep(1) // Force leap over config step
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
                            <span className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-black ${step === 2 ? 'bg-white text-indigo-600' : 'bg-indigo-400 text-white'}`}>2</span>
                        </div>
                        <DialogTitle className="text-3xl font-black leading-tight tracking-tighter">
                            Vincular {PORTAL_LABELS[portalName as keyof typeof PORTAL_LABELS]}
                        </DialogTitle>
                        <DialogDescription className="text-indigo-100 font-medium mt-2 text-base">
                            {step === 1 
                                ? "Sigue los pasos para conectar tu cuenta personal."
                                : "Tu enlace de integración está listo."}
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <div className="p-10">
                    {step === 1 ? (
                        <form onSubmit={handleConnect} className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-gray-400">
                                        Tu Correo en {PORTAL_LABELS[portalName as keyof typeof PORTAL_LABELS]}
                                    </Label>
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
                            </div>

                            <div className="flex gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                <div className="space-y-3 w-full">
                                    <p className="text-xs text-blue-800 font-medium leading-relaxed">
                                        {portalName === 'mercadolibre' 
                                            ? "Serás redirigido a Mercado Libre para iniciar sesión y autorizar la conexión con InmoCMS de forma segura. Solo necesitas tu cuenta normal."
                                            : `IMPORTANTE: ${PORTAL_LABELS[portalName as keyof typeof PORTAL_LABELS]} no posee un sistema de conexión automática. Primero debes tener una cuenta activa con ellos. Luego, te daremos un Enlace XML que deberás pegar en el panel de control de tu cuenta en su página web.`}
                                    </p>
                                    <div className="pt-2 border-t border-blue-200/60 flex items-center justify-between">
                                        <span className="text-[10px] text-blue-700 font-bold uppercase">¿Aún no tienes cuenta?</span>
                                        <a 
                                            href={
                                                portalName === 'mercadolibre' ? 'https://www.mercadolibre.com/jms/mla/lgz/login' :
                                                portalName === 'argenprop' ? 'https://www.argenprop.com/inmobiliarias/registro' :
                                                'https://www.zonaprop.com.ar/inmobiliarias/registro.html'
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-xs font-black text-blue-700 hover:text-blue-900 underline flex items-center gap-1"
                                        >
                                            Crear cuenta nueva <ExternalLink className="h-3 w-3" />
                                        </a>
                                    </div>
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
                                            {portalName === 'mercadolibre' ? 'VINCULAR CON MERCADO LIBRE' : 'GENERAR ENLACE XML'}
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
                                        <h3 className="font-black text-lg">
                                            {portalName === 'mercadolibre' ? '¡Cuenta Conectada!' : 'Enlace Generado'}
                                        </h3>
                                    </div>
                                    <p className="text-sm font-medium opacity-80 leading-relaxed">
                                        {portalName === 'mercadolibre' 
                                            ? `Tu cuenta está vinculada. Ahora cuentas con el acceso directo para crear publicaciones desde el panel de propiedades.` 
                                            : `Copia el siguiente enlace y envíalo a tu asesor comercial de ${PORTAL_LABELS[portalName as keyof typeof PORTAL_LABELS]} para completar la vinculación.`}
                                    </p>
                                </div>

                                {portalName !== 'mercadolibre' && (
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
                                )}
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
