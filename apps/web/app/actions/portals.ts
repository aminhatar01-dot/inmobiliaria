"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { PortalConnection, PropertyPublication } from "@inmocms/shared"

export async function getPortalConnections(): Promise<PortalConnection[]> {
    try {
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
    } catch (err) {
        console.error("[PORTALS] Unexpected error in getPortalConnections:", err)
        return []
    }
}

export type PortalConnectResult = 
    | { type: 'redirect', url: string }
    | { type: 'success', data: any, feedUrl: string }
    | { type: 'error', message: string }

export async function getGlobalPortalConfig(portalName: string) {
    try {
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
    } catch (err) {
        console.error("[PORTALS] Unexpected error in getGlobalPortalConfig:", err)
        return null
    }
}

export async function connectPortal(portalName: string, email: string, config?: { clientId: string, clientSecret: string }, origin?: string): Promise<PortalConnectResult> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { type: 'error', message: "Debes iniciar sesión." }

    const { data: profile } = await supabase
        .from("profiles")
        .select("tenant_id")
        .eq("id", user.id)
        .single()

    if (!profile?.tenant_id) return { type: 'error', message: "No tienes una inmobiliaria vinculada." }

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
            return { type: 'error', message: "Configuración inválida: No hemos encontrado un App ID válido de Mercado Libre. Por favor, ve a la sección técnica y asegúrate de ingresar el ID numérico de tu aplicación." }
        }

        // Use the origin passed from the client if available, otherwise fallback to env
        const baseUrl = origin || process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
        const redirectUri = encodeURIComponent(`${baseUrl}/api/auth/callback/mercadolibre`)
        const stateStr = Math.random().toString(36).substring(7)
        const authUrl = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${stateStr}`
        
        return { type: 'redirect', url: authUrl }
    }

    // Standard handling for XML-based portals (Zonaprop/Argenprop)
    const baseUrl = origin || process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    const feedUrl = `${baseUrl}/api/feeds/${user.id}/${portalName}`

    // Fixed Server Error: Manual select/insert avoids Postgres unique constraint violation on per-agent fields
    const { data: existingConnection } = await supabase
        .from("portal_connections")
        .select("id")
        .eq("tenant_id", profile.tenant_id)
        .eq("user_id", user.id)
        .eq("portal_name", portalName)
        .maybeSingle()

    let connectionError;
    if (existingConnection) {
        const { error } = await supabase
            .from("portal_connections")
            .update({
                account_email: email,
                status: 'connected',
                credentials: {
                    feed_url: feedUrl,
                    connected_at: new Date().toISOString()
                },
                updated_at: new Date().toISOString()
            })
            .eq("id", existingConnection.id)
        connectionError = error;
    } else {
        const { error } = await supabase
            .from("portal_connections")
            .insert({
                tenant_id: profile.tenant_id,
                user_id: user.id,
                portal_name: portalName as any,
                account_email: email,
                status: 'connected',
                credentials: {
                    feed_url: feedUrl,
                    connected_at: new Date().toISOString()
                }
            })
        connectionError = error;
    }

    if (connectionError) {
        console.error("Error creating portal connection:", connectionError)
        return { type: 'error', message: connectionError.message }
    }

    revalidatePath("/marketing/portales")
    return { type: 'success', data: null, feedUrl }
}

export async function connectPortalManualToken(portalName: string, email: string, accessToken: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error("Debes iniciar sesión.")

    const { data: profile } = await supabase
        .from("profiles")
        .select("tenant_id")
        .eq("id", user.id)
        .single()

    if (!profile?.tenant_id) throw new Error("No tienes una inmobiliaria vinculada.")

    // Only for Mercado Libre manual bypass
    if (portalName !== "mercadolibre") throw new Error("Solo válido para Mercado Libre")

    // Get current global config to keep client_id if present
    const { data: existing } = await supabase
        .from("portal_connections")
        .select("credentials")
        .eq("tenant_id", profile.tenant_id)
        .eq("portal_name", "mercadolibre")
        .maybeSingle()

    const creds = existing?.credentials as any || {}

    // Use manual select/insert to avoid constraint mismatch with upsert
    const { data: existingConn } = await supabase
        .from("portal_connections")
        .select("id")
        .eq("tenant_id", profile.tenant_id)
        .eq("user_id", user.id)
        .eq("portal_name", "mercadolibre")
        .maybeSingle()

    let upsertError;
    if (existingConn) {
        const { error } = await supabase
            .from("portal_connections")
            .update({
                account_email: email,
                status: "connected",
                credentials: {
                    ...creds,
                    access_token: accessToken,
                    connected_at: new Date().toISOString()
                },
                updated_at: new Date().toISOString()
            })
            .eq("id", existingConn.id)
        upsertError = error;
    } else {
        const { error } = await supabase
            .from("portal_connections")
            .insert({
                tenant_id: profile.tenant_id,
                user_id: user.id,
                portal_name: "mercadolibre",
                account_email: email,
                status: "connected",
                credentials: {
                    ...creds,
                    access_token: accessToken,
                    connected_at: new Date().toISOString()
                }
            })
        upsertError = error;
    }

    if (upsertError) throw upsertError

    revalidatePath("/marketing/portales")
    return { success: true }
}

export async function disconnectPortal(connectionId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error("Debes iniciar sesión.")

    const { data: profile } = await supabase
        .from("profiles")
        .select("tenant_id")
        .eq("id", user.id)
        .single()

    if (!profile?.tenant_id) throw new Error("No se encontró el tenant_id.")

    const { error } = await supabase
        .from("portal_connections")
        .delete()
        .eq("id", connectionId)
        .eq("tenant_id", profile.tenant_id)

    if (error) {
        console.error("Error disconnecting portal:", error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/portales")
}

export async function getPropertyPublications(propertyId: string): Promise<PropertyPublication[]> {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return []

        const { data: profile } = await supabase
            .from("profiles")
            .select("tenant_id")
            .eq("id", user.id)
            .single()

        if (!profile?.tenant_id) return []

        const { data, error } = await supabase
            .from("property_publications")
            .select("*, portal_connections(portal_name, account_email)")
            .eq("property_id", propertyId)
            .eq("tenant_id", profile.tenant_id)

        if (error) {
            console.error("Error fetching publications:", error)
            return []
        }
        return data || []
    } catch (err) {
        console.error("[PORTALS] Unexpected error in getPropertyPublications:", err)
        return []
    }
}

export async function publishToPortal(propertyId: string, connectionId: string, customMlData?: any) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { success: false, error: "Debes iniciar sesión." }

    const { data: profile } = await supabase
        .from("profiles")
        .select("tenant_id")
        .eq("id", user.id)
        .single()

    if (!profile?.tenant_id) return { success: false, error: "No tienes una inmobiliaria vinculada." }

    // Simulated network delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Intercept native Mercado Libre manual connection
    let realConnectionId = connectionId;
    let portalName = "";
    
    if (connectionId === 'native-ml-assistant') {
        portalName = "mercadolibre";
        const { data: existingConnection } = await supabase
            .from("portal_connections")
            .select("id")
            .eq("tenant_id", profile.tenant_id)
            .eq("user_id", user.id)
            .eq("portal_name", "mercadolibre")
            .maybeSingle()

        if (existingConnection) {
            realConnectionId = existingConnection.id;
        } else {
            // Auto-create native connection entry
            const { data: newConnection, error: createError } = await supabase
                .from("portal_connections")
                .insert({
                    tenant_id: profile.tenant_id,
                    user_id: user.id,
                    portal_name: "mercadolibre",
                    account_email: user.email || "native@inmocms.com",
                    status: 'connected',
                    credentials: { native_integration: true }
                })
                .select("id")
                .single()
            
            if (createError) return { success: false, error: "No se pudo iniciar la conexión nativa: " + createError.message }
            realConnectionId = newConnection.id;
        }
    } else {
        const { data: conn } = await supabase
            .from("portal_connections")
            .select("portal_name")
            .eq("id", realConnectionId)
            .single()

        if (!conn) return { success: false, error: "No se encontró la conexión." }
        portalName = conn.portal_name;
    }

    let externalId = `EXT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    let externalUrl = ""

    if (portalName === 'mercadolibre') {
        const { data: conn } = await supabase
            .from("portal_connections")
            .select("credentials")
            .eq("id", realConnectionId)
            .single()

        const accessToken = (conn?.credentials as any)?.access_token;
        if (!accessToken) return { success: false, error: "No hay un token de acceso válido para esta cuenta de Mercado Libre. Por favor, vuelve a vincular la cuenta." }

        const { data: property } = await supabase.from('properties').select('*').eq('id', propertyId).single();
        if (!property) return { success: false, error: "Propiedad no encontrada." }

        // Mapeo básico de categorías de Mercado Libre (Argentina) - Categorías Hoja (Leaf)
        let mlCategory = "MLA401686"; // Departamentos > Venta > Propiedades Individuales
        if (property.operation_type === 'sale' && property.property_type === 'house') mlCategory = "MLA401685";
        if (property.operation_type === 'rent' && property.property_type === 'apartment') mlCategory = "MLA1473"; // Departamentos > Alquiler (Necesitaría hoja específica en prod)
        if (property.operation_type === 'rent' && property.property_type === 'house') mlCategory = "MLA1467";

        // Estructura requerida por la API real de Mercado Libre para Inmuebles
        const mlPayload = {
            title: (property.title || "Propiedad excelente oportunidad").substring(0, 60), 
            category_id: customMlData?.categoryId || mlCategory, 
            price: property.price || 100000,
            currency_id: property.currency === 'USD' ? 'USD' : 'ARS',
            available_quantity: 1,
            buying_mode: "classified",
            listing_type_id: "free",
            condition: "not_specified",
            pictures: property.images && property.images.length > 0 
                ? property.images.slice(0, 10).map((img: string) => ({ source: img }))
                : [{ source: "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.5/mercadolibre/logo__large_plus.png" }],
            location: customMlData?.location || {
                country: { id: "AR" },
                state: { id: "TUxBUENBUGw3M2E1" }, // Capital Federal
                city: { id: "TUxBQ0NBUGZlZG1sYQ" }, // Ciudad Autónoma de Buenos Aires
                neighborhood: { id: "TUxBQkFMTTMwNTBa" } // Almagro
            },
            attributes: customMlData?.attributes || [
                { id: "TOTAL_AREA", value_name: `${property.surface_total || 50} m²` },
                { id: "COVERED_AREA", value_name: `${property.surface_covered || 45} m²` },
                { id: "ROOMS", value_name: `${property.rooms || 2}` },
                { id: "BEDROOMS", value_name: `${property.bedrooms || 1}` },
                { id: "FULL_BATHROOMS", value_name: `${property.bathrooms || 1}` }
            ]
        };

        const response = await fetch("https://api.mercadolibre.com/items", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mlPayload)
        });

        const mlData = await response.json();

        if (!response.ok) {
            console.error("ML Publish Error:", mlData);
            // Formatear el error real de ML para que el usuario lo vea
            const mlErrorCauses = mlData.cause && mlData.cause.length > 0 
                ? mlData.cause.map((c: any) => c.message).join(", ") 
                : mlData.message;
            return { success: false, error: `Rechazado por Mercado Libre: ${mlErrorCauses}` }
        }

        externalId = mlData.id;
        externalUrl = mlData.permalink;
    } else if (portalName === 'argenprop') {
        externalUrl = `https://www.argenprop.com/propiedad-${externalId}`
    } else if (portalName === 'zonaprop') {
        externalUrl = `https://www.zonaprop.com.ar/propiedades/zp-${externalId}.html`
    }

    // Manual select/insert for publication to bypass Postgres unique constraint errors
    const { data: existingPub } = await supabase
        .from("property_publications")
        .select("id")
        .eq("property_id", propertyId)
        .eq("portal_connection_id", realConnectionId)
        .maybeSingle()

    let pubError;
    if (existingPub) {
        const { error } = await supabase
            .from("property_publications")
            .update({
                status: 'published',
                external_id: externalId,
                external_url: externalUrl,
                last_published_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            })
            .eq("id", existingPub.id)
        pubError = error;
    } else {
        const { error } = await supabase
            .from("property_publications")
            .insert({
                tenant_id: profile.tenant_id,
                property_id: propertyId,
                portal_connection_id: realConnectionId,
                status: 'published',
                external_id: externalId,
                external_url: externalUrl,
                last_published_at: new Date().toISOString()
            })
        pubError = error;
    }

    if (pubError) {
        console.error("Error publishing property:", pubError)
        return { success: false, error: pubError.message }
    }

    // Trigger automation
    try {
        const { processAutomationRules } = await import("./automations-engine");
        const { data: property } = await supabase.from('properties').select('*').eq('id', propertyId).single();
        processAutomationRules('property_published', profile.tenant_id, { property }).catch(err => {
            console.error("[PORTALS] Automation trigger failed:", err);
        });
    } catch (err) {
        console.error("[PORTALS] Could not trigger automation:", err);
    }

    revalidatePath("/marketing/portales")
    revalidatePath(`/propiedades/${propertyId}`)
    return { success: true }
}

export async function updatePortalConfig(portalName: string, config: { clientId: string, clientSecret: string, scope?: string }) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    const { data: { user } } = await supabase.auth.getUser()

    if (!tenantId) throw new Error("No tienes una inmobiliaria vinculada a tu cuenta.")
    if (!user) throw new Error("Debes iniciar sesión.")

    // Fetch existing connection or create a skeletal one to hold credentials
    const { data: existing } = await supabase
        .from("portal_connections")
        .select("id, credentials")
        .eq("tenant_id", tenantId)
        .eq("user_id", user.id)
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
                status: 'connected',
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
                user_id: user.id,
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
