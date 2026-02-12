"use client"

import { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
    MoreHorizontal,
    Eye,
    Edit,
    FileText,
    Trash2,
    Globe,
    Rocket
} from "lucide-react"
import Link from "next/link"
import { PublishDialog } from "@/components/marketing/publish-dialog"
import { PortalConnection, PropertyPublication, Property } from "@inmocms/shared"
import { togglePropertySharing } from "@/app/actions/properties"
import { toast } from "sonner"

interface PropertyActionsProps {
    property: Property
    connections: PortalConnection[]
    publications: PropertyPublication[]
}

export function PropertyActions({ property, connections, publications }: PropertyActionsProps) {
    const [publishOpen, setPublishOpen] = useState(false)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-blue-600">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rounded-2xl border-gray-100 shadow-xl overflow-hidden p-2">
                    <DropdownMenuLabel className="text-[10px] uppercase font-black text-gray-400 px-3 py-2">Gestión de Inmueble</DropdownMenuLabel>

                    <DropdownMenuItem className="rounded-xl py-3 cursor-pointer group" asChild>
                        <Link href={`/propiedades/${property.id}`}>
                            <Eye className="h-4 w-4 mr-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            <span className="font-bold text-gray-700">Ver detalle</span>
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="rounded-xl py-3 cursor-pointer group" asChild>
                        <Link href={`/propiedades/${property.id}/editar`}>
                            <Edit className="h-4 w-4 mr-3 text-gray-400 group-hover:text-amber-500 transition-colors" />
                            <span className="font-bold text-gray-700">Editar datos</span>
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        className="rounded-xl py-3 cursor-pointer group bg-indigo-50/50 hover:bg-indigo-50 focus:bg-indigo-50"
                        onClick={() => setPublishOpen(true)}
                    >
                        <Rocket className="h-4 w-4 mr-3 text-indigo-600 animate-pulse" />
                        <span className="font-black text-indigo-700">Publicar Portales</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className="bg-gray-100" />

                    <DropdownMenuSeparator className="bg-gray-100" />

                    <DropdownMenuItem
                        className="rounded-xl py-3 cursor-pointer group"
                        onClick={async () => {
                            try {
                                await togglePropertySharing(property.id, !property.is_shared);
                                toast.success(property.is_shared ? "Propiedad retirada de red compartida" : "Propiedad compartida en la red");
                            } catch (e: any) {
                                toast.error("Error al cambiar estado de compartido");
                            }
                        }}
                    >
                        <Globe className={`h-4 w-4 mr-3 ${property.is_shared ? 'text-blue-600' : 'text-gray-400'} group-hover:text-blue-600 transition-colors`} />
                        <span className="font-bold text-gray-700">{property.is_shared ? "Dejar de compartir" : "Compartir en Red"}</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="rounded-xl py-3 cursor-pointer group" asChild>
                        <Link href={`/propiedades/${property.id}/reporte`} target="_blank">
                            <FileText className="h-4 w-4 mr-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            <span className="font-bold text-gray-700">Generar Reporte</span>
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className="bg-gray-100" />

                    <DropdownMenuItem className="rounded-xl py-3 cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 group">
                        <Trash2 className="h-4 w-4 mr-3 text-red-400 group-hover:text-red-600 transition-colors" />
                        <span className="font-bold">Eliminar</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <PublishDialog
                propertyId={property.id}
                propertyName={property.title}
                connections={connections}
                existingPublications={publications}
                open={publishOpen}
                onOpenChange={setPublishOpen}
            />
        </>
    )
}
