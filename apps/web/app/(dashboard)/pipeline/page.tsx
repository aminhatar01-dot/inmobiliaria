import { getPipelineLeads, getPipelineStages } from "@/app/actions/pipeline"
import { KanbanBoard } from "@/components/pipeline/kanban-board"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default async function PipelinePage() {
    const [leads, stages] = await Promise.all([
        getPipelineLeads(),
        getPipelineStages()
    ]);

    return (
        <div className="h-[calc(100vh-100px)] flex flex-col space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
                <div>
                    <h2 className="text-3xl font-black text-gray-800 tracking-tight">Pipeline de Ventas</h2>
                    <p className="text-gray-500 text-sm font-medium">Visualiza y gestiona el progreso de tus leads</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-12 border-gray-100 rounded-xl font-bold px-6 bg-white" asChild>
                        <Link href="/leads">
                            Ver Lista
                        </Link>
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 py-6 px-6 h-fit" asChild>
                        <Link href="/leads/nuevo">
                            <Plus className="h-5 w-5 mr-2" /> Nuevo Lead
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="flex-1 overflow-hidden">
                <KanbanBoard initialLeads={leads} stages={stages} />
            </div>
        </div>
    )
}
