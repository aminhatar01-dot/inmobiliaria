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
    Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"

export default function PublicPropertyDetailPage({ params }: { params: { tenant_slug: string, id: string } }) {
    const [loading, setLoading] = useState(false)
    const tenantName = params.tenant_slug.replace("-", " ").toUpperCase()

    const handleInquiry = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            toast.success("¡Consulta enviada! Un agente te contactará pronto.")
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Nav / Header */}
            <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                            <span className="font-black text-sm">{tenantName[0]}</span>
                        </div>
                        <span className="font-black text-lg text-gray-900 tracking-tighter">{tenantName}</span>
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
                {/* Image Gallery Mock */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                    <div className="md:col-span-2 md:row-span-2 relative rounded-[3rem] overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=90" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Vista Principal" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="rounded-[2rem] overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Interior" />
                    </div>
                    <div className="rounded-[2rem] overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Cocina" />
                    </div>
                    <div className="rounded-[2rem] overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Dormitorio" />
                    </div>
                    <div className="relative rounded-[2rem] overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Baño" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-black text-xl backdrop-blur-sm cursor-pointer hover:bg-black/50 transition-colors">
                            +12 Fotos
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-10">
                        {/* Title & Info */}
                        <div className="space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge className="bg-blue-600 text-white font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full border-none">Propiedad Exclusiva</Badge>
                                <Badge variant="outline" className="border-gray-100 text-gray-400 font-bold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest">En Venta</Badge>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none">Piso Exclusivo en Recoleta</h1>
                            <div className="flex items-center gap-2 text-gray-500 font-medium text-lg">
                                <MapPin className="h-5 w-5 text-blue-600" /> Av. Alvear y Quintana, Buenos Aires
                            </div>
                        </div>

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Dormitorios</p>
                                <div className="flex items-center gap-2 text-gray-900 font-bold">
                                    <BedDouble className="h-5 w-5 text-blue-600" /> 3 amb.
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Baños</p>
                                <div className="flex items-center gap-2 text-gray-900 font-bold">
                                    <Bath className="h-5 w-5 text-blue-600" /> 2 comp.
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sup. Total</p>
                                <div className="flex items-center gap-2 text-gray-900 font-bold">
                                    <Maximize2 className="h-5 w-5 text-blue-600" /> 145 m²
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Año Const.</p>
                                <div className="flex items-center gap-2 text-gray-900 font-bold">
                                    <Calendar className="h-5 w-5 text-blue-600" /> 2018
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-gray-900 tracking-tight">Sobre esta propiedad</h3>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                Este impresionante piso, situado en el corazón de Recoleta, ofrece una combinación perfecta de lujo clásico y comodidades modernas. Con vistas despejadas a la Avenida Alvear, la propiedad cuenta con amplios ventanales que inundan los espacios de luz natural.
                                <br /><br />
                                El área social se compone de un gran living comedor con pisos de roble de Eslavonia, una cocina gourmet totalmente equipada y un balcón terraza ideal para disfrutar los mejores atardeceres de la ciudad.
                            </p>
                        </div>

                        <div className="space-y-6 pt-6">
                            <h3 className="text-2xl font-black text-gray-900 tracking-tight">Comodidades</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                                {[
                                    "Seguridad 24hs", "Aire Acondicionado", "Cochera Fija",
                                    "Gimnasio", "Piscina", "Laundry",
                                    "Balcón Terraza", "Vistas Panorámicas", "Losa Radiante"
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                                        <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            <CheckCircle2 className="h-3.5 w-3.5" />
                                        </div>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Price Card */}
                        <Card className="border-none shadow-2xl shadow-blue-900/10 rounded-[2.5rem] bg-blue-600 text-white overflow-hidden p-8 space-y-4">
                            <p className="text-sm font-bold text-white/70 uppercase tracking-widest">Precio de Venta</p>
                            <h4 className="text-5xl font-black tracking-tighter">450.000 USD</h4>
                            <div className="pt-4 flex flex-col gap-3">
                                <Button className="h-14 bg-white text-blue-600 hover:bg-gray-50 border-none font-black text-lg rounded-2xl">
                                    Reservar Ahora
                                </Button>
                                <Button className="h-14 bg-blue-700 text-white hover:bg-blue-800 border-none font-bold rounded-2xl">
                                    Hacer una oferta
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
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            placeholder="Email"
                                            className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            placeholder="Teléfono"
                                            className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Textarea
                                            placeholder="Hola, me gustaría recibir más información sobre este piso..."
                                            className="min-h-[100px] bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all resize-none font-medium"
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
                                LG
                            </div>
                            <div>
                                <h6 className="font-black text-gray-900 leading-none">Laura Gomez</h6>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Agente Asignada</p>
                                <div className="flex items-center gap-3 mt-3">
                                    <a href="#" className="h-8 w-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors">
                                        <Mail className="h-4 w-4" />
                                    </a>
                                    <a href="#" className="h-8 w-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors">
                                        <Phone className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
