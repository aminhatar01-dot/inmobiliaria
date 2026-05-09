"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { Property } from "@inmocms/shared"

export async function getProperties(): Promise<Property[]> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    const { data, error } = await supabase
        .from("properties")
        .select(`
            *,
            property_media (*)
        `)
        .eq("tenant_id", tenantId)
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching properties:", error)
        return []
    }

    return data
}

export async function getPropertyById(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return null

    const { data, error } = await supabase
        .from("properties")
        .select(`
            *,
            property_media (*)
        `)
        .eq("id", id)
        .eq("tenant_id", tenantId)
        .single()

    if (error) {
        console.error(`Error fetching property ${id}:`, error)
        return null
    }

    return data
}

export async function createProperty(formData: Partial<Property>, images: string[] = []) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized or no tenant assigned")

     // Validación de datos esenciales
    if (!formData.title || typeof formData.title !== "string" || formData.title.trim() === "") {
        throw new Error("Property title is required and must be a non-empty string")
    }

    if (!formData.status || !["available", "sold", "rented"].includes(formData.status)) {
        throw new Error("Invalid property status. Must be 'available', 'sold', or 'rented'")
    }

    if (formData.price !== undefined && (isNaN(formData.price) || formData.price < 0)) {
        throw new Error("Price must be a valid positive number")
    }

    // Remove undefined values
    const cleanData = Object.fromEntries(
        Object.entries(formData).filter(([_, v]) => v !== undefined && v !== "")
    );

    const { data: property, error } = await supabase
        .from("properties")
        .insert([{
            ...cleanData,
            tenant_id: tenantId,
            status: cleanData.status || "available",
            is_shared: cleanData.is_shared !== undefined ? cleanData.is_shared : true,
            is_verified: false
        }])
        .select()
        .single()

    if (error) {
        console.error("Error creating property:", error)
        throw new Error(error.message)
    }

    // Insert Images
    if (images.length > 0 && property) {
        const mediaInserts = images.map((url, index) => ({
            property_id: property.id,
            tenant_id: tenantId,
            url: url,
            type: 'image',
            order: index
        }));

        const { error: mediaError } = await supabase
            .from('property_media')
            .insert(mediaInserts);

        if (mediaError) {
            console.error("Error saving media:", mediaError)
            throw new Error(`Propiedad creada pero falló subir imágenes: ${mediaError.message}`)
        }
    }

    revalidatePath("/propiedades")
    return property
}

export async function updateProperty(id: string, formData: Partial<Property>, images?: string[]) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

     // Validación adicional para campos editados
    if (formData.title?.trim() === "") {
        throw new Error("Property title cannot be empty")
    }

    if (formData.status && !["available", "sold", "rented"].includes(formData.status)) {
        throw new Error("Invalid property status. Must be 'available', 'sold', or 'rented'")
    }

    if (formData.price !== undefined && (isNaN(formData.price) || formData.price < 0)) {
        throw new Error("Price must be a valid positive number")
    }

    // Remove undefined values
    const cleanData = Object.fromEntries(
        Object.entries(formData).filter(([_, v]) => v !== undefined && v !== "")
    );

    const { data: property, error } = await supabase
        .from("properties")
        .update(cleanData)
        .eq("id", id)
        .eq("tenant_id", tenantId)
        .select()
        .single()

    if (error) {
        console.error(`Error updating property ${id}:`, error)
        throw new Error(error.message)
    }

    // Sync Images if provided
    if (images && property) {
        // First delete old media
        await supabase
            .from('property_media')
            .delete()
            .eq('property_id', id)
            .eq('tenant_id', tenantId);

        // Insert new media list
        if (images.length > 0) {
            const mediaInserts = images.map((url, index) => ({
                property_id: id,
                tenant_id: tenantId,
                url: url,
                type: 'image',
                order: index
            }));

            const { error: mediaError } = await supabase
                .from('property_media')
                .insert(mediaInserts);

            if (mediaError) {
                console.error("Error updating media:", mediaError)
                throw new Error(`Propiedad actualizada pero falló subir imágenes: ${mediaError.message}`)
            }
        }
    }

    revalidatePath("/propiedades")
    revalidatePath(`/propiedades/${id}`)
    return property
}

export async function deleteProperty(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("properties")
        .delete()
        .eq("id", id)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error(`Error deleting property ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/propiedades")
}

export async function getSharedProperties(): Promise<Property[]> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    const { data, error } = await supabase
        .from("properties")
        .select(`
            *,
            property_media (*)
        `)
        .eq("is_shared", true)
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching shared properties:", error)
        return []
    }

    return data
}

export async function togglePropertySharing(id: string, isShared: boolean) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("properties")
        .update({ is_shared: isShared })
        .eq("id", id)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error(`Error toggling sharing for property ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/propiedades")
    revalidatePath("/propiedades/compartidas")
    revalidatePath(`/propiedades/${id}`)
}

export async function togglePropertyFeatured(id: string, isFeatured: boolean) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const { error } = await supabase
        .from("properties")
        .update({ is_featured: isFeatured })
        .eq("id", id)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error(`Error toggling featured for property ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/propiedades")
    revalidatePath("/")
}

export async function getAllPublicProperties(): Promise<any[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("properties")
        .select(`
            *,
            property_media (*),
            tenant:tenants (
                name,
                slug
            )
        `)
        .eq("status", "available")
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching all public properties:", error)
        return []
    }

    return data
}
