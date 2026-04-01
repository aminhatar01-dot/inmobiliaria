import { getLeadById, getLeads } from "@/app/actions/leads"
import { getProperties } from "@/app/actions/properties"
import { getDocumentsByLeadId } from "../../../actions/contracts"
import { notFound } from "next/navigation"
import {
    ChevronLeft, Mail, Phone, Calendar, Star,
    MessageCircle, FileText, User as UserIcon,
    Briefcase, IdCard, Info, Home
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { DocumentImporter } from "../../documentos/document-importer"
import { DownloadButton } from "../../documentos/download-button"

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const lead = await getLeadById(id)

    if (!lead) {
        notFound()
    }

    const [documents, allProperties, allLeads] = await Promise.all([
        getDocumentsByLeadId(id),
        getProperties(),
        getLeads()
    ])

    return (
        <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 border border-gray-100 bg-white" asChild>
                        <Link href="/leads">
                            <ChevronLeft className="h-6 w-6" />
                        </Link>
                    </Button>
                    <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16 border-2 border-white shadow-xl">
                            <AvatarFallback className="bg-blue-600 text-white text-xl font-black">
                                {lead.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-4xl font-black text-gray-800 tracking-tighter">{lead.name}</h2>
                            <div className="flex items-center gap-2 mt-1">
                                <Badge className="bg-blue-50 text-blue-600 border-none font-black text-[10px] uppercase tracking-wider">
                                    {lead.source || 'Lead Directo'}
                                </Badge>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                    Desde el {new Date(lead.created_at).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <DocumentImporter properties={allProperties} leads={allLeads} defaultLeadId={lead.id} />
                    <Button className="rounded-2xl h-14 px-8 bg-green-600 hover:bg-green-700 font-black shadow-lg shadow-green-100" asChild>
                        <a href={`https://wa.me/${lead.phone?.replace(/\D/g, '')}`} target="_blank">
                            <MessageCircle className="h-5 w-5 mr-2" /> WhatsApp
                        </a>
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-1 space-y-8">
                    {/* Contact Info Card */}
                    <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
                        <CardHeader className="border-b border-gray-50 px-8 py-6">
                            <CardTitle className="text-xl font-black tracking-tight">Información de Contacto</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 group hover:bg-blue-50 transition-colors">
                                    <div className="h-10 w-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-blue-600">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email</p>
                                        <p className="text-sm font-bold text-gray-700">{lead.email || "No registrado"}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 group hover:bg-green-50 transition-colors">
                                    <div className="h-10 w-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-green-600">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Teléfono</p>
                                        <p className="text-sm font-bold text-gray-700">{lead.phone || "No registrado"}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 group hover:bg-purple-50 transition-colors">
                                    <div className="h-10 w-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-purple-600">
                                        <IdCard className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">DNI / Identificación</p>
                                        <p className="text-sm font-bold text-gray-700">{(lead as any).dni || "No especificado"}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Scoring de Interés</p>
                                    <span className="text-lg font-black text-blue-600">{lead.scoring}%</span>
                                </div>
                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-600 rounded-full shadow-lg"
                                        style={{ width: `${lead.scoring}%` }}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Preferences Card */}
                    <Card className="border-none shadow-sm rounded-[2.5rem] bg-blue-600 text-white p-8 space-y-6">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest">Busca</p>
                            <h3 className="text-3xl font-black">
                                {lead.interest_type === 'buy' ? 'Comprar' : lead.interest_type === 'rent' ? 'Alquilar' : 'Consultar'}
                            </h3>
                        </div>
                        <div className="pt-6 border-t border-blue-500/50 grid grid-cols-1 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
                                    <Briefcase className="h-4 w-4" />
                                </div>
                                <span className="font-bold text-sm">Inmueble: Departamento/Casa</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
                                    <Calendar className="h-4 w-4" />
                                </div>
                                <span className="font-bold text-sm">Timeline: 1 a 3 meses</span>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-2 space-y-10">
                    {/* Documents Section */}
                    <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
                        <CardHeader className="border-b border-gray-50 px-10 py-8 flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl font-black tracking-tight">Documentación del Cliente</CardTitle>
                                <p className="text-sm font-medium text-gray-400 mt-1 uppercase tracking-widest">Contratos, recibos de sueldo, DNI y otros archivos vinculados.</p>
                            </div>
                            <FileText className="h-8 w-8 text-blue-100" />
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
                                                            {doc.type === 'lead_doc' ? 'Documentación Personal' :
                                                                doc.type === 'contract' ? 'Contrato Legal' : 'Documento'}
                                                        </Badge>
                                                        {doc.property && (
                                                            <div className="flex items-center text-[10px] text-gray-400 font-bold uppercase">
                                                                <Home className="h-3 w-3 mr-1" /> {doc.property.title}
                                                            </div>
                                                        )}
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
                                <div className="text-center py-12 space-y-4">
                                    <div className="h-20 w-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-200 mx-auto border-2 border-dashed border-gray-100">
                                        <FileText className="h-10 w-10" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-black text-gray-400 text-sm uppercase tracking-widest">No hay documentos cargados</p>
                                        <p className="text-xs text-gray-400 font-medium">Usa el sistema de importación para adjuntar archivos a este cliente.</p>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Timeline / Notes Placeholder */}
                    <Card className="border-none shadow-sm rounded-[2.5rem] bg-gray-50/50 p-10 border border-dashed border-gray-200">
                        <div className="flex flex-col items-center justify-center text-center space-y-4">
                            <Info className="h-10 w-10 text-gray-300" />
                            <div className="space-y-1">
                                <p className="font-black text-gray-500 uppercase tracking-widest">Próximamente: Historial de Actividad</p>
                                <p className="text-sm text-gray-400 font-medium max-w-sm">Podrás ver llamadas, reuniones y correos electrónicos enviados a este cliente en una línea de tiempo interactiva.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
