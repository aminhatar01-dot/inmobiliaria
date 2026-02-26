import { Users } from "lucide-react"

export default function ClientesPage() {
    return (
        <div className="h-[80vh] flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-700">
            <div className="h-20 w-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center">
                <Users className="h-10 w-10" />
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-black text-blue-950 tracking-tighter">Gestión de Clientes</h1>
                <p className="text-gray-500 font-medium">Esta sección está en desarrollo y estará disponible próximamente.</p>
            </div>
        </div>
    )
}
