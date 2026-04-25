
"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, MessageCircle, Send, CheckCircle2, UserPlus, Users, ExternalLink, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { getLeads } from "@/app/actions/leads"
import { dispatchCampaign } from "@/app/actions/campaigns"
import { LeadBulkImporter } from "./lead-bulk-importer"
import type { Lead } from "@inmocms/shared"

interface CampaignDispatcherModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    emailTemplate: string;
    whatsappScript: string;
}

export function CampaignDispatcherModal({
    open,
    onOpenChange,
    emailTemplate,
    whatsappScript
}: CampaignDispatcherModalProps) {
    const [leads, setLeads] = useState<Lead[]>([])
    const [loadingLeads, setLoadingLeads] = useState(false)
    const [selectedLeads, setSelectedLeads] = useState<string[]>([])
    
    const [channel, setChannel] = useState<"whatsapp" | "email">("whatsapp")
    const [isDispatching, setIsDispatching] = useState(false)
    const [showImporter, setShowImporter] = useState(false)

    // Sequential Dispatch State
    const [sequentialData, setSequentialData] = useState<any>(null)
    const [sentIds, setSentIds] = useState<string[]>([])

    useEffect(() => {
        if (open && !showImporter && !sequentialData) {
            loadLeads()
        }
    }, [open, showImporter, sequentialData])

    const loadLeads = async () => {
        setLoadingLeads(true)
        try {
            const data = await getLeads()
            setLeads(data)
        } catch (error) {
            console.error("Error loading leads:", error)
        } finally {
            setLoadingLeads(false)
        }
    }

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedLeads(leads.map(l => l.id))
        } else {
            setSelectedLeads([])
        }
    }

    const toggleLeadSelection = (id: string) => {
        setSelectedLeads(prev => 
            prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
        )
    }

    const handleDispatch = async () => {
        if (selectedLeads.length === 0) {
            toast.error("Selecciona al menos un lead para enviar la campaña.")
            return
        }

        const messageContent = channel === 'whatsapp' ? whatsappScript : emailTemplate

        if (!messageContent) {
            toast.error("El contenido de la campaña está vacío.")
            return
        }

        setIsDispatching(true)
        try {
            const res = await dispatchCampaign(selectedLeads, messageContent, channel)
            
            if (res.mode === 'sequential') {
                setSequentialData(res)
                toast.info("Iniciando envío secuencial...")
            } else {
                toast.success(`Campaña enviada a ${res.successCount} leads exitosamente.`)
                onOpenChange(false)
            }
        } catch (error: any) {
            toast.error(error.message || "Error al enviar la campaña.")
        } finally {
            setIsDispatching(false)
        }
    }

    const triggerWhatsApp = (lead: any) => {
        const phone = lead.phone?.replace(/\D/g, '')
        if (!phone) {
            toast.error("El lead no tiene un número de teléfono válido.")
            return
        }
        
        const text = encodeURIComponent(lead.message)
        const url = `https://web.whatsapp.com/send?phone=${phone}&text=${text}`
        
        window.open(url, '_blank')
        
        if (!sentIds.includes(lead.id)) {
            setSentIds(prev => [...prev, lead.id])
        }
    }

    const handleClose = () => {
        if (isDispatching) return
        setSequentialData(null)
        setSentIds([])
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="max-w-3xl p-0 overflow-hidden bg-gray-50 border-none rounded-[2rem] shadow-2xl">
                
                {/* Header */}
                <div className={`p-8 text-white transition-colors duration-500 ${sequentialData ? 'bg-gradient-to-r from-green-600 to-teal-600' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-black flex items-center gap-3">
                            {sequentialData ? <MessageCircle className="h-6 w-6" /> : <Send className="h-6 w-6" />}
                            {sequentialData ? "Envíos en Progreso" : showImporter ? "Importar Nueva Base" : "Centro de Envíos Masivos (AI)"}
                        </DialogTitle>
                    </DialogHeader>
                    <p className="text-white/80 font-medium mt-2">
                        {sequentialData 
                            ? `Gestionando envío individual para ${sequentialData.leads.length} prospectos.`
                            : "Selecciona los prospectos a los que deseas enviar esta campaña y elige el canal."
                        }
                    </p>
                </div>

                <div className="p-8">
                    {sequentialData ? (
                        /* Sequential Dispatch View */
                        <div className="space-y-6 animate-in zoom-in-95 duration-300">
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col h-[400px]">
                                <div className="bg-gray-50/80 px-4 py-3 border-b border-gray-100 flex items-center justify-between sticky top-0">
                                    <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                                        Cola de Envío ({sentIds.length} de {sequentialData.leads.length})
                                    </span>
                                    <div className="flex gap-2">
                                        <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden self-center">
                                            <div 
                                                className="h-full bg-green-500 transition-all duration-500" 
                                                style={{ width: `${(sentIds.length / sequentialData.leads.length) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-y-auto flex-1 p-4 space-y-3">

                                    {sequentialData.leads.map((lead: any) => {
                                        // Client-side safeguard to ensure personalization
                                        const personalizedPreview = lead.message || "";
                                        
                                        return (
                                            <div 
                                                key={lead.id}
                                                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${sentIds.includes(lead.id) ? 'bg-gray-50 border-transparent opacity-60' : 'bg-white border-gray-100 shadow-sm'}`}
                                            >
                                                <div className="flex items-center gap-4 flex-1">
                                                    <div className={`p-2 rounded-xl shrink-0 ${sentIds.includes(lead.id) ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                                        {sentIds.includes(lead.id) ? <CheckCircle2 className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="font-bold text-gray-900 truncate">{lead.name}</p>
                                                        <p className="text-[10px] text-blue-600 font-mono line-clamp-1 italic mt-0.5">
                                                            {personalizedPreview.substring(0, 60)}...
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button
                                                    onClick={() => triggerWhatsApp(lead)}
                                                    variant={sentIds.includes(lead.id) ? "ghost" : "default"}
                                                    className={`rounded-xl font-bold ml-4 ${sentIds.includes(lead.id) ? 'text-gray-400' : 'bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lg shadow-green-500/20'}`}
                                                >
                                                    {sentIds.includes(lead.id) ? "Enviado" : <><ExternalLink className="h-4 w-4 mr-2" /> Enviar</>}
                                                </Button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <Button 
                                variant="outline" 
                                onClick={handleClose}
                                className="w-full h-12 rounded-xl border-2 font-bold text-gray-500"
                            >
                                Finalizar y Cerrar
                            </Button>
                        </div>
                    ) : showImporter ? (
                        /* Importer View */
                        <div className="space-y-6 animate-in slide-in-from-right duration-300">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-black text-gray-900 text-lg">Subir Archivo de Leads</h3>
                                <Button variant="ghost" onClick={() => setShowImporter(false)} className="text-gray-500 rounded-xl">
                                    Volver a la selección
                                </Button>
                            </div>
                            <LeadBulkImporter onImportSuccess={() => {
                                setShowImporter(false)
                            }} />
                        </div>
                    ) : (
                        /* Selection View */
                        <div className="space-y-6 animate-in slide-in-from-left duration-300">
                            
                            {/* Toolbar */}
                            <div className="flex items-center justify-between">
                                <div className="space-x-2 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 inline-flex">
                                    <Button 
                                        variant={channel === 'whatsapp' ? 'default' : 'ghost'}
                                        onClick={() => setChannel('whatsapp')}
                                        className={`rounded-xl font-bold px-6 h-10 ${channel === 'whatsapp' ? 'bg-[#25D366] hover:bg-[#1DA851] text-white shadow-md shadow-green-500/20' : 'text-gray-500 hover:text-gray-900'}`}
                                    >
                                        <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
                                    </Button>
                                    <Button 
                                        variant={channel === 'email' ? 'default' : 'ghost'}
                                        onClick={() => setChannel('email')}
                                        className={`rounded-xl font-bold px-6 h-10 ${channel === 'email' ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20' : 'text-gray-500 hover:text-gray-900'}`}
                                    >
                                        <Mail className="h-4 w-4 mr-2" /> Correo
                                    </Button>
                                </div>
                                <Button 
                                    variant="outline" 
                                    onClick={() => setShowImporter(true)}
                                    className="rounded-xl border-dashed border-2 border-gray-200 text-purple-600 font-bold hover:bg-purple-50 hover:border-purple-300 h-11"
                                >
                                    <UserPlus className="h-4 w-4 mr-2" /> Importar CSV
                                </Button>
                            </div>

                            {/* Message Preview */}
                            <div className="bg-white border text-sm border-gray-100 rounded-2xl p-4 shadow-sm max-h-[120px] overflow-y-auto font-medium text-gray-600">
                                <div className="font-bold text-gray-900 mb-1 text-xs uppercase tracking-widest flex items-center gap-2">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> Vista previa del mensaje
                                </div>
                                <div className="whitespace-pre-wrap font-mono mt-2">
                                    {channel === 'whatsapp' ? whatsappScript : emailTemplate}
                                </div>
                            </div>

                            {/* Lead Selection Table */}
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col h-[280px]">
                                <div className="bg-gray-50/80 px-4 py-3 border-b border-gray-100 flex items-center justify-between sticky top-0">
                                    <div className="flex items-center gap-3">
                                        <Checkbox 
                                            checked={leads.length > 0 && selectedLeads.length === leads.length}
                                            onCheckedChange={handleSelectAll}
                                            className="rounded border-gray-300 data-[state=checked]:bg-blue-600"
                                        />
                                        <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                                            Seleccionar Todos ({selectedLeads.length} de {leads.length})
                                        </span>
                                    </div>
                                    <Users className="h-4 w-4 text-gray-400" />
                                </div>
                                
                                <div className="overflow-y-auto flex-1 p-2">
                                    {loadingLeads ? (
                                        <div className="h-full flex items-center justify-center text-gray-400 font-medium text-sm animate-pulse">
                                            Cargando base de datos...
                                        </div>
                                    ) : leads.length === 0 ? (
                                        <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
                                            <Users className="h-8 w-8 mb-2 opacity-50" />
                                            <p className="text-sm font-medium">No tienes leads aún.</p>
                                            <p className="text-xs mt-1">Usa el botón de Importar CSV arriba.</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-1">
                                            {leads.map(lead => (
                                                <div 
                                                    key={lead.id} 
                                                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${selectedLeads.includes(lead.id) ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}
                                                    onClick={() => toggleLeadSelection(lead.id)}
                                                >
                                                    <Checkbox 
                                                        checked={selectedLeads.includes(lead.id)}
                                                        onCheckedChange={() => toggleLeadSelection(lead.id)}
                                                        className="rounded border-gray-300 data-[state=checked]:bg-blue-600 pointer-events-none"
                                                    />
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                                                            {lead.name}
                                                        </p>
                                                        <div className="flex gap-2 text-[11px] text-gray-500 font-medium">
                                                            {lead.email && <span>{lead.email}</span>}
                                                            {lead.phone && <span>• {lead.phone}</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Action Area */}
                            <Button 
                                onClick={handleDispatch}
                                disabled={isDispatching || selectedLeads.length === 0}
                                className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black text-lg shadow-xl shadow-blue-500/20"
                            >
                                {isDispatching ? (
                                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Procesando {selectedLeads.length} leads...</>
                                ) : (
                                    <><Send className="mr-2 h-5 w-5" /> Iniciar Envío ({selectedLeads.length})</>
                                )}
                            </Button>

                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
