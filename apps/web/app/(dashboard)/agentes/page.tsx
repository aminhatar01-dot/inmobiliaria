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
    Loader2,
    UserPlus,
    UserCog,
    Trash2,
    Network,
    Building2,
    CheckCircle2,
    XCircle,
    Home
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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { getAgents, getRoles, getBranches, updateAgentRole, deleteAgent } from "@/app/actions/agents"
import { inviteNetworkAgent, getNetworkStatus, acceptNetworkInvitation, getNetworkProperties, cancelAllMyInvitations } from "@/app/actions/network"
import { InviteAgentDialog } from "@/components/messages/invite-agent-dialog"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export default function AgentsPage() {
    // Team Data
    const [agents, setAgents] = useState<any[]>([])
    const [roles, setRoles] = useState<any[]>([])
    const [branches, setBranches] = useState<any[]>([])

    // Network Data
    const [partners, setPartners] = useState<any[]>([])
    const [sentInvitations, setSentInvitations] = useState<any[]>([])
    const [receivedInvitations, setReceivedInvitations] = useState<any[]>([])
    const [networkProperties, setNetworkProperties] = useState<any[]>([])

    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")
    const [activeTab, setActiveTab] = useState("team")

    // Dialog states
    const [inviteOpen, setInviteOpen] = useState(false)
    const [networkInviteOpen, setNetworkInviteOpen] = useState(false)
    const [roleOpen, setRoleOpen] = useState(false)
    const [selectedAgent, setSelectedAgent] = useState<any>(null)
    const [newRoleId, setNewRoleId] = useState("")

    // Invite form states (Team)
    const [inviteName, setInviteName] = useState("")
    const [inviteEmail, setInviteEmail] = useState("")
    const [inviteRoleId, setInviteRoleId] = useState("")
    const [inviteBranchId, setInviteBranchId] = useState("")
    const [isInviting, setIsInviting] = useState(false)

    // Invite form states (Network)
    const [networkEmail, setNetworkEmail] = useState("")
    const [isNetworkInviting, setIsNetworkInviting] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const [agentsData, rolesData, branchesData, networkData, propertiesData] = await Promise.all([
                getAgents(),
                getRoles(),
                getBranches(),
                getNetworkStatus(),
                getNetworkProperties()
            ])
            setAgents(agentsData)
            setRoles(rolesData)
            setBranches(branchesData)
            setPartners(networkData.partners)
            setSentInvitations(networkData.sentInvitations)
            setReceivedInvitations(networkData.receivedInvitations)
            setNetworkProperties(propertiesData)
        } catch (error) {
            toast.error("Error al cargar datos")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // --- Team Handlers ---

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
        if (!inviteEmail) {
            toast.error("Por favor completa el correo electrónico")
            return
        }

        setIsInviting(true)
        try {
            const { inviteToAgency } = await import("@/app/actions/subscriptions")
            const result = await inviteToAgency(inviteEmail)

            if (result.success) {
                toast.success("Invitación generada", {
                    description: "Se ha creado el link de invitación correctamente."
                })

                // Show link in a way they can copy it (maybe another state or just toast)
                if (result.inviteLink) {
                    const copyToClipboard = () => {
                        navigator.clipboard.writeText(result.inviteLink!)
                        toast.success("Link copiado al portapapeles")
                    }

                    toast.info("Link de invitación", {
                        action: {
                            label: "Copiar Link",
                            onClick: copyToClipboard
                        },
                        duration: 10000
                    })
                }

                setInviteOpen(false)
                setInviteEmail("")
                fetchData()
            }
        } catch (error: any) {
            toast.error("Error", { description: error.message })
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

    // --- Network Handlers ---

    const handleNetworkInvite = async () => {
        if (!networkEmail) {
            toast.error("Por favor ingresa un correo electrónico")
            return
        }

        setIsNetworkInviting(true)
        try {
            await inviteNetworkAgent(networkEmail)
            toast.success("Invitación enviada a la red")
            setNetworkInviteOpen(false)
            setNetworkEmail("")
            fetchData()
        } catch (error: any) {
            toast.error(error.message || "Error al enviar invitación")
        } finally {
            setIsNetworkInviting(false)
        }
    }

    const handleClearInvitations = async () => {
        if (!confirm("¿Cancelar todas las invitaciones huérfanas?")) return
        try {
            const result = await cancelAllMyInvitations()
            toast.success(result.message)
            fetchData()
        } catch (error: any) {
            toast.error(error.message || "Error al limpiar")
        }
    }

    const handleAcceptInvitation = async (invitationId: string) => {
        try {
            await acceptNetworkInvitation(invitationId)
            toast.success("¡Conexión establecida! Ahora son partners.")
            fetchData()
        } catch (error: any) {
            toast.error(error.message || "Error al aceptar invitación")
        }
    }

    // --- Filters ---

    const filteredAgents = agents.filter(agent =>
        agent.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.branches?.some((b: any) => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    const filteredPartners = partners.filter(p =>
        p.partnerName?.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-800 tracking-tight">Gestión de Agentes</h2>
                    <p className="text-gray-500 text-sm font-medium">Administra tu equipo y red de contactos</p>
                </div>

                <div className="flex items-center gap-3">
                    <InviteAgentDialog 
                        trigger={
                            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 py-6 px-6 h-fit transition-all hover:scale-105">
                                <Network className="h-5 w-5 mr-2" /> Conectar Partner
                            </Button>
                        }
                    />
                    {activeTab === "team" && (
                        <Button onClick={() => setInviteOpen(true)} variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 font-bold rounded-xl py-6 px-6 h-fit">
                            <Plus className="h-5 w-5 mr-2" /> Nuevo Agente (Interno)
                        </Button>
                    )}
                </div>
            </div>

            <Tabs defaultValue="team" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="bg-gray-100/50 p-1 rounded-2xl mb-6 h-auto">
                    <TabsTrigger value="team" className="rounded-xl px-6 py-3 font-bold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all focus-visible:ring-0">
                        <Users className="h-4 w-4 mr-2" /> Mi Equipo
                    </TabsTrigger>
                    <TabsTrigger value="network" className="rounded-xl px-6 py-3 font-bold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all focus-visible:ring-0">
                        <Network className="h-4 w-4 mr-2" /> Red de Colegas
                        {receivedInvitations.length > 0 && (
                            <Badge className="ml-2 bg-red-500 text-white border-0">{receivedInvitations.length}</Badge>
                        )}
                    </TabsTrigger>
                    {activeTab === 'network' && (
                        <Badge variant="outline" className="ml-auto mr-4 border-indigo-200 text-indigo-700 bg-indigo-50 hidden md:flex">
                            {networkProperties.length} Propiedades en Red
                        </Badge>
                    )}
                </TabsList>

                {/* --- TEAM TAB --- */}
                <TabsContent value="team" className="mt-0">
                    <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl">
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
                                                <Loader2 className="h-8 w-8 animate-spin text-blue-500 mx-auto mb-2" />
                                                Cargando integrantes...
                                            </TableCell>
                                        </TableRow>
                                    ) : filteredAgents.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={5} className="h-48 text-center text-gray-400 font-medium font-bold">
                                                {searchQuery ? "No se encontraron agentes." : "Aún no tienes agentes en tu equipo."}
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
                                                                    <Badge className="bg-amber-100 text-amber-700 border-none px-2 py-0 h-4 font-black text-[8px] uppercase tracking-tighter rounded-full">Invitado</Badge>
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
                                                        ) : <span className="text-[10px] text-gray-400 font-bold">Sin rol</span>}
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
                                                        ) : <span className="text-[10px] text-gray-400 font-bold">Sin sucursal</span>}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="py-4 px-6 text-[11px] text-gray-400 font-black uppercase tracking-wider">
                                                    {format(new Date(agent.created_at), 'dd MMM yyyy', { locale: es })}
                                                </TableCell>
                                                <TableCell className="py-4 px-6 text-right">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl">
                                                                <MoreHorizontal className="h-5 w-5" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end" className="w-56 rounded-3xl border-gray-100 shadow-2xl p-2">
                                                            <DropdownMenuItem className="rounded-2xl py-3 px-4 cursor-pointer font-bold text-gray-700 hover:bg-blue-50 flex items-center gap-3" onClick={() => { setSelectedAgent(agent); setRoleOpen(true) }}>
                                                                <UserCog className="h-4 w-4 text-blue-500" /> Cambiar Rol
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator className="bg-gray-50 mx-2" />
                                                            <DropdownMenuItem className="rounded-2xl py-3 px-4 cursor-pointer font-bold text-red-600 flex items-center gap-3" onClick={() => handleDelete(agent)}>
                                                                <Trash2 className="h-4 w-4" /> Eliminar Agente
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
                </TabsContent>

                {/* --- NETWORK TAB --- */}
                <TabsContent value="network" className="mt-0 space-y-8">

                    {/* Received Invitations */}
                    {receivedInvitations.length > 0 && (
                        <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border-l-4 border-l-indigo-500">
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="text-lg font-black text-gray-800 flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-indigo-500" /> Solicitudes Pendientes
                                </h3>
                            </div>
                            <div className="p-6">
                                <div className="grid gap-4">
                                    {receivedInvitations.map((inv) => (
                                        <div key={inv.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                                                    {inv.sender?.name?.[0] || "?"}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-800">{inv.sender?.name || "Inmobiliaria Desconocida"}</p>
                                                    <p className="text-sm text-gray-500">Te ha invitado a conectar inmobiliarias</p>
                                                    <p className="text-xs text-gray-400 mt-1">{format(new Date(inv.created_at), "dd 'de' MMMM", { locale: es })}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button onClick={() => handleAcceptInvitation(inv.id)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-6">
                                                    Aceptar
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Partners List */}
                        <div className="lg:col-span-2 space-y-6">
                            <h3 className="text-xl font-black text-gray-800 tracking-tight flex items-center gap-2">
                                <Building2 className="h-5 w-5 text-gray-400" /> Inmobiliarias Aliadas
                            </h3>

                            <div className="grid gap-4">
                                {partners.length === 0 ? (
                                    <Card className="border-dashed border-2 border-gray-200 bg-gray-50/50 p-12 flex flex-col items-center justify-center text-center rounded-3xl">
                                        <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                            <Network className="h-8 w-8 text-gray-400" />
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-700">Tu red está vacía</h4>
                                        <p className="text-gray-500 text-sm max-w-sm mt-2 mb-6">Conecta con otras inmobiliarias para compartir propiedades y potenciar tus ventas.</p>
                                        <Button onClick={() => setNetworkInviteOpen(true)} variant="outline" className="rounded-xl font-bold border-gray-300 text-gray-600">
                                            Invitar Colega
                                        </Button>
                                    </Card>
                                ) : (
                                    partners.map(partner => (
                                        <Card key={partner.partnershipId} className="border-none shadow-none bg-white p-4 rounded-2xl flex items-center justify-between group hover:shadow-lg transition-all duration-300">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
                                                    {partner.partnerName?.[0]}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800">{partner.partnerName}</h4>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Badge variant="secondary" className="bg-green-100 text-green-700 font-bold text-[10px] rounded-lg">
                                                            <CheckCircle2 className="h-3 w-3 mr-1" /> Conectado
                                                        </Badge>
                                                        <span className="text-[10px] text-gray-400 font-medium">
                                                            Desde {format(new Date(partner.connectedAt), 'MMM yyyy', { locale: es })}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="icon" className="rounded-xl text-gray-300 hover:text-red-500 hover:bg-red-50">
                                                <XCircle className="h-5 w-5" />
                                            </Button>
                                        </Card>
                                    ))
                                )}

                                {/* Sent Invitations */}
                                {sentInvitations.length > 0 && (
                                    <div className="mt-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Invitaciones Enviadas</h4>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={handleClearInvitations}
                                                className="text-xs text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl font-bold"
                                            >
                                                Limpiar huérfanas
                                            </Button>
                                        </div>
                                        <div className="space-y-2">
                                            {sentInvitations.map(inv => (
                                                <div key={inv.id} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                                                            <Mail className="h-4 w-4" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold text-gray-700">{inv.recipient_email}</p>
                                                            <p className="text-[10px] text-gray-400">{inv.status === 'pending' ? 'Esperando respuesta...' : inv.status}</p>
                                                        </div>
                                                    </div>
                                                    <Badge variant="outline" className="text-[10px] uppercase font-bold text-gray-400 border-gray-200">
                                                        {inv.status}
                                                    </Badge>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Shared Properties Preview */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-black text-gray-800 tracking-tight flex items-center gap-2">
                                <Home className="h-5 w-5 text-gray-400" /> Propiedades Compartidas
                            </h3>

                            <div className="space-y-4">
                                {networkProperties.slice(0, 3).map((prop: any) => (
                                    <Card key={prop.id} className="border-none shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden bg-white group cursor-pointer">
                                        <div className="h-32 bg-gray-100 relative">
                                            {prop.property_media?.[0]?.url ? (
                                                <img src={prop.property_media[0].url} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                    <Home className="h-8 w-8" />
                                                </div>
                                            )}
                                            <div className="absolute top-2 right-2">
                                                <Badge className="bg-black/50 hover:bg-black/70 backdrop-blur-md border-0 text-[10px] font-bold">
                                                    {prop.tenant?.name}
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="font-bold text-gray-800 line-clamp-1">{prop.title}</p>
                                            <p className="text-xs text-gray-500 mt-1 line-clamp-1">{prop.address}</p>
                                            <div className="flex items-center justify-between mt-3">
                                                <span className="font-black text-blue-600">
                                                    {prop.currency} {prop.price?.toLocaleString()}
                                                </span>
                                                <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-lg font-bold uppercase">
                                                    {prop.operation_type}
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                ))}

                                {networkProperties.length === 0 ? (
                                    <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                        <p className="text-sm font-medium text-gray-500">Tus partners aún no han compartido propiedades.</p>
                                    </div>
                                ) : (
                                    <Button variant="ghost" className="w-full text-blue-600 font-bold text-sm hover:bg-blue-50 rounded-xl">
                                        Ver todas ({networkProperties.length})
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

            {/* Team Invitation Dialog */}
            <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
                <DialogContent className="sm:max-w-[425px] rounded-3xl">
                    <DialogHeader>
                        <DialogTitle className="font-black text-2xl flex items-center gap-2">
                            <UserPlus className="h-6 w-6 text-blue-600" />
                            Invitar Agente
                        </DialogTitle>
                        <DialogDescription className="font-medium text-gray-500">
                            Suma un nuevo integrante a tu equipo interno.
                        </DialogDescription>
                    </DialogHeader>
                    {/* ... Existing form content ... */}
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="font-bold text-gray-700 ml-1">Nombre completo</Label>
                            <Input id="name" placeholder="Ej: Juan Pérez" className="rounded-xl bg-gray-50 border-gray-100" value={inviteName} onChange={(e) => setInviteName(e.target.value)} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="font-bold text-gray-700 ml-1">Correo electrónico</Label>
                            <Input id="email" type="email" placeholder="juan@inmobiliaria.com" className="rounded-xl bg-gray-50 border-gray-100" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label className="font-bold text-gray-700 ml-1">Rol</Label>
                                <Select onValueChange={setInviteRoleId} value={inviteRoleId}>
                                    <SelectTrigger className="rounded-xl bg-gray-50 border-gray-100"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                                    <SelectContent className="rounded-xl border-gray-100 shadow-xl">
                                        {roles.map(role => (<SelectItem key={role.id} value={role.id} className="rounded-lg">{role.name}</SelectItem>))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label className="font-bold text-gray-700 ml-1">Sucursal</Label>
                                <Select onValueChange={setInviteBranchId} value={inviteBranchId}>
                                    <SelectTrigger className="rounded-xl bg-gray-50 border-gray-100"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                                    <SelectContent className="rounded-xl border-gray-100 shadow-xl">
                                        {branches.map(branch => (<SelectItem key={branch.id} value={branch.id} className="rounded-lg">{branch.name}</SelectItem>))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setInviteOpen(false)} className="rounded-xl font-bold">Cancelar</Button>
                        <Button onClick={handleInviteSubmit} disabled={isInviting} className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-8 shadow-lg shadow-blue-500/10">
                            {isInviting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "Enviar Invitación"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Network Invitation Dialog */}
            <Dialog open={networkInviteOpen} onOpenChange={setNetworkInviteOpen}>
                <DialogContent className="sm:max-w-[425px] rounded-3xl">
                    <DialogHeader>
                        <DialogTitle className="font-black text-2xl flex items-center gap-2">
                            <Network className="h-6 w-6 text-indigo-600" />
                            Conectar Inmobiliaria
                        </DialogTitle>
                        <DialogDescription className="font-medium text-gray-500">
                            Envía una invitación a un colega para compartir propiedades.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="net-email" className="font-bold text-gray-700 ml-1">Email del Colega / Inmobiliaria</Label>
                            <Input
                                id="net-email"
                                type="email"
                                placeholder="contacto@colegainmobiliaria.com"
                                className="rounded-xl bg-gray-50 border-gray-100 h-12"
                                value={networkEmail}
                                onChange={(e) => setNetworkEmail(e.target.value)}
                            />
                            <p className="text-xs text-gray-400 ml-1">
                                Debe ser el correo asociado a su cuenta en la plataforma.
                            </p>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setNetworkInviteOpen(false)} className="rounded-xl font-bold">Cancelar</Button>
                        <Button
                            onClick={handleNetworkInvite}
                            disabled={isNetworkInviting}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-8 shadow-lg shadow-indigo-500/10"
                        >
                            {isNetworkInviting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "Enviar Invitación"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Role Dialog (Same as before) */}
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
                        <Button onClick={handleRoleChange} disabled={!newRoleId} className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-8 shadow-lg shadow-blue-500/10">Guardar Cambios</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
