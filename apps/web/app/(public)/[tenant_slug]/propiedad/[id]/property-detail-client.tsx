"use client"

import { useState } from "react"
import {
    ChevronLeft,
    Share2,
    Heart,
    MapPin,
    BedDouble,
    Bath,
    Maximize2,
    Building2,
    Calendar,
    ArrowRight,
    CheckCircle2,
    MessageCircle,
    User,
    Mail,
    Phone,
    Loader2,
    Sparkles,
    Home
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { createPublicLead } from "@/app/actions/public"
import Link from "next/link"

interface PropertyDetailClientProps {
    property: any
    tenant: any
    tenantSlug: string
}

export function PropertyDetailClient({ property, tenant, tenantSlug }: PropertyDetailClientProps) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: `Hola, me interesa esta propiedad: ${property.title}`
    })

    const handleInquiry = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            await createPublicLead({
                ...formData,
                propertyId: property.id,
                tenantSlug: tenantSlug
            })
            toast.success("¡Consulta enviada! Un agente te contactará pronto.")
            setFormData({ ...formData, name: "", email: "", phone: "" })
        } catch (error: any) {
            toast.error(error.message || "Error al enviar la consulta")
        } finally {
            setLoading(false)
        }
    }

    const mainImage = property.property_media?.find((m: any) => m.order === 0)?.url || property.property_media?.[0]?.url

    return (
        <div className="min-h-screen bg-white">
            {/* Nav / Header */}
            <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href={`/${tenantSlug}`} className="h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors">
                            <ChevronLeft className="h-5 w-5" />
                        </Link>
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                <Sparkles className="h-4 w-4" />
                            </div>
                            <span className="font-black text-lg text-gray-900 tracking-tighter uppercase">{tenant.name}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="rounded-full bg-gray-50 text-gray-400">
                            <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full bg-gray-50 text-gray-400">
                            <Heart className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
                {/* Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                    <div className="md:col-span-2 md:row-span-2 relative rounded-[3rem] overflow-hidden group border border-gray-100">
                        {mainImage ? (
                            <img src={mainImage} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" alt={property.title} />
                        ) : (
                            <div className="h-full w-full bg-gray-50 flex items-center justify-center text-gray-200">
                                <Home className="h-20 w-20" />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    {property.property_media?.slice(1, 5).map((media: any, i: number) => (
                        <div key={i} className="rounded-[2rem] overflow-hidden group border border-gray-100">
                            <img src={media.url} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" alt={`Imagen ${i + 2}`} />
                        </div>
                    ))}
                    {property.property_media?.length > 5 && (
                        <div className="relative rounded-[2rem] overflow-hidden group border border-gray-100">
                            <img src={property.property_media[5].url} className="h-full w-full object-cover" alt="Mas fotos" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-black text-xl backdrop-blur-sm cursor-pointer hover:bg-black/50 transition-colors">
                                +{property.property_media.length - 5} Fotos
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-10">
                        {/* Title & Info */}
                        <div className="space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge className="bg-blue-600 text-white font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full border-none">Propiedad Verificada</Badge>
                                <Badge variant="outline" className="border-gray-100 text-gray-400 font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest">
                                    En {property.operation_type === 'sale' ? 'Venta' : property.operation_type === 'rent' ? 'Alquiler' : 'Alquiler Temporal'}
                                </Badge>
                                <Badge variant="outline" className="border-blue-100 text-blue-600 font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest capitalize">
                                    {property.property_type}
                                </Badge>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">{property.title}</h1>
                            <div className="flex items-center gap-2 text-gray-500 font-medium text-lg">
                                <MapPin className="h-5 w-5 text-blue-600" /> {property.address}, {property.neighborhood || ''}
                            </div>
                        </div>

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Dormitorios</p>
                                <div className="flex items-center gap-2 text-gray-900 font-bold">
                                    <BedDouble className="h-5 w-5 text-blue-600" /> {property.bedrooms || 0} Dorm.
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Baños</p>
                                <div className="flex items-center gap-2 text-gray-900 font-bold">
                                    <Bath className="h-5 w-5 text-blue-600" /> {property.bathrooms || 0} Baños
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sup. Total</p>
                                <div className="flex items-center gap-2 text-gray-900 font-bold">
                                    <Maximize2 className="h-5 w-5 text-blue-600" /> {property.surface_total || 0} m²
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Habitaciones</p>
                                <div className="flex items-center gap-2 text-gray-900 font-bold">
                                    <Building2 className="h-5 w-5 text-blue-600" /> {property.rooms || 0} Amb.
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-gray-900 tracking-tight">Sobre esta propiedad</h3>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed whitespace-pre-line">
                                {property.description || "Sin descripción disponible."}
                            </p>
                        </div>

                        {/* Amenities */}
                        {property.amenities && property.amenities.length > 0 && (
                            <div className="space-y-6 pt-6">
                                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Comodidades</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                                    {property.amenities.map((feature: string) => (
                                        <div key={feature} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                                            <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-8">
                        {/* Price Card */}
                        <Card className="border-none shadow-2xl shadow-blue-900/10 rounded-[2.5rem] bg-blue-600 text-white overflow-hidden p-8 space-y-4">
                            <p className="text-sm font-bold text-white/70 uppercase tracking-widest">Precio Final</p>
                            <h4 className="text-5xl font-black tracking-tighter">
                                {property.currency} {property.price?.toLocaleString() || 'Consulte'}
                            </h4>
                            <div className="pt-4 flex flex-col gap-3">
                                <Button className="h-14 bg-white text-blue-600 hover:bg-gray-50 border-none font-black text-lg rounded-2xl" asChild>
                                    <a href={`https://wa.me/?text=Hola, me interesa la propiedad: ${property.title} - ${window.location.href}`} target="_blank" rel="noopener noreferrer">
                                        Reservar Ahora
                                    </a>
                                </Button>
                                <Button variant="ghost" className="h-14 text-white hover:bg-blue-700 hover:text-white border-none font-bold rounded-2xl">
                                    Consultar Financiación
                                </Button>
                            </div>
                        </Card>

                        {/* Contact Form */}
                        <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] bg-white p-8">
                            <div className="space-y-6">
                                <div className="text-center space-y-2">
                                    <h5 className="text-xl font-black text-gray-900 tracking-tight">¿Te interesa?</h5>
                                    <p className="text-sm text-gray-400 font-medium">Envíanos un mensaje directo</p>
                                </div>

                                <form onSubmit={handleInquiry} className="space-y-4">
                                    <div className="space-y-2">
                                        <Input
                                            placeholder="Tu nombre completo"
                                            className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all font-medium"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all font-medium"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            placeholder="Teléfono"
                                            className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all font-medium"
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Textarea
                                            placeholder="Escribe tu consulta aquí..."
                                            className="min-h-[100px] bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all resize-none font-medium"
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl shadow-xl shadow-blue-500/20"
                                        disabled={loading}
                                    >
                                        {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : "Enviar Consulta"}
                                    </Button>
                                </form>

                                <div className="pt-6 border-t border-gray-50">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            <MessageCircle className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Vía Rápida</p>
                                            <p className="text-sm font-bold text-gray-800">Chatear por WhatsApp</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Agent Card */}
                        <div className="p-6 bg-gray-50 rounded-[2rem] flex items-center gap-4 border border-gray-100">
                            <div className="h-16 w-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-blue-600 shadow-sm font-black text-xl">
                                {tenant.name[0]}
                            </div>
                            <div>
                                <h6 className="font-black text-gray-900 leading-none">{tenant.name}</h6>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Inmobiliaria Premium</p>
                                <div className="flex items-center gap-3 mt-3">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-blue-600 transition-colors">
                                        <Mail className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-blue-600 transition-colors">
                                        <Phone className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
