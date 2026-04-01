import { Suspense } from "react"
import { getChannelConnections } from "@/app/actions/channels"
import { ChannelList } from "@/components/marketing/channel-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Sparkles, PlugZap } from "lucide-react"

export default async function ChannelsPage() {
    const connections = await getChannelConnections()

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <PlugZap className="w-64 h-64 text-blue-900 rotate-12" />
                </div>

                <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <Link href="/marketing">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-gray-100 text-gray-400">
                                <ArrowLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-none font-bold px-3 py-1 text-xs">Integraciones</Badge>
                    </div>
                    <h1 className="text-3xl font-black tracking-tight text-gray-900">
                        Canales de Comunicación
                    </h1>
                    <p className="text-gray-500 font-medium max-w-2xl">
                        Conecta tus redes sociales, WhatsApp y correo electrónico para centralizar la atención.
                        InmoCMS interceptará los leads y te permitirá responderles o activarles seguimientos automatizados.
                    </p>
                </div>

                <div className="relative z-10 hidden md:block">
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-start gap-3 max-w-sm">
                        <div className="bg-blue-100 p-2 rounded-xl text-blue-600 shrink-0 mt-0.5">
                            <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-blue-900">Centralización Inteligente</p>
                            <p className="text-xs font-medium text-blue-700/80 leading-relaxed mt-1">Al conectar un canal, InmoCMS podrá capturar automáticamente a los clientes interesados en tus propiedades.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Channels Grid */}
            <div className="space-y-6">
                <div className="flex items-center justify-between px-2">
                    <h2 className="text-xl font-black text-gray-800">Plataformas Disponibles</h2>
                </div>
                <Suspense fallback={<ChannelsLoadingSkeleton />}>
                    <ChannelList connections={connections} />
                </Suspense>
            </div>

            {/* API Warning/Info */}
            <div className="bg-orange-50 border border-orange-100 p-5 rounded-2xl flex items-start gap-4 mx-2">
                <div className="bg-orange-100 p-2 rounded-xl text-orange-600 shrink-0 mt-0.5">
                    <PlugZap className="h-5 w-5" />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-orange-900">Aviso sobre integraciones oficiales</h3>
                    <p className="text-xs font-medium text-orange-800/80 leading-relaxed mt-1">
                        Las conexiones a WhatsApp y Meta (Facebook/Instagram) requieren aprobación oficial comercial. InmoCMS provee la tecnología de conexión, pero deberás asegurar que tus cuentas de empresa cumplan con las políticas de Meta.
                    </p>
                </div>
            </div>
        </div>
    )
}

function Badge({ children, className, variant }: any) {
    return <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>{children}</span>
}

function ChannelsLoadingSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="bg-white border-2 border-gray-100 rounded-3xl p-6 h-[260px]">
                    <div className="h-14 w-14 bg-gray-100 rounded-2xl mb-4"></div>
                    <div className="h-6 bg-gray-100 rounded-md w-1/2 mb-3"></div>
                    <div className="h-4 bg-gray-50 rounded-md w-full mb-2"></div>
                    <div className="h-4 bg-gray-50 rounded-md w-4/5 mb-8"></div>
                    <div className="h-11 bg-gray-100 rounded-xl w-full"></div>
                </div>
            ))}
        </div>
    )
}
