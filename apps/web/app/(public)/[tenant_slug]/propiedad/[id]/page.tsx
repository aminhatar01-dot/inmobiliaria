import { getPublicPropertyById } from "@/app/actions/public"
import { notFound } from "next/navigation"
import { PropertyDetailClient } from "./property-detail-client"

export default async function PublicPropertyDetailPage({
    params
}: {
    params: Promise<{ tenant_slug: string, id: string }>
}) {
    const { tenant_slug, id } = await params
    const data = await getPublicPropertyById(tenant_slug, id)

    if (!data || !data.property) {
        notFound()
    }

    return (
        <PropertyDetailClient
            property={data.property}
            tenant={data.tenant}
            tenantSlug={tenant_slug}
        />
    )
}
