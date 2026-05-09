"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
    ChevronLeft,
    Image as ImageIcon,
    MapPin,
    Info,
    ListChecks,
    User,
    Loader2,
    Settings,
    Bell
} from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { createProperty } from "@/app/actions/properties"
import { OPERATION_TYPES, PROPERTY_STATUSES, PROPERTY_TYPES, CURRENCIES, PROPERTY_TYPE_LABELS } from "@inmocms/shared"
import { ImageUpload } from "@/components/properties/image-upload"
import { OwnerSelector } from "@/components/properties/owner-selector"
import LocationPicker from "@/components/properties/location-picker"

export default function NewPropertyPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [uploadedImages, setUploadedImages] = useState<string[]>([])

    // Form state
    const [formData, setFormData] = useState({
        title: "",
        property_type: "",
        operation_type: "" as "sale" | "rent" | "temporary_rent" | "",
        description: "",
        address: "",
        latitude: undefined as number | undefined,
        longitude: undefined as number | undefined,
        surface_total: 0,
        rooms: 0,
        bedrooms: 0,
        bathrooms: 0,
        currency: "USD",
        price: 0,
        status: "available",
        owner_id: "",
        automation_settings: {
            rules: [
                {
                    id: 'rule-' + Math.random().toString(36).substr(2, 9),
                    leadType: 'all',
                    actionType: 'whatsapp',
                    trigger: 'new_inquiry',
                    message: "¡Hola! Gracias por contactarme por esta propiedad. Me gustaría invitarte a una visita personalizada para que conozcas todos los detalles. ¿Qué día te queda mejor?",
                    enabled: false
                }
            ]
        }
    })

    const addRule = () => {
        setFormData(prev => ({
            ...prev,
            automation_settings: {
                ...prev.automation_settings,
                rules: [
                    ...prev.automation_settings.rules,
                    {
                        id: 'rule-' + Math.random().toString(36).substr(2, 9),
                        leadType: 'all',
                        actionType: 'whatsapp',
                        trigger: 'new_inquiry',
                        message: "Nuevo mensaje de seguimiento personalizado...",
                        enabled: true
                    }
                ]
            }
        }))
    }

    const removeRule = (id: string) => {
        setFormData(prev => ({
            ...prev,
            automation_settings: {
                ...prev.automation_settings,
                rules: prev.automation_settings.rules.filter((r: any) => r.id !== id)
            }
        }))
    }

    const updateRule = (id: string, updates: any) => {
        setFormData(prev => ({
            ...prev,
            automation_settings: {
                ...prev.automation_settings,
                rules: prev.automation_settings.rules.map((r: any) => 
                    r.id === id ? { ...r, ...updates } : r
                )
            }
        }))
    }

    const handleChange = (field: string, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.title || !formData.operation_type) {
            toast.error("Por favor completa los campos requeridos")
            return
        }

        setLoading(true)

        try {
            await createProperty({
                title: formData.title,
                property_type: formData.property_type,
                operation_type: formData.operation_type as "sale" | "rent" | "temporary_rent",
                description: formData.description,
                address: formData.address,
                latitude: formData.latitude,
                longitude: formData.longitude,
                surface_total: formData.surface_total,
                rooms: formData.rooms,
                bedrooms: formData.bedrooms,
                bathrooms: formData.bathrooms,
                currency: formData.currency,
                price: formData.price,
                status: formData.status,
                owner_id: formData.owner_id || undefined,
                automation_settings: formData.automation_settings
            } as any, uploadedImages)

            toast.success("Propiedad creada exitosamente")
            router.push("/propiedades")
        } catch (error: any) {
            toast.error(error.message || "Error al crear la propiedad")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 border border-gray-100 bg-white" onClick={() => router.back()}>
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <div>
                        <h2 className="text-3xl font-black text-gray-800 tracking-tight">Nuevo Inmueble</h2>
                        <p className="text-gray-500 text-sm font-medium">Completa los datos para publicar la propiedad</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-12 rounded-xl font-bold px-6" onClick={() => router.back()}>Cancelar</Button>
                    <Button
                        onClick={handleSubmit}
                        className="h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 px-8"
                        disabled={loading}
                    >
                        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Guardar Propiedad"}
                    </Button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* Basic Info */}
                    <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
                        <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-50 pb-6 px-8">
                            <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                <Info className="h-5 w-5" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-bold">Información Básica</CardTitle>
                                <CardDescription>Datos principales del inmueble</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-3">
                                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Título de la propiedad *</Label>
                                <Input
                                    placeholder="Ej: Impresionante Piso en Recoleta con Vistas"
                                    required
                                    value={formData.title}
                                    onChange={(e) => handleChange("title", e.target.value)}
                                    className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Tipo de Propiedad</Label>
                                    <Select value={formData.property_type} onValueChange={(v) => handleChange("property_type", v)}>
                                        <SelectTrigger className="h-12 bg-gray-50 border-gray-100 rounded-xl">
                                            <SelectValue placeholder="Seleccionar tipo" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl">
                                            {Object.entries(PROPERTY_TYPES).map(([key]) => (
                                                <SelectItem key={key} value={key}>
                                                    {PROPERTY_TYPE_LABELS[key as keyof typeof PROPERTY_TYPES]}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-3">
                                    <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Operación *</Label>
                                    <Select value={formData.operation_type} onValueChange={(v) => handleChange("operation_type", v)}>
                                        <SelectTrigger className="h-12 bg-gray-50 border-gray-100 rounded-xl">
                                            <SelectValue placeholder="Tipo de operación" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl">
                                            {Object.entries(OPERATION_TYPES).map(([key, label]) => (
                                                <SelectItem key={key} value={key}>{label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Descripción</Label>
                                <Textarea
                                    placeholder="Describe las características principales..."
                                    value={formData.description}
                                    onChange={(e) => handleChange("description", e.target.value)}
                                    className="min-h-[150px] bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all resize-none p-4"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Location */}
                    <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
                        <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-50 pb-6 px-8">
                            <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-bold">Ubicación</CardTitle>
                                <CardDescription>Dirección exacta y zona</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6">
                            <LocationPicker
                                address={formData.address}
                                latitude={formData.latitude}
                                longitude={formData.longitude}
                                onAddressChange={(addr) => handleChange("address", addr)}
                                onLocationChange={(lat, lng) => {
                                    handleChange("latitude", lat)
                                    handleChange("longitude", lng)
                                }}
                            />
                        </CardContent>
                    </Card>

                    {/* Features */}
                    <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
                        <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-50 pb-6 px-8">
                            <div className="h-10 w-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                                <ListChecks className="h-5 w-5" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-bold">Características</CardTitle>
                                <CardDescription>Ambientes, superficies y extras</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="space-y-3">
                                    <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Sup. Total</Label>
                                    <Input
                                        type="number"
                                        placeholder="m²"
                                        value={formData.surface_total || ""}
                                        onChange={(e) => handleChange("surface_total", Number(e.target.value))}
                                        className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Ambientes</Label>
                                    <Input
                                        type="number"
                                        placeholder="Cant."
                                        value={formData.rooms || ""}
                                        onChange={(e) => handleChange("rooms", Number(e.target.value))}
                                        className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Dormitorios</Label>
                                    <Input
                                        type="number"
                                        placeholder="Cant."
                                        value={formData.bedrooms || ""}
                                        onChange={(e) => handleChange("bedrooms", Number(e.target.value))}
                                        className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Baños</Label>
                                    <Input
                                        type="number"
                                        placeholder="Cant."
                                        value={formData.bathrooms || ""}
                                        onChange={(e) => handleChange("bathrooms", Number(e.target.value))}
                                        className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Advanced Automation Rules */}
                    <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-50 pb-6 px-8">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                    <Sparkles className="h-5 w-5" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-bold">Automatización de Leads</CardTitle>
                                    <CardDescription>Campaña personalizada y seguimiento inteligente</CardDescription>
                                </div>
                            </div>
                            <Button 
                                type="button"
                                onClick={addRule}
                                variant="outline" 
                                size="sm" 
                                className="rounded-xl border-indigo-100 text-indigo-600 hover:bg-indigo-50 font-bold"
                            >
                                <PlusCircle className="h-4 w-4 mr-2" /> Nueva Regla
                            </Button>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6">
                            {formData.automation_settings.rules.length === 0 ? (
                                <div className="text-center py-12 bg-gray-50/50 rounded-[2rem] border-2 border-dashed border-gray-100">
                                    <Settings className="h-12 w-12 text-gray-200 mx-auto mb-4" />
                                    <p className="text-gray-400 font-medium">No hay reglas de automatización configuradas.</p>
                                    <Button 
                                        type="button"
                                        onClick={addRule}
                                        variant="link" 
                                        className="text-indigo-600 font-bold mt-2"
                                    >
                                        Crear mi primera regla
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {formData.automation_settings.rules.map((rule: any, index: number) => (
                                        <div key={rule.id} className="p-6 rounded-[2rem] border border-gray-100 bg-gray-50/30 space-y-6 relative group transition-all hover:bg-white hover:shadow-xl hover:shadow-gray-200/30">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[10px] font-black text-gray-400 border border-gray-100">
                                                        {index + 1}
                                                    </div>
                                                    <Badge className="bg-indigo-600 text-white border-none uppercase text-[9px] font-black tracking-widest px-2 py-0.5">
                                                        Regla de {rule.trigger === 'new_inquiry' ? 'Nueva Consulta' : rule.trigger}
                                                    </Badge>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Switch 
                                                        checked={rule.enabled} 
                                                        onCheckedChange={(v) => updateRule(rule.id, { enabled: v })}
                                                    />
                                                    <Button 
                                                        type="button"
                                                        variant="ghost" 
                                                        size="icon" 
                                                        className="h-8 w-8 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50"
                                                        onClick={() => removeRule(rule.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Para Tipo de Lead</Label>
                                                    <Select value={rule.leadType} onValueChange={(v) => updateRule(rule.id, { leadType: v })}>
                                                        <SelectTrigger className="h-11 bg-white border-gray-100 rounded-xl text-xs font-bold">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-xl">
                                                            <SelectItem value="all">Todos los interesados</SelectItem>
                                                            <SelectItem value="sale">Interesados en Compra</SelectItem>
                                                            <SelectItem value="rent">Interesados en Alquiler</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Canal de Respuesta</Label>
                                                    <Select value={rule.actionType} onValueChange={(v) => updateRule(rule.id, { actionType: v })}>
                                                        <SelectTrigger className="h-11 bg-white border-gray-100 rounded-xl text-xs font-bold">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-xl">
                                                            <SelectItem value="whatsapp">WhatsApp Directo</SelectItem>
                                                            <SelectItem value="email">Correo Electrónico</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mensaje de Campaña Personalizada</Label>
                                                <Textarea 
                                                    value={rule.message}
                                                    onChange={(e) => updateRule(rule.id, { message: e.target.value })}
                                                    placeholder="Escribe el mensaje que recibirá el lead automáticamente..."
                                                    className="min-h-[100px] bg-white border-gray-100 rounded-2xl resize-none text-sm font-medium p-4 focus:ring-indigo-500/20"
                                                />
                                                <p className="text-[10px] text-gray-400 font-medium italic">Sugerencia: Incluye una invitación a una cita personal para aumentar la conversión.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-8">
                    {/* Media */}
                    <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
                        <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-50 pb-6 px-8">
                            <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                <ImageIcon className="h-5 w-5" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-bold">Multimedia</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ImageUpload onUploadComplete={(urls) => setUploadedImages(urls)} />
                        </CardContent>
                    </Card>

                    {/* Price & Status */}
                    <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-blue-600 text-white shadow-xl shadow-blue-500/20">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold">Precio y Estado</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-3 gap-2">
                                <div className="col-span-1 space-y-2">
                                    <Label className="text-[10px] font-bold text-white/60 uppercase tracking-widest ml-1">Moneda</Label>
                                    <Select value={formData.currency} onValueChange={(v) => handleChange("currency", v)}>
                                        <SelectTrigger className="h-12 bg-white/10 border-white/10 rounded-xl text-white">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl">
                                            {Object.entries(CURRENCIES).map(([key, label]) => (
                                                <SelectItem key={key} value={key}>{label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="col-span-2 space-y-2">
                                    <Label className="text-[10px] font-bold text-white/60 uppercase tracking-widest ml-1">Precio</Label>
                                    <Input
                                        type="number"
                                        placeholder="0.00"
                                        value={formData.price || ""}
                                        onChange={(e) => handleChange("price", Number(e.target.value))}
                                        className="h-12 bg-white/10 border-white/10 rounded-xl text-white placeholder:text-white/40 border-0 ring-0 focus-visible:ring-1 focus-visible:ring-white/30"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[10px] font-bold text-white/60 uppercase tracking-widest ml-1">Estado de Publicación</Label>
                                <Select value={formData.status} onValueChange={(v) => handleChange("status", v)}>
                                    <SelectTrigger className="h-12 bg-white/10 border-white/10 rounded-xl text-white">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl">
                                        {Object.entries(PROPERTY_STATUSES).map(([key, label]) => (
                                            <SelectItem key={key} value={key}>{label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Owner Linked */}
                    <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
                        <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-50 pb-6 px-8">
                            <div className="h-10 w-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                                <User className="h-5 w-5" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-bold">Propietario</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <OwnerSelector
                                value={formData.owner_id}
                                onChange={(val) => handleChange("owner_id", val)}
                            />
                        </CardContent>
                    </Card>
                </div>
            </form>
        </div>
    )
}

