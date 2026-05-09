'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export type PlanLimits = {
    max_properties: number
    max_leads: number
    max_content_creations_per_month: number
    max_automations: number
    max_responses_per_automation: number
    allows_team_invites: boolean
}

/**
 * Gets the current plan and limits for the authenticated user.
 */
export async function getUserPlanLimits(): Promise<{ planName: string, limits: PlanLimits }> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error("Not authenticated")

    // Check if user is an invitee of another subscription
    const { data: invite } = await supabase
        .from('subscription_invites')
        .select('subscription_id')
        .eq('invitee_id', user.id)
        .single()

    const subscriptionQuery = supabase
        .from('user_subscriptions')
        .select(`
            plan_id,
            subscription_plans (
                name,
                max_properties,
                max_leads,
                max_content_creations_per_month,
                max_automations,
                max_responses_per_automation,
                allows_team_invites
            )
        `)

    if (invite) {
        subscriptionQuery.eq('id', invite.subscription_id)
    } else {
        subscriptionQuery.eq('user_id', user.id)
    }

    const { data: subscription } = await subscriptionQuery.single()

    if (!subscription) {
        // Default to free plan if not found
        const { data: freePlan } = await supabase
            .from('subscription_plans')
            .select('*')
            .eq('name', 'Gratuito')
            .single()

        return {
            planName: 'Gratuito',
            limits: freePlan as unknown as PlanLimits
        }
    }

    const plan = subscription.subscription_plans as any
    return {
        planName: plan.name,
        limits: plan as PlanLimits
    }
}

export type SubscriptionStatus = {
    planName: string
    status: 'active' | 'canceled' | 'past_due' | 'none'
    currentPeriodStart: string | null
    currentPeriodEnd: string | null
    priceArs: number
    planId: string | null
}

/**
 * Gets the full subscription status for the authenticated user.
 */
export async function getSubscriptionStatus(): Promise<SubscriptionStatus> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error("Not authenticated")

    const { data: subscription } = await supabase
        .from('user_subscriptions')
        .select(`
            id,
            status,
            current_period_start,
            current_period_end,
            plan_id,
            subscription_plans (
                name,
                price_ars
            )
        `)
        .eq('user_id', user.id)
        .single()

    if (!subscription) {
        return {
            planName: 'Gratuito',
            status: 'none',
            currentPeriodStart: null,
            currentPeriodEnd: null,
            priceArs: 0,
            planId: null
        }
    }

    const plan = subscription.subscription_plans as any
    return {
        planName: plan?.name || 'Gratuito',
        status: subscription.status as SubscriptionStatus['status'],
        currentPeriodStart: subscription.current_period_start,
        currentPeriodEnd: subscription.current_period_end,
        priceArs: plan?.price_ars || 0,
        planId: subscription.plan_id
    }
}

/**
 * Validates if the user can perform an action based on their limits.
 */
export async function checkFeatureLimit(feature: 'properties' | 'leads'): Promise<boolean> {
    const { limits } = await getUserPlanLimits()
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (feature === 'properties') {
        const { count } = await supabase
            .from('properties')
            .select('*', { count: 'exact', head: true })
            .eq('created_by', user!.id)

        return (count || 0) < limits.max_properties
    }

    if (feature === 'leads') {
        const { count } = await supabase
            .from('leads')
            .select('*', { count: 'exact', head: true })
            .eq('created_by', user!.id)

        return (count || 0) < limits.max_leads
    }

    return false
}

/**
 * Invites a user to the Agency plan (Tier 3).
 * Returns the invitation link.
 */
export async function inviteToAgency(inviteeEmail: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const { limits } = await getUserPlanLimits()

    if (!limits.allows_team_invites) {
        throw new Error("Tu plan no permite invitaciones de equipo.")
    }

    // 1. Get current user's subscription
    const { data: sub } = await supabase
        .from('user_subscriptions')
        .select('id')
        .eq('user_id', user!.id)
        .single()

    if (!sub) throw new Error("No tienes una suscripción activa.")

    // 2. Create the invite
    const { data: invite, error } = await supabase
        .from('subscription_invites')
        .insert({
            inviter_id: user!.id,
            invitee_email: inviteeEmail,
            subscription_id: sub.id,
            status: 'pending'
        })
        .select('token')
        .single()

    if (error) {
        if (error.code === '23505') throw new Error("Ya existe una invitación pendiente para este correo.")
        throw error
    }

    const inviteLink = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://inmocms.com'}/invitacion/${invite.token}`

    revalidatePath('/cuenta/equipo')
    return { success: true, inviteLink }
}

/**
 * Initializes or updates a user's agency and subscription plan.
 */
export async function initializeSubscription(planName: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error("Not authenticated")

    // 1. Get Plan Details
    const { data: plan, error: planError } = await supabase
        .from('subscription_plans')
        .select('*')
        .eq('name', planName)
        .single()

    if (planError) {
        console.error("Plan fetch error:", planError)
        throw new Error(`Plan no encontrado: ${planError.message} (Plan: ${planName})`)
    }

    // 2. Get User Profile & Metadata
    const { data: profile } = await supabase
        .from('profiles')
        .select('tenant_id, name')
        .eq('id', user.id)
        .single()

    const userMetadata = user.user_metadata || {}
    const name = profile?.name || userMetadata.full_name || 'Agente'
    const agency_name = userMetadata.agency_name || `${name}'s Agency`

    let tenantId = profile?.tenant_id

    // 3. Create or Update Tenant
    const tenantData = {
        name: agency_name,
        plan: planName.toLowerCase(),
        default_currency: 'ARS'
    }

    if (!tenantId) {
        const { data: tenant, error: tenantError } = await supabase
            .from('tenants')
            .insert({
                ...tenantData,
                slug: `${agency_name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${Math.random().toString(36).substring(2, 7)}`
            })
            .select()
            .single()

        if (tenantError) throw new Error("Error al crear la inmobiliaria: " + tenantError.message)
        tenantId = tenant.id

        // Update Profile with new tenant_id
        await supabase.from('profiles').update({ tenant_id: tenantId }).eq('id', user.id)
    } else {
        const { error: tenantUpdateError } = await supabase
            .from('tenants')
            .update(tenantData)
            .eq('id', tenantId)

        if (tenantUpdateError) throw new Error("Error al actualizar la inmobiliaria: " + tenantUpdateError.message)
    }

    // 4. Create or Update Subscription
    const { data: existingSub } = await supabase
        .from('user_subscriptions')
        .select('id')
        .eq('user_id', user.id)
        .maybeSingle()

    const subData = {
        user_id: user.id,
        plan_id: plan.id,
        status: 'active',
        current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    }

    if (existingSub) {
        const { error: subUpdateError } = await supabase
            .from('user_subscriptions')
            .update(subData)
            .eq('id', existingSub.id)

        if (subUpdateError) throw new Error("Error al actualizar suscripción: " + subUpdateError.message)
    } else {
        const { error: subInsertError } = await supabase
            .from('user_subscriptions')
            .insert(subData)

        if (subInsertError) throw new Error("Error al activar suscripción: " + subInsertError.message)
    }

    revalidatePath('/dashboard')
    revalidatePath('/cuenta/plan')

    return { success: true }
}

/**
 * Gets invitation details by token.
 */
export async function getInvitationByToken(token: string) {
    const supabase = await createClient()

    const { data: invite, error } = await supabase
        .from('subscription_invites')
        .select(`
            id,
            invitee_email,
            status,
            expires_at,
            tenants!subscription_invites_subscription_id_fkey (
                name
            ),
            profiles!subscription_invites_inviter_id_fkey (
                name
            )
        `)
        .eq('token', token)
        .single()

    if (error || !invite) return null

    // Check expiration
    if (new Date(invite.expires_at) < new Date()) {
        return { expired: true }
    }

    return invite
}

/**
 * Accepts an invitation.
 * Links the current user to the inviter's agency.
 */
export async function acceptInvitation(token: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error("Debes iniciar sesión para aceptar la invitación.")

    // 1. Get invite details
    const { data: invite, error: inviteError } = await supabase
        .from('subscription_invites')
        .select('*')
        .eq('token', token)
        .eq('status', 'pending')
        .single()

    if (inviteError || !invite) throw new Error("Invitación no válida o ya aceptada.")

    // 2. Get Subscription Details to find tenant_id
    const { data: sub } = await supabase
        .from('user_subscriptions')
        .select('user_id')
        .eq('id', invite.subscription_id)
        .single()

    if (!sub) throw new Error("No se pudo encontrar la suscripción original.")

    const { data: inviterProfile } = await supabase
        .from('profiles')
        .select('tenant_id')
        .eq('id', sub.user_id)
        .single()

    if (!inviterProfile?.tenant_id) throw new Error("No se pudo encontrar la inmobiliaria de origen.")

    // 3. Update invitee's profile with tenant_id
    const { error: profileError } = await supabase
        .from('profiles')
        .update({ tenant_id: inviterProfile.tenant_id })
        .eq('id', user.id)

    if (profileError) throw new Error("Error al unirse a la inmobiliaria: " + profileError.message)

    // 4. Update invite status and link invitee_id
    await supabase
        .from('subscription_invites')
        .update({
            status: 'accepted',
            invitee_id: user.id
        })
        .eq('id', invite.id)

    revalidatePath('/dashboard')
    revalidatePath('/cuenta/equipo')

    return { success: true }
}

/**
 * Creates a Mercado Pago Checkout Pro Preference.
 * Returns the init_point for redirection.
 */
export async function createCheckoutPreference(planName: string, price: number) {
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://inmobiliaria-orpin-one.vercel.app'
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error("Debes iniciar sesión para suscribirte.")

    // FALLBACK: If no access token, we redirect to our local Mock Checkout Page
    if (!accessToken) {
        console.warn("MERCADOPAGO_ACCESS_TOKEN not found. Using local mock checkout.")
        return {
            success: true,
            init_point: `${siteUrl}/cuenta/plan/checkout?plan=${planName}&price=${price}`
        }
    }

    try {
        // Use Checkout Pro (Preference) for a reliable one-time payment
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: [
                    {
                        title: `InmoCMS - Plan ${planName}`,
                        description: `Suscripción mensual al plan ${planName} de InmoCMS`,
                        quantity: 1,
                        unit_price: price,
                        currency_id: "ARS"
                    }
                ],
                // Note: Do NOT include payer.email here - if the admin's email matches
                // the seller account, MercadoPago blocks the payment (self-payment restriction).
                // The user ID is tracked via external_reference instead.
                external_reference: `${user.id}|||${planName}`,
                back_urls: {
                    success: `${siteUrl}/cuenta/plan/success?plan=${planName}`,
                    failure: `${siteUrl}/cuenta/plan?status=failure`,
                    pending: `${siteUrl}/cuenta/plan/success?plan=${planName}&status=pending`
                },
                auto_return: "approved",
                notification_url: `${siteUrl}/api/webhooks/mercadopago`,
                statement_descriptor: "INMOCMS"
            })
        })

        const data = await response.json()
        
        if (!response.ok) {
            console.error("MP Preference Error Response:", JSON.stringify(data, null, 2))
            throw new Error(data.message || data.error || "Error creating MP preference")
        }

        console.log("[MP] Preference created:", data.id, "init_point:", data.init_point)

        return {
            success: true,
            init_point: data.init_point
        }
    } catch (error: any) {
        console.error("MP Preference Error:", error)
        throw new Error("No se pudo generar el link de pago: " + error.message)
    }
}

/**
 * Creates a Mercado Pago Preapproval (Recurring Subscription).
 */
export async function createRecurringSubscription(planName: string, price: number) {
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://inmobiliaria-orpin-one.vercel.app'
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error("Debes iniciar sesión para suscribirte.")
    if (!accessToken) throw new Error("Servicio de pagos no configurado.")

    try {
        const response = await fetch('https://api.mercadopago.com/preapproval', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                reason: `InmoCMS - Plan ${planName} (Débito Automático)`,
                auto_recurring: {
                    frequency: 1,
                    frequency_type: 'months',
                    transaction_amount: price,
                    currency_id: 'ARS'
                },
                // Note: payer_email is required for preapproval.
                // If testing with the same seller email, it might block the payment button as well.
                payer_email: user.email,
                back_url: `${siteUrl}/cuenta/plan/success?plan=${planName}&type=recurring`,
                external_reference: `${user.id}|||${planName}`,
                status: 'pending'
            })
        })

        const data = await response.json()
        
        if (!response.ok) {
            console.error("MP Preapproval Error:", JSON.stringify(data, null, 2))
            throw new Error(data.message || data.error || "Error al crear suscripción recurrente")
        }

        return {
            success: true,
            init_point: data.init_point
        }
    } catch (error: any) {
        console.error("MP Preapproval Error:", error)
        throw new Error("No se pudo generar el link de débito automático: " + error.message)
    }
}
