import { getAutomationRules } from "@/app/actions/marketing"
import {
    Zap,
    Plus,
    ChevronRight,
    Play,
    Pause,
    Settings2,
    Bell,
    Mail,
    MessageSquare,
    Calendar,
    UserPlus
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default async function AutomatizacionesPage() {
    const rules = await getAutomationRules()

    const triggerIcons: any = {
        'lead_created': UserPlus,
        'lead_status_change': Settings2,
        'visit_scheduled': Calendar,
        'incoming_message': MessageSquare,
        'property_status_change': Zap
    }

    const actionIcons: any = {
        'send_email': Mail,
        'send_whatsapp': MessageSquare,
        'send_notification': Bell,
        'create_task': Calendar,
        'update_lead_field': Settings2
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-8">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                            <Zap className="h-5 w-5 fill-current" />
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Automatizaciones</h2>
                    </div>
                    <p className="text-gray-500 font-medium text-lg ml-13">Configura reglas que trabajen por ti las 24 horas.</p>
                </div>
                <Button className="rounded-2xl h-12 px-6 font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Nueva Regla
                </Button>
            </div>

            <div className="space-y-4">
                {rules.length > 0 ? (
                    rules.map((rule: any) => (
                        <Card key={rule.id} className="border-none shadow-lg shadow-gray-100/50 rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-all">
                            <CardContent className="p-0">
                                <div className="flex flex-col md:flex-row md:items-center">
                                    {/* Trigger side */}
                                    <div className="p-6 md:w-1/3 flex items-center gap-4 bg-gray-50/50 shrink-0">
                                        <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-500">
                                            {(() => {
                                                const TriggerIcon = triggerIcons[rule.trigger_type] || Zap
                                                return <TriggerIcon className="h-6 w-6" />
                                            })()}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Cuando...</p>
                                            <h4 className="font-bold text-gray-900 text-sm mt-1">
                                                {rule.trigger_type?.replace(/_/g, ' ').toUpperCase()}
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="h-px md:h-8 md:w-px bg-gray-100" />

                                    {/* Action side */}
                                    <div className="p-6 flex-1 flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                            {(() => {
                                                const ActionIcon = actionIcons[rule.action_type] || Play
                                                return <ActionIcon className="h-5 w-5" />
                                            })()}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Entonces...</p>
                                            <h4 className="font-bold text-gray-900 text-sm mt-1">
                                                {rule.action_type?.replace(/_/g, ' ').toUpperCase()}
                                            </h4>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="text-right hidden md:block">
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ejecuciones</p>
                                                <p className="text-sm font-black text-gray-900">0</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className={`text-[10px] font-black uppercase ${rule.is_active ? 'text-green-600' : 'text-gray-400'}`}>
                                                    {rule.is_active ? 'Activo' : 'Inactivo'}
                                                </span>
                                                <Switch checked={rule.is_active} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Bienvenida Automática",
                                desc: "Envía un WhatsApp o Email apenas se registra un nuevo Lead.",
                                icon: UserPlus,
                                color: "blue"
                            },
                            {
                                title: "Recordatorio de Visita",
                                desc: "Notifica al cliente 2 horas antes de la cita programada.",
                                icon: Calendar,
                                color: "purple"
                            },
                            {
                                title: "Alerta de Precio",
                                desc: "Informa a leads interesados cuando una propiedad baja su valor.",
                                icon: Zap,
                                color: "amber"
                            },
                            {
                                title: "Seguimiento de Oferta",
                                desc: "Si un lead hace una oferta, crea una tarea para el agente a las 24h.",
                                icon: Settings2,
                                color: "green"
                            }
                        ].map((template, i) => (
                            <Card key={i} className="border-none shadow-lg shadow-gray-100/50 rounded-[2rem] overflow-hidden group cursor-pointer hover:bg-blue-600 transition-all duration-500">
                                <CardContent className="p-8">
                                    <div className="flex items-start justify-between">
                                        <div className={`h-14 w-14 rounded-2xl bg-${template.color}-50 flex items-center justify-center text-${template.color}-600 group-hover:bg-white/20 group-hover:text-white transition-colors`}>
                                            <template.icon className="h-8 w-8" />
                                        </div>
                                        <Plus className="h-5 w-5 text-gray-300 group-hover:text-white" />
                                    </div>
                                    <div className="mt-8">
                                        <h3 className="text-xl font-black text-gray-900 group-hover:text-white">{template.title}</h3>
                                        <p className="text-gray-500 text-sm font-medium mt-2 leading-relaxed group-hover:text-white/80">{template.desc}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
