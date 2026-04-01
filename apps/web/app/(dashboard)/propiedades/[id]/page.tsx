import { getPropertyById, getProperties } from "@/app/actions/properties"
import { getLeads } from "@/app/actions/leads"
import { getPortalConnections, getPropertyPublications } from "@/app/actions/portals"
import { getDocumentsByPropertyId } from "../../../actions/contracts"
import { DocumentImporter } from "../../documentos/document-importer"
import { DownloadButton } from "../../documentos/download-button"
import { notFound } from "next/navigation"
import {
    ChevronLeft,
    MapPin,
    BedDouble,
    Bath,
    Maximize2,
    User,
    Calendar,
    Phone,
    Mail,
    CheckCircle2,
    Clock,
    XCircle,
    Building2,
    Home,
    LandPlot,
    Briefcase,
    FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { PROPERTY_TYPE_LABELS } from "@inmocms/shared"
import { PropertyActionButtons } from "@/components/properties/property-action-buttons"

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const property = await getPropertyById(id)

    if (!property) {
        notFound()
    }

    const media = (property as any).property_media || []
    const owner = (property as any).leads // Adjusted based on DB schema naming usually

    const connections = await getPortalConnections()
    const publications = await getPropertyPublications(property.id)
    const [documents, allProperties, allLeads] = await Promise.all([
        getDocumentsByPropertyId(property.id),
        getProperties(),
        getLeads()
    ])

    return (
        <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 border border-gray-100 bg-white" asChild>
                        <Link href="/propiedades">
                            <ChevronLeft className="h-6 w-6" />
                        </Link>
                    </Button>
                    <div>
                        <h2 className="text-4xl font-black text-gray-800 tracking-tighter shadow-sm">{property.title}</h2>
                        <div className="flex items-center text-gray-400 font-bold mt-1">
                            <MapPin className="h-4 w-4 mr-1 text-blue-500" /> {property.address}
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <DocumentImporter properties={allProperties} leads={allLeads} defaultPropertyId={property.id} />
                    <PropertyActionButtons
                        propertyId={property.id}
                        propertyName={property.title}
                        connections={connections}
                        existingPublications={publications}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-10">
                    {/* Gallery */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {media.length > 0 ? (
                            media.map((item: any, idx: number) => (
                                <div key={item.id} className={`rounded-3xl overflow-hidden border border-gray-100 shadow-sm ${idx === 0 ? 'col-span-2 row-span-2' : 'aspect-square'}`}>
                                    <img src={item.url} alt={`Photo ${idx + 1}`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full h-64 bg-gray-50 rounded-3xl flex flex-col items-center justify-center text-gray-300 border-2 border-dashed border-gray-100">
                                <Building2 className="h-12 w-12 mb-2" />
                                <p className="font-bold">Sin imágenes disponibles</p>
                            </div>
                        )}
                    </div>

                    {/* Basic Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <Card className="border-none shadow-sm rounded-3xl bg-white p-6">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Superficie</p>
                                <div className="flex items-center gap-2">
                                    <Maximize2 className="h-5 w-5 text-blue-500" />
                                    <span className="text-xl font-black text-gray-800">{property.surface_total}m²</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="border-none shadow-sm rounded-3xl bg-white p-6">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Ambientes</p>
                                <div className="flex items-center gap-2">
                                    <Home className="h-5 w-5 text-purple-500" />
                                    <span className="text-xl font-black text-gray-800">{property.rooms} Amb.</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="border-none shadow-sm rounded-3xl bg-white p-6">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Dormitorios</p>
                                <div className="flex items-center gap-2">
                                    <BedDouble className="h-5 w-5 text-orange-500" />
                                    <span className="text-xl font-black text-gray-800">{property.bedrooms} Dorm.</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="border-none shadow-sm rounded-3xl bg-white p-6">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Baños</p>
                                <div className="flex items-center gap-2">
                                    <Bath className="h-5 w-5 text-green-500" />
                                    <span className="text-xl font-black text-gray-800">{property.bathrooms} Baños</span>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Description */}
                    <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
                        <CardHeader className="border-b border-gray-50 px-10 py-8">
                            <CardTitle className="text-2xl font-black tracking-tight">Descripción</CardTitle>
                        </CardHeader>
                        <CardContent className="p-10">
                            <p className="text-gray-600 leading-[1.8] whitespace-pre-wrap font-medium text-lg">
                                {property.description || "Sin descripción proporcionada."}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Documents Section */}
                    <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
                        <CardHeader className="border-b border-gray-50 px-10 py-8 flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl font-black tracking-tight">Documentación de la Propiedad</CardTitle>
                                <p className="text-sm font-medium text-gray-400 mt-1 uppercase tracking-widest">Escrituras, planos, contratos y otros archivos legales.</p>
                            </div>
                            <Briefcase className="h-8 w-8 text-blue-100" />
                        </CardHeader>
                        <CardContent className="p-10 space-y-4">
                            {documents.length > 0 ? (
                                <div className="grid gap-4">
                                    {documents.map((doc) => (
                                        <div key={doc.id} className="group flex items-center justify-between p-6 rounded-3xl bg-gray-50/50 hover:bg-blue-50/50 border border-transparent hover:border-blue-100 transition-all">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                                                    <FileText className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-gray-800 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{doc.title}</h4>
                                                    <div className="flex items-center gap-3 mt-1">
                                                        <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest bg-white border-blue-50 text-blue-600">
                                                            {doc.type === 'property_doc' ? 'Ficha Técnica' :
                                                                doc.type === 'contract' ? 'Contrato' : 'Documento'}
                                                        </Badge>
                                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                                                            Subido el {new Date(doc.created_at).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link href={`/documentos/${doc.id}`}>
                                                    <Button variant="ghost" size="sm" className="rounded-xl font-bold text-xs uppercase hover:bg-white">Editar</Button>
                                                </Link>
                                                <DownloadButton content={doc.content} title={doc.title} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-10 space-y-4">
                                    <div className="h-16 w-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-200 mx-auto border-2 border-dashed border-gray-100">
                                        <FileText className="h-8 w-8" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-black text-gray-400 text-sm uppercase tracking-widest">No hay documentos cargados</p>
                                        <p className="text-xs text-gray-400 font-medium">Importa el primer documento técnico o legal de esta propiedad desde el botón superior.</p>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-8">
                    {/* Pricing & Status Card */}
                    <Card className="border-none shadow-xl rounded-3xl bg-blue-600 text-white p-8 space-y-6">
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-blue-200 uppercase tracking-widest">Precio</p>
                            <h3 className="text-4xl font-black">{property.currency} {property.price?.toLocaleString()}</h3>
                        </div>

                        <div className="pt-4 border-t border-blue-500/50">
                            <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-3">Estado</p>
                            <StatusBadge status={property.status || 'available'} />
                        </div>

                        <div className="space-y-2 pt-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-bold text-blue-200">Tipo:</span>
                                <span className="font-black">{(PROPERTY_TYPE_LABELS as any)[property.property_type || 'departamento']}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-bold text-blue-200">Operación:</span>
                                <span className="font-black">{property.operation_type === 'sale' ? 'Venta' : 'Alquiler'}</span>
                            </div>
                        </div>
                    </Card>

                    {/* Owner Card */}
                    <Card className="border-none shadow-sm rounded-3xl bg-white overflow-hidden">
                        <CardHeader className="border-b border-gray-50 px-8 py-6">
                            <CardTitle className="text-lg font-bold flex items-center gap-2">
                                <User className="h-5 w-5 text-gray-400" /> Propietario
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            {owner ? (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
                                            {owner.first_name?.[0]}{owner.last_name?.[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-800">{owner.first_name} {owner.last_name}</h4>
                                            <Badge variant="outline" className="text-[10px] uppercase font-bold text-gray-400 border-gray-100">Lead / Propietario</Badge>
                                        </div>
                                    </div>
                                    <div className="space-y-2 pt-2 text-sm text-gray-500 font-medium">
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-gray-300" /> {owner.phone || "Sin teléfono"}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-gray-300" /> {owner.email || "Sin email"}
                                        </div>
                                    </div>
                                    <Button className="w-full h-11 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold border-none pt-4" variant="outline" asChild>
                                        <Link href={`/leads/${owner.id}`}>Ver Perfil Completo</Link>
                                    </Button>
                                </div>
                            ) : (
                                <div className="text-center py-4 space-y-3">
                                    <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 mx-auto">
                                        <User className="h-6 w-6" />
                                    </div>
                                    <p className="text-sm text-gray-400 font-medium">Sin propietario asignado</p>
                                    <Button variant="outline" size="sm" className="rounded-lg font-bold" asChild>
                                        <Link href={`/propiedades/${property.id}/editar`}>Asignar ahora</Link>
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

function StatusBadge({ status }: { status: string }) {
    switch (status) {
        case 'available':
            return (
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl border border-white/30 truncate">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    <span className="text-sm font-black uppercase tracking-wider">Disponible</span>
                </div>
            )
        case 'reserved':
            return (
                <div className="flex items-center gap-2 bg-orange-400 px-4 py-2 rounded-xl border border-orange-300 truncate">
                    <Clock className="h-4 w-4 text-white" />
                    <span className="text-sm font-black uppercase tracking-wider">Reservada</span>
                </div>
            )
        case 'sold':
            return (
                <div className="flex items-center gap-2 bg-red-400 px-4 py-2 rounded-xl border border-red-300 truncate">
                    <XCircle className="h-4 w-4 text-white" />
                    <span className="text-sm font-black uppercase tracking-wider">Vendida / Alquilada</span>
                </div>
            )
        default:
            return (
                <Badge className="bg-white/20 text-white border-white/30 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl">
                    {status}
                </Badge>
            )
    }
}
