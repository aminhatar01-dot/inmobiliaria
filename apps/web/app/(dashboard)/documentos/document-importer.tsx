'use client'

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { importDocument } from "@/app/actions/contracts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { Loader2, Upload, FileText, User, Home, Info, CheckCircle2, AlertCircle, FileStack, Layout } from "lucide-react"
import { Property, Lead } from "@inmocms/shared"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Props {
    properties: Property[]
    leads: Lead[]
    defaultPropertyId?: string
    defaultLeadId?: string
}

export function DocumentImporter({ properties, leads, defaultPropertyId = "", defaultLeadId = "" }: Props) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(1)

    // Form state
    const [fileName, setFileName] = useState("")
    const [docType, setDocType] = useState("other")
    const [mode, setMode] = useState<'template' | 'contract' | 'property_doc' | 'lead_doc'>('contract')
    const [propertyId, setPropertyId] = useState(defaultPropertyId)
    const [leadId, setLeadId] = useState(defaultLeadId)
    const [updateEntities, setUpdateEntities] = useState(false)
    const [content, setContent] = useState("")

    const [metadata, setMetadata] = useState({
        partyA_name: "",
        partyA_dni: "",
        partyB_name: "",
        partyB_dni: "",
        amount: "",
        currency: "USD",
        startDate: "",
        document_description: ""
    })

    const fileInputRef = useRef<HTMLInputElement>(null)

    // Sync with defaults if they change (e.g. when opening from a specific property page)
    useEffect(() => {
        if (defaultPropertyId) setPropertyId(defaultPropertyId)
        if (defaultLeadId) setLeadId(defaultLeadId)
    }, [defaultPropertyId, defaultLeadId])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setFileName(file.name.split('.')[0])
        const reader = new FileReader()
        reader.onload = (event) => {
            setContent(event.target?.result as string)
            setOpen(true)
            setStep(1)
        }
        reader.readAsText(file)
        // Reset input for same file re-upload
        e.target.value = ""
    }

    const validateStep1 = () => {
        if (!fileName) return false
        if (mode === 'template') return true // Templates only need name and type
        return true // For now, we allow next
    }

    const validateStep2 = () => {
        if (mode === 'property_doc' && !propertyId) return false
        if (mode === 'lead_doc' && !leadId) return false
        if (mode === 'contract' && (!propertyId || !leadId)) return false
        return true
    }

    const handleConfirm = async () => {
        if (!validateStep2()) {
            toast.error("Por favor completa los campos obligatorios para esta categoría")
            return
        }

        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('name', fileName)
            formData.append('content', content)
            formData.append('type', mode === 'template' ? docType : mode) // Use mode as type for docs
            formData.append('mode', mode === 'template' ? 'template' : 'contract')
            formData.append('property_id', propertyId)
            formData.append('lead_id', leadId)
            formData.append('metadata', JSON.stringify(metadata))
            formData.append('update_entities', updateEntities.toString())

            await importDocument(formData)
            toast.success("Importación completada correctamente")
            setOpen(false)
            router.refresh()
        } catch (error: any) {
            toast.error(`Error al importar: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".txt,.md,.html,.pdf"
                onChange={handleFileChange}
            />
            <Button
                onClick={() => fileInputRef.current?.click()}
                className="h-16 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-lg shadow-2xl shadow-blue-100 group transition-all active:scale-95"
            >
                <Upload className="mr-3 h-6 w-6 group-hover:-translate-y-1 transition-transform" />
                Importar Documento
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-xl rounded-[2.5rem] border-none shadow-2xl p-0 overflow-hidden bg-white">
                    <DialogHeader className="p-8 bg-gray-50/50 border-b">
                        <div className="flex items-center justify-between">
                            <div>
                                <DialogTitle className="text-3xl font-black tracking-tighter text-gray-900">Clasificar Documento</DialogTitle>
                                <DialogDescription className="font-medium text-gray-500 text-base">
                                    Completa los datos para guardar el documento donde corresponde.
                                </DialogDescription>
                            </div>
                            <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                                <FileStack className="h-7 w-7" />
                            </div>
                        </div>
                    </DialogHeader>

                    <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto scrollbar-hide">
                        <Tabs value={step.toString()} className="w-full">
                            <TabsList className="hidden">
                                <TabsTrigger value="1">1</TabsTrigger>
                                <TabsTrigger value="2">2</TabsTrigger>
                            </TabsList>

                            <TabsContent value="1" className="space-y-6 mt-0">
                                <Label className="text-xs font-black uppercase tracking-widest text-gray-400">¿Qué tipo de documento es?</Label>
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        onClick={() => setMode('contract')}
                                        className={`p-5 rounded-3xl border-2 cursor-pointer transition-all ${mode === 'contract' ? 'border-blue-600 bg-blue-50/50 shadow-lg shadow-blue-100/50' : 'border-gray-100 hover:border-gray-200'}`}
                                    >
                                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-4 ${mode === 'contract' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                            <FileText className="h-5 w-5" />
                                        </div>
                                        <p className="font-black text-xs uppercase tracking-widest text-gray-900">Contrato Legal</p>
                                        <p className="text-[9px] text-gray-500 font-bold mt-1 uppercase tracking-tighter">Reserva, Alquiler, etc.</p>
                                    </div>
                                    <div
                                        onClick={() => setMode('property_doc')}
                                        className={`p-5 rounded-3xl border-2 cursor-pointer transition-all ${mode === 'property_doc' ? 'border-orange-600 bg-orange-50/50 shadow-lg shadow-orange-100/50' : 'border-gray-100 hover:border-gray-200'}`}
                                    >
                                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-4 ${mode === 'property_doc' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                            <Home className="h-5 w-5" />
                                        </div>
                                        <p className="font-black text-xs uppercase tracking-widest text-gray-900">Doc. de Propiedad</p>
                                        <p className="text-[9px] text-gray-500 font-bold mt-1 uppercase tracking-tighter">Título, Planos, Impuestos</p>
                                    </div>
                                    <div
                                        onClick={() => setMode('lead_doc')}
                                        className={`p-5 rounded-3xl border-2 cursor-pointer transition-all ${mode === 'lead_doc' ? 'border-green-600 bg-green-50/50 shadow-lg shadow-green-100/50' : 'border-gray-100 hover:border-gray-200'}`}
                                    >
                                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-4 ${mode === 'lead_doc' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                            <User className="h-5 w-5" />
                                        </div>
                                        <p className="font-black text-xs uppercase tracking-widest text-gray-900">Doc. de Cliente</p>
                                        <p className="text-[9px] text-gray-500 font-bold mt-1 uppercase tracking-tighter">DNI, Recibos de Sueldo</p>
                                    </div>
                                    <div
                                        onClick={() => setMode('template')}
                                        className={`p-5 rounded-3xl border-2 cursor-pointer transition-all ${mode === 'template' ? 'border-purple-600 bg-purple-50/50 shadow-lg shadow-purple-100/50' : 'border-gray-100 hover:border-gray-200'}`}
                                    >
                                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-4 ${mode === 'template' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                            <Layout className="h-5 w-5" />
                                        </div>
                                        <p className="font-black text-xs uppercase tracking-widest text-gray-900">Plantilla</p>
                                        <p className="text-[9px] text-gray-500 font-bold mt-1 uppercase tracking-tighter">Para generar nuevos docs</p>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-2">
                                    <div className="space-y-2">
                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Nombre del archivo en sistema</Label>
                                        <Input
                                            value={fileName}
                                            onChange={(e) => setFileName(e.target.value)}
                                            className="h-12 rounded-2xl bg-gray-50 border-none font-bold text-gray-900"
                                            placeholder="Ej: Escritura_Calle_Falsa_123"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="2" className="space-y-6 mt-0">
                                <div className="space-y-5">
                                    {(mode === 'property_doc' || mode === 'contract') && (
                                        <div className="space-y-2">
                                            <Label className="text-xs font-black uppercase tracking-widest text-orange-600 flex items-center gap-2">
                                                <Home className="h-3 w-3" /> Vincular a Propiedad <span className="text-red-500">*</span>
                                            </Label>
                                            <Select value={propertyId} onValueChange={setPropertyId}>
                                                <SelectTrigger className="h-12 rounded-2xl bg-gray-50 border-none font-bold px-5">
                                                    <SelectValue placeholder="Seleccionar propiedad..." />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-2xl border-none shadow-2xl">
                                                    {properties.map(p => (
                                                        <SelectItem key={p.id} value={p.id} className="rounded-xl">{p.title}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )}

                                    {(mode === 'lead_doc' || mode === 'contract') && (
                                        <div className="space-y-2">
                                            <Label className="text-xs font-black uppercase tracking-widest text-green-600 flex items-center gap-2">
                                                <User className="h-3 w-3" /> Vincular a Cliente <span className="text-red-500">*</span>
                                            </Label>
                                            <Select value={leadId} onValueChange={(val) => {
                                                setLeadId(val)
                                                const lead = leads.find(l => l.id === val)
                                                if (lead) setMetadata({ ...metadata, partyB_name: lead.name })
                                            }}>
                                                <SelectTrigger className="h-12 rounded-2xl bg-gray-50 border-none font-bold px-5">
                                                    <SelectValue placeholder="Seleccionar cliente..." />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-2xl border-none shadow-2xl">
                                                    {leads.map(l => (
                                                        <SelectItem key={l.id} value={l.id} className="rounded-xl">{l.name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )}

                                    <div className="bg-blue-600 p-8 rounded-[2.5rem] space-y-5 shadow-xl shadow-blue-100 border border-blue-500/20">
                                        <p className="text-[10px] font-black text-blue-100 uppercase tracking-widest flex items-center gap-2">
                                            <Info className="h-3.5 w-3.5 text-white" /> Datos Adicionales (Opcional)
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label className="text-[10px] font-black text-blue-200 uppercase tracking-tighter">Nombre en Doc</Label>
                                                <Input
                                                    value={metadata.partyB_name}
                                                    onChange={e => setMetadata({ ...metadata, partyB_name: e.target.value })}
                                                    className="h-11 text-xs rounded-xl bg-white/10 border-white/20 text-white placeholder:text-blue-300 outline-none focus:ring-2 focus:ring-white/30"
                                                    placeholder="Nombre completo"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label className="text-[10px] font-black text-blue-200 uppercase tracking-tighter">DNI / ID</Label>
                                                <Input
                                                    value={metadata.partyB_dni}
                                                    onChange={e => setMetadata({ ...metadata, partyB_dni: e.target.value })}
                                                    className="h-11 text-xs rounded-xl bg-white/10 border-white/20 text-white placeholder:text-blue-300 outline-none focus:ring-2 focus:ring-white/30"
                                                    placeholder="Documento"
                                                />
                                            </div>
                                        </div>

                                        {leadId && (
                                            <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                                                <Checkbox
                                                    id="update"
                                                    checked={updateEntities}
                                                    onCheckedChange={(val) => setUpdateEntities(!!val)}
                                                    className="h-5 w-5 rounded-md border-white/30 bg-transparent data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                                                />
                                                <label htmlFor="update" className="text-xs font-bold text-white leading-tight cursor-pointer">
                                                    Sincronizar estos datos con la ficha del cliente automáticamente
                                                </label>
                                            </div>
                                        )}
                                    </div>

                                    {!validateStep2() && (
                                        <div className="flex items-start gap-3 p-4 bg-red-50 rounded-2xl border border-red-100 text-red-600">
                                            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                                            <p className="text-xs font-bold leading-relaxed">
                                                Faltan datos obligatorios para catalogar este documento. Por favor selecciona una Propiedad o Cliente.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <DialogFooter className="p-8 bg-gray-50/50 gap-3 border-t">
                        {step === 1 ? (
                            <Button
                                onClick={() => setStep(2)}
                                disabled={!validateStep1() || mode === 'template'}
                                className={`rounded-2xl h-14 px-10 font-black text-base shadow-xl transition-all w-full flex-1 ${mode === 'template' ? 'hidden' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-100'}`}
                            >
                                Continuar a Categorización
                            </Button>
                        ) : (
                            <Button
                                variant="ghost"
                                onClick={() => setStep(1)}
                                className="rounded-2xl h-14 px-8 font-black text-gray-400 hover:bg-gray-100"
                            >
                                Atrás
                            </Button>
                        )}

                        {(mode === 'template' || step === 2) && (
                            <Button
                                onClick={handleConfirm}
                                disabled={loading || !validateStep1() || (mode !== 'template' && !validateStep2())}
                                className={`rounded-2xl h-14 px-10 font-black text-base shadow-xl flex-1 ${mode === 'template' ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-100 w-full' : 'bg-green-600 hover:bg-green-700 shadow-green-100'}`}
                            >
                                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                                    <>
                                        <CheckCircle2 className="mr-2 h-5 w-5" />
                                        Finalizar y Guardar
                                    </>
                                )}
                            </Button>
                        )}
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
