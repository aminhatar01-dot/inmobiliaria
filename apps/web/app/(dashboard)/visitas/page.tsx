import { Suspense } from "react"
import { getVisits } from "@/app/actions/visits"
import { getProperties } from "@/app/actions/properties"
import { getLeads } from "@/app/actions/leads"
import { VisitsList } from "@/components/visits/visits-list"
import { NewVisitDialog } from "@/components/visits/new-visit-dialog"
import { Card } from "@/components/ui/card"
import { Calendar, Search } from "lucide-react"

export default async function VisitasPage() {
    const [visits, properties, leads] = await Promise.all([
        getVisits(),
        getProperties(),
        getLeads()
    ])

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                            <Calendar className="h-5 w-5" />
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tighter decoration-blue-500/30">Visitas</h2>
                    </div>
                    <p className="text-gray-500 font-medium text-lg ml-13">Calendario y seguimiento de recorridos.</p>
                </div>
                <div className="flex items-center gap-3">
                    <NewVisitDialog properties={properties} leads={leads} />
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                {/* Filters/Stats Sidebar */}
                <div className="xl:col-span-1 space-y-6">
                    <Card className="border-none shadow-xl rounded-[2.5rem] bg-gray-900 p-8 text-white space-y-8 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                        <div className="space-y-1 relative">
                            <h3 className="text-5xl font-black tracking-tighter">{visits.length}</h3>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Visitas Totales</p>
                        </div>

                        <div className="space-y-4 relative">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Filtros Rápidos</p>
                            <div className="space-y-2">
                                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                                    <span className="text-sm font-bold text-white/70 group-hover:text-white">Hoy</span>
                                    <span className="h-5 w-5 rounded-full bg-blue-500 text-[10px] font-black flex items-center justify-center">0</span>
                                </button>
                                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                                    <span className="text-sm font-bold text-white/70 group-hover:text-white">Mañana</span>
                                    <span className="h-5 w-5 rounded-full bg-indigo-500 text-[10px] font-black flex items-center justify-center">0</span>
                                </button>
                                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                                    <span className="text-sm font-bold text-white/70 group-hover:text-white">Pendientes</span>
                                    <span className="h-5 w-5 rounded-full bg-purple-500 text-[10px] font-black flex items-center justify-center">
                                        {visits.filter(v => v.status === 'scheduled').length}
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/10 relative">
                            <div className="flex items-center gap-3 text-white/50 bg-white/5 p-4 rounded-2xl border border-white/5 focus-within:bg-white/10 transition-all">
                                <Search className="h-4 w-4" />
                                <input placeholder="Buscar visita..." className="bg-transparent border-none text-xs font-bold focus:ring-0 placeholder:text-white/20 w-full" />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Main List */}
                <div className="xl:col-span-3">
                    <Suspense fallback={
                        <div className="animate-pulse space-y-8">
                            <div className="h-6 w-48 bg-gray-100 rounded-full"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="h-64 bg-gray-50 rounded-[2.5rem]"></div>
                                ))}
                            </div>
                        </div>
                    }>
                        <VisitsList visits={visits} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
