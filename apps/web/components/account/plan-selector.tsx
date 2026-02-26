"use client"

import { useState } from "react"
import { Check, Loader2, Rocket, Zap, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { updateSubscription } from "@/app/actions/account"

const PLANS = [
    {
        id: "free",
        name: "Free",
        price: "$0",
        description: "Para agentes independientes empezando",
        features: ["Hasta 5 propiedades", "1 usuario", "Soporte comunitario", "Marca de agua básica"],
        icon: Zap,
        color: "text-gray-500",
        bg: "bg-gray-50"
    },
    {
        id: "pro",
        name: "Pro",
        price: "$49",
        description: "Para inmobiliarias en crecimiento",
        features: ["Propiedades ilimitadas", "Hasta 5 agentes", "IA Creative Studio básico", "Soporte prioritario", "Publicación automatizada"],
        icon: Rocket,
        color: "text-blue-600",
        bg: "bg-blue-50",
        featured: true
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "$149",
        description: "Para grandes grupos inmobiliarios",
        features: ["Agentes ilimitados", "Multisucursal", "IA Creative Studio avanzado", "API Access", "Gestor de cuenta dedicado"],
        icon: ShieldCheck,
        color: "text-indigo-600",
        bg: "bg-indigo-50"
    }
]

interface PlanSelectorProps {
    currentPlan: string
}

export function PlanSelector({ currentPlan }: PlanSelectorProps) {
    const [loading, setLoading] = useState<string | null>(null)

    const handleUpdate = async (planId: string) => {
        setLoading(planId)
        try {
            await updateSubscription(planId)
            toast.success(`Plan actualizado a ${planId.toUpperCase()} correctamente`)
        } catch (error: any) {
            toast.error(error.message || "Error al actualizar el plan")
        } finally {
            setLoading(null)
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            {PLANS.map((plan) => (
                <Card
                    key={plan.id}
                    className={`relative border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white/80 backdrop-blur-xl flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${plan.featured ? 'ring-2 ring-blue-500 ring-offset-4' : ''}`}
                >
                    {plan.featured && (
                        <div className="absolute top-0 right-0">
                            <div className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl">
                                Recomendado
                            </div>
                        </div>
                    )}
                    <CardHeader className="p-8">
                        <div className={`h-14 w-14 rounded-2xl ${plan.bg} ${plan.color} flex items-center justify-center mb-6`}>
                            <plan.icon className="h-7 w-7" />
                        </div>
                        <CardTitle className="text-3xl font-black text-gray-900 tracking-tight">{plan.name}</CardTitle>
                        <CardDescription className="text-lg font-medium text-gray-400 mt-2">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 flex-1 space-y-8">
                        <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                            <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">/mes</span>
                        </div>

                        <div className="space-y-4">
                            {plan.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <div className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    <span className="text-sm font-bold text-gray-600">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="p-8 pt-0">
                        <Button
                            className={`w-full h-14 rounded-2xl text-lg font-black transition-all ${currentPlan === plan.id
                                    ? 'bg-gray-100 text-gray-400 cursor-default'
                                    : plan.featured ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20' : 'bg-gray-900 hover:bg-black text-white'
                                }`}
                            disabled={currentPlan === plan.id || (loading !== null)}
                            onClick={() => handleUpdate(plan.id)}
                        >
                            {loading === plan.id ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : currentPlan === plan.id ? (
                                "Plan Actual"
                            ) : (
                                "Seleccionar Plan"
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
