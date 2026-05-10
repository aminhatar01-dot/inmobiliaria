
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, MessageCircle, Server, Key, Send, CheckCircle2, AlertCircle, Zap } from "lucide-react"
import { toast } from "sonner"
import { updateCommunicationSettings, testSMTP, testWhatsApp, testResend } from "@/app/actions/settings-comm"
import { ensureWhatsAppInstance, getWhatsAppQR, checkWhatsAppConnection, logoutWhatsApp } from "@/app/actions/whatsapp-evolution"

const commSchema = z.object({
    smtp_host: z.string().optional(),
    smtp_port: z.string().optional(),
    smtp_user: z.string().optional().or(z.literal('')),
    smtp_pass: z.string().optional(),
    smtp_from_name: z.string().optional(),
    smtp_from_email: z.string().optional().or(z.literal('')),
    resend_api_key: z.string().optional(),
    whatsapp_mode: z.enum(['link', 'api', 'webhook']),
    whatsapp_api_token: z.string().optional(),
    whatsapp_phone_id: z.string().optional(),
    evolution_api_url: z.string().optional(),
    evolution_api_key: z.string().optional()
})

type CommFormValues = z.infer<typeof commSchema>

interface CommunicationFormProps {
    initialData: any
}

export function CommunicationForm({ initialData }: CommunicationFormProps) {
    const [loading, setLoading] = useState(false)
    const [testing, setTesting] = useState(false)
    const [qrCode, setQrCode] = useState<string | null>(null)
    const [isConnecting, setIsConnecting] = useState(false)
    const [waStatus, setWaStatus] = useState<string | null>(initialData?.evolution_api_url ? 'connected' : null)
    
    // Asumimos que initialData.tenant_id viene del backend
    const tenantId = initialData?.tenant_id || "default_tenant"

    const form = useForm<CommFormValues>({
        resolver: zodResolver(commSchema),
        defaultValues: {
            smtp_host: initialData?.smtp_host || "",
            smtp_port: initialData?.smtp_port?.toString() || "587",
            smtp_user: initialData?.smtp_user || "",
            smtp_pass: initialData?.smtp_pass || "",
            smtp_from_name: initialData?.smtp_from_name || "",
            smtp_from_email: initialData?.smtp_from_email || "",
            resend_api_key: initialData?.resend_api_key || "",
            whatsapp_mode: (initialData?.whatsapp_mode as 'link' | 'api' | 'webhook') || "link",
            whatsapp_api_token: initialData?.whatsapp_api_token || "",
            whatsapp_phone_id: initialData?.whatsapp_phone_id || "",
            evolution_api_url: initialData?.evolution_api_url || "",
            evolution_api_key: initialData?.evolution_api_key || ""
        }
    })

    async function onSubmit(values: CommFormValues) {
        setLoading(true)
        try {
            const formData = new FormData()
            Object.entries(values).forEach(([key, value]) => {
                if (value !== undefined && value !== null) formData.append(key, value.toString())
            })
            await updateCommunicationSettings(formData)
            toast.success("Configuración guardada correctamente")
        } catch (error: any) {
            toast.error(error.message || "Error al guardar la configuración")
        } finally {
            setLoading(false)
        }
    }

    async function handleTestSMTP() {
        setTesting(true)
        try {
            const formData = new FormData()
            const values = form.getValues()
            Object.entries(values).forEach(([key, value]) => {
                if (value !== undefined && value !== null) formData.append(key, value.toString())
            })
            const res = await testSMTP(formData)
            if (res.success) {
                toast.success(res.message)
            } else {
                toast.error(res.error)
            }
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setTesting(false)
        }
    }

    async function handleTestResend() {
        setTesting(true)
        try {
            const formData = new FormData()
            const values = form.getValues()
            Object.entries(values).forEach(([key, value]) => {
                if (value !== undefined && value !== null) formData.append(key, value.toString())
            })
            const res = await testResend(formData)
            if (res.success) {
                toast.success(res.message)
            } else {
                toast.error(res.error)
            }
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setTesting(false)
        }
    }

    async function handleTestWhatsApp() {
        setTesting(true)
        try {
            const formData = new FormData()
            const values = form.getValues()
            Object.entries(values).forEach(([key, value]) => {
                if (value !== undefined && value !== null) formData.append(key, value.toString())
            })
            const res = await testWhatsApp(formData)
            if (res.success) {
                toast.success(res.message)
            } else {
                toast.error(res.error)
            }
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setTesting(false)
        }
    }

    async function handleConnectWhatsApp() {
        setIsConnecting(true)
        setQrCode(null)
        setWaStatus(null)
        try {
            toast.info("Conectando con el servidor de WhatsApp...")
            const createRes = await ensureWhatsAppInstance(tenantId)
            if (!createRes.success) {
                throw new Error(typeof createRes.error === 'string' ? createRes.error : "No se pudo conectar con el servidor de WhatsApp. Verifica que esté activo.")
            }

            // Si la creación ya devolvió un QR, usarlo directamente
            if ('qr' in createRes && createRes.qr) {
                setQrCode(createRes.qr)
                setWaStatus('pending')
                toast.success("¡QR Generado! Escanéalo con tu WhatsApp.")
                startConnectionMonitor()
                return
            }
            
            toast.info("Generando código QR... esto puede tomar unos segundos.")
            
            let finalQr: string | null = null;
            let attempts = 0;
            const maxAttempts = 20; // 20 intentos * 5 seg = ~100 seg max
            
            while (attempts < maxAttempts && !finalQr) {
                // Esperar antes de reintentar (el VPS necesita tiempo para arrancar WebSocket)
                await new Promise(r => setTimeout(r, 5000))
                
                try {
                    const qrRes = await getWhatsAppQR(tenantId)
                    
                    if (qrRes.status === 'qr' && qrRes.qr) {
                        finalQr = qrRes.qr
                    } else if (qrRes.status === 'connected') {
                        setWaStatus('connected')
                        toast.success("¡Tu WhatsApp ya estaba conectado!")
                        return;
                    } else if (qrRes.status === 'error') {
                        console.log('[UI] QR Error:', qrRes.error)
                    }
                    // loading/timeout: continuar intentando
                } catch (e) {
                    console.log('[UI] QR fetch attempt failed, retrying...')
                }
                
                attempts++;
                if (attempts % 4 === 0 && !finalQr) {
                    toast.info(`Esperando respuesta del servidor... (intento ${attempts}/${maxAttempts})`)
                }
            }

            if (finalQr) {
                setQrCode(finalQr)
                setWaStatus('pending')
                toast.success("¡QR Generado! Escanéalo ahora.")
                startConnectionMonitor()
            } else {
                throw new Error("El servidor tardó demasiado en generar el QR. Puede que necesite más memoria. Intenta de nuevo en 30 segundos.")
            }
        } catch (error: any) {
            toast.error(error.message || "Error inesperado")
            setWaStatus(null)
        } finally {
            setIsConnecting(false)
        }
    }

    function startConnectionMonitor() {
        const checkInterval = setInterval(async () => {
            try {
                const status = await checkWhatsAppConnection(tenantId)
                if (status === 'connected') {
                    setWaStatus('connected')
                    setQrCode(null)
                    clearInterval(checkInterval)
                    toast.success("¡WhatsApp Conectado con éxito!")
                }
            } catch { /* silenciar errores de polling */ }
        }, 5000)
        
        // Limpiar después de 5 minutos
        setTimeout(() => clearInterval(checkInterval), 300000)
    }


    async function handleDisconnectWhatsApp() {
        if (!confirm("¿Seguro que deseas cerrar la sesión de WhatsApp? Dejarás de enviar mensajes automáticos.")) return;
        setIsConnecting(true)
        try {
            await logoutWhatsApp(tenantId)
            setWaStatus('disconnected')
            setQrCode(null)
            toast.success("Sesión cerrada correctamente")
        } catch (error: any) {
            toast.error("Error al desconectar")
        } finally {
            setIsConnecting(false)
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 animate-in fade-in duration-500">
            <div className="grid gap-8 md:grid-cols-2">
                
                {/* Email Settings */}
                <Card className="border-none shadow-xl shadow-blue-500/5 rounded-[2.5rem] overflow-hidden bg-white/50 backdrop-blur-sm">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2.5 rounded-2xl">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl font-black">Email Saliente</CardTitle>
                                <CardDescription className="text-blue-100 font-medium">Configura cómo la agencia envía correos electrónicos</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8">
                        {/* Conectar Gmail vía OAuth2 directo (refresh automático de token) */}
                        <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-100">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                        <Mail className="h-5 w-5 text-red-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-gray-800">Gmail OAuth</p>
                                        <p className="text-xs text-gray-500">
                                            {initialData?.google_access_token
                                                ? '✅ Conectado — el token se refresca automáticamente'
                                                : 'Conectá tu cuenta de Google para enviar correos sin contraseña'}
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    variant={initialData?.google_access_token ? "outline" : "default"}
                                    size="sm"
                                    onClick={() => window.location.href = '/api/auth/google/connect'}
                                    className={initialData?.google_access_token
                                        ? "rounded-xl border-green-200 text-green-700 hover:bg-green-50 font-bold"
                                        : "rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg shadow-red-500/20"
                                    }
                                >
                                    {initialData?.google_access_token ? 'Reconectar' : 'Conectar Gmail'}
                                </Button>
                            </div>
                        </div>

                        <Tabs defaultValue="smtp" className="space-y-6">
                            <TabsList className="grid grid-cols-2 bg-gray-100/50 p-1 rounded-2xl h-12">
                                <TabsTrigger value="smtp" className="rounded-xl font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                    <Server className="h-4 w-4 mr-2" /> SMTP
                                </TabsTrigger>
                                <TabsTrigger value="resend" className="rounded-xl font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                    <Key className="h-4 w-4 mr-2" /> Resend (Gratis)
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="smtp" className="space-y-4 m-0">
                                <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex gap-3 mb-4">
                                    <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                    <div className="space-y-2">
                                        <p className="text-xs font-bold text-blue-900 leading-relaxed">
                                            ¿Usas una cuenta de Gmail (@gmail.com)?
                                        </p>
                                        <p className="text-xs font-medium text-blue-800 leading-relaxed">
                                            Si no tienes un dominio propio y usas Gmail, esta es la opción correcta. Google no permite usar tu contraseña normal; debes generar una <strong>"Contraseña de Aplicación"</strong>.
                                        </p>
                                        <ol className="text-xs font-medium text-blue-800 list-decimal list-inside space-y-1">
                                            <li>Ve a tu <a href="https://myaccount.google.com/security" target="_blank" className="font-black underline text-blue-700">Cuenta de Google (Seguridad)</a>.</li>
                                            <li>Asegúrate de tener la <strong>Verificación en 2 pasos</strong> activada.</li>
                                            <li>Busca "Contraseñas de aplicaciones" y crea una nueva (ej. llámala InmoCMS).</li>
                                            <li>Copia esa contraseña de 16 letras y pégala aquí abajo. Usa puerto <strong>587</strong> y <strong>smtp.gmail.com</strong>.</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Servidor (Host)</Label>
                                        <Input {...form.register("smtp_host")} placeholder="smtp.gmail.com" className="rounded-xl border-gray-100 bg-white/50 h-11" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Puerto</Label>
                                        <Input {...form.register("smtp_port")} placeholder="587" className="rounded-xl border-gray-100 bg-white/50 h-11" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Usuario / Email</Label>
                                    <Input {...form.register("smtp_user")} placeholder="agencia@gmail.com" className="rounded-xl border-gray-100 bg-white/50 h-11" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Contraseña de Aplicación</Label>
                                    <Input {...form.register("smtp_pass")} type="password" placeholder="••••••••" className="rounded-xl border-gray-100 bg-white/50 h-11" />
                                </div>
                                <div className="pt-4 flex gap-3">
                                    <Button 
                                        type="button" 
                                        variant="outline" 
                                        onClick={handleTestSMTP}
                                        disabled={testing}
                                        className="rounded-xl border-2 font-bold h-11 flex-1 border-blue-100 text-blue-600 hover:bg-blue-50"
                                    >
                                        {testing ? "Probando..." : "Probar Conexión SMTP"}
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="resend" className="space-y-4 m-0">
                                <div className="bg-orange-50 border border-orange-100 p-4 rounded-2xl flex gap-3">
                                    <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                                    <p className="text-xs font-medium text-orange-800 leading-relaxed">
                                        <strong>Resend requiere un dominio propio</strong> (ej: @tuempresa.com). No permite enviar correos masivos usando @gmail.com o @hotmail.com debido a las leyes anti-spam. Si no tienes dominio, usa la pestaña SMTP.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">API Key de Resend</Label>
                                    <Input {...form.register("resend_api_key")} placeholder="re_123..." className="rounded-xl border-gray-100 bg-white/50 h-11 text-xs font-mono" />
                                </div>
                                <div className="pt-4 flex gap-3">
                                    <Button 
                                        type="button" 
                                        variant="outline" 
                                        onClick={handleTestResend}
                                        disabled={testing}
                                        className="rounded-xl border-2 font-bold h-11 flex-1 border-orange-100 text-orange-600 hover:bg-orange-50"
                                    >
                                        {testing ? "Probando..." : "Probar Conexión Resend"}
                                    </Button>
                                </div>
                            </TabsContent>
                        </Tabs>

                        <div className="mt-8 pt-8 border-t border-gray-50 space-y-4">
                            <h4 className="text-sm font-black text-gray-900">Identidad del Remitente</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Nombre</Label>
                                    <Input {...form.register("smtp_from_name")} placeholder="Tu Inmobiliaria" className="rounded-xl border-gray-100 bg-white/50 h-11" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Remitente</Label>
                                    <Input {...form.register("smtp_from_email")} placeholder="no-reply@agencia.com" className="rounded-xl border-gray-100 bg-white/50 h-11" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* WhatsApp Settings */}
                <div className="space-y-8">
                    <Card className="border-none shadow-xl shadow-green-500/5 rounded-[2.5rem] overflow-hidden bg-white/50 backdrop-blur-sm">
                        <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2.5 rounded-2xl">
                                    <MessageCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <CardTitle className="text-2xl font-black">WhatsApp Business</CardTitle>
                                    <CardDescription className="text-green-100 font-medium">Configura cómo interactúas con tus prospectos</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-4">
                                <div 
                                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${form.watch("whatsapp_mode") === 'link' ? 'border-green-500 bg-green-50' : 'border-gray-100 hover:border-gray-200'}`}
                                    onClick={() => form.setValue("whatsapp_mode", "link")}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h5 className="font-black text-gray-900">Enlace Directo (Gratis)</h5>
                                        {form.watch("whatsapp_mode") === 'link' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                                    </div>
                                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                        Abre WhatsApp Web con el mensaje pre-cargado. Seguro, gratuito y fácil de usar desde el navegador.
                                    </p>
                                </div>

                                <div 
                                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${form.watch("whatsapp_mode") === 'api' ? 'border-green-500 bg-green-50' : 'border-gray-100 hover:border-gray-200'}`}
                                    onClick={() => form.setValue("whatsapp_mode", "api")}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h5 className="font-black text-gray-900">Automatización Oficial (Meta Cloud API)</h5>
                                        {form.watch("whatsapp_mode") === 'api' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                                    </div>
                                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                        Envío automático usando WhatsApp Business Oficial. Requiere cuenta en Meta for Developers.
                                    </p>
                                </div>

                                <div 
                                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${form.watch("whatsapp_mode") === 'webhook' ? 'border-green-500 bg-green-50' : 'border-gray-100 hover:border-gray-200'}`}
                                    onClick={() => form.setValue("whatsapp_mode", "webhook")}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h5 className="font-black text-gray-900">WhatsApp Nativo (Escaneo QR)</h5>
                                        {form.watch("whatsapp_mode") === 'webhook' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                                    </div>
                                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                        Víncula cualquier teléfono escaneando un código QR. Es la forma más fácil y rápida.
                                    </p>
                                </div>
                            </div>

                            {form.watch("whatsapp_mode") === 'webhook' && (
                                <div className="space-y-6 animate-in slide-in-from-top-4 duration-300">
                                    <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl flex flex-col items-center justify-center text-center gap-4">
                                        
                                        {waStatus !== 'connected' && !qrCode && (
                                            <>
                                                <div className="bg-blue-100 p-4 rounded-full">
                                                    <MessageCircle className="h-8 w-8 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-black text-blue-900 mb-1">WhatsApp no conectado</h4>
                                                    <p className="text-xs font-medium text-blue-800/80">
                                                        Víncula tu WhatsApp escaneando un código QR. No requiere configuración técnica.
                                                    </p>
                                                </div>
                                                <Button 
                                                    type="button" 
                                                    onClick={handleConnectWhatsApp}
                                                    disabled={isConnecting}
                                                    className="rounded-xl mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 px-8 shadow-lg shadow-blue-200"
                                                >
                                                    {isConnecting ? "Generando QR..." : "Generar Código QR"}
                                                </Button>
                                            </>
                                        )}

                                        {qrCode && waStatus !== 'connected' && (
                                            <div className="flex flex-col items-center space-y-4">
                                                <div className="bg-white p-4 rounded-3xl shadow-2xl border-4 border-blue-50">
                                                    <img src={qrCode} alt="WhatsApp QR Code" className="w-56 h-56" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-black text-blue-900 mb-1">Escanea el Código QR</h4>
                                                    <p className="text-xs font-medium text-blue-800/80 max-w-xs">
                                                        Abre WhatsApp en tu teléfono {'>'} Dispositivos Vinculados {'>'} Vincular un dispositivo.
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {waStatus === 'connected' && (
                                            <>
                                                <div className="bg-green-100 p-4 rounded-full animate-bounce">
                                                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-black text-green-900 mb-1">¡WhatsApp Conectado!</h4>
                                                    <p className="text-xs font-medium text-green-800/80">
                                                        Tu cuenta está vinculada y las automatizaciones están activas.
                                                    </p>
                                                </div>
                                                <Button 
                                                    type="button" 
                                                    onClick={handleDisconnectWhatsApp}
                                                    variant="outline"
                                                    disabled={isConnecting}
                                                    className="rounded-xl mt-2 border-red-200 text-red-600 hover:bg-red-50 font-bold h-11 px-8"
                                                >
                                                    Desconectar cuenta
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}

                            {form.watch("whatsapp_mode") === 'api' && (
                                <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                                    <div className="bg-green-50 border border-green-100 p-4 rounded-2xl flex gap-3 mb-4">
                                        <AlertCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                        <div className="space-y-2">
                                            <p className="text-xs font-bold text-green-900 leading-relaxed">
                                                ¿Cómo obtener estos datos?
                                            </p>
                                            <ol className="text-xs font-medium text-green-800 list-decimal list-inside space-y-1">
                                                <li>Ingresa a <a href="https://developers.facebook.com/apps/" target="_blank" className="font-black underline text-green-700">Meta for Developers</a>.</li>
                                                <li>Crea una app tipo "Empresa" y añade "WhatsApp".</li>
                                                <li>Ve a <strong>WhatsApp {'>'} Configuración de la API</strong>.</li>
                                                <li>Copia el <strong>Token de acceso temporal</strong> y el <strong>Identificador del número de teléfono</strong>.</li>
                                            </ol>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Token de Acceso Temporal/Permanente</Label>
                                        <Input {...form.register("whatsapp_api_token")} placeholder="EAA..." className="rounded-xl border-gray-100 bg-white/50 h-11 text-xs font-mono" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">ID de Teléfono (Phone ID)</Label>
                                        <Input {...form.register("whatsapp_phone_id")} placeholder="123456789..." className="rounded-xl border-gray-100 bg-white/50 h-11 text-xs font-mono" />
                                    </div>
                                    <div className="pt-2">
                                        <Button 
                                            type="button" 
                                            variant="outline" 
                                            onClick={handleTestWhatsApp}
                                            disabled={testing}
                                            className="w-full rounded-xl border-2 font-bold h-11 border-green-100 text-green-600 hover:bg-green-50"
                                        >
                                            {testing ? "Probando..." : "Probar Conexión WhatsApp"}
                                        </Button>
                                    </div>
                                </div>
                            )}

                        </CardContent>
                    </Card>

                    <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full h-16 rounded-[2rem] bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-black text-white font-black text-lg shadow-2xl shadow-gray-200 transition-all active:scale-95"
                    >
                        {loading ? "Guardando cambios..." : "Guardar Toda la Configuración"}
                    </Button>
                </div>

            </div>
        </form>
    )
}
