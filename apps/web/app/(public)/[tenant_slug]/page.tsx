import {
    Search,
    MapPin,
    BedDouble,
    Bath,
    Maximize2,
    Filter,
    ArrowRight,
    Phone,
    Mail,
    Instagram,
    Facebook
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getPublicProperties } from "@/app/actions/public"
import Link from "next/link"
import { PublicSearchBar } from "@/components/public/public-search-bar"

export default async function TenantPublicPage({
    params,
    searchParams
}: {
    params: Promise<{ tenant_slug: string }>
    searchParams: Promise<{ search?: string; operation?: string; type?: string }>
}) {
    const { tenant_slug } = await params
    const filters = await searchParams
    const tenantName = tenant_slug.replace("-", " ").toUpperCase()

    const properties = await getPublicProperties(tenant_slug, {
        search: filters.search,
        operation: filters.operation,
        type: filters.type
    })

    return (
        <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
            {/* Header / Nav */}
            <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href={`/${tenant_slug}`} className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                            <span className="font-black text-xl">{tenantName[0]}</span>
                        </div>
                        <span className="font-black text-xl text-gray-900 tracking-tighter">{tenantName}</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#propiedades" className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors">Propiedades</a>
                        <a href="#contacto" className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors">Contacto</a>
                    </nav>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6 shadow-lg shadow-blue-500/20">
                        <a href="#contacto">Contactar Agencia</a>
                    </Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 -z-10 blur-3xl opacity-50" />
                <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <Badge variant="outline" className="bg-blue-50 border-blue-100 text-blue-600 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
                            Inmobiliaria Boutique en {tenantName}
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                            Encuentra el hogar que <span className="text-blue-600">siempre soñaste.</span>
                        </h1>
                        <p className="text-lg text-gray-500 font-medium max-w-xl mx-auto">
                            Descubre nuestra selección curada de las propiedades más exclusivas y mejor ubicadas del mercado.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <PublicSearchBar tenantSlug={tenant_slug} />
                </div>
            </section>

            {/* Property Grid */}
            <section id="propiedades" className="py-20 max-w-7xl mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                            {filters.search || filters.operation || filters.type ? "Resultados de Búsqueda" : "Propiedades Destacadas"}
                        </h2>
                        <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
                    </div>
                    <p className="text-sm font-bold text-gray-500">{properties.length} propiedades encontradas</p>
                </div>

                {properties.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-lg text-gray-500 font-medium">No se encontraron propiedades que coincidan con tu búsqueda.</p>
                        <Button asChild variant="outline" className="mt-4 rounded-xl font-bold">
                            <Link href={`/${tenant_slug}`}>Ver todas las propiedades</Link>
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {properties.map((prop: any) => {
                            const mainImage = prop.property_media?.find((m: any) => m.type === 'image')?.url || '/placeholder-property.jpg'
                            const operationLabel = prop.operation_type === 'sale' ? 'Venta' : prop.operation_type === 'rent' ? 'Alquiler' : 'Alquiler Temporal'

                            return (
                                <Link key={prop.id} href={`/${tenant_slug}/propiedades/${prop.id}`}>
                                    <Card className="border-none shadow-none group cursor-pointer">
                                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                                            <img src={mainImage} alt={prop.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <Badge className="bg-white/90 backdrop-blur-md text-gray-900 border-none font-black text-[10px] uppercase tracking-wider px-3 py-1.5 shadow-sm">
                                                    {operationLabel}
                                                </Badge>
                                            </div>
                                            <div className="absolute bottom-4 left-4">
                                                <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm">
                                                    <p className="text-lg font-black text-gray-900">
                                                        {prop.currency} {prop.price?.toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <CardContent className="p-0 space-y-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{prop.title}</h3>
                                                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mt-1">
                                                    <MapPin className="h-3.5 w-3.5 text-blue-500" /> {prop.address || 'Ubicación no especificada'}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 pt-2">
                                                {prop.bedrooms > 0 && (
                                                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
                                                        <BedDouble className="h-4 w-4 text-gray-300" /> {prop.bedrooms} Dorm.
                                                    </div>
                                                )}
                                                {prop.bathrooms > 0 && (
                                                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
                                                        <Bath className="h-4 w-4 text-gray-300" /> {prop.bathrooms} Baños
                                                    </div>
                                                )}
                                                {prop.surface_total && (
                                                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
                                                        <Maximize2 className="h-4 w-4 text-gray-300" /> {prop.surface_total} m²
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                )}
            </section>

            {/* Footer */}
            <footer id="contacto" className="bg-gray-950 text-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-16 mb-10">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                                <span className="font-black text-xl">{tenantName[0]}</span>
                            </div>
                            <span className="font-black text-2xl tracking-tighter">{tenantName}</span>
                        </div>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-sm">
                            Líderes en el mercado inmobiliario boutique, brindando un servicio personalizado y de excelencia para cada uno de nuestros clientes.
                        </p>
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-white/10 text-white">
                                <Instagram className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-white/10 text-white">
                                <Facebook className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest">Navegación</h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-medium">
                            <li><a href="#propiedades" className="hover:text-blue-500 transition-colors">Propiedades</a></li>
                            <li><a href="#contacto" className="hover:text-blue-500 transition-colors">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest">Contacto</h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-medium">
                            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-blue-500" /> +54 9 11 1234 5678</li>
                            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-blue-500" /> hola@{tenant_slug}.com</li>
                            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-blue-500" /> Av. Libertador 1200, CABA</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
                    <p>© 2026 {tenantName} - Desarrollado por InmoCMS</p>
                    <p>Todos los derechos reservados</p>
                </div>
            </footer>
        </div>
    )
}
