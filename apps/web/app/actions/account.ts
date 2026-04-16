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
        data: { full_name: formData.name, avatar_url: formData.avatar_url, phone: formData.phone }
    })

    if (authError) throw new Error(authError.message)

    // Update Profile Table
    const { error: profileError } = await supabase
        .from('profiles')
        .update({
            name: formData.name,
            email: formData.email
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

export async function uploadAvatar(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Unauthorized')

    const file = formData.get('avatar') as File
    if (!file || file.size === 0) throw new Error('No se seleccionó ningún archivo')

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) throw new Error('El archivo supera el límite de 5MB')

    // Build a unique path: userId/timestamp.ext
    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
    const filePath = `${user.id}/${Date.now()}.${ext}`

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true, contentType: file.type })

    if (uploadError) throw new Error(`Error al subir imagen: ${uploadError.message}`)

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath)

    // Persist to auth metadata so DashboardHeader and ProfileForm pick it up immediately
    const { error: metaError } = await supabase.auth.updateUser({
        data: { avatar_url: publicUrl }
    })

    if (metaError) throw new Error(metaError.message)

    revalidatePath('/cuenta/perfil')
    return { success: true, url: publicUrl }
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
