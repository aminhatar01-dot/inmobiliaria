"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, RefreshCcw } from "lucide-react"

export default function PortalesError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 space-y-6 text-center animate-in fade-in duration-500">
            <div className="h-20 w-20 rounded-3xl bg-red-50 flex items-center justify-center text-red-500 shadow-xl shadow-red-500/10">
                <AlertCircle className="h-10 w-10" />
            </div>

            <div className="space-y-2">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">¡Ups! Algo salió mal</h2>
                <p className="text-gray-500 font-medium max-w-md mx-auto">
                    No pudimos cargar tus conexiones de portales. Esto puede deberse a un problema de conexión o permisos.
                </p>
                {error.message && (
                    <p className="text-xs font-mono text-red-400 mt-4 bg-red-50/50 p-3 rounded-xl inline-block border border-red-100">
                        {error.message}
                    </p>
                )}
            </div>

            <div className="flex gap-4">
                <Button
                    variant="outline"
                    onClick={() => window.location.href = "/marketing"}
                    className="rounded-2xl font-bold h-14 px-8"
                >
                    VOLVER A MARKETING
                </Button>
                <Button
                    onClick={() => reset()}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black h-14 px-8 shadow-lg shadow-indigo-500/20"
                >
                    <RefreshCcw className="mr-2 h-5 w-5" />
                    REINTENTAR
                </Button>
            </div>
        </div>
    )
}
