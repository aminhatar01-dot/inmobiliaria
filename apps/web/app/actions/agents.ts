"use server"

import { createClient, createAdminClient, getTenantId } from "@/lib/supabase/server"

export async function getAgents() {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    // Fetch profiles with roles and branches
    // We use join through user_role_assignments -> roles and user_branches -> branches
    const { data: profiles, error: profileError } = await supabase
        .from("profiles")
        .select(`
            *,
            user_role_assignments (
                roles (
                    id,
                    name
                )
            ),
            user_branches (
                branches (
                    id,
                    name
                )
            )
        `)
        .eq("tenant_id", tenantId)
        .order("name", { ascending: true })

    if (profileError) {
        console.error("Error fetching agents:", profileError)
        return []
    }

    // Fetch pending invitations
    const { data: invitations, error: inviteError } = await supabase
        .from("invitations")
        .select(`
            *,
            roles (id, name),
            branches (id, name)
        `)
        .eq("tenant_id", tenantId)
        .eq("status", "pending")

    if (inviteError) {
        console.error("Error fetching invitations:", inviteError)
    }

    const agents = profiles.map(profile => ({
        ...profile,
        roles: profile.user_role_assignments?.map((ra: any) => ra.roles) || [],
        branches: profile.user_branches?.map((ub: any) => ub.branches) || [],
        is_invitation: false
    }))

    const invitedAgents = (invitations || []).map(invite => ({
        id: invite.id,
        name: invite.name,
        email: invite.email,
        roles: invite.roles ? [invite.roles] : [],
        branches: invite.branches ? [invite.branches] : [],
        created_at: invite.invited_at,
        is_invitation: true,
        status: 'pending'
    }))

    return [...agents, ...invitedAgents].sort((a, b) =>
        (a.name || '').localeCompare(b.name || '')
    )
}

export async function getRoles() {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    const { data, error } = await supabase
        .from("roles")
        .select("*")
        .eq("tenant_id", tenantId)
        .order("name", { ascending: true })

    if (error) {
        console.error("Error fetching roles:", error)
        return []
    }

    return data
}

export async function getBranches() {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    const { data, error } = await supabase
        .from("branches")
        .select("*")
        .eq("tenant_id", tenantId)
        .order("name", { ascending: true })

    if (error) {
        console.error("Error fetching branches:", error)
        return []
    }

    return data
}

export async function updateAgentRole(agentId: string, roleId: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    // Try updating invitation first (it's simpler and more direct for the user ID provided if it's an invite)
    const { data: inviteUpdate, error: inviteError } = await supabase
        .from("invitations")
        .update({ role_id: roleId })
        .eq("id", agentId)
        .eq("tenant_id", tenantId)
        .select()

    // If it was an invitation and was updated, we are done
    if (!inviteError && inviteUpdate && inviteUpdate.length > 0) {
        return { success: true }
    }

    // Otherwise, assume it's a profile
    // First delete existing assignments for this user
    await supabase
        .from("user_role_assignments")
        .delete()
        .eq("user_id", agentId)

    const { error } = await supabase
        .from("user_role_assignments")
        .insert({
            user_id: agentId,
            role_id: roleId
        })

    if (error) {
        console.error("Error updating agent role:", error)
        throw new Error("No se pudo actualizar el rol. Verifique que el usuario o invitación sea válido.")
    }

    return { success: true }
}

export async function inviteAgent(data: { name: string, email: string, roleId: string, branchId: string }) {
    const supabase = await createClient()
    const adminSupabase = await createAdminClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    // Check if invitation already exists for this email
    const { data: existingInvite } = await supabase
        .from("invitations")
        .select("*")
        .eq("tenant_id", tenantId)
        .eq("email", data.email)
        .eq("status", "pending")
        .single()

    if (existingInvite) {
        throw new Error("Ya existe una invitación pendiente para este correo electrónico")
    }

    // Validate that roleId and branchId are valid UUIDs or null
    const roleId = data.roleId === "" ? null : data.roleId
    const branchId = data.branchId === "" ? null : data.branchId

    // 1. Send native Supabase invitation with metadata
    const { data: authData, error: authError } = await adminSupabase.auth.admin.inviteUserByEmail(data.email, {
        data: {
            tenant_id: tenantId,
            role_id: roleId,
            branch_id: branchId,
            full_name: data.name
        },
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`
    })

    if (authError) {
        // If user already exists, check if they are already in the tenant
        if (authError.message.includes("already been registered") || authError.status === 422) {
            const { data: profileExists } = await supabase
                .from("profiles")
                .select("id")
                .eq("email", data.email)
                .eq("tenant_id", tenantId)
                .maybeSingle()

            if (profileExists) {
                return { success: false, error: "Este usuario ya es parte de tu equipo" }
            }

            return { success: false, error: "Este correo ya está registrado en la plataforma. Para sumarlo a tu equipo, usa el mismo correo en la sección de Red o contacta a soporte." }
        }

        console.error("Auth Invite Error:", authError)
        return { success: false, error: `Error al enviar invitación: ${authError.message}` }
    }

    // 2. Insert into our local invitations table for UI tracking
    const { error: dbError } = await supabase
        .from("invitations")
        .insert({
            tenant_id: tenantId,
            name: data.name,
            email: data.email,
            role_id: roleId,
            branch_id: branchId,
            status: 'pending'
        })

    if (dbError) {
        console.error("Database Error:", dbError)
        return { success: false, error: `Error en la base de datos: ${dbError.message}` }
    }

    return { success: true }
}

export async function deleteAgent(agentId: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    // Try deleting from invitations first
    const { data: inviteDelete, error: inviteError } = await supabase
        .from("invitations")
        .delete()
        .eq("id", agentId)
        .eq("tenant_id", tenantId)
        .select()

    if (!inviteError && inviteDelete && inviteDelete.length > 0) {
        return { success: true }
    }

    // Otherwise, assume it's a profile
    const { error } = await supabase
        .from("profiles")
        .delete()
        .eq("id", agentId)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error("Error deleting agent:", error)
        throw new Error("No se pudo eliminar el integrante del equipo")
    }

    return { success: true }
}
