"use client"

import { useState } from "react"
import { Lead } from "@inmocms/shared"
import { Search, Plus, UserPlus, Mail, Phone, MoreVertical, Building2, Tag, Pencil, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ClienteDialog } from "./cliente-dialog"
import { deleteLead } from "@/app/actions/leads"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface ClientesListProps {
    initialLeads: Lead[]
}

const statusMap: Record<string, { label: string, color: string }> = {
    'new': { label: 'Nuevo Lead', color: 'bg-blue-100 text-blue-700' },
    'contacted': { label: 'Contactado', color: 'bg-yellow-100 text-yellow-700' },
    'visiting': { label: 'En Visitas', color: 'bg-purple-100 text-purple-700' },
    'negotiating': { label: 'Negociando', color: 'bg-orange-100 text-orange-700' },
    'closed': { label: 'Cliente Cerrado', color: 'bg-green-100 text-green-700' },
    'lost': { label: 'Perdido', color: 'bg-gray-100 text-gray-700' },
}

const interestMap: Record<string, string> = {
    'buy': 'Comprar',
    'rent': 'Alquilar',
    'sell': 'Vender'
}

export function ClientesList({ initialLeads }: ClientesListProps) {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedStatus, setSelectedStatus] = useState<string>("all")
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [leadToEdit, setLeadToEdit] = useState<Lead | null>(null)

    const filteredLeads = initialLeads.filter(lead => {
        const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (lead.email && lead.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (lead.phone && lead.phone.includes(searchQuery))
        const matchesStatus = selectedStatus === "all" || lead.status === selectedStatus
        return matchesSearch && matchesStatus
    })

    const handleDelete = async (id: string) => {
        if (!confirm("¿Estás seguro de que deseas eliminar este cliente? Esta acción no se puede deshacer.")) return
        try {
            await deleteLead(id)
            toast.success("Cliente eliminado")
            router.refresh()
        } catch (error: any) {
            toast.error(`Error al eliminar: ${error.message}`)
        }
    }

    const openEditForm = (lead: Lead) => {
        setLeadToEdit(lead)
        setIsDialogOpen(true)
    }

    const openNewForm = () => {
        setLeadToEdit(null)
        setIsDialogOpen(true)
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
                    <button
                        onClick={() => setSelectedStatus("all")}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${selectedStatus === 'all' ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                    >
                        Todos
                    </button>
                    <button
                        onClick={() => setSelectedStatus("closed")}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${selectedStatus === 'closed' ? 'bg-green-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                    >
                        Clientes Exclusivos
                    </button>
                    <button
                        onClick={() => setSelectedStatus("new")}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${selectedStatus === 'new' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                    >
                        Nuevos Leads
                    </button>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Buscar nombre, correo, tel..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 h-11 rounded-xl bg-white border-gray-200 focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <Button
                        onClick={openNewForm}
                        className="h-11 px-6 rounded-xl font-black bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                    >
                        <Plus className="h-5 w-5 mr-2" />
                        NUEVO CLIENTE
                    </Button>
                </div>
            </div>

            <div className="bg-white border rounded-[2rem] shadow-sm overflow-hidden border-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-widest font-black">
                                <th className="p-6">Nombre de Contacto</th>
                                <th className="p-6">Contacto Directo</th>
                                <th className="p-6">Interés</th>
                                <th className="p-6">Estado / Embudo</th>
                                <th className="p-6 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredLeads.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-12 text-center text-gray-400 font-medium">
                                        <div className="flex flex-col items-center justify-center space-y-3">
                                            <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                                                <UserPlus className="h-8 w-8" />
                                            </div>
                                            <p>No se encontraron clientes o prospectos que coincidan con tu búsqueda.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                filteredLeads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="p-6">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black text-sm uppercase">
                                                    {lead.name.substring(0, 2)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900">{lead.name}</p>
                                                    <p className="text-xs text-gray-400 font-medium">Origen: {lead.source}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6 space-y-1">
                                            {lead.email ? (
                                                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                                                    <Mail className="h-3.5 w-3.5 text-gray-400" /> {lead.email}
                                                </div>
                                            ) : null}
                                            {lead.phone ? (
                                                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                                                    <Phone className="h-3.5 w-3.5 text-gray-400" /> {lead.phone}
                                                </div>
                                            ) : null}
                                            {!lead.email && !lead.phone && (
                                                <span className="text-xs italic text-gray-400">Sin datos de contacto</span>
                                            )}
                                        </td>
                                        <td className="p-6">
                                            <div className="flex items-center gap-2 text-sm text-gray-700 font-bold">
                                                <Building2 className="h-4 w-4 text-indigo-400" />
                                                {lead.interest_type ? interestMap[lead.interest_type] : 'No especificado'}
                                            </div>
                                            {lead.budget && lead.budget > 0 ? (
                                                <p className="text-xs text-green-600 font-bold mt-1">
                                                    Ppto: ${lead.budget.toLocaleString('es-AR')}
                                                </p>
                                            ) : null}
                                        </td>
                                        <td className="p-6">
                                            <Badge className={`border-none font-bold px-3 py-1 ${statusMap[lead.status]?.color || 'bg-gray-100 text-gray-700'}`}>
                                                <Tag className="h-3 w-3 mr-1.5 inline" />
                                                {statusMap[lead.status]?.label || lead.status}
                                            </Badge>
                                        </td>
                                        <td className="p-6 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-9 w-9 p-0 rounded-full hover:bg-gray-200">
                                                        <MoreVertical className="h-4 w-4 text-gray-500" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-48 rounded-xl p-2">
                                                    <DropdownMenuItem
                                                        onClick={() => openEditForm(lead)}
                                                        className="rounded-lg p-2.5 cursor-pointer font-medium"
                                                    >
                                                        <Pencil className="h-4 w-4 mr-2 text-blue-500" /> Editar Detalles
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() => handleDelete(lead.id)}
                                                        className="rounded-lg p-2.5 cursor-pointer font-medium text-red-600 focus:bg-red-50 focus:text-red-700 mt-1"
                                                    >
                                                        <Trash2 className="h-4 w-4 mr-2" /> Eliminar Cliente
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <ClienteDialog
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}
                leadToEdit={leadToEdit}
            />
        </div>
    )
}
