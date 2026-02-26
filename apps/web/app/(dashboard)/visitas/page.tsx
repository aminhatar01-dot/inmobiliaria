import { getVisits } from "@/app/actions/visits"
import { getProperties } from "@/app/actions/properties"
import { getLeads } from "@/app/actions/leads"
import { VisitsClientPage } from "@/components/visits/visits-client-page"

export default async function VisitasPage() {
    const [visits, properties, leads] = await Promise.all([
        getVisits(),
        getProperties(),
        getLeads()
    ])

    return (
        <VisitsClientPage 
            initialVisits={visits as any} 
            properties={properties} 
            leads={leads} 
        />
    )
}
