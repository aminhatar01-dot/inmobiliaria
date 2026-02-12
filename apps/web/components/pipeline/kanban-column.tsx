import { useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { Lead } from "@inmocms/shared"
import { KanbanCard } from "@/components/pipeline/kanban-card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Props {
    id: string
    title: string
    color: string
    leads: Lead[]
}

export function KanbanColumn({ id, title, color, leads }: Props) {
    const { setNodeRef } = useDroppable({
        id: id,
    })

    return (
        <div className="flex flex-col h-full min-w-[280px] w-[280px] rounded-2xl bg-gray-50/50 border border-gray-100">
            {/* Header */}
            <div className={cn("p-4 rounded-t-2xl border-b border-gray-100/50 flex items-center justify-between", color)}>
                <h3 className="font-black text-sm uppercase tracking-wider">{title}</h3>
                <span className="text-xs font-bold bg-white/50 px-2 py-1 rounded-lg min-w-[20px] text-center">
                    {leads.length}
                </span>
            </div>

            {/* Content */}
            <SortableContext id={id} items={leads.map(l => l.id)} strategy={verticalListSortingStrategy}>
                <div ref={setNodeRef} className="flex-1 p-3 space-y-3 overflow-y-auto custom-scrollbar">
                    {leads.map((lead) => (
                        <KanbanCard key={lead.id} lead={lead} />
                    ))}
                    {leads.length === 0 && (
                        <div className="h-24 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-xs font-medium">
                            Arrastra leads aquí
                        </div>
                    )}
                </div>
            </SortableContext>
        </div>
    )
}
