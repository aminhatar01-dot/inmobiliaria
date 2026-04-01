import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const SUPERADMIN_EMAIL = 'aminhatar01@gmail.com'

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({ request })

    const pathname = request.nextUrl.pathname

    // Public paths that never require authentication
    const publicPaths = ['/login', '/signup', '/auth', '/api', '/demo-expired', '/portal', '/recuperar', '/invitacion']
    const isPublic = publicPaths.some(path => pathname.startsWith(path))

    // Protected dashboard routes
    const protectedRoutes = ['/agentes', '/propiedades', '/leads', '/visitas', '/marketing', '/configuracion', '/dashboard', '/admin', '/mensajes', '/pipeline', '/clientes', '/documentos', '/tareas', '/ajustes', '/cuenta']
    const isProtected = protectedRoutes.some(path => pathname.startsWith(path))

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        return supabaseResponse
    }

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() { return request.cookies.getAll() },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({ request })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    const { data: { user } } = await supabase.auth.getUser()

    // Redirect unauthenticated users from protected routes to login
    if (!user && isProtected) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('next', pathname)
        return NextResponse.redirect(loginUrl)
    }

    // Redirect logged-in users away from login/signup screens
    if (user && (pathname === '/login' || pathname === '/signup')) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    // -----------------------------------------------------------------------
    // Superadmin & Demo session checks (only for logged-in users on protected routes)
    // -----------------------------------------------------------------------
    if (user && isProtected) {
        const userEmail = user.email || ''

        // Superadmin always has full access — skip all further checks
        if (userEmail === SUPERADMIN_EMAIL) {
            return supabaseResponse
        }

        // Check if the user is a confirmed superadmin via their profile
        const { data: profile } = await supabase
            .from('profiles')
            .select('is_superadmin')
            .eq('id', user.id)
            .single()

        if (profile?.is_superadmin) {
            return supabaseResponse
        }

        // Check demo session expiry
        try {
            const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY
            if (adminKey) {
                const { createServerClient: createAdmin } = await import('@supabase/ssr')
                const adminSupabase = createAdmin(
                    process.env.NEXT_PUBLIC_SUPABASE_URL!,
                    adminKey,
                    { cookies: { getAll: () => [], setAll: () => {} } }
                )

                const { data: demoSession } = await adminSupabase
                    .from('demo_sessions')
                    .select('expires_at')
                    .eq('email', userEmail)
                    .single()

                if (demoSession) {
                    const expired = new Date() > new Date(demoSession.expires_at)
                    if (expired && pathname !== '/demo-expired') {
                        return NextResponse.redirect(new URL('/demo-expired', request.url))
                    }
                }
            }
        } catch {
            // If demo check fails, don't block the user — log and continue
            console.warn('[MIDDLEWARE] Demo session check failed — allowing access')
        }
    }

    return supabaseResponse
}
