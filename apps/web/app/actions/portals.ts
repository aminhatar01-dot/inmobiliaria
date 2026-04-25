"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { PortalConnection, PropertyPublication } from "@inmocms/shared"

export async function getPortalConnections(): Promise<PortalConnection[]> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return []

    const { data, error } = await supabase
        .from("portal_connections")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching portal connections:", error)
        return []
    }
    return data || []
}

export type PortalConnectResult = 
    | { type: 'redirect', url: string }
    | { type: 'success', data: any, feedUrl: string }

export async function getGlobalPortalConfig(portalName: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data: profile } = await supabase
        .from("profiles")
        .select("tenant_id")
        .eq("id", user.id)
        .single()

    if (!profile?.tenant_id) return null

    const { data } = await supabase
        .from("portal_connections")
        .select("credentials")
        .eq("tenant_id", profile.tenant_id)
        .eq("portal_name", portalName)
        .maybeSingle()

    const creds = data?.credentials as any
    
    // If tenant has no config, check for PLATFORM DEFAULT in environment variables
    if (!creds?.client_id || creds.client_id === "PLACEHOLDER_ID") {
        const platformId = process.env.ML_CLIENT_ID
        const platformSecret = process.env.ML_CLIENT_SECRET
        
        if (platformId && platformId !== "PLACEHOLDER_ID" && platformId.length > 5) {
            return {
                client_id: platformId,
                client_secret: platformSecret,
                is_platform_default: true
            }
        }
        return null
    }

    return creds || null
}

export async function connectPortal(portalName: string, email: string, config?: { clientId: string, clientSecret: string }, origin?: string): Promise<PortalConnectResult> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error("Debes iniciar sesión.")

    const { data: profile } = await supabase
        .from("profiles")
        .select("tenant_id")
        .eq("id", user.id)
        .single()

    if (!profile?.tenant_id) throw new Error("No tienes una inmobiliaria vinculada.")

    // Special handling for Mercado Libre (OAuth)
    if (portalName === 'mercadolibre') {
        let clientId = ""
        let clientSecret = ""

        // If config is provided, SAVE IT and use it
        if (config?.clientId && config?.clientSecret) {
            await supabase
                .from("portal_connections")
                .upsert({
                    tenant_id: profile.tenant_id,
                    portal_name: "mercadolibre",
                    status: "disconnected",
                    credentials: {
                        client_id: config.clientId,
                        client_secret: config.clientSecret,
                        configured_at: new Date().toISOString()
                    }
                }, { onConflict: "tenant_id,portal_name" })
            clientId = config.clientId
            clientSecret = config.clientSecret
        } else {
            // Try to get credentials from the database
            const { data: globalConfig } = await supabase
                .from("portal_connections")
                .select("credentials")
                .eq("tenant_id", profile.tenant_id)
                .eq("portal_name", "mercadolibre")
                .maybeSingle()
            
            const creds = globalConfig?.credentials as any
            clientId = creds?.client_id || process.env.ML_CLIENT_ID || ""
            clientSecret = creds?.client_secret || process.env.ML_CLIENT_SECRET || ""
        }

        if (!clientId || clientId === "PLACEHOLDER_ID" || clientId.length < 5 || clientId.includes('@')) {
            throw new Error("Configuración inválida: No hemos encontrado un App ID válido de Mercado Libre. Por favor, ve a la sección técnica y asegúrate de ingresar el ID numérico de tu aplicación.")
        }

        // Use the origin passed from the client if available, otherwise fallback to env
        const baseUrl = origin || process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
        const redirectUri = encodeURIComponent(`${baseUrl}/api/auth/callback/mercadolibre`)
        const authUrl = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`
        
        return { type: 'redirect', url: authUrl }
    }

    // Standard handling for XML-based portals (Zonaprop/Argenprop)
    const baseUrl = origin || process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    const feedUrl = `${baseUrl}/api/feeds/${user.id}/zonaprop`

    const { data, error } = await supabase
        .from("portal_connections")
        .upsert({
            tenant_id: profile.tenant_id,
            user_id: user.id,
            portal_name: portalName as any,
            account_email: email,
            status: 'connected',
            credentials: {
                feed_url: feedUrl,
                connected_at: new Date().toISOString()
            }
        }, { onConflict: 'user_id,portal_name' })
        .select()
        .single()

    if (error) {
        console.error("Error connecting portal:", error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/portales")
    return { type: 'success', data, feedUrl }
}

export async function disconnectPortal(connectionId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error("Debes iniciar sesión.")

    const { error } = await supabase
        .from("portal_connections")
        .delete()
        .eq("id", connectionId)
        .eq("user_id", user.id)

    if (error) {
        console.error("Error disconnecting portal:", error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/portales")
}

export async function getPropertyPublications(propertyId: string): Promise<PropertyPublication[]> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return []

    const { data, error } = await supabase
        .from("property_publications")
        .select("*, portal_connections(portal_name, account_email)")
        .eq("property_id", propertyId)
        .eq("user_id", user.id)

    if (error) {
        console.error("Error fetching publications:", error)
        return []
    }
    return data || []
}

export async function publishToPortal(propertyId: string, connectionId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error("Debes iniciar sesión.")

    const { data: profile } = await supabase
        .from("profiles")
        .select("tenant_id")
        .eq("id", user.id)
        .single()

    if (!profile?.tenant_id) throw new Error("No tienes una inmobiliaria vinculada.")

    // Simulated network delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    const externalId = `EXT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    let externalUrl = ""

    const { data: conn } = await supabase
        .from("portal_connections")
        .select("portal_name")
        .eq("id", connectionId)
        .single()

    if (!conn) throw new Error("No se encontró la conexión.")

    if (conn.portal_name === 'mercadolibre') {
        externalUrl = `https://www.mercadolibre.com.ar/inmuebles/MLA-${externalId}`
    } else if (conn.portal_name === 'argenprop') {
        externalUrl = `https://www.argenprop.com/propiedad-${externalId}`
    } else if (conn.portal_name === 'zonaprop') {
        externalUrl = `https://www.zonaprop.com.ar/propiedades/zp-${externalId}.html`
    }

    const { data, error } = await supabase
        .from("property_publications")
        .upsert({
            tenant_id: profile.tenant_id,
            user_id: user.id,
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
        configured_at: new Date().toISOString(),
        // Simulated verified token after config
        access_token: `tok_v_${Math.random().toString(36).substring(7)}`,
        status_code: 200
    }

    if (existing) {
        result = await supabase
            .from("portal_connections")
            .update({
                credentials: newCredentials,
                status: 'connected', // Now connected as we have real keys
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
                status: 'connected', 
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
