'use server'

import { createClient, getTenantId } from "@/lib/supabase/server"
import { Contract } from "@inmocms/shared"
import { revalidatePath } from "next/cache"

const DEV_TENANT_ID = '00000000-0000-0000-0000-000000000001'

export async function getContracts(): Promise<(Contract & { property?: { title: string, address: string }, lead?: { name: string, email: string } })[]> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) return []

    const { data, error } = await supabase
        .from('contracts')
        .select(`
            *,
            property:properties(title, address),
            lead:leads(name, email)
        `)
        .eq('tenant_id', tenantId)
        .order('created_at', { ascending: false })

    if (error) {
        console.error("Error fetching contracts:", error)
        throw new Error(`Error en la base de datos al obtener contratos: ${error.message}`)
    }
    return data as (Contract & { property?: { title: string, address: string }, lead?: { name: string, email: string } })[]
}

export async function getContractById(id: string): Promise<Contract | null> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) return null

    const { data, error } = await supabase
        .from('contracts')
        .select(`
            *,
            property:properties(title, address),
            lead:leads(name, email)
        `)
        .eq('id', id)
        .eq('tenant_id', tenantId)
        .single()

    if (error) {
        console.error(`Error fetching contract by ID ${id}:`, error)
        return null
    }
    return data
}

export async function createContract(formData: FormData) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) throw new Error("Unauthorized")

    const title = formData.get('title') as string
    const type = formData.get('type') as string
    const propertyId = formData.get('property_id') as string || null
    const leadId = formData.get('lead_id') as string || null
    const content = formData.get('content') as string
    const metadata = formData.get('metadata') ? JSON.parse(formData.get('metadata') as string) : {}

    const safePropertyId = propertyId === "" ? null : propertyId
    const safeLeadId = leadId === "" ? null : leadId

    const { data, error } = await supabase
        .from('contracts')
        .insert({
            tenant_id: tenantId,
            title,
            type,
            property_id: safePropertyId,
            lead_id: safeLeadId,
            content,
            metadata,
            status: 'draft'
        })
        .select()
        .single()

    if (error) {
        console.error("Critical error creating contract:", error)
        throw new Error(`Error en la base de datos: ${error.message}`)
    }
    revalidatePath('/documentos')
}

export async function updateContract(id: string, formData: FormData) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) throw new Error("Unauthorized")

    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const status = formData.get('status') as string
    const type = formData.get('type') as string
    const propertyId = formData.get('property_id') as string || null
    const leadId = formData.get('lead_id') as string || null
    const metadataString = formData.get('metadata') as string
    const metadata = metadataString ? JSON.parse(metadataString) : {}

    const safePropertyId = (propertyId === "" || propertyId === "null") ? null : propertyId
    const safeLeadId = (leadId === "" || leadId === "null") ? null : leadId

    const updateData = {
        title,
        content,
        status,
        type: type || undefined,
        property_id: safePropertyId,
        lead_id: safeLeadId,
        metadata,
        updated_at: new Date().toISOString()
    }

    Object.keys(updateData).forEach(key => (updateData as any)[key] === undefined && delete (updateData as any)[key])

    const { error } = await supabase
        .from('contracts')
        .update(updateData)
        .eq('id', id)
        .eq('tenant_id', tenantId)

    if (error) {
        console.error(`Critical error updating contract ${id}:`, error)
        throw new Error(`Error en la base de datos: ${error.message}`)
    }

    revalidatePath('/documentos')
    revalidatePath(`/documentos/${id}`)
}

export async function getTemplates() {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) return []

    const { data, error } = await supabase
        .from('document_templates')
        .select('*')
        .or(`tenant_id.eq.${tenantId},is_system.eq.true`)
        .order('name', { ascending: true })

    if (error) {
        console.error("Error fetching templates:", error)
        throw new Error(`Error en la base de datos al obtener plantillas: ${error.message}`)
    }
    return data
}

export async function deleteContract(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from('contracts')
        .delete()
        .eq('id', id)
        .eq('tenant_id', tenantId)

    if (error) {
        console.error(`Error deleting contract ${id}:`, error)
        throw new Error(`Error en la base de datos al eliminar contrato: ${error.message}`)
    }
    revalidatePath('/documentos')
}

export async function importDocument(formData: FormData) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) throw new Error("Unauthorized")

    const name = formData.get('name') as string
    const content = formData.get('content') as string
    const type = formData.get('type') as string
    const mode = formData.get('mode') as 'template' | 'contract'
    const propertyId = formData.get('property_id') as string || null
    const leadId = formData.get('lead_id') as string || null
    const metadataString = formData.get('metadata') as string
    const metadata = metadataString ? JSON.parse(metadataString) : {}
    const updateEntities = formData.get('update_entities') === 'true'

    if (mode === 'template') {
        const { error } = await supabase
            .from('document_templates')
            .insert({
                tenant_id: tenantId,
                name,
                type,
                content,
                is_system: false
            })

        if (error) throw new Error(`Error al guardar plantilla: ${error.message}`)
    } else {
        const { error } = await supabase
            .from('contracts')
            .insert({
                tenant_id: tenantId,
                title: name,
                type,
                content,
                status: 'draft',
                property_id: propertyId === "" ? null : propertyId,
                lead_id: leadId === "" ? null : leadId,
                metadata
            })

        if (error) throw new Error(`Error al guardar documento: ${error.message}`)

        if (updateEntities) {
            if (leadId && leadId !== "") {
                const leadUpdates: any = {}
                if (metadata.partyB_name) leadUpdates.name = metadata.partyB_name
                if (metadata.partyB_dni) leadUpdates.dni = metadata.partyB_dni

                if (Object.keys(leadUpdates).length > 0) {
                    await supabase.from('leads').update(leadUpdates).eq('id', leadId).eq('tenant_id', tenantId)
                }
            }
        }
    }

    revalidatePath('/documentos')
    if (mode === 'template') revalidatePath('/documentos/nuevo')
}

export async function getDocumentsByPropertyId(propertyId: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) return []

    const { data, error } = await supabase
        .from('contracts')
        .select(`
            *,
            lead:leads(id, name)
        `)
        .eq('tenant_id', tenantId)
        .eq('property_id', propertyId)
        .order('created_at', { ascending: false })

    if (error) {
        console.error(`Error fetching docs for property ${propertyId}:`, error)
        return []
    }
    return data
}

export async function getDocumentsByLeadId(leadId: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) return []

    const { data, error } = await supabase
        .from('contracts')
        .select(`
            *,
            property:properties(id, title)
        `)
        .eq('tenant_id', tenantId)
        .eq('lead_id', leadId)
        .order('created_at', { ascending: false })

    if (error) {
        console.error(`Error fetching docs for lead ${leadId}:`, error)
        return []
    }
    return data
}
export async function deleteTemplate(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from('document_templates')
        .delete()
        .eq('id', id)
        .eq('tenant_id', tenantId)
        .eq('is_system', false)

    if (error) {
        console.error(`Error deleting template ${id}:`, error)
        throw new Error(`Error en la base de datos al eliminar plantilla: ${error.message}`)
    }
    revalidatePath('/documentos')
}

export async function uploadCustomTemplate(formData: FormData) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) throw new Error("Unauthorized")

    const name = formData.get('name') as string
    const type = formData.get('type') as string
    const content = formData.get('content') as string

    const { error } = await supabase
        .from('document_templates')
        .insert({
            tenant_id: tenantId,
            name,
            type,
            content,
            is_system: false
        })

    if (error) {
        console.error("Error uploading custom template:", error)
        throw new Error(`Error en la base de datos al subir plantilla: ${error.message}`)
    }
    revalidatePath('/documentos/nuevo')
}

export async function generateLegalDocumentAI(
    type: string,
    propertyId?: string,
    leadId?: string,
    additionalInstructions?: string,
    metadata?: any
) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) throw new Error("Unauthorized")

    // Fetch context
    let propertyData = null
    let leadData = null

    if (propertyId) {
        const { data } = await supabase.from('properties').select('*').eq('id', propertyId).single()
        propertyData = data
    }

    if (leadId) {
        const { data } = await supabase.from('leads').select('*').eq('id', leadId).single()
        leadData = data
    }

    // Simulation of AI Generation based on context and legal regulations
    const propertyTitle = propertyData?.title || "[PROPIEDAD]"
    const propertyAddress = propertyData?.address || "[DIRECCIÓN]"
    const leadName = metadata?.partyB_name || leadData?.name || "[CLIENTE]"
    const leadDni = metadata?.partyB_dni || "[DNI CLIENTE]"
    const ownerName = metadata?.partyA_name || "[NOMBRE PROPIETARIO]"
    const ownerDni = metadata?.partyA_dni || "[DNI PROPIETARIO]"
    const price = propertyData ? `${propertyData.currency} ${propertyData.price.toLocaleString()}` : (metadata?.amount || "[PRECIO]")
    const startDate = metadata?.startDate || "[FECHA INICIO]"

    let generatedContent = ""

    if (type === 'reservation') {
        generatedContent = `RESERVA AD REFERENDUM - GENERADA POR IA\n\n` +
            `En la ciudad de ..............., a los ${new Date().getDate()} días del mes de ............... de ${new Date().getFullYear()}, entre el Sr/Sra. ${ownerName}, DNI ${ownerDni} (en adelante el PROPIETARIO) y el Sr/Sra. ${leadName}, DNI ${leadDni} (en adelante el RESERVANTE), se establece:\n\n` +
            `PRIMERA: El RESERVANTE hace entrega la suma de ............... en concepto de reserva sobre la propiedad ubicada en ${propertyAddress} (${propertyTitle}).\n\n` +
            `SEGUNDA: El precio de la operación se fija en ${price}. La presente reserva tendrá vigencia hasta el día ${metadata?.expiryDate || ".........."}.\n\n` +
            `REGLAMENTACIÓN: Este documento se rige bajo la normativa vigente de corretaje inmobiliario.\n\n` +
            `${additionalInstructions ? "NOTAS ADICIONALES: " + additionalInstructions : ""}`
    } else if (type === 'rental') {
        generatedContent = `CONTRATO DE LOCACIÓN DE VIVIENDA - GENERADO POR IA\n\n` +
            `Entre el Sr/Sra. ${ownerName}, DNI ${ownerDni}, con domicilio en ${metadata?.partyA_address || ".........."} (el LOCADOR) y el Sr/Sra. ${leadName}, DNI ${leadDni}, con domicilio en ${metadata?.partyB_address || ".........."} (el LOCATARIO), se acuerda:\n\n` +
            `1. OBJETO: El LOCADOR cede en locación al LOCATARIO el inmueble sito en ${propertyAddress}.\n\n` +
            `2. PLAZO Y PRECIO: El contrato tendrá una duración de 24 meses desde el ${startDate}. El precio mensual será de ${price} ${metadata?.currency || "$"}.\n\n` +
            `3. REGLAMENTACIÓN: El presente se ajusta a lo establecido en el Código Civil y Comercial de la Nación.\n\n` +
            `${additionalInstructions ? "AJUSTES: " + additionalInstructions : ""}`
    } else if (type === 'receipt') {
        generatedContent = `RECIBO DE PAGO - SISTEMA INMOCMS\n\n` +
            `RECIBÍ del Sr/Sra. ${leadName} la cantidad de ${price} en concepto de ${metadata?.concept || "pago de servicios/alquiler"} por la propiedad en ${propertyAddress}.\n\n` +
            `FECHA: ${new Date().toLocaleDateString()}\n\n` +
            `Firma Autorizada: ..............................`
    } else {
        generatedContent = `DOCUMENTO LEGAL PERSONALIZADO\n\n` +
            `PARTES: ${ownerName} vs ${leadName}\n` +
            `INMUEBLE: ${propertyAddress}\n` +
            `PRECIO ACORDADO: ${price}\n\n` +
            `CLÁUSULA PRIMERA: Objeto y Partes...\n` +
            `${additionalInstructions ? "AJUSTES IA: " + additionalInstructions : ""}`
    }

    return {
        success: true,
        content: generatedContent,
        metadata: {
            generated_at: new Date().toISOString(),
            engine: "InmoCMS AI Legal v1.1 Professional",
            context: { propertyId, leadId, ...metadata }
        }
    }
}

export async function modifyDocumentAI(currentContent: string, instruction: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) throw new Error("Unauthorized")

    if (!process.env.OPENAI_API_KEY) {
        return { success: false, error: "Clave de OpenAI no configurada en el servidor." }
    }

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: `Eres un asistente legal experto en bienes raíces. 
Tu trabajo es recibir el contenido de un documento legal y aplicar EXACTAMENTE la modificación solicitada por el usuario. 
Tu respuesta DEBE ser únicamente el documento final completo ya modificado. No agregues saludos, explicaciones, ni comillas de markdown al principio o final. Manten el formato del documento intacto a menos que se te pida lo contrario.`
                    },
                    {
                        role: "user",
                        content: `MODIFICACIÓN REQUERIDA: ${instruction}\n\nDOCUMENTO ACTUAL:\n\n${currentContent}`
                    }
                ],
                temperature: 0.3,
            })
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(err);
        }

        const data = await response.json();
        
        return { success: true, content: data.choices[0].message.content };
    } catch (e: any) {
        console.error("Error AI Document Revision:", e);
        
        // Quota exceed handling
        if (e.message && (e.message.includes("quota") || e.message.includes("429") || e.message.includes("insufficient"))) {
            return { 
                success: false, 
                error: "Tu clave de OpenAI se ha quedado sin saldo (Quota Exceeded). Por favor recarga tu cuenta para seguir usando la IA." 
            };
        }
        
        return { success: false, error: "Error de red al conectar con OpenAI." };
    }
}
