'use client'

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { uploadCustomTemplate, deleteTemplate } from "@/app/actions/contracts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { Loader2, Upload, Trash2, AlertCircle } from "lucide-react"

interface Props {
    mode: "upload-only" | "delete"
    templateId?: string
}

// This component is replaced by DocumentImporter in the main page.
// It is still used locally in some areas if needed.
export function TemplateManager({ mode, templateId }: Props) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [fileName, setFileName] = useState("")
    const [docType, setDocType] = useState("other")
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        setFileName(file.name.split('.')[0])
        setOpen(true)
    }

    const confirmUpload = async () => {
        const file = fileInputRef.current?.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = async (event) => {
            const text = event.target?.result as string
            setLoading(true)
            try {
                const formData = new FormData()
                formData.append('name', fileName)
                formData.append('type', docType)
                formData.append('content', text)

                await uploadCustomTemplate(formData)
                toast.success("Plantilla guardada correctamente")
                setOpen(false)
                router.refresh()
            } catch (error) {
                toast.error("Error al guardar la plantilla")
            } finally {
                setLoading(false)
            }
        }
        reader.readAsText(file)
    }

    const handleDelete = async () => {
        if (!templateId) return
        setLoading(true)
        try {
            await deleteTemplate(templateId)
            toast.success("Plantilla eliminada")
            router.refresh()
        } catch (error) {
            toast.error("Error al eliminar la plantilla")
        } finally {
            setLoading(false)
        }
    }

    if (mode === "delete") {
        return (
            <Button
                variant="ghost"
                size="icon"
                onClick={handleDelete}
                disabled={loading}
                className="h-12 w-12 rounded-2xl bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 transition-colors"
            >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
            </Button>
        )
    }

    return (
        <>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".txt,.md,.html"
                onChange={handleFileUpload}
            />
            <Button
                onClick={() => fileInputRef.current?.click()}
                className="h-16 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-lg shadow-2xl shadow-blue-100 group transition-all active:scale-95"
            >
                <Upload className="mr-3 h-6 w-6 group-hover:-translate-y-1 transition-transform" />
                Subir Plantilla
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[425px] rounded-[2rem] border-none shadow-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-black tracking-tight">Configurar Plantilla</DialogTitle>
                        <DialogDescription className="font-medium text-gray-500">
                            Personaliza cómo se guardará tu plantilla en el sistema.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-gray-400">Nombre de la Plantilla</Label>
                            <Input
                                id="name"
                                value={fileName}
                                onChange={(e) => setFileName(e.target.value)}
                                className="h-12 rounded-2xl bg-gray-50 border-none font-medium text-gray-900"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Tipo de Documento</Label>
                            <Select value={docType} onValueChange={setDocType}>
                                <SelectTrigger className="h-12 rounded-2xl bg-gray-50 border-none font-medium">
                                    <SelectValue placeholder="Seleccionar tipo" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl border-none shadow-xl">
                                    <SelectItem value="reservation">Reserva</SelectItem>
                                    <SelectItem value="rental">Alquiler</SelectItem>
                                    <SelectItem value="sale">Compraventa</SelectItem>
                                    <SelectItem value="receipt">Recibo</SelectItem>
                                    <SelectItem value="other">Otro</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant="ghost"
                            onClick={() => setOpen(false)}
                            className="rounded-xl h-12 px-6 font-bold text-gray-400"
                        >
                            Cancelar
                        </Button>
                        <Button
                            onClick={confirmUpload}
                            disabled={loading || !fileName}
                            className="rounded-xl h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-black shadow-lg shadow-blue-100"
                        >
                            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Guardar Plantilla"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
