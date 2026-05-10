import { GoogleAdsApi, enums } from 'google-ads-api'
import { createClient } from '@/lib/supabase/server'

export async function getGoogleAdsClient() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('No authenticated user')

    const { data: profile } = await supabase
        .from('profiles')
        .select('google_ads_refresh_token, google_ads_customer_id')
        .eq('id', user.id)
        .single()

    if (!profile?.google_ads_refresh_token) {
        throw new Error('Google Ads not connected. Please connect your account first.')
    }

    const client = new GoogleAdsApi({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN!,
    })

    const customer = client.Customer({
        customer_id: profile.google_ads_customer_id || '',
        refresh_token: profile.google_ads_refresh_token,
    })

    return { customer, client, customerId: profile.google_ads_customer_id }
}

export async function getAccessibleCustomers(refreshToken: string) {
    const client = new GoogleAdsApi({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN!,
    })

    // This is a bit tricky with the library, sometimes we need to list accessible customers
    // The library usually requires a customer instance, but we can use the top-level client
    const customers = await client.listAccessibleCustomers(refreshToken)
    return customers
}
