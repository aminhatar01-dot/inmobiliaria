"use server"

import { createClient, createAdminClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function getPublicProperties(
    tenantSlug: string,
    filters?: {
        search?: string
        operation?: string
        type?: string
        agentId?: string
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

    // Build query for properties
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
        .eq("status", "available")
        .order("created_at", { ascending: false })

    // Apply filters
    if (filters?.agentId) {
        query = query.eq("created_by", filters.agentId)
    }

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

export async function getPublicAgentInfo(agentId: string) {
    const supabase = await createAdminClient()

    const { data: profile, error } = await supabase
        .from("profiles")
        .select(`
            name,
            email,
            phone,
            tenant_id,
            tenants (
                name,
                slug,
                logo_url
            )
        `)
        .eq("id", agentId)
        .single()

    if (error) {
        console.error("Error fetching public agent info:", error)
        return null
    }

    return profile
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
        .eq("status", "available")
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
    agentId?: string
}) {
    const adminSupabase = await createAdminClient()

    // Get tenant ID from slug
    const { data: tenant, error: tenantError } = await adminSupabase
        .from("tenants")
        .select("id")
        .eq("slug", data.tenantSlug)
        .single()

    if (tenantError || !tenant) {
        console.error("Tenant not found for slug:", data.tenantSlug, tenantError)
        throw new Error(`Inmobiliaria no encontrada: ${data.tenantSlug || 'vacío'}`)
    }

    // Create lead using admin client to ensure success for public users
    const { error: insertError } = await adminSupabase
        .from("leads")
        .insert({
            tenant_id: tenant.id,
            name: data.name,
            email: data.email || null,
            phone: data.phone || null,
            notes: data.message,
            interested_property_id: data.propertyId || null,
            assigned_to: data.agentId || null,
            status: "new",
            source: "website",
            scoring: 0
        })

    if (insertError) {
        console.error("Error creating public lead (admin):", insertError)
        throw new Error("Error al enviar el mensaje. Intenta nuevamente.")
    }

    revalidatePath(`/${data.tenantSlug}`)
    return { success: true }
}
