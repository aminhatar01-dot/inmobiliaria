import { getContracts, getTemplates, deleteTemplate, uploadCustomTemplate } from "@/app/actions/contracts"
import { getProperties } from "@/app/actions/properties"
import { getLeads } from "@/app/actions/leads"
import { DocumentImporter } from "./document-importer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Plus, FileText, Download, Sparkles, Layout, History, Clock, User, Home, MoreVertical, Search, FileCheck, Trash2, Upload } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TemplateManager } from "./template-manager" // We'll create this client component
import { DownloadButton } from "./download-button"

export default async function DocumentsPage() {
    const [contracts, templates, properties, leads] = await Promise.all([
        getContracts(),
        getTemplates(),
        getProperties(),
        getLeads()
    ])

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100 font-black px-3 py-1 rounded-full text-[10px] uppercase tracking-widest">
                        Legal Tech InmoCMS
                    </Badge>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tighter">Centro de Documentos</h1>
                    <p className="text-gray-500 font-medium max-w-xl">
                        Gestiona contratos, reservas y recibos con inteligencia artificial y automatización de procesos legales.
                    </p>
                </div>
                <div className="flex gap-4">
                    <DocumentImporter properties={properties} leads={leads} />
                    <Link href="/documentos/nuevo">
                        <Button className="h-16 px-8 rounded-2xl bg-black hover:bg-gray-800 text-white font-black text-lg shadow-2xl shadow-gray-200 group">
                            <Plus className="mr-3 h-6 w-6 group-hover:rotate-90 transition-transform" />
                            Nuevo Documento
                        </Button>
                    </Link>
                </div>
            </div>

            <Tabs defaultValue="documents" className="space-y-8">
                <TabsList className="bg-gray-100/50 p-1.5 rounded-[2rem] h-auto inline-flex border border-gray-100">
                    <TabsTrigger value="documents" className="rounded-[1.5rem] px-8 py-3 font-black text-xs uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-lg transition-all focus-visible:ring-0">
                        <FileText className="h-4 w-4 mr-2" /> Documentos Generados
                    </TabsTrigger>
                    <TabsTrigger value="templates" className="rounded-[1.5rem] px-8 py-3 font-black text-xs uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-lg transition-all focus-visible:ring-0">
                        <Layout className="h-4 w-4 mr-2" /> Plantillas Legales
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="documents" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {contracts.map((contract) => (
                            <Card key={contract.id} className="group border-none shadow-xl shadow-gray-200/40 rounded-[2.5rem] bg-white overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1">
                                <CardHeader className="p-8 pb-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="h-12 w-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                                            <FileText className="h-6 w-6" />
                                        </div>
                                        <Badge className={`rounded-xl px-3 py-1 font-black text-[10px] uppercase tracking-widest
                                            ${contract.status === 'signed' ? 'bg-green-100 text-green-700' :
                                                contract.status === 'draft' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-blue-100 text-blue-700'}`}>
                                            {contract.status === 'draft' ? 'Borrador' :
                                                contract.status === 'generated' ? 'Generado' :
                                                    contract.status === 'signed' ? 'Firmado' : 'Archivado'}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {contract.title}
                                    </CardTitle>
                                    <CardDescription className="flex items-center gap-2 font-bold text-xs text-gray-400 uppercase tracking-widest mt-2">
                                        <Home className="h-3.5 w-3.5" />
                                        {contract.property?.title || "Sin Propiedad"}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-8 pt-0 space-y-6">
                                    <div className="space-y-3 pt-4 border-t border-gray-50">
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                            <User className="h-4 w-4 opacity-40" />
                                            <span className="font-bold">Cliente:</span>
                                            <span className="text-gray-900 font-black">{contract.lead?.name || "N/A"}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                            <Clock className="h-4 w-4 opacity-40" />
                                            <span className="font-bold">Creado:</span>
                                            <span className="text-gray-900 font-black uppercase tracking-tighter">
                                                {format(new Date(contract.created_at), "d MMM yyyy", { locale: es })}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Link href={`/documentos/${contract.id}`} className="flex-1">
                                            <Button variant="outline" className="w-full h-12 rounded-2xl font-black text-xs uppercase tracking-widest border-2 hover:bg-gray-50">
                                                Editar Contenido
                                            </Button>
                                        </Link>
                                        <DownloadButton content={contract.content || ''} title={contract.title || 'Documento'} />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {contracts.length === 0 && (
                            <div className="col-span-full h-[300px] flex flex-col items-center justify-center border-4 border-dashed border-gray-100 rounded-[3rem] text-center p-12">
                                <FileText className="h-12 w-12 text-gray-200 mb-4" />
                                <h3 className="text-lg font-black text-gray-900">No hay documentos aún</h3>
                                <p className="text-sm text-gray-400 font-medium max-w-xs mt-2">
                                    Comienza creando uno nuevo usando nuestras plantillas o la IA.
                                </p>
                            </div>
                        )}
                    </div>
                </TabsContent>

                <TabsContent value="templates" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {templates.map((template) => (
                            <Card key={template.id} className="group relative border-none shadow-xl shadow-gray-200/40 rounded-[2.5rem] bg-white overflow-hidden hover:-translate-y-1 transition-all duration-300">
                                <CardHeader className="p-8 pb-4">
                                    <div className="h-12 w-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                                        <Layout className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-lg font-black text-gray-900">
                                        {template.name}
                                    </CardTitle>
                                    <Badge variant="outline" className="w-fit mt-3 rounded-lg px-2 py-0.5 font-bold text-[9px] uppercase tracking-widest border-purple-200 text-purple-700 bg-purple-50/50">
                                        {template.type === 'reservation' ? 'Reserva' :
                                            template.type === 'rental' ? 'Alquiler' :
                                                template.type === 'sale' ? 'Venta' : template.type}
                                    </Badge>
                                </CardHeader>
                                <CardContent className="p-8 pt-0 mt-auto">
                                    <p className="text-xs text-gray-400 font-medium line-clamp-2 mb-6 h-8">
                                        {template.description || "Plantilla base para generación rápida de documentos legales."}
                                    </p>
                                    <div className="flex gap-2">
                                        <Link href="/documentos/nuevo" className="flex-1">
                                            <Button className="w-full h-12 rounded-2xl bg-gray-50 border-none text-gray-900 hover:bg-purple-600 hover:text-white font-black text-[10px] uppercase tracking-widest">
                                                Usar
                                            </Button>
                                        </Link>
                                        {!template.is_system && (
                                            <TemplateManager mode="delete" templateId={template.id} />
                                        )}
                                    </div>
                                </CardContent>
                                {template.is_system && (
                                    <div className="absolute top-4 right-4 h-6 w-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600" title="Plantilla del Sistema">
                                        <FileCheck className="h-3.5 w-3.5" />
                                    </div>
                                )}
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

