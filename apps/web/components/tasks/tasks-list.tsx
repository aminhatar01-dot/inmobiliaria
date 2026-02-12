'use client';

import { Task } from "@inmocms/shared"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle, Clock, Home as HomeIcon, User, MoreVertical, Trash2 } from "lucide-react"
import { completeTask, deleteTask } from "@/app/actions/tasks"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface TasksListProps {
    tasks: Task[]
}

export function TasksList({ tasks }: TasksListProps) {
    const router = useRouter();

    const priorityMap: Record<string, string> = {
        critical: 'Crítica',
        high: 'Alta',
        medium: 'Media',
        low: 'Baja'
    };

    const categoryMap: Record<string, string> = {
        visit: 'Visita',
        call: 'Llamada',
        email: 'Email',
        meeting: 'Reunión',
        admin: 'Admin',
        other: 'Otro'
    };

    async function handleComplete(id: string) {
        try {
            await completeTask(id);
            toast.success("Tarea completada");
        } catch (e) {
            toast.error("Error al completar tarea");
        }
    }

    async function handleDelete(id: string) {
        if (!confirm("¿Eliminar tarea?")) return;
        try {
            await deleteTask(id);
            toast.success("Tarea eliminada");
        } catch (e) {
            toast.error("Error al eliminar tarea");
        }
    }

    if (tasks.length === 0) {
        return (
            <div className="h-48 flex items-center justify-center text-gray-400 font-bold italic">
                No tienes tareas pendientes para hoy.
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <Card key={task.id} className="border-none shadow-sm rounded-[2rem] hover:shadow-md transition-all group overflow-hidden bg-white">
                    <CardContent className="p-0 flex flex-col md:flex-row md:items-center">
                        <div className="p-6 md:p-8 flex items-start gap-6 flex-1">
                            <button
                                onClick={() => handleComplete(task.id)}
                                disabled={task.status === 'completed'}
                                className="h-6 w-6 rounded-full border-2 border-gray-100 flex items-center justify-center text-blue-600 hover:border-blue-500 transition-colors shrink-0 mt-0.5 cursor-pointer disabled:cursor-default"
                            >
                                {task.status === 'completed' ? <CheckCircle2 className="h-6 w-6" /> : <Circle className="h-6 w-6 text-gray-200" />}
                            </button>
                            <div className="space-y-2 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h3 className={`text-lg font-bold leading-none ${task.status === 'completed' ? 'text-gray-400 line-through decoration-2' : 'text-gray-900'}`}>
                                        {task.title}
                                    </h3>
                                    <Badge variant="outline" className={`border-none font-bold text-[9px] uppercase tracking-widest px-2 ${task.priority === 'critical' ? 'bg-red-50 text-red-600' :
                                        task.priority === 'high' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'
                                        }`}>
                                        {priorityMap[task.priority] || task.priority}
                                    </Badge>
                                </div>
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                                        <Clock className="h-3.5 w-3.5" />
                                        {task.due_date ? new Date(task.due_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Sin hora'}
                                    </div>
                                    {task.property_id && (
                                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                                            <HomeIcon className="h-3.5 w-3.5 text-blue-400/50" />
                                            Propiedad ID: {task.property_id.substring(0, 8)}
                                        </div>
                                    )}
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                                        <User className="h-3.5 w-3.5 text-gray-300" /> Agente
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full border-l border-gray-50 flex items-center px-6 gap-3 shrink-0 py-4 bg-gray-50/10">
                            <Badge className="bg-white border-gray-100 text-gray-400 shadow-none font-bold text-[10px] uppercase tracking-widest py-1.5 px-4 rounded-xl">
                                {task.category && categoryMap[task.category] ? categoryMap[task.category] : task.category || 'General'}
                            </Badge>
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-red-300 hover:text-red-500 hover:bg-red-50" onClick={() => handleDelete(task.id)}>
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
