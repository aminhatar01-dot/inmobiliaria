import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getAccessibleCustomers } from '@/lib/services/google-ads'

export async function GET() {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const { data: profile } = await supabase
            .from('profiles')
            .select('google_ads_refresh_token')
            .eq('id', user.id)
            .single()

        if (!profile?.google_ads_refresh_token) {
            return NextResponse.json({ customers: [] })
        }

        const customers = await getAccessibleCustomers(profile.google_ads_refresh_token)
        return NextResponse.json({ customers })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const { customerId } = await request.json()
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const { error } = await supabase
            .from('profiles')
            .update({ google_ads_customer_id: customerId })
            .eq('id', user.id)

        if (error) throw error

        return NextResponse.json({ success: true })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
