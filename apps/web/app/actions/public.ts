"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function getPublicProperties(
    tenantSlug: string,
    filters?: {
        search?: string
        operation?: string
        type?: string
    }
) {
    const supabase = await createClient()

    // First, get the tenant by slug
    const { data: tenant, error: tenantError } = await supabase
        .from("tenants")
        .select("id")
        .eq("slug", tenantSlug)
        .single()

    if (tenantError || !tenant) {
        console.error("Error fetching tenant:", tenantError)
        return []
    }

    // Build query for shared properties
    let query = supabase
        .from("properties")
        .select(`
            *,
            property_media (
                url,
                type,
                order
            )
        `)
        .eq("tenant_id", tenant.id)
        .eq("is_shared", true)
        .order("created_at", { ascending: false })

    // Apply filters
    if (filters?.search) {
        query = query.or(`title.ilike.%${filters.search}%,address.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)
    }

    if (filters?.operation) {
        query = query.eq("operation_type", filters.operation)
    }

    if (filters?.type) {
        query = query.eq("property_type", filters.type)
    }

    const { data: properties, error } = await query

    if (error) {
        console.error("Error fetching public properties:", error)
        return []
    }

    return properties || []
}

export async function getPublicPropertyById(tenantSlug: string, propertyId: string) {
    const supabase = await createClient()

    // First, get the tenant by slug
    const { data: tenant, error: tenantError } = await supabase
        .from("tenants")
        .select("id, name")
        .eq("slug", tenantSlug)
        .single()

    if (tenantError || !tenant) {
        console.error("Error fetching tenant:", tenantError)
        return null
    }

    const { data: property, error } = await supabase
        .from("properties")
        .select(`
            *,
            property_media (
                url,
                type,
                order
            )
        `)
        .eq("id", propertyId)
        .eq("tenant_id", tenant.id)
        .eq("is_shared", true)
        .single()

    if (error) {
        console.error("Error fetching public property:", error)
        return null
    }

    return { property, tenant }
}

export async function createPublicLead(data: {
    name: string
    email: string
    phone: string
    message: string
    propertyId?: string
    tenantSlug: string
}) {
    const supabase = await createClient()

    // Get tenant ID from slug
    const { data: tenant, error: tenantError } = await supabase
        .from("tenants")
        .select("id")
        .eq("slug", data.tenantSlug)
        .single()

    if (tenantError || !tenant) {
        throw new Error("Inmobiliaria no encontrada")
    }

    // Create lead
    const { error } = await supabase
        .from("leads")
        .insert({
            tenant_id: tenant.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            notes: data.message,
            property_id: data.propertyId || null,
            status: "new",
            source: "website",
            scoring: 0
        })

    if (error) {
        console.error("Error creating public lead:", error)
        throw new Error("Error al enviar el mensaje. Intenta nuevamente.")
    }

    revalidatePath(`/${data.tenantSlug}`)
    return { success: true }
}
