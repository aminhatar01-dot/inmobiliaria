"use client"

import React, { useState, useEffect } from "react"
import {
    Users,
    Mail,
    Shield,
    MapPin,
    Plus,
    MoreHorizontal,
    Search,
    Filter,
    Loader2,
    UserPlus,
    UserCog,
    Trash2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { getAgents, getRoles, getBranches, updateAgentRole, deleteAgent, inviteAgent } from "@/app/actions/agents"

export default function AgentsPage() {
    const [agents, setAgents] = useState<any[]>([])
    const [roles, setRoles] = useState<any[]>([])
    const [branches, setBranches] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")

    // Dialog states
    const [inviteOpen, setInviteOpen] = useState(false)
    const [roleOpen, setRoleOpen] = useState(false)
    const [selectedAgent, setSelectedAgent] = useState<any>(null)
    const [newRoleId, setNewRoleId] = useState("")

    // Invite form states
    const [inviteName, setInviteName] = useState("")
    const [inviteEmail, setInviteEmail] = useState("")
    const [inviteRoleId, setInviteRoleId] = useState("")
    const [inviteBranchId, setInviteBranchId] = useState("")
    const [isInviting, setIsInviting] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const [agentsData, rolesData, branchesData] = await Promise.all([
                getAgents(),
                getRoles(),
                getBranches()
            ])
            setAgents(agentsData)
            setRoles(rolesData)
            setBranches(branchesData)
        } catch (error) {
            toast.error("Error al cargar datos")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleRoleChange = async () => {
        if (!selectedAgent || !newRoleId) return

        try {
            await updateAgentRole(selectedAgent.id, newRoleId)
            toast.success("Rol actualizado correctamente")
            setRoleOpen(false)
            fetchData()
        } catch (error) {
            toast.error("Error al actualizar rol")
        }
    }

    const handleInviteSubmit = async () => {
        if (!inviteName || !inviteEmail || !inviteRoleId || !inviteBranchId) {
            toast.error("Por favor completa todos los campos")
            return
        }

        setIsInviting(true)
        try {
            await inviteAgent({
                name: inviteName,
                email: inviteEmail,
                roleId: inviteRoleId,
                branchId: inviteBranchId
            })
            toast.success("Invitación registrada correctamente. En este entorno de desarrollo, el email es simulado.")
            setInviteOpen(false)
            // Reset form
            setInviteName("")
            setInviteEmail("")
            setInviteRoleId("")
            setInviteBranchId("")
            fetchData()
        } catch (error: any) {
            toast.error(error.message || "Error al enviar invitación")
        } finally {
            setIsInviting(false)
        }
    }

    const handleDelete = async (agent: any) => {
        if (confirm(`¿Estás seguro de que deseas eliminar a ${agent.name}?`)) {
            try {
                await deleteAgent(agent.id)
                toast.success("Agente eliminado")
                fetchData()
            } catch (error) {
                toast.error("Error al eliminar agente")
            }
        }
    }

    const filteredAgents = agents.filter(agent =>
        agent.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.branches?.some((b: any) => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-800 tracking-tight">Agentes</h2>
                    <p className="text-gray-500 text-sm font-medium">Gestiona tu equipo de asesores inmobiliarios</p>
                </div>

                <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 py-6 px-6 h-fit">
                            <Plus className="h-5 w-5 mr-2" /> Invitar Agente
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] rounded-3xl">
                        <DialogHeader>
                            <DialogTitle className="font-black text-2xl flex items-center gap-2">
                                <UserPlus className="h-6 w-6 text-blue-600" />
                                Invitar Agente
                            </DialogTitle>
                            <DialogDescription className="font-medium text-gray-500">
                                Envía una invitación para que un nuevo integrante se sume a tu equipo.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name" className="font-bold text-gray-700 ml-1">Nombre completo</Label>
                                <Input
                                    id="name"
                                    placeholder="Ej: Juan Pérez"
                                    className="rounded-xl bg-gray-50 border-gray-100"
                                    value={inviteName}
                                    onChange={(e) => setInviteName(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="font-bold text-gray-700 ml-1">Correo electrónico</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="juan@inmobiliaria.com"
                                    className="rounded-xl bg-gray-50 border-gray-100"
                                    value={inviteEmail}
                                    onChange={(e) => setInviteEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label className="font-bold text-gray-700 ml-1">Rol</Label>
                                    <Select onValueChange={setInviteRoleId} value={inviteRoleId}>
                                        <SelectTrigger className="rounded-xl bg-gray-50 border-gray-100">
                                            <SelectValue placeholder="Seleccionar" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl border-gray-100 shadow-xl">
                                            {roles.map(role => (
                                                <SelectItem key={role.id} value={role.id} className="rounded-lg">{role.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label className="font-bold text-gray-700 ml-1">Sucursal</Label>
                                    <Select onValueChange={setInviteBranchId} value={inviteBranchId}>
                                        <SelectTrigger className="rounded-xl bg-gray-50 border-gray-100" >
                                            <SelectValue placeholder="Seleccionar" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl border-gray-100 shadow-xl">
                                            {branches.map(branch => (
                                                <SelectItem key={branch.id} value={branch.id} className="rounded-lg">{branch.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setInviteOpen(false)} className="rounded-xl font-bold">Cancelar</Button>
                            <Button
                                onClick={handleInviteSubmit}
                                disabled={isInviting}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-8 shadow-lg shadow-blue-500/10"
                            >
                                {isInviting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "Enviar Invitación"}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl">
                {/* Search & Filters */}
                <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Buscar por nombre, email o sucursal..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 h-11 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all text-sm w-full"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50/50 border-gray-100 hover:bg-gray-50/50">
                                <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Agente</TableHead>
                                <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Roles</TableHead>
                                <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Sucursales</TableHead>
                                <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6">Ingreso</TableHead>
                                <TableHead className="font-bold text-gray-400 text-[10px] uppercase tracking-wider py-4 px-6 text-right">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-48 text-center text-gray-400 font-medium">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                                            <span>Cargando integrantes...</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : filteredAgents.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-48 text-center text-gray-400 font-medium font-bold">
                                        {searchQuery ? "No se encontraron agentes para esta búsqueda." : "No se encontraron agentes."}
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredAgents.map((agent: any) => (
                                    <TableRow key={agent.id} className="border-gray-50 hover:bg-blue-50/30 transition-colors group">
                                        <TableCell className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-10 w-10 border border-gray-100 rounded-xl shadow-sm">
                                                    <AvatarImage src={agent.avatar_url} />
                                                    <AvatarFallback className="bg-blue-50 text-blue-600 font-black">
                                                        {agent.name?.[0] || agent.email?.[0]?.toUpperCase()}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-black text-gray-800 tracking-tight">{agent.name || 'Sin nombre'}</span>
                                                        {agent.is_invitation && (
                                                            <Badge className="bg-amber-100 text-amber-700 border-none px-2 py-0 h-4 font-black text-[8px] uppercase tracking-tighter rounded-full">
                                                                Invitado
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <span className="text-[10px] text-gray-400 font-bold flex items-center">
                                                        <Mail className="h-3 w-3 mr-1 text-blue-400" /> {agent.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 px-6">
                                            <div className="flex flex-wrap gap-1">
                                                {agent.roles.length > 0 ? (
                                                    agent.roles.map((role: any) => (
                                                        <Badge key={role.id} variant="outline" className="bg-indigo-50 text-indigo-600 border-none px-2.5 py-1 font-black text-[9px] uppercase tracking-wider rounded-lg shadow-sm">
                                                            <Shield className="h-3 w-3 mr-1 text-indigo-400" /> {role.name}
                                                        </Badge>
                                                    ))
                                                ) : (
                                                    <span className="text-[10px] text-gray-400 font-bold">Sin rol</span>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 px-6">
                                            <div className="flex flex-wrap gap-1">
                                                {agent.branches.length > 0 ? (
                                                    agent.branches.map((branch: any) => (
                                                        <div key={branch.id} className="flex items-center gap-1.5 text-[11px] font-black text-gray-600 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100/50">
                                                            <MapPin className="h-3 w-3 text-red-400" /> {branch.name}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <span className="text-[10px] text-gray-400 font-bold">Sin sucursal</span>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4 px-6 text-[11px] text-gray-400 font-black uppercase tracking-wider">
                                            {new Date(agent.created_at).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell className="py-4 px-6 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                                                        <MoreHorizontal className="h-5 w-5" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-56 rounded-3xl border-gray-100 shadow-2xl p-2 animate-in slide-in-from-top-2">
                                                    <DropdownMenuLabel className="text-[10px] uppercase font-black text-gray-400 px-4 py-3 tracking-widest">Gestión de Agente</DropdownMenuLabel>
                                                    <DropdownMenuSeparator className="bg-gray-50 mx-2" />
                                                    <DropdownMenuItem
                                                        className="rounded-2xl py-3 px-4 cursor-pointer font-bold text-gray-700 hover:bg-blue-50 transition-colors flex items-center gap-3"
                                                        onClick={() => {
                                                            setSelectedAgent(agent)
                                                            setRoleOpen(true)
                                                        }}
                                                    >
                                                        <UserCog className="h-4 w-4 text-blue-500" />
                                                        Cambiar Rol
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="rounded-2xl py-3 px-4 cursor-pointer font-bold text-gray-700 hover:bg-blue-50 transition-colors flex items-center gap-3">
                                                        <Mail className="h-4 w-4 text-purple-500" />
                                                        Reenviar Invitación
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator className="bg-gray-50 mx-2" />
                                                    <DropdownMenuItem
                                                        className="rounded-2xl py-3 px-4 cursor-pointer font-bold text-red-600 focus:text-red-700 focus:bg-red-50 flex items-center gap-3"
                                                        onClick={() => handleDelete(agent)}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                        Eliminar Agente
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </Card>

            {/* Role Change Dialog */}
            <Dialog open={roleOpen} onOpenChange={setRoleOpen}>
                <DialogContent className="sm:max-w-[400px] rounded-3xl">
                    <DialogHeader>
                        <DialogTitle className="font-black text-2xl flex items-center gap-2">
                            <UserCog className="h-6 w-6 text-blue-600" />
                            Cambiar Rol
                        </DialogTitle>
                        <DialogDescription className="font-medium text-gray-500">
                            Actualiza los permisos de {selectedAgent?.name}.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-6 space-y-4">
                        <div className="space-y-2">
                            <Label className="font-bold text-gray-700 ml-1">Nuevo Rol</Label>
                            <Select onValueChange={setNewRoleId} defaultValue={selectedAgent?.roles?.[0]?.id}>
                                <SelectTrigger className="rounded-xl bg-gray-50 border-gray-100 h-12">
                                    <SelectValue placeholder="Seleccionar nuevo rol" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl border-gray-100 shadow-xl">
                                    {roles.map(role => (
                                        <SelectItem key={role.id} value={role.id} className="rounded-lg">{role.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setRoleOpen(false)} className="rounded-xl font-bold">Cancelar</Button>
                        <Button
                            onClick={handleRoleChange}
                            disabled={!newRoleId}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-8 shadow-lg shadow-blue-500/10"
                        >Guardar Cambios</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
