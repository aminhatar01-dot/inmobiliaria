import { getPortalConnections } from "@/app/actions/portals"
import { PORTAL_LABELS } from "@inmocms/shared"
import { notFound } from "next/navigation"
import { PortalConfigForm } from "./config-form"
import { ChevronLeft, KeyRound, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function PortalConfigPage({ params }: { params: Promise<{ portalName: string }> }) {
    const { portalName } = await params

    // Validate portal name
    if (!['mercadolibre', 'argenprop', 'zonaprop'].includes(portalName)) {
        notFound()
    }

    const connections = await getPortalConnections()
    const connection = connections.find(c => c.portal_name === portalName)

    // Extract existing credentials if any
    const existingConfig = {
        clientId: connection?.credentials?.client_id || "",
        clientSecret: connection?.credentials?.client_secret || ""
    }

    const portalLabel = PORTAL_LABELS[portalName as keyof typeof PORTAL_LABELS]

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 border border-gray-100 bg-white" asChild>
                    <Link href="/marketing/portales">
                        <ChevronLeft className="h-5 w-5" />
                    </Link>
                </Button>
                <div>
                    <h2 className="text-3xl font-black text-gray-800 tracking-tight">Configurar {portalLabel}</h2>
                    <p className="text-gray-500 font-medium">Ajustes avanzados de integración API y OAuth 2.0</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Info Panel */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 text-indigo-900 space-y-4">
                        <ShieldCheck className="h-8 w-8 text-indigo-600" />
                        <h3 className="font-black text-lg">Integración Segura</h3>
                        <p className="text-sm font-medium text-indigo-800/80 leading-relaxed">
                            Para publicar propiedades reales, {portalLabel} requiere que autorices esta aplicación mediante credenciales de desarrollador.
                        </p>
                        <ul className="text-xs space-y-2 mt-4 font-bold text-indigo-700">
                            <li className="flex gap-2">
                                <span className="bg-indigo-200 text-indigo-900 rounded-full h-4 w-4 flex items-center justify-center shrink-0">1</span>
                                Crea una App en el portal de desarrolladores de {portalLabel}
                            </li>
                            <li className="flex gap-2">
                                <span className="bg-indigo-200 text-indigo-900 rounded-full h-4 w-4 flex items-center justify-center shrink-0">2</span>
                                Copia el App ID / Client ID
                            </li>
                            <li className="flex gap-2">
                                <span className="bg-indigo-200 text-indigo-900 rounded-full h-4 w-4 flex items-center justify-center shrink-0">3</span>
                                Genera y copia el Secret Key
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-6 space-y-3">
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">URI de Redirección</h4>
                        <p className="text-xs font-medium text-gray-500 mb-2">
                            Copia esta URL y pégala en los ajustes de tu App en {portalLabel}:
                        </p>
                        <code className="block p-3 bg-gray-900 text-green-400 rounded-xl text-xs overflow-x-auto whitespace-nowrap">
                            https://tu-dominio.com/api/auth/callback/{portalName}
                        </code>
                    </div>
                </div>

                {/* Form Panel */}
                <div className="md:col-span-2">
                    <PortalConfigForm
                        portalName={portalName}
                        portalLabel={portalLabel}
                        initialConfig={existingConfig}
                    />
                </div>
            </div>
        </div>
    )
}
