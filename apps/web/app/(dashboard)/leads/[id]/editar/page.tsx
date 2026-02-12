import { getLeadById } from "@/app/actions/leads"
import { notFound } from "next/navigation"
import LeadEditForm from "./form"

export default async function EditLeadPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const lead = await getLeadById(id)

    if (!lead) {
        notFound()
    }

    return <LeadEditForm lead={lead} />
}
