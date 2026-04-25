"use client"

import { useState } from "react"
import { disconnectPortal } from "@/app/actions/portals"
import {
    Link2,
    CheckCircle2,
    Lock,
    Loader2,
    Trash2,
    Settings
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConnectPortalDialog } from "@/components/marketing/connect-portal-dialog"
import { PortalConnection } from "@inmocms/shared"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface PortalListProps {
    initialConnections: PortalConnection[]
}

export function PortalList({ initialConnections }: PortalListProps) {
    const router = useRouter()
    const [isDisconnecting, setIsDisconnecting] = useState<string | null>(null)
    const [selectedPortal, setSelectedPortal] = useState<string | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleDisconnect = async (connectionId: string) => {
        setIsDisconnecting(connectionId)
        try {
            await disconnectPortal(connectionId)
            toast.success("Portal desvinculado")
            router.refresh()
        } catch (error: any) {
            toast.error(`Error: ${error.message}`)
        } finally {
            setIsDisconnecting(null)
        }
    }

    const portalMeta: any = {
        'mercadolibre': {
            name: 'MercadoLibre',
            color: 'bg-yellow-400',
            textColor: 'text-gray-900',
            logo: 'ML',
            description: 'El portal #1 de Latinoamérica.'
        },
        'argenprop': {
            name: 'Argenprop',
            color: 'bg-red-600',
            textColor: 'text-white',
            logo: 'AP',
            description: 'Líder en el mercado argentino.'
        },
        'zonaprop': {
            name: 'Zonaprop',
            color: 'bg-blue-800',
            textColor: 'text-white',
            logo: 'ZP',
            description: 'Portal premium de Real Estate.'
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(portalMeta).map(([key, meta]: [string, any]) => {
                    const conn = initialConnections.find(c => c.portal_name === key)

                    return (
                        <Card key={key} className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] overflow-hidden group hover:scale-[1.02] transition-transform">
                            <CardHeader className={`${meta.color} p-8 flex flex-row items-center justify-between`}>
                                <div className={`h-16 w-16 ${meta.textColor} bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl font-black`}>
                                    {meta.logo}
                                </div>
                                {conn ? (
                                    <Badge className="bg-white/20 text-white backdrop-blur-md border-none font-black px-4 py-1.5 rounded-xl flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4" />
                                        VINCULADO
                                    </Badge>
                                ) : (
                                    <Badge variant="outline" className="border-white/40 text-white font-black px-4 py-1.5 rounded-xl border-2">
                                        SIN CONECTAR
                                    </Badge>
                                )}
                            </CardHeader>
                            <CardContent className="p-8 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 leading-tight">{meta.name}</h3>
                                    <p className="text-sm text-gray-500 font-medium mt-1">{meta.description}</p>
                                </div>

                                {conn ? (
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
                                            <div className="overflow-hidden">
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Cuenta</p>
                                                <p className="text-sm font-bold text-gray-900 truncate">{conn.account_email}</p>
                                            </div>
                                            <div className="h-8 w-8 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                                <CheckCircle2 className="h-4 w-4" />
                                            </div>
                                        </div>

                                        {(key === 'argenprop' || key === 'zonaprop') && (conn.credentials as any)?.feed_url && (
                                            <div className="bg-indigo-50 rounded-2xl p-4 border border-indigo-100">
                                                <div className="flex items-center justify-between mb-2">
                                                    <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Feed XML Activo</p>
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm" 
                                                        className="h-6 px-2 text-[10px] font-bold text-indigo-600 hover:bg-indigo-100"
                                                        onClick={() => {
                                                            navigator.clipboard.writeText((conn.credentials as any).feed_url)
                                                            toast.success("Feed URL copiada")
                                                        }}
                                                    >
                                                        COPIAR URL
                                                    </Button>
                                                </div>
                                                <p className="text-[10px] font-mono text-indigo-800 break-all line-clamp-1 opacity-70">
                                                    {(conn.credentials as any).feed_url}
                                                </p>
                                            </div>
                                        )}

                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                onClick={() => {
                                                    if (confirm("¿Estás seguro de que deseas desvincular este portal?")) {
                                                        handleDisconnect(conn.id)
                                                    }
                                                }}
                                                disabled={!!isDisconnecting}
                                                className="flex-1 rounded-xl font-black text-xs h-11 border-red-100 text-red-500 hover:bg-red-50 hover:text-red-600 focus:ring-0"
                                            >
                                                {isDisconnecting === conn.id ? <Loader2 className="h-4 w-4 animate-spin text-red-500" /> : <Trash2 className="h-4 w-4 mr-2" />}
                                                DESVINCULAR
                                            </Button>
                                            {key === 'mercadolibre' && (
                                                <Button
                                                    className="flex-1 rounded-xl font-black text-xs h-11 bg-gray-900 text-white hover:bg-black"
                                                    asChild
                                                >
                                                    <Link href={`/marketing/portales/config/${key}`}>
                                                        <Settings className="h-4 w-4 mr-2" />
                                                        CONFIGURAR
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-sm font-medium text-gray-400 bg-gray-50/50 rounded-2xl p-6 border-2 border-dashed border-gray-100 italic">
                                            <Lock className="h-4 w-4" />
                                            Requiere autorización OAuth
                                        </div>
                                        <Button
                                            onClick={() => {
                                                setSelectedPortal(key)
                                                setIsDialogOpen(true)
                                            }}
                                            className={`w-full rounded-2xl font-black h-14 ${meta.color} ${meta.textColor} shadow-lg shadow-${key}-500/20 active:scale-95 transition-all`}
                                        >
                                            <Link2 className="mr-2 h-5 w-5" />
                                            VINCULAR CUENTA
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            <ConnectPortalDialog
                portalName={selectedPortal}
                open={isDialogOpen}
                onOpenChange={(open) => {
                    setIsDialogOpen(open)
                    if (!open) {
                        setSelectedPortal(null)
                    }
                }}
            />
        </>
    )
}
