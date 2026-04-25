"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { KeyRound, ShieldCheck, Loader2, Save } from "lucide-react"
import { updatePortalConfig } from "@/app/actions/portals"

interface PortalConfigFormProps {
    portalName: string
    portalLabel: string
    initialConfig: {
        clientId: string
        clientSecret: string
    }
}

export function PortalConfigForm({ portalName, portalLabel, initialConfig }: PortalConfigFormProps) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [config, setConfig] = useState(initialConfig)

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!config.clientId || !config.clientSecret) {
            toast.error("Por favor, ingresa tanto el Client ID como el Secret Key.")
            return
        }

        setIsLoading(true)
        try {
            await updatePortalConfig(portalName, config)
            toast.success(`Configuración de ${portalLabel} guardada correctamente.`)
            router.push("/marketing/portales")
        } catch (error: any) {
            toast.error(`Error al guardar: ${error.message}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden">
            <CardHeader className="bg-gray-50 border-b border-gray-100 p-8">
                <CardTitle className="flex items-center gap-3 text-2xl font-black">
                    <KeyRound className="h-6 w-6 text-indigo-600" />
                    Credenciales API
                </CardTitle>
                <CardDescription className="text-gray-500 font-medium text-sm mt-2">
                    Ingresa las llaves proporcionadas por el panel de desarrolladores de {portalLabel} para habilitar la publicación automática de tus inmuebles.
                </CardDescription>
                
                {portalName === 'mercadolibre' && (
                    <div className="mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-100 space-y-3">
                        <div className="flex items-center gap-2 text-amber-800 font-black text-xs uppercase tracking-widest">
                            <ShieldCheck className="h-4 w-4" />
                            Instrucciones de Configuración
                        </div>
                        <p className="text-xs text-amber-700 font-medium leading-relaxed">
                            Para que el sistema funcione, debes crear una "Aplicación" en <a href="https://developers.mercadolibre.com.ar/dev-center" target="_blank" className="font-black underline">Mercado Libre Dev Center</a> y configurar la siguiente <b>Redirect URI</b>:
                        </p>
                        <div className="bg-white p-3 rounded-xl border border-amber-200 font-mono text-[10px] text-amber-900 break-all">
                            {typeof window !== 'undefined' ? window.location.origin : '...'}/api/auth/callback/mercadolibre
                        </div>
                    </div>
                )}
            </CardHeader>
            <CardContent className="p-8">
                <form onSubmit={handleSave} className="space-y-8">
                    <div className="space-y-3">
                        <Label htmlFor="clientId" className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                            App ID / Client ID
                        </Label>
                        <Input
                            id="clientId"
                            type="text"
                            placeholder={`Ej. 3489127391273...`}
                            value={config.clientId}
                            onChange={(e) => setConfig({ ...config, clientId: e.target.value })}
                            className="h-14 rounded-2xl border-gray-100 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm placeholder:font-sans placeholder:text-gray-300 transition-all font-bold"
                            required
                        />
                    </div>

                    <div className="space-y-3">
                        <Label htmlFor="clientSecret" className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                            Client Secret / Secret Key
                        </Label>
                        <Input
                            id="clientSecret"
                            type="password"
                            placeholder="*************"
                            value={config.clientSecret}
                            onChange={(e) => setConfig({ ...config, clientSecret: e.target.value })}
                            className="h-14 rounded-2xl border-gray-100 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm placeholder:font-sans placeholder:text-gray-300 transition-all font-bold"
                            required
                        />
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => router.push("/marketing/portales")}
                            className="h-12 rounded-xl font-bold text-gray-500 px-6"
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="h-14 rounded-xl font-black bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 px-8 flex items-center gap-2 transition-all active:scale-95"
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <Save className="h-5 w-5" />
                            )}
                            GUARDAR CONFIGURACIÓN
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
