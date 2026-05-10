"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus, Mail, MessageSquare, Copy, Check, Loader2 } from "lucide-react"
import { inviteAgentByEmail } from "@/app/actions/messages"
import { toast } from "sonner"

interface InviteAgentDialogProps {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    trigger?: React.ReactNode
}

export function InviteAgentDialog({ open: controlledOpen, onOpenChange: controlledOnOpenChange, trigger }: InviteAgentDialogProps) {
    const [internalOpen, setInternalOpen] = useState(false)
    const open = controlledOpen !== undefined ? controlledOpen : internalOpen
    const onOpenChange = controlledOnOpenChange || setInternalOpen

    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [inviteLink, setInviteLink] = useState<string | null>(null)
    const [copied, setCopied] = useState(false)

    const handleInvite = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setIsLoading(true)
        try {
            const result = await inviteAgentByEmail(email)
            if (result.success && result.inviteLink) {
                setInviteLink(result.inviteLink)
                if (result.warning) {
                    toast.warning(result.warning, { duration: 6000 })
                } else {
                    toast.success("Invitación enviada por correo con éxito")
                }
            } else {
                toast.error(result.error || "Error al generar invitación")
            }
        } catch (error) {
            toast.error("Ocurrió un error inesperado")
        } finally {
            setIsLoading(false)
        }
    }

    const copyToClipboard = () => {
        if (!inviteLink) return
        navigator.clipboard.writeText(inviteLink)
        setCopied(true)
        toast.success("Enlace copiado al portapapeles")
        setTimeout(() => setCopied(false), 2000)
    }

    const shareByWhatsApp = () => {
        if (!inviteLink) return
        const message = `¡Hola! Te invito a unirte a mi equipo en InmoCMS. Regístrate aquí: ${inviteLink}`
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank')
    }

    const reset = () => {
        setEmail("")
        setInviteLink(null)
        setCopied(false)
    }
    
    return (
        <>
            {trigger && (
                <div onClick={() => onOpenChange(true)} className="cursor-pointer">
                    {trigger}
                </div>
            )}
            <Dialog open={open} onOpenChange={(v) => {
                onOpenChange(v)
                if (!v) reset()
            }}>
            <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl">
                <DialogHeader className="p-8 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
                    <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                        <UserPlus className="h-6 w-6 text-white" />
                    </div>
                    <DialogTitle className="text-2xl font-black">Crecer mi Equipo</DialogTitle>
                    <DialogDescription className="text-indigo-100 font-medium">
                        Invita a otros agentes a unirse a tu red y colabora en tiempo real.
                    </DialogDescription>
                </DialogHeader>

                <div className="p-8 space-y-6">
                    {!inviteLink ? (
                        <form onSubmit={handleInvite} className="space-y-4">
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Correo del Agente</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        type="email"
                                        placeholder="agente@ejemplo.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="pl-10 h-12 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-indigo-100 transition-all font-medium"
                                    />
                                </div>
                            </div>
                            <Button 
                                type="submit" 
                                disabled={isLoading}
                                className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold shadow-lg shadow-indigo-500/20"
                            >
                                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Generar Enlace de Invitación"}
                            </Button>
                        </form>
                    ) : (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="p-4 rounded-2xl bg-green-50 border border-green-100 flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Check className="h-4 w-4" />
                                </div>
                                <p className="text-sm font-bold text-green-800">¡Enlace listo para compartir!</p>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Enlace de Registro</Label>
                                <div className="flex gap-2">
                                    <Input
                                        readOnly
                                        value={inviteLink}
                                        className="h-12 bg-gray-50 border-transparent rounded-xl font-mono text-xs"
                                    />
                                    <Button
                                        onClick={copyToClipboard}
                                        variant="outline"
                                        className="h-12 w-12 rounded-xl border-gray-100 p-0"
                                    >
                                        {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-gray-400" />}
                                    </Button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Button
                                    onClick={shareByWhatsApp}
                                    className="h-12 bg-[#25D366] hover:bg-[#20ba5a] rounded-xl font-bold text-white"
                                >
                                    <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp
                                </Button>
                                <Button
                                    onClick={() => window.open(`mailto:?subject=Invitación a InmoCMS&body=Hola! Te invito a unirte a mi equipo: ${inviteLink}`)}
                                    className="h-12 bg-gray-900 hover:bg-black rounded-xl font-bold text-white"
                                >
                                    <Mail className="h-4 w-4 mr-2" /> Email
                                </Button>
                            </div>

                            <Button
                                variant="ghost"
                                onClick={reset}
                                className="w-full font-bold text-gray-400 hover:text-gray-600"
                            >
                                Generar otra invitación
                            </Button>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-100 mt-auto">
                    <Button
                        variant="ghost"
                        onClick={() => onOpenChange(false)}
                        className="w-full font-bold text-gray-500 hover:text-gray-900"
                    >
                        Cerrar
                    </Button>
                </div>
            </DialogContent>
            </Dialog>
        </>
    )
}
