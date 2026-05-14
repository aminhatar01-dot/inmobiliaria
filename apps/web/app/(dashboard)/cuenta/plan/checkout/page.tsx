"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { CreditCard, Landmark, Banknote, ShieldCheck, ChevronRight, Loader2, ArrowLeft, Info } from "lucide-react"
import { Suspense, useState } from "react"

type ViewState = 'selection' | 'card_form' | 'transfer_form'

export default function MockCheckoutPage() {
    return (
        <Suspense fallback={<div className="p-8 flex justify-center"><Loader2 className="h-8 w-8 animate-spin text-blue-600" /></div>}>
            <CheckoutContent />
        </Suspense>
    )
}

function CheckoutContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [view, setView] = useState<ViewState>('selection')

    const plan = searchParams.get('plan') || 'Profesional'
    const price = searchParams.get('price') || '50000'

    const handleConfirm = () => {
        setLoading(true)
        setTimeout(() => {
            router.push(`/cuenta/plan/success?plan=${plan}&status=simulated`)
        }, 2000)
    }

    const renderSelection = () => (
        <div className="space-y-6 animate-in fade-in duration-500">
            <h1 className="text-xl md:text-2xl font-bold">¿Cómo quieres pagar?</h1>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <PaymentOption
                    icon={CreditCard}
                    title="Nueva tarjeta de crédito o débito"
                    subtitle="Hasta 12 cuotas"
                    onClick={() => setView('card_form')}
                />
                <div className="h-[1px] bg-gray-100 mx-6" />
                <PaymentOption
                    icon={Landmark}
                    title="Transferencia bancaria"
                    subtitle="Acreditación instantánea"
                    onClick={() => setView('transfer_form')}
                />
                <div className="h-[1px] bg-gray-100 mx-6" />
                <PaymentOption
                    icon={Banknote}
                    title="Efectivo"
                    subtitle="RapiPago, PagoFácil"
                    onClick={handleConfirm}
                />
            </div>
        </div>
    )

    const renderCardForm = () => (
        <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
            <button
                onClick={() => setView('selection')}
                className="flex items-center gap-2 text-[#009ee3] font-bold text-sm hover:underline"
            >
                <ArrowLeft className="h-4 w-4" />
                Volver
            </button>
            <h1 className="text-xl md:text-2xl font-bold">Ingresa los datos de tu tarjeta</h1>

            <div className="bg-white p-8 rounded-lg border border-gray-200 space-y-6">
                <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Número de tarjeta</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="0000 0000 0000 0000"
                                className="w-full h-12 border-b-2 border-gray-100 focus:border-[#009ee3] outline-none text-lg tracking-widest font-mono transition-all"
                            />
                            <CreditCard className="absolute right-0 top-3 h-5 w-5 text-gray-300" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Nombre y apellido</label>
                        <input
                            type="text"
                            placeholder="Como figura en la tarjeta"
                            className="w-full h-12 border-b-2 border-gray-100 focus:border-[#009ee3] outline-none text-lg transition-all capitalize"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Vencimiento</label>
                            <input
                                type="text"
                                placeholder="MM/AA"
                                className="w-full h-12 border-b-2 border-gray-100 focus:border-[#009ee3] outline-none text-lg transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Cod. seguridad</label>
                            <input
                                type="text"
                                placeholder="CVV"
                                className="w-full h-12 border-b-2 border-gray-100 focus:border-[#009ee3] outline-none text-lg transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                    <Info className="h-5 w-5 text-blue-500 shrink-0" />
                    <p className="text-xs text-blue-700 font-medium">
                        Esta es una transacción segura. No almacenamos tus datos reales durante este proceso de demostración.
                    </p>
                </div>
            </div>
        </div>
    )

    const renderTransferForm = () => (
        <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
            <button
                onClick={() => setView('selection')}
                className="flex items-center gap-2 text-[#009ee3] font-bold text-sm hover:underline"
            >
                <ArrowLeft className="h-4 w-4" />
                Volver
            </button>
            <h1 className="text-xl md:text-2xl font-bold">Transferencia Bancaria (DEBIN/Alias)</h1>

            <div className="bg-white p-8 rounded-lg border border-gray-200 space-y-8">
                <div className="text-center space-y-4">
                    <p className="text-gray-500 font-medium">Escanea este Alias/CBU desde tu Home Banking</p>
                    <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                        <p className="text-2xl font-black tracking-tight text-[#009ee3]">INMOCMS.PAGOS.MP</p>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-300 mt-2">CBU: 0000003100012345678901</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Tu comprobante de transferencia</p>
                    <div className="h-32 border-2 border-dashed border-gray-100 rounded-xl flex items-center justify-center text-gray-300 font-medium cursor-pointer hover:bg-gray-50 transition-all">
                        Haz clic o arrastra tu comprobante aquí
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-[#f5f5f5] text-gray-800 font-sans">
            {/* Minimal Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="bg-[#009ee3] p-1.5 rounded-md">
                        <CreditCard className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Mercado Pago</span>
                </div>
                <div className="text-sm font-medium text-gray-400">
                    Demo de Pago Segura
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-24">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    {view === 'selection' && renderSelection()}
                    {view === 'card_form' && renderCardForm()}
                    {view === 'transfer_form' && renderTransferForm()}

                    <div className="flex items-center gap-3 text-gray-400 text-sm bg-gray-100/50 p-4 rounded-lg mt-8">
                        <ShieldCheck className="h-5 w-5 text-green-500" />
                        <p>Compra protegida por Mercado Pago. Tu dinero está seguro en todo momento.</p>
                    </div>
                </div>

                {/* Sidebar Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-8 shadow-sm">
                        <h2 className="font-bold text-lg mb-6 pb-4 border-b border-gray-100">Resumen de compra</h2>

                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <p className="font-bold text-sm">Plan {plan}</p>
                                    <p className="text-xs text-gray-400">Subscripción mensual InmoCMS</p>
                                </div>
                                <span className="text-sm font-medium">${Number(price).toLocaleString('es-AR')}</span>
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-lg">
                                <span className="font-bold">Total</span>
                                <span className="font-bold">${Number(price).toLocaleString('es-AR')}</span>
                            </div>
                        </div>

                        {view !== 'selection' && (
                            <button
                                onClick={handleConfirm}
                                disabled={loading}
                                className="w-full mt-8 bg-[#009ee3] hover:bg-[#0089c7] text-white font-bold h-12 rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                            >
                                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Confirmar Pago'}
                            </button>
                        )}

                        <div className="mt-4 text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">
                            Pagos procesados por Mercado Pago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PaymentOption({ icon: Icon, title, subtitle, onClick, disabled }: { icon: any, title: string, subtitle: string, onClick: () => void, disabled?: boolean }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors group text-left"
        >
            <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:shadow-sm transition-all">
                    <Icon className="h-5 w-5" />
                </div>
                <div>
                    <p className="font-bold text-sm leading-none mb-1.5">{title}</p>
                    <p className="text-xs text-gray-400 font-medium">{subtitle}</p>
                </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
        </button>
    )
}
