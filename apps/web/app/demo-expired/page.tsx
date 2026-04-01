import Link from "next/link"
import { Clock, Shield, ArrowRight, CreditCard } from "lucide-react"

export default function DemoExpiredPage() {
    return (
        <html lang="es">
            <body className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-6">
                <div className="w-full max-w-md text-center space-y-8">
                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 flex items-center justify-center">
                            <Clock className="h-12 w-12 text-amber-400" />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-3">
                        <h1 className="text-3xl font-black text-white tracking-tight">
                            Tu demo ha vencido
                        </h1>
                        <p className="text-gray-400 font-medium leading-relaxed">
                            Los 7 días de acceso gratuito han finalizado. <br />
                            Para continuar usando InmoCMS necesitás activar una suscripción.
                        </p>
                    </div>

                    {/* Benefits list */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left space-y-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Al suscribirte vas a poder</p>
                        {[
                            "Publicar inmuebles sin límite",
                            "Gestionar leads y clientes",
                            "Automatizaciones de marketing con IA",
                            "Mensajería integrada",
                            "Portales inmobiliarios y mucho más",
                        ].map((benefit) => (
                            <div key={benefit} className="flex items-center gap-3">
                                <div className="h-5 w-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                                </div>
                                <span className="text-sm text-gray-300 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                        <Link
                            href="/cuenta/plan"
                            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl py-4 transition-all shadow-xl shadow-blue-500/20 group"
                        >
                            <CreditCard className="h-5 w-5" />
                            Activar suscripción
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/login"
                            className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 font-bold rounded-2xl py-3.5 transition-all text-sm"
                        >
                            Volver al inicio de sesión
                        </Link>
                    </div>

                    {/* Superadmin badge */}
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600 font-medium">
                        <Shield className="h-3 w-3" />
                        InmoCMS — Demo Period Expired
                    </div>
                </div>
            </body>
        </html>
    )
}
