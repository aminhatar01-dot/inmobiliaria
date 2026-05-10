'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Rocket, Sparkles, Loader2 } from 'lucide-react'
import { createPropertyAd } from '@/app/actions/ads'
import { toast } from 'sonner'

interface PromotePropertyProps {
    property: {
        id: string
        title: string
        description: string
        price: number
    }
    trigger?: React.ReactNode
}

export function PromoteProperty({ property, trigger }: PromotePropertyProps) {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const handlePromote = async () => {
        setLoading(true)
        try {
            const result = await createPropertyAd(property.id)
            if (result.error) throw new Error(result.error)
            
            toast.success('¡Campaña creada con éxito en Google Ads!')
            setOpen(false)
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || (
                    <Button variant="outline" className="gap-2 border-primary/50 text-primary hover:bg-primary/10">
                        <Rocket className="w-4 h-4" />
                        Promocionar en Google
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-width-[425px]">
                <DialogHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                        <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <DialogTitle className="text-center">Promocionar Propiedad</DialogTitle>
                    <DialogDescription className="text-center">
                        Crearemos automáticamente una campaña de búsqueda en Google Ads para: 
                        <span className="block font-semibold text-foreground mt-1">{property.title}</span>
                    </DialogDescription>
                </DialogHeader>
                
                <div className="py-4 space-y-4">
                    <div className="p-3 bg-muted rounded-lg text-sm space-y-2">
                        <p><strong>Configuración Automática:</strong></p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>Anuncio de Búsqueda (Search)</li>
                            <li>Presupuesto Diario: $5.00</li>
                            <li>Segmentación: Local</li>
                        </ul>
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="ghost" onClick={() => setOpen(false)} disabled={loading}>
                        Cancelar
                    </Button>
                    <Button onClick={handlePromote} disabled={loading} className="gap-2">
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Rocket className="w-4 h-4" />}
                        Lanzar Campaña
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
