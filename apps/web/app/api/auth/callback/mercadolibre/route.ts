import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")
    const error = requestUrl.searchParams.get("error")
    const origin = requestUrl.origin

    if (error) {
        return NextResponse.redirect(new URL("/marketing/portales?error=" + error, origin))
    }

    if (!code) {
        return NextResponse.redirect(new URL("/marketing/portales?error=missing_code", origin))
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return NextResponse.redirect(new URL("/login", origin))
    }

    try {
        // 1. Get the user's profile to find tenant_id
        const { data: profile } = await supabase
            .from("profiles")
            .select("tenant_id")
            .eq("id", user.id)
            .single()

        if (!profile?.tenant_id) throw new Error("No tenant found")

        // 2. Fetch the REAL credentials from the database
        const { data: portalConn } = await supabase
            .from("portal_connections")
            .select("credentials")
            .eq("tenant_id", profile.tenant_id)
            .eq("portal_name", "mercadolibre")
            .maybeSingle()

        const creds = portalConn?.credentials as any
        const clientId = creds?.client_id || process.env.ML_CLIENT_ID || ""
        const clientSecret = creds?.client_secret || process.env.ML_CLIENT_SECRET || ""

        if (!clientId || !clientSecret) {
            throw new Error("No ML credentials found for this tenant")
        }

        // 3. Exchange code for token using the REAL credentials
        const redirectUri = `${origin}/api/auth/callback/mercadolibre`
        const tokenResponse = await fetch("https://api.mercadolibre.com/oauth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                client_id: clientId,
                client_secret: clientSecret,
                code: code,
                redirect_uri: redirectUri
            })
        })

        const tokenData = await tokenResponse.json()

        if (!tokenResponse.ok) {
            console.error("ML Token Error:", tokenData)
            throw new Error(tokenData.message || `Token exchange failed: ${tokenData.error}`)
        }

        // 4. Save connection with real tokens
        const { error: upsertError } = await supabase
            .from("portal_connections")
            .upsert({
                tenant_id: profile.tenant_id,
                user_id: user.id,
                portal_name: "mercadolibre",
                account_email: String(tokenData.user_id),
                status: "connected",
                credentials: {
                    client_id: clientId,
                    client_secret: clientSecret,
                    access_token: tokenData.access_token,
                    refresh_token: tokenData.refresh_token,
                    token_type: tokenData.token_type,
                    expires_in: tokenData.expires_in,
                    scope: tokenData.scope,
                    user_id: tokenData.user_id,
                    connected_at: new Date().toISOString()
                },
                updated_at: new Date().toISOString()
            }, { onConflict: "user_id,portal_name" })

        if (upsertError) throw upsertError

        return NextResponse.redirect(new URL("/marketing/portales?success=mercadolibre", origin))

    } catch (err: any) {
        console.error("ML Auth Error:", err)
        return NextResponse.redirect(new URL("/marketing/portales?error=auth_failed&detail=" + encodeURIComponent(err.message || "unknown"), origin))
    }
}
