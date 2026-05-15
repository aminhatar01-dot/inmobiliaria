import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { tenant_id, agent_id, phone, message } = body;

        if (!tenant_id || !message) {
            return NextResponse.json({ error: 'Missing tenant_id or message' }, { status: 400 });
        }

        const supabase = await createAdminClient();

        // 1. Find the AI automation config for this tenant
        // We look for an active automation rule that has format 'ai'
        const { data: rules, error: rulesError } = await supabase
            .from('automation_rules')
            .select('*')
            .eq('tenant_id', tenant_id)
            .eq('is_active', true)
            .eq('action_type', 'lead_follow_up');

        let aiConfig: any = null;
        
        if (rules && rules.length > 0) {
            // Find the first rule configured as AI
            const rule = rules.find(r => r.action_config?.format === 'ai');
            if (rule) {
                aiConfig = rule.action_config;
            }
        }

        if (!aiConfig) {
            return NextResponse.json({ 
                text: "No hay configuración de IA activa para responder en este momento.",
                success: false
            });
        }

        // 2. Fetch properties if include_portfolio is true
        let propertiesStr = "No se ha configurado la consulta de portafolio.";
        if (aiConfig.include_portfolio) {
            const { data: properties } = await supabase
                .from('properties')
                .select('id, title, property_type, operation_type, price, currency, city, state')
                .eq('tenant_id', tenant_id)
                .eq('status', 'published')
                .limit(10);
            
            if (properties && properties.length > 0) {
                propertiesStr = properties.map(p => 
                    `- ${p.title} (${p.property_type} en ${p.operation_type}): ${p.currency} ${p.price} en ${p.city}, ${p.state}`
                ).join("\n");
            } else {
                propertiesStr = "No hay propiedades publicadas en este momento.";
            }
        }

        // 3. Build context and system prompt
        const role = aiConfig.ai_role || 'asesor_comercial';
        const tone = aiConfig.ai_tone || 'profesional_amigable';
        const customRules = aiConfig.message_template || '';

        const systemPrompt = `
Eres un asistente de WhatsApp de alto nivel para una agencia inmobiliaria.
Tu rol es: ${role.replace('_', ' ')}.
Tu tono debe ser: ${tone.replace('_', ' ')}.

Reglas personalizadas del agente inmobiliario:
${customRules}

Portafolio de propiedades disponibles de la agencia:
${propertiesStr}

Tu objetivo es atender al cliente de manera natural y concisa.
Si el cliente muestra interés claro en visitar una propiedad y propone o acepta una fecha/hora, debes confirmar la cita en tu mensaje Y ADEMÁS incluir al final de tu respuesta (en una nueva línea) el comando: [SCHEDULE_VISIT: YYYY-MM-DD HH:MM].
Si no hay una fecha clara, sigue conversando para obtenerla.

Solo debes devolver el texto del mensaje. Si incluyes el comando [SCHEDULE_VISIT], que sea lo último en el texto.
`;

        // 4. Initialize Gemini
        let finalKey = process.env.GEMINI_API_KEY;
        if (!finalKey) {
            try {
                const envPath = path.join(process.cwd(), '.env.local');
                if (fs.existsSync(envPath)) {
                    const envContent = fs.readFileSync(envPath, 'utf8');
                    const match = envContent.match(/GEMINI_API_KEY\s*=\s*["']?([^"'\s]+)["']?/);
                    if (match) finalKey = match[1].trim();
                }
            } catch (e) {}
        }

        if (!finalKey) throw new Error("Clave de Gemini no configurada.");

        const ai = new GoogleGenAI({ apiKey: finalKey });
        
        // 5. Generate Response
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [
                { role: 'user', parts: [{ text: systemPrompt }] },
                { role: 'user', parts: [{ text: `Mensaje del cliente (${phone}): "${message}"\n\nRespuesta:` }] }
            ],
            config: { temperature: 0.7 }
        });

        let textResponse = response.text?.trim() || "Lo siento, no pude procesar tu mensaje.";

        // 6. Post-processing: Check for [SCHEDULE_VISIT: ...]
        const visitMatch = textResponse.match(/\[SCHEDULE_VISIT:\s*([^\]]+)\]/);
        if (visitMatch) {
            const scheduledAt = visitMatch[1].trim();
            // Remove the command from the final message sent to user
            textResponse = textResponse.replace(/\[SCHEDULE_VISIT:\s*([^\]]+)\]/, "").trim();

            try {
                // Find lead by phone
                const { data: lead } = await supabase
                    .from('leads')
                    .select('id, name')
                    .eq('tenant_id', tenant_id)
                    .ilike('phone', `%${phone.replace(/\D/g, '')}%`)
                    .single();

                if (lead) {
                    // Create a task for the agent
                    await supabase.from('tasks').insert({
                        tenant_id,
                        title: `Visita programada por IA: ${lead.name}`,
                        description: `El cliente confirmó una visita para el ${scheduledAt}. Confirmar con el cliente.`,
                        status: 'pending',
                        priority: 'high',
                        category: 'visit',
                        due_date: new Date(scheduledAt).toISOString(),
                        lead_id: lead.id,
                        assigned_to: agent_id || (rules && rules[0]?.created_by)
                    });
                }
            } catch (err) {
                console.error("Error creating AI task:", err);
            }
        }

        return NextResponse.json({ 
            success: true,
            text: textResponse
        });

    } catch (error: any) {
        console.error("[WHATSAPP_AI_REPLY] Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
