"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X, FileSpreadsheet, Sparkles, Import } from "lucide-react"
import { toast } from "sonner"
import { bulkCreateLeads } from "@/app/actions/leads"
import type { Lead } from "@inmocms/shared"

interface LeadBulkImporterProps {
    onImportSuccess?: () => void;
}

export function LeadBulkImporter({ onImportSuccess }: LeadBulkImporterProps) {
    const [isHovering, setIsHovering] = useState(false)
    const [isUploading, setIsUploading] = useState(false)
    const [preview, setPreview] = useState<Partial<Lead>[]>([])
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        if (!file.name.endsWith('.csv')) {
            toast.error("Solo se admiten archivos .csv de momento.")
            return
        }

        const text = await file.text()
        const parsedLeads = parseCSV(text)
        
        if (parsedLeads.length === 0) {
            toast.error("El archivo está vacío o no tiene un formato válido.")
            return
        }

        setPreview(parsedLeads)
    }

    const parseCSV = (csvText: string): Partial<Lead>[] => {
        const lines = csvText.split('\n').filter(l => l.trim().length > 0)
        if (lines.length < 2) return []

        const headers = lines[0].split(',').map(h => h.trim().toLowerCase())
        
        // Find indices
        const nameIdx = headers.findIndex(h => h.includes('nombre') || h.includes('name'))
        const emailIdx = headers.findIndex(h => h.includes('email') || h.includes('correo'))
        const phoneIdx = headers.findIndex(h => h.includes('telefono') || h.includes('phone'))

        if (nameIdx === -1) {
            toast.error("No se encontró la columna 'Nombre' o 'Name'")
            return []
        }

        const parsed: Partial<Lead>[] = []

        for (let i = 1; i < lines.length; i++) {
            const currentline = lines[i].split(',')
            
            if (currentline.length <= nameIdx) continue

            const leadData: Partial<Lead> = {
                name: currentline[nameIdx]?.trim(),
                status: 'new',
                source: 'imported'
            }

            if (emailIdx !== -1 && currentline[emailIdx]) leadData.email = currentline[emailIdx].trim()
            if (phoneIdx !== -1 && currentline[phoneIdx]) leadData.phone = currentline[phoneIdx].trim()

            if (leadData.name) {
                parsed.push(leadData)
            }
        }

        return parsed
    }

    const handleImport = async () => {
        if (preview.length === 0) return

        setIsUploading(true)
        try {
            await bulkCreateLeads(preview)
            toast.success(`Se importaron ${preview.length} leads exitosamente.`)
            setPreview([])
            if (fileInputRef.current) fileInputRef.current.value = ""
            if (onImportSuccess) onImportSuccess()
        } catch (error: any) {
            toast.error(error.message || "Hubo un error al importar los leads.")
        } finally {
            setIsUploading(false)
        }
    }

    const cancelImport = () => {
        setPreview([])
        if (fileInputRef.current) fileInputRef.current.value = ""
    }

    return (
        <div className="w-full">
            <input 
                type="file" 
                accept=".csv" 
                ref={fileInputRef} 
                className="hidden" 
                onChange={handleFileChange}
            />

            {preview.length === 0 ? (
                <div 
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setIsHovering(true); }}
                    onDragLeave={() => setIsHovering(false)}
                    onDrop={(e) => {
                        e.preventDefault()
                        setIsHovering(false)
                        const file = e.dataTransfer.files?.[0]
                        if (file) {
                             const dataTransfer = new DataTransfer();
                             dataTransfer.items.add(file);
                             if (fileInputRef.current) {
                                 fileInputRef.current.files = dataTransfer.files;
                                 fileInputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
                             }
                        }
                    }}
                    className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 ${isHovering ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'}`}
                >
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                        <FileSpreadsheet className="h-6 w-6" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Cargar base de datos (.csv)</h4>
                    <p className="text-xs text-gray-500 max-w-[250px] mx-auto">
                        Asegúrate de incluir las columnas Nombre, Email y/o Teléfono.
                    </p>
                </div>
            ) : (
                <div className="border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-green-100 text-green-700 rounded-lg flex items-center justify-center font-black">
                                {preview.length}
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-900">Leads Listos</h4>
                                <p className="text-xs text-gray-500">Revisión previa a la importación</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={cancelImport} className="h-8 w-8 text-gray-400 hover:text-red-500">
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="max-h-[200px] overflow-auto p-2">
                        <table className="w-full text-xs text-left">
                            <thead className="text-gray-400 sticky top-0 bg-white shadow-sm">
                                <tr>
                                    <th className="font-medium p-2">Nombre</th>
                                    <th className="font-medium p-2">Email</th>
                                    <th className="font-medium p-2">Teléfono</th>
                                </tr>
                            </thead>
                            <tbody>
                                {preview.slice(0, 50).map((l, i) => (
                                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                                        <td className="p-2 font-medium text-gray-900 truncate">{l.name}</td>
                                        <td className="p-2 text-gray-500 truncate">{l.email || '-'}</td>
                                        <td className="p-2 text-gray-500 truncate">{l.phone || '-'}</td>
                                    </tr>
                                ))}
                                {preview.length > 50 && (
                                    <tr>
                                        <td colSpan={3} className="p-3 text-center text-gray-400 font-medium italic bg-gray-50/50">
                                            Y {preview.length - 50} leads más...
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 border-t border-gray-100 bg-gray-50">
                        <Button 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md font-bold" 
                            onClick={handleImport}
                            disabled={isUploading}
                        >
                            {isUploading ? "Importando..." : "Confirmar e Importar al CRM"}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
