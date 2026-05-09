import { createClient } from "@/lib/supabase/server"
import { Globe, Copy, ExternalLink, QrCode, Share2, Sparkles, Building2, User, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { toast } from "sonner"
import { PortfolioLinkClient } from "./portfolio-link-client"

export default async function PortfolioDashboardPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return null

    const { data: profile } = await supabase
        .from('profiles')
        .select(`
            id,
            name,
            email,
            phone,
            tenant_id,
            tenants (
                name,
                slug
            )
        `)
        .eq('id', user.id)
        .single()

    const tenant = Array.isArray(profile?.tenants) ? profile?.tenants[0] : (profile?.tenants as any)
    const tenantSlug = tenant?.slug || 'agencia'
    const portfolioUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://inmocms.com'}/${tenantSlug}?agente=${user.id}`

    return (
        <div className="space-y-8 max-w-5xl mx-auto py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Mi Porfolio Digital</h1>
                    <p className="text-gray-500 font-medium">Comparte todas tus propiedades disponibles con un solo link profesional.</p>
                </div>
                <Badge className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest h-fit">
                    Actualizado en tiempo real
                </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* ── SECCIÓN COMPARTIR ── */}
                <Card className="lg:col-span-2 border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-white">
                    <CardHeader className="p-10 pb-6">
                        <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                            <Share2 className="h-7 w-7 text-blue-600" />
                        </div>
                        <CardTitle className="text-2xl font-black text-gray-900 tracking-tight">Link de tu Porfolio</CardTitle>
                        <CardDescription className="text-gray-400 font-medium">
                            Este es el enlace que debes enviar a tus clientes por WhatsApp o redes sociales.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-10 pt-0 space-y-8">
                        <PortfolioLinkClient url={portfolioUrl} />
                    </CardContent>
                </Card>

                {/* ── MINI PERFIL ── */}
                <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-gray-900 text-white">
                    <CardHeader className="p-8 pb-4 text-center">
                        <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-1 mb-4 shadow-xl">
                            <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center">
                                <User className="h-12 w-12 text-blue-400" />
                            </div>
                        </div>
                        <CardTitle className="text-xl font-black tracking-tight">{profile?.name}</CardTitle>
                        <CardDescription className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{tenant?.name}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0 space-y-6">
                        <div className="space-y-4 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-blue-400" />
                                <span className="text-sm font-medium">{profile?.phone || 'Sin teléfono'}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-blue-400" />
                                <span className="text-sm font-medium truncate">{profile?.email}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Building2 className="h-4 w-4 text-blue-400" />
                                <span className="text-sm font-medium">{tenant?.name}</span>
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Tu porfolio incluye:</p>
                            <ul className="text-xs text-gray-400 space-y-2 font-medium">
                                <li className="flex items-center gap-2"><Sparkles className="h-3 w-3" /> Todas tus propiedades activas</li>
                                <li className="flex items-center gap-2"><Sparkles className="h-3 w-3" /> Ficha técnica detallada</li>
                                <li className="flex items-center gap-2"><Sparkles className="h-3 w-3" /> Formulario de contacto directo</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* ── CONSEJOS ── */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="h-20 w-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                        <Globe className="h-10 w-10 text-white" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-black tracking-tight">Tu porfolio es tu mejor carta de presentación</h3>
                        <p className="text-blue-100 font-medium">
                            Cada vez que subas o actualices una propiedad en InmoCMS, tu porfolio se actualizará automáticamente. 
                            No necesitas enviar PDFs pesados, envía tu link y deja que tus clientes naveguen tu catálogo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
