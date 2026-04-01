'use client';

import {
    Search,
    Filter,
    MoreHorizontal,
    User,
    Mail,
    Phone,
    Calendar,
    Star,
    ArrowUpRight,
    MessageCircle,
    Trash2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Lead } from "@inmocms/shared"
import { useState } from "react"
import { LeadDialog } from "./lead-dialog"
import { deleteLead } from "@/app/actions/leads"
import { toast } from "sonner"

interface LeadsListProps {
    initialLeads: Lead[]
}

export function LeadsList({ initialLeads }: LeadsListProps) {
    const [leads, setLeads] = useState<Lead[]>(initialLeads);
    const [searchTerm, setSearchTerm] = useState("");
    const [originFilter, setOriginFilter] = useState<string | null>(null);
    const [scoringSort, setScoringSort] = useState<'asc' | 'desc' | null>(null);

    const filteredLeads = leads
        .filter(lead => {
            const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lead.email?.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesOrigin = !originFilter || lead.source === originFilter;
            return matchesSearch && matchesOrigin;
        })
        .sort((a, b) => {
            if (!scoringSort) return 0;
            return scoringSort === 'desc'
                ? (b.scoring || 0) - (a.scoring || 0)
                : (a.scoring || 0) - (b.scoring || 0);
        });

    async function handleDelete(id: string, name: string) {
        if (!confirm(`¿Eliminar el lead "${name}"? Esta acción no se puede deshacer.`)) return;
        try {
            await deleteLead(id);
            setLeads(leads.filter(l => l.id !== id));
            toast.success("Lead eliminado correctamente");
        } catch (e) {
            toast.error("Error al eliminar el lead");
        }
    }

    function handleMessage(lead: Lead) {
        if (lead.phone) {
            const phone = lead.phone.replace(/\D/g, '');
            const message = encodeURIComponent(`Hola ${lead.name}, me comunico desde nuestra inmobiliaria.`);
            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        } else if (lead.email) {
            window.open(`mailto:${lead.email}?subject=Contacto Inmobiliaria`, '_blank');
        } else {
            toast.info("Este lead no tiene teléfono ni email registrado.");
        }
    }

    function toggleOriginFilter() {
        const origins = ['manual', 'web', 'portal', 'referral', null];
        const current = origins.indexOf(originFilter);
        setOriginFilter(origins[(current + 1) % origins.length]);
    }

    function toggleScoringSort() {
        if (!scoringSort) setScoringSort('desc');
        else if (scoringSort === 'desc') setScoringSort('asc');
        else setScoringSort(null);
    }

    return (
        <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl">
            <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Buscar por nombre, email o interés..."
                        className="pl-9 h-11 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <Button
                        variant="outline"
                        className={`h-11 border-gray-100 rounded-xl font-bold flex-1 md:flex-none transition-colors ${originFilter ? 'bg-blue-50 text-blue-600 border-blue-100' : ''}`}
                        onClick={toggleOriginFilter}
                        title={originFilter ? `Filtrando por: ${originFilter}` : 'Filtrar por origen'}
                    >
                        <Filter className="h-4 w-4 mr-2" />
                        {originFilter ? originFilter.charAt(0).toUpperCase() + originFilter.slice(1) : 'Origen'}
                    </Button>
                    <Button
                        variant="outline"
                        className={`h-11 border-gray-100 rounded-xl font-bold flex-1 md:flex-none transition-colors ${scoringSort ? 'bg-yellow-50 text-yellow-600 border-yellow-100' : ''}`}
                        onClick={toggleScoringSort}
                        title="Ordenar por scoring"
                    >
                        <Star className={`h-4 w-4 mr-2 ${scoringSort ? 'text-yellow-500' : 'text-yellow-500'}`} />
                        {scoringSort === 'desc' ? 'Scoring ↓' : scoringSort === 'asc' ? 'Scoring ↑' : 'Scoring'}
                    </Button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-50/50 border-gray-100 hover:bg-gray-50/50">
                            <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Contacto</TableHead>
                            <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Interés</TableHead>
                            <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Origen</TableHead>
                            <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Scoring</TableHead>
                            <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Asignado</TableHead>
                            <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6 text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredLeads.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="h-48 text-center text-gray-400 font-medium font-bold">
                                    {searchTerm || originFilter ? "No se encontraron leads con esos filtros." : "No se encontraron leads."}
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredLeads.map((lead) => (
                                <TableRow key={lead.id} className="border-gray-50 hover:bg-blue-50/30 transition-colors group">
                                    <TableCell className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10 border border-gray-100">
                                                <AvatarFallback className="bg-blue-50 text-blue-600 font-bold">{lead.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="space-y-0.5">
                                                <Link href={`/leads/${lead.id}`} className="hover:underline decoration-blue-500 decoration-2 underline-offset-4">
                                                    <h4 className="text-sm font-bold text-gray-800">{lead.name}</h4>
                                                </Link>
                                                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium">
                                                    {lead.email && <span className="flex items-center gap-1"><Mail className="h-2.5 w-2.5" /> {lead.email}</span>}
                                                    {lead.phone && <span className="flex items-center gap-1"><Phone className="h-2.5 w-2.5" /> {lead.phone}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4 px-6">
                                        <div className="space-y-1">
                                            <p className="text-xs font-bold text-gray-700">
                                                {lead.interest_type === 'buy' ? 'Compra' : lead.interest_type === 'rent' ? 'Alquiler' : lead.interest_type === 'temporary_rent' ? 'Temporal' : 'Consultar'}
                                            </p>
                                            <div className="flex items-center text-[10px] text-gray-400 font-medium tracking-tight">
                                                <Calendar className="h-2.5 w-2.5 mr-1" /> {new Date(lead.created_at).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4 px-6">
                                        <Badge variant="outline" className="rounded-lg border-gray-100 bg-gray-50/50 text-gray-500 font-bold text-[9px] uppercase tracking-wider px-2 py-0.5">
                                            {lead.source || 'Directo'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${lead.scoring > 80 ? 'bg-green-500' : lead.scoring > 50 ? 'bg-blue-500' : 'bg-orange-400'
                                                        }`}
                                                    style={{ width: `${lead.scoring}%` }}
                                                />
                                            </div>
                                            <span className="text-[10px] font-black text-gray-700">{lead.scoring}%</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">
                                                AG
                                            </div>
                                            <span className="text-xs font-semibold text-gray-600">Agente</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4 px-6 text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-blue-600 hover:bg-blue-50"
                                                title={lead.phone ? "Enviar WhatsApp" : lead.email ? "Enviar Email" : "Contactar"}
                                                onClick={() => handleMessage(lead)}
                                            >
                                                <MessageCircle className="h-4 w-4" />
                                            </Button>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-48 rounded-xl border-gray-100 shadow-xl">
                                                    <LeadDialog
                                                        lead={lead}
                                                        mode="edit"
                                                        trigger={
                                                            <div className="flex items-center w-full px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                                                                <User className="h-4 w-4 mr-3 text-gray-400" /> Editar Lead
                                                            </div>
                                                        }
                                                    />
                                                    <DropdownMenuItem className="py-3 cursor-pointer" asChild>
                                                        <Link href="/pipeline">
                                                            <ArrowUpRight className="h-4 w-4 mr-3 text-gray-400" /> Mover en Pipeline
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        className="py-3 cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
                                                        onClick={() => handleDelete(lead.id, lead.name)}
                                                    >
                                                        <Trash2 className="h-4 w-4 mr-3" /> Eliminar
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}
