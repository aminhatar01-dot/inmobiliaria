import { createClient } from "@/lib/supabase/server"

function escapeXml(str: string): string {
    return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;")
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ agentId: string; portalName: string }> }
) {
    const { agentId, portalName } = await params

    // Validate portal name
    if (!["zonaprop", "argenprop"].includes(portalName)) {
        return new Response("Portal no soportado", { status: 400 })
    }

    const supabase = await createClient()

    // Fetch published properties for this agent via portal_connections
    const { data: connections } = await supabase
        .from("portal_connections")
        .select("id")
        .eq("user_id", agentId)
        .eq("portal_name", portalName)
        .eq("status", "connected")

    if (!connections || connections.length === 0) {
        return new Response(
            `<?xml version="1.0" encoding="UTF-8"?>\n<root><header><name>InmoCMS Feed</name><date>${new Date().toISOString()}</date></header><properties></properties></root>`,
            { headers: { "Content-Type": "application/xml" } }
        )
    }

    const connectionIds = connections.map(c => c.id)

    // Fetch all published properties through the publications table
    const { data: publications, error: pubError } = await supabase
        .from("property_publications")
        .select("property_id")
        .in("portal_connection_id", connectionIds)
        .eq("status", "published")

    if (pubError || !publications || publications.length === 0) {
        return new Response(
            `<?xml version="1.0" encoding="UTF-8"?>\n<root><header><name>InmoCMS Feed</name><date>${new Date().toISOString()}</date></header><properties></properties></root>`,
            { headers: { "Content-Type": "application/xml" } }
        )
    }

    const propertyIds = [...new Set(publications.map(p => p.property_id))]

    const { data: properties, error } = await supabase
        .from("properties")
        .select("*")
        .in("id", propertyIds)

    if (error) {
        return new Response("Error fetching properties", { status: 500 })
    }

    // Generate XML (Zonaprop/Argenprop compatible format)
    const propertiesXml = (properties || []).map(p => `
        <property>
            <id>${escapeXml(p.id)}</id>
            <title>${escapeXml(p.title)}</title>
            <description>${escapeXml(p.description)}</description>
            <type>${escapeXml(p.property_type)}</type>
            <operation>${escapeXml(p.operation_type)}</operation>
            <price currency="${escapeXml(p.currency)}">${p.price || 0}</price>
            <location>
                <city>${escapeXml(p.city)}</city>
                <neighborhood>${escapeXml(p.neighborhood)}</neighborhood>
                <address>${escapeXml(p.address)}</address>
                ${p.latitude ? `<latitude>${p.latitude}</latitude>` : ""}
                ${p.longitude ? `<longitude>${p.longitude}</longitude>` : ""}
            </location>
            <features>
                <rooms>${p.rooms || 0}</rooms>
                <bedrooms>${p.bedrooms || 0}</bedrooms>
                <bathrooms>${p.bathrooms || 0}</bathrooms>
                <surface_total>${p.surface_total || 0}</surface_total>
                <surface_covered>${p.surface_covered || 0}</surface_covered>
            </features>
            <status>${escapeXml(p.status)}</status>
        </property>`).join("")

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<root>
    <header>
        <name>InmoCMS Feed - ${escapeXml(portalName)}</name>
        <date>${new Date().toISOString()}</date>
        <total>${properties?.length || 0}</total>
    </header>
    <properties>${propertiesXml}
    </properties>
</root>`

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate"
        }
    })
}
