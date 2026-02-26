import { Settings } from "lucide-react"

export default function AjustesPage() {
    return (
        <div className="h-[80vh] flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-700">
            <div className="h-20 w-20 bg-gray-50 text-gray-600 rounded-3xl flex items-center justify-center">
                <Settings className="h-10 w-10" />
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-black text-blue-950 tracking-tighter">Configuración del Sistema</h1>
                <p className="text-gray-500 font-medium">Estamos trabajando en los ajustes globales de tu cuenta. Estarán listos pronto.</p>
            </div>
        </div>
    )
}
