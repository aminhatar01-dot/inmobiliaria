"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import Link from "next/link"
import { PublishDialog } from "@/components/marketing/publish-dialog"
import { PortalConnection, PropertyPublication } from "@inmocms/shared"

interface PropertyActionButtonsProps {
    propertyId: string
    propertyName: string
    connections: PortalConnection[]
    existingPublications: PropertyPublication[]
}

export function PropertyActionButtons({
    propertyId,
    propertyName,
    connections,
    existingPublications
}: PropertyActionButtonsProps) {
    const [isPublishDialogOpen, setIsPublishDialogOpen] = useState(false)

    return (
        <>
            <div className="flex items-center gap-3">
                <Button
                    onClick={() => setIsPublishDialogOpen(true)}
                    className="h-11 rounded-xl font-black px-6 bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20"
                >
                    <Globe className="h-4 w-4 mr-2" />
                    PUBLICAR EN PORTALES
                </Button>
                <Button variant="outline" className="h-11 rounded-xl font-bold px-6" asChild>
                    <Link href={`/propiedades/${propertyId}/editar`}>Editar Propiedad</Link>
                </Button>
            </div>

            <PublishDialog
                open={isPublishDialogOpen}
                onOpenChange={setIsPublishDialogOpen}
                propertyId={propertyId}
                propertyName={propertyName}
                connections={connections}
                existingPublications={existingPublications}
            />
        </>
    )
}
