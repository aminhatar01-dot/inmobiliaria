import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const PUBLIC_ROUTES = ['/login', '/signup', '/auth', '/api']
const PROTECTED_PREFIX = '/dashboard'

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    const pathname = request.nextUrl.pathname

    // Allow public routes without session check
    const isPublicRoute = PUBLIC_ROUTES.some(route => pathname.startsWith(route))
    const isPublicPortal = pathname.split('/').length > 1 && !isPublicRoute && !pathname.startsWith('/dashboard') && !['/agentes', '/propiedades', '/leads', '/visitas', '/marketing', '/configuracion'].some(p => pathname.startsWith(p))

    // Simplification: define what is NOT protected
    const publicPaths = ['/login', '/signup', '/auth', '/api']
    const isPublic = publicPaths.some(path => pathname.startsWith(path))

    // PROTECT: (dashboard) routes
    const protectedRoutes = ['/agentes', '/propiedades', '/leads', '/visitas', '/marketing', '/configuracion', '/dashboard']
    const isProtected = protectedRoutes.some(path => pathname.startsWith(path))

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            {
                cookies: {
                    getAll() {
                        return request.cookies.getAll()
                    },
                    setAll(cookiesToSet) {
                        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                        supabaseResponse = NextResponse.next({
                            request,
                        })
                        cookiesToSet.forEach(({ name, value, options }) =>
                            supabaseResponse.cookies.set(name, value, options)
                        )
                    },
                },
            }
        )

        const { data: { user } } = await supabase.auth.getUser()

        // If trying to access protected routes without session, redirect to login
        if (!user && isProtected) {
            const loginUrl = new URL('/login', request.url)
            return NextResponse.redirect(loginUrl)
        }

        // Redirect logged-in users FROM login/signup TO dashboard
        // We REMOVE the redirect from '/' to let everyone see the Landing Page
        if (user && (pathname === '/login' || pathname === '/signup')) {
            const dashboardUrl = new URL('/dashboard', request.url)
            return NextResponse.redirect(dashboardUrl)
        }
    }

    return supabaseResponse
}
