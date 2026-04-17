'use server'

import { createClient } from '@/lib/supabase/server'
import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export async function generateLeadOutreach(params: {
    targetAudience?: string;
    propertyId?: string;
}) {
    const supabase = await createClient()

    // 1. Verify User and Tenant
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) throw new Error("No autenticado")

    const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('tenant_id')
        .eq('id', user.id)
        .single()

    if (profileError || !profile?.tenant_id) throw new Error("No pertenece a ninguna inmobiliaria")

    // 2. Gather context
    let contextStr = ""
    if (params.propertyId) {
        const { data: property } = await supabase
            .from('properties')
            .select('*')
            .eq('id', params.propertyId)
            .eq('tenant_id', profile.tenant_id)
            .single()

        if (property) {
            contextStr = `Propiedad Específica: ${property.title}. 
            Tipo: ${property.property_type}. 
            Operación: ${property.operation_type}. 
            Precio: ${property.currency} ${property.price}. 
            Descripción corta: ${property.description?.substring(0, 200)}...`
        }
    }

    if (params.targetAudience) {
        contextStr += `\nPúblico Objetivo Manual: "${params.targetAudience}"`
    }

    const systemPrompt = `
Eres un experto en captación inmobiliaria y copywriter de alto nivel (Cold Outreach).
Tu objetivo es ayudar a un agente inmobiliario a conseguir nuevos leads (clientes potenciales) basados en el siguiente enfoque o propiedad.

Contexto brindado:
${contextStr}

Debes generar contenido persuasivo, no invasivo y altamente efectivo para captar a este público.
Tu respuesta DEBE ser un objeto JSON estrictamente válido con la siguiente estructura (no incluyas markdown \`\`\`json, solo el objeto crudo):

{
  "buyerPersona": "Breve descripción de 2 líneas sobre quién es este cliente, sus dolores e intereses principales.",
  "hooks": [
    "Gancho 1 para redes sociales (ej. Instagram/LinkedIn)",
    "Gancho 2 enfocado en curiosidad o problema",
    "Gancho 3 enfocado en una oportunidad única"
  ],
  "emailTemplate": "Asunto: [Asunto llamativo]\\n\\nHola [Nombre],\\n\\nCuerpo del email corto, persuasivo, que genere valor antes de vender...\\n\\nLlamado a la acción (CTA).\\n\\nFirma",
  "whatsappScript": "Hola [Nombre] 👋 Mensaje corto para WhatsApp. Tono amigable y consultivo. No más de 3-4 líneas. Termina con una pregunta abierta."
}

Mantén un tono profesional pero moderno y cercano.
`

    try {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("Clave de Gemini no configurada en variables de entorno");
        }

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: systemPrompt,
            config: {
                temperature: 0.7,
            }
        });

        const textResponse = response.text;
        
        if (!textResponse) {
             throw new Error("Respuesta vacía del modelo de IA.");
        }

        // Clean up markdown if the model accidentally included it
        const cleanedJson = textResponse.replace(/^```json\s*/, '').replace(/\s*```$/, '').trim();
        
        return JSON.parse(cleanedJson);

    } catch (error: any) {
        console.error("Error generating outreach content:", error);
        // Re-throw con error original para debugging en logs
        throw error;
    }
}
