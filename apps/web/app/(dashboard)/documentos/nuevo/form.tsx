'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createContract } from "@/app/actions/contracts"
import { Property, Lead } from "@inmocms/shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { Loader2, FileText, Printer } from "lucide-react"

interface Props {
    properties: Property[]
    leads: Lead[]
}

const TEMPLATES = {
    reservation: `RESERVA AD REFERENDUM

Entre la parte oferente, {{lead_name}}, DNI ..................., con domicilio en ..................., en adelante el "OFERENTE"; y la INMOBILIARIA ..................., en adelante el "CORREDOR", convienen celebrar la presente RESERVA de compraventa sujeta a las siguientes cláusulas:

PRIMERA: El OFERENTE ofrece comprar el inmueble sito en {{property_address}}, de la localidad de ..................., designado catastralmente como ..................., en las condiciones que se detallan a continuación.

SEGUNDA: El precio ofrecido es de {{property_currency}} {{property_price}}, pagaderos de la siguiente forma: ...................

TERCERA: En prueba de interés, el OFERENTE entrega en este acto al CORREDOR la suma de ..................., en concepto de RESERVA AD REFERENDUM de la aceptación del propietario vendedor.`,
    rental: `CONTRATO DE LOCACIÓN

En la ciudad de ..................., a los ... días del mes de ...... de 20..., entre ..................., DNI ..................., domiciliado en ..................., en adelante el "LOCADOR", y {{lead_name}}, DNI ..................., domiciliado en ..................., en adelante el "LOCATARIO", convienen celebrar el presente CONTRATO DE LOCACIÓN:

PRIMERA: El LOCADOR cede en locación al LOCATARIO el inmueble sito en {{property_address}}, destinado exclusivamente a vivienda familiar.

SEGUNDA: El plazo de locación se estipula en ... meses, a partir del día .../.../20...

TERCERA: El precio del alquiler se fija en {{property_currency}} {{property_price}} mensuales.`,
    sale: `BOLETO DE COMPRAVENTA

Entre el Sr. ..................., DNI ..................., en adelante el "VENDEDOR", y el Sr. {{lead_name}}, DNI ..................., en adelante el "COMPRADOR", se conviene:

PRIMERA: El VENDEDOR vende al COMPRADOR y este compra, el inmueble ubicado en {{property_address}}, por el precio total de {{property_currency}} {{property_price}}.`,
    other: ``
}

export function ContractForm({ properties, leads }: Props) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [templateType, setTemplateType] = useState<string>("other")
    const [content, setContent] = useState("")
    const [selectedPropertyId, setSelectedPropertyId] = useState<string>("")
    const [selectedLeadId, setSelectedLeadId] = useState<string>("")

    const handleTemplateChange = (type: string) => {
        setTemplateType(type)
        let templateContent = TEMPLATES[type as keyof typeof TEMPLATES] || ""

        // Auto-replace variables if property/lead selected (Simple logic for now)
        if (selectedPropertyId) {
            const prop = properties.find(p => p.id === selectedPropertyId)
            if (prop) {
                templateContent = templateContent
                    .replace(/{{property_address}}/g, prop.address)
                    .replace(/{{property_currency}}/g, prop.currency)
                    .replace(/{{property_price}}/g, prop.price.toString())
            }
        }
        if (selectedLeadId) {
            const lead = leads.find(l => l.id === selectedLeadId)
            if (lead) {
                templateContent = templateContent.replace(/{{lead_name}}/g, lead.name)
            }
        }

        setContent(templateContent)
    }

    const refreshContent = () => {
        handleTemplateChange(templateType)
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        try {
            const formData = new FormData(e.currentTarget)
            // Ensure content is passed correctly from state because textarea might be controlled or not perfectly synced if we use rich editor later
            formData.set('content', content)

            await createContract(formData)
            toast.success("Documento guardado correctamente")
            router.push("/documentos")
        } catch (error) {
            console.error(error)
            toast.error("Error al guardar el documento")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
                <Card>
                    <CardContent className="pt-6 space-y-4">
                        <form id="contract-form" onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Título del Documento</Label>
                                <Input id="title" name="title" required placeholder="Ej: Reserva Depto 3B" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="type">Tipo de Plantilla</Label>
                                <Select name="type" required onValueChange={handleTemplateChange} value={templateType}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar tipo" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="reservation">Reserva</SelectItem>
                                        <SelectItem value="rental">Contrato de Alquiler</SelectItem>
                                        <SelectItem value="sale">Boleto Compraventa</SelectItem>
                                        <SelectItem value="other">Otro / En blanco</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="property_id">Propiedad Relacionada</Label>
                                <Select name="property_id" onValueChange={(val) => { setSelectedPropertyId(val); refreshContent() }}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar propiedad" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {properties.map(p => (
                                            <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="lead_id">Cliente / Interesado</Label>
                                <Select name="lead_id" onValueChange={(val) => { setSelectedLeadId(val); refreshContent() }}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar cliente" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {leads.map(l => (
                                            <SelectItem key={l.id} value={l.id}>{l.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button type="button" variant="outline" size="sm" onClick={refreshContent} className="w-full">
                                Recargar Variables en Plantilla
                            </Button>

                            <div className="pt-4">
                                <Button type="submit" className="w-full" disabled={loading}>
                                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileText className="mr-2 h-4 w-4" />}
                                    Guardar Borrador
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-2">
                <Card className="h-full min-h-[500px] flex flex-col">
                    <CardContent className="flex-1 p-0 flex flex-col">
                        <div className="border-b p-2 bg-muted/20 flex justify-between items-center">
                            <span className="text-xs text-muted-foreground font-medium px-2">EDITOR DE CONTENIDO</span>
                            <Button variant="ghost" size="sm" onClick={() => window.print()}>
                                <Printer className="h-4 w-4 mr-2" /> Imprimir / PDF
                            </Button>
                        </div>
                        <Textarea
                            name="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="flex-1 rounded-none border-0 focus-visible:ring-0 resize-none p-6 font-mono text-sm leading-relaxed"
                            placeholder="El contenido del documento aparecerá aquí..."
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
