import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

/**
 * GET /api/auth/google/callback
 * 
 * Recibe el código de autorización de Google OAuth2, lo intercambia por tokens
 * y los persiste en tenant_communication_settings para el tenant correspondiente.
 */
export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    const state = searchParams.get('state') // tenant_id
    const error = searchParams.get('error')

    if (error) {
        console.error('[GOOGLE-CALLBACK] Error de Google:', error)
        return NextResponse.redirect(`${origin}/ajustes?google_error=${encodeURIComponent(error)}`)
    }

    if (!code) {
        return NextResponse.redirect(`${origin}/ajustes?google_error=missing_code`)
    }

    const tenantId = state
    if (!tenantId) {
        return NextResponse.redirect(`${origin}/ajustes?google_error=missing_tenant`)
    }

    // Verificar que el usuario pertenece a este tenant
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return NextResponse.redirect(`${origin}/login`)
    }

    const { data: profile } = await supabase
        .from('profiles')
        .select('tenant_id')
        .eq('id', user.id)
        .single()

    if (profile?.tenant_id !== tenantId) {
        console.error('[GOOGLE-CALLBACK] Tenant mismatch. Profile:', profile?.tenant_id, 'State:', tenantId)
        return NextResponse.redirect(`${origin}/ajustes?google_error=tenant_mismatch`)
    }

    // Intercambiar code por tokens
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET
    const redirectUri = `${origin}/api/auth/google/callback`

    if (!clientId || !clientSecret) {
        console.error('[GOOGLE-CALLBACK] Faltan GOOGLE_CLIENT_ID o GOOGLE_CLIENT_SECRET')
        return NextResponse.redirect(`${origin}/ajustes?google_error=server_config`)
    }

    try {
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code'
            }).toString()
        })

        const tokenData = await tokenResponse.json()

        if (!tokenResponse.ok) {
            console.error('[GOOGLE-CALLBACK] Error al intercambiar code:', tokenData)
            const msg = tokenData.error_description || tokenData.error || 'token_exchange_failed'
            return NextResponse.redirect(`${origin}/ajustes?google_error=${encodeURIComponent(msg)}`)
        }

        // Guardar tokens en tenant_communication_settings (para Gmail/Calendar del tenant)
        const { error: upsertError } = await supabase
            .from('tenant_communication_settings')
            .upsert({
                tenant_id: tenantId,
                google_access_token: tokenData.access_token,
                google_refresh_token: tokenData.refresh_token || undefined,
                updated_at: new Date().toISOString()
            }, {
                onConflict: 'tenant_id',
                defaultToNull: false
            } as any)

        if (upsertError) {
            console.error('[GOOGLE-CALLBACK] Error al guardar tokens en tenant settings:', upsertError)
        }

        // Guardar refresh_token en profiles (para Google Ads personal del usuario)
        if (tokenData.refresh_token) {
            const { error: profileUpdateError } = await supabase
                .from('profiles')
                .update({
                    google_ads_refresh_token: tokenData.refresh_token,
                    updated_at: new Date().toISOString()
                })
                .eq('id', user.id)

            if (profileUpdateError) {
                console.error('[GOOGLE-CALLBACK] Error al guardar token en perfil:', profileUpdateError)
            }
        }

        if (upsertError) {
            return NextResponse.redirect(`${origin}/ajustes?google_error=db_save_failed`)
        }

        console.log('[GOOGLE-CALLBACK] ✅ Google conectado exitosamente para tenant:', tenantId)
        return NextResponse.redirect(`${origin}/ajustes?google_connected=1`)
    } catch (err: any) {
        console.error('[GOOGLE-CALLBACK] Error inesperado:', err.message)
        return NextResponse.redirect(`${origin}/ajustes?google_error=${encodeURIComponent(err.message)}`)
    }
}
