import { getContractById, getTemplates } from "@/app/actions/contracts"
import { getProperties } from "@/app/actions/properties"
import { getLeads } from "@/app/actions/leads"
import { ContractForm } from "../nuevo/form"
import { notFound } from "next/navigation"

interface Props {
    params: { id: string }
}

export default async function EditContractPage({ params }: Props) {
    const { id } = await params
    const [contract, properties, leads, templates] = await Promise.all([
        getContractById(id),
        getProperties(),
        getLeads(),
        getTemplates()
    ])

    if (!contract) {
        notFound()
    }

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Editar Documento</h1>
                    <p className="text-gray-500 font-medium">Modifica el contenido o ajusta los detalles legales.</p>
                </div>
            </div>

            <ContractForm
                properties={properties}
                leads={leads}
                templates={templates}
                initialData={contract}
            />
        </div>
    )
}
