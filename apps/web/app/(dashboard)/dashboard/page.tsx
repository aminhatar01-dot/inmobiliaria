import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Users,
    Home as HomeIcon,
    Key,
    TrendingUp,
} from "lucide-react"
import { getDashboardStats } from "@/app/actions/dashboard"

export default async function DashboardPage() {
    const stats = await getDashboardStats()

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-20">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Inmuebles en venta"
                    value={stats.salesCount.toString()}
                    percentage={85}
                    color="bg-blue-600"
                    textColor="text-blue-600"
                    icon={HomeIcon}
                />
                <StatCard
                    title="Inmuebles en alquiler"
                    value={stats.rentCount.toString()}
                    percentage={70}
                    color="bg-green-500"
                    textColor="text-green-500"
                    icon={Key}
                />
                <StatCard
                    title="Visitas realizadas"
                    value={stats.visitsCount.toString()}
                    percentage={45}
                    color="bg-orange-500"
                    textColor="text-orange-500"
                    icon={Users}
                />
                <StatCard
                    title="Volumen Ventas (USD)"
                    value={`$${stats.salesVolume.toLocaleString()}`}
                    percentage={92}
                    color="bg-rose-500"
                    textColor="text-rose-500"
                    icon={TrendingUp}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Column */}
                <div className="lg:col-span-2 space-y-8">
                    <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <div>
                                <CardTitle className="text-xl font-bold text-gray-800">Estadísticas de ventas anuales</CardTitle>
                                <p className="text-sm text-gray-500">Resumen de operaciones {new Date().getFullYear()}</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-8 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <HomeIcon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Total Ventas</p>
                                        <p className="text-lg font-bold text-gray-800">{stats.salesCount} Propiedades</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-green-50 flex items-center justify-center text-green-50">
                                        <Key className="h-5 w-5 text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Total Alquileres</p>
                                        <p className="text-lg font-bold text-gray-800">{stats.rentCount} Alquileres</p>
                                    </div>
                                </div>
                                <div className="ml-auto flex items-center gap-2 text-green-500 bg-green-50 px-3 py-1 rounded-full h-fit self-center">
                                    <TrendingUp className="h-4 w-4" />
                                    <span className="text-xs font-bold">0,8%</span>
                                    <span className="text-[10px] text-green-600/70">Más que el año anterior</span>
                                </div>
                            </div>

                            {/* Lead Funnel Chart */}
                            <div className="mt-8 grid grid-cols-5 gap-2 h-40 items-end">
                                <FunnelStep label="Nuevos" value={stats.funnel.new} color="bg-blue-400" percentage={100} />
                                <FunnelStep label="Contactados" value={stats.funnel.contacted} color="bg-blue-500" percentage={80} />
                                <FunnelStep label="Visita" value={stats.funnel.visit} color="bg-blue-600" percentage={60} />
                                <FunnelStep label="Oferta" value={stats.funnel.offer} color="bg-blue-700" percentage={40} />
                                <FunnelStep label="Cierre" value={stats.funnel.closing} color="bg-green-500" percentage={20} />
                            </div>
                            <div className="mt-4 flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest px-2">
                                <span>Prospectos</span>
                                <span>Oportunidades</span>
                                <span>Cierres</span>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="border-none shadow-sm rounded-3xl">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-lg font-bold text-gray-800">Consultas recientes</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <RecentInquiry
                                    name="Laura Gonzalez"
                                    time="Hace 20 minutos"
                                    message="Hola! He visto el piso que tenéis publicado en la calle Gran Vía 27 y me interesaría ir a verlo..."
                                    avatar="/avatars/user1.jpg"
                                />
                                <RecentInquiry
                                    name="Jorge López"
                                    time="Hace 2 días"
                                    message="Me gustaría hacer una visita al apartamento con vistas al mar que hay en la calle La Arboleda, Valencia..."
                                    avatar="/avatars/user2.jpg"
                                />
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-sm rounded-3xl">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-lg font-bold text-gray-800">Localización de inmuebles</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <LocationItem city="Madrid centro" count={187} color="bg-blue-600" />
                                <LocationItem city="Bilbao" count={234} color="bg-blue-400" />
                                <LocationItem city="Barcelona" count={164} color="bg-cyan-400" />
                                <LocationItem city="Málaga" count={53} color="bg-indigo-400" />
                                <LocationItem city="Valencia" count={139} color="bg-blue-500" />
                                <LocationItem city="Cantabria" count={79} color="bg-sky-400" />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Right Sidebar Widgets */}
                <div className="space-y-8">
                    <Card className="border-none shadow-sm rounded-3xl overflow-hidden p-6 space-y-6">
                        <MiniStat
                            label="Ventas/Alquileres más que el mes anterior"
                            value="7"
                            percentage={85}
                            color="text-green-500"
                            icon={TrendingUp}
                        />
                        <MiniStat
                            label="Nuevos interesados más que el mes anterior"
                            value="28"
                            percentage={73}
                            color="text-blue-500"
                            icon={TrendingUp}
                        />
                        <MiniStat
                            label="Nuevos inmuebles que el mes anterior"
                            value="13"
                            percentage={91}
                            color="text-green-500"
                            icon={TrendingUp}
                        />
                    </Card>

                    <Card className="border-none shadow-sm rounded-3xl px-6 py-8">
                        <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-lg font-bold text-gray-800">Tipos de inmuebles</CardTitle>
                            <p className="text-xs text-gray-400">Porcentajes de los diferentes tipos de propiedades</p>
                        </CardHeader>
                        <div className="flex flex-col items-center">
                            {/* Placeholder for Donut Chart */}
                            <div className="h-48 w-48 relative flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border-[12px] border-blue-600 border-t-transparent border-r-transparent border-b-rose-500 border-l-green-500 rotate-45 opacity-20" />
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-800">{stats.totalProperties}</p>
                                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Total</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <TypeBadge
                                color="bg-blue-600"
                                label="En Venta"
                                percentage={`${stats.totalProperties > 0 ? Math.round((stats.salesCount / stats.totalProperties) * 100) : 0}%`}
                            />
                            <TypeBadge
                                color="bg-green-500"
                                label="En Alquiler"
                                percentage={`${stats.totalProperties > 0 ? Math.round((stats.rentCount / stats.totalProperties) * 100) : 0}%`}
                            />
                            <TypeBadge
                                color="bg-orange-400"
                                label="Alq. Temp"
                                percentage={`${stats.totalProperties > 0 ? Math.round((stats.tempRentCount / stats.totalProperties) * 100) : 0}%`}
                            />
                        </div>
                    </Card>

                    <Card className="border-none shadow-sm rounded-3xl p-6 bg-white">
                        <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-lg font-bold text-gray-800">Uso del Plan</CardTitle>
                        </CardHeader>
                        <div className="space-y-4">
                            <PlanProgressBar label="Inmuebles Publicados" current={stats.totalProperties} max={1000} color="bg-rose-500" />
                            <PlanProgressBar label="Correo electrónico" current={30} max={1000} color="bg-cyan-400" unit="Mb" />
                            <PlanProgressBar label="Imágenes" current={450} max={10000} color="bg-blue-600" unit="Mb" />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

function StatCard({ title, value, percentage, color, textColor, icon: Icon }: { title: string, value: string, percentage: number, color: string, textColor: string, icon: any }) {
    return (
        <Card className="border-none shadow-sm rounded-3xl overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div className="space-y-2">
                        <p className="text-2xl font-black text-white mix-blend-difference">{value}</p>
                        <p className="text-xs font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">{title}</p>
                    </div>
                    <div className={`h-12 w-12 rounded-full ${color} flex items-center justify-center text-white shadow-lg shadow-current/20`}>
                        <Icon className="h-6 w-6" />
                    </div>
                </div>
                {/* Visual Progress ring/line logic would go here, using percentage */}
                <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }} />
                </div>
            </CardContent>
        </Card>
    )
}

function RecentInquiry({ name, time, message, avatar }: any) {
    return (
        <div className="flex gap-4 group cursor-pointer">
            <Avatar className="h-10 w-10 border border-gray-100 shadow-sm">
                <AvatarImage src={avatar} />
                <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                    <h4 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{name}</h4>
                    <span className="text-[10px] text-gray-400 font-medium">{time}</span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {message}
                </p>
            </div>
        </div>
    )
}

function LocationItem({ city, count, color }: any) {
    return (
        <div className="flex items-center gap-3">
            <div className={`h-1 duration-700 w-1 rounded-full ${color}`} />
            <span className="text-sm font-bold text-gray-700 flex-1">{city}</span>
            <span className="text-xs font-bold text-gray-400">{count} Inmuebles</span>
        </div>
    )
}

function MiniStat({ label, value, percentage, color, icon: Icon }: any) {
    return (
        <div className="flex items-center gap-6">
            <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-gray-800">{value}</span>
                    <div className={`h-8 w-8 rounded-full bg-opacity-10 flex items-center justify-center ${color.replace('text', 'bg')}`}>
                        <div className={`h-4 w-4 rounded-full border-2 border-[currentColor] flex items-center justify-center p-0.5`}>
                            <div className="h-full w-full rounded-full bg-current" style={{ clipPath: `polygon(50% 50%, 50% 0%, ${percentage > 50 ? '100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%' : '100% 0%, 100% ' + (percentage * 2) + '%'} )` }} />
                        </div>
                    </div>
                </div>
                <p className="text-[10px] text-gray-400 font-bold leading-tight uppercase tracking-wider">{label}</p>
            </div>
            <div className={`h-12 w-12 rounded-2xl bg-gray-50 flex items-center justify-center ${color} font-bold text-sm`}>
                {percentage}%
            </div>
        </div>
    )
}

function TypeBadge({ color, label, percentage }: { color: string, label: string, percentage: string }) {
    return (
        <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${color}`} />
            <span className="text-[10px] font-bold text-gray-500 tracking-wide uppercase">{label}</span>
            <span className="text-[10px] font-black text-gray-800 ml-auto">{percentage}</span>
        </div>
    )
}

function PlanProgressBar({ label, current, max, color, unit = "" }: { label: string, current: number, max: number, color: string, unit?: string }) {
    const percentage = (current / max) * 100
    return (
        <div className="space-y-1.5">
            <div className="flex justify-between items-end">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{label}</p>
                <p className="text-[10px] font-bold text-gray-800">{current}{unit} <span className="text-gray-300">/ {max}{unit}</span></p>
            </div>
            <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${percentage}%` }} />
            </div>
        </div>
    )
}

function FunnelStep({ label, value, color, percentage }: { label: string, value: number, color: string, percentage: number }) {
    return (
        <div className="flex flex-col items-center gap-2 group">
            <div className="text-sm font-black text-gray-800">{value}</div>
            <div
                className={cn("w-full rounded-t-lg transition-all duration-1000", color)}
                style={{ height: `${Math.max(10, (value / 100) * 100 + 20)}%` }}
            />
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter text-center h-4 flex items-center">{label}</div>
        </div>
    )
}

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
