import { getPropertyById, updateProperty } from "@/app/actions/properties"
import { notFound, redirect } from "next/navigation"
import PropertyEditForm from "./form"

export default async function EditPropertyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const property = await getPropertyById(id)

    if (!property) {
        notFound()
    }

    return <PropertyEditForm property={property} />
}
