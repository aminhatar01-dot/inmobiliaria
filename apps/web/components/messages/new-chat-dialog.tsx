"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, UserPlus, Users, MessageSquare, Loader2 } from "lucide-react"
import { getTenantUsers, getLeadsForMessaging, getOrCreateConversation, getOrCreateLeadConversation, createGroupConversation } from "@/app/actions/messages"
import { toast } from "sonner"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface NewChatDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onConversationCreated: (id: string) => void
}

export function NewChatDialog({ open, onOpenChange, onConversationCreated }: NewChatDialogProps) {
    const [activeTab, setActiveTab] = useState<"team" | "leads">("team")
    const [searchQuery, setSearchQuery] = useState("")
    const [teamUsers, setTeamUsers] = useState<any[]>([])
    const [leads, setLeads] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isCreating, setIsCreating] = useState(false)
    const [groupName, setGroupName] = useState("")
    const [selectedUsers, setSelectedUsers] = useState<string[]>([])

    useEffect(() => {
        if (open) {
            loadData()
        }
    }, [open])

    const loadData = async () => {
        setIsLoading(true)
        try {
            const [users, leadList] = await Promise.all([
                getTenantUsers(),
                getLeadsForMessaging()
            ])
            setTeamUsers(users)
            setLeads(leadList)
        } catch (error) {
            console.error("Error loading chat data:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleCreateChat = async (id: string, type: "team" | "leads") => {
        setIsCreating(true)
        try {
            let convId: string | null = null
            if (type === "team") {
                convId = await getOrCreateConversation(id)
            } else {
                convId = await getOrCreateLeadConversation(id)
            }

            if (convId) {
                onConversationCreated(convId)
                onOpenChange(false)
            } else {
                toast.error("No se pudo iniciar la conversación")
            }
        } catch (error) {
            console.error("Error creating chat:", error)
            toast.error("Ocurrió un error inesperado")
        } finally {
            setIsCreating(false)
        }
    }

    const handleCreateGroup = async () => {
        if (!groupName.trim()) {
            toast.error("Ingresa un nombre para el grupo")
            return
        }
        if (selectedUsers.length === 0) {
            toast.error("Selecciona al menos un participante")
            return
        }

        setIsCreating(true)
        try {
            const convId = await createGroupConversation(groupName, selectedUsers)
            if (convId) {
                onConversationCreated(convId)
                onOpenChange(false)
                setGroupName("")
                setSelectedUsers([])
            } else {
                toast.error("No se pudo crear el grupo")
            }
        } catch (error) {
            toast.error("Error al crear el grupo")
        } finally {
            setIsCreating(false)
        }
    }

    const toggleUser = (userId: string) => {
        setSelectedUsers(prev => 
            prev.includes(userId) 
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        )
    }

    const filteredTeam = teamUsers.filter(u =>
        u.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.email?.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const filteredLeads = leads.filter(l =>
        l.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.email?.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl">
                <DialogHeader className="p-6 bg-gray-50/50">
                    <DialogTitle className="text-2xl font-black text-gray-900">Nuevo Mensaje</DialogTitle>
                    <DialogDescription className="text-gray-500 font-medium">
                        Selecciona un colega o cliente para iniciar un chat.
                    </DialogDescription>
                </DialogHeader>

                <div className="p-6 space-y-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Buscar por nombre..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 h-11 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all font-medium"
                        />
                    </div>

                    <Tabs value={activeTab} onValueChange={(v: any) => setActiveTab(v)} className="w-full">
                        <TabsList className="grid w-full grid-cols-3 p-1 bg-gray-100 rounded-2xl h-12">
                            <TabsTrigger value="team" className="rounded-xl font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                <Users className="h-4 w-4 mr-2" />
                                Equipo
                            </TabsTrigger>
                            <TabsTrigger value="leads" className="rounded-xl font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                <UserPlus className="h-4 w-4 mr-2" />
                                Clientes
                            </TabsTrigger>
                            <TabsTrigger value="group" className="rounded-xl font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Grupos
                            </TabsTrigger>
                        </TabsList>

                        <div className="mt-6">
                            <TabsContent value="team" className="m-0">
                                <div className="max-h-[300px] overflow-y-auto space-y-1">
                                    {isLoading ? (
                                        <div className="flex items-center justify-center p-8">
                                            <Loader2 className="h-6 w-6 text-blue-500 animate-spin" />
                                        </div>
                                    ) : filteredTeam.length > 0 ? (
                                        filteredTeam.map(user => (
                                            <button
                                                key={user.id}
                                                disabled={isCreating}
                                                onClick={() => handleCreateChat(user.id, "team")}
                                                className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-blue-50 transition-all text-left group disabled:opacity-50"
                                            >
                                                <Avatar className="h-10 w-10">
                                                    <AvatarFallback className="bg-blue-100 text-blue-600 font-bold">
                                                        {user.full_name?.[0] || user.email?.[0]}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-bold text-gray-900 group-hover:text-blue-700">{user.full_name || 'Agente'}</p>
                                                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                                </div>
                                            </button>
                                        ))
                                    ) : (
                                        <p className="text-center p-8 text-sm text-gray-400">No se encontraron colegas</p>
                                    )}
                                </div>
                            </TabsContent>

                            <TabsContent value="leads" className="m-0">
                                <div className="max-h-[300px] overflow-y-auto space-y-1">
                                    {isLoading ? (
                                        <div className="flex items-center justify-center p-8">
                                            <Loader2 className="h-6 w-6 text-blue-500 animate-spin" />
                                        </div>
                                    ) : filteredLeads.length > 0 ? (
                                        filteredLeads.map(lead => (
                                            <button
                                                key={lead.id}
                                                disabled={isCreating}
                                                onClick={() => handleCreateChat(lead.id, "leads")}
                                                className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-blue-50 transition-all text-left group disabled:opacity-50"
                                            >
                                                <Avatar className="h-10 w-10">
                                                    <AvatarFallback className="bg-amber-100 text-amber-600 font-bold">
                                                        {lead.name?.[0]}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-bold text-gray-900 group-hover:text-blue-700">{lead.name}</p>
                                                    <p className="text-xs text-gray-500 truncate">{lead.email || lead.phone || 'Sin contacto'}</p>
                                                </div>
                                            </button>
                                        ))
                                    ) : (
                                        <p className="text-center p-8 text-sm text-gray-400">No se encontraron clientes</p>
                                    )}
                                </div>
                            </TabsContent>
                            <TabsContent value="group" className="m-0 space-y-4">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Nombre del Grupo</Label>
                                    <Input 
                                        placeholder="Ej: Equipo Ventas Olivos"
                                        value={groupName}
                                        onChange={(e) => setGroupName(e.target.value)}
                                        className="h-11 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all font-bold"
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Seleccionar Integrantes ({selectedUsers.length})</Label>
                                    <div className="max-h-[200px] overflow-y-auto space-y-1 p-1">
                                        {teamUsers.map(user => (
                                            <div 
                                                key={user.id} 
                                                onClick={() => toggleUser(user.id)}
                                                className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-all"
                                            >
                                                <Checkbox 
                                                    checked={selectedUsers.includes(user.id)}
                                                    onCheckedChange={() => toggleUser(user.id)}
                                                />
                                                <Avatar className="h-8 w-8">
                                                    <AvatarFallback className="bg-blue-100 text-blue-600 font-bold text-[10px]">
                                                        {user.full_name?.[0] || user.email?.[0]}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <p className="text-xs font-bold text-gray-700">{user.full_name || user.email}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Button 
                                    onClick={handleCreateGroup}
                                    disabled={isCreating || !groupName || selectedUsers.length === 0}
                                    className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold shadow-lg shadow-indigo-500/20"
                                >
                                    {isCreating ? <Loader2 className="h-4 w-4 animate-spin" /> : "Crear Grupo de Trabajo"}
                                </Button>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-100 mt-auto">
                    <Button
                        variant="ghost"
                        onClick={() => onOpenChange(false)}
                        className="w-full font-bold text-gray-500 hover:text-gray-900"
                    >
                        Cancelar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
