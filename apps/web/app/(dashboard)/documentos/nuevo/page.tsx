'use server'

import { createContract } from "@/app/actions/contracts"
import { getProperties } from "@/app/actions/properties"
import { getLeads } from "@/app/actions/leads"
import { ContractForm } from "./form"

export default async function NewContractPage() {
    const [properties, leads] = await Promise.all([
        getProperties(),
        getLeads()
    ])

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Nuevo Documento</h1>
                <p className="text-muted-foreground">Crea un contrato o documento legal a partir de una plantilla.</p>
            </div>

            <ContractForm properties={properties} leads={leads} />
        </div>
    )
}
