'use client';

import { useState } from 'react';
import {
    DndContext,
    DragOverlay,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragStartEvent,
    DragOverEvent,
    DragEndEvent,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Lead, PipelineStage } from '@inmocms/shared';
import { moveLead } from '@/app/actions/pipeline';
import { toast } from 'sonner';
import { KanbanColumn } from './kanban-column';
import { KanbanCard } from './kanban-card';
import { useRouter } from 'next/navigation';

interface PipelineLead extends Lead {
    stage_id: string | null;
}

interface Props {
    initialLeads: PipelineLead[];
    stages: PipelineStage[];
}

export function KanbanBoard({ initialLeads, stages }: Props) {
    const [leads, setLeads] = useState<PipelineLead[]>(initialLeads);
    const [activeId, setActiveId] = useState<string | null>(null);
    const router = useRouter();

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5, // Require slight movement to prevent accidental drags on clicks
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragOver = (event: DragOverEvent) => {
        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        // Find the active lead
        const activeLeadIndex = leads.findIndex(l => l.id === activeId);
        if (activeLeadIndex === -1) return;

        const activeLead = leads[activeLeadIndex];

        // If over a column
        if (stages.some(s => s.id === overId)) {
            const newStageId = overId as string;
            if (activeLead.stage_id !== newStageId) {
                setLeads(prev => {
                    const newLeads = [...prev];
                    newLeads[activeLeadIndex] = { ...newLeads[activeLeadIndex], stage_id: newStageId };
                    return newLeads;
                });
            }
        }
        // If over another card (implemented in dragEnd usually, but for visual feedback we might update state here)
        // For simplicity, we just update stage on DragOver if it's a different column container
    };

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);

        if (!over) return;

        const activeId = active.id as string;
        const overId = over.id as string;

        // Find the lead
        const lead = leads.find(l => l.id === activeId);
        if (!lead) return;

        // Determine new stage
        let newStageId = lead.stage_id;

        // Check if dropped on a column
        if (stages.some(s => s.id === overId)) {
            newStageId = overId;
        }
        // Check if dropped on a card
        else {
            const overLead = leads.find(l => l.id === overId);
            if (overLead) {
                newStageId = overLead.stage_id;
            }
        }

        if (newStageId && newStageId !== initialLeads.find(l => l.id === activeId)?.stage_id) {
            try {
                // Optimistic update was mostly done in dragOver, but ensure final state
                setLeads(prev => prev.map(l => l.id === activeId ? { ...l, stage_id: newStageId } : l));

                await moveLead(activeId, newStageId);
                toast.success('Lead movido correctamente');
                router.refresh();
            } catch (error) {
                console.error(error);
                toast.error('Error al mover el lead');
                // Revert
                setLeads(initialLeads);
            }
        }
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
        >
            <div className="flex h-full gap-6 overflow-x-auto pb-4 items-start px-2">
                {stages.map((stage) => (
                    <KanbanColumn
                        key={stage.id}
                        id={stage.id}
                        title={stage.name}
                        // Simple color rotation based on index or name hash could be better, hardcoded for now or derived
                        color="bg-gray-50 text-gray-700"
                        leads={leads.filter((lead) => lead.stage_id === stage.id)}
                    />
                ))}
            </div>

            <DragOverlay>
                {activeId ? (
                    <KanbanCard lead={leads.find((l) => l.id === activeId)!} />
                ) : null}
            </DragOverlay>
        </DndContext>
    );
}
