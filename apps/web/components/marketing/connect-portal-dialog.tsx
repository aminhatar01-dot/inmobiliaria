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
import { connectPortal } from "@/app/actions/portals"
import { Link2, Loader2, Mail } from "lucide-react"
import { toast } from "sonner"
import { PORTAL_LABELS } from "@inmocms/shared"

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
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    if (!portalName) return null

    const handleConnect = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) {
            toast.error("Por favor, ingrese un correo electrónico")
            return
        }

        setIsLoading(true)
        try {
            await connectPortal(portalName, email)
            const portalKey = portalName as keyof typeof PORTAL_LABELS
            toast.success(`¡Cuenta de ${PORTAL_LABELS[portalKey]} vinculada correctamente!`)
            onOpenChange(false)
            setEmail("")
        } catch (error: any) {
            toast.error(`Error al vincular: ${error.message}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] rounded-[2.5rem] p-0 border-none overflow-hidden shadow-2xl">
                <div className="bg-indigo-600 p-8 text-white relative">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Link2 className="h-20 w-20" />
                    </div>
                    <DialogHeader>
                        <DialogTitle className="text-3xl font-black leading-tight">
                            Vincular {PORTAL_LABELS[portalName as keyof typeof PORTAL_LABELS]}
                        </DialogTitle>
                        <DialogDescription className="text-indigo-100 font-medium mt-2">
                            Conecta tu cuenta para empezar a publicar automáticamente.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <form onSubmit={handleConnect} className="p-8 space-y-6">
                    <div className="space-y-3">
                        <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-gray-400">
                            Correo Electrónico de la Cuenta
                        </Label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="tu-usuario@mail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-12 h-14 rounded-2xl border-gray-100 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 font-bold"
                                required
                            />
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium">
                            * InmoCMS solicitará acceso de lectura y escritura a tus publicaciones.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black shadow-lg shadow-indigo-500/20"
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                            ) : (
                                <Link2 className="h-5 w-5 mr-2" />
                            )}
                            VINCULAR CUENTA
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

                <div className="bg-gray-50 p-4 flex items-center justify-center border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Conexión Segura vía OAuth 2.0</p>
                </div>
            </DialogContent>
        </Dialog>
    )
}
