import { Button } from "@/components/ui/button"
import { getLeads } from "@/app/actions/leads"
import Link from "next/link"
import { LeadsList } from "@/components/leads/leads-list"
import { LeadDialog } from "@/components/leads/lead-dialog"

export default async function LeadsPage() {
    const leads = await getLeads()

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-800 tracking-tight">Leads / Prospectos</h2>
                    <p className="text-gray-500 text-sm font-medium">Gestiona tus contactos y oportunidades</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-12 border-gray-100 rounded-xl font-bold px-6 bg-white hover:bg-gray-50 text-gray-700" asChild>
                        <Link href="/leads/pipeliNE">
                            Ver Pipeline Kanban
                        </Link>
                    </Button>
                    <Button variant="secondary" className="h-12 rounded-xl font-black px-6 bg-purple-100/50 hover:bg-purple-100 text-purple-700 border border-purple-200" asChild>
                        <Link href="/leads/captacion">
                            ✨ Captación con IA
                        </Link>
                    </Button>
                    <LeadDialog
                        mode="create"
                    />
                </div>
            </div>

            <LeadsList initialLeads={leads} />
        </div>
    )
}

