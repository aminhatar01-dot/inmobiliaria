import { getPropertyById } from "@/app/actions/properties"
import { Badge } from "@/components/ui/badge"
import {
    MapPin,
    BedDouble,
    Bath,
    Maximize2,
    Phone,
    Mail,
    Globe,
    CheckCircle2
} from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

interface ReportPageProps {
    params: Promise<{ id: string }>
}

export default async function PropertyReportPage({ params }: ReportPageProps) {
    const { id } = await params
    const property = await getPropertyById(id)

    if (!property) return <div>Propiedad no encontrada</div>

    return (
        <div className="min-h-screen bg-white p-0 md:p-10 font-sans print:p-0">
            {/* Control bar - Hidden on print */}
            <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="flex flex-col">
                    <h1 className="text-sm font-black text-gray-900 uppercase tracking-widest">Vista Previa del Reporte</h1>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">Optimizado para impresión A4</p>
                </div>
                <button
                    onClick={() => window.print()}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-black px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                >
                    IMPRIMIR / GUARDAR PDF
                </button>
            </div>

            {/* Document - A4 Content */}
            <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none min-h-[297mm] p-12 border border-gray-100 print:border-none relative overflow-hidden">

                {/* Header / Brand */}
                <div className="flex justify-between items-start border-b-2 border-blue-600 pb-8 mb-10">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl">I</div>
                            <span className="text-2xl font-black tracking-tighter text-gray-900 italic">INMOCMS</span>
                        </div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Gestión Inmobiliaria Inteligente</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-black text-gray-900 uppercase">Ficha Técnica</p>
                        <p className="text-[10px] font-bold text-gray-400 mt-1">{format(new Date(), "PP", { locale: es })}</p>
                        <p className="text-[10px] font-bold text-blue-600 mt-0.5">Ref: #{id.slice(0, 8).toUpperCase()}</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 gap-10">

                    {/* Hero Section */}
                    <div>
                        <div className="h-[400px] w-full rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-inner mb-6 relative border-4 border-white shadow-xl">
                            {property.property_media?.[0] ? (
                                <img src={property.property_media[0].url} className="h-full w-full object-cover" alt={property.title} />
                            ) : (
                                <div className="h-full w-full flex items-center justify-center text-gray-300 italic font-medium">Sin imagen principal</div>
                            )}
                            <div className="absolute top-6 right-6">
                                <Badge className="bg-blue-600 text-white border-none px-6 py-2.5 rounded-2xl font-black text-sm shadow-xl shadow-blue-500/40 uppercase tracking-widest">
                                    {property.operation_type === 'sale' ? 'En Venta' : 'En Alquiler'}
                                </Badge>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">{property.title}</h2>
                            <div className="flex items-center text-gray-500 font-bold text-lg">
                                <MapPin className="h-5 w-5 mr-2 text-blue-600" /> {property.address}
                            </div>
                        </div>
                    </div>

                    {/* Highlights Bar */}
                    <div className="grid grid-cols-4 gap-4 py-8 border-y border-gray-100">
                        <div className="text-center space-y-1">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Precio</p>
                            <p className="text-2xl font-black text-blue-600">{property.currency} {property.price?.toLocaleString()}</p>
                        </div>
                        <div className="text-center space-y-1 border-l border-gray-100">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Dormitorios</p>
                            <p className="text-xl font-black text-gray-800 flex items-center justify-center gap-2">
                                <BedDouble className="h-4 w-4 text-gray-300" /> {property.bedrooms || 0}
                            </p>
                        </div>
                        <div className="text-center space-y-1 border-l border-gray-100">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Baños</p>
                            <p className="text-xl font-black text-gray-800 flex items-center justify-center gap-2">
                                <Bath className="h-4 w-4 text-gray-300" /> {property.bathrooms || 0}
                            </p>
                        </div>
                        <div className="text-center space-y-1 border-l border-gray-100">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Superficie</p>
                            <p className="text-xl font-black text-gray-800 flex items-center justify-center gap-2">
                                <Maximize2 className="h-4 w-4 text-gray-300" /> {property.surface_total || 0} m²
                            </p>
                        </div>
                    </div>

                    {/* Description & Features */}
                    <div className="grid grid-cols-3 gap-12">
                        <div className="col-span-2 space-y-10">
                            <div className="space-y-6">
                                <h3 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <div className="h-1 w-6 bg-blue-600 rounded-full" /> Descripción General
                                </h3>
                                <p className="text-gray-600 font-medium leading-[1.8] text-sm text-justify whitespace-pre-wrap">
                                    {property.description || "Sin descripción disponible para esta propiedad."}
                                </p>
                            </div>

                            {/* MAP INTEGRATION [Ciclo 16] */}
                            <div className="space-y-6">
                                <h3 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <div className="h-1 w-6 bg-blue-600 rounded-full" /> Ubicación en Mapa
                                </h3>
                                <div className="h-[250px] w-full rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 relative shadow-sm">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(property.address)}`}
                                        allowFullScreen
                                    ></iframe>
                                    {/* Overlay for aesthetic and PDF print friendliness */}
                                    <div className="absolute inset-0 pointer-events-none border-2 border-white rounded-3xl" />
                                </div>
                                <p className="text-[10px] font-bold text-gray-400 italic">Nota: La ubicación es aproximada para preservar la privacidad.</p>
                            </div>

                            <div className="pt-6 space-y-4">
                                <h3 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <div className="h-1 w-6 bg-blue-600 rounded-full" /> Características
                                </h3>
                                <div className="grid grid-cols-2 gap-y-3">
                                    {['Tipo: ' + property.property_type, 'Estado: ' + property.status, 'Entrega inmediata', 'Apto crédito'].map((feat, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-500">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> {feat}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Widget */}
                        <div className="space-y-8">
                            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Agente Comercial</h3>
                                    <div className="h-20 w-20 rounded-2xl bg-white shadow-xl mx-auto flex items-center justify-center text-blue-600 font-black text-2xl border border-gray-50">I</div>
                                    <div className="text-center">
                                        <p className="text-sm font-black text-gray-900">Equipo InmoCMS</p>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Asesor Premium</p>
                                    </div>
                                </div>
                                <div className="space-y-3 pt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                                        <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center shadow-sm"><Phone className="h-3 w-3 text-blue-600" /></div>
                                        +54 9 11 1234-5678
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                                        <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center shadow-sm"><Mail className="h-3 w-3 text-blue-600" /></div>
                                        info@inmocms.com
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                                        <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center shadow-sm"><Globe className="h-3 w-3 text-blue-600" /></div>
                                        www.inmocms.com
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-2 border-dashed border-gray-100 rounded-[2.5rem] flex items-center justify-center">
                                <div className="text-center space-y-2">
                                    <div className="h-20 w-20 bg-gray-50 rounded-2xl mx-auto flex items-center justify-center">
                                        <div className="h-10 w-10 border-2 border-gray-200 border-dashed rounded-lg" />
                                    </div>
                                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Espacio para QR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Brand */}
                <div className="absolute bottom-12 left-12 right-12 border-t border-gray-100 pt-8 flex justify-between items-center opacity-30">
                    <p className="text-[9px] font-bold text-gray-400 italic">Este reporte es confidencial y para uso exclusivo del destinatario.</p>
                    <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Generado con InmoCMS Platform</p>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        background: white;
                    }
                    .print\\:hidden {
                        display: none !important;
                    }
                    .print\\:shadow-none {
                        shadow: none !important;
                        box-shadow: none !important;
                    }
                    .print\\:p-0 {
                        padding: 0 !important;
                    }
                    .print\\:border-none {
                        border: none !important;
                    }
                }
            `}} />
        </div>
    )
}
