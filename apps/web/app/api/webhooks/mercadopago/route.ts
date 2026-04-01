import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const eventId = body.id?.toString()
        const type = body.type || body.topic

        if (!eventId) {
            return NextResponse.json({ error: "Missing event ID" }, { status: 400 })
        }

        // We only care about payments
        if (type !== 'payment') {
            return NextResponse.json({ received: true, ignored: true })
        }

        const dataId = body.data?.id
        if (!dataId) {
            return NextResponse.json({ error: "Missing data.id" }, { status: 400 })
        }

        const supabase = await createAdminClient()

        // 1. Idempotency Check (prevent duplicate processing)
        const { data: existingEvent } = await supabase
            .from('payment_events')
            .select('id')
            .eq('id', eventId)
            .maybeSingle()

        if (existingEvent) {
            console.log(`[Webhook] Event ${eventId} already processed`)
            return NextResponse.json({ received: true, already_processed: true })
        }

        // 2. Fetch Verified Payment Data directly from Mercado Pago
        // This implicitly validates the webhook since we query MP directly instead of trusting the payload
        const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
        if (!accessToken) {
            console.error("[Webhook] Missing MERCADOPAGO_ACCESS_TOKEN")
            return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 })
        }

        const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${dataId}`, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        })

        if (!mpResponse.ok) {
            console.error(`[Webhook] Failed to fetch payment ${dataId} from MP`)
            return NextResponse.json({ error: "Payment not found in MP" }, { status: 404 })
        }

        const payment = await mpResponse.json()

        // Save event early to prevent race conditions
        await supabase.from('payment_events').insert({
            id: eventId,
            type: type,
            status: payment.status,
            payload: payment
        })

        // 3. Process Approved Payment
        if (payment.status === 'approved') {
            const externalReference = payment.external_reference // e.g., userId|||Premium
            if (externalReference && externalReference.includes('|||')) {
                const [userId, planName] = externalReference.split('|||')

                // Find the corresponding plan ID
                const { data: plan } = await supabase
                    .from('subscription_plans')
                    .select('id')
                    .eq('name', planName)
                    .single()

                if (plan) {
                    console.log(`[Webhook] Approving plan ${planName} for user ${userId}`)

                    // Update or Insert the user subscription
                    // We give 31 days from today for the billing cycle
                    const currentPeriodEnd = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000).toISOString()

                    const { data: existingSub } = await supabase
                        .from('user_subscriptions')
                        .select('id')
                        .eq('user_id', userId)
                        .maybeSingle()

                    if (existingSub) {
                        await supabase
                            .from('user_subscriptions')
                            .update({
                                plan_id: plan.id,
                                status: 'active',
                                current_period_end: currentPeriodEnd
                            })
                            .eq('id', existingSub.id)
                    } else {
                        await supabase
                            .from('user_subscriptions')
                            .insert({
                                user_id: userId,
                                plan_id: plan.id,
                                status: 'active',
                                current_period_end: currentPeriodEnd
                            })
                    }
                } else {
                    console.error(`[Webhook] Plan not found for external_reference: ${externalReference}`)
                }
            }
        }

        return NextResponse.json({ received: true, success: true })

    } catch (error: any) {
        console.error("[Webhook] Fatal error:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}
