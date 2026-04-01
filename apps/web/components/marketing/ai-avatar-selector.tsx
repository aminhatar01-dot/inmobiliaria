"use client"

import React from "react"
import { Check, User, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface Avatar {
    id: string
    name: string
    role: string
    image: string
    style: string
    description: string
}

const AVATARS: Avatar[] = [
    {
        id: "sofia",
        name: "Sofía",
        role: "Agente Senior",
        style: "Elegante & Profesional",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        description: "Ideal para propiedades de lujo y un trato distinguido."
    },
    {
        id: "marcos",
        name: "Marcos",
        role: "Especialista Residencial",
        style: "Cercano & Dinámico",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
        description: "Perfecto para tours guiados y contenido para familias."
    },
    {
        id: "elena",
        name: "Elena",
        role: "Lifestyle Expert",
        style: "Moderna & Viral",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        description: "Enfocada en reels dinámicos y tendencias de diseño."
    },
    {
        id: "javier",
        name: "Javier",
        role: "Consultor de Inversión",
        style: "Analítico & Serio",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
        description: "Especialista en explicar rentabilidades y datos técnicos."
    }
]

interface AIAvatarSelectorProps {
    selectedId: string | null
    onSelect: (id: string) => void
}

export function AIAvatarSelector({ selectedId, onSelect }: AIAvatarSelectorProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest">Avatar Humano (IA)</h4>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-gray-300 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[200px] text-[10px] font-bold">
                            El avatar narrará el guion con gestos naturales y una voz humana realista.
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {AVATARS.map((avatar) => (
                    <Card
                        key={avatar.id}
                        onClick={() => onSelect(avatar.id)}
                        className={`group cursor-pointer border-2 transition-all duration-300 rounded-2xl overflow-hidden relative ${
                            selectedId === avatar.id
                                ? 'border-indigo-600 ring-2 ring-indigo-600/10 scale-[1.02]'
                                : 'border-gray-100 hover:border-indigo-200'
                        }`}
                    >
                        <CardContent className="p-0">
                            <div className="h-32 relative">
                                <img
                                    src={avatar.image}
                                    className="w-full h-full object-cover"
                                    alt={avatar.name}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                {selectedId === avatar.id && (
                                    <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center text-white animate-in zoom-in duration-300">
                                        <Check className="h-4 w-4" />
                                    </div>
                                )}
                                <div className="absolute bottom-2 left-2">
                                    <Badge className="bg-white/20 backdrop-blur-md border-none text-[8px] font-black uppercase text-white px-1.5 h-4">
                                        {avatar.style}
                                    </Badge>
                                </div>
                            </div>
                            <div className="p-3">
                                <p className="font-black text-gray-900 text-sm leading-tight">{avatar.name}</p>
                                <p className="text-[10px] text-gray-500 font-bold">{avatar.role}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            
            {!selectedId && (
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
                    <User className="h-5 w-5 text-amber-500 shrink-0" />
                    <p className="text-[10px] text-amber-700 font-bold">
                        Si no seleccionas un avatar, el video será puramente visual con clips de la propiedad y voz en off (Voiceover).
                    </p>
                </div>
            )}
        </div>
    )
}
