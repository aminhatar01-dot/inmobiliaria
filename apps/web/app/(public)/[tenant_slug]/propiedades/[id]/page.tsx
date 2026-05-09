import { getPublicPropertyById, getPublicAgentInfo } from "@/app/actions/public"
import { notFound } from "next/navigation"
import {
    MapPin,
    BedDouble,
    Bath,
    Maximize2,
    Car,
    ArrowLeft,
    Share2,
    Phone,
    Mail,
    User
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { PropertyContactForm } from "@/components/public/property-contact-form"

export default async function PublicPropertyDetailPage({
    params,
    searchParams
}: {
    params: Promise<{ tenant_slug: string; id: string }>
    searchParams: Promise<{ agente?: string }>
}) {
    const { tenant_slug, id } = await params
    const filters = await searchParams
    const agentId = filters.agente
    
    const [result, agentInfo] = await Promise.all([
        getPublicPropertyById(tenant_slug, id),
        agentId ? getPublicAgentInfo(agentId) : null
    ])

    if (!result) {
        notFound()
    }

    const { property, tenant } = result
    const tenantName = tenant_slug.replace("-", " ").toUpperCase()
    const operationLabel = property.operation_type === 'sale' ? 'Venta' : property.operation_type === 'rent' ? 'Alquiler' : 'Alquiler Temporal'
    
    const agencyData = Array.isArray(agentInfo?.tenants) ? agentInfo.tenants[0] : (agentInfo?.tenants as any)
    const agencyNameFromInfo = agencyData?.name || tenantName

    const images = property.property_media?.filter((m: any) => m.type === 'image').sort((a: any, b: any) => a.order - b.order) || []

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href={`/${tenant_slug}${agentId ? `?agente=${agentId}` : ''}`} className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                            <span className="font-black text-xl">{tenantName[0]}</span>
                        </div>
                        <span className="font-black text-xl text-gray-900 tracking-tighter">{agentInfo ? agentInfo.name : tenantName}</span>
                    </Link>
                    <Button asChild variant="outline" className="rounded-full font-bold">
                        <Link href={`/${tenant_slug}${agentId ? `?agente=${agentId}` : ''}`}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Volver a propiedades
                        </Link>
                    </Button>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 rounded-3xl overflow-hidden">
                        {images.length > 0 ? (
                            <>
                                <div className="md:col-span-2 aspect-[21/9] relative">
                                    <img src={images[0]?.url} alt={property.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-6 left-6 flex gap-2">
                                        <Badge className="bg-white/90 backdrop-blur-md text-gray-900 border-none font-black text-xs uppercase tracking-wider px-4 py-2 shadow-sm">
                                            {operationLabel}
                                        </Badge>
                                    </div>
                                </div>
                                {images.slice(1, 5).map((img: any, idx: number) => (
                                    <div key={idx} className="aspect-video relative">
                                        <img src={img.url} alt={`${property.title} - ${idx + 2}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="md:col-span-2 aspect-[21/9] bg-gray-100 flex items-center justify-center">
                                <p className="text-gray-400 font-medium">Sin imágenes disponibles</p>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Property Details */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h1 className="text-4xl font-black text-gray-900 mb-4">{property.title}</h1>
                                <div className="flex items-center gap-2 text-gray-500 font-medium mb-6">
                                    <MapPin className="h-5 w-5 text-blue-500" />
                                    {property.address || 'Ubicación no especificada'}
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-4xl font-black text-blue-600">
                                        {property.currency} {property.price?.toLocaleString()}
                                    </p>
                                    {property.operation_type !== 'sale' && (
                                        <span className="text-sm text-gray-400 font-bold">/ mes</span>
                                    )}
                                </div>
                            </div>

                            {/* Property Features */}
                            <Card className="border-gray-100 rounded-2xl">
                                <CardContent className="p-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {property.bedrooms > 0 && (
                                            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                                                <BedDouble className="h-8 w-8 text-blue-600 mb-2" />
                                                <p className="text-2xl font-black text-gray-900">{property.bedrooms}</p>
                                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Dormitorios</p>
                                            </div>
                                        )}
                                        {property.bathrooms > 0 && (
                                            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                                                <Bath className="h-8 w-8 text-blue-600 mb-2" />
                                                <p className="text-2xl font-black text-gray-900">{property.bathrooms}</p>
                                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Baños</p>
                                            </div>
                                        )}
                                        {property.surface_total && (
                                            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                                                <Maximize2 className="h-8 w-8 text-blue-600 mb-2" />
                                                <p className="text-2xl font-black text-gray-900">{property.surface_total}</p>
                                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">m² Totales</p>
                                            </div>
                                        )}
                                        {property.garages > 0 && (
                                            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
                                                <Car className="h-8 w-8 text-blue-600 mb-2" />
                                                <p className="text-2xl font-black text-gray-900">{property.garages}</p>
                                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Cocheras</p>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Description */}
                            {property.description && (
                                <div>
                                    <h2 className="text-2xl font-black text-gray-900 mb-4">Descripción</h2>
                                    <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{property.description}</p>
                                </div>
                            )}

                            {/* Amenities */}
                            {property.amenities && property.amenities.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-black text-gray-900 mb-4">Comodidades</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {property.amenities.map((amenity: string, idx: number) => (
                                            <Badge key={idx} variant="outline" className="bg-blue-50 border-blue-100 text-blue-700 px-4 py-2 font-bold rounded-xl">
                                                {amenity}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Contact Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <Card className="border-gray-100 rounded-3xl overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="bg-blue-600 p-6 text-white">
                                            <h3 className="text-2xl font-black mb-2">¿Te interesa esta propiedad?</h3>
                                            <p className="text-blue-100 text-sm font-medium">Dejanos tus datos y te contactaremos a la brevedad.</p>
                                        </div>
                                        <div className="p-6">
                                            <PropertyContactForm
                                                tenantSlug={tenant_slug}
                                                propertyId={property.id}
                                                propertyTitle={property.title}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="mt-6 p-6 bg-gray-50 rounded-2xl space-y-4">
                                    <h4 className="font-black text-gray-900">Tu Asesor</h4>
                                    <div className="flex items-center gap-3 pb-2 border-b border-gray-200 mb-2">
                                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            <User className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-gray-900">{agentInfo ? agentInfo.name : tenantName}</p>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{agencyNameFromInfo}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <a href={`tel:${agentInfo ? agentInfo.phone : '+5491112345678'}`} className="flex items-center gap-3 text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">
                                            <Phone className="h-4 w-4" />
                                            {agentInfo ? agentInfo.phone : '+54 9 11 1234 5678'}
                                        </a>
                                        <a href={`mailto:${agentInfo ? agentInfo.email : `hola@${tenant_slug}.com`}`} className="flex items-center gap-3 text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">
                                            <Mail className="h-4 w-4" />
                                            {agentInfo ? agentInfo.email : `hola@${tenant_slug}.com`}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
