import { AutomationForm } from "./form"

export default function NewAutomationPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500 pb-10">
            <div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">Nueva Automatización</h2>
                <p className="text-gray-500 text-sm font-medium mt-1">Crea una regla de automatización basada en eventos</p>
            </div>
            <AutomationForm />
        </div>
    )
}
