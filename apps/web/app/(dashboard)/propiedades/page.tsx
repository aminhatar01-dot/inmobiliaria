import { getProperties } from "@/app/actions/properties"
import { getPortalConnections, getPropertyPublications } from "@/app/actions/portals"
import { PropertiesClientPage } from "@/components/properties/properties-client-page"

export default async function PropertiesPage() {
    const properties = await getProperties()
    const connections = await getPortalConnections()

    // Pre-fetch publications for all properties
    const publicationsMap: Record<string, any[]> = {}
    await Promise.all(
        properties.map(async (prop) => {
            const pubs = await getPropertyPublications(prop.id)
            publicationsMap[prop.id] = pubs
        })
    )

    return (
        <PropertiesClientPage
            properties={properties}
            connections={connections}
            publications={publicationsMap}
        />
    )
}
