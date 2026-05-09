"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createPublicLead } from "@/app/actions/public"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export function PropertyContactForm({
    tenantSlug,
    propertyId,
    propertyTitle
}: {
    tenantSlug: string
    propertyId: string
    propertyTitle: string
}) {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState(`Hola, estoy interesado en la propiedad "${propertyTitle}". Me gustaría recibir más información.`)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!name || !email || !phone) {
            toast.error("Por favor completa todos los campos")
            return
        }

        const urlParams = new URLSearchParams(window.location.search)
        const agentId = urlParams.get("agente")

        setLoading(true)
        try {
            await createPublicLead({
                name,
                email,
                phone,
                message,
                propertyId,
                tenantSlug,
                agentId: agentId || undefined
            })
            toast.success("¡Mensaje enviado! Te contactaremos pronto.")
            setName("")
            setEmail("")
            setPhone("")
            setMessage("")
        } catch (error: any) {
            toast.error(error.message || "Error al enviar el mensaje")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="name" className="text-sm font-bold text-gray-700">Nombre completo</Label>
                <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Juan Pérez"
                    className="mt-1 rounded-xl"
                    required
                />
            </div>
            <div>
                <Label htmlFor="email" className="text-sm font-bold text-gray-700">Email</Label>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="juan@ejemplo.com"
                    className="mt-1 rounded-xl"
                    required
                />
            </div>
            <div>
                <Label htmlFor="phone" className="text-sm font-bold text-gray-700">Teléfono</Label>
                <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+54 9 11 1234 5678"
                    className="mt-1 rounded-xl"
                    required
                />
            </div>
            <div>
                <Label htmlFor="message" className="text-sm font-bold text-gray-700">Mensaje</Label>
                <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu consulta aquí..."
                    className="mt-1 rounded-xl resize-none"
                    rows={4}
                />
            </div>
            <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl h-12"
            >
                {loading ? (
                    <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Enviando...
                    </>
                ) : (
                    "Enviar Consulta"
                )}
            </Button>
        </form>
    )
}
