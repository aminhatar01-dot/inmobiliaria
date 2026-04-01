"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { ChannelConnection } from "@inmocms/shared"

export async function getChannelConnections(): Promise<ChannelConnection[]> {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) return []

    const { data, error } = await supabase
        .from("channel_connections")
        .select("*")
        .eq("tenant_id", tenantId)
        .order("created_at", { ascending: false })

    if (error) {
        console.error("Error fetching channel connections:", error)
        return []
    }

    return data
}

export async function connectChannel(channelName: string, credentials: any, accountInfo: any) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    const connectionData = {
        tenant_id: tenantId,
        channel_name: channelName,
        status: "connected",
        credentials: credentials,
        account_info: accountInfo,
        last_sync_at: new Date().toISOString()
    }

    // Upsert to handle reconnections seamlessly
    const { data, error } = await supabase
        .from("channel_connections")
        .upsert(connectionData, { onConflict: 'tenant_id, channel_name' })
        .select()
        .single()

    if (error) {
        console.error(`Error connecting channel ${channelName}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/canales")
    return data
}

export async function disconnectChannel(id: string) {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    // We do a hard delete for simplicity. Another approach is to set status = 'disconnected'
    const { error } = await supabase
        .from("channel_connections")
        .delete()
        .eq("id", id)
        .eq("tenant_id", tenantId)

    if (error) {
        console.error(`Error disconnecting channel ${id}:`, error)
        throw new Error(error.message)
    }

    revalidatePath("/marketing/canales")
}
