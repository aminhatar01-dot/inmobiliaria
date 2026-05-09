import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        console.log("[Webhook] Received:", JSON.stringify(body, null, 2))

        const type = body.type || body.topic
        const action = body.action

        if (type !== 'payment' && type !== 'preapproval' && action !== 'payment.created' && action !== 'payment.updated') {
            console.log("[Webhook] Ignored non-payment/preapproval event:", type, action)
            return NextResponse.json({ received: true, ignored: true })
        }

        const dataId = body.data?.id
        if (!dataId) {
            console.error("[Webhook] Missing data.id in payload")
            return NextResponse.json({ error: "Missing data.id" }, { status: 400 })
        }

        const supabase = await createAdminClient()

        // 1. Preapproval Handling (Subscription Authorization)
        if (type === 'preapproval') {
            return handlePreapproval(dataId, supabase)
        }

        // 2. Payment Handling (as before)
        const eventId = `payment_${dataId}`
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
        const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
        if (!accessToken) {
            console.error("[Webhook] Missing MERCADOPAGO_ACCESS_TOKEN")
            return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 })
        }

        const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${dataId}`, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        })

        if (!mpResponse.ok) {
            const errorText = await mpResponse.text()
            console.error(`[Webhook] Failed to fetch payment ${dataId} from MP:`, errorText)
            return NextResponse.json({ error: "Payment not found in MP" }, { status: 404 })
        }

        const payment = await mpResponse.json()
        console.log("[Webhook] Payment data:", {
            id: payment.id,
            status: payment.status,
            status_detail: payment.status_detail,
            external_reference: payment.external_reference,
            transaction_amount: payment.transaction_amount,
            payer_email: payment.payer?.email
        })

        // Save event early to prevent race conditions
        await supabase.from('payment_events').insert({
            id: eventId,
            type: type || action,
            status: payment.status,
            payload: payment
        })

        // 3. Process Approved Payment
        if (payment.status === 'approved') {
            const externalReference = payment.external_reference // e.g., userId|||Profesional
            if (externalReference && externalReference.includes('|||')) {
                const [userId, planName] = externalReference.split('|||')

                console.log(`[Webhook] Processing approved payment for user ${userId}, plan ${planName}`)

                // Find the corresponding plan ID
                const { data: plan } = await supabase
                    .from('subscription_plans')
                    .select('id')
                    .eq('name', planName)
                    .single()

                if (plan) {
                    console.log(`[Webhook] Activating plan ${planName} (${plan.id}) for user ${userId}`)

                    // Update or Insert the user subscription
                    const currentPeriodEnd = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000).toISOString()

                    const { data: existingSub } = await supabase
                        .from('user_subscriptions')
                        .select('id')
                        .eq('user_id', userId)
                        .maybeSingle()

                    if (existingSub) {
                        const { error: updateError } = await supabase
                            .from('user_subscriptions')
                            .update({
                                plan_id: plan.id,
                                status: 'active',
                                current_period_end: currentPeriodEnd
                            })
                            .eq('id', existingSub.id)

                        if (updateError) {
                            console.error("[Webhook] Error updating subscription:", updateError)
                        } else {
                            console.log("[Webhook] Subscription updated successfully")
                        }
                    } else {
                        const { error: insertError } = await supabase
                            .from('user_subscriptions')
                            .insert({
                                user_id: userId,
                                plan_id: plan.id,
                                status: 'active',
                                current_period_end: currentPeriodEnd
                            })

                        if (insertError) {
                            console.error("[Webhook] Error inserting subscription:", insertError)
                        } else {
                            console.log("[Webhook] Subscription created successfully")
                        }
                    }

                    // Also update the tenant plan
                    const { data: profile } = await supabase
                        .from('profiles')
                        .select('tenant_id')
                        .eq('id', userId)
                        .single()

                    if (profile?.tenant_id) {
                        await supabase
                            .from('tenants')
                            .update({ plan: planName.toLowerCase() })
                            .eq('id', profile.tenant_id)
                        console.log("[Webhook] Tenant plan updated to:", planName.toLowerCase())
                    }
                } else {
                    console.error(`[Webhook] Plan not found: ${planName}`)
                }
            } else {
                console.error(`[Webhook] Invalid external_reference format: ${externalReference}`)
            }
        } else {
            console.log(`[Webhook] Payment ${dataId} status is '${payment.status}', not processing subscription`)
        }

        return NextResponse.json({ received: true, success: true })

    } catch (error: any) {
        console.error("[Webhook] Fatal error:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}

/**
 * Handles Subscription (Preapproval) events from Mercado Pago.
 */
async function handlePreapproval(id: string, supabase: any) {
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
    
    try {
        const response = await fetch(`https://api.mercadopago.com/preapproval/${id}`, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        })

        if (!response.ok) {
            console.error(`[Webhook] Error fetching preapproval ${id}:`, await response.text())
            return NextResponse.json({ error: "Preapproval not found" }, { status: 404 })
        }

        const preapproval = await response.json()
        console.log("[Webhook] Preapproval data:", preapproval.id, preapproval.status, preapproval.external_reference)

        const externalReference = preapproval.external_reference
        if (externalReference && externalReference.includes('|||')) {
            const [userId, planName] = externalReference.split('|||')

            if (preapproval.status === 'authorized') {
                const { data: plan } = await supabase
                    .from('subscription_plans')
                    .select('id')
                    .eq('name', planName)
                    .single()

                if (plan) {
                    const { data: existingSub } = await supabase
                        .from('user_subscriptions')
                        .select('id')
                        .eq('user_id', userId)
                        .maybeSingle()

                    const subData = {
                        user_id: userId,
                        plan_id: plan.id,
                        status: 'active',
                        payment_method_id: preapproval.id
                    }

                    if (existingSub) {
                        await supabase.from('user_subscriptions').update(subData).eq('id', existingSub.id)
                    } else {
                        await supabase.from('user_subscriptions').insert(subData)
                    }

                    const { data: profile } = await supabase.from('profiles').select('tenant_id').eq('id', userId).single()
                    if (profile?.tenant_id) {
                        await supabase.from('tenants').update({ plan: planName.toLowerCase() }).eq('id', profile.tenant_id)
                    }
                }
            } else if (preapproval.status === 'cancelled' || preapproval.status === 'paused') {
                console.log(`[Webhook] Subscription ${id} for user ${userId} was ${preapproval.status}`)
                await supabase
                    .from('user_subscriptions')
                    .update({ status: 'canceled' })
                    .eq('user_id', userId)
                    .eq('payment_method_id', id)
            }
        }

        return NextResponse.json({ received: true, success: true })
    } catch (error) {
        console.error("[Webhook] handlePreapproval error:", error)
        return NextResponse.json({ error: "Internal Error" }, { status: 500 })
    }
}
