'use client'

import { useState } from "react"
import { AutomationRule } from "@inmocms/shared"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { toggleAutomationRule, deleteAutomationRule } from "@/app/actions/marketing"
import { toast } from "sonner"
import { Zap, Mail, CheckSquare, Bell, Edit, Trash2, ArrowRight, MessageCircle } from "lucide-react"

const TRIGGER_ICONS = {
    lead_status_change: ArrowRight,
    lead_created: Zap,
    visit_scheduled: CheckSquare,
    property_status_change: ArrowRight
}

const TRIGGER_LABELS = {
    lead_status_change: 'Cambio de Estado de Lead',
    lead_created: 'Lead Creado',
    visit_scheduled: 'Visita Programada',
    property_status_change: 'Cambio de Estado de Propiedad'
}

const ACTION_ICONS = {
    send_email: Mail,
    create_task: CheckSquare,
    send_notification: Bell,
    update_lead_field: Edit,
    lead_follow_up: MessageCircle
}

const ACTION_LABELS = {
    send_email: 'Enviar Email',
    create_task: 'Crear Tarea',
    send_notification: 'Enviar Notificación',
    update_lead_field: 'Actualizar Campo de Lead',
    lead_follow_up: 'Seguimiento Automático'
}

export function AutomationRuleCard({ rule }: { rule: AutomationRule }) {
    const [isActive, setIsActive] = useState(rule.is_active)
    const [isToggling, setIsToggling] = useState(false)

    const TriggerIcon = TRIGGER_ICONS[rule.trigger_type]
    const ActionIcon = ACTION_ICONS[rule.action_type]

    async function handleToggle() {
        setIsToggling(true)
        try {
            await toggleAutomationRule(rule.id, !isActive)
            setIsActive(!isActive)
            toast.success(isActive ? "Automatización desactivada" : "Automatización activada")
        } catch (error) {
            console.error(error)
            toast.error("Error al cambiar el estado")
        } finally {
            setIsToggling(false)
        }
    }

    async function handleDelete() {
        if (!confirm("¿Seguro que deseas eliminar esta automatización?")) return

        try {
            await deleteAutomationRule(rule.id)
            toast.success("Automatización eliminada")
        } catch (error) {
            console.error(error)
            toast.error("Error al eliminar")
        }
    }

    return (
        <Card className="border-none shadow-sm rounded-[2rem] hover:shadow-md transition-all group overflow-hidden bg-white">
            <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <Switch checked={isActive} onCheckedChange={handleToggle} disabled={isToggling} />
                            <Badge variant={isActive ? "default" : "secondary"} className="text-[10px] font-bold uppercase tracking-widest">
                                {isActive ? "Activa" : "Inactiva"}
                            </Badge>
                        </div>
                        <CardTitle className="text-base font-bold text-gray-900">{rule.name}</CardTitle>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={handleDelete}>
                        <Trash2 className="h-4 w-4 text-gray-400" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                        <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                            <TriggerIcon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Cuando</p>
                            <p className="text-xs font-bold text-gray-900">{TRIGGER_LABELS[rule.trigger_type]}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <div className="h-8 w-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                            <ActionIcon className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Entonces</p>
                            <p className="text-xs font-bold text-gray-900">{ACTION_LABELS[rule.action_type]}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
