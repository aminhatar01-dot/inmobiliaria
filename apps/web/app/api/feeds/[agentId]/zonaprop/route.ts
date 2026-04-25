import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: Promise<{ agentId: string }> }
) {
    const { agentId } = await params
    const supabase = await createClient()

    // 1. Fetch properties for this agent
    // Assuming properties table has an 'agent_id' or 'created_by' field
    // or we fetch properties published by this agent in portal_connections
    const { data: properties, error } = await supabase
        .from("properties")
        .select(`
            *,
            property_publications!inner(status, portal_connection_id)
        `)
        .eq("property_publications.user_id", agentId)
        .eq("property_publications.status", "published")

    if (error) {
        return new Response("Error fetching properties", { status: 500 })
    }

    // 2. Generate XML (Zonaprop/Navis format)
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<root>
    <header>
        <name>InmoCMS Feed</name>
        <date>${new Date().toISOString()}</date>
    </header>
    <properties>
        ${properties?.map(p => `
        <property>
            <id>${p.id}</id>
            <title>${p.title || ""}</title>
            <description>${p.description || ""}</description>
            <type>${p.type || ""}</type>
            <operation>${p.operation_type || ""}</operation>
            <price currency="${p.currency || "USD"}">${p.price || 0}</price>
            <location>
                <city>${p.city || ""}</city>
                <neighborhood>${p.neighborhood || ""}</neighborhood>
                <address>${p.address || ""}</address>
            </location>
            <features>
                <rooms>${p.rooms || 0}</rooms>
                <bathrooms>${p.bathrooms || 0}</bathrooms>
                <surface_total>${p.surface_total || 0}</surface_total>
                <surface_covered>${p.surface_covered || 0}</surface_covered>
            </features>
        </property>`).join("")}
    </properties>
</root>`

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate"
        }
    })
}
