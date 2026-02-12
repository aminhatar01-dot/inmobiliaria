import { CampaignForm } from "./form"

export default function NewCampaignPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500 pb-10">
            <div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">Nueva Campaña</h2>
                <p className="text-gray-500 text-sm font-medium mt-1">Crea una nueva campaña de marketing</p>
            </div>
            <CampaignForm />
        </div>
    )
}
