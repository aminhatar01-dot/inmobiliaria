"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { createAutomationRule } from "@/app/actions/marketing"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import {
    Loader2, Zap, ArrowRight, Mail, CheckSquare, Bell,
    MessageCircle, Sparkles, Target, Users, User, Building2,
    Upload, FileText, X, Paperclip
} from "lucide-react"
import { MessageSuggestions } from "@/components/marketing/message-suggestions"

interface TemplateFile {
    name: string
    size: number
    type: string
    dataUrl: string
}

interface AutomationFormProps {
    leads?: Array<{ id: string; first_name?: string; last_name?: string; email?: string; phone?: string }>
    properties?: Array<{ id: string; title?: string; address?: string }>
}

export function AutomationForm({ leads = [], properties = [] }: AutomationFormProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [triggerType, setTriggerType] = useState("")
    const [actionType, setActionType] = useState("")
    const [followUpFormat, setFollowUpFormat] = useState("template")
    const [suggestedMessage, setSuggestedMessage] = useState("")
    const [aiPromptTemplate, setAiPromptTemplate] = useState("")

    const AI_PROMPT_TEMPLATES = {
        follower: "Actúa como un gestor de relaciones dedicado. Tu objetivo es mantener el interés del lead, respondiendo dudas de forma amigable y persistente sin ser invasivo. Siempre intenta calificar el interés del cliente.",
        closer: "Tu único objetivo es cerrar una cita presencial o una llamada telefónica. Sé persuasivo, destaca la urgencia de las oportunidades y ofrece horarios disponibles para coordinar una visita.",
        scheduler: "Actúa como un agendador de visitas. Pregunta al cliente qué día y hora le queda mejor para visitar la propiedad. Cuando el cliente proponga una fecha, confirma que la agendarás y despídete amablemente.",
        info_sender: "Enfócate en proporcionar detalles técnicos y de valor sobre las propiedades. Resalta las características únicas y los beneficios de la zona. Si hay cambios de precio, explica por qué es una gran oportunidad ahora.",
        support: "Actúa como un asistente de soporte inicial. Resuelve dudas básicas sobre procesos, requisitos y documentación necesaria para alquilar o comprar."
    }

    const handlePromptTemplateSelect = (value: string) => {
        setAiPromptTemplate(value)
        if (value && AI_PROMPT_TEMPLATES[value as keyof typeof AI_PROMPT_TEMPLATES]) {
            setSuggestedMessage(AI_PROMPT_TEMPLATES[value as keyof typeof AI_PROMPT_TEMPLATES])
        }
    }

    // Target scoping
    const [targetType, setTargetType] = useState<"all" | "lead" | "property">("all")
    const [targetId, setTargetId] = useState("")

    // Template uploads
    const [templates, setTemplates] = useState<TemplateFile[]>([])
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileAdd = (files: FileList | null) => {
        if (!files) return
        const newTemplates: TemplateFile[] = []
        Array.from(files).forEach(file => {
            if (templates.length + newTemplates.length >= 5) {
                toast.warning("Máximo 5 plantillas por automatización")
                return
            }
            const reader = new FileReader()
            reader.onload = (e) => {
                newTemplates.push({ name: file.name, size: file.size, type: file.type, dataUrl: e.target?.result as string })
                if (newTemplates.length === Math.min(files.length, 5 - templates.length)) {
                    setTemplates(prev => [...prev, ...newTemplates])
                }
            }
            reader.readAsDataURL(file)
        })
    }

    const removeTemplate = (index: number) => {
        setTemplates(prev => prev.filter((_, i) => i !== index))
    }

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        try {
            const formData = new FormData(e.currentTarget)

            // Build trigger condition
            let triggerCondition = {}
            if (triggerType === 'lead_status_change') {
                const fromStatus = formData.get('from_status')
                const toStatus = formData.get('to_status')
                if (fromStatus || toStatus) triggerCondition = { from_status: fromStatus, to_status: toStatus }
            }

            // Build action config
            let actionConfig: Record<string, unknown> = {}
            if (actionType === 'send_email') {
                const emailTemplateId = formData.get('email_template_id')
                if (emailTemplateId) actionConfig = { template_id: emailTemplateId }
            } else if (actionType === 'create_task') {
                const taskTitle = formData.get('task_title')
                const taskCategory = formData.get('task_category')
                if (taskTitle) actionConfig = { title: taskTitle, category: taskCategory }
            } else if (actionType === 'lead_follow_up') {
                actionConfig = {
                    channel: formData.get('follow_up_channel'),
                    format: formData.get('follow_up_format'),
                    frequency: formData.get('follow_up_frequency'),
                    message_template: formData.get('message_template') || suggestedMessage,
                    ai_role: formData.get('ai_role'),
                    ai_tone: formData.get('ai_tone'),
                    include_portfolio: formData.get('include_portfolio') === 'on'
                }
            }

            formData.set('trigger_condition', JSON.stringify(triggerCondition))
            formData.set('action_config', JSON.stringify(actionConfig))

            // Target scoping
            formData.set('target_type', targetType)
            if (targetType !== 'all' && targetId) formData.set('target_id', targetId)

            // Templates – store references (name, type, url/data)
            const templateRefs = templates.map(t => ({ name: t.name, type: t.type, size: t.size }))
            formData.set('templates', JSON.stringify(templateRefs))

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
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <form id="automation-form" onSubmit={handleSubmit} className="space-y-6">

                    {/* ── BASIC INFO ── */}
                    <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2rem] overflow-hidden">
                        <CardHeader className="p-8 bg-gray-50/50">
                            <CardTitle className="text-xl font-black text-blue-950">Información Básica</CardTitle>
                            <CardDescription>Dale un nombre descriptivo a tu automatización</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-gray-400">Nombre de la Automatización</Label>
                                <Input id="name" name="name" required placeholder="Ej: Enviar bienvenida a leads nuevos" className="h-12 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all font-medium" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* ── TARGET SCOPING ── */}
                    <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2rem] overflow-hidden">
                        <CardHeader className="p-8 bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="bg-violet-100 p-2 rounded-xl">
                                    <Target className="h-5 w-5 text-violet-600" />
                                </div>
                                <div>
                                    <CardTitle className="text-xl font-black text-blue-950">¿A quién aplica?</CardTitle>
                                    <CardDescription>Define el alcance de esta automatización</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 space-y-5">
                            {/* Scope selector cards */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { value: "all", label: "Todos", desc: "Se aplica a todos los leads y propiedades", icon: Users, color: "blue" },
                                    { value: "lead", label: "Lead específico", desc: "Solo para un lead concreto", icon: User, color: "green" },
                                    { value: "property", label: "Propiedad específica", desc: "Solo para una propiedad concreta", icon: Building2, color: "orange" },
                                ].map(opt => {
                                    const Icon = opt.icon
                                    const isSelected = targetType === opt.value
                                    return (
                                        <button
                                            key={opt.value}
                                            type="button"
                                            onClick={() => { setTargetType(opt.value as typeof targetType); setTargetId("") }}
                                            className={`flex flex-col items-center text-center p-4 rounded-2xl border-2 transition-all gap-2 ${isSelected
                                                ? 'border-violet-400 bg-violet-50 shadow-md shadow-violet-100'
                                                : 'border-gray-100 bg-white hover:border-violet-200 hover:bg-violet-50/30'}`}
                                        >
                                            <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-violet-200 text-violet-700' : 'bg-gray-100 text-gray-500'}`}>
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <span className={`text-sm font-bold ${isSelected ? 'text-violet-800' : 'text-gray-700'}`}>{opt.label}</span>
                                            <span className="text-xs text-gray-400 leading-tight">{opt.desc}</span>
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Lead selector */}
                            {targetType === "lead" && (
                                <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Seleccionar Lead</Label>
                                    {leads.length === 0 ? (
                                        <p className="text-sm text-gray-400 bg-gray-50 rounded-xl p-4">No hay leads disponibles en el sistema.</p>
                                    ) : (
                                        <Select value={targetId} onValueChange={setTargetId}>
                                            <SelectTrigger className="h-12 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-violet-100 transition-all">
                                                <SelectValue placeholder="Seleccionar lead..." />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-2xl border-none shadow-2xl">
                                                {leads.map(lead => (
                                                    <SelectItem key={lead.id} value={lead.id} className="rounded-lg">
                                                        <div className="flex items-center gap-2">
                                                            <User className="h-4 w-4 text-green-600" />
                                                            <span>{lead.first_name || ""} {lead.last_name || ""} {lead.email ? `(${lead.email})` : ""}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                </div>
                            )}

                            {/* Property selector */}
                            {targetType === "property" && (
                                <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Seleccionar Propiedad</Label>
                                    {properties.length === 0 ? (
                                        <p className="text-sm text-gray-400 bg-gray-50 rounded-xl p-4">No hay propiedades disponibles en el sistema.</p>
                                    ) : (
                                        <Select value={targetId} onValueChange={setTargetId}>
                                            <SelectTrigger className="h-12 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-violet-100 transition-all">
                                                <SelectValue placeholder="Seleccionar propiedad..." />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-2xl border-none shadow-2xl">
                                                {properties.map(p => (
                                                    <SelectItem key={p.id} value={p.id} className="rounded-lg">
                                                        <div className="flex items-center gap-2">
                                                            <Building2 className="h-4 w-4 text-orange-600" />
                                                            <span>{p.title || p.address || p.id.slice(0, 8)}</span>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* ── TRIGGER ── */}
                    <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2rem] overflow-hidden">
                        <CardHeader className="p-8 bg-gray-50/50">
                            <CardTitle className="text-xl font-black text-blue-950">¿Cuándo se ejecuta?</CardTitle>
                            <CardDescription>Define el evento que activará esta automatización</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="trigger_type" className="text-xs font-black uppercase tracking-widest text-gray-400">Evento Disparador</Label>
                                <Select name="trigger_type" required value={triggerType} onValueChange={setTriggerType}>
                                    <SelectTrigger className="h-12 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all">
                                        <SelectValue placeholder="Seleccionar evento" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-none shadow-2xl">
                                        <SelectItem value="lead_created" className="rounded-lg">
                                            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-amber-500" /><span>Cuando se crea un nuevo lead</span></div>
                                        </SelectItem>
                                        <SelectItem value="lead_status_change" className="rounded-lg">
                                            <div className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-blue-500" /><span>Cuando cambia el estado de un lead</span></div>
                                        </SelectItem>
                                        <SelectItem value="visit_scheduled" className="rounded-lg">
                                            <div className="flex items-center gap-2"><CheckSquare className="h-4 w-4 text-green-500" /><span>Cuando se programa una visita</span></div>
                                        </SelectItem>
                                        <SelectItem value="property_status_change" className="rounded-lg">
                                            <div className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-purple-500" /><span>Cuando cambia el estado de una propiedad</span></div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            {triggerType === 'lead_status_change' && (
                                <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-2 duration-300">
                                    <div className="space-y-2">
                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Estado Origen (opcional)</Label>
                                        <Select name="from_status">
                                            <SelectTrigger className="h-12 bg-gray-50 border-transparent rounded-xl"><SelectValue placeholder="Cualquiera" /></SelectTrigger>
                                            <SelectContent className="rounded-2xl border-none shadow-2xl">
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
                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Estado Destino</Label>
                                        <Select name="to_status" required>
                                            <SelectTrigger className="h-12 bg-gray-50 border-transparent rounded-xl"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                                            <SelectContent className="rounded-2xl border-none shadow-2xl">
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

                    {/* ── ACTION ── */}
                    <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2rem] overflow-hidden">
                        <CardHeader className="p-8 bg-gray-50/50">
                            <CardTitle className="text-xl font-black text-blue-950">¿Qué acción realizar?</CardTitle>
                            <CardDescription>Define la acción que se ejecutará automáticamente</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="action_type" className="text-xs font-black uppercase tracking-widest text-gray-400">Acción a Ejecutar</Label>
                                <Select name="action_type" required value={actionType} onValueChange={setActionType}>
                                    <SelectTrigger className="h-12 bg-gray-50 border-transparent rounded-xl">
                                        <SelectValue placeholder="Seleccionar acción" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-none shadow-2xl">
                                        <SelectItem value="lead_follow_up" className="rounded-lg">
                                            <div className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-green-600" /><span>Seguimiento de Lead (WhatsApp/Email/SMS)</span></div>
                                        </SelectItem>
                                        <SelectItem value="send_email" className="rounded-lg">
                                            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-600" /><span>Enviar email</span></div>
                                        </SelectItem>
                                        <SelectItem value="create_task" className="rounded-lg">
                                            <div className="flex items-center gap-2"><CheckSquare className="h-4 w-4 text-indigo-600" /><span>Crear tarea</span></div>
                                        </SelectItem>
                                        <SelectItem value="send_notification" className="rounded-lg">
                                            <div className="flex items-center gap-2"><Bell className="h-4 w-4 text-amber-600" /><span>Enviar notificación</span></div>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {actionType === 'lead_follow_up' && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-400">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Canal</Label>
                                            <Select name="follow_up_channel" defaultValue="whatsapp">
                                                <SelectTrigger className="h-11 bg-gray-50 border-transparent rounded-xl"><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                                    <SelectItem value="email">Email</SelectItem>
                                                    <SelectItem value="sms">SMS</SelectItem>
                                                    <SelectItem value="call">Llamada</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Formato</Label>
                                            <Select name="follow_up_format" value={followUpFormat} onValueChange={setFollowUpFormat}>
                                                <SelectTrigger className="h-11 bg-gray-50 border-transparent rounded-xl"><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="template">Plantilla Estándar</SelectItem>
                                                    <SelectItem value="ai">Agente IA Inteligente</SelectItem>
                                                    <SelectItem value="manual">Manual con sugerencia</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Frecuencia de Seguimiento</Label>
                                        <Select name="follow_up_frequency" defaultValue="3_days">
                                            <SelectTrigger className="h-11 bg-gray-50 border-transparent rounded-xl"><SelectValue /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="daily">Diario (Intensivo)</SelectItem>
                                                <SelectItem value="3_days">Cada 3 días (Equilibrado)</SelectItem>
                                                <SelectItem value="weekly">Semanal (Mantenimiento)</SelectItem>
                                                <SelectItem value="biweekly">Quincenal</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {followUpFormat === 'ai' && (
                                        <div className="space-y-6 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                            <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                                                <Sparkles className="h-4 w-4 text-blue-600" /> Configuración de Agente IA
                                            </h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Rol del Agente IA</Label>
                                                    <Select name="ai_role" defaultValue="asesor_comercial">
                                                        <SelectTrigger className="h-11 bg-white border-transparent rounded-xl"><SelectValue /></SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="asesor_comercial">Asesor Comercial</SelectItem>
                                                            <SelectItem value="experto_lujo">Experto en Lujo</SelectItem>
                                                            <SelectItem value="asistente_virtual">Asistente Virtual</SelectItem>
                                                            <SelectItem value="negociador">Negociador</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Tono de Respuesta</Label>
                                                    <Select name="ai_tone" defaultValue="profesional_amigable">
                                                        <SelectTrigger className="h-11 bg-white border-transparent rounded-xl"><SelectValue /></SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="profesional_amigable">Profesional y Amigable</SelectItem>
                                                            <SelectItem value="persuasivo">Persuasivo y Directo</SelectItem>
                                                            <SelectItem value="formal">Estrictamente Formal</SelectItem>
                                                            <SelectItem value="entusiasta">Entusiasta y Cercano</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center space-x-2 bg-white p-4 rounded-xl">
                                                <input type="checkbox" id="include_portfolio" name="include_portfolio" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                                                <label htmlFor="include_portfolio" className="text-sm font-medium text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                    Que la IA conozca mis propiedades disponibles para recomendarlas
                                                </label>
                                            </div>

                                            <div className="space-y-2">
                                                <Label className="text-xs font-black uppercase tracking-widest text-gray-400">
                                                    Plantillas de Instrucciones Rápidas
                                                </Label>
                                                <Select value={aiPromptTemplate} onValueChange={handlePromptTemplateSelect}>
                                                    <SelectTrigger className="h-11 bg-white border-transparent rounded-xl">
                                                        <SelectValue placeholder="Seleccionar una estrategia predefinida..." />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="follower">Seguidor de Leads (Persistencia)</SelectItem>
                                                        <SelectItem value="closer">Cerrador de Citas (Conversión)</SelectItem>
                                                        <SelectItem value="scheduler">Agendador de Visitas (Gestión)</SelectItem>
                                                        <SelectItem value="info_sender">Informador de Propiedades (Detalles)</SelectItem>
                                                        <SelectItem value="support">Soporte y Requisitos (Atención)</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message_template" className="text-xs font-black uppercase tracking-widest text-gray-400">
                                                    Instrucciones Personalizadas (Prompt)
                                                </Label>
                                                <p className="text-xs text-gray-500 mb-2">Define cómo debe comportarse la IA, qué estrategias de marketing aplicar, o reglas estrictas a seguir.</p>
                                                <textarea
                                                    id="message_template" name="message_template" rows={4}
                                                    value={suggestedMessage} onChange={e => setSuggestedMessage(e.target.value)}
                                                    placeholder="Ej: Actúa como un experto en bienes raíces. Ofrece siempre una visita guiada. No menciones precios exactos si no están en el portafolio..."
                                                    className="w-full p-4 bg-white border-transparent rounded-2xl focus:bg-gray-50 focus:ring-2 focus:ring-blue-100 transition-all font-medium text-sm"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {followUpFormat !== 'ai' && (
                                        <div className="space-y-2">
                                            <Label htmlFor="message_template" className="text-xs font-black uppercase tracking-widest text-gray-400">
                                                Cuerpo del Mensaje
                                            </Label>
                                            <textarea
                                                id="message_template" name="message_template" rows={5}
                                                value={suggestedMessage} onChange={e => setSuggestedMessage(e.target.value)}
                                                placeholder="Escribe el mensaje o selecciona una sugerencia a la derecha..."
                                                className="w-full p-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-medium text-sm"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}

                            {actionType === 'send_email' && (
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Plantilla de Email</Label>
                                    <Select name="email_template_id" required>
                                        <SelectTrigger className="h-12 bg-gray-50 border-transparent rounded-xl"><SelectValue placeholder="Seleccionar plantilla" /></SelectTrigger>
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
                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Título de la Tarea</Label>
                                        <Input id="task_title" name="task_title" required placeholder="Ej: Llamar al cliente para seguimiento" className="h-12 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Categoría</Label>
                                        <Select name="task_category" defaultValue="call">
                                            <SelectTrigger className="h-12 bg-gray-50 border-transparent rounded-xl"><SelectValue /></SelectTrigger>
                                            <SelectContent className="rounded-2xl border-none shadow-2xl">
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

                    {/* ── TEMPLATE UPLOAD ── */}
                    <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2rem] overflow-hidden">
                        <CardHeader className="p-8 bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="bg-amber-100 p-2 rounded-xl">
                                    <Paperclip className="h-5 w-5 text-amber-600" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <CardTitle className="text-xl font-black text-blue-950">Plantillas de Captación</CardTitle>
                                        <span className="text-xs font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Opcional</span>
                                    </div>
                                    <CardDescription>Adjunta plantillas (PDF, imágenes, documentos Word) que se enviarán con esta automatización</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 space-y-4">
                            {/* Drop Zone */}
                            <div
                                className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${isDragging ? 'border-amber-400 bg-amber-50' : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50/30'}`}
                                onClick={() => fileInputRef.current?.click()}
                                onDragOver={e => { e.preventDefault(); setIsDragging(true) }}
                                onDragLeave={() => setIsDragging(false)}
                                onDrop={e => { e.preventDefault(); setIsDragging(false); handleFileAdd(e.dataTransfer.files) }}
                            >
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    multiple
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.ppt,.pptx"
                                    className="hidden"
                                    onChange={e => handleFileAdd(e.target.files)}
                                />
                                <div className="flex flex-col items-center gap-3">
                                    <div className={`p-4 rounded-2xl ${isDragging ? 'bg-amber-200' : 'bg-gray-100'}`}>
                                        <Upload className={`h-8 w-8 ${isDragging ? 'text-amber-600' : 'text-gray-400'}`} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-700">
                                            {isDragging ? 'Suelta los archivos aquí' : 'Arrastra archivos aquí o haz clic para seleccionar'}
                                        </p>
                                        <p className="text-sm text-gray-400 mt-1">PDF, Word, PowerPoint, JPG, PNG · Máximo 5 archivos</p>
                                    </div>
                                </div>
                            </div>

                            {/* Uploaded files list */}
                            {templates.length > 0 && (
                                <div className="space-y-2 animate-in fade-in duration-300">
                                    <p className="text-xs font-black uppercase tracking-widest text-gray-400">{templates.length} Plantilla{templates.length !== 1 ? 's' : ''} adjunta{templates.length !== 1 ? 's' : ''}</p>
                                    {templates.map((tpl, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 group">
                                            <div className="bg-amber-100 p-2 rounded-lg shrink-0">
                                                <FileText className="h-5 w-5 text-amber-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-sm text-gray-900 truncate">{tpl.name}</p>
                                                <p className="text-xs text-gray-400">{formatFileSize(tpl.size)}</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeTemplate(idx)}
                                                className="p-1.5 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* ── SUBMIT ── */}
                    <div className="flex justify-end gap-4 pb-12">
                        <Button type="button" variant="ghost" onClick={() => router.back()} className="rounded-xl font-bold text-gray-400 hover:text-gray-600">
                            Cancelar
                        </Button>
                        <Button type="submit" disabled={loading} className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all">
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                            Configurar Automatización
                        </Button>
                    </div>
                </form>
            </div>

            {/* ── SIDEBAR AI ASSISTANT ── */}
            <div className="space-y-6">
                <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2rem] overflow-hidden sticky top-24">
                    <CardHeader className="p-8 bg-blue-600 text-white">
                        <div className="flex items-center gap-3">
                            <Sparkles className="h-5 w-5" />
                            <CardTitle className="text-lg font-black">Asistente IA</CardTitle>
                        </div>
                        <CardDescription className="text-blue-100">
                            Sugerencias estratégicas para {followUpFormat === 'ai' ? 'tus prompts de IA' : 'tus mensajes de seguimiento'}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                        <MessageSuggestions onSelect={(content) => setSuggestedMessage(content)} format={followUpFormat} />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
