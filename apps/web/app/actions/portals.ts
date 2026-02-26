"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { PortalConnection, PropertyPublication } from "@inmocms/shared"

export async function getPortalConnections(): Promise<PortalConnection[]> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) return []

    const { data, error } = await supabase
        .from("portal_connections")
        .select("*")
        .eq("tenant_id", tenantId)
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching portal connections:", error)
        return []
    }
    return data || []
}

export async function connectPortal(portalName: string, email: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    // Mock connection logic
    const { data, error } = await supabase
        .from("portal_connections")
        .insert([{
            tenant_id: tenantId,
            portal_name: portalName,
            account_email: email,
            status: 'connected',
            credentials: { mock_token: "abc-123", connected_at: new Date().toISOString() }
        }])
        .select()
        .single()

    if (error) {
        console.error("Error connecting portal:", error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing")
    return data
}

export async function disconnectPortal(connectionId: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("portal_connections")
        .delete()
        .eq("id", connectionId)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error("Error disconnecting portal:", error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing")
}

export async function getPropertyPublications(propertyId: string): Promise<PropertyPublication[]> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) return []

    const { data, error } = await supabase
        .from("property_publications")
        .select("*, portal_connections(portal_name, account_email)")
        .eq("property_id", propertyId)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error("Error fetching publications:", error)
        return []
    }
    return data || []
}

export async function publishToPortal(propertyId: string, connectionId: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    // Mock publication logic
    const { data, error } = await supabase
        .from("property_publications")
        .upsert({
            tenant_id: tenantId,
            property_id: propertyId,
            portal_connection_id: connectionId,
            status: 'published',
            external_id: `EXT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
            external_url: "https://www.mercadolibre.com.ar/inmuebles/propiedad-ejemplo",
            last_published_at: new Date().toISOString()
        }, { onConflict: 'property_id,portal_connection_id' })
        .select()
        .single()

    if (error) {
        console.error("Error publishing property:", error)
        throw new Error(error.message)
    }

    revalidatePath("/propiedades")
    return data
}
