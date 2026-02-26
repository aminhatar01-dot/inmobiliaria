"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
    ChevronLeft,
    Image as ImageIcon,
    MapPin,
    Info,
    ListChecks,
    Loader2,
    Trash2,
    X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { updateProperty, deleteProperty } from "@/app/actions/properties"
import { Property, OPERATION_TYPES, PROPERTY_TYPES, CURRENCIES, PROPERTY_TYPE_LABELS, PROPERTY_STATUSES } from "@inmocms/shared"
import { ImageUpload } from "@/components/properties/image-upload"
import { OwnerSelector } from "@/components/properties/owner-selector"
import LocationPicker from "@/components/properties/location-picker"

interface Props {
    property: Property
}

export default function PropertyEditForm({ property }: Props) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const [uploadedImages, setUploadedImages] = useState<string[]>(
        (property as any).property_media?.map((m: any) => m.url) || []
    )

    const [formData, setFormData] = useState({
        title: property.title || "",
        property_type: property.property_type || "",
        operation_type: property.operation_type || "",
        description: property.description || "",
        address: property.address || "",
        latitude: property.latitude,
        longitude: property.longitude,
        surface_total: property.surface_total || 0,
        rooms: property.rooms || 0,
        bedrooms: property.bedrooms || 0,
        bathrooms: property.bathrooms || 0,
        currency: property.currency || "USD",
        price: property.price || 0,
        status: property.status || "available",
        owner_id: (property as any).owner_id || ""
    })

    const handleChange = (field: string, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            await updateProperty(property.id, {
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
                owner_id: formData.owner_id || undefined
            }, uploadedImages)

            toast.success("Propiedad actualizada exitosamente")
            router.push("/propiedades")
        } catch (error: any) {
            toast.error(error.message || "Error al actualizar la propiedad")
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async () => {
        if (!confirm("¿Estás seguro de que deseas eliminar esta propiedad? Esta acción no se puede deshacer.")) {
            return
        }

        setDeleting(true)
        try {
            await deleteProperty(property.id)
            toast.success("Propiedad eliminada")
            router.push("/propiedades")
        } catch (error: any) {
            toast.error(error.message || "Error al eliminar")
        } finally {
            setDeleting(false)
        }
    }

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 border border-gray-100 bg-white" onClick={() => router.back()}>
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <div>
                        <h2 className="text-3xl font-black text-gray-800 tracking-tight">Editar Inmueble</h2>
                        <p className="text-gray-500 text-sm font-medium">Modifica los datos de la propiedad</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        className="h-12 rounded-xl font-bold px-6 text-red-600 border-red-200 hover:bg-red-50"
                        onClick={handleDelete}
                        disabled={deleting}
                    >
                        {deleting ? <Loader2 className="h-5 w-5 animate-spin" /> : <><Trash2 className="h-4 w-4 mr-2" /> Eliminar</>}
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className="h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 px-8"
                        disabled={loading}
                    >
                        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Guardar Cambios"}
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
                                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Título de la propiedad</Label>
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
                                    <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Operación</Label>
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
                            <ImageUpload
                                initialImages={uploadedImages}
                                onUploadComplete={(urls) => setUploadedImages(urls)}
                            />
                        </CardContent>
                    </Card>

                    {/* Owner Linked */}
                    <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
                        <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-50 pb-6 px-8">
                            <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                <Info className="h-5 w-5" />
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
                </div>
            </form>
        </div>
    )
}
