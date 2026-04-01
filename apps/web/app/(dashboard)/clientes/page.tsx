import { getLeads } from "@/app/actions/leads"
import { Users } from "lucide-react"
import { ClientesList } from "@/components/clientes/clientes-list"

export default async function ClientesPage() {
    const leads = await getLeads()

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                            <Users className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-gray-800 tracking-tight">Directorio de Clientes</h2>
                            <p className="text-gray-500 font-medium">Gestiona todos tus prospectos y clientes en un solo lugar.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content section */}
            <ClientesList initialLeads={leads} />
        </div>
    )
}
