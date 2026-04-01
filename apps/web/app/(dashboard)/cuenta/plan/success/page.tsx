"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { CheckCircle2, Loader2, Sparkles } from "lucide-react"
import { initializeSubscription } from "@/app/actions/subscriptions"
import { toast } from "sonner"

export default function SuccessPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing')
    const [message, setMessage] = useState('Procesando tu pago y activando tu plan...')

    const plan = searchParams.get('plan')

    useEffect(() => {
        if (!plan) {
            router.push('/cuenta/plan')
            return
        }

        async function activate() {
            try {
                const result = await initializeSubscription(plan!)
                if (result.success) {
                    setStatus('success')
                    setMessage('¡Subscripción activada con éxito!')
                    toast.success("¡Bienvenido al plan " + plan + "!")

                    // Delay redirect to show success state
                    setTimeout(() => {
                        router.push('/dashboard')
                        router.refresh()
                    }, 3000)
                } else {
                    setStatus('error')
                    setMessage('Hubo un problema al activar tu plan. Por favor, contacta a soporte.')
                }
            } catch (error: any) {
                console.error("Activation error:", error)
                setStatus('error')
                setMessage('Error: ' + error.message)
            }
        }

        activate()
    }, [plan, router])

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center space-y-8">
            <div className="relative">
                {status === 'processing' ? (
                    <div className="h-24 w-24 rounded-full bg-blue-50 flex items-center justify-center">
                        <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
                    </div>
                ) : status === 'success' ? (
                    <div className="h-24 w-24 rounded-full bg-green-50 flex items-center justify-center animate-in zoom-in duration-500">
                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                        <div className="absolute -top-2 -right-2">
                            <Sparkles className="h-8 w-8 text-amber-400 animate-pulse" />
                        </div>
                    </div>
                ) : (
                    <div className="h-24 w-24 rounded-full bg-red-50 flex items-center justify-center">
                        <div className="text-red-600 font-bold text-4xl">!</div>
                    </div>
                )}
            </div>

            <div className="space-y-4 max-w-md mx-auto">
                <h1 className={`text-3xl font-black tracking-tighter ${status === 'error' ? 'text-red-900' : 'text-gray-900'}`}>
                    {status === 'processing' ? 'Procesando Pago' : status === 'success' ? '¡Pago Confirmado!' : 'Algo salió mal'}
                </h1>
                <p className="text-gray-500 font-medium leading-relaxed">
                    {message}
                </p>
            </div>

            {status === 'success' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                    <p className="text-sm font-black text-blue-600 uppercase tracking-widest">
                        Redirigiéndote al dashboard...
                    </p>
                </div>
            )}

            {status === 'error' && (
                <button
                    onClick={() => router.push('/cuenta/plan')}
                    className="px-8 py-3 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all"
                >
                    Volver a Planes
                </button>
            )}
        </div>
    )
}
