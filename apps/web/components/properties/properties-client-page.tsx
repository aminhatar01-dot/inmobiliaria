'use client'

import {
    Search,
    Plus,
    Filter,
    MoreHorizontal,
    MapPin,
    BedDouble,
    Bath,
    Maximize2,
    CheckCircle2,
    Clock,
    XCircle,
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
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { PropertyActions } from "@/components/properties/property-actions"
import Link from "next/link"
import { useState, useMemo } from "react"
import { Property } from "@inmocms/shared"

interface PropertiesClientPageProps {
    properties: Property[]
    connections: any[]
    publications: Record<string, any[]>
}

export function PropertiesClientPage({ properties, connections, publications }: PropertiesClientPageProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const [operationFilter, setOperationFilter] = useState("all")

    const filteredProperties = useMemo(() => {
        return properties.filter(prop => {
            const matchesSearch =
                prop.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                prop.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                prop.neighborhood?.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesStatus = statusFilter === "all" || prop.status === statusFilter
            const matchesOperation = operationFilter === "all" || prop.operation_type === operationFilter
            return matchesSearch && matchesStatus && matchesOperation
        })
    }, [properties, searchTerm, statusFilter, operationFilter])

    function exportCSV() {
        if (filteredProperties.length === 0) return;
        const headers = ['Título', 'Dirección', 'Tipo', 'Operación', 'Precio', 'Moneda', 'Estado', 'Dormitorios', 'Baños', 'Superficie (m²)']
        const rows = filteredProperties.map(p => [
            p.title || '',
            p.address || '',
            p.property_type || '',
            p.operation_type || '',
            p.price?.toString() || '',
            p.currency || '',
            p.status || '',
            p.bedrooms?.toString() || '',
            p.bathrooms?.toString() || '',
            p.surface_total?.toString() || ''
        ])
        const csvContent = [headers, ...rows]
            .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
            .join('\n')
        const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `propiedades_${new Date().toISOString().split('T')[0]}.csv`
        link.click()
        URL.revokeObjectURL(url)
    }

    const hasActiveFilters = statusFilter !== 'all' || operationFilter !== 'all'

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-800 tracking-tight">Inmuebles</h2>
                    <p className="text-gray-500 text-sm font-medium">Gestiona tu catálogo de propiedades</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 py-6 px-6 h-fit" asChild>
                    <Link href="/propiedades/nuevo">
                        <Plus className="h-5 w-5 mr-2" /> Añadir inmueble
                    </Link>
                </Button>
            </div>

            <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl">
                {/* Search & Filters */}
                <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Buscar por título, dirección, barrio..."
                            className="pl-9 h-11 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm w-full"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className={`h-11 border-gray-100 rounded-xl font-bold flex-1 md:flex-none transition-colors ${hasActiveFilters ? 'bg-blue-50 text-blue-600 border-blue-100' : ''}`}
                                >
                                    <Filter className="h-4 w-4 mr-2" />
                                    {hasActiveFilters ? 'Filtros activos' : 'Filtros'}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 rounded-2xl border-gray-100 shadow-xl p-2">
                                <DropdownMenuLabel className="text-[10px] font-black text-gray-400 uppercase tracking-wider px-2">Estado</DropdownMenuLabel>
                                <DropdownMenuRadioGroup value={statusFilter} onValueChange={setStatusFilter}>
                                    <DropdownMenuRadioItem value="all" className="rounded-xl">Todos</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="available" className="rounded-xl">Disponible</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="reserved" className="rounded-xl">Reservada</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="sold" className="rounded-xl">Vendida</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel className="text-[10px] font-black text-gray-400 uppercase tracking-wider px-2">Operación</DropdownMenuLabel>
                                <DropdownMenuRadioGroup value={operationFilter} onValueChange={setOperationFilter}>
                                    <DropdownMenuRadioItem value="all" className="rounded-xl">Todas</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="sale" className="rounded-xl">Venta</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="rent" className="rounded-xl">Alquiler</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="temporary_rent" className="rounded-xl">Temporal</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                {hasActiveFilters && (
                                    <>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            className="rounded-xl text-red-500 font-bold cursor-pointer hover:bg-red-50"
                                            onClick={() => { setStatusFilter('all'); setOperationFilter('all') }}
                                        >
                                            Limpiar filtros
                                        </DropdownMenuItem>
                                    </>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                            variant="outline"
                            className="h-11 border-gray-100 rounded-xl font-bold flex-1 md:flex-none"
                            onClick={exportCSV}
                            title={filteredProperties.length === 0 ? "No hay propiedades para exportar" : `Exportar ${filteredProperties.length} propiedades`}
                            disabled={filteredProperties.length === 0}
                        >
                            Exportar CSV
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50/50 border-gray-100 hover:bg-gray-50/50">
                                <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Propiedad</TableHead>
                                <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Detalles</TableHead>
                                <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Operación</TableHead>
                                <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6 text-right">Precio</TableHead>
                                <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Estado</TableHead>
                                <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6 text-right">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredProperties.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-48 text-center text-gray-400 font-medium font-bold">
                                        {searchTerm || hasActiveFilters ? "No se encontraron propiedades con esos filtros." : "No se encontraron propiedades."}
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredProperties.map((prop: any) => (
                                    <TableRow key={prop.id} className="border-gray-50 hover:bg-blue-50/30 transition-colors group">
                                        <TableCell className="py-4 px-6">
                                            <div className="flex items-center gap-4">
                                                <div className="h-16 w-20 rounded-xl overflow-hidden shadow-sm border border-gray-100 shrink-0 bg-gray-50 flex items-center justify-center">
                                                    {prop.property_media && prop.property_media.length > 0 ? (
                                                        <img src={prop.property_media[0].url} alt={prop.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    ) : (
                                                        <MapPin className="h-6 w-6 text-gray-200" />
                                                    )}
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{prop.title}</h4>
                                                    <div className="flex items-center text-[10px] text-gray-400 font-medium">
                                                        <MapPin className="h-3 w-3 mr-1 text-blue-500" /> {prop.address}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 px-6">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded-lg">
                                                    <BedDouble className="h-3 w-3 text-gray-400" /> {prop.bedrooms || 0}
                                                </div>
                                                <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded-lg">
                                                    <Bath className="h-3 w-3 text-gray-400" /> {prop.bathrooms || 0}
                                                </div>
                                                <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded-lg">
                                                    <Maximize2 className="h-3 w-3 text-gray-400" /> {prop.surface_total || 0}m²
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 px-6">
                                            <Badge variant="outline" className={`rounded-lg border-none px-3 py-1 font-bold text-[10px] uppercase tracking-wider ${prop.operation_type === 'sale' ? 'bg-blue-50 text-blue-600' :
                                                prop.operation_type === 'rent' ? 'bg-purple-50 text-purple-600' : 'bg-orange-50 text-orange-600'
                                                }`}>
                                                {prop.operation_type === 'sale' ? 'Venta' :
                                                    prop.operation_type === 'rent' ? 'Alquiler' : 'Temp'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="py-4 px-6 text-right font-black text-gray-800">
                                            {prop.currency} {prop.price?.toLocaleString()}
                                        </TableCell>
                                        <TableCell className="py-4 px-6">
                                            <StatusBadge status={prop.status} />
                                        </TableCell>
                                        <TableCell className="py-4 px-6 text-right">
                                            <PropertyActions
                                                property={prop}
                                                connections={connections}
                                                publications={publications[prop.id] || []}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    )
}

function StatusBadge({ status }: { status: string }) {
    switch (status) {
        case 'available':
            return (
                <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-3 py-1.5 rounded-full w-fit">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-black uppercase tracking-wider">Disponible</span>
                </div>
            )
        case 'reserved':
            return (
                <div className="flex items-center gap-1.5 text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full w-fit">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-black uppercase tracking-wider">Reservada</span>
                </div>
            )
        case 'sold':
            return (
                <div className="flex items-center gap-1.5 text-red-500 bg-red-50 px-3 py-1.5 rounded-full w-fit">
                    <XCircle className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-black uppercase tracking-wider">Vendida</span>
                </div>
            )
        default:
            return (
                <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider py-1 px-3 border-gray-100 text-gray-400">
                    {status}
                </Badge>
            )
    }
}
