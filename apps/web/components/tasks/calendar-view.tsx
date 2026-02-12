'use client';

import { Task } from "@inmocms/shared"

interface CalendarViewProps {
    tasks: Task[]
}

export function CalendarView({ tasks }: CalendarViewProps) {
    return (
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-[2rem] border border-dashed border-gray-200">
            <p className="text-gray-400 font-bold">Vista de calendario próximamente</p>
        </div>
    )
}
