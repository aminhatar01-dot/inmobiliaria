'use client'

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { toast } from "sonner"

interface DownloadButtonProps {
    content: string
    title: string
}

export function DownloadButton({ content, title }: DownloadButtonProps) {
    const handleDownload = () => {
        try {
            const blob = new Blob([content], { type: 'text/markdown' })
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
            document.body.removeChild(a)
            toast.success("Documento descargado")
        } catch (error) {
            console.error("Download error:", error)
            toast.error("Error al descargar el documento")
        }
    }

    return (
        <Button
            variant="ghost"
            onClick={handleDownload}
            className="h-12 w-12 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all active:scale-95"
            title="Descargar como Markdown"
        >
            <Download className="h-5 w-5" />
        </Button>
    )
}
