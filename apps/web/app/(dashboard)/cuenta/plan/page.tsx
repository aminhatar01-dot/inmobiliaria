import { getSubscription } from "@/app/actions/account"
import { PlanSelector } from "@/components/account/plan-selector"

export default async function PlanPage() {
    const tenant = await getSubscription()

    return (
        <div className="space-y-8 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-blue-950 tracking-tighter">Mi Suscripción</h1>
                    <p className="text-gray-500 font-medium">Gestiona tu plan y descubre nuevas funcionalidades profesionales</p>
                </div>
                <div className="bg-blue-600/5 px-6 py-2 rounded-2xl border border-blue-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Plan Actual</span>
                    <span className="text-xl font-black text-blue-600 uppercase">{(tenant?.plan as string) || "Gratuito"}</span>
                </div>
            </div>

            <PlanSelector currentPlan={(tenant?.plan as string) || "free"} />
        </div>
    )
}
