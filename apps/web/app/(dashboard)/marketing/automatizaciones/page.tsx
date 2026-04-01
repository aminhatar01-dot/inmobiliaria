import { getAutomationRules } from "@/app/actions/marketing"
import {
    Zap,
    Plus,
    Settings2,
    Calendar,
    UserPlus
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { AutomationRuleCard } from "./rule-card"

export default async function AutomatizacionesPage() {
    const rules = await getAutomationRules()



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
                <Link href="/marketing/automatizaciones/nueva">
                    <Button className="rounded-2xl h-12 px-6 font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white">
                        <Plus className="mr-2 h-4 w-4" />
                        Nueva Regla
                    </Button>
                </Link>
            </div>

            <div className="space-y-4">
                {rules.length > 0 ? (
                    rules.map((rule: any) => (
                        <AutomationRuleCard key={rule.id} rule={rule} />
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
                            <Link href="/marketing/automatizaciones/nueva" key={i}>
                                <Card className="border-none shadow-lg shadow-gray-100/50 rounded-[2rem] overflow-hidden group cursor-pointer hover:bg-blue-600 transition-all duration-500">
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
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
