import { createClient, getTenantId } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

/**
 * GET /api/auth/google/connect
 * 
 * Inicia el flujo OAuth2 directo con Google (sin Supabase) para obtener tokens
 * con permisos de Gmail y Calendar que puedan ser refrescados automáticamente.
 * 
 * Requiere GOOGLE_CLIENT_ID configurado en variables de entorno.
 */
export async function GET(request: Request) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)
    const { data: { user } } = await supabase.auth.getUser()

    if (!tenantId || !user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    const clientId = process.env.GOOGLE_CLIENT_ID
    if (!clientId) {
        return NextResponse.json(
            { error: 'GOOGLE_CLIENT_ID no configurado en el servidor.' },
            { status: 500 }
        )
    }

    const { origin } = new URL(request.url)
    const redirectUri = `${origin}/api/auth/google/callback`

    const scopes = [
        'https://www.googleapis.com/auth/gmail.send',
        'https://www.googleapis.com/auth/calendar.events',
        'https://www.googleapis.com/auth/contacts'
    ].join(' ')

    const params = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        response_type: 'code',
        scope: scopes,
        access_type: 'offline',
        prompt: 'consent',        // Fuerza obtener refresh_token cada vez
        state: tenantId           // Pasamos el tenant_id para recuperarlo en el callback
    })

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
    return NextResponse.redirect(authUrl)
}
