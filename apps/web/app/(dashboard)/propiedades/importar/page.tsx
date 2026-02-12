"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
    Upload,
    FileSpreadsheet,
    ChevronLeft,
    Check,
    AlertCircle,
    ArrowRight,
    Search,
    Table as TableIcon,
    Settings2,
    Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

export default function ImportPropertiesPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [fileName, setFileName] = useState("")

    const handleUpload = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setStep(2)
            setFileName("inventario_export_2024.csv")
            toast.success("Archivo analizado correctamente")
        }, 1500)
    }

    const handleImport = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            toast.success("¡124 propiedades importadas con éxito!")
            router.push("/propiedades")
        }, 2000)
    }

    return (
        <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 border border-gray-100 bg-white" onClick={() => router.back()}>
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h2 className="text-3xl font-black text-gray-800 tracking-tight">Importación Masiva</h2>
                    <p className="text-gray-500 text-sm font-medium">Sube tu inventario mediante un archivo .CSV o .XLSX</p>
                </div>
            </div>

            {/* Stepper */}
            <div className="flex items-center justify-between px-10 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />
                {[1, 2, 3].map((s) => (
                    <div key={s} className="flex flex-col items-center gap-2">
                        <div className={`h-10 w-10 rounded-2xl flex items-center justify-center font-black text-sm z-10 transition-all duration-500 ${step >= s ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20 scale-110' : 'bg-white border-2 border-gray-100 text-gray-300'
                            }`}>
                            {step > s ? <Check className="h-5 w-5" /> : s}
                        </div>
                        <span className={`text-[10px] font-black tracking-widest uppercase transition-colors duration-500 ${step >= s ? 'text-blue-600' : 'text-gray-300'}`}>
                            {s === 1 ? 'Subida' : s === 2 ? 'Mapeo' : 'Finalizar'}
                        </span>
                    </div>
                ))}
            </div>

            {step === 1 && (
                <Card className="border-none shadow-sm rounded-[3rem] overflow-hidden bg-white">
                    <CardContent className="p-12 text-center space-y-10">
                        <div className="space-y-4">
                            <div className="h-24 w-24 bg-blue-50 rounded-[2.5rem] flex items-center justify-center text-blue-600 mx-auto group">
                                <Upload className="h-10 w-10 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-black text-gray-900 tracking-tight">Selecciona tu archivo</h3>
                                <p className="text-sm text-gray-400 font-medium max-w-xs mx-auto">Arrastra y suelta tu archivo aquí o haz clic para buscarlo en tu ordenador.</p>
                            </div>
                        </div>

                        <div className="border-2 border-dashed border-gray-100 rounded-[2.5rem] p-16 hover:border-blue-100 hover:bg-blue-50/5 transition-all cursor-pointer">
                            <input type="file" className="hidden" id="file-upload" onChange={handleUpload} />
                            <label htmlFor="file-upload" className="cursor-pointer space-y-4 block">
                                <div className="flex items-center justify-center gap-3">
                                    <FileSpreadsheet className="h-6 w-6 text-green-500" />
                                    <span className="text-sm font-bold text-gray-700">Explorar archivos (.csv, .xlsx)</span>
                                </div>
                                <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Tamaño máximo: 20MB</p>
                            </label>
                        </div>

                        <div className="pt-6 border-t border-gray-50 flex items-center justify-center gap-8">
                            <div className="text-center">
                                <p className="text-2xl font-black text-gray-900">100%</p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Seguro</p>
                            </div>
                            <div className="h-12 w-px bg-gray-100" />
                            <div className="text-center">
                                <p className="text-2xl font-black text-gray-900">Fast</p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Procesamiento</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {step === 2 && (
                <div className="space-y-8 animate-in slide-in-from-right duration-500">
                    <Card className="border-none shadow-sm rounded-[3rem] overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-gray-50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                                        <TableIcon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg font-bold">{fileName}</CardTitle>
                                        <CardDescription>Mapea las columnas de tu archivo a los campos del sistema</CardDescription>
                                    </div>
                                </div>
                                <Badge className="bg-green-100 text-green-700 border-none font-bold rounded-lg px-3">254 Filas detectadas</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="space-y-6">
                                {[
                                    { label: "Título de Propiedad", system: "title", required: true },
                                    { label: "Precio de Venta", system: "price", required: true },
                                    { label: "Dirección/Calle", system: "address", required: true },
                                    { label: "Superficie Total", system: "surface", required: false },
                                    { label: "Dormitorios", system: "bedrooms", required: false },
                                ].map((field) => (
                                    <div key={field.system} className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50/50 group hover:bg-gray-50 transition-colors">
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-bold text-gray-700">{field.label}</span>
                                                {field.required && <span className="h-1.5 w-1.5 rounded-full bg-red-500" />}
                                            </div>
                                            <p className="text-[10px] text-gray-400 font-medium">Campo requerido por el sistema</p>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-gray-200 group-hover:text-blue-200 transition-colors" />
                                        <div className="w-64">
                                            <Select defaultValue={field.system}>
                                                <SelectTrigger className="h-11 bg-white border-gray-200 rounded-xl shadow-sm text-xs font-bold">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-xl">
                                                    <SelectItem value={field.system} className="text-xs font-bold">Columna: {field.label}</SelectItem>
                                                    <SelectItem value="none" className="text-xs font-bold">Ignorar columna</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex items-center justify-between px-8">
                        <Button variant="ghost" className="font-bold text-gray-400" onClick={() => setStep(1)}>Atrás</Button>
                        <Button
                            className="h-14 bg-blue-600 hover:bg-blue-700 text-white font-black px-10 rounded-2xl shadow-xl shadow-blue-500/30"
                            onClick={handleImport}
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : "Iniciar Importación"}
                        </Button>
                    </div>
                </div>
            )}

            <div className="bg-orange-50/50 rounded-3xl p-6 border border-orange-100/50 flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-orange-400 shrink-0" />
                <div className="space-y-1">
                    <p className="text-xs font-black text-orange-600 uppercase tracking-widest">Consejo de Pro</p>
                    <p className="text-xs text-orange-700/70 font-medium leading-relaxed">
                        Asegúrate de que tus fotos ya estén subidas en línea o sepáralas por comas si utilizas una URL.
                        Puedes descargar nuestra <span className="underline font-bold cursor-pointer">Plantilla de Ejemplo</span> para evitar errores de mapeo.
                    </p>
                </div>
            </div>
        </div>
    )
}
