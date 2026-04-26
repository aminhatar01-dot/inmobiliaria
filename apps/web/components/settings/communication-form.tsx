
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
import { Mail, MessageCircle, Server, Key, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { toast } from "sonner"
import { updateCommunicationSettings, testSMTP, testWhatsApp, testResend } from "@/app/actions/settings-comm"

const commSchema = z.object({
    smtp_host: z.string().optional(),
    smtp_port: z.string().optional(),
    smtp_user: z.string().optional().or(z.literal('')),
    smtp_pass: z.string().optional(),
    smtp_from_name: z.string().optional(),
    smtp_from_email: z.string().optional().or(z.literal('')),
    resend_api_key: z.string().optional(),
    whatsapp_mode: z.enum(['link', 'api']),
    whatsapp_api_token: z.string().optional(),
    whatsapp_phone_id: z.string().optional()
})

type CommFormValues = z.infer<typeof commSchema>

interface CommunicationFormProps {
    initialData: any
}

export function CommunicationForm({ initialData }: CommunicationFormProps) {
    const [loading, setLoading] = useState(false)
    const [testing, setTesting] = useState(false)

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
            whatsapp_mode: (initialData?.whatsapp_mode as 'link' | 'api') || "link",
            whatsapp_api_token: initialData?.whatsapp_api_token || "",
            whatsapp_phone_id: initialData?.whatsapp_phone_id || ""
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
            const res = await testSMTP()
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
            const res = await testResend()
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
            const res = await testWhatsApp()
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
                                        <h5 className="font-black text-gray-900">Automatización API (Cloud API)</h5>
                                        {form.watch("whatsapp_mode") === 'api' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                                    </div>
                                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                        Envío 100% automático sin intervención del agente. Requiere cuenta en Meta for Developers.
                                    </p>
                                </div>
                            </div>

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
