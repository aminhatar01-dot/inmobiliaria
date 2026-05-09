"use client"

import { Copy, Check, QrCode, Download, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { QRCodeSVG } from "qrcode.react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function PortfolioLinkClient({ url }: { url: string }) {
    const [copied, setCopied] = useState(false)
    const [qrOpen, setQrOpen] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(url)
        setCopied(true)
        toast.success("¡Link copiado!", {
            description: "Ya puedes compartirlo con tus clientes."
        })
        setTimeout(() => setCopied(false), 2000)
    }

    const downloadQR = () => {
        const svg = document.getElementById("portfolio-qr")
        if (!svg) return

        const svgData = new XMLSerializer().serializeToString(svg)
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        const img = new Image()
        
        img.onload = () => {
            canvas.width = img.width
            canvas.height = img.height
            ctx?.drawImage(img, 0, 0)
            const pngFile = canvas.toDataURL("image/png")
            const downloadLink = document.createElement("a")
            downloadLink.download = "portfolio-qr.png"
            downloadLink.href = pngFile
            downloadLink.click()
        }
        
        img.src = "data:image/svg+xml;base64," + btoa(svgData)
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="relative flex-1 w-full group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                        <span className="text-xs font-black uppercase tracking-widest">URL</span>
                    </div>
                    <Input 
                        readOnly 
                        value={url} 
                        className="h-16 pl-14 pr-4 rounded-2xl bg-gray-50 border-gray-100 font-bold text-gray-600 focus-visible:ring-blue-600 focus-visible:bg-white transition-all"
                    />
                </div>
                <Button 
                    onClick={handleCopy}
                    className={`h-16 px-8 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 ${
                        copied 
                            ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20" 
                            : "bg-gray-900 hover:bg-black text-white shadow-gray-900/20"
                    }`}
                >
                    {copied ? (
                        <span className="flex items-center gap-2"><Check className="h-5 w-5" /> Copiado</span>
                    ) : (
                        <span className="flex items-center gap-2"><Copy className="h-5 w-5" /> Copiar Link</span>
                    )}
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button asChild variant="outline" className="h-14 rounded-2xl font-bold border-2 hover:bg-gray-50 transition-all group">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Previsualizar Porfolio
                    </a>
                </Button>
                
                <Dialog open={qrOpen} onOpenChange={setQrOpen}>
                    <DialogTrigger asChild>
                        <Button className="h-14 rounded-2xl font-bold bg-blue-600 hover:bg-black text-white shadow-xl shadow-blue-500/20 group">
                            <QrCode className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            Generar Código QR
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md rounded-[2.5rem] p-10 border-none shadow-2xl">
                        <DialogHeader className="text-center space-y-4">
                            <div className="mx-auto h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-2">
                                <QrCode className="h-8 w-8 text-blue-600" />
                            </div>
                            <DialogTitle className="text-2xl font-black tracking-tight text-gray-900">Tu Código QR Personal</DialogTitle>
                            <DialogDescription className="text-gray-500 font-medium">
                                Descarga este código QR para imprimirlo en tarjetas de presentación, folletos o mostrarlo desde tu celular.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col items-center justify-center space-y-8 py-6">
                            <div className="p-8 bg-white rounded-[2rem] shadow-2xl shadow-blue-500/10 border border-gray-50">
                                <QRCodeSVG 
                                    id="portfolio-qr"
                                    value={url} 
                                    size={200}
                                    level="H"
                                    includeMargin={false}
                                />
                            </div>
                            <Button 
                                onClick={downloadQR}
                                className="w-full h-14 rounded-2xl font-black text-sm uppercase tracking-widest bg-gray-900 hover:bg-blue-600 text-white shadow-xl shadow-gray-900/10 transition-all group"
                            >
                                <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                                Descargar Imagen PNG
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
