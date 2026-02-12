"use client"

import { Visit, VISIT_STATUS_LABELS } from "@inmocms/shared"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Calendar,
    Clock,
    MapPin,
    User,
    MoreVertical,
    ExternalLink,
    CheckCircle2,
    XCircle,
    AlertCircle
} from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

interface VisitsListProps {
    visits: (Visit & {
        lead: { name: string; email?: string; phone?: string };
        property: { title: string; address?: string; price?: number; currency?: string };
    })[]
}

export function VisitsList({ visits }: VisitsListProps) {
    if (!visits || visits.length === 0) {
        return (
            <div className="h-64 flex flex-col items-center justify-center text-gray-400 bg-gray-50/50 rounded-[3rem] border-2 border-dashed border-gray-100 italic">
                <Calendar className="h-12 w-12 mb-4 opacity-20" />
                <p className="font-bold">No hay visitas programadas</p>
            </div>
        )
    }

    // Group visits by date
    const groupedVisits = visits.reduce((acc: any, visit) => {
        const dateKey = format(new Date(visit.scheduled_at), 'yyyy-MM-dd')
        if (!acc[dateKey]) acc[dateKey] = []
        acc[dateKey].push(visit)
        return acc
    }, {})

    const sortedDates = Object.keys(groupedVisits).sort()

    return (
        <div className="space-y-12">
            {sortedDates.map(date => (
                <div key={date} className="space-y-6">
                    <div className="flex items-center gap-4 px-2">
                        <div className="h-px flex-1 bg-gray-100"></div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 bg-white px-4 py-1 rounded-full border border-gray-100 shadow-sm">
                            {format(new Date(date), "EEEE, d 'de' MMMM", { locale: es })}
                        </h3>
                        <div className="h-px flex-1 bg-gray-100"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {groupedVisits[date].map((visit: any) => (
                            <Card key={visit.id} className="border-none shadow-sm rounded-[2.5rem] hover:shadow-xl transition-all group overflow-hidden bg-white/70 backdrop-blur-sm border border-white/20">
                                <CardContent className="p-0">
                                    <div className="p-8 space-y-6">
                                        <div className="flex items-start justify-between">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    {format(new Date(visit.scheduled_at), 'HH:mm')} hs
                                                </div>
                                                <h4 className="text-xl font-black text-gray-900 leading-tight">
                                                    {visit.property?.title || "Propiedad sin título"}
                                                </h4>
                                            </div>
                                            <StatusIcon status={visit.status} />
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                                                <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                                    <User className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <span className="truncate">{visit.lead?.name || "Lead sin nombre"}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                                                <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                                    <MapPin className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <span className="truncate">{visit.property?.address || "Sin dirección"}</span>
                                            </div>
                                        </div>

                                        {visit.notes && (
                                            <p className="text-xs text-gray-400 bg-gray-50/50 p-4 rounded-2xl italic leading-relaxed">
                                                "{visit.notes}"
                                            </p>
                                        )}
                                    </div>
                                    <div className="px-8 py-4 bg-gray-50/30 border-t border-gray-50 flex items-center justify-between">
                                        <Badge variant="outline" className="border-none bg-white font-black text-[9px] uppercase tracking-widest px-3 py-1 text-gray-400 shadow-sm">
                                            {VISIT_STATUS_LABELS[visit.status as keyof typeof VISIT_STATUS_LABELS] || visit.status}
                                        </Badge>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-300">
                                            <MoreVertical className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

function StatusIcon({ status }: { status: string }) {
    switch (status) {
        case 'completed':
            return <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-500"><CheckCircle2 className="h-5 w-5" /></div>
        case 'cancelled':
            return <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-500"><XCircle className="h-5 w-5" /></div>
        case 'no_show':
            return <div className="h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500"><AlertCircle className="h-5 w-5" /></div>
        default:
            return <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><Calendar className="h-5 w-5" /></div>
    }
}
