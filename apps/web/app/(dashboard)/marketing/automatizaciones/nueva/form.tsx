'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createAutomationRule } from "@/app/actions/automations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { Loader2, Zap, ArrowRight, Mail, CheckSquare, Bell, Edit } from "lucide-react"

export function AutomationForm() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [triggerType, setTriggerType] = useState("")
    const [actionType, setActionType] = useState("")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        try {
            const formData = new FormData(e.currentTarget)

            // Build trigger condition based on trigger type
            let triggerCondition = {}
            if (triggerType === 'lead_status_change') {
                const fromStatus = formData.get('from_status')
                const toStatus = formData.get('to_status')
                if (fromStatus || toStatus) {
                    triggerCondition = { from_status: fromStatus, to_status: toStatus }
                }
            }

            // Build action config based on action type
            let actionConfig = {}
            if (actionType === 'send_email') {
                const emailTemplateId = formData.get('email_template_id')
                if (emailTemplateId) {
                    actionConfig = { template_id: emailTemplateId }
                }
            } else if (actionType === 'create_task') {
                const taskTitle = formData.get('task_title')
                const taskCategory = formData.get('task_category')
                if (taskTitle) {
                    actionConfig = { title: taskTitle, category: taskCategory }
                }
            }

            formData.set('trigger_condition', JSON.stringify(triggerCondition))
            formData.set('action_config', JSON.stringify(actionConfig))

            await createAutomationRule(formData)
            toast.success("Automatización creada correctamente")
            router.push("/marketing/automatizaciones")
        } catch (error) {
            console.error(error)
            toast.error("Error al crear la automatización")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Información Básica</CardTitle>
                    <CardDescription>Dale un nombre descriptivo a tu automatización</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nombre de la Automatización</Label>
                        <Input id="name" name="name" required placeholder="Ej: Enviar bienvenida a leads nuevos" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>¿Cuándo se ejecuta?</CardTitle>
                    <CardDescription>Define el evento que activará esta automatización</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="trigger_type">Evento Disparador</Label>
                        <Select name="trigger_type" required value={triggerType} onValueChange={setTriggerType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccionar evento" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="lead_created">
                                    <div className="flex items-center gap-2">
                                        <Zap className="h-4 w-4" />
                                        Cuando se crea un nuevo lead
                                    </div>
                                </SelectItem>
                                <SelectItem value="lead_status_change">
                                    <div className="flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" />
                                        Cuando cambia el estado de un lead
                                    </div>
                                </SelectItem>
                                <SelectItem value="visit_scheduled">
                                    <div className="flex items-center gap-2">
                                        <CheckSquare className="h-4 w-4" />
                                        Cuando se programa una visita
                                    </div>
                                </SelectItem>
                                <SelectItem value="property_status_change">
                                    <div className="flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" />
                                        Cuando cambia el estado de una propiedad
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {triggerType === 'lead_status_change' && (
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="from_status">Estado Origen (opcional)</Label>
                                <Select name="from_status">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Cualquiera" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="new">Nuevo</SelectItem>
                                        <SelectItem value="contacted">Contactado</SelectItem>
                                        <SelectItem value="visit_scheduled">Visita Programada</SelectItem>
                                        <SelectItem value="offer">Oferta</SelectItem>
                                        <SelectItem value="closing">Cierre</SelectItem>
                                        <SelectItem value="lost">Perdido</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="to_status">Estado Destino</Label>
                                <Select name="to_status" required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="new">Nuevo</SelectItem>
                                        <SelectItem value="contacted">Contactado</SelectItem>
                                        <SelectItem value="visit_scheduled">Visita Programada</SelectItem>
                                        <SelectItem value="offer">Oferta</SelectItem>
                                        <SelectItem value="closing">Cierre</SelectItem>
                                        <SelectItem value="lost">Perdido</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>¿Qué acción realizar?</CardTitle>
                    <CardDescription>Define la acción que se ejecutará automáticamente</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="action_type">Acción a Ejecutar</Label>
                        <Select name="action_type" required value={actionType} onValueChange={setActionType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccionar acción" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="send_email">
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        Enviar email
                                    </div>
                                </SelectItem>
                                <SelectItem value="create_task">
                                    <div className="flex items-center gap-2">
                                        <CheckSquare className="h-4 w-4" />
                                        Crear tarea
                                    </div>
                                </SelectItem>
                                <SelectItem value="send_notification">
                                    <div className="flex items-center gap-2">
                                        <Bell className="h-4 w-4" />
                                        Enviar notificación
                                    </div>
                                </SelectItem>
                                <SelectItem value="update_lead_field">
                                    <div className="flex items-center gap-2">
                                        <Edit className="h-4 w-4" />
                                        Actualizar campo del lead
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {actionType === 'send_email' && (
                        <div className="space-y-2">
                            <Label htmlFor="email_template_id">Plantilla de Email</Label>
                            <Select name="email_template_id" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Seleccionar plantilla" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="welcome">Bienvenida</SelectItem>
                                    <SelectItem value="follow_up">Seguimiento</SelectItem>
                                    <SelectItem value="newsletter">Newsletter</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    )}

                    {actionType === 'create_task' && (
                        <div className="grid gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="task_title">Título de la Tarea</Label>
                                <Input
                                    id="task_title"
                                    name="task_title"
                                    required
                                    placeholder="Ej: Llamar al cliente para seguimiento"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="task_category">Categoría</Label>
                                <Select name="task_category">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar categoría" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="call">Llamada</SelectItem>
                                        <SelectItem value="email">Email</SelectItem>
                                        <SelectItem value="visit">Visita</SelectItem>
                                        <SelectItem value="meeting">Reunión</SelectItem>
                                        <SelectItem value="admin">Admin</SelectItem>
                                        <SelectItem value="other">Otro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => router.back()}>
                    Cancelar
                </Button>
                <Button type="submit" disabled={loading}>
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Crear Automatización
                </Button>
            </div>
        </form>
    )
}
