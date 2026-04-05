"use client"
import React, { useState, useEffect } from "react"
import { Sparkles, Video, Image as ImageIcon, Smartphone, ArrowRight, Check, ChevronRight, Search, Loader2, Clapperboard, PenTool, Wand2, Play, Instagram, Linkedin, Share2, Link2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { getProperties } from "@/app/actions/properties"
import { generateMarketingScript, publishToSocialMedia, getAudioLibrary, generateAVContent } from "@/app/actions/marketing-ai"
import { AIAvatarSelector } from "@/components/marketing/ai-avatar-selector"
import { toast } from "sonner"
import Image from "next/image"
import { createClient } from "@/lib/supabase/client"
import { Music, Mic, Upload, Volume2, Trash2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import dynamic from 'next/dynamic'

const AIVideoPlayer = dynamic(() => import('@/components/marketing/ai-video-player').then(mod => mod.AIVideoPlayer), { ssr: false })
import { MediaBrowser } from "@/components/marketing/media-browser"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { getSocialAccounts, connectSocialAccount, disconnectSocialAccount } from "@/app/actions/marketing-ai"

type ContentType = 'reel' | 'tiktok' | 'portal'

export default function AIStudioPage() {
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProperty, setSelectedProperty] = useState<any>(null)
  const [contentType, setContentType] = useState<ContentType>('reel')
  const [step, setStep] = useState(1) // 1: Selection, 2: Generator

  // AI Result states
  const [isGenerating, setIsGenerating] = useState(false)
  const [isEnhancing, setIsEnhancing] = useState(false)
  const [aiResult, setAiResult] = useState<any>(null)
  const [productionMetadata, setProductionMetadata] = useState<any>(null)
  const [instructions, setInstructions] = useState("")
  const [variationCount, setVariationCount] = useState(0)
  const [isMediaBrowserOpen, setIsMediaBrowserOpen] = useState(false)
  const [selectedSceneIndex, setSelectedSceneIndex] = useState<number | null>(null)
  const [isPublishing, setIsPublishing] = useState(false)
  const [showPublishDialog, setShowPublishDialog] = useState(false)
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [audioLibrary, setAudioLibrary] = useState<any[]>([])
  const [selectedMusicUrl, setSelectedMusicUrl] = useState<string>("")
  const [selectedVoiceUrl, setSelectedVoiceUrl] = useState<string>("")
  const [isRecording, setIsRecording] = useState(false)
  const [socialAccounts, setSocialAccounts] = useState<any[]>([])
  const [isConnecting, setIsConnecting] = useState<string | null>(null)
  const [selectedAvatarId, setSelectedAvatarId] = useState<string | null>(null)
  const [externalMedia, setExternalMedia] = useState<string[]>([])
  const [isSynthesizing, setIsSynthesizing] = useState(false)
  const [finalVideo, setFinalVideo] = useState<any>(null)
  const [isUploadingMedia, setIsUploadingMedia] = useState(false)
  const [isUploadingAudio, setIsUploadingAudio] = useState(false)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>, type: 'media' | 'audio') => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (type === 'media') setIsUploadingMedia(true);
    else setIsUploadingAudio(true);

    try {
      const supabase = createClient();
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
      const filePath = `properties/${fileName}`;
      
      // Reuse properties bucket for media files
      const { error: uploadError } = await supabase.storage
        .from('properties')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('properties').getPublicUrl(filePath);

      if (type === 'media') {
        setExternalMedia(prev => [data.publicUrl, ...prev]);
        toast.success("Archivo multimedia subido correctamente");
      } else {
        setSelectedVoiceUrl(data.publicUrl);
        toast.success("Audio personalizado de voz subido correctamente");
      }
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error(error.message || "Error al subir el archivo");
    } finally {
      if (type === 'media') setIsUploadingMedia(false);
      else setIsUploadingAudio(false);
    }
  };

  useEffect(() => {
    const fetchProps = async () => {
      const [propsData, audioData, accountsData] = await Promise.all([
        getProperties(),
        getAudioLibrary(),
        getSocialAccounts()
      ])
      setProperties(propsData)
      setAudioLibrary(audioData)
      setSocialAccounts(accountsData)
      setLoading(false)
    }
    fetchProps()
  }, [])

  const filteredProperties = properties.filter(p => 
    p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.address?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleGenerate = async (isRegenerate = false) => {
    if (!selectedProperty) return
    
    setIsGenerating(true)
    try {
      const nextVariation = isRegenerate ? variationCount + 1 : 0
      const result = await generateMarketingScript(
        selectedProperty.id, 
        contentType === 'portal' ? 'post' : contentType,
        instructions,
        nextVariation,
        selectedAvatarId,
        externalMedia
      )
      
      setAiResult(result.script)
      setProductionMetadata(result.productionMetadata)
      setSelectedMusicUrl(result.productionMetadata.musicAudioUrl || '')
      
      if (result.productionMetadata.voiceAudioUrl) {
        setSelectedVoiceUrl(result.productionMetadata.voiceAudioUrl)
      }
      
      if (isRegenerate) setVariationCount(nextVariation)
      setStep(2)

      if (result.warning) {
        toast.error(result.warning, { duration: 10000 });
      } else {
        toast.success(isRegenerate ? `Generada Variedad: ${result.productionMetadata.style}` : "Contenido generado con éxito");
      }

    } catch (error) {
      toast.error("Error al generar contenido")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSynthesizeVideo = async () => {
    if (!productionMetadata) return
    
    setIsSynthesizing(true)
    try {
      const result = await generateAVContent(productionMetadata)
      setFinalVideo(result)
      toast.success("¡Video generado con éxito!")
    } catch (error) {
      toast.error("Error al sintetizar el video")
    } finally {
      setIsSynthesizing(false)
    }
  }

  const handleShare = () => {
    if (finalVideo?.shareLink) {
      navigator.clipboard.writeText(finalVideo.shareLink)
      toast.success("Enlace de compartición copiado al portapapeles")
    }
  }

  const handleDownload = () => {
    if (!aiResult) return
    
    const content = {
      title: aiResult.title,
      hook: aiResult.hook,
      content: aiResult.content,
      scenes: productionMetadata?.scenes,
      hashtags: aiResult.hashtags,
      style: productionMetadata?.style
    }
    
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `plan_marketing_${selectedProperty?.title?.replace(/\s+/g, '_')}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast.success("Guion y metadatos descargados correctamente")
  }

  const handlePublish = async () => {
    if (selectedPlatforms.length === 0) {
      toast.error("Selecciona al menos una red social")
      return
    }
    
    setIsPublishing(true)
    try {
      await publishToSocialMedia(aiResult, selectedPlatforms as any)
      toast.success("¡Contenido publicado exitosamente!")
      setShowPublishDialog(false)
      setSelectedPlatforms([])
    } catch (error: any) {
      toast.error(error.message || "Error al publicar")
    } finally {
      setIsPublishing(false)
    }
  }

  const handleConnectAccount = async (platform: string) => {
    setIsConnecting(platform)
    try {
      const result = await connectSocialAccount(platform)
      if (result.success) {
        setSocialAccounts(prev => prev.map(acc => 
          acc.platform === platform ? { ...acc, connected: true, username: result.username } : acc
        ))
        toast.success(`${platform} vinculado correctamente`)
      }
    } catch (error) {
      toast.error(`Error al vincular ${platform}`)
    } finally {
      setIsConnecting(null)
    }
  }

  const handleDisconnectAccount = async (account: any) => {
    try {
      await disconnectSocialAccount(account.platform)
      setSocialAccounts(prev => prev.map(acc => 
        acc.id === account.id ? { ...acc, connected: false, username: '' } : acc
      ))
      toast.success(`${account.platform} desvinculado`)
    } catch (error) {
      toast.error("Error al desvincular")
    }
  }

  const updateScene = (index: number, updates: any) => {
    if (!productionMetadata) return
    const newScenes = [...productionMetadata.scenes]
    newScenes[index] = { ...newScenes[index], ...updates }
    setProductionMetadata({ ...productionMetadata, scenes: newScenes })
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-xl shadow-purple-500/20">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter">AI Creative Studio</h2>
          </div>
          <p className="text-gray-500 font-medium text-lg max-w-2xl">
            Crea contenido profesional para tus propiedades en segundos usando inteligencia artificial.
          </p>
        </div>
        
        {step === 2 && (
          <Button 
            variant="outline" 
            onClick={() => { setStep(1); setAiResult(null); }}
            className="rounded-2xl h-12 px-6 font-bold border-gray-200"
          >
            Volver a propiedades
          </Button>
        )}
      </div>

      {step === 1 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Property Selection */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Buscar propiedad por título o dirección..." 
                className="h-14 pl-12 rounded-2xl bg-white border-transparent shadow-xl shadow-gray-100/50 text-lg font-medium focus:ring-purple-500/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {loading ? (
                Array(4).fill(0).map((_, i) => (
                  <Card key={i} className="h-48 rounded-3xl animate-pulse bg-gray-50 border-none" />
                ))
              ) : filteredProperties.length === 0 ? (
                <div className="col-span-full py-20 text-center space-y-4">
                  <div className="h-20 w-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto">
                    <Wand2 className="h-10 w-10 text-gray-300" />
                  </div>
                  <p className="text-gray-500 font-bold">No se encontraron propiedades.</p>
                </div>
              ) : (
                filteredProperties.map((prop) => (
                  <Card 
                    key={prop.id} 
                    onClick={() => setSelectedProperty(prop)}
                    className={`group cursor-pointer border-2 transition-all duration-300 rounded-[2rem] overflow-hidden ${
                      selectedProperty?.id === prop.id 
                        ? 'border-purple-500 bg-purple-50/30 ring-4 ring-purple-500/10' 
                        : 'border-transparent bg-white hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50'
                    }`}
                  >
                    <CardContent className="p-0">
                      <div className="h-40 relative">
                        {prop.property_media?.[0]?.url ? (
                          <img 
                            src={prop.property_media[0].url} 
                            className="w-full h-full object-cover"
                            alt={prop.title}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <ImageIcon className="h-10 w-10 text-gray-300" />
                          </div>
                        )}
                        <div className="absolute top-4 right-4">
                          {selectedProperty?.id === prop.id && (
                            <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg animate-in zoom-in duration-300">
                              <Check className="h-6 w-6" />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="font-black text-gray-900 line-clamp-1">{prop.title}</h4>
                        <p className="text-xs text-gray-500 font-bold mt-1 line-clamp-1">{prop.address}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* Right: Configuration Panel */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            <Card className="border-none shadow-2xl shadow-purple-500/10 rounded-[2.5rem] bg-white overflow-hidden">
              <CardContent className="p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-black text-gray-900">Configuración</h3>
                  <p className="text-sm text-gray-500 font-medium">Define el objetivo de tu contenido.</p>
                </div>

                <div className="space-y-3">
                  <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Direcciones para la IA (Opcional)</Label>
                  <textarea 
                    placeholder="Ej: 'Hazlo más elegante', 'Enfócate en la terraza', 'Tono divertido'..."
                    className="w-full h-24 p-4 rounded-2xl bg-gray-50 border-gray-100 text-sm font-medium focus:ring-purple-500/20 focus:border-purple-200 transition-all resize-none"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                  />
                </div>

                <AIAvatarSelector selectedId={selectedAvatarId} onSelect={setSelectedAvatarId} />

                <div className="space-y-3">
                  <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Tipo de Contenido</Label>
                  <div className="grid gap-2">
                    {[
                      { id: 'reel', label: 'Instagram Reel', icon: Clapperboard, desc: 'Video dinámico 9:16' },
                      { id: 'tiktok', label: 'TikTok Video', icon: Smartphone, desc: 'Viral & POV style' },
                      { id: 'portal', label: 'Ficha Portales', icon: PenTool, desc: 'Copia vendedora y filtros' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setContentType(t.id as ContentType)}
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all text-left border-2 ${
                          contentType === t.id 
                            ? 'border-purple-600 bg-purple-50 text-purple-900 shadow-lg shadow-purple-100/50' 
                            : 'border-gray-50 bg-gray-50/50 hover:bg-gray-100 text-gray-600'
                        }`}
                      >
                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                          contentType === t.id ? 'bg-purple-600 text-white' : 'bg-white text-gray-400'
                        }`}>
                          <t.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">{t.label}</p>
                          <p className="text-[10px] opacity-70 font-medium">{t.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Button 
                    onClick={() => handleGenerate()}
                    disabled={!selectedProperty || isGenerating}
                    className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-lg shadow-xl shadow-purple-200 group overflow-hidden"
                  >
                    {isGenerating ? (
                      <Loader2 className="h-6 w-6 animate-spin" />
                    ) : (
                      <>
                        Generar con IA
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                  {!selectedProperty && (
                    <p className="text-[10px] text-center mt-3 font-bold text-amber-500 uppercase tracking-tighter">
                      Selecciona una propiedad primero
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card className="border-none bg-indigo-50/50 rounded-3xl">
              <CardContent className="p-6 flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <Wand2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-indigo-900">Tip de Experto</p>
                  <p className="text-[11px] text-indigo-700 font-medium opacity-80 mt-1">
                    Las propiedades con más de 5 fotos de alta calidad generan guiones mucho más detallados y atractivos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start animate-in slide-in-from-bottom-5 duration-700">
          {/* Left: Preview Panel */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-gray-900 flex items-center gap-2">
              Preview del Contenido
              <Badge className="bg-purple-100 text-purple-700 font-black text-[10px] rounded-lg">CALIDAD PRO</Badge>
            </h3>
            
            {(contentType === 'reel' || contentType === 'tiktok') && productionMetadata ? (
              <div className="aspect-[9/16] bg-gray-900 rounded-[3rem] overflow-hidden relative shadow-2xl border-8 border-gray-800 mx-auto max-w-[320px]">
                <AIVideoPlayer 
                  scenes={productionMetadata.scenes}
                  musicAudioUrl={selectedMusicUrl || aiResult?.musicAudioUrl}
                  voiceAudioUrl={selectedVoiceUrl}
                  title={selectedProperty?.title || "Propiedad Exclusiva"}
                  price={selectedProperty?.price ? `${selectedProperty.currency} ${selectedProperty.price.toLocaleString()}` : ""}
                  videoUrl={finalVideo?.videoUrl}
                  variation={productionMetadata.variation || 0}
                />
                
                {isSynthesizing && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-white p-8 text-center space-y-4">
                    <Loader2 className="h-10 w-10 animate-spin text-indigo-400" />
                    <div className="space-y-1">
                      <p className="font-black text-xl">Sintetizando Video...</p>
                      <p className="text-xs text-indigo-200 font-bold uppercase tracking-widest">Generando Avatar Humano</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white">
                <div className="aspect-video relative group">
                  <img 
                    src={selectedProperty?.property_media?.[0]?.url} 
                    className={`w-full h-full object-cover transition-all duration-700 ${isEnhancing ? 'brightness-110 contrast-110 saturate-110' : ''}`}
                    alt="Property" 
                  />
                  {isEnhancing && (
                    <div className="absolute inset-0 bg-blue-500/10 pointer-events-none animate-pulse" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white font-black text-2xl">{selectedProperty?.title}</p>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 border-none shadow-lg">AI ENHANCED</Badge>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge className="bg-blue-600 rounded-lg">DESTACADO</Badge>
                      <Badge variant="outline" className="rounded-lg">{selectedProperty?.operation_type}</Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="font-bold text-gray-500">Manual Edit</Button>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Right: AI Plan / Editor */}
          <div className="space-y-6">
            <Tabs defaultValue="script" className="w-full">
              <TabsList className="bg-gray-100/50 p-1 rounded-2xl mb-6 h-auto w-full grid grid-cols-3">
                <TabsTrigger value="script" className="rounded-xl py-3 font-bold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-sm transition-all focus-visible:ring-0">
                  <PenTool className="h-4 w-4 mr-2" /> Guión
                </TabsTrigger>
                <TabsTrigger value="photo" className="rounded-xl py-3 font-bold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all focus-visible:ring-0">
                  <ImageIcon className="h-4 w-4 mr-2" /> Fotos
                </TabsTrigger>
                <TabsTrigger value="audio" className="rounded-xl py-3 font-bold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm transition-all focus-visible:ring-0">
                  <Music className="h-4 w-4 mr-2" /> Audio
                </TabsTrigger>
              </TabsList>

              <TabsContent value="script" className="space-y-6 mt-0">
                <div className="space-y-4">
                  {productionMetadata?.scenes?.map((scene: any, i: number) => (
                    <Card key={i} className="border-none shadow-sm rounded-2xl overflow-hidden group hover:shadow-md transition-shadow">
                      <div className="flex">
                        <div className="w-24 bg-purple-50 flex flex-col items-center justify-center text-purple-600 font-black border-r border-purple-100 relative group/img overflow-hidden">
                          <img 
                            src={scene.imageUrl} 
                            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover/img:opacity-100 transition-opacity cursor-pointer"
                            onClick={() => { setSelectedSceneIndex(i); setIsMediaBrowserOpen(true); }}
                          />
                          <div className="relative z-10 flex flex-col items-center group-hover/img:opacity-0 transition-opacity pointer-events-none">
                            <span className="text-[10px] opacity-60">ESCENA</span>
                            <span className="text-lg">{i + 1}</span>
                          </div>
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none">
                            <ImageIcon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 p-5 space-y-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-[10px] font-bold">Duración (seg)</Badge>
                              <input 
                                type="number" 
                                className="w-16 h-8 px-2 rounded-lg bg-gray-50 border-none text-xs font-bold focus:ring-purple-500/20"
                                value={Math.round(scene.duration / 30)}
                                onChange={(e) => updateScene(i, { duration: parseInt(e.target.value) * 30 })}
                              />
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 p-0 rounded-full hover:bg-purple-100 hover:text-purple-600"
                              onClick={() => { setSelectedSceneIndex(i); setIsMediaBrowserOpen(true); }}
                            >
                              <ImageIcon className="h-4 w-4" />
                            </Button>
                          </div>
                          <textarea 
                            className="w-full p-3 rounded-xl bg-gray-50 border-none text-sm font-medium focus:ring-purple-500/20 transition-all resize-none leading-relaxed"
                            value={scene.text}
                            rows={2}
                            onChange={(e) => updateScene(i, { text: e.target.value })}
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                  <div className="pt-4">
                    <Button 
                      onClick={handleSynthesizeVideo}
                      disabled={isSynthesizing || !productionMetadata}
                      className="w-full h-16 rounded-3xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xl shadow-xl shadow-indigo-200"
                    >
                      {isSynthesizing ? <Loader2 className="h-6 w-6 animate-spin" /> : (
                        <>
                          <Video className="mr-2 h-6 w-6" />
                          Generar Video Profesional
                        </>
                      )}
                    </Button>
                  </div>
                  {aiResult?.content && (
                    <Card className="border-none shadow-sm rounded-3xl bg-white p-8">
                      <div className="prose prose-sm max-w-none">
                        <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed font-medium">
                          {aiResult.content}
                        </pre>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Hashtags Recomendados</p>
                        <p className="text-sm text-purple-600 font-bold">{aiResult.hashtags}</p>
                      </div>
                    </Card>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="photo" className="space-y-6 mt-0">
                <div className="grid grid-cols-1 gap-4">
                  <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest">IA Photo Enhancements</h4>
                  {[
                    { id: 'lighting', label: 'Realce de Iluminación', icon: Wand2, desc: 'Optimiza brilo y contraste automáticamente' },
                    { id: 'sky', label: 'Cielo Azul Realista', icon: Sparkles, desc: 'Reemplaza cielos nublados por cielos despejados' },
                    { id: 'hdr', label: 'Filtro HDR Inmobiliario', icon: ImageIcon, desc: 'Equilibra sombras y luces para fotos tipo revista' },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => {
                        setIsEnhancing(true);
                        setTimeout(() => {
                          setIsEnhancing(false);
                          toast.success(filter.label + " aplicado");
                        }, 1500);
                      }}
                      className="flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
                    >
                      <div className="flex items-center gap-4 text-left">
                        <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                          <filter.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 text-sm">{filter.label}</p>
                          <p className="text-[10px] text-gray-400 font-medium">{filter.desc}</p>
                        </div>
                      </div>
                      <div className="h-8 w-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </button>
                  ))}

                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Media Externo</h4>
                    <label className="border-2 border-dashed border-gray-100 rounded-[2.5rem] p-10 text-center space-y-4 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all cursor-pointer group flex flex-col items-center justify-center relative" >
                      <input 
                        type="file" 
                        accept="image/*,video/*" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                        onChange={(e) => handleFileUpload(e, 'media')}
                        disabled={isUploadingMedia}
                      />
                      {isUploadingMedia ? (
                        <div className="h-16 w-16 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-sm">
                          <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
                        </div>
                      ) : (
                        <div className="h-16 w-16 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform">
                          <Upload className="h-8 w-8 text-gray-400 group-hover:text-indigo-600" />
                        </div>
                      )}
                      <div>
                        <p className="text-gray-900 font-bold">{isUploadingMedia ? "Subiendo archivo..." : "Arrastra o sube tus propios videos/fotos"}</p>
                        <p className="text-xs text-gray-400 mt-1 font-medium">Soporta MP4, MOV, JPG, PNG (Max 50MB)</p>
                      </div>
                    </label>
                    {externalMedia.length > 0 && (
                      <div className="grid grid-cols-4 gap-2 mt-4">
                        {externalMedia.map((url, i) => (
                          <div key={i} className="aspect-square rounded-xl overflow-hidden relative group">
                            <img src={url} className="w-full h-full object-cover" />
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setExternalMedia(prev => prev.filter((_, idx) => idx !== i));
                              }}
                              className="absolute top-1 right-1 h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="audio" className="space-y-6 mt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest">Biblioteca de Música</h4>
                    <div className="grid gap-2">
                      {audioLibrary.map((track) => (
                        <button
                          key={track.id}
                          onClick={() => {
                            setSelectedMusicUrl(track.url);
                            toast.success(`Música cambiada: ${track.title}`);
                          }}
                          className={`flex items-center gap-4 p-4 rounded-2xl transition-all border-2 ${
                            selectedMusicUrl === track.url 
                              ? 'border-pink-500 bg-pink-50 shadow-lg shadow-pink-100/50' 
                              : 'border-gray-50 bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                            selectedMusicUrl === track.url ? 'bg-pink-500 text-white' : 'bg-white text-gray-400'
                          }`}>
                            <Music className="h-5 w-5" />
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-sm text-gray-800">{track.title}</p>
                            <p className="text-[10px] text-gray-400 font-medium">{track.artist}</p>
                          </div>
                          {selectedMusicUrl === track.url && <Check className="ml-auto h-5 w-5 text-pink-500" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Locución (Voiceover)</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        variant="outline" 
                        className={`h-24 rounded-2xl flex flex-col gap-2 border-2 ${isRecording ? 'border-red-500 bg-red-50 text-red-600' : 'border-gray-100 bg-gray-50'}`}
                        onClick={() => {
                          setIsRecording(!isRecording);
                          if (!isRecording) {
                            toast.info("Grabando voz... (Simulado)");
                          } else {
                            toast.success("Grabación finalizada y añadida al video");
                          }
                        }}
                      >
                        <Mic className={`h-6 w-6 ${isRecording ? 'animate-pulse' : ''}`} />
                        <span className="text-xs font-bold">{isRecording ? "Detener" : "Grabar Voz"}</span>
                      </Button>
                      <label 
                        className={`h-24 rounded-2xl flex flex-col items-center justify-center gap-2 border-2 border-gray-100 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors relative ${isUploadingAudio ? 'opacity-50' : ''}`}
                      >
                        <input 
                          type="file" 
                          accept="audio/*" 
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                          onChange={(e) => handleFileUpload(e, 'audio')}
                          disabled={isUploadingAudio}
                        />
                        {isUploadingAudio ? (
                          <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
                        ) : (
                          <Upload className="h-6 w-6 text-gray-600" />
                        )}
                        <span className="text-xs font-bold text-gray-600">{isUploadingAudio ? "Subiendo..." : "Subir Audio"}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="pt-6 grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="rounded-2xl h-14 font-black border-gray-200"
                onClick={() => handleGenerate(true)}
                disabled={isGenerating}
              >
                {isGenerating ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Regenerar (Variedad)
                  </>
                )}
              </Button>
              <Button 
                className="rounded-2xl h-14 font-black bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 text-white"
                onClick={() => setShowPublishDialog(true)}
              >
                Publicar en Redes
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button 
                variant="outline" 
                className="rounded-2xl h-12 font-bold border-gray-200"
                onClick={handleShare}
                disabled={!finalVideo}
              >
                <Link2 className="mr-2 h-4 w-4" />
                Compartir Link
              </Button>
              <Button 
                variant="outline" 
                className="rounded-2xl h-12 font-bold border-gray-200"
                onClick={() => {
                  if(finalVideo?.videoUrl) {
                    window.open(finalVideo.videoUrl, '_blank');
                    toast.success("Iniciando descarga...");
                  }
                }}
                disabled={!finalVideo}
              >
                <Upload className="mr-2 h-4 w-4 rotate-180" />
                Descargar MP4
              </Button>
            </div>
            <Button 
              variant="ghost" 
              className="w-full mt-2 font-bold text-gray-400"
              onClick={handleDownload}
            >
              Descargar Guión (JSON)
            </Button>
          </div>
        </div>
      )}

      <MediaBrowser 
        isOpen={isMediaBrowserOpen} 
        onClose={() => setIsMediaBrowserOpen(false)} 
        propertyId={selectedProperty?.id}
        propertyMedia={selectedProperty?.property_media || []}
        onSelectMedia={(url) => {
          if (selectedSceneIndex !== null) {
            updateScene(selectedSceneIndex, { imageUrl: url });
          }
          setIsMediaBrowserOpen(false);
        }}
        title={selectedSceneIndex !== null ? `Selecciona imagen para Escena ${selectedSceneIndex + 1}` : undefined}
      />

      <Dialog open={showPublishDialog} onOpenChange={setShowPublishDialog}>
        <DialogContent className="sm:max-w-[500px] rounded-[3rem] border-none shadow-2xl p-0 overflow-hidden bg-white">
          <DialogHeader className="p-8 pb-0">
            <DialogTitle className="text-3xl font-black text-gray-900 tracking-tighter">Publicar en Redes</DialogTitle>
            <DialogDescription className="text-gray-500 font-medium">
              Conecta tus cuentas y publica contenido directamente desde aquí.
            </DialogDescription>
          </DialogHeader>
          
          <div className="p-8 space-y-8">
            {/* Connection Manager */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Tus Cuentas Vincualdas</h4>
              <div className="grid gap-3">
                {['instagram', 'tiktok', 'linkedin'].map((platform) => {
                  const account = socialAccounts.find(a => a.platform === platform);
                  const isPlatformConnecting = isConnecting === platform;

                  return (
                    <div key={platform} className="flex items-center justify-between p-4 rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:bg-gray-100/50">
                      <div className="flex items-center gap-4">
                        <div className={`h-11 w-11 rounded-2xl flex items-center justify-center ${
                          platform === 'instagram' ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600' :
                          platform === 'tiktok' ? 'bg-black' : 'bg-blue-600'
                        } text-white shadow-lg`}>
                          {platform === 'instagram' ? <Instagram className="h-5 w-5" /> :
                           platform === 'linkedin' ? <Linkedin className="h-5 w-5" /> :
                           <Share2 className="h-5 w-5" />}
                        </div>
                        <div>
                          <p className="font-bold text-sm capitalize">{platform}</p>
                          <p className="text-[11px] text-gray-500 font-medium">
                            {account?.connected ? `@${account.username}` : 'No vinculado'}
                          </p>
                        </div>
                      </div>
                      {account?.connected ? (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="rounded-xl text-[11px] font-bold text-red-500 hover:bg-red-50"
                          onClick={() => handleDisconnectAccount(account)}
                        >
                          Desconectar
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-xl text-[11px] font-bold border-gray-200"
                          disabled={isPlatformConnecting}
                          onClick={() => handleConnectAccount(platform)}
                        >
                          {isPlatformConnecting ? <Loader2 className="h-3 w-3 animate-spin mr-1" /> : <Link2 className="h-3 w-3 mr-1" />}
                          Vincular
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Platform Selection for Publishing */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Seleccionar para publicar</h4>
              <div className="flex flex-wrap gap-2">
                {['instagram', 'tiktok', 'linkedin'].map((p) => {
                  const isLinked = socialAccounts.find(a => a.platform === p)?.connected;
                  const isSelected = selectedPlatforms.includes(p);
                  return (
                    <button
                      key={p}
                      disabled={!isLinked}
                      onClick={() => {
                        setSelectedPlatforms(prev => 
                          isSelected ? prev.filter(x => x !== p) : [...prev, p]
                        );
                      }}
                      className={`px-6 py-3 rounded-2xl text-xs font-black transition-all border-2 flex items-center gap-2 ${
                        !isLinked ? 'bg-gray-50 border-gray-50 text-gray-300 cursor-not-allowed opacity-50' :
                        isSelected ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200' :
                        'bg-white border-gray-100 text-gray-600 hover:border-indigo-200'
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3" />}
                      <span className="capitalize">{p}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4">
              <Button 
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-lg shadow-xl shadow-purple-200 disabled:opacity-50"
                disabled={isPublishing || selectedPlatforms.length === 0}
                onClick={handlePublish}
              >
                {isPublishing ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Publicando...
                  </>
                ) : (
                  <>
                    Publicar Ahora
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
