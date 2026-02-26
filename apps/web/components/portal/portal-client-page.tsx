"use client"

import { useState, useMemo } from "react"
import { Search, MapPin, Home, Bed, Bath, Maximize, ArrowRight, Building2, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface PortalClientPageProps {
    properties: any[]
}

export function PortalClientPage({ properties }: PortalClientPageProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [operationType, setOperationType] = useState<string | null>(null)

    const filteredProperties = useMemo(() => {
        return properties.filter(p => {
            const searchLower = searchTerm.toLowerCase()
            const matchesSearch =
                p.title?.toLowerCase().includes(searchLower) ||
                p.address?.toLowerCase().includes(searchLower) ||
                p.neighborhood?.toLowerCase().includes(searchLower)

            const matchesOperation = !operationType || p.operation_type === operationType

            return matchesSearch && matchesOperation
        })
    }, [properties, searchTerm, operationType])

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Public Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                            <Sparkles className="h-4 w-4" />
                        </div>
                        <span className="text-xl font-black text-gray-900 tracking-tighter">InmoPortal</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Button variant="ghost" className="font-bold text-gray-500 hover:text-blue-600" onClick={() => setOperationType('sale')}>Venta</Button>
                        <Button variant="ghost" className="font-bold text-gray-500 hover:text-blue-600" onClick={() => setOperationType('rent')}>Alquiler</Button>
                        <Button variant="ghost" className="font-bold text-gray-500 hover:text-blue-600" onClick={() => setOperationType(null)}>Todas</Button>
                        <div className="h-4 w-px bg-gray-200 mx-2" />
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6" asChild>
                            <Link href="/login">Publicar Propiedad</Link>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Search */}
            <section className="bg-blue-600 py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-indigo-800" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />

                <div className="max-w-4xl mx-auto relative text-center space-y-8">
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                        Encuentra el lugar donde <br /> quieres <span className="text-blue-200 underline decoration-blue-300/30">vivir.</span>
                    </h1>

                    <div className="bg-white p-2 md:p-3 rounded-[2rem] shadow-2xl flex flex-col md:flex-row gap-2">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                                placeholder="Ciudad, barrio o calle..."
                                className="pl-12 h-14 border-none text-lg focus-visible:ring-0 bg-transparent rounded-2xl"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button className="h-14 md:px-10 rounded-[1.5rem] bg-blue-600 hover:bg-blue-700 font-black text-lg">
                            Buscar Ahora
                        </Button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                            {operationType === 'sale' ? 'Propiedades en Venta' :
                                operationType === 'rent' ? 'Propiedades en Alquiler' :
                                    'Todas las Propiedades'}
                        </h2>
                        <p className="text-gray-500 font-medium">Mostrando {filteredProperties.length} inmuebles de inmobiliarias asociadas</p>
                    </div>
                </div>

                {filteredProperties.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="h-10 w-10 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-700">No encontramos lo que buscas</h3>
                        <p className="text-gray-500">Prueba ajustando tus filtros o buscando en otra zona.</p>
                        <Button variant="link" className="text-blue-600 mt-4" onClick={() => { setSearchTerm(""); setOperationType(null) }}>Limpiar búsqueda</Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProperties.map((prop) => (
                            <Link
                                key={prop.id}
                                href={`/${prop.tenant?.slug || 'propiedad'}/propiedad/${prop.id}`}
                                className="group block"
                            >
                                <Card className="border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] overflow-hidden bg-white cursor-pointer translate-y-0 hover:-translate-y-2 h-full flex flex-col">
                                    <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                                        {prop.property_media?.[0]?.url ? (
                                            <img src={prop.property_media[0].url} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        ) : (
                                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
                                                <Home className="h-12 w-12" />
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <Badge className="bg-white/90 backdrop-blur-md text-blue-600 border-none font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-lg">
                                                {prop.operation_type === 'sale' ? 'Venta' : prop.operation_type === 'rent' ? 'Alquiler' : 'Temporal'}
                                            </Badge>
                                            <Badge className="bg-blue-600 text-white border-none font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-lg">
                                                {prop.property_type === 'house' ? 'Casa' : 'Departamento'}
                                            </Badge>
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="bg-gray-900/40 backdrop-blur-md p-3 rounded-2xl flex items-center gap-3 text-white">
                                                <Building2 className="h-5 w-5 text-indigo-400" />
                                                <span className="text-xs font-bold truncate">Publicado por {prop.tenant?.name || 'Inmobiliaria Premium'}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-8 space-y-6 flex-grow flex flex-col">
                                        <div className="space-y-2 flex-grow">
                                            <div className="flex items-center gap-1.5 text-blue-600">
                                                <MapPin className="h-4 w-4" />
                                                <span className="text-xs font-black uppercase tracking-widest">{prop.neighborhood || 'Ubicación'} - {prop.address?.split(',')[0]}</span>
                                            </div>
                                            <h3 className="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">{prop.title}</h3>
                                        </div>

                                        <div className="flex items-center justify-between py-4 border-y border-gray-50">
                                            <div className="flex items-center gap-1.5">
                                                <Bed className="h-4 w-4 text-gray-400" />
                                                <span className="text-sm font-bold text-gray-700">{prop.bedrooms || 0}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Bath className="h-4 w-4 text-gray-400" />
                                                <span className="text-sm font-bold text-gray-700">{prop.bathrooms || 0}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Maximize className="h-4 w-4 text-gray-400" />
                                                <span className="text-sm font-bold text-gray-700">{prop.surface_total || 0}m²</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-2">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Precio</span>
                                                <span className="text-2xl font-black text-gray-900 font-mono">
                                                    {prop.currency} {prop.price?.toLocaleString() || 'Consulte'}
                                                </span>
                                            </div>
                                            <div className="h-12 w-12 rounded-2xl bg-gray-900 group-hover:bg-blue-600 flex items-center justify-center text-white transition-colors">
                                                <ArrowRight className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 py-20 px-4 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                                <Sparkles className="h-4 w-4" />
                            </div>
                            <span className="text-xl font-black tracking-tighter">InmoPortal</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
                            Conectamos a miles de buscadores con las inmobiliarias más confiables del mercado.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Explorar</h4>
                        <div className="flex flex-col gap-2 text-gray-400 text-sm font-medium">
                            <Link href="#" className="hover:text-white">Casas en Venta</Link>
                            <Link href="#" className="hover:text-white">Departamentos en Alquiler</Link>
                            <Link href="#" className="hover:text-white">Localidades Destacadas</Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">¿Sos una inmobiliaria?</h4>
                        <p className="text-gray-400 text-sm font-medium">Publicá tus propiedades acá y llegá a más clientes.</p>
                        <Button className="w-full bg-white text-gray-900 hover:bg-gray-200 font-bold rounded-xl" asChild>
                            <Link href="/login">Acceso Agencia</Link>
                        </Button>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto border-t border-white/5 mt-20 pt-8 text-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    &copy; 2026 InmoCMS Network. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    )
}
