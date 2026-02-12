"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { createVisit } from "@/app/actions/visits"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Plus, Loader2, Calendar as CalendarIcon, MapPin, User } from "lucide-react"
import { Property, Lead } from "@inmocms/shared"
import { toast } from "sonner"

interface Props {
    properties: Property[]
    leads: Lead[]
}

export function NewVisitDialog({ properties, leads }: Props) {
    const [open, setOpen] = useState(false)
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        startTransition(async () => {
            try {
                const visitData = {
                    property_id: formData.get("property_id") as string,
                    lead_id: formData.get("lead_id") as string,
                    scheduled_at: new Date(formData.get("scheduled_at") as string).toISOString(),
                    notes: formData.get("notes") as string,
                    status: "scheduled" as const
                }

                await createVisit(visitData)
                toast.success("Visita programada exitosamente")
                setOpen(false)
                router.refresh()
            } catch (error: any) {
                console.error("Failed to create visit", error)
                toast.error(`Error: ${error.message}`)
            }
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="h-14 bg-blue-600 hover:bg-blue-700 text-white font-black px-8 rounded-2xl shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
                    <Plus className="h-5 w-5 mr-3" /> Programar Visita
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] rounded-[3rem] border-none p-10 bg-white/95 backdrop-blur-xl shadow-2xl">
                <DialogHeader className="space-y-3">
                    <DialogTitle className="text-3xl font-black tracking-tight text-gray-900">Programar Visita</DialogTitle>
                    <DialogDescription className="text-gray-500 font-medium text-base">
                        Coordina una visita a una propiedad con un lead interesado.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-8 pt-6">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="property_id" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Propiedad</Label>
                            <Select name="property_id" required>
                                <SelectTrigger className="h-14 rounded-2xl bg-gray-50 border-transparent focus:ring-2 focus:ring-blue-500/20 font-bold text-gray-700">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="h-4 w-4 text-blue-500" />
                                        <SelectValue placeholder="Seleccionar propiedad" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="rounded-2xl border-none shadow-xl">
                                    {properties.map(p => (
                                        <SelectItem key={p.id} value={p.id} className="rounded-xl py-3 px-4 focus:bg-blue-50">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-900">{p.title}</span>
                                                <span className="text-[10px] text-gray-400 truncate max-w-[300px]">{p.address}</span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="lead_id" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Lead / Cliente</Label>
                            <Select name="lead_id" required>
                                <SelectTrigger className="h-14 rounded-2xl bg-gray-50 border-transparent focus:ring-2 focus:ring-blue-500/20 font-bold text-gray-700">
                                    <div className="flex items-center gap-3">
                                        <User className="h-4 w-4 text-purple-500" />
                                        <SelectValue placeholder="Seleccionar cliente" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="rounded-2xl border-none shadow-xl">
                                    {leads.map(l => (
                                        <SelectItem key={l.id} value={l.id} className="rounded-xl py-3 px-4 focus:bg-blue-50">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-900">{l.name}</span>
                                                <span className="text-[10px] text-gray-400">{l.email || l.phone || 'Sin contacto'}</span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="scheduled_at" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Fecha y Hora</Label>
                            <div className="relative">
                                <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    id="scheduled_at"
                                    name="scheduled_at"
                                    type="datetime-local"
                                    required
                                    className="h-14 rounded-2xl bg-gray-50 border-transparent pl-12 focus:ring-2 focus:ring-blue-500/20 font-bold text-gray-700"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="notes" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Notas / Requerimientos</Label>
                            <Textarea
                                id="notes"
                                name="notes"
                                placeholder="Ej: Traer llaves del balcón, el cliente viene con arquitecto..."
                                className="min-h-[120px] rounded-3xl bg-gray-50 border-transparent focus:ring-2 focus:ring-blue-500/20 font-medium p-6 resize-none"
                            />
                        </div>
                    </div>

                    <DialogFooter className="pt-4 gap-4 sm:justify-between">
                        <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="h-14 rounded-2xl font-black text-gray-400 hover:bg-gray-100 hover:text-gray-900 px-8 uppercase tracking-widest text-[10px]">
                            Cancelar
                        </Button>
                        <Button type="submit" disabled={isPending} className="h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black px-12 rounded-2xl shadow-xl shadow-blue-500/20 uppercase tracking-widest text-[10px]">
                            {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : "Confirmar Visita"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
