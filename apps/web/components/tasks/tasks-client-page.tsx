"use client"

import {
    Calendar as CalendarIcon,
    ListTodo,
    Search,
    Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NewTaskDialog } from "@/components/tasks/new-task-dialog"
import { CalendarView } from "@/components/tasks/calendar-view"
import { TasksList } from "@/components/tasks/tasks-list"
import { useState, useMemo } from "react"
import { Task } from "@inmocms/shared"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TasksClientPageProps {
    initialTasks: Task[]
}

export function TasksClientPage({ initialTasks }: TasksClientPageProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [priorityFilter, setPriorityFilter] = useState("all")
    const [categoryFilter, setCategoryFilter] = useState("all")
    const [activeTab, setActiveTab] = useState("list")

    const filteredTasks = useMemo(() => {
        return initialTasks.filter(task => {
            const matchesSearch = 
                task.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                task.description?.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter
            const matchesCategory = categoryFilter === "all" || task.category === categoryFilter
            return matchesSearch && matchesPriority && matchesCategory
        })
    }, [initialTasks, searchTerm, priorityFilter, categoryFilter])

    const completedPercentage = useMemo(() => {
        if (initialTasks.length === 0) return 0
        return Math.round((initialTasks.filter((t) => t.status === 'completed').length / initialTasks.length) * 100)
    }, [initialTasks])

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-none">Mi Agenda</h2>
                    <p className="text-gray-500 text-sm font-medium mt-2">Gestiona tus tareas y eventos del día</p>
                </div>
                <div className="flex items-center gap-2">
                    <NewTaskDialog />
                </div>
            </div>

            <Tabs defaultValue="list" className="w-full" onValueChange={setActiveTab}>
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <TabsList className="bg-transparent h-auto p-0 gap-8">
                        <TabsTrigger value="list" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-blue-600 rounded-none px-0 py-4 font-black text-xs uppercase tracking-widest text-gray-400 data-[state=active]:text-blue-600 transition-all">
                            <ListTodo className="h-4 w-4 mr-2" /> Lista de Tareas
                        </TabsTrigger>
                        <TabsTrigger value="calendar" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-blue-600 rounded-none px-0 py-4 font-black text-xs uppercase tracking-widest text-gray-400 data-[state=active]:text-blue-600 transition-all">
                            <CalendarIcon className="h-4 w-4 mr-2" /> Vista Mensual
                        </TabsTrigger>
                    </TabsList>

                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                            <Input 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Buscar tarea..." 
                                className="h-9 w-64 bg-gray-50 border-none pl-9 text-xs font-medium rounded-xl" 
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className={`h-9 rounded-xl font-bold px-4 ${priorityFilter !== 'all' || categoryFilter !== 'all' ? 'text-blue-600 bg-blue-50' : 'text-gray-400'}`}>
                                    <Filter className="h-3.5 w-3.5 mr-2" /> Filtros
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 rounded-2xl border-gray-100 shadow-xl p-2">
                                <DropdownMenuLabel className="text-[10px] font-black text-gray-400 uppercase tracking-wider px-2">Prioridad</DropdownMenuLabel>
                                <DropdownMenuRadioGroup value={priorityFilter} onValueChange={setPriorityFilter}>
                                    <DropdownMenuRadioItem value="all" className="rounded-xl">Todas</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="critical" className="rounded-xl">Crítica</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="high" className="rounded-xl">Alta</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="medium" className="rounded-xl">Media</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="low" className="rounded-xl">Baja</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel className="text-[10px] font-black text-gray-400 uppercase tracking-wider px-2">Categoría</DropdownMenuLabel>
                                <DropdownMenuRadioGroup value={categoryFilter} onValueChange={setCategoryFilter}>
                                    <DropdownMenuRadioItem value="all" className="rounded-xl">Todas</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="visit" className="rounded-xl">Visita</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="call" className="rounded-xl">Llamada</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="email" className="rounded-xl">Email</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="meeting" className="rounded-xl">Reunión</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                {(priorityFilter !== 'all' || categoryFilter !== 'all') && (
                                    <>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuRadioItem value="reset" className="rounded-xl text-red-500 font-bold" onClick={() => { setPriorityFilter('all'); setCategoryFilter('all') }}>Limpiar</DropdownMenuRadioItem>
                                    </>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <TabsContent value="list" className="pt-8 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Stats Sidebar */}
                        <div className="space-y-6">
                            <Card className="border-none shadow-sm rounded-[2rem] bg-gray-950 text-white overflow-hidden p-8 space-y-4">
                                <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Estado Diario</p>
                                <div className="space-y-1">
                                    <h3 className="text-4xl font-black tracking-tighter">
                                        {completedPercentage}%
                                    </h3>
                                    <p className="text-xs text-white/70 font-medium">Tareas completadas hoy</p>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-500 transition-all duration-1000"
                                        style={{ width: `${completedPercentage}%` }}
                                    />
                                </div>
                            </Card>
                        </div>

                        {/* Task List */}
                        <div className="lg:col-span-3 space-y-4">
                            <div className="flex items-center justify-between px-2">
                                <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest">
                                    Tareas ({filteredTasks.length})
                                </h4>
                            </div>

                            <TasksList tasks={filteredTasks} />
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="calendar" className="pt-8">
                    <CalendarView tasks={initialTasks || []} />
                </TabsContent>
            </Tabs>
        </div>
    )
}
