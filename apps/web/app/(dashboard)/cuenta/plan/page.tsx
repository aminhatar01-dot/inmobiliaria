"use client"

import { useState, useEffect, Suspense } from "react"
import { Check, Sparkles, Zap, Users, Building2, Crown, Loader2, CalendarDays, CreditCard, ShieldCheck, AlertTriangle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { toast } from "sonner"
import { initializeSubscription, createCheckoutPreference, createRecurringSubscription, getSubscriptionStatus, type SubscriptionStatus } from "@/app/actions/subscriptions"
import { useRouter, useSearchParams } from "next/navigation"

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
        buttonText: "Elegir Plan Gratis",
        popular: false
    },
    {
        name: "Profesional",
        price: "5",
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
        price: "5",
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

function formatDate(dateStr: string | null): string {
    if (!dateStr) return "—"
    const d = new Date(dateStr)
    return d.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" })
}

function daysUntil(dateStr: string | null): number {
    if (!dateStr) return 0
    const d = new Date(dateStr)
    const now = new Date()
    return Math.max(0, Math.ceil((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))
}

function getStatusConfig(status: SubscriptionStatus['status']) {
    switch (status) {
        case 'active':
            return { label: 'Activa', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', icon: ShieldCheck }
        case 'past_due':
            return { label: 'Pago Vencido', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', icon: AlertTriangle }
        case 'canceled':
            return { label: 'Cancelada', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', icon: AlertTriangle }
        default:
            return { label: 'Sin Plan', color: 'text-gray-500', bg: 'bg-gray-50', border: 'border-gray-200', icon: Clock }
    }
}

export default function PlanPage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
        }>
            <PlanPageContent />
        </Suspense>
    )
}

function PlanPageContent() {
    const [loading, setLoading] = useState<string | null>(null)
    const [subscription, setSubscription] = useState<SubscriptionStatus | null>(null)
    const [loadingSub, setLoadingSub] = useState(true)
    const [isRecurring, setIsRecurring] = useState(true)
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const status = searchParams.get('status')
        if (status === 'failure') {
            toast.error("Pago no completado", {
                description: "El pago fue cancelado o rechazado. Puedes intentar nuevamente."
            })
        }
    }, [searchParams])

    useEffect(() => {
        getSubscriptionStatus()
            .then(setSubscription)
            .catch(() => setSubscription(null))
            .finally(() => setLoadingSub(false))
    }, [])

    const handlePlanSelect = async (planName: string) => {
        setLoading(planName)

        try {
            if (planName !== "Gratuito") {
                const plan = PLANS.find(p => p.name === planName)
                const price = parseFloat(plan?.price.replace(/\./g, '') || "0")

                toast.info("Generando link de " + (isRecurring ? "débito automático" : "pago único"), {
                    description: "Redirigiendo a Mercado Pago para tu plan " + planName
                })

                const pref = isRecurring 
                    ? await createRecurringSubscription(planName, price)
                    : await createCheckoutPreference(planName, price)

                if (pref.success && pref.init_point) {
                    window.location.href = pref.init_point
                    return // Stop further execution as we are redirecting
                } else {
                    toast.error("Error al procesar el pago", {
                        description: pref.error || "Por favor, inténtalo de nuevo."
                    })
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

    const currentPlanName = subscription?.planName || 'Gratuito'
    const statusConfig = getStatusConfig(subscription?.status || 'none')
    const StatusIcon = statusConfig.icon
    const remaining = daysUntil(subscription?.currentPeriodEnd || null)

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Gestiona tu Subscripción</h1>
                <p className="text-gray-500 font-medium leading-relaxed">
                    Escoge el plan que mejor se adapte a tu volumen de negocio en Argentina.
                    Sin comisiones por venta, solo tu subscripción mensual.
                </p>
            </div>

            {/* ── ESTADO DE CUENTA ── */}
            {loadingSub ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                </div>
            ) : subscription && subscription.status !== 'none' ? (
                <div className={`rounded-[2rem] border-2 ${statusConfig.border} ${statusConfig.bg} p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                            <div className="flex items-center gap-4">
                                <div className={`h-14 w-14 rounded-2xl ${statusConfig.bg} border ${statusConfig.border} flex items-center justify-center`}>
                                    <StatusIcon className={`h-7 w-7 ${statusConfig.color}`} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                                        Plan {currentPlanName}
                                    </h2>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${statusConfig.bg} ${statusConfig.color} border ${statusConfig.border}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${subscription.status === 'active' ? 'bg-emerald-500' : subscription.status === 'past_due' ? 'bg-amber-500' : 'bg-red-500'}`} />
                                            Suscripción {statusConfig.label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <span className="text-3xl font-black text-gray-900">${subscription.priceArs}</span>
                                    <span className="text-sm text-gray-500 font-medium ml-1">/ mes</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/60 shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <CalendarDays className="h-5 w-5 text-blue-500" />
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Inicio del período</span>
                                </div>
                                <p className="text-lg font-bold text-gray-900">{formatDate(subscription.currentPeriodStart)}</p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/60 shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <CreditCard className="h-5 w-5 text-purple-500" />
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Próximo pago</span>
                                </div>
                                <p className="text-lg font-bold text-gray-900">{formatDate(subscription.currentPeriodEnd)}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    {remaining > 0
                                        ? `Faltan ${remaining} días`
                                        : <span className="text-red-600 font-bold">Vencido</span>
                                    }
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/60 shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Estado</span>
                                </div>
                                <p className={`text-lg font-bold ${statusConfig.color}`}>{statusConfig.label}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    {subscription.status === 'active'
                                        ? 'Tu plan está vigente y funcionando'
                                        : subscription.status === 'past_due'
                                            ? 'Renueva para mantener tu acceso'
                                            : 'Tu suscripción está inactiva'}
                                </p>
                            </div>
                        </div>

                        {/* Progress bar for remaining days */}
                        {subscription.currentPeriodStart && subscription.currentPeriodEnd && (
                            <div className="mt-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Período actual</span>
                                    <span className="text-xs font-bold text-gray-600">{remaining} días restantes</span>
                                </div>
                                <div className="h-2 bg-white/60 rounded-full overflow-hidden border border-white/40">
                                    <div
                                        className={`h-full rounded-full transition-all duration-1000 ${remaining > 7 ? 'bg-gradient-to-r from-blue-500 to-blue-600' : remaining > 3 ? 'bg-gradient-to-r from-amber-400 to-amber-500' : 'bg-gradient-to-r from-red-400 to-red-500'}`}
                                        style={{
                                            width: `${Math.max(2, Math.min(100, ((30 - remaining) / 30) * 100))}%`
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : null}

            {/* ── SELECTOR DE MODO DE PAGO ── */}
            <div className="flex flex-col items-center justify-center space-y-6">
                <div className="flex items-center gap-4 bg-gray-100/50 p-1.5 rounded-[2rem] border border-gray-200">
                    <button
                        onClick={() => setIsRecurring(true)}
                        className={`px-8 py-4 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                            isRecurring 
                                ? "bg-white text-blue-600 shadow-xl shadow-blue-500/10" 
                                : "text-gray-400 hover:text-gray-600"
                        }`}
                    >
                        <ShieldCheck className={`h-4 w-4 ${isRecurring ? 'animate-pulse' : ''}`} />
                        Débito Automático
                    </button>
                    <button
                        onClick={() => setIsRecurring(false)}
                        className={`px-8 py-4 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                            !isRecurring 
                                ? "bg-white text-blue-600 shadow-xl shadow-blue-500/10" 
                                : "text-gray-400 hover:text-gray-600"
                        }`}
                    >
                        <CreditCard className="h-4 w-4" />
                        Pago Único
                    </button>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                        {isRecurring 
                            ? "Se cobrará automáticamente cada mes" 
                            : "Deberás renovar manualmente cada 30 días"}
                    </span>
                </div>
            </div>

            {/* ── PLANES ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PLANS.map((plan) => {
                    const isCurrent = plan.name.toLowerCase() === currentPlanName.toLowerCase()
                    return (
                        <Card
                            key={plan.name}
                            className={`relative border-none shadow-2xl rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-blue-600' : ''} ${isCurrent ? 'ring-2 ring-emerald-500' : ''}`}
                        >
                            {plan.popular && !isCurrent && (
                                <div className="absolute top-6 right-6">
                                    <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Más Popular</span>
                                </div>
                            )}
                            {isCurrent && (
                                <div className="absolute top-6 right-6">
                                    <span className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                                        <Check className="h-3 w-3" /> Tu Plan
                                    </span>
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
                                    className={`w-full h-14 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl ${
                                        isCurrent
                                            ? "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 shadow-none border-2 border-emerald-200 cursor-default"
                                            : plan.name === "Gratuito"
                                                ? "bg-gray-100 hover:bg-gray-200 text-gray-600 shadow-none border-2 border-transparent"
                                                : "bg-blue-600 hover:bg-black text-white shadow-blue-500/20"
                                    }`}
                                    onClick={() => !isCurrent && handlePlanSelect(plan.name)}
                                    disabled={loading === plan.name || isCurrent}
                                >
                                    {loading === plan.name ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : isCurrent ? (
                                        <span className="flex items-center gap-2"><Check className="h-4 w-4" /> Plan Actual</span>
                                    ) : (
                                        plan.buttonText
                                    )}
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>

            {/* ── MEDIOS DE PAGO ── */}
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
