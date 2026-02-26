"use client"

import { useState } from "react"
import { User, Mail, Phone, Save, Loader2, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"
import { updateProfile } from "@/app/actions/account"

interface ProfileFormProps {
    user: any
}

export function ProfileForm({ user }: ProfileFormProps) {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(user?.name || user?.user_metadata?.full_name || "")
    const [email, setEmail] = useState(user?.email || "")
    const [phone, setPhone] = useState(user?.phone || "")
    const [avatarUrl, setAvatarUrl] = useState(user?.avatar_url || user?.user_metadata?.avatar_url || "")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            await updateProfile({ name, email, phone, avatar_url: avatarUrl })
            toast.success("Perfil actualizado correctamente")
        } catch (error: any) {
            toast.error(error.message || "Error al actualizar el perfil")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <Card className="w-full md:w-80 border-none shadow-sm rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl">
                    <CardContent className="p-8 flex flex-col items-center space-y-4">
                        <div className="relative group">
                            <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
                                <AvatarImage src={avatarUrl} />
                                <AvatarFallback className="bg-blue-600 text-white text-4xl font-black">{name[0] || "U"}</AvatarFallback>
                            </Avatar>
                            <button
                                type="button"
                                className="absolute bottom-0 right-0 h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-500 hover:text-blue-600 transition-colors border border-gray-100"
                                onClick={() => {
                                    const url = prompt("Introduce la URL de tu nuevo avatar:")
                                    if (url) setAvatarUrl(url)
                                }}
                            >
                                <Camera className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-800">{name || "Usuario"}</h3>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">{"Agente"}</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="flex-1 border-none shadow-sm rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl">
                    <CardHeader className="p-8 border-b border-gray-50">
                        <CardTitle className="text-2xl font-black text-gray-800 tracking-tight">Información Personal</CardTitle>
                        <CardDescription>Actualiza tus datos de contacto y nombre público</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Nombre Completo</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="pl-11 h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm"
                                        placeholder="Ej: Laura Gomez"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Correo Electrónico</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="pl-11 h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm"
                                        placeholder="ejemplo@email.com"
                                    />
                                </div>
                                <p className="text-[10px] text-gray-400 ml-1">Nota: Si cambias el email, se enviará una confirmación</p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Teléfono de Contacto</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        className="pl-11 h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm"
                                        placeholder="+34 600 000 000"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-50 flex justify-end">
                            <Button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-8 h-12 shadow-lg shadow-blue-500/20"
                                disabled={loading}
                            >
                                {loading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : <Save className="h-5 w-5 mr-2" />}
                                Guardar Cambios
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </form>
    )
}
