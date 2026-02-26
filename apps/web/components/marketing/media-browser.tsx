"use client"

import React from "react"
import { Check, Image as ImageIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface MediaBrowserProps {
    isOpen: boolean
    onClose: () => void
    propertyId: string
    propertyMedia: any[]
    onSelectMedia: (url: string) => void
    title?: string
}

export function MediaBrowser({ isOpen, onClose, propertyMedia, onSelectMedia, title }: MediaBrowserProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-[3rem] border-none shadow-2xl flex flex-col bg-white">
                <div className="p-8 border-b flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-black text-gray-900">Galería de Propiedad</h3>
                        <p className="text-sm text-gray-500 font-medium">{title || "Selecciona una imagen"}</p>
                    </div>
                    <Button variant="ghost" className="rounded-full h-12 w-12 p-0" onClick={onClose}>
                        <X className="h-6 w-6" />
                    </Button>
                </div>
                <div className="flex-1 overflow-y-auto p-8 pt-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {propertyMedia?.map((media: any) => (
                            <div
                                key={media.id}
                                onClick={() => onSelectMedia(media.url)}
                                className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:ring-4 hover:ring-purple-500 transition-all group relative"
                            >
                                <img src={media.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <Check className="h-8 w-8 text-white" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )
}
