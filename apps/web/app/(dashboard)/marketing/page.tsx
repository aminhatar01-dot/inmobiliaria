import { Suspense } from "react"
import { getCampaigns } from "@/app/actions/marketing"
import {
    Mail,
    MessageSquare,
    Users,
    Zap,
    Plus,
    Target,
    TrendingUp,
    MoreHorizontal,
    Play,
    Pause,
    BarChart3
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default async function MarketingPage() {
    const campaigns = await getCampaigns()

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-8">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                            <Target className="h-5 w-5" />
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Marketing Studio</h2>
                    </div>
                    <p className="text-gray-500 font-medium text-lg ml-13">Multiplica tus cierres con campañas inteligentes y automatizadas.</p>
                </div>
                <div className="flex gap-3">
                    <Link href="/marketing/automatizaciones">
                        <Button variant="outline" className="rounded-2xl h-12 px-6 font-bold border-gray-200">
                            <Zap className="mr-2 h-4 w-4 text-amber-500" />
                            Automatizaciones
                        </Button>
                    </Link>
                    <Button className="rounded-2xl h-12 px-6 font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white">
                        <Plus className="mr-2 h-4 w-4" />
                        Nueva Campaña
                    </Button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Leads Activos", value: "1,280", icon: Users, color: "blue", trend: "+12%" },
                    { label: "Emails Enviados", value: "45,200", icon: Mail, color: "purple", trend: "+8%" },
                    { label: "Mensajes WA", value: "2,450", icon: MessageSquare, color: "green", trend: "+24%" },
                    { label: "Conversión de Automatización", value: "18.5%", icon: Zap, color: "amber", trend: "+5%" },
                ].map((stat, i) => (
                    <Card key={i} className="border-none shadow-xl shadow-gray-200/50 rounded-[2rem] overflow-hidden group hover:scale-[1.02] transition-transform">
                        <CardContent className="p-8">
                            <div className="flex items-start justify-between">
                                <div className={`h-12 w-12 rounded-2xl bg-${stat.color}-50 flex items-center justify-center text-${stat.color}-600`}>
                                    <stat.icon className="h-6 w-6" />
                                </div>
                                <Badge variant="outline" className="border-green-100 bg-green-50 text-green-600 text-[10px] font-black rounded-full px-2">
                                    {stat.trend}
                                </Badge>
                            </div>
                            <div className="mt-6">
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                                <h3 className="text-3xl font-black text-gray-900 mt-1">{stat.value}</h3>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Active Campaigns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-blue-600" />
                            Campañas en Curso
                        </h3>
                        <Button variant="ghost" className="text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl">Ver todas</Button>
                    </div>

                    <div className="space-y-4">
                        {campaigns.length > 0 ? (
                            campaigns.map((campaign: any) => (
                                <Card key={campaign.id} className="border-none shadow-lg shadow-gray-100/50 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow bg-white">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-gray-50 flex items-center justify-center">
                                                    {campaign.type === 'email' && <Mail className="h-6 w-6 text-purple-500" />}
                                                    {campaign.type === 'whatsapp' && <MessageSquare className="h-6 w-6 text-green-500" />}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{campaign.name}</h4>
                                                    <p className="text-xs text-gray-500 font-medium">{campaign.type.toUpperCase()} • {new Date(campaign.created_at).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Badge className={`rounded-lg font-black text-[10px] uppercase px-2 ${campaign.status === 'active' ? 'bg-green-100 text-green-600' :
                                                        campaign.status === 'paused' ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-600'
                                                    }`}>
                                                    {campaign.status}
                                                </Badge>
                                                <Button variant="ghost" size="icon" className="rounded-xl h-9 w-9 text-gray-400">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="mt-6 grid grid-cols-3 gap-4">
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Enviados</p>
                                                <p className="text-lg font-black text-gray-900">12,450</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Aperturas</p>
                                                <p className="text-lg font-black text-gray-900">4,820 (38%)</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Clicks</p>
                                                <p className="text-lg font-black text-gray-900">945 (7%)</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-gray-50/50">
                                <CardContent className="p-12 text-center space-y-4">
                                    <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                                        <Mail className="h-8 w-8 text-gray-300" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-bold">No hay campañas activas</p>
                                        <p className="text-sm text-gray-500">Comienza creando tu primera campaña de email o WhatsApp.</p>
                                    </div>
                                    <Button className="rounded-xl font-bold bg-white border-gray-200 text-gray-900 hover:bg-gray-50" variant="outline">
                                        Explorar Plantillas
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>

                {/* Automation Quick look */}
                <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-blue-700 text-white overflow-hidden self-start">
                    <CardContent className="p-8 space-y-8">
                        <div>
                            <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-300">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-black mt-6 leading-tight">Automatiza tu Éxito</h3>
                            <p className="text-blue-100 text-sm font-medium mt-2">Convierte leads mientras duermes con flujos de trabajo inteligentes.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4">
                                <div className="h-8 w-8 rounded-full bg-green-400/20 flex items-center justify-center text-green-400">
                                    <Play className="h-4 w-4 fill-current" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold">Respuesta Bienvenida</p>
                                    <p className="text-[10px] opacity-60">Activo • 248 ejecuciones hoy</p>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 opacity-75">
                                <div className="h-8 w-8 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400">
                                    <Pause className="h-4 w-4 fill-current" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold">Nutrición de Inversores</p>
                                    <p className="text-[10px] opacity-60">Pausado • 1.2k total</p>
                                </div>
                            </div>
                        </div>

                        <Link href="/marketing/automatizaciones" className="block text-center p-4 bg-white text-blue-700 rounded-2xl font-black text-sm hover:bg-blue-50 transition-colors">
                            Gestionar Automatizaciones
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
