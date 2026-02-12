import { getSharedProperties } from "@/app/actions/properties"
import { createClient, getTenantId } from "@/lib/supabase/server"
import {
    Search,
    Filter,
    MapPin,
    BedDouble,
    Bath,
    Maximize2,
    Eye,
    Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { PROPERTY_TYPE_LABELS } from "@inmocms/shared"

export default async function SharedPropertiesPage() {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    const properties = await getSharedProperties()

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-800 tracking-tight">Inmuebles Compartidos</h2>
                    <p className="text-gray-500 text-sm font-medium text-balance">Explora propiedades de otras agencias disponibles para colaboración</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <Globe className="h-5 w-5" />
                    </div>
                </div>
            </div>

            <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl">
                {/* Filters */}
                <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Buscar en red compartida..."
                            className="pl-9 h-11 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm w-full"
                        />
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <Button variant="outline" className="h-11 border-gray-100 rounded-xl font-bold">
                            <Filter className="h-4 w-4 mr-2" /> Filtros
                        </Button>
                    </div>
                </div>

                {/* Grid */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.length === 0 ? (
                        <div className="col-span-full py-20 text-center space-y-4">
                            <div className="h-16 w-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto text-gray-300">
                                <Globe className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">No hay inmuebles compartidos</h3>
                                <p className="text-sm text-gray-500">Cuando otras agencias compartan propiedades en la red, aparecerán aquí.</p>
                            </div>
                        </div>
                    ) : (
                        properties.map((prop: any) => (
                            <Card key={prop.id} className="group border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 border border-transparent hover:border-blue-50/50">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    {prop.property_media?.[0]?.url ? (
                                        <img
                                            src={prop.property_media[0].url}
                                            alt={prop.title}
                                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="h-full w-full bg-gray-100 flex items-center justify-center text-gray-300">
                                            <Globe className="h-12 w-12" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <Badge className="bg-white/90 backdrop-blur-md text-gray-900 border-none px-3 py-1 font-bold text-[10px] uppercase tracking-wider rounded-full shadow-sm">
                                            {(PROPERTY_TYPE_LABELS as any)[prop.property_type || 'departamento']}
                                        </Badge>
                                        <Badge className="bg-blue-600 text-white border-none px-3 py-1 font-bold text-[10px] uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/20">
                                            {prop.operation_type === 'sale' ? 'Venta' : 'Alquiler'}
                                        </Badge>
                                        {prop.tenant_id === tenantId && (
                                            <Badge className="bg-green-600 text-white border-none px-3 py-1 font-bold text-[10px] uppercase tracking-wider rounded-full shadow-lg shadow-green-500/20">
                                                Propio
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <Link href={`/propiedades/${prop.id}`}>
                                            <Eye className="h-5 w-5 text-blue-600" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-black text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{prop.title}</h3>
                                        <div className="flex items-center text-xs text-gray-400 font-bold">
                                            <MapPin className="h-3.5 w-3.5 mr-1 text-blue-500" /> {prop.address}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <div className="flex items-center gap-1.5 text-[11px] font-black text-gray-500 bg-gray-50/80 px-3 py-1.5 rounded-xl border border-gray-100/50">
                                            <Maximize2 className="h-3.5 w-3.5 text-blue-400" /> {prop.surface_total}m²
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[11px] font-black text-gray-500 bg-gray-50/80 px-3 py-1.5 rounded-xl border border-gray-100/50">
                                            <BedDouble className="h-3.5 w-3.5 text-purple-400" /> {prop.bedrooms}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[11px] font-black text-gray-500 bg-gray-50/80 px-3 py-1.5 rounded-xl border border-gray-100/50">
                                            <Bath className="h-3.5 w-3.5 text-orange-400" /> {prop.bathrooms}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                        <div className="text-xl font-black text-blue-600 tracking-tighter">
                                            <span className="text-xs uppercase mr-0.5">{prop.currency}</span>
                                            {prop.price?.toLocaleString()}
                                        </div>
                                        <Button variant="ghost" size="sm" className="rounded-xl font-bold text-xs h-9 bg-gray-50 hover:bg-blue-50 hover:text-blue-600" asChild>
                                            <Link href={`/propiedades/${prop.id}`}>Ver detalles</Link>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))
                    )}
                </div>
            </Card>
        </div>
    )
}
