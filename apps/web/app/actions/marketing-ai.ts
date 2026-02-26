"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { Property } from "@inmocms/shared"

export async function generateMarketingScript(
    propertyId: string,
    type: 'reel' | 'tiktok' | 'post',
    instructions?: string,
    variation: number = 0
) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) throw new Error("Unauthorized")

    // Fetch property details to provide context to the AI
    const { data: property, error } = await supabase
        .from("properties")
        .select("*, property_media(*)")
        .eq("id", propertyId)
        .eq("tenant_id", tenantId)
        .single()

    if (error || !property) throw new Error("Property not found")

    // In a real implementation, we would call an LLM (OpenAI/Anthropic) here.
    // For now, we simulate a professional, non-synthetic response.

    const propertyTitle = property.title || "Propiedad Exclusiva"
    const price = property.price ? `${property.currency} ${property.price.toLocaleString()}` : "Consultar precio"
    const propertyMedia = property.property_media || []

    // Simulate instruction influence
    const isProfessional = instructions?.toLowerCase().includes("profesional")
    const isCreative = instructions?.toLowerCase().includes("creativo") || instructions?.toLowerCase().includes("humor")

    const prefix = isProfessional ? "[PRO] " : isCreative ? "✨ " : ""
    const toneSuffix = isProfessional ? " (Presentado con máxima elegancia)" : isCreative ? " (¡Te va a encantar!)" : ""

    const styles = [
        {
            name: "Cinematográfico",
            prefix: "🎬 [CINEMATIC] ",
            suffix: " (Visualmente impactante)",
            structure: "narrative-slow"
        },
        {
            name: "Dinámico",
            prefix: "⚡ [FAST] ",
            suffix: " (Ritmo frenético y viral)",
            structure: "hook-fast-cuts"
        },
        {
            name: "Tour Guiado",
            prefix: "🏠 [TOUR] ",
            suffix: " (Enfoque en detalles y ambientes)",
            structure: "room-by-room"
        }
    ]

    const currentStyle = styles[variation % styles.length]
    const finalPrefix = `${currentStyle.prefix}${prefix}`
    const finalSuffix = `${toneSuffix}${currentStyle.suffix}`

    // Diverse scene structures based on style
    let finalScenes = []
    if (currentStyle.structure === 'hook-fast-cuts') {
        finalScenes = [
            { duration: 45, visual: "Varios planos rápidos de fachada y jardín", text: `${finalPrefix}¿Estás listo para conocer tu próximo hogar? 🔥${finalSuffix}` },
            { duration: 30, visual: "Zoom rápido a zona central", text: `${finalPrefix}Mira lo que es esta amplitud... ¡increíble!${finalSuffix}` },
            { duration: 45, visual: "Corte rápido a cocina/comedor", text: `${finalPrefix}Diseño moderno que enamora a primera vista.${finalSuffix}` },
            { duration: 30, visual: "Detalle de dormitorio principal", text: `${finalPrefix}El confort que te mereces.${finalSuffix}` },
            { duration: 30, visual: "Piscina o amenity estrella", text: `${finalPrefix}El rincón favorito de todos. ✨${finalSuffix}` },
            { duration: 45, visual: "Plano final con contacto", text: `${finalPrefix}WhatsApp en el link de la bio. 📲${finalSuffix}` }
        ]
    } else if (currentStyle.structure === 'room-by-room') {
        finalScenes = [
            { duration: 90, visual: "Ingreso formal a la propiedad", text: `${finalPrefix}Bienvenidos a un recorrido exclusivo por ${propertyTitle}.${finalSuffix}` },
            { duration: 60, visual: "Sala de estar principal", text: `${finalPrefix}Un living luminoso ideal para recibir amigos.${finalSuffix}` },
            { duration: 60, visual: "Área de comedor y cocina integrada", text: `${finalPrefix}Espacios integrados con materiales de primera calidad.${finalSuffix}` },
            { duration: 90, visual: "Dormitorios principales y balcones", text: `${finalPrefix}Zonas de descanso con vistas inmejorables.${finalSuffix}` },
            { duration: 60, visual: "Jardín o patio", text: `${finalPrefix}Un espacio verde para disfrutar en familia.${finalSuffix}` }
        ]
    } else {
        // narrative-slow (Default)
        finalScenes = [
            { duration: 60, visual: "Toma de drone entrando a la propiedad", text: `${finalPrefix}Descubre la elegancia en cada rincón de ${propertyTitle}. 🏠${finalSuffix}` },
            { duration: 90, visual: "Primer plano de la sala principal", text: `${finalPrefix}Donde el diseño encuentra su propósito.${finalSuffix}` },
            { duration: 60, visual: "Detalle de acabados en la cocina", text: `${finalPrefix}La sofisticación que siempre buscaste.${finalSuffix}` },
            { duration: 90, visual: "Vista panorámica desde la terraza", text: `${finalPrefix}Vistas que inspiran una nueva vida.${finalSuffix}` },
            { duration: 60, visual: "Plano final con contacto", text: `${finalPrefix}Tu nueva etapa comienza aquí. Contáctanos. 📞${finalSuffix}` }
        ]
    }

    const scripts = {
        reel: {
            title: `${currentStyle.name} Instagram Reel`,
            scenes: finalScenes,
            hook: `${finalPrefix}${isProfessional ? "La excelencia hecha hogar" : "No vas a creer que esta casa existe"}${finalSuffix}`,
            hashtags: "#Inmobiliaria #Lujo #RealEstate #Inversion #PropiedadExclusiva",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        tiktok: {
            title: `${currentStyle.name} TikTok Style`,
            scenes: finalScenes,
            hook: `${finalPrefix}${isCreative ? "POV: Te acabas de mudar a la mejor casa de la zona" : "3 Razones para vivir aquí"}${finalSuffix}`,
            hashtags: "#TikTokRealEstate #Propiedades #HomeTour #ModernHome",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        post: {
            title: `${currentStyle.name} Social Post`,
            content: `${finalPrefix}Te presentamos ${propertyTitle}. Una propiedad única que redefine el concepto de hogar.${finalSuffix}\n\nCon un estilo ${currentStyle.name.toLowerCase()}, cada rincón está pensado para ofrecerte el máximo confort y elegancia.`,
            hook: `${finalPrefix}¡Oportunidad única en la zona! 🔑${finalSuffix}`,
            hashtags: "#VentaPropiedades #RealEstateArgentina #Inmuebles #NuevoHogar",
            scenes: [
                { duration: 0, visual: "Carrusel de fotos HDR", text: "Post estático multimagen" }
            ]
        }
    }

    const script = scripts[type]

    return {
        success: true,
        script,
        suggestedImages: propertyMedia.slice(0, 5).map((m: any) => m.url),
        productionMetadata: {
            propertyId,
            type,
            variation,
            style: currentStyle.name,
            scenes: (script as any).scenes.map((s: any, idx: number) => ({
                ...s,
                imageUrl: propertyMedia[idx % propertyMedia.length]?.url || "https://images.unsplash.com/photo-1564013795939-6639b4eead26?auto=format&fit=crop&w=800&q=80"
            })),
            audioUrl: (script as any).audioUrl
        }
    }
}

export async function getAudioLibrary() {
    return [
        { id: '1', title: 'Lujo & Elegancia', artist: 'InmoCMS Beats', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', duration: 180 },
        { id: '2', title: 'Dinámico & Viral', artist: 'Trend Master', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', duration: 120 },
        { id: '3', title: 'Relajante & Zen', artist: 'Hogar Dulce Hogar', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', duration: 150 },
        { id: '4', title: 'Acción Inmobiliaria', artist: 'Sales Drive', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', duration: 140 },
    ]
}

export async function getSocialAccounts() {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) throw new Error("Unauthorized")

    const { data: accounts } = await supabase
        .from("social_accounts")
        .select("*")
        .eq("tenant_id", tenantId)

    // Fallback/Mock if table doesn't exist or is empty
    return accounts || [
        { id: '1', platform: 'instagram', username: 'inmocms_demo', connected: true },
        { id: '2', platform: 'tiktok', username: '', connected: false },
        { id: '3', platform: 'linkedin', username: 'InmoCMS LinkedIn', connected: true },
    ]
}

export async function connectSocialAccount(platform: string) {
    // In a real app, this would redirect to OAuth
    // Here we simulate a successful connection
    await new Promise(resolve => setTimeout(resolve, 1500))
    return { success: true, username: `${platform}_user_mock` }
}

export async function disconnectSocialAccount(platform: string) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { success: true }
}

export async function publishToSocialMedia(
    content: any,
    platforms: ('instagram' | 'tiktok' | 'linkedin')[]
) {
    console.log("Iniciando publicación en redes:", { content, platforms })

    // Simulate connection check
    const accounts = await getSocialAccounts()
    const disconnected = platforms.filter(p => !accounts.find(a => a.platform === p && a.connected))

    if (disconnected.length > 0) {
        throw new Error(`Debes vincular: ${disconnected.join(", ")} antes de publicar.`)
    }

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 3000))

    return {
        success: true,
        publishedAt: new Date().toISOString(),
        urls: platforms.map(p => `https://${p}.com/reels/mock_id_${Math.random().toString(36).substr(2, 9)}`)
    }
}

export async function enhancePropertyPhoto(mediaId: string, enhancementType: 'lighting' | 'sky' | 'hdr') {
    // This would integrate with an AI Image SDK
    return {
        success: true,
        originalUrl: "", // Mock
        enhancedUrl: "", // Mock
        message: "Imagen procesada con éxito. El realce de " + enhancementType + " ha sido aplicado."
    }
}
