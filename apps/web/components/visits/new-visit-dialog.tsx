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
                const agentChannels = ['in-app']
                if (formData.get("agent_whatsapp") === "on") agentChannels.push("whatsapp")
                if (formData.get("agent_email") === "on") agentChannels.push("email")

                const clientChannels = []
                if (formData.get("client_whatsapp") === "on") clientChannels.push("whatsapp")
                if (formData.get("client_email") === "on") clientChannels.push("email")

                const visitData = {
                    property_id: formData.get("property_id") as string,
                    lead_id: formData.get("lead_id") as string,
                    scheduled_at: new Date(formData.get("scheduled_at") as string).toISOString(),
                    notes: formData.get("notes") as string,
                    status: "scheduled" as const,
                    reminder_hours: parseInt(formData.get("reminder_hours") as string) || 2,
                    agent_reminder_channels: agentChannels,
                    client_reminder_channels: clientChannels
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
            <DialogContent className="sm:max-w-[550px] rounded-[3rem] border-none p-10 bg-white/95 backdrop-blur-xl shadow-2xl overflow-y-auto max-h-[90vh]">
                <DialogHeader className="space-y-3">
                    <DialogTitle className="text-3xl font-black tracking-tight text-gray-900">Programar Visita</DialogTitle>
                    <DialogDescription className="text-gray-500 font-medium text-base">
                        Coordina una visita a una propiedad con un lead interesado.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-8 pt-6">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="property_id" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Propiedad</Label>
                                <Select name="property_id" required>
                                    <SelectTrigger className="h-14 rounded-2xl bg-gray-50 border-transparent focus:ring-2 focus:ring-blue-500/20 font-bold text-gray-700">
                                        <div className="flex items-center gap-3">
                                            <MapPin className="h-4 w-4 text-blue-500" />
                                            <SelectValue placeholder="Propiedad" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-none shadow-xl">
                                        {properties.map(p => (
                                            <SelectItem key={p.id} value={p.id} className="rounded-xl py-3 px-4 focus:bg-blue-50">
                                                <div className="flex flex-col text-left">
                                                    <span className="font-bold text-gray-900 leading-none">{p.title}</span>
                                                    <span className="text-[9px] text-gray-400 mt-1 truncate max-w-[200px]">{p.address}</span>
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
                                            <SelectValue placeholder="Cliente" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-none shadow-xl">
                                        {leads.map(l => (
                                            <SelectItem key={l.id} value={l.id} className="rounded-xl py-3 px-4 focus:bg-blue-50">
                                                <div className="flex flex-col text-left">
                                                    <span className="font-bold text-gray-900 leading-none">{l.name}</span>
                                                    <span className="text-[9px] text-gray-400 mt-1">{l.phone || l.email || 'Sin contacto'}</span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
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

                        <div className="space-y-6 bg-gray-50/50 p-6 rounded-[2rem] border border-gray-100">
                            <div className="flex items-center justify-between">
                                <Label className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Configurar Recordatorios</Label>
                                <div className="flex items-center gap-2">
                                    <Input 
                                        id="reminder_hours" 
                                        name="reminder_hours" 
                                        type="number" 
                                        defaultValue={2} 
                                        className="w-16 h-9 bg-white rounded-xl text-center font-bold text-xs" 
                                    />
                                    <span className="text-[10px] font-bold text-gray-400">hs antes</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-3">
                                    <Label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Para el Agente</Label>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" name="agent_whatsapp" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            <span className="text-xs font-bold text-gray-600 group-hover:text-blue-600 transition-colors">WhatsApp</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" name="agent_email" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            <span className="text-xs font-bold text-gray-600 group-hover:text-blue-600 transition-colors">Email</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="h-px bg-gray-200/50 w-full" />

                                <div className="space-y-3">
                                    <Label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Para el Cliente (Lead)</Label>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" name="client_whatsapp" className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                                            <span className="text-xs font-bold text-gray-600 group-hover:text-purple-600 transition-colors">WhatsApp</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" name="client_email" className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                                            <span className="text-xs font-bold text-gray-600 group-hover:text-purple-600 transition-colors">Email</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="notes" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Notas / Requerimientos</Label>
                            <Textarea
                                id="notes"
                                name="notes"
                                placeholder="Ej: Traer llaves del balcón..."
                                className="min-h-[100px] rounded-[2rem] bg-gray-50 border-transparent focus:ring-2 focus:ring-blue-500/20 font-medium p-6 resize-none"
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
