"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Lead } from "@inmocms/shared"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, Mail } from "lucide-react"

interface Props {
    lead: Lead
}

export function KanbanCard({ lead }: Props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: lead.id,
        data: {
            type: "Lead",
            lead,
        },
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="opacity-50 h-[140px] rounded-xl border-2 border-dashed border-blue-500 bg-blue-50"
            />
        )
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card className="border-none shadow-sm hover:shadow-md transition-all cursor-grab active:cursor-grabbing bg-white group">
                <CardContent className="p-4 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8 border border-gray-100">
                                <AvatarFallback className="bg-blue-50 text-blue-600 text-[10px] font-bold">
                                    {lead.name.substring(0, 2).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{lead.name}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="text-[10px] text-gray-400 font-medium">
                                        {new Date(lead.created_at).toLocaleDateString()}
                                    </span>
                                    {new Date(lead.created_at) > new Date(Date.now() - 24 * 60 * 60 * 1000) && (
                                        <Badge className="bg-blue-600 text-white border-none text-[8px] h-3 px-1 font-black">NUEVO</Badge>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Badge variant="outline" className={`text-[9px] font-black uppercase border-none px-2 py-0.5 rounded-lg ${lead.interest_type === 'buy' ? 'bg-emerald-50 text-emerald-600' : 'bg-violet-50 text-violet-600'
                            }`}>
                            {lead.interest_type === 'buy' ? 'Compra' : 'Alquiler'}
                        </Badge>
                    </div>

                    <div className="space-y-1">
                        {lead.email && (
                            <div className="flex items-center gap-2 text-[11px] text-gray-500">
                                <Mail className="h-3 w-3" />
                                <span className="truncate">{lead.email}</span>
                            </div>
                        )}
                        {lead.phone && (
                            <div className="flex items-center gap-2 text-[11px] text-gray-500">
                                <Phone className="h-3 w-3" />
                                <span>{lead.phone}</span>
                            </div>
                        )}
                    </div>

                    <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <div className="h-1.5 w-16 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full ${lead.scoring > 70 ? 'bg-green-500' : 'bg-orange-400'}`}
                                    style={{ width: `${lead.scoring}%` }}
                                />
                            </div>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400">
                            {lead.source || 'Directo'}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
