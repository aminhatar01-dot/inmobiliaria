"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { updateNotificationSettings } from "@/app/actions/settings"
import { toast } from "sonner"
import { Bell, Mail, Smartphone, MessageCircle, Loader2, Save } from "lucide-react"

interface NotificationsFormProps {
    initialPreferences: any
}

export function NotificationsForm({ initialPreferences }: NotificationsFormProps) {
    const [preferences, setPreferences] = useState(initialPreferences || {
        email: { new_lead: true, new_task: true, new_message: true, property_published: true },
        push: { new_lead: true, new_task: true, new_message: true },
        whatsapp: { new_lead: false }
    })
    const [isLoading, setIsLoading] = useState(false)

    const togglePreference = (channel: string, key: string) => {
        setPreferences({
            ...preferences,
            [channel]: {
                ...preferences[channel],
                [key]: !preferences[channel][key]
            }
        })
    }

    const handleSave = async () => {
        setIsLoading(true)
        try {
            await updateNotificationSettings(preferences)
            toast.success("Preferencias de notificación actualizadas")
        } catch (error) {
            toast.error("Error al actualizar preferencias")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-8 bg-gray-50/50">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                        <Bell className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-black text-gray-900">Notificaciones</CardTitle>
                        <CardDescription className="text-gray-500 font-medium font-serif">Configura cómo y cuándo quieres recibir alertas</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
                {/* Email Notifications */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                        <Mail className="h-4 w-4 text-blue-500" />
                        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Correos Electrónicos</h3>
                    </div>
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl">
                            <div className="space-y-0.5">
                                <Label className="text-sm font-bold text-gray-700">Nuevos Leads</Label>
                                <p className="text-xs text-gray-400 font-medium">Recibe un mail cada vez que un cliente contacte</p>
                            </div>
                            <Switch
                                checked={preferences.email.new_lead}
                                onCheckedChange={() => togglePreference('email', 'new_lead')}
                            />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl">
                            <div className="space-y-0.5">
                                <Label className="text-sm font-bold text-gray-700">Tareas Pendientes</Label>
                                <p className="text-xs text-gray-400 font-medium">Alertas diarias de tus tareas y citas</p>
                            </div>
                            <Switch
                                checked={preferences.email.new_task}
                                onCheckedChange={() => togglePreference('email', 'new_task')}
                            />
                        </div>
                    </div>
                </div>

                {/* Push Notifications */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                        <Smartphone className="h-4 w-4 text-purple-500" />
                        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Notificaciones Push</h3>
                    </div>
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl">
                            <div className="space-y-0.5">
                                <Label className="text-sm font-bold text-gray-700">Mensajes de Chat</Label>
                                <p className="text-xs text-gray-400 font-medium">Alertas instantáneas en tu navegador</p>
                            </div>
                            <Switch
                                checked={preferences.push.new_message}
                                onCheckedChange={() => togglePreference('push', 'new_message')}
                            />
                        </div>
                    </div>
                </div>

                {/* WhatsApp */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                        <MessageCircle className="h-4 w-4 text-green-500" />
                        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Canal WhatsApp</h3>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border-2 border-green-50">
                        <div className="space-y-0.5">
                            <Label className="text-sm font-bold text-gray-700">Alertas Críticas</Label>
                            <p className="text-xs text-green-600 font-bold uppercase tracking-tighter">Premium Feature</p>
                        </div>
                        <Switch
                            checked={preferences.whatsapp.new_lead}
                            onCheckedChange={() => togglePreference('whatsapp', 'new_lead')}
                        />
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <Button
                        onClick={handleSave}
                        disabled={isLoading}
                        className="h-12 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
                    >
                        {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
                        Actualizar Preferencias
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
