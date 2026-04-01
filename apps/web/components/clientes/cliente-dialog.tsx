"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Lead } from "@inmocms/shared"
import { createLead, updateLead } from "@/app/actions/leads"
import { Loader2, UserPlus, Save, Mail, Phone, Tag, Building2, CircleDollarSign } from "lucide-react"
import { useRouter } from "next/navigation"

interface ClienteDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    leadToEdit?: Lead | null
}

export function ClienteDialog({ open, onOpenChange, leadToEdit }: ClienteDialogProps) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState<Partial<Lead>>({
        name: "",
        email: "",
        phone: "",
        source: "manual",
        interest_type: "buy",
        budget: 0,
        status: "new"
    })

    useEffect(() => {
        if (leadToEdit) {
            setFormData({
                name: leadToEdit.name,
                email: leadToEdit.email || "",
                phone: leadToEdit.phone || "",
                source: leadToEdit.source || "manual",
                interest_type: leadToEdit.interest_type || "buy",
                budget: leadToEdit.budget || 0,
                status: leadToEdit.status || "new"
            })
        } else {
            setFormData({
                name: "",
                email: "",
                phone: "",
                source: "manual",
                interest_type: "buy",
                budget: 0,
                status: "new"
            })
        }
    }, [leadToEdit, open])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.name) {
            toast.error("El nombre es requerido")
            return
        }

        setIsLoading(true)
        try {
            if (leadToEdit) {
                await updateLead(leadToEdit.id, formData)
                toast.success("Cliente actualizado correctamente")
            } else {
                await createLead(formData)
                toast.success("Cliente creado correctamente")
            }
            onOpenChange(false)
            router.refresh()
        } catch (error: any) {
            toast.error(`Error: ${error.message}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white rounded-[2rem] border-none shadow-2xl">
                <div className="bg-blue-600 p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <UserPlus className="h-32 w-32" />
                    </div>
                    <DialogHeader className="relative z-10 w-full text-left">
                        <DialogTitle className="text-2xl font-black text-white">
                            {leadToEdit ? "Editar Cliente" : "Nuevo Cliente"}
                        </DialogTitle>
                        <DialogDescription className="text-blue-100 font-medium">
                            {leadToEdit ? "Gestiona los datos de contacto y preferencias del cliente." : "Ingresa los detalles del nuevo contacto o prospecto."}
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                <UserPlus className="h-3 w-3" /> Nombre Completo
                            </Label>
                            <Input
                                value={formData.name || ""}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Ej. Juan Pérez"
                                className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white transition-all font-medium"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                    <Mail className="h-3 w-3" /> Email
                                </Label>
                                <Input
                                    type="email"
                                    value={formData.email || ""}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="correo@ejemplo.com"
                                    className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                    <Phone className="h-3 w-3" /> Teléfono
                                </Label>
                                <Input
                                    value={formData.phone || ""}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="+54 9 11 1234-5678"
                                    className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                    <Building2 className="h-3 w-3" /> Interés
                                </Label>
                                <Select value={formData.interest_type} onValueChange={(val) => setFormData({ ...formData, interest_type: val })}>
                                    <SelectTrigger className="h-12 rounded-xl bg-gray-50 border-transparent font-medium">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl">
                                        <SelectItem value="buy">Comprar</SelectItem>
                                        <SelectItem value="rent">Alquilar</SelectItem>
                                        <SelectItem value="sell">Vender</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                    <CircleDollarSign className="h-3 w-3" /> Presupuesto
                                </Label>
                                <Input
                                    type="number"
                                    value={formData.budget || ""}
                                    onChange={(e) => setFormData({ ...formData, budget: Number(e.target.value) })}
                                    placeholder="Ej. 150000"
                                    className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                <Tag className="h-3 w-3" /> Estado (CRM)
                            </Label>
                            <Select value={formData.status} onValueChange={(val) => setFormData({ ...formData, status: val })}>
                                <SelectTrigger className="h-12 rounded-xl bg-gray-50 border-transparent font-medium">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    <SelectItem value="new">Nuevo (Lead)</SelectItem>
                                    <SelectItem value="contacted">Contactado</SelectItem>
                                    <SelectItem value="visiting">En Visitas</SelectItem>
                                    <SelectItem value="negotiating">Negociando</SelectItem>
                                    <SelectItem value="closed">Cliente (Cerrado)</SelectItem>
                                    <SelectItem value="lost">Perdido</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-3">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => onOpenChange(false)}
                            className="rounded-xl px-6 font-bold text-gray-500 hover:text-gray-900"
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="rounded-xl px-8 h-12 bg-blue-600 hover:bg-blue-700 text-white font-black shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
                        >
                            {isLoading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : <Save className="h-5 w-5 mr-2" />}
                            {leadToEdit ? "GUARDAR CAMBIOS" : "CREAR CLIENTE"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
