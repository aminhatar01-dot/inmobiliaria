import { NextResponse } from 'next/server'
import { getGoogleAdsClient } from '@/lib/services/google-ads'

export async function GET() {
    try {
        const { customer, customerId } = await getGoogleAdsClient()

        if (!customerId) {
            return NextResponse.json({ error: 'No Customer ID selected' }, { status: 400 })
        }

        // Query metrics for the last 30 days
        const query = `
            SELECT 
                metrics.clicks, 
                metrics.impressions, 
                metrics.cost_micros,
                metrics.average_cpc,
                segments.date
            FROM campaign
            WHERE segments.date DURING LAST_30_DAYS
            LIMIT 100
        `

        const results = await customer.query(query)

        // Aggregate results
        const summary = results.reduce((acc: any, row: any) => {
            acc.clicks += parseInt(row.metrics.clicks || '0')
            acc.impressions += parseInt(row.metrics.impressions || '0')
            acc.cost_micros += parseInt(row.metrics.cost_micros || '0')
            return acc
        }, { clicks: 0, impressions: 0, cost_micros: 0 })

        return NextResponse.json({
            clicks: summary.clicks,
            impressions: summary.impressions,
            cpc: summary.clicks > 0 ? (summary.cost_micros / summary.clicks / 1000000).toFixed(2) : 0,
            cost: (summary.cost_micros / 1000000).toFixed(2)
        })
    } catch (error: any) {
        console.error('[ADS-METRICS-API] Error:', error.message)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
