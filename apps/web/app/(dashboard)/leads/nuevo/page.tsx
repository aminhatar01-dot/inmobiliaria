"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { createLead } from "@/app/actions/leads"
import {
    INTEREST_TYPES,
    INTEREST_TYPE_LABELS,
    LEAD_SOURCES,
    LEAD_SOURCE_LABELS,
    Lead
} from "@inmocms/shared"
import { Loader2, ArrowLeft, User, Mail, Phone, Target, Share2 } from "lucide-react"
import Link from "next/link"

export default function NewLeadPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        const formData = new FormData(event.currentTarget)
        const leadData: Partial<Lead> = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            interest_type: formData.get("interest_type") as string,
            source: formData.get("source") as string,
        }

        try {
            await createLead(leadData)
            toast.success("Lead creado", {
                description: "El lead se ha guardado correctamente.",
            })
            router.push("/leads")
            router.refresh()
        } catch (error) {
            toast.error("Error", {
                description: "No se pudo crear el lead. Intenta nuevamente.",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500 pb-10">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                    <Link href="/leads">
                        <ArrowLeft className="h-5 w-5 text-gray-500" />
                    </Link>
                </Button>
                <div>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Nuevo Lead</h2>
                    <p className="text-gray-500 text-sm font-medium">Registra un nuevo contacto potencial</p>
                </div>
            </div>

            <Card className="border-none shadow-xl shadow-gray-200/50 rounded-3xl overflow-hidden bg-white">
                <CardHeader className="bg-gray-50/50 border-b border-gray-100 p-8">
                    <CardTitle className="text-lg font-bold text-gray-800">Información del Lead</CardTitle>
                    <CardDescription className="text-gray-500 font-medium">Completa los detalles básicos del contacto.</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="grid gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                                    <User className="h-3.5 w-3.5" /> Nombre Completo
                                </Label>
                                <Input id="name" name="name" required placeholder="Ej: Juan Pérez" className="h-11 rounded-xl bg-gray-50 border-gray-100 focus:bg-white transition-all" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                                        <Mail className="h-3.5 w-3.5" /> Email
                                    </Label>
                                    <Input id="email" name="email" type="email" placeholder="juan@ejemplo.com" className="h-11 rounded-xl bg-gray-50 border-gray-100 focus:bg-white transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                                        <Phone className="h-3.5 w-3.5" /> Teléfono
                                    </Label>
                                    <Input id="phone" name="phone" type="tel" placeholder="+54 9 11..." className="h-11 rounded-xl bg-gray-50 border-gray-100 focus:bg-white transition-all" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="interest_type" className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                                        <Target className="h-3.5 w-3.5" /> Interés
                                    </Label>
                                    <Select name="interest_type" required>
                                        <SelectTrigger className="h-11 rounded-xl bg-gray-50 border-gray-100 focus:bg-white transition-all">
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
                                <div className="space-y-2">
                                    <Label htmlFor="source" className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                                        <Share2 className="h-3.5 w-3.5" /> Origen
                                    </Label>
                                    <Select name="source" defaultValue="walk_in">
                                        <SelectTrigger className="h-11 rounded-xl bg-gray-50 border-gray-100 focus:bg-white transition-all">
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

                        <div className="pt-4 flex justify-end gap-4">
                            <Button variant="ghost" type="button" asChild className="rounded-xl font-bold text-gray-500">
                                <Link href="/leads">Cancelar</Link>
                            </Button>
                            <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-8 shadow-lg shadow-blue-500/20">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando...
                                    </>
                                ) : (
                                    "Crear Lead"
                                )}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
