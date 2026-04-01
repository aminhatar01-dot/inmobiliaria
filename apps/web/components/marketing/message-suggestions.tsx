"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, MessageCircle, Mail, Sparkles } from "lucide-react"
import { toast } from "sonner"

export const SUGGESTIONS = [
    {
        id: 1,
        title: "Captura Inicial (WhatsApp)",
        content: "Hola! Vi que te interesaste en una de nuestras propiedades. Soy [Nombre] de InmoCMS, ¿te gustaría coordinar una breve llamada para asesorarte?",
        channel: "WhatsApp",
        type: "Capture"
    },
    {
        id: 2,
        title: "Seguimiento tras Visita",
        content: "Hola [Cliente], un gusto saludarte. Quería saber qué te pareció la propiedad que vimos hoy. ¿Tenés alguna duda sobre el precio o las condiciones?",
        channel: "WhatsApp",
        type: "Follow-up"
    },
    {
        id: 3,
        title: "Recordatorio de Tarea (Email)",
        content: "Estimado/a [Cliente], le escribo para recordarle nuestra cita agendada para mañana a las [Hora]. Quedo atento a su confirmación.",
        channel: "Email",
        type: "Reminder"
    },
    {
        id: 4,
        title: "Captura de Inversionistas",
        content: "Tenemos una nueva oportunidad de preventa con alta tasa de retorno en [Zona]. ¿Le gustaría recibir el dossier con los detalles?",
        channel: "WhatsApp",
        type: "Capture"
    }
]

export const AI_PROMPT_SUGGESTIONS = [
    {
        id: 11,
        title: "Asistente Closer (WhatsApp)",
        content: "Actúa como un asesor inmobiliario experto y persuasivo. Tu único objetivo es conseguir que el lead agende una visita presencial. Usa lenguaje cercano, empatía y técnica de escasez ('muy consultada últimamente'). Responde sus dudas brevemente pero redirige siempre a coordinar día y hora.",
        channel: "WhatsApp",
        type: "Sales AI"
    },
    {
        id: 12,
        title: "Nutrición Educativa (Email)",
        content: "Eres un consultor experto del mercado inmobiliario local. Envía un correo analizando brevemente por qué la propiedad de su interés es una excelente inversión hoy. Termina con un Call to Action claro para una videollamada de 10 minutos.",
        channel: "Email",
        type: "Nurturing AI"
    },
    {
        id: 13,
        title: "Reactivación de Lead Frío",
        content: "Hace tiempo no sabemos del lead. Escríbele un mensaje corto, amable y directo por WhatsApp: menciona que el mercado se está moviendo rápido y pregúntale si todavía sigue buscando comprar/alquilar para enviarle solo opciones ultra filtradas.",
        channel: "WhatsApp",
        type: "Re-engagement"
    }
]

interface MessageSuggestionsProps {
    onSelect?: (content: string) => void
    format?: string
}

export function MessageSuggestions({ onSelect, format = 'template' }: MessageSuggestionsProps) {
    const activeSuggestions = format === 'ai' ? AI_PROMPT_SUGGESTIONS : SUGGESTIONS;
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        toast.success("Mensaje copiado al portapapeles")
        if (onSelect) onSelect(text)
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <h3 className="text-sm font-bold text-blue-950">Sugerencias Inteligentes</h3>
            </div>
            <div className="grid gap-3">
                {activeSuggestions.map((sug) => (
                    <Card key={sug.id} className="border-none bg-blue-50/50 hover:bg-blue-50 transition-colors group cursor-pointer" onClick={() => copyToClipboard(sug.content)}>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {sug.channel === 'WhatsApp' ? (
                                        <MessageCircle className="h-3 w-3 text-green-600" />
                                    ) : (
                                        <Mail className="h-3 w-3 text-blue-600" />
                                    )}
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{sug.title}</span>
                                </div>
                                <Badge variant="outline" className="text-[9px] font-bold bg-white">{sug.type}</Badge>
                            </div>
                            <p className="text-xs text-gray-600 italic line-clamp-2 leading-relaxed">"{sug.content}"</p>
                            <div className="flex justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button size="sm" variant="ghost" className="h-7 text-[10px] font-bold text-blue-600 gap-1">
                                    <Copy className="h-3 w-3" /> Usar Sugerencia
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
