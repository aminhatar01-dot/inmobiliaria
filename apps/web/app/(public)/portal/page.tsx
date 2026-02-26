import { getAllPublicProperties } from "@/app/actions/properties"
import { PortalClientPage } from "@/components/portal/portal-client-page"

export const dynamic = 'force-dynamic'

export default async function GlobalPortalPage() {
    const properties = await getAllPublicProperties()

    return <PortalClientPage properties={properties} />
}
