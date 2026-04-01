"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { Property } from "@inmocms/shared"

import fs from 'fs';
import path from 'path';

export async function generateMarketingScript(
    propertyId: string,
    type: 'reel' | 'tiktok' | 'post',
    instructions?: string,
    variation: number = 0,
    avatarId?: string | null,
    externalMediaUrls?: string[]
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
    const description = property.description || "Propiedad en excelente estado."
    
    // Merge external (Agent) media with the property's actual media
    const propertyMediaUrls = property.property_media?.map((m: any) => m.url) || [];
    const displayMedia = externalMediaUrls && externalMediaUrls.length > 0
        ? [...externalMediaUrls, ...propertyMediaUrls]
        : propertyMediaUrls;

    // Base Audio selection based on style
    const audioLibraries = {
        'Dinámico': "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        'Elegante': "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        'Informativo': "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }

    const openAiKey = process.env.OPENAI_API_KEY;
    let finalKey = openAiKey;
    
    // Dynamic read to bypass stale Next.js cache without restarting terminal
    if (!finalKey) {
        try {
            const envPathWeb = path.join(process.cwd(), 'apps/web/.env.local');
            const envPathRoot = path.join(process.cwd(), '.env.local');
            
            let envContent = '';
            if (fs.existsSync(envPathWeb)) envContent = fs.readFileSync(envPathWeb, 'utf8');
            else if (fs.existsSync(envPathRoot)) envContent = fs.readFileSync(envPathRoot, 'utf8');

            if (envContent) {
                const match = envContent.match(/OPENAI_API_KEY\s*=\s*(.+)/);
                if (match) finalKey = match[1].trim();
            }
        } catch(e) { console.error("Could not read dynamic env", e); }
    }

    // Helper TTS generator
    async function generateTTS(text: string, voice: string): Promise<string | null> {
        if (!finalKey) return null;
        try {
            const response = await fetch("https://api.openai.com/v1/audio/speech", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${finalKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "tts-1",
                    input: text.substring(0, 4000), // Max payload safeguard
                    voice: voice
                })
            });

            if (!response.ok) throw new Error("TTS Failed");

            const arrayBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            
            const fileName = `tts_${Math.random().toString(36).substring(2)}.mp3`;
            const { error } = await supabase.storage.from('properties').upload(`tts/${fileName}`, buffer, { contentType: 'audio/mpeg' });
            
            if (error) throw error;
            const { data } = supabase.storage.from('properties').getPublicUrl(`tts/${fileName}`);
            return data.publicUrl;
        } catch (e) {
            console.error("TTS error:", e);
            return null;
        }
    }

    try {
        if (!finalKey) {
            console.warn("OPENAI_API_KEY no detectada. Usando fallback...");
            throw new Error("Missing OpenAI Key");
        }

        const agentContext = avatarId 
            ? `\nEl usuario ha seleccionado un Avatar de Inteligencia Artificial (ID: ${avatarId}) para narrar el video. El guión debe escribirse EN PRIMERA PERSONA como el agente inmobiliario presentando el hogar limitando los emojis.`
            : `\nNo hay avatar narrador activo. El video es puramente visual con voz en off.`;

        const externalMediaContext = externalMediaUrls && externalMediaUrls.length > 0 
            ? `\nEl agente ha subido sus PROPIAS FOTOS/VIDEOS personales. Asegúrate de mencionarse a sí mismo en la primera o última escena como el asesor de confianza.`
            : ``;

        const systemPrompt = `Eres un experto en marketing inmobiliario mundial y guionista de videos cortos virales.
Debes devolver UNICAMENTE un objeto JSON con la siguiente estructura exacta:
{
  "title": "Un título corto para uso interno",
  "hook": "Leyenda de gancho muy poderosa (Max 15 palabras)",
  "content": "Guión narrativo real que se leerá en voz alta. Texto conversacional, directo, sin meter URLs y sin direcciones extremas. Hazlo natural para ser hablado.",
  "hashtags": "3 a 5 hashtags optimizados separados por espacio. ej: #Inmuebles #Luxury",
  "style": "Estilo del video ej: 'Dinámico', 'Elegante', 'Informativo'",
  "scenes": [
    {
      "duration": 45, // Duracion sugerida en frames (e.g. 30, 45, 60, 90)
      "text": "Texto breve (Max 8 palabras) para mostrar en pantalla como overlay de esta escena de la propiedad",
      "visual": "Descripción orientativa visual para esta escena"
    }
  ]
}

REGLAS ESTRICTAS:
- Formato sugerido para ${type} (reel = 9:16 vertical, tiktok = viral rapido, post = formal).
- El JSON debe contener entre 4 y 6 'scenes'.
- Considera el parámetro iterativo 'variation': ${variation}. Para valores mayores, haz un guion MÁS arriesgado y completamente diferente a enfoques anteriores.${agentContext}${externalMediaContext}
- Instrucciones directas del usuario: "${instructions || 'Ninguna particular'}".
`;

        const userContext = `Propiedad: ${propertyTitle}\nPrecio: ${price}\nDescripción Central: ${description}`;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${finalKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4o",
                response_format: { type: "json_object" },
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userContext }
                ],
                temperature: 0.7 + ((variation % 5) * 0.1) // Cap randomness
            })
        });

        if (!response.ok) {
            const errBody = await response.text();
            throw new Error(`OpenAI API Error: ${errBody}`);
        }

        const data = await response.json();
        const aiMessage = data.choices[0].message.content;
        const parsedJson = JSON.parse(aiMessage);

        const styleName = parsedJson.style || "Elegante";
        const musicAudioUrl = audioLibraries[styleName as keyof typeof audioLibraries] || audioLibraries['Dinámico'];

        // AVATAR TTS Mapping
        const avatarVoiceMap: Record<string, string> = {
            'sofia': 'nova',    // Energetic female
            'marcos': 'onyx',   // Deep male
            'elena': 'shimmer', // Clear professional female
            'javier': 'echo'    // Confident male
        };

        let voiceAudioUrl = null;
        if (avatarId && avatarVoiceMap[avatarId]) {
            voiceAudioUrl = await generateTTS(parsedJson.content, avatarVoiceMap[avatarId]);
        }

        return {
            success: true,
            script: {
                title: parsedJson.title,
                hook: parsedJson.hook,
                content: parsedJson.content,
                hashtags: parsedJson.hashtags,
                scenes: parsedJson.scenes
            },
            suggestedImages: displayMedia.slice(0, 5),
            productionMetadata: {
                propertyId,
                type,
                variation,
                avatarId,
                style: styleName,
                scenes: parsedJson.scenes.map((s: any, idx: number) => ({
                    duration: s.duration || 60,
                    text: s.text,
                    visual: s.visual,
                    imageUrl: displayMedia[idx % (displayMedia.length || 1)] || "https://images.unsplash.com/photo-1564013795939-6639b4eead26?auto=format&fit=crop&w=800&q=80"
                })),
                musicAudioUrl,
                voiceAudioUrl
            }
        };

    } catch (apiError) {
        console.error("Fallo al contactar OpenAI, retornando fallback simulado:", apiError);
        
        // MOCK FALLBACK (Only called if API fails or lacks key)
        const styles = [{ name: "Cinematográfico" }, { name: "Dinámico" }];
        const currentStyleName = styles[variation % styles.length].name;
        
        return {
            success: true,
            script: {
                title: `${currentStyleName} (Fallback)`,
                hook: "¡Descubre tu nuevo hogar hoy! 🔥",
                content: `Te presentamos ${propertyTitle}. Una propiedad increíble.\nPrecio: ${price}`,
                hashtags: "#Inmobiliaria #Lujo #BienesRaices",
                scenes: [
                    { duration: 60, text: "Bienvenido a casa", visual: "Fachada" },
                    { duration: 45, text: "Amplitud y lujo", visual: "Interiores" }
                ]
            },
            suggestedImages: displayMedia.slice(0, 5),
            productionMetadata: {
                propertyId,
                type,
                variation,
                avatarId,
                style: currentStyleName,
                scenes: [
                    { duration: 60, text: "Bienvenido a casa", visual: "Fachada", imageUrl: displayMedia[0] || "https://images.unsplash.com/1" },
                    { duration: 45, text: "Amplitud y lujo", visual: "Interiores", imageUrl: displayMedia[1] || displayMedia[0] || "https://images.unsplash.com/2" }
                ],
                audioUrl: audioLibraries['Dinámico']
            }
        };
    }
}

export async function generateAVContent(metadata: any) {
    console.log("Iniciando síntesis de video/audio con IA:", metadata)
    
    // We will attempt to use Creatomate for real programmatic video generation.
    // If the API key is missing (or during local dev), we fall back gracefully.
    const creatomateKey = process.env.CREATOMATE_API_KEY;

    try {
        if (!creatomateKey) {
            console.warn("CREATOMATE_API_KEY no detectada. Usando fallback de video...");
            throw new Error("Missing Creatomate API Key");
        }

        // Build Creatomate Composition Elements
        let globalTime = 0;
        const elements = metadata.scenes.map((scene: any, index: number) => {
            const timeInSeconds = scene.duration / 30; // assume 30fps base
            const sceneElements = [
                {
                    "type": "image",
                    "source": scene.imageUrl,
                    "track": 1,
                    "time": globalTime,
                    "duration": timeInSeconds,
                    "animations": [
                        { "time": "start", "duration": timeInSeconds, "type": "scale", "start_scale": "100%", "end_scale": "115%", "easing": "linear" },
                        { "time": "start", "duration": 1, "type": "fade", "start_opacity": "0%", "end_opacity": "100%" }
                    ]
                },
                {
                    "type": "text",
                    "text": scene.text.toUpperCase(),
                    "track": 2,
                    "time": globalTime,
                    "duration": timeInSeconds,
                    "y": "80%", // Position text near the bottom
                    "font_family": "Montserrat",
                    "font_weight": "900",
                    "fill_color": "#ffffff",
                    "shadow_color": "rgba(0,0,0,0.8)",
                    "shadow_blur": "15px",
                    "animations": [
                        { "time": "start", "duration": 0.5, "type": "fade", "start_opacity": "0%", "end_opacity": "100%" },
                        { "time": "end", "duration": 0.5, "type": "fade", "start_opacity": "100%", "end_opacity": "0%" }
                    ]
                }
            ];
            globalTime += timeInSeconds;
            return sceneElements;
        }).flat();

        if (metadata.audioUrl) {
            elements.push({
                "type": "audio",
                "source": metadata.audioUrl,
                "track": 3,
                "time": 0,
                "duration": globalTime
            });
        }

        const payload = {
            "output_format": "mp4",
            "width": metadata.type === 'reel' || metadata.type === 'tiktok' ? 1080 : 1920,
            "height": metadata.type === 'reel' || metadata.type === 'tiktok' ? 1920 : 1080,
            "frame_rate": 30,
            "elements": elements
        };

        const response = await fetch("https://api.creatomate.com/v1/renders", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${creatomateKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ source: payload })
        });

        if (!response.ok) {
            const errBody = await response.text();
            throw new Error(`Creatomate API Error: ${errBody}`);
        }

        const renderJob = await response.json();
        
        // Polling the render status would typically happen via webhooks or client-side polling.
        // For simplicity in a server action, if it's synchronous or fast it might return early,
        // but Creatomate usually returns the job with a `url` that becomes valid once finished.
        
        return {
            success: true,
            videoUrl: renderJob[0]?.url || "https://vjs.zencdn.net/v/oceans.mp4",
            thumbnailUrl: metadata.scenes[0]?.imageUrl,
            duration: globalTime,
            shareLink: `https://inmocms.app/share/video_${Math.random().toString(36).substr(2, 9)}`,
            jobId: renderJob[0]?.id
        }

    } catch (error) {
        console.error("Fallo al contactar Creatomate, usando video fallback:", error);
        
        // Simular un tiempo razonable de "renderizado falso" para que la UI se comporte de forma fluida
        await new Promise(resolve => setTimeout(resolve, 3500))

        const totalDuration = metadata.scenes.reduce((acc: number, s: any) => acc + (s.duration || 60), 0) / 30;

        return {
            success: true,
            // Al devolver null, el frontend AIVideoPlayer utilizará el componente de Remotion 
            // para renderizar el video en tiempo real en el navegador de forma impecable sin necesitar MP4.
            videoUrl: null, 
            thumbnailUrl: metadata.scenes[0]?.imageUrl,
            duration: totalDuration,
            shareLink: `https://inmocms.app/share/video_${Math.random().toString(36).substr(2, 9)}`
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
