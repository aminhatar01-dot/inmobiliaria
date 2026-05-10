
"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import nodemailer from "nodemailer"

export async function getCommunicationSettings() {
    try {
        const supabase = await createClient()
        const tenantId = await getTenantId(supabase)

        if (!tenantId) return null

        const { data, error } = await supabase
            .from("tenant_communication_settings")
            .select("*")
            .eq("tenant_id", tenantId)
            .single()

        if (error && error.code !== 'PGRST116') { // PGRST116 means zero rows
            console.error("Error fetching communication settings:", error)
            return null
        }

        return data
    } catch (err) {
        console.error("[SETTINGS-COMM] Unexpected error:", err)
        return null
    }
}

export async function updateCommunicationSettings(formData: FormData) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const settings = {
        tenant_id: tenantId,
        smtp_host: formData.get("smtp_host") as string || null,
        smtp_port: parseInt(formData.get("smtp_port") as string) || 587,
        smtp_user: formData.get("smtp_user") as string || null,
        smtp_pass: formData.get("smtp_pass") as string || null,
        smtp_from_name: formData.get("smtp_from_name") as string || null,
        smtp_from_email: formData.get("smtp_from_email") as string || null,
        resend_api_key: formData.get("resend_api_key") as string || null,
        whatsapp_mode: formData.get("whatsapp_mode") as string || 'link',
        whatsapp_api_token: formData.get("whatsapp_api_token") as string || null,
        whatsapp_phone_id: formData.get("whatsapp_phone_id") as string || null,
        evolution_api_url: formData.get("evolution_api_url") as string || null,
        evolution_api_key: formData.get("evolution_api_key") as string || null,
        updated_at: new Date().toISOString()
    }

    const { error } = await supabase
        .from("tenant_communication_settings")
        .upsert(settings)

    if (error) {
        console.error("Error updating communication settings:", error)
        throw new Error(error.message)
    }

    revalidatePath("/ajustes")
    return { success: true }
}

export async function testSMTP(formData: FormData) {
    const host = formData.get("smtp_host") as string;
    const port = parseInt(formData.get("smtp_port") as string) || 587;
    const user = formData.get("smtp_user") as string;
    const pass = formData.get("smtp_pass") as string;

    if (!host) return { success: false, error: "Debes ingresar el Servidor (Host) antes de probar" }

    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: port === 465,
        auth: {
            user: user,
            pass: pass
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    try {
        await transporter.verify()
        return { success: true, message: "Conexión SMTP exitosa" }
    } catch (error: any) {
        console.error("SMTP Test failed:", error)
        let msg = error.message;
        if (msg.includes("Invalid login")) msg = "Credenciales incorrectas. Si usas Gmail, asegúrate de usar una 'Contraseña de Aplicación', no tu contraseña normal.";
        else if (msg.includes("timeout")) msg = "El servidor SMTP tardó demasiado en responder. Verifica el host y el puerto.";
        else if (msg.includes("ECONNREFUSED")) msg = "Conexión rechazada por el servidor SMTP. Verifica el puerto (587 o 465).";
        
        return { success: false, error: `Error SMTP: ${msg}` }
    }
}

export async function testResend(formData: FormData) {
    const apiKey = formData.get("resend_api_key") as string;
    const fromEmail = formData.get("smtp_from_email") as string;
    const fromName = formData.get("smtp_from_name") as string;

    if (!apiKey) return { success: false, error: "Debes ingresar la API Key de Resend antes de probar" }
    if (!fromEmail) return { success: false, error: "Debes configurar el 'Email Remitente' para enviar el mensaje de prueba" }

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: `${fromName || 'InmoCMS'} <${fromEmail}>`,
                to: [fromEmail], // Envía una copia al propio remitente
                subject: 'InmoCMS: Prueba de conexión Resend exitosa ✅',
                html: '<strong>¡Felicitaciones!</strong> Tu conexión con Resend está funcionando correctamente.'
            })
        });

        const data = await response.json()

        if (!response.ok) {
            let errorMsg = data.message || `HTTP ${response.status}`;
            
            // Traducción de errores comunes de Resend
            if (errorMsg.includes("domain is not verified")) {
                errorMsg = "Resend requiere un dominio propio (ej: hola@tuinmobiliaria.com). Por reglas mundiales contra el SPAM, ningún sistema permite enviar correos masivos usando @gmail.com, @hotmail.com o @yahoo.com a través de API. Si no tienes dominio, por favor usa la pestaña 'SMTP' y conecta tu Gmail directamente.";
            } else if (errorMsg.includes("Invalid API key")) {
                errorMsg = "La API Key de Resend es inválida o no existe.";
            }

            return { success: false, error: errorMsg }
        }

        return { success: true, message: "Conexión Resend exitosa y correo de prueba enviado" }
    } catch (error: any) {
        console.error("Resend Test failed:", error)
        return { success: false, error: `Error de red con Resend: ${error.message}` }
    }
}

export async function testWhatsApp(formData: FormData) {
    const apiToken = formData.get("whatsapp_api_token") as string;
    const phoneId = formData.get("whatsapp_phone_id") as string;

    if (!apiToken || !phoneId) {
        return { success: false, error: "Debes ingresar el Token de Acceso y el ID de Teléfono antes de probar" }
    }

    const { sendWhatsAppMessage } = await import("@/lib/services/whatsapp")
    
    // Enviar un mensaje de prueba al propio número o un número genérico
    const result = await sendWhatsAppMessage({
        apiToken: apiToken,
        phoneNumberId: phoneId
    }, "5491112345678", "InmoCMS: Prueba de conexión exitosa ✅")

    if (!result.success) {
        let errorMsg = result.error || "Error al enviar mensaje de prueba";
        
        // Traducciones comunes de Meta API
        if (errorMsg.includes("Invalid OAuth access token") || errorMsg.includes("Error validating access token")) {
            errorMsg = "El Token de Acceso es inválido o ha expirado. Genera uno nuevo en Meta for Developers.";
        } else if (errorMsg.includes("Unsupported get request") || errorMsg.includes("does not exist")) {
            errorMsg = "El ID de Teléfono (Phone ID) es incorrecto. Verifícalo en Meta for Developers.";
        }

        return { success: false, error: errorMsg }
    }

    return { success: true, message: "Conexión de WhatsApp Cloud API exitosa" }
}
