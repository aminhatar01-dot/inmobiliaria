"use client"

import { useState } from "react"
import { Check, Sparkles, Zap, Users, Building2, Crown, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner"

const PLANS = [
    {
        name: "Gratuito",
        price: "0",
        description: "Ideal para agentes que están empezando.",
        features: [
            "Hasta 5 propiedades activas",
            "Creación de 10 leads",
            "3 contenidos IA al mes",
            "Comunicación ilimitada con invitados",
            "3 automatizaciones (5 rtas/u)"
        ],
        icon: Sparkles,
        color: "text-gray-400",
        buttonText: "Plan Actual",
        popular: false
    },
    {
        name: "Profesional",
        price: "50.000",
        description: "Para agentes que buscan escalar su negocio.",
        features: [
            "Propiedades ilimitadas",
            "Leads ilimitados",
            "Contenido IA ilimitado",
            "Acceso completo al sistema",
            "Atención prioritaria"
        ],
        icon: Zap,
        color: "text-blue-600",
        buttonText: "Cambiar a Pro",
        popular: true
    },
    {
        name: "Agencia",
        price: "150.000",
        description: "Potencia tu inmobiliaria con todo tu equipo.",
        features: [
            "Todo lo del plan Profesional",
            "Invitaciones ilimitadas a agentes",
            "Agentes acceden gratis al plan",
            "Multi-perfil de agencia",
            "Gestión centralizada"
        ],
        icon: Building2,
        color: "text-purple-600",
        buttonText: "Elegir Agencia",
        popular: false
    }
]

import { initializeSubscription, createCheckoutPreference } from "@/app/actions/subscriptions"
import { useRouter } from "next/navigation"

export default function PlanPage() {
    const [loading, setLoading] = useState<string | null>(null)
    const router = useRouter()

    const handlePlanSelect = async (planName: string) => {
        setLoading(planName)

        try {
            if (planName !== "Gratuito") {
                const plan = PLANS.find(p => p.name === planName)
                const price = parseFloat(plan?.price.replace('.', '') || "0")

                toast.info("Generando link de pago", {
                    description: "Redirigiendo a Mercado Pago para tu plan " + planName
                })

                const pref = await createCheckoutPreference(planName, price)
                if (pref.success && pref.init_point) {
                    window.location.href = pref.init_point
                    return // Stop further execution as we are redirecting
                }
            } else {
                const result = await initializeSubscription(planName)
                if (result.success) {
                    toast.success("¡Plan activado con éxito!", {
                        description: "Tu inmobiliaria ha sido configurada. Redirigiendo..."
                    })
                    router.push("/dashboard")
                    router.refresh()
                }
            }
        } catch (error: any) {
            toast.error("Error", { description: error.message })
        } finally {
            setLoading(null)
        }
    }

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Gestiona tu Subscripción</h1>
                <p className="text-gray-500 font-medium leading-relaxed">
                    Escoge el plan que mejor se adapte a tu volumen de negocio en Argentina.
                    Sin comisiones por venta, solo tu subscripción mensual.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PLANS.map((plan) => (
                    <Card
                        key={plan.name}
                        className={`relative border-none shadow-2xl rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}
                    >
                        {plan.popular && (
                            <div className="absolute top-6 right-6">
                                <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Más Popular</span>
                            </div>
                        )}

                        <CardHeader className="pt-10 pb-6 text-center">
                            <div className={`mx-auto h-16 w-16 rounded-[1.5rem] bg-gray-50 flex items-center justify-center mb-4 ${plan.color}`}>
                                <plan.icon className="h-8 w-8" />
                            </div>
                            <CardTitle className="text-2xl font-black text-gray-900 tracking-tight uppercase">{plan.name}</CardTitle>
                            <CardDescription className="text-gray-400 font-medium px-4">{plan.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="px-10 space-y-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center">
                                    <span className="text-lg font-bold text-gray-400 mr-2">$</span>
                                    <span className="text-5xl font-black text-gray-900 tracking-tighter">{plan.price}</span>
                                </div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">pesos argentinos / mes</span>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-gray-50">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mt-0.5 shrink-0">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-600">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter className="p-10">
                            <Button
                                className={`w-full h-14 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl ${plan.name === "Gratuito"
                                    ? "bg-gray-100 hover:bg-gray-200 text-gray-600 shadow-none border-2 border-transparent"
                                    : "bg-blue-600 hover:bg-black text-white shadow-blue-500/20"
                                    }`}
                                onClick={() => handlePlanSelect(plan.name)}
                                disabled={loading === plan.name}
                            >
                                {loading === plan.name ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (plan.name === "Gratuito" ? "Elegir Plan Gratis" : plan.buttonText)}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="bg-gray-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                            <Crown className="h-4 w-4 text-amber-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Medios de Pago Soportados</span>
                        </div>
                        <h2 className="text-4xl font-black tracking-tighter leading-tight">Pagos rápidos y seguros con Mercado Pago</h2>
                        <p className="text-gray-400 font-medium text-lg leading-relaxed">
                            Aceptamos tarjetas de crédito/débito, transferencia bancaria y pagos en efectivo mediante RapiPago o PagoFácil.
                            Tu subscripción se acredita al instante.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <PaymentBadge text="Débito Automático" />
                        <PaymentBadge text="Tarjetas de Crédito" />
                        <PaymentBadge text="Efectivo (Link de Pago)" />
                        <PaymentBadge text="Dinero en Cuenta MP" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function PaymentBadge({ text }: { text: string }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all group">
            <span className="text-xs font-black text-gray-400 group-hover:text-blue-400 uppercase tracking-widest leading-relaxed transition-colors">
                {text}
            </span>
        </div>
    )
}
