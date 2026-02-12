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
    if (PUBLIC_ROUTES.some(route => pathname.startsWith(route))) {
        return supabaseResponse
    }

    // Check session for protected routes
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

        // If trying to access dashboard without session, redirect to login
        if (!user && (pathname.startsWith(PROTECTED_PREFIX) || pathname === '/')) {
            const loginUrl = new URL('/login', request.url)
            return NextResponse.redirect(loginUrl)
        }

        // If logged in and trying to access login/signup, redirect to dashboard
        if (user && (pathname === '/login' || pathname === '/signup')) {
            const dashboardUrl = new URL('/dashboard', request.url)
            return NextResponse.redirect(dashboardUrl)
        }
    }

    return supabaseResponse
}
