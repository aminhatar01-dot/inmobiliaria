import { Suspense } from "react"
import { getPortalConnections } from "@/app/actions/portals"
import {
    Cloud,
    Link2,
    ExternalLink,
    MoreHorizontal,
    AlertCircle,
    CheckCircle2,
    Plus,
    Lock,
    Globe,
    Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default async function PortalesPage() {
    const connections = await getPortalConnections()

    const portalMeta: any = {
        'mercadolibre': {
            name: 'MercadoLibre',
            color: 'bg-yellow-400',
            textColor: 'text-gray-900',
            logo: 'ML',
            description: 'El portal #1 de Latinoamérica.'
        },
        'argenprop': {
            name: 'Argenprop',
            color: 'bg-red-600',
            textColor: 'text-white',
            logo: 'AP',
            description: 'Líder en el mercado argentino.'
        },
        'zonaprop': {
            name: 'Zonaprop',
            color: 'bg-blue-800',
            textColor: 'text-white',
            logo: 'ZP',
            description: 'Portal premium de Real Estate.'
        }
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-8">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                            <Cloud className="h-5 w-5" />
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Conexiones a Portales</h2>
                    </div>
                    <p className="text-gray-500 font-medium text-lg ml-13">Vincule sus cuentas externas para automatizar sus avisos.</p>
                </div>
            </div>

            {/* Platform Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(portalMeta).map(([key, meta]: [string, any]) => {
                    const conn = connections.find(c => c.portal_name === key)

                    return (
                        <Card key={key} className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] overflow-hidden group hover:scale-[1.02] transition-transform">
                            <CardHeader className={`${meta.color} p-8 flex flex-row items-center justify-between`}>
                                <div className={`h-16 w-16 ${meta.textColor} bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl font-black`}>
                                    {meta.logo}
                                </div>
                                {conn ? (
                                    <Badge className="bg-white/20 text-white backdrop-blur-md border-none font-black px-4 py-1.5 rounded-xl flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4" />
                                        VINCULADO
                                    </Badge>
                                ) : (
                                    <Badge variant="outline" className="border-white/40 text-white font-black px-4 py-1.5 rounded-xl border-2">
                                        SIN CONECTAR
                                    </Badge>
                                )}
                            </CardHeader>
                            <CardContent className="p-8 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 leading-tight">{meta.name}</h3>
                                    <p className="text-sm text-gray-500 font-medium mt-1">{meta.description}</p>
                                </div>

                                {conn ? (
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
                                            <div>
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Cuenta</p>
                                                <p className="text-sm font-bold text-gray-900">{conn.account_email}</p>
                                            </div>
                                            <div className="h-8 w-8 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                                                <CheckCircle2 className="h-4 w-4" />
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" className="flex-1 rounded-xl font-black text-xs h-11">
                                                DESVINCULAR
                                            </Button>
                                            <Button className="flex-1 rounded-xl font-black text-xs h-11 bg-gray-900 text-white hover:bg-black">
                                                CONFIGURAR
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-sm font-medium text-gray-400 bg-gray-50/50 rounded-2xl p-6 border-2 border-dashed border-gray-100 italic">
                                            <Lock className="h-4 w-4" />
                                            Requiere autorización OAuth
                                        </div>
                                        <Button className={`w-full rounded-2xl font-black h-14 ${meta.color} ${meta.textColor} shadow-lg shadow-${key}-500/20 active:scale-95 transition-all`}>
                                            <Link2 className="mr-2 h-5 w-5" />
                                            VINCULAR CUENTA
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-700 text-white overflow-hidden">
                    <CardContent className="p-10 space-y-8">
                        <div className="h-14 w-14 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                            <Zap className="h-8 w-8 text-amber-300 fill-current" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-black leading-tight">Publicación Automática</h3>
                            <p className="text-indigo-100 text-lg font-medium mt-4 leading-relaxed">
                                Una vez vinculados tus portales, podrás exportar tus propiedades con solo un click, sincronizando fotos, descripción y precios instantáneamente.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
                            {[
                                { label: "Sincronización", value: "Real-time" },
                                { label: "Imágenes", value: "HD" },
                                { label: "Updates", value: "Auto" },
                            ].map((item, i) => (
                                <div key={i}>
                                    <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">{item.label}</p>
                                    <p className="text-lg font-black mt-1">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] bg-white overflow-hidden border border-gray-100">
                    <CardHeader className="p-10 pb-0">
                        <CardTitle className="text-2xl font-black flex items-center gap-3">
                            <Globe className="h-6 w-6 text-indigo-600" />
                            Próximamente
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-10 space-y-6">
                        {[
                            'Lugar Propan (Chile)',
                            'Finca Raíz (Colombia)',
                            'VivaAnuncios (México)',
                            'Properati (LATAM)'
                        ].map((portal, i) => (
                            <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                                <span className="font-bold text-gray-900">{portal}</span>
                                <Badge className="bg-gray-100 text-gray-400 font-bold border-none rounded-lg text-[10px]">EN DESARROLLO</Badge>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
