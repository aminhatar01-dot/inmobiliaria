'use server'

import { createClient, getTenantId } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function getProfile() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return null

    const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

    if (error) {
        console.error('Error fetching profile:', error)
        return null
    }

    return {
        ...user,
        ...profile,
        profile // Keep for backward compatibility if needed
    }
}

export async function updateProfile(formData: { name: string, email: string, phone?: string, avatar_url?: string }) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Unauthorized')

    // Update Auth Email if changed
    if (formData.email !== user.email) {
        const { error: emailError } = await supabase.auth.updateUser({
            email: formData.email
        })
        if (emailError) throw new Error(`Error al actualizar email: ${emailError.message}`)
    }

    // Update Auth Metadata
    const { error: authError } = await supabase.auth.updateUser({
        data: { full_name: formData.name, avatar_url: formData.avatar_url }
    })

    if (authError) throw new Error(authError.message)

    // Update Profile Table
    const { error: profileError } = await supabase
        .from('profiles')
        .update({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            avatar_url: formData.avatar_url
        })
        .eq('id', user.id)

    if (profileError) throw new Error(profileError.message)

    revalidatePath('/cuenta/perfil')
    return { success: true }
}

export async function getSubscription() {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return null

    const { data: tenant, error } = await supabase
        .from('tenants')
        .select('*')
        .eq('id', tenantId)
        .single()

    if (error) {
        console.error('Error fetching subscription:', error)
        return null
    }

    return tenant
}

export async function updateSubscription(plan: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error('Unauthorized')

    const { error } = await supabase
        .from('tenants')
        .update({ plan })
        .eq('id', tenantId)

    if (error) throw new Error(error.message)

    revalidatePath('/cuenta/plan')
    return { success: true }
}
