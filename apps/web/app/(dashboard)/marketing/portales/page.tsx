import { getPortalConnections } from "@/app/actions/portals"
import {
    Cloud,
    Globe,
    Zap
} from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PortalList } from "@/components/marketing/portal-list"

export default async function PortalesPage() {
    const connections = await getPortalConnections()

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

            <PortalList initialConnections={connections} />

            {/* Info Section */}
            <div className="mt-12">
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
                        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10 text-center md:text-left">
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
            </div>
        </div>
    )
}


