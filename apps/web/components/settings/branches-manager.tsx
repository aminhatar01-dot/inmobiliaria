"use client"

import { useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    createBranch,
    updateBranch,
    deleteBranch,
    type Branch
} from "@/app/actions/settings"
import { toast } from "sonner"
import { MapPin, Phone, Mail, Plus, Pencil, Trash2, Loader2, Building, Home } from "lucide-react"

interface BranchesManagerProps {
    initialBranches: Branch[]
}

export function BranchesManager({ initialBranches }: BranchesManagerProps) {
    const [branches, setBranches] = useState(initialBranches)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [editingBranch, setEditingBranch] = useState<Branch | null>(null)

    // Form states
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
    })

    const resetForm = () => {
        setFormData({ name: "", address: "", phone: "", email: "" })
        setEditingBranch(null)
    }

    const handleOpenDialog = (branch?: Branch) => {
        if (branch) {
            setEditingBranch(branch)
            setFormData({
                name: branch.name,
                address: branch.address || "",
                phone: branch.phone || "",
                email: branch.email || "",
            })
        } else {
            resetForm()
        }
        setIsDialogOpen(true)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            if (editingBranch) {
                await updateBranch(editingBranch.id, formData)
                toast.success("Sucursal actualizada")
            } else {
                await createBranch(formData)
                toast.success("Sucursal creada")
            }
            // In a real app we'd re-fetch or use the return value
            // For now, router.refresh handles revalidation on server actions
            setIsDialogOpen(false)
            resetForm()
            // Note: Since server actions revalidate, the parent will get fresh props if used correctly
        } catch (error) {
            toast.error("Ocurrió un error")
        } finally {
            setIsLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("¿Estás seguro de que deseas eliminar esta sucursal?")) return
        try {
            await deleteBranch(id)
            toast.success("Sucursal eliminada")
        } catch (error) {
            toast.error("Error al eliminar")
        }
    }

    return (
        <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-8 bg-gray-50/50 flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-400/20">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-black text-gray-900">Sucursales</CardTitle>
                        <CardDescription className="text-gray-500 font-medium font-serif">Gestiona las oficinas físicas de tu inmobiliaria</CardDescription>
                    </div>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={(open) => {
                    setIsDialogOpen(open)
                    if (!open) resetForm()
                }}>
                    <DialogTrigger asChild>
                        <Button
                            onClick={() => handleOpenDialog()}
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 font-bold shadow-lg shadow-blue-500/20"
                        >
                            <Plus className="h-4 w-4 mr-2" /> Nueva Sucursal
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] rounded-[2.5rem] p-0 overflow-hidden border-none shadow-2xl">
                        <DialogHeader className="p-8 bg-gray-50/50">
                            <DialogTitle className="text-2xl font-black text-gray-900">
                                {editingBranch ? "Editar Sucursal" : "Nueva Sucursal"}
                            </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Nombre de la Sucursal</Label>
                                    <Input
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="h-11 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Dirección</Label>
                                    <Input
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        className="h-11 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all font-medium"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Teléfono</Label>
                                        <Input
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="h-11 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Email</Label>
                                        <Input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="h-11 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all font-medium"
                                        />
                                    </div>
                                </div>
                            </div>
                            <DialogFooter className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20"
                                >
                                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : null}
                                    {editingBranch ? "Actualizar" : "Crear"} Sucursal
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableHeader className="bg-gray-50/50">
                        <TableRow className="hover:bg-transparent border-b-gray-100">
                            <TableHead className="px-8 h-12 text-[10px] font-black uppercase tracking-widest text-gray-400">Nombre</TableHead>
                            <TableHead className="h-12 text-[10px] font-black uppercase tracking-widest text-gray-400">Información</TableHead>
                            <TableHead className="px-8 h-12 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {branches.length > 0 ? (
                            branches.map((branch) => (
                                <TableRow key={branch.id} className="group hover:bg-blue-50/30 transition-colors border-b-gray-50">
                                    <TableCell className="px-8 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                                                <Home className="h-5 w-5" />
                                            </div>
                                            <span className="font-bold text-gray-900">{branch.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4">
                                        <div className="space-y-1">
                                            {branch.email && (
                                                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                                    <Mail className="h-3 w-3 text-gray-400" /> {branch.email}
                                                </div>
                                            )}
                                            {branch.phone && (
                                                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                                    <Phone className="h-3 w-3 text-gray-400" /> {branch.phone}
                                                </div>
                                            )}
                                            {branch.address && (
                                                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                                                    <MapPin className="h-3 w-3" /> {branch.address}
                                                </div>
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-8 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleOpenDialog(branch)}
                                                className="h-9 w-9 rounded-lg text-blue-600 hover:bg-blue-100"
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleDelete(branch.id)}
                                                className="h-9 w-9 rounded-lg text-red-600 hover:bg-red-100"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-12 text-gray-400 italic font-medium">
                                    No hay sucursales registradas
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
