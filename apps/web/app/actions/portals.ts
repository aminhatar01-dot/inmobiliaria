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

    if (!tenantId) throw new Error("No tienes una inmobiliaria vinculada a tu cuenta.")

    // Safe connection logic bypassing the need for a database-level ON CONFLICT constraint
    const { data: existing } = await supabase
        .from("portal_connections")
        .select("id")
        .eq("tenant_id", tenantId)
        .eq("portal_name", portalName)
        .maybeSingle()

    let result;
    if (existing) {
        result = await supabase
            .from("portal_connections")
            .update({
                account_email: email,
                status: 'connected',
                credentials: {
                    connected_at: new Date().toISOString(),
                    scope: ['read', 'write', 'offline_access']
                },
                updated_at: new Date().toISOString()
            })
            .eq("id", existing.id)
            .select()
            .single()
    } else {
        result = await supabase
            .from("portal_connections")
            .insert({
                tenant_id: tenantId,
                portal_name: portalName as any,
                account_email: email,
                status: 'connected',
                credentials: {
                    connected_at: new Date().toISOString(),
                    scope: ['read', 'write', 'offline_access']
                }
            })
            .select()
            .single()
    }

    const { data, error } = result;

    if (error) {
        console.error("Error connecting portal:", error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/portales")
    return data
}

export async function disconnectPortal(connectionId: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    if (!tenantId) throw new Error("No tienes una inmobiliaria vinculada a tu cuenta.")

    const { error } = await supabase
        .from("portal_connections")
        .delete()
        .eq("id", connectionId)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error("Error disconnecting portal:", error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/portales")
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

    if (!tenantId) throw new Error("No tienes una inmobiliaria vinculada a tu cuenta.")

    // Simulating call to external portal API
    const externalId = `EXT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    let externalUrl = ""

    // Get portal name from connectionId
    const { data: conn } = await supabase
        .from("portal_connections")
        .select("portal_name")
        .eq("id", connectionId)
        .single()

    if (conn) {
        if (conn.portal_name === 'mercadolibre') {
            externalUrl = `https://www.mercadolibre.com.ar/inmuebles/MLA-${externalId}`
        } else if (conn.portal_name === 'argenprop') {
            externalUrl = `https://www.argenprop.com/propiedad-${externalId}`
        } else if (conn.portal_name === 'zonaprop') {
            externalUrl = `https://www.zonaprop.com.ar/propiedades/zp-${externalId}.html`
        }
    }

    const { data, error } = await supabase
        .from("property_publications")
        .upsert({
            tenant_id: tenantId,
            property_id: propertyId,
            portal_connection_id: connectionId,
            status: 'published',
            external_id: externalId,
            external_url: externalUrl,
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

export async function updatePortalConfig(portalName: string, config: { clientId: string, clientSecret: string, scope?: string }) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("No tienes una inmobiliaria vinculada a tu cuenta.")

    // Fetch existing connection or create a skeletal one to hold credentials
    const { data: existing } = await supabase
        .from("portal_connections")
        .select("id, credentials")
        .eq("tenant_id", tenantId)
        .eq("portal_name", portalName)
        .maybeSingle()

    let result;
    const newCredentials = {
        ...(existing?.credentials || {}),
        client_id: config.clientId,
        client_secret: config.clientSecret,
        configured_at: new Date().toISOString()
    }

    if (existing) {
        result = await supabase
            .from("portal_connections")
            .update({
                credentials: newCredentials,
                updated_at: new Date().toISOString()
            })
            .eq("id", existing.id)
            .select()
            .single()
    } else {
        result = await supabase
            .from("portal_connections")
            .insert({
                tenant_id: tenantId,
                portal_name: portalName as any,
                status: 'disconnected', // Status is disconnected until OAuth flow is actually completed
                credentials: newCredentials
            })
            .select()
            .single()
    }

    if (result.error) {
        console.error("Error updating portal config:", result.error)
        throw new Error(result.error.message)
    }

    revalidatePath("/marketing/portales")
    return result.data
}
