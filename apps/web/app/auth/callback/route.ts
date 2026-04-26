import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Si el usuario acaba de iniciar sesión y no tiene tenant, redirigir a crear cuenta
      const { data: profile } = await supabase
        .from('profiles')
        .select('tenant_id')
        .eq('id', data.session.user.id)
        .single()
        
      if (!profile?.tenant_id) {
          return NextResponse.redirect(`${origin}/cuenta/plan`)
      }
        
      // Guardar tokens de Google para acceder a Calendar / Gmail en segundo plano
      if (data.session.provider_token && profile?.tenant_id) {
          await supabase.from('tenant_communication_settings').upsert({
              tenant_id: profile.tenant_id,
              google_access_token: data.session.provider_token,
              google_refresh_token: data.session.provider_refresh_token || null,
              updated_at: new Date().toISOString()
          }, { onConflict: 'tenant_id' })
      }
      
      return NextResponse.redirect(`${origin}${next}`)
    }
    console.error("Auth callback error:", error.message)
  }

  return NextResponse.redirect(`${origin}/login?error=auth-callback-failed`)
}
