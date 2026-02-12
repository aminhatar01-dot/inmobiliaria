"use server"

import { createClient, getTenantId } from "@/lib/supabase/server"

export async function getDashboardStats() {
    const supabase = await createClient()
    const tenantId = await getTenantId(supabase)

    if (!tenantId) throw new Error("Unauthorized")

    // 1. Inmuebles en venta
    const { count: salesCount } = await supabase
        .from("properties")
        .select("*", { count: 'exact', head: true })
        .eq("tenant_id", tenantId)
        .eq("operation_type", "sale")
        .eq("status", "available")

    // 2. Inmuebles en alquiler
    const { count: rentCount } = await supabase
        .from("properties")
        .select("*", { count: 'exact', head: true })
        .eq("tenant_id", tenantId)
        .eq("operation_type", "rent")
        .eq("status", "available")

    // 3. Total Inmuebles (Disponibles)
    const { count: totalProperties } = await supabase
        .from("properties")
        .select("*", { count: 'exact', head: true })
        .eq("tenant_id", tenantId)
        .neq("status", "archived")

    // 4. Leads del mes (Creados en los últimos 30 días)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const { count: leadsCount } = await supabase
        .from("leads")
        .select("*", { count: 'exact', head: true })
        .eq("tenant_id", tenantId)
        .gte("created_at", thirtyDaysAgo.toISOString())

    // 5. Visitas del mes (Tareas tipo 'visit' completadas)
    const { count: visitsCount } = await supabase
        .from("tasks")
        .select("*", { count: 'exact', head: true })
        .eq("tenant_id", tenantId)
        .eq("category", "visit")
        .eq("status", "completed")
        .gte("due_date", thirtyDaysAgo.toISOString())

    // 6. Volumen de Ventas (Propiedades vendidas en el último año)
    const { data: soldSales } = await supabase
        .from("properties")
        .select("price, currency")
        .eq("tenant_id", tenantId)
        .eq("status", "sold")
        .eq("operation_type", "sale")

    const salesVolume = soldSales?.reduce((acc, curr) => {
        const price = curr.currency === 'ARS' ? curr.price / 1000 : curr.price
        return acc + price
    }, 0) || 0

    // 7. Desglose detallado de inventario
    const { count: tempRentCount } = await supabase
        .from("properties")
        .select("*", { count: 'exact', head: true })
        .eq("tenant_id", tenantId)
        .eq("operation_type", "temporary_rent")
        .eq("status", "available")

    // 8. Embudo de Leads (Counts por status)
    const { data: leadStatusCounts } = await supabase
        .from("leads")
        .select("status")
        .eq("tenant_id", tenantId)

    const funnel = {
        new: leadStatusCounts?.filter(l => l.status === 'new').length || 0,
        contacted: leadStatusCounts?.filter(l => l.status === 'contacted').length || 0,
        visit: leadStatusCounts?.filter(l => l.status === 'visit_scheduled').length || 0,
        offer: leadStatusCounts?.filter(l => l.status === 'offer').length || 0,
        closing: leadStatusCounts?.filter(l => l.status === 'closing').length || 0,
    }

    return {
        salesCount: salesCount || 0,
        rentCount: rentCount || 0,
        tempRentCount: tempRentCount || 0,
        totalProperties: totalProperties || 0,
        leadsCount: leadsCount || 0,
        visitsCount: visitsCount || 0,
        salesVolume: Math.round(salesVolume),
        funnel
    }
}
