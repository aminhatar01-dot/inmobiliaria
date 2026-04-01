import { getContracts, getTemplates } from "@/app/actions/contracts"
import { getProperties } from "@/app/actions/properties"
import { getLeads } from "@/app/actions/leads"
import { ContractForm } from "./form"

export default async function NewContractPage() {
    const [properties, leads, templates] = await Promise.all([
        getProperties(),
        getLeads(),
        getTemplates()
    ])

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Nuevo Documento Legal</h1>
                    <p className="text-gray-500 font-medium">Genera contratos, recibos y formularios con el poder de la IA.</p>
                </div>
            </div>

            <ContractForm properties={properties} leads={leads} templates={templates} />
        </div>
    )
}

