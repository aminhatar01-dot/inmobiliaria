'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, ArrowLeft, Target, Users, Mail, MessageCircle, Copy, CheckCircle2, Send } from "lucide-react"
import Link from "next/link"
import { generateLeadOutreach } from "@/app/actions/ai-leads"
import { getProperties } from "@/app/actions/properties"
import { toast } from "sonner"
import type { Property } from "@inmocms/shared"
import { CampaignDispatcherModal } from "@/components/leads/campaign-dispatcher-modal"

export default function AICaptacionPage() {
    const [properties, setProperties] = useState<Property[]>([])
    const [loadingProps, setLoadingProps] = useState(true)
    
    const [propertyId, setPropertyId] = useState<string>("none")
    const [targetAudience, setTargetAudience] = useState("")
    
    const [generating, setGenerating] = useState(false)
    const [result, setResult] = useState<any>(null)
    
    const [copiedContent, setCopiedContent] = useState<string | null>(null)
    const [dispatchOpen, setDispatchOpen] = useState(false)

    useEffect(() => {
        const loadProperties = async () => {
            try {
                const props = await getProperties()
                setProperties(props)
            } catch (error) {
                console.error("Error loading properties:", error)
            } finally {
                setLoadingProps(false)
            }
        }
        loadProperties()
    }, [])

    const handleGenerate = async () => {
        if (propertyId === "none" && !targetAudience.trim()) {
            toast.error("Por favor selecciona una propiedad o describe tu público objetivo.")
            return
        }

        setGenerating(true)
        setResult(null)
        
        try {
            const data = await generateLeadOutreach({
                propertyId: propertyId !== "none" ? propertyId : undefined,
                targetAudience: targetAudience.trim() || undefined
            })
            setResult(data)
            toast.success("¡Estrategia generada con éxito!")
        } catch (error: any) {
            toast.error(error.message || "Error al generar la estrategia.")
        } finally {
            setGenerating(false)
        }
    }

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text)
        setCopiedContent(type)
        toast.success("Copiado al portapapeles")
        setTimeout(() => setCopiedContent(null), 2000)
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/leads">
                    <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl hover:bg-gray-100">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/50 border border-purple-200 text-purple-700 font-bold text-xs uppercase tracking-widest mb-2">
                        <Sparkles className="h-3.5 w-3.5" /> AI Studio
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Captación en Frío</h2>
                    <p className="text-gray-500 font-medium mt-1">Genera estrategias, emails y guiones persuasivos para atraer nuevos leads.</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
                {/* Input Form */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/40 border-none space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                            <Target className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-black text-gray-900">Define tu Objetivo</h3>
                    </div>

                    <div className="space-y-3">
                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">En base a una Propiedad (Opcional)</Label>
                        <Select value={propertyId} onValueChange={setPropertyId} disabled={loadingProps}>
                            <SelectTrigger className="h-14 rounded-2xl bg-gray-50 border-none font-bold px-5 text-gray-900">
                                <SelectValue placeholder="Seleccionar propiedad para captar inversores..." />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-none shadow-2xl">
                                <SelectItem value="none" className="rounded-xl font-medium text-gray-500">Ninguna en específico</SelectItem>
                                {properties.map(p => (
                                    <SelectItem key={p.id} value={p.id} className="rounded-xl font-bold">{p.title}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter ml-2">La IA leerá los detalles de la propiedad seleccionada.</p>
                    </div>

                    <div className="space-y-3">
                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Y / O Describe a tu Cliente Ideal</Label>
                        <Textarea 
                            placeholder="Ej: Busco familias jóvenes que quieran su primera casa en las afueras con buen crédito..."
                            className="min-h-[150px] rounded-3xl bg-gray-50 border-none font-medium text-gray-900 p-5 resize-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                            value={targetAudience}
                            onChange={(e) => setTargetAudience(e.target.value)}
                        />
                    </div>

                    <Button 
                        onClick={handleGenerate} 
                        disabled={generating || (propertyId === "none" && !targetAudience.trim())}
                        className="w-full h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black text-lg shadow-xl shadow-purple-600/20 group transition-all duration-300"
                    >
                        {generating ? (
                            <>
                                <Sparkles className="mr-3 h-5 w-5 animate-pulse" /> Generando Estrategia...
                            </>
                        ) : (
                            <>
                                <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" /> Generar con Inteligencia Artificial
                            </>
                        )}
                    </Button>
                </div>

                {/* Results Display */}
                <div>
                    {!result && !generating ? (
                        <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-4 border-dashed border-gray-100 rounded-[3rem] bg-gray-50/50">
                            <div className="h-20 w-20 rounded-full bg-white shadow-xl shadow-gray-200/50 flex items-center justify-center mb-6">
                                <Sparkles className="h-8 w-8 text-gray-300" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-2">Tu Estrategia Aparecerá Aquí</h3>
                            <p className="text-gray-400 font-medium max-w-sm text-sm">
                                Llena los datos a la izquierda y presiona el botón mágico para generar tu kit de captación en segundos.
                            </p>
                        </div>
                    ) : generating ? (
                        <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 rounded-[3rem] bg-gradient-to-br from-blue-50 to-purple-50 animate-pulse">
                            <Sparkles className="h-12 w-12 text-purple-400 animate-spin-slow mb-6" />
                            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                                Analizando Mercado...
                            </h3>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                                Diseñando perfiles y escribiendo copy persuasivo
                            </p>
                        </div>
                    ) : result ? (
                        <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700">
                            
                            {/* Buyer Persona */}
                            <div className="bg-white rounded-[2rem] p-7 shadow-xl shadow-gray-200/30 border-l-4 border-l-blue-500">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                            <Users className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-black text-gray-900">Buyer Persona (Cliente Ideal)</h3>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.buyerPersona, 'persona')} className="hover:bg-gray-100 rounded-xl text-gray-400 hover:text-gray-900">
                                        {copiedContent === 'persona' ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                    </Button>
                                </div>
                                <p className="text-gray-600 font-medium leading-relaxed bg-gray-50 p-4 rounded-2xl text-sm">
                                    {result.buyerPersona}
                                </p>
                            </div>

                            {/* Hooks */}
                            <div className="bg-white rounded-[2rem] p-7 shadow-xl shadow-gray-200/30 border-l-4 border-l-purple-500">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                                        <Sparkles className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-black text-gray-900">Ganchos para Redes Sociales</h3>
                                </div>
                                <div className="space-y-3">
                                    {result.hooks?.map((hook: string, index: number) => (
                                        <div key={index} className="flex gap-3 items-start group">
                                            <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center shrink-0 mt-1">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700 font-bold text-sm bg-gray-50 p-4 rounded-2xl flex-1 group-hover:bg-purple-50 transition-colors">
                                                {hook}
                                            </p>
                                            <Button variant="ghost" size="icon" onClick={() => copyToClipboard(hook, `hook-${index}`)} className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-200 rounded-xl">
                                                {copiedContent === `hook-${index}` ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-white rounded-[2rem] p-7 shadow-xl shadow-gray-200/30 border-l-4 border-l-orange-500">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-black text-gray-900">Plantilla de Email (Cold Outreach)</h3>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.emailTemplate, 'email')} className="hover:bg-gray-100 rounded-xl text-gray-400 hover:text-gray-900">
                                        {copiedContent === 'email' ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                    </Button>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-3xl whitespace-pre-wrap text-sm text-gray-700 font-medium leading-relaxed font-mono">
                                    {result.emailTemplate}
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="bg-white rounded-[2rem] p-7 shadow-xl shadow-gray-200/30 border-l-4 border-l-green-500">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                                            <MessageCircle className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-black text-gray-900">Script Rápido para WhatsApp</h3>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.whatsappScript, 'whatsapp')} className="hover:bg-gray-100 rounded-xl text-gray-400 hover:text-gray-900">
                                        {copiedContent === 'whatsapp' ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                    </Button>
                                </div>
                                <div className="bg-[#E7F3ED] border border-[#d1e9db] p-5 rounded-3xl rounded-tl-sm whitespace-pre-wrap text-sm text-[#0c2f21] font-bold leading-relaxed relative ml-4">
                                    {/* Tail of the message bubble */}
                                    <div className="absolute top-0 -left-3 w-4 h-4 bg-[#E7F3ED] border-l border-t border-[#d1e9db]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                                    {result.whatsappScript}
                                </div>
                            </div>

                            {/* === DISPATCH BUTTON === */}
                            <div className="pt-4">
                                <Button
                                    onClick={() => setDispatchOpen(true)}
                                    className="w-full h-16 rounded-2xl bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-black text-lg shadow-xl shadow-green-600/25 group transition-all duration-300"
                                >
                                    <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    🚀 Preparar Envío Masivo
                                </Button>
                                <p className="text-xs text-center text-gray-400 font-medium mt-2">Selecciona y envía esta campaña a tus leads — o importa una nueva base.</p>
                            </div>

                        </div>
                    ) : null}
                </div>
            </div>

            {/* Campaign Dispatcher Modal */}
            {result && (
                <CampaignDispatcherModal
                    open={dispatchOpen}
                    onOpenChange={setDispatchOpen}
                    emailTemplate={result.emailTemplate || ""}
                    whatsappScript={result.whatsappScript || ""}
                />
            )}
        </div>
    )
}
