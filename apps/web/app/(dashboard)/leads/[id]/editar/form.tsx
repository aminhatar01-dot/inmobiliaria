"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
    ChevronLeft,
    User,
    Mail,
    Phone,
    Target,
    Share2,
    Save,
    Trash2,
    Loader2,
    Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { updateLead, deleteLead } from "@/app/actions/leads"
import {
    Lead,
    INTEREST_TYPES,
    INTEREST_TYPE_LABELS,
    LEAD_SOURCES,
    LEAD_SOURCE_LABELS,
    LEAD_STATUSES,
    LEAD_STATUS_LABELS
} from "@inmocms/shared"

interface Props {
    lead: Lead
}

export default function LeadEditForm({ lead }: Props) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const [formData, setFormData] = useState<Partial<Lead>>({
        name: lead.name || "",
        email: lead.email || "",
        phone: lead.phone || "",
        interest_type: lead.interest_type || "",
        source: lead.source || "",
        status: lead.status || "new",
        scoring: lead.scoring || 0
    })

    const handleChange = (field: string, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            await updateLead(lead.id, formData)
            toast.success("Lead actualizado exitosamente")
            router.push("/leads")
            router.refresh()
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Error al actualizar el lead")
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async () => {
        if (!confirm("¿Estás seguro de que deseas eliminar este lead? Esta acción no se puede deshacer.")) {
            return
        }

        setDeleting(true)
        try {
            await deleteLead(lead.id)
            toast.success("Lead eliminado")
            router.push("/leads")
            router.refresh()
        } catch (error: any) {
            toast.error(error.message || "Error al eliminar")
        } finally {
            setDeleting(false)
        }
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 border border-gray-100 bg-white" onClick={() => router.back()}>
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <div>
                        <h2 className="text-2xl font-black text-gray-800 tracking-tight">Editar Lead</h2>
                        <p className="text-gray-500 text-sm font-medium">Gestionar información del contacto</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        className="h-11 rounded-xl font-bold px-4 text-red-600 border-red-200 hover:bg-red-50"
                        onClick={handleDelete}
                        disabled={deleting}
                    >
                        {deleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className="h-11 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 px-6"
                        disabled={loading}
                    >
                        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Save className="h-4 w-4 mr-2" /> Guardar</>}
                    </Button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
                    <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-50 pb-6 px-8">
                        <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                            <User className="h-5 w-5" />
                        </div>
                        <div>
                            <CardTitle className="text-lg font-bold">Datos Personales</CardTitle>
                            <CardDescription>Información de contacto básica</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                        <div className="space-y-3">
                            <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Nombre Completo</Label>
                            <Input
                                placeholder="Ej: Juan Pérez"
                                required
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        type="email"
                                        placeholder="juan@ejemplo.com"
                                        value={formData.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                        className="pl-11 h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Teléfono</Label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        type="tel"
                                        placeholder="+54 9 11..."
                                        value={formData.phone}
                                        onChange={(e) => handleChange("phone", e.target.value)}
                                        className="pl-11 h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
                    <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-50 pb-6 px-8">
                        <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                            <Target className="h-5 w-5" />
                        </div>
                        <div>
                            <CardTitle className="text-lg font-bold">Perfil e Interés</CardTitle>
                            <CardDescription>Detalles de búsqueda y cualificación</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Tipo de Interés</Label>
                                <Select value={formData.interest_type} onValueChange={(v) => handleChange("interest_type", v)}>
                                    <SelectTrigger className="h-12 bg-gray-50 border-gray-100 rounded-xl">
                                        <SelectValue placeholder="Seleccionar interés" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.keys(INTEREST_TYPES).map((key) => (
                                            <SelectItem key={key} value={key}>
                                                {INTEREST_TYPE_LABELS[key as keyof typeof INTEREST_TYPES]}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-3">
                                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Origen / Fuente</Label>
                                <div className="relative">
                                    <Share2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                                    <Select value={formData.source} onValueChange={(v) => handleChange("source", v)}>
                                        <SelectTrigger className="pl-11 h-12 bg-gray-50 border-gray-100 rounded-xl">
                                            <SelectValue placeholder="Seleccionar origen" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.keys(LEAD_SOURCES).map((key) => (
                                                <SelectItem key={key} value={key}>
                                                    {LEAD_SOURCE_LABELS[key as keyof typeof LEAD_SOURCES]}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Estado</Label>
                                <Select value={formData.status} onValueChange={(v) => handleChange("status", v)}>
                                    <SelectTrigger className="h-12 bg-gray-50 border-gray-100 rounded-xl">
                                        <SelectValue placeholder="Estado actual" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.keys(LEAD_STATUSES).map((key) => (
                                            <SelectItem key={key} value={key}>
                                                {LEAD_STATUS_LABELS[key as keyof typeof LEAD_STATUSES]}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-3">
                                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Scoring (0-100)</Label>
                                <div className="relative">
                                    <Star className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-yellow-500" />
                                    <Input
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={formData.scoring}
                                        onChange={(e) => handleChange("scoring", Number(e.target.value))}
                                        className="pl-11 h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all font-bold text-gray-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    )
}
