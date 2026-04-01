'use client'

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { createContract, updateContract, generateLegalDocumentAI, uploadCustomTemplate, modifyDocumentAI } from "@/app/actions/contracts"
import { Property, Lead } from "@inmocms/shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner"
import {
    Loader2,
    FileText,
    Printer,
    Sparkles,
    Wand2,
    History,
    Save,
    ChevronDown,
    Search,
    BadgeCheck,
    AlertCircle,
    Stamp,
    Upload
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Props {
    properties: Property[]
    leads: Lead[]
    templates: any[]
    initialData?: any
}

export function ContractForm({ properties, leads, templates, initialData }: Props) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [generating, setGenerating] = useState(false)
    const [content, setContent] = useState(initialData?.content || "")
    const [selectedPropertyId, setSelectedPropertyId] = useState<string>(initialData?.property_id || "")
    const [selectedLeadId, setSelectedLeadId] = useState<string>(initialData?.lead_id || "")
    const [title, setTitle] = useState(initialData?.title || "")
    const [docType, setDocType] = useState<string>(initialData?.type || "other")
    const [aiInstructions, setAiInstructions] = useState("")
    const [aiEditing, setAiEditing] = useState(false)
    const [aiEditInstruction, setAiEditInstruction] = useState("")
    const [metadata, setMetadata] = useState<any>(initialData?.metadata || {
        partyA_name: "",
        partyA_dni: "",
        partyA_address: "",
        partyB_name: "",
        partyB_dni: "",
        partyB_address: "",
        startDate: "",
        expiryDate: "",
        amount: "",
        currency: "USD",
        concept: ""
    })

    const handleShareWhatsApp = () => {
        if (!content) return toast.error("El documento está vacío");
        const lead = leads.find(l => l.id === selectedLeadId);
        const phone = lead?.phone || metadata.partyB_phone || "";
        const text = encodeURIComponent(`Hola ${lead?.name || metadata.partyB_name || ''},\n\nTe comparto el documento "${title || 'Legal'}":\n\n${content}`);
        const cleanPhone = phone ? phone.replace(/[^0-9]/g, '') : '';
        window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
    }

    const handleShareEmail = () => {
        if (!content) return toast.error("El documento está vacío");
        const lead = leads.find(l => l.id === selectedLeadId);
        const email = lead?.email || metadata.partyB_email || "";
        const subject = encodeURIComponent(`Documento: ${title || 'Legal'}`);
        const body = encodeURIComponent(`Hola ${lead?.name || metadata.partyB_name || ''},\n\nAdjunto el contenido del documento:\n\n${content}\n\nSaludos.`);
        window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
    }

    const handleDocumentAIEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content || !aiEditInstruction) {
            toast.error("Necesitas texto y una instrucción.");
            return;
        }

        setAiEditing(true);
        try {
            const res = await modifyDocumentAI(content, aiEditInstruction);
            if (res.success && res.content) {
                setContent(res.content);
                setAiEditInstruction("");
                toast.success("Documento modificado por IA exitosamente.");
            } else {
                toast.error(res.error || "No se pudo modificar el documento.");
            }
        } catch (error: any) {
            toast.error(error.message || "Error al contactar IA");
        } finally {
            setAiEditing(false);
        }
    }

    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = async (event) => {
            const text = event.target?.result as string
            setLoading(true)
            try {
                const formData = new FormData()
                formData.append('name', file.name.split('.')[0])
                formData.append('type', docType)
                formData.append('content', text)

                await uploadCustomTemplate(formData)
                toast.success("Plantilla subida y guardada correctamente")
                router.refresh()
            } catch (error) {
                toast.error("Error al subir la plantilla")
            } finally {
                setLoading(false)
            }
        }
        reader.readAsText(file)
    }


    const handleTemplateSelect = (templateId: string) => {
        const template = templates.find(t => t.id === templateId)
        if (!template) return

        let templateContent = template.content
        setDocType(template.type)

        // Variabilization
        if (selectedPropertyId) {
            const prop = properties.find(p => p.id === selectedPropertyId)
            if (prop) {
                templateContent = templateContent
                    .replace(/{{property_title}}/g, prop.title)
                    .replace(/{{property_address}}/g, prop.address)
                    .replace(/{{property_price}}/g, `${prop.currency} ${prop.price.toLocaleString()}`)
            }
        }

        // Use metadata for variabilization
        const lead = leads.find(l => l.id === selectedLeadId)
        templateContent = templateContent
            .replace(/{{lead_name}}/g, metadata.partyB_name || lead?.name || "")
            .replace(/{{partyA_name}}/g, metadata.partyA_name || "")
            .replace(/{{partyB_name}}/g, metadata.partyB_name || "")
            .replace(/{{partyA_dni}}/g, metadata.partyA_dni || "")
            .replace(/{{partyB_dni}}/g, metadata.partyB_dni || "")

        setContent(templateContent)
        toast.success(`Plantilla "${template.name}" cargada`)
    }

    const handleGenerateAI = async () => {
        if (!selectedPropertyId && !selectedLeadId && !metadata.partyB_name) {
            toast.error("Selecciona al menos una propiedad o ingresa datos del cliente para dar contexto a la IA")
            return
        }

        setGenerating(true)
        try {
            const result = await generateLegalDocumentAI(
                docType,
                selectedPropertyId,
                selectedLeadId,
                aiInstructions,
                metadata
            )
            if (result.success) {
                setContent(result.content)
                toast.success("Documento generado con IA basándose en reglamentación legal")
            }
        } catch (error) {
            toast.error("Error al generar con IA")
        } finally {
            setGenerating(false)
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!content) {
            toast.error("El contenido del documento no puede estar vacío")
            return
        }

        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('type', docType)
            formData.append('property_id', selectedPropertyId || "")
            formData.append('lead_id', selectedLeadId || "")
            formData.append('content', content)
            formData.append('metadata', JSON.stringify(metadata))

            if (initialData) {
                formData.append('status', initialData.status)
                await updateContract(initialData.id, formData)
                toast.success("Cambios guardados")
            } else {
                await createContract(formData)
                toast.success("Documento guardado como borrador")
            }

            router.push("/documentos")
            router.refresh()
        } catch (error: any) {
            console.error("Error saving contract:", error)
            toast.error(`Error al guardar: ${error.message || "Error desconocido"}`)
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-20">
            <div className="lg:col-span-4 space-y-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 scrollbar-hide">
                <Card className="border-none shadow-2xl shadow-blue-500/5 rounded-[2.5rem] bg-white overflow-hidden text-gray-900 leading-normal">
                    <CardHeader className="p-8 pb-0">
                        <CardTitle className="text-xl font-black text-gray-900">Configuración Legal</CardTitle>
                        <CardDescription>Define las bases de tu documento.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title" className="text-xs font-black uppercase tracking-widest text-gray-400">Título del Documento</Label>
                                <Input
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Ej: Contrato de Alquiler - Depto 4"
                                    className="h-12 rounded-2xl bg-gray-50 border-none font-medium text-gray-900 placeholder:text-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Tipo de Documento</Label>
                                <Select value={docType} onValueChange={setDocType}>
                                    <SelectTrigger className="h-12 rounded-2xl bg-gray-50 border-none font-medium text-gray-900">
                                        <SelectValue placeholder="Seleccionar tipo" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-gray-100 rounded-xl shadow-xl">
                                        <SelectItem value="reservation" className="font-medium text-gray-900 focus:bg-blue-50 focus:text-blue-600">Reserva</SelectItem>
                                        <SelectItem value="rental" className="font-medium text-gray-900 focus:bg-blue-50 focus:text-blue-600">Alquiler</SelectItem>
                                        <SelectItem value="sale" className="font-medium text-gray-900 focus:bg-blue-50 focus:text-blue-600">Compraventa</SelectItem>
                                        <SelectItem value="receipt" className="font-medium text-gray-900 focus:bg-blue-50 focus:text-blue-600">Recibo</SelectItem>
                                        <SelectItem value="other" className="font-medium text-gray-900 focus:bg-blue-50 focus:text-blue-600">Otro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-50">
                            <Tabs defaultValue="context">
                                <TabsList className="bg-gray-100/50 p-1 rounded-2xl mb-4 h-auto w-full grid grid-cols-3">
                                    <TabsTrigger value="context" className="rounded-xl py-2 font-bold text-[9px] uppercase tracking-tighter data-[state=active]:bg-white data-[state=active]:text-blue-600 focus-visible:ring-0">
                                        Contexto
                                    </TabsTrigger>
                                    <TabsTrigger value="data" className="rounded-xl py-2 font-bold text-[9px] uppercase tracking-tighter data-[state=active]:bg-white data-[state=active]:text-green-600 focus-visible:ring-0">
                                        Datos
                                    </TabsTrigger>
                                    <TabsTrigger value="ia" className="rounded-xl py-2 font-bold text-[9px] uppercase tracking-tighter data-[state=active]:bg-white data-[state=active]:text-purple-600 focus-visible:ring-0">
                                        IA / Plantillas
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="context" className="space-y-4">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Propiedad Relacionada</Label>
                                        <Select value={selectedPropertyId} onValueChange={setSelectedPropertyId}>
                                            <SelectTrigger className="h-11 rounded-xl bg-gray-50 border-none font-medium text-xs text-gray-900">
                                                <SelectValue placeholder="Opcional" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white border-gray-100 rounded-xl shadow-xl">
                                                {properties.map(p => (
                                                    <SelectItem key={p.id} value={p.id} className="font-medium text-gray-900 focus:bg-blue-50 focus:text-blue-600">{p.title}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Cargar desde CRM (Lead)</Label>
                                        <Select value={selectedLeadId} onValueChange={(val) => {
                                            setSelectedLeadId(val)
                                            const lead = leads.find(l => l.id === val)
                                            if (lead) {
                                                setMetadata({ ...metadata, partyB_name: lead.name })
                                            }
                                        }}>
                                            <SelectTrigger className="h-11 rounded-xl bg-gray-50 border-none font-medium text-xs text-gray-900">
                                                <SelectValue placeholder="Opcional" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white border-gray-100 rounded-xl shadow-xl">
                                                {leads.map(l => (
                                                    <SelectItem key={l.id} value={l.id} className="font-medium text-gray-900 focus:bg-blue-50 focus:text-blue-600">{l.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </TabsContent>

                                <TabsContent value="data" className="space-y-4 max-h-[400px] overflow-y-auto pr-1 scrollbar-hide">
                                    <div className="space-y-4 border-l-2 border-blue-500 pl-4 py-2">
                                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Parte A (Locador/Vendedor)</p>
                                        <Input
                                            placeholder="Nombre Completo"
                                            value={metadata.partyA_name}
                                            onChange={(e) => setMetadata({ ...metadata, partyA_name: e.target.value })}
                                            className="h-9 rounded-lg bg-gray-50 border-none text-xs text-gray-900 placeholder:text-gray-400"
                                        />
                                        <Input
                                            placeholder="DNI / Pasaporte"
                                            value={metadata.partyA_dni}
                                            onChange={(e) => setMetadata({ ...metadata, partyA_dni: e.target.value })}
                                            className="h-9 rounded-lg bg-gray-50 border-none text-xs text-gray-900 placeholder:text-gray-400"
                                        />
                                        <Input
                                            placeholder="Domicilio"
                                            value={metadata.partyA_address}
                                            onChange={(e) => setMetadata({ ...metadata, partyA_address: e.target.value })}
                                            className="h-9 rounded-lg bg-gray-50 border-none text-xs text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-4 border-l-2 border-green-500 pl-4 py-2">
                                        <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">Parte B (Locatario/Comprador)</p>
                                        <Input
                                            placeholder="Nombre Completo"
                                            value={metadata.partyB_name}
                                            onChange={(e) => setMetadata({ ...metadata, partyB_name: e.target.value })}
                                            className="h-9 rounded-lg bg-gray-50 border-none text-xs text-gray-900 placeholder:text-gray-400"
                                        />
                                        <Input
                                            placeholder="DNI / Pasaporte"
                                            value={metadata.partyB_dni}
                                            onChange={(e) => setMetadata({ ...metadata, partyB_dni: e.target.value })}
                                            className="h-9 rounded-lg bg-gray-50 border-none text-xs text-gray-900 placeholder:text-gray-400"
                                        />
                                        <Input
                                            placeholder="Domicilio"
                                            value={metadata.partyB_address}
                                            onChange={(e) => setMetadata({ ...metadata, partyB_address: e.target.value })}
                                            className="h-9 rounded-lg bg-gray-50 border-none text-xs text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-4 bg-gray-50 p-4 rounded-2xl">
                                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Detalles del Acuerdo</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="space-y-1">
                                                <Label className="text-[9px] font-bold text-gray-400">Fecha Inicio</Label>
                                                <Input
                                                    type="date"
                                                    value={metadata.startDate}
                                                    onChange={(e) => setMetadata({ ...metadata, startDate: e.target.value })}
                                                    className="h-9 text-[10px] rounded-lg border-gray-200 text-gray-900 shadow-none"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <Label className="text-[9px] font-bold text-gray-400">Monto / Precio</Label>
                                                <Input
                                                    type="number"
                                                    placeholder="Ej: 500000"
                                                    value={metadata.amount}
                                                    onChange={(e) => setMetadata({ ...metadata, amount: e.target.value })}
                                                    className="h-9 text-[10px] rounded-lg border-gray-200 text-gray-900 shadow-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="ia" className="space-y-4">
                                    <Tabs defaultValue="generate">
                                        <TabsList className="bg-gray-100/30 p-1 rounded-xl mb-4 h-8 w-full">
                                            <TabsTrigger value="generate" className="rounded-lg text-[9px] font-bold h-full data-[state=active]:bg-white data-[state=active]:text-purple-600 focus-visible:ring-0">Generar</TabsTrigger>
                                            <TabsTrigger value="templates" className="rounded-lg text-[9px] font-bold h-full data-[state=active]:bg-white data-[state=active]:text-blue-600 focus-visible:ring-0">Plantillas</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="generate" className="space-y-4">
                                            <Textarea
                                                placeholder="Instrucciones adicionales para la IA..."
                                                className="min-h-[80px] rounded-2xl bg-gray-50 border-none text-xs font-medium resize-none text-gray-900 placeholder:text-gray-400"
                                                value={aiInstructions}
                                                onChange={(e) => setAiInstructions(e.target.value)}
                                            />
                                            <Button
                                                type="button"
                                                onClick={handleGenerateAI}
                                                disabled={generating}
                                                className="w-full h-12 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs shadow-lg shadow-purple-100 group transition-all active:scale-95"
                                            >
                                                {generating ? <Loader2 className="h-4 w-4 animate-spin" /> : (
                                                    <>
                                                        Generar con IA
                                                        <Sparkles className="ml-2 h-3.5 w-3.5 group-hover:rotate-12 transition-transform" />
                                                    </>
                                                )}
                                            </Button>
                                        </TabsContent>

                                        <TabsContent value="templates" className="space-y-4">
                                            <div className="grid gap-2 max-h-[250px] overflow-y-auto pr-1 scrollbar-hide">
                                                {templates.map(t => (
                                                    <button
                                                        key={t.id}
                                                        onClick={() => handleTemplateSelect(t.id)}
                                                        className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all text-left group border border-transparent hover:border-blue-200 active:scale-95"
                                                    >
                                                        <div className="h-7 w-7 rounded bg-white flex items-center justify-center text-blue-500 shadow-sm shrink-0">
                                                            <FileText className="h-4 w-4" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-bold text-[10px] text-gray-800 truncate">{t.name}</p>
                                                            <p className="text-[8px] text-gray-400 font-medium uppercase tracking-widest">{t.type}</p>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="pt-2 border-t border-gray-100 mt-2">
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    className="hidden"
                                                    accept=".txt,.md,.html"
                                                    onChange={handleFileUpload}
                                                />
                                                <Button
                                                    variant="outline"
                                                    className="w-full text-[10px] font-black uppercase tracking-widest border-dashed border-2 border-blue-200 h-10 rounded-xl bg-blue-50/30 text-blue-600 hover:bg-blue-50 active:scale-95 transition-all"
                                                    onClick={() => fileInputRef.current?.click()}
                                                >
                                                    <Upload className="h-3 w-3 mr-2" />
                                                    Subir Mi Plantilla
                                                </Button>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </CardContent>
                </Card>


                {/* Info Legal */}
                <Card className="border-none bg-orange-50/50 rounded-3xl">
                    <CardContent className="p-6 flex gap-4">
                        <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                            <AlertCircle className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-orange-900">Nota Legal</p>
                            <p className="text-[11px] text-orange-700 font-medium opacity-80 mt-1 leading-relaxed">
                                Los documentos generados por IA son borradores basados en normativas estándar. Siempre deben ser revisados por un profesional legal antes de su firma.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Editor de Contenido */}
            <div className="lg:col-span-8 flex flex-col gap-6">
                <Card className="border-none shadow-2xl shadow-gray-200/50 rounded-[3rem] overflow-hidden bg-white flex flex-col min-h-[700px]">
                    <div className="border-b p-6 bg-gray-50/30 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                                <FileText className="h-5 w-5 text-gray-400" />
                            </div>
                            <div>
                                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest font-mono">Contenido del Documento</h3>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <BadgeCheck className="h-3 w-3 text-green-500" />
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Editor Seguro Activado</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" type="button" onClick={handleShareWhatsApp} className="rounded-xl h-10 px-4 font-bold border-green-200 bg-green-50 text-green-700 hover:bg-green-100 shadow-sm transition">
                                <span className="hidden sm:inline">WhatsApp</span>
                            </Button>
                            <Button variant="outline" size="sm" type="button" onClick={handleShareEmail} className="rounded-xl h-10 px-4 font-bold border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 shadow-sm transition">
                                Email
                            </Button>
                            <Button variant="outline" size="sm" type="button" onClick={() => window.print()} className="rounded-xl h-10 px-4 font-bold border-gray-200 bg-white shadow-sm ml-2">
                                <Printer className="h-4 w-4 mr-2" /> <span className="hidden sm:inline">Imprimir / PDF</span>
                            </Button>
                        </div>
                    </div>
                    <CardContent className="flex-1 p-0 relative">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full h-full min-h-[600px] border-none focus:ring-0 p-12 font-mono text-sm leading-relaxed text-gray-800 bg-transparent resize-none selection:bg-blue-100 selection:text-blue-900"
                            placeholder="El contenido generado o la plantilla seleccionada aparecerá aquí. Puedes editarlo libremente..."
                        />
                        {generating && (
                            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative">
                                        <Loader2 className="h-12 w-12 text-purple-600 animate-spin" />
                                        <Sparkles className="h-6 w-6 text-purple-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
                                    </div>
                                    <p className="text-sm font-black text-purple-900 animate-pulse tracking-widest uppercase">Escaneando Reglamentación...</p>
                                </div>
                            </div>
                        )}
                        {aiEditing && (
                            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300 z-10">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative">
                                        <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
                                        <Wand2 className="h-6 w-6 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
                                    </div>
                                    <p className="text-sm font-black text-blue-900 animate-pulse tracking-widest uppercase">La IA está editando el texto...</p>
                                </div>
                            </div>
                        )}
                        <div className="p-4 bg-blue-50/50 border-t border-blue-100 shadow-[0_-5px_15px_-10px_rgba(0,0,0,0.1)] sticky bottom-0 left-0 right-0 mt-auto">
                            <div className="flex gap-2 items-center">
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm border border-blue-200">
                                    <Sparkles className="h-5 w-5" />
                                </div>
                                <Input 
                                    className="h-12 flex-1 rounded-xl border-blue-200 bg-white placeholder:text-blue-400 font-medium text-blue-900 focus-visible:ring-blue-500 shadow-sm" 
                                    placeholder="Dile a la IA qué modificar (ej: 'agrega una cláusula de recargo del 20%')"
                                    value={aiEditInstruction}
                                    onChange={(e) => setAiEditInstruction(e.target.value)}
                                    disabled={aiEditing}
                                />
                                <Button type="button" onClick={handleDocumentAIEdit} disabled={aiEditing || !aiEditInstruction || !content} className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-md shadow-blue-200 transition-all active:scale-95">
                                    {aiEditing ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Editar con IA'}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end gap-3">
                    <Button
                        variant="ghost"
                        onClick={() => router.back()}
                        className="rounded-2xl h-14 px-8 font-black text-gray-400"
                    >
                        Cancelar
                    </Button>
                    <form onSubmit={handleSubmit}>
                        <Button
                            type="submit"
                            disabled={loading || !content || !title}
                            className="h-14 px-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-lg shadow-xl shadow-blue-200 group"
                        >
                            {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : (
                                <>
                                    <Save className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                    Guardar Documento Final
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

