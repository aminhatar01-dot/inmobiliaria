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
import { Badge } from "@/components/ui/badge"
import { PortalConnection, PropertyPublication, PORTAL_LABELS } from "@inmocms/shared"
import { publishToPortal } from "@/app/actions/portals"
import {
    Globe,
    Rocket,
    ExternalLink,
    CheckCircle2,
    AlertCircle,
    Loader2
} from "lucide-react"
import { toast } from "sonner"
import { MercadoLibreWizard } from "./ml-wizard"

interface PublishDialogProps {
    propertyId: string
    propertyName: string
    connections: PortalConnection[]
    existingPublications: PropertyPublication[]
    open: boolean
    onOpenChange: (open: boolean) => void
}

import { useRouter } from "next/navigation"

export function PublishDialog({
    propertyId,
    propertyName,
    connections,
    existingPublications,
    open,
    onOpenChange
}: PublishDialogProps) {
    const router = useRouter()
    const [isPublishing, setIsPublishing] = useState<string | null>(null)
    const [mlWizardConnectionId, setMlWizardConnectionId] = useState<string | null>(null)

    const handlePublish = async (connectionId: string, portalName: string, isNativeML: boolean = false) => {
        if (portalName === 'mercadolibre' && !isNativeML) {
            setMlWizardConnectionId(connectionId)
            return
        }

        setIsPublishing(connectionId)
        try {
            if (isNativeML) {
                // In native ML mode we simulate the connection using a pseudo ID
                const res = await publishToPortal(propertyId, connectionId)
                toast.success("¡Propiedad marcada como publicada!")
                return
            }
            await publishToPortal(propertyId, connectionId)
            toast.success("¡Propiedad publicada exitosamente!")
        } catch (error: any) {
            toast.error(`Error al publicar: ${error.message}`)
        } finally {
            setIsPublishing(null)
        }
    }

    const handlePublishMLWithData = async (mlData: any) => {
        if (!mlWizardConnectionId) return
        setIsPublishing(mlWizardConnectionId)
        try {
            const res = await publishToPortal(propertyId, mlWizardConnectionId, mlData)
            if (res?.error) {
                toast.error(`${res.error}`)
            } else {
                toast.success("¡Propiedad publicada exitosamente en Mercado Libre!")
                setMlWizardConnectionId(null)
            }
        } catch (error: any) {
            toast.error(`Error del sistema: ${error.message}`)
        } finally {
            setIsPublishing(null)
        }
    }

    const mlPub = existingPublications.find(p => (p as any).portal_connections?.portal_name === 'mercadolibre')

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] rounded-[2.5rem] p-0 border-none overflow-hidden shadow-2xl">
                {!mlWizardConnectionId ? (
                    <>
                        <div className="bg-indigo-600 p-8 text-white relative">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Rocket className="h-24 w-24" />
                            </div>
                            <DialogHeader>
                                <DialogTitle className="text-3xl font-black leading-tight">
                                    Publicar Portales
                                </DialogTitle>
                                <DialogDescription className="text-indigo-100 font-medium mt-2">
                                    Sincroniza "{propertyName}" en tus canales activos.
                                </DialogDescription>
                            </DialogHeader>
                        </div>

                        <div className="p-8 space-y-6">
                            <div className="space-y-3">
                                {connections.map((conn) => {
                                    const pub = existingPublications.find(p => p.portal_connection_id === conn.id)
                                    const isLoading = isPublishing === conn.id

                                    return (
                                        <div
                                            key={conn.id}
                                            className="flex items-center justify-between p-5 bg-gray-50 rounded-3xl border border-gray-100 group transition-all"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center font-black text-indigo-600">
                                                    {conn.portal_name.substring(0, 2).toUpperCase()}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{PORTAL_LABELS[conn.portal_name]}</h4>
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{conn.account_email}</p>
                                                </div>
                                            </div>

                                            <div>
                                                {pub ? (
                                                    <div className="flex items-center gap-2">
                                                        <Badge className="bg-green-100 text-green-600 border-none px-3 py-1 font-black text-[10px]">
                                                            PUBLICADO
                                                        </Badge>
                                                        {pub.external_url && (
                                                            <a href={pub.external_url} target="_blank" className="p-2 hover:bg-white rounded-lg text-gray-400 hover:text-indigo-600 transition-colors">
                                                                <ExternalLink className="h-4 w-4" />
                                                            </a>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <Button
                                                        onClick={() => handlePublish(conn.id, conn.portal_name)}
                                                        disabled={!!isPublishing}
                                                        className="bg-white hover:bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-xl font-black text-xs px-6 h-10 shadow-sm"
                                                    >
                                                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "PUBLICAR"}
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}

                                {connections.length === 0 && (
                                    <div className="text-center py-8 space-y-4 border-t border-gray-100 pt-10 mt-6">
                                        <div className="h-16 w-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto text-gray-300">
                                            <Globe className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">Configura más portales</p>
                                            <p className="text-[11px] text-gray-500 max-w-[250px] mx-auto mt-1 leading-relaxed">Conecta cuentas como Zonaprop o Argenprop para sincronización automática XML.</p>
                                        </div>
                                        <Button 
                                            variant="outline" 
                                            className="rounded-xl font-black text-xs h-10 px-6"
                                            onClick={() => {
                                                onOpenChange(false)
                                                router.push('/marketing/portales')
                                            }}
                                        >
                                            IR A CONFIGURACIÓN
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <MercadoLibreWizard 
                        propertyData={{}} 
                        onCancel={() => setMlWizardConnectionId(null)}
                        onPublish={handlePublishMLWithData}
                    />
                )}

                <DialogFooter className="p-8 pt-0 flex flex-col items-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-4">Integración Certificada InmoCMS</p>
                    <Button onClick={() => onOpenChange(false)} variant="ghost" className="w-full rounded-2xl font-bold text-gray-500 h-14">
                        CERRAR
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
