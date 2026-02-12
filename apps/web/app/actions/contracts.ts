'use server'

import { createClient } from "@/lib/supabase/server"
import { Contract } from "@inmocms/shared"
import { revalidatePath } from "next/cache"

const DEV_TENANT_ID = '00000000-0000-0000-0000-000000000001'

async function getTenantId() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return DEV_TENANT_ID
    return user.user_metadata.tenant_id || DEV_TENANT_ID
}

export async function getContracts() {
    const supabase = await createClient()
    const tenantId = await getTenantId()

    const { data, error } = await supabase
        .from('contracts')
        .select(`
            *,
            property:properties(title, address),
            lead:leads(name, email)
        `)
        .eq('tenant_id', tenantId)
        .order('created_at', { ascending: false })

    if (error) throw new Error(error.message)
    return data as (Contract & { property?: { title: string, address: string }, lead?: { name: string, email: string } })[]
}

export async function getContractById(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId()

    const { data, error } = await supabase
        .from('contracts')
        .select('*')
        .eq('id', id)
        .eq('tenant_id', tenantId)
        .single()

    if (error) throw new Error(error.message)
    return data as Contract
}

export async function createContract(formData: FormData) {
    const supabase = await createClient()
    const tenantId = await getTenantId()

    const title = formData.get('title') as string
    const type = formData.get('type') as string
    const propertyId = formData.get('property_id') as string || null
    const leadId = formData.get('lead_id') as string || null
    const content = formData.get('content') as string

    const { error } = await supabase
        .from('contracts')
        .insert({
            tenant_id: tenantId,
            title,
            type,
            property_id: propertyId,
            lead_id: leadId,
            content,
            status: 'draft'
        })

    if (error) throw new Error(error.message)
    revalidatePath('/documentos')
}

export async function updateContract(id: string, formData: FormData) {
    const supabase = await createClient()
    const tenantId = await getTenantId()

    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const status = formData.get('status') as string

    const { error } = await supabase
        .from('contracts')
        .update({
            title,
            content,
            status,
            updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .eq('tenant_id', tenantId)

    if (error) throw new Error(error.message)
    revalidatePath('/documentos')
    revalidatePath(`/documentos/${id}`)
}

export async function deleteContract(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId()

    const { error } = await supabase
        .from('contracts')
        .delete()
        .eq('id', id)
        .eq('tenant_id', tenantId)

    if (error) throw new Error(error.message)
    revalidatePath('/documentos')
}
