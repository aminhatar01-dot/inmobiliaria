import { getCampaigns } from "@/app/actions/campaigns"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Mail, Share2, MessageSquare, Smartphone, Calendar, MoreVertical } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export default async function CampaignsPage() {
    const campaigns = await getCampaigns()

    const typeIcons = {
        email: Mail,
        social_media: Share2,
        sms: MessageSquare,
        whatsapp: Smartphone
    }

    const statusLabels = {
        draft: 'Borrador',
        scheduled: 'Programada',
        active: 'Activa',
        completed: 'Completada',
        paused: 'Pausada'
    }

    const statusColors = {
        draft: 'bg-gray-100 text-gray-600',
        scheduled: 'bg-blue-100 text-blue-600',
        active: 'bg-green-100 text-green-600',
        completed: 'bg-purple-100 text-purple-600',
        paused: 'bg-yellow-100 text-yellow-600'
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-none">Campañas</h2>
                    <p className="text-gray-500 text-sm font-medium mt-2">Gestiona tus campañas de marketing</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button asChild className="h-12 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 rounded-2xl shadow-xl shadow-blue-500/20">
                        <Link href="/marketing/campanas/nueva">
                            <Plus className="h-4 w-4 mr-2" /> Nueva Campaña
                        </Link>
                    </Button>
                </div>
            </div>

            {campaigns.length === 0 ? (
                <Card className="border-none shadow-sm rounded-[3rem] bg-white overflow-hidden p-20 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <Mail className="h-16 w-16 text-gray-300" />
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">No hay campañas creadas</h3>
                            <p className="text-gray-500 text-sm mt-1">Crea tu primera campaña de marketing</p>
                        </div>
                        <Button asChild className="mt-4">
                            <Link href="/marketing/campanas/nueva">
                                <Plus className="h-4 w-4 mr-2" /> Crear Campaña
                            </Link>
                        </Button>
                    </div>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaigns.map((campaign) => {
                        const Icon = typeIcons[campaign.type] || Mail
                        return (
                            <Card key={campaign.id} className="border-none shadow-sm rounded-[2rem] hover:shadow-md transition-all group overflow-hidden bg-white">
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                                                <Icon className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-base font-bold text-gray-900">{campaign.name}</CardTitle>
                                                <CardDescription className="text-xs font-medium">
                                                    {campaign.type === 'email' && 'Email Marketing'}
                                                    {campaign.type === 'social_media' && 'Redes Sociales'}
                                                    {campaign.type === 'sms' && 'SMS'}
                                                    {campaign.type === 'whatsapp' && 'WhatsApp'}
                                                </CardDescription>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                            <MoreVertical className="h-4 w-4 text-gray-400" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Badge className={`${statusColors[campaign.status]} border-none font-bold text-[10px] uppercase tracking-widest px-3 py-1`}>
                                            {statusLabels[campaign.status]}
                                        </Badge>
                                        {campaign.scheduled_at && (
                                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                                <Calendar className="h-3 w-3" />
                                                {format(new Date(campaign.scheduled_at), "dd MMM", { locale: es })}
                                            </div>
                                        )}
                                    </div>
                                    <Button variant="outline" className="w-full rounded-xl" asChild>
                                        <Link href={`/marketing/campanas/${campaign.id}`}>
                                            Ver Detalles
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
