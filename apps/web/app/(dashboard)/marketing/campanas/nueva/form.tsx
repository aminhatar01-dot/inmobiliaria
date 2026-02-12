'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createCampaign } from "@/app/actions/campaigns"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { Loader2, Mail, Share2, MessageSquare, Smartphone } from "lucide-react"

const EMAIL_TEMPLATES = {
    newsletter: {
        name: 'Newsletter',
        subject: 'Nuevas propiedades disponibles',
        body: `Hola {{lead_name}},

Te compartimos las propiedades más destacadas de esta semana:

• {{property_title}}
  Ubicación: {{property_address}}
  Precio: {{property_currency}} {{property_price}}

¡Contactanos para agendar una visita!

Saludos,
{{agency_name}}`
    },
    follow_up: {
        name: 'Seguimiento',
        subject: 'Recordatorio de tu consulta',
        body: `Hola {{lead_name}},

Queremos recordarte que estamos a tu disposición para cualquier consulta sobre las propiedades que te interesaron.

¿Te gustaría agendar una visita?

Saludos,
{{agency_name}}`
    },
    welcome: {
        name: 'Bienvenida',
        subject: '¡Bienvenido a nuestra inmobiliaria!',
        body: `Hola {{lead_name}},

¡Gracias por contactarnos! Estaremos encantados de ayudarte a encontrar tu propiedad ideal.

Nuestro equipo se pondrá en contacto contigo a la brevedad.

Saludos,
{{agency_name}}`
    }
}

export function CampaignForm() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [campaignType, setCampaignType] = useState<string>("email")
    const [emailTemplate, setEmailTemplate] = useState<string>("newsletter")
    const [emailContent, setEmailContent] = useState(EMAIL_TEMPLATES.newsletter.body)
    const [emailSubject, setEmailSubject] = useState(EMAIL_TEMPLATES.newsletter.subject)

    const handleTemplateChange = (template: string) => {
        setEmailTemplate(template)
        const selectedTemplate = EMAIL_TEMPLATES[template as keyof typeof EMAIL_TEMPLATES]
        setEmailSubject(selectedTemplate.subject)
        setEmailContent(selectedTemplate.body)
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        try {
            const formData = new FormData(e.currentTarget)

            // Build content JSON based on campaign type
            const content = campaignType === 'email'
                ? { subject: emailSubject, body: emailContent }
                : { text: formData.get("social_text") }

            formData.set('content', JSON.stringify(content))
            formData.set('target_audience', JSON.stringify({})) // Placeholder for now

            await createCampaign(formData)
            toast.success("Campaña creada correctamente")
            router.push("/marketing/campanas")
        } catch (error) {
            console.error(error)
            toast.error("Error al crear la campaña")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Información Básica</CardTitle>
                    <CardDescription>Define el nombre y tipo de campaña</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nombre de la Campaña</Label>
                        <Input id="name" name="name" required placeholder="Ej: Newsletter Semanal" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="type">Tipo de Campaña</Label>
                        <Select name="type" required value={campaignType} onValueChange={setCampaignType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccionar tipo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="email">
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        Email Marketing
                                    </div>
                                </SelectItem>
                                <SelectItem value="social_media">
                                    <div className="flex items-center gap-2">
                                        <Share2 className="h-4 w-4" />
                                        Redes Sociales
                                    </div>
                                </SelectItem>
                                <SelectItem value="sms">
                                    <div className="flex items-center gap-2">
                                        <MessageSquare className="h-4 w-4" />
                                        SMS
                                    </div>
                                </SelectItem>
                                <SelectItem value="whatsapp">
                                    <div className="flex items-center gap-2">
                                        <Smartphone className="h-4 w-4" />
                                        WhatsApp
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {campaignType === 'email' && (
                <Card>
                    <CardHeader>
                        <CardTitle>Contenido del Email</CardTitle>
                        <CardDescription>Selecciona una plantilla o crea tu propio contenido</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="template">Plantilla</Label>
                            <Select value={emailTemplate} onValueChange={handleTemplateChange}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.entries(EMAIL_TEMPLATES).map(([key, template]) => (
                                        <SelectItem key={key} value={key}>
                                            {template.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email_subject">Asunto</Label>
                            <Input
                                id="email_subject"
                                value={emailSubject}
                                onChange={(e) => setEmailSubject(e.target.value)}
                                placeholder="Asunto del email"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email_body">Mensaje</Label>
                            <Textarea
                                id="email_body"
                                value={emailContent}
                                onChange={(e) => setEmailContent(e.target.value)}
                                placeholder="Contenido del email..."
                                className="min-h-[300px] font-mono text-sm"
                            />
                            <p className="text-xs text-gray-500">
                                Variables disponibles: {`{{lead_name}}`}, {`{{property_title}}`}, {`{{property_address}}`}, {`{{property_price}}`}, {`{{agency_name}}`}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            )}

            {campaignType === 'social_media' && (
                <Card>
                    <CardHeader>
                        <CardTitle>Contenido para Redes Sociales</CardTitle>
                        <CardDescription>Crea tu publicación</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="social_text">Texto de la Publicación</Label>
                            <Textarea
                                id="social_text"
                                name="social_text"
                                placeholder="¡Nueva propiedad disponible! 🏡..."
                                className="min-h-[200px]"
                            />
                        </div>
                    </CardContent>
                </Card>
            )}

            <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => router.back()}>
                    Cancelar
                </Button>
                <Button type="submit" disabled={loading}>
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Crear Campaña
                </Button>
            </div>
        </form>
    )
}
