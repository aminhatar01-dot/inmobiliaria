"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { disconnectChannel } from "@/app/actions/channels"
import { Loader2, Settings2, Unplug, CheckCircle2 } from "lucide-react"
import { CHANNEL_LABELS, ChannelConnection } from "@inmocms/shared"

interface ChannelSettingsDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    connection: ChannelConnection | null
}

export function ChannelSettingsDialog({ open, onOpenChange, connection }: ChannelSettingsDialogProps) {
    const [loading, setLoading] = useState(false)
    const [disconnecting, setDisconnecting] = useState(false)

    if (!connection) return null

    const channelLabel = CHANNEL_LABELS[connection.channel_name]

    const handleDisconnect = async () => {
        if (!confirm(`¿Estás seguro que deseas desconectar ${channelLabel}?`)) return

        setDisconnecting(true)
        try {
            await disconnectChannel(connection.id)
            toast.success(`${channelLabel} desconectado.`)
            onOpenChange(false)
        } catch (error) {
            toast.error("Error al desconectar la cuenta")
        } finally {
            setDisconnecting(false)
        }
    }

    const handleSave = async () => {
        setLoading(true)
        try {
            await new Promise(r => setTimeout(r, 800))
            toast.success("Ajustes guardados correctamente")
            onOpenChange(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[450px] rounded-3xl p-0 overflow-hidden" showCloseButton={false}>
                <DialogHeader className="p-6 pb-2 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                            <Settings2 className="h-5 w-5" />
                        </div>
                        <div>
                            <DialogTitle className="text-xl font-black">Ajustes de {channelLabel}</DialogTitle>
                            <DialogDescription className="text-sm">
                                Configura la conexión de @{connection.account_info?.name || 'cuenta'}
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="p-6 space-y-6">
                    <div className="bg-green-50 border border-green-200 p-3 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="text-sm font-bold text-green-800">Estado de Conexión</span>
                        </div>
                        <span className="text-xs font-black uppercase text-green-700 bg-green-200/50 px-2 py-1 rounded-md">Activo</span>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Nombre de la Cuenta</Label>
                            <Input
                                defaultValue={connection.account_info?.name || ''}
                                className="h-11 bg-gray-50 border-gray-200 rounded-xl"
                                readOnly
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-xs font-black uppercase tracking-widest text-gray-400">ID de Conexión</Label>
                            <Input
                                defaultValue={connection.id}
                                className="h-11 bg-gray-50 border-gray-200 rounded-xl text-xs font-mono text-gray-400"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <Button
                            variant="destructive"
                            className="w-full h-11 rounded-xl font-bold gap-2"
                            onClick={handleDisconnect}
                            disabled={disconnecting || loading}
                        >
                            {disconnecting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Unplug className="h-4 w-4" />}
                            Desvincular Cuenta
                        </Button>
                    </div>
                </div>

                <DialogFooter className="p-6 pt-2 border-t border-gray-100 bg-gray-50/50">
                    <Button variant="ghost" onClick={() => onOpenChange(false)} className="rounded-xl font-bold text-gray-500">
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleSave}
                        className="h-10 px-6 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={loading || disconnecting}
                    >
                        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Guardar Cambios"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
