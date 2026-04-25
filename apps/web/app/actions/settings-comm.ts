
"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import nodemailer from "nodemailer"

export async function getCommunicationSettings() {
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

export async function testSMTP() {
    const settings = await getCommunicationSettings()
    if (!settings || !settings.smtp_host) throw new Error("Configuración SMTP no encontrada")

    const transporter = nodemailer.createTransport({
        host: settings.smtp_host,
        port: settings.smtp_port,
        secure: settings.smtp_port === 465,
        auth: {
            user: settings.smtp_user,
            pass: settings.smtp_pass
        }
    })

    try {
        await transporter.verify()
        return { success: true, message: "Conexión exitosa" }
    } catch (error: any) {
        console.error("SMTP Test failed:", error)
        throw new Error(`Error de conexión: ${error.message}`)
    }
}
