'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useGoogleAdsMetrics, useGoogleAdsCustomers } from '@/hooks/use-google-ads'
import { BarChart3, ExternalLink, Globe, MousePointer2, RefreshCw, Sparkles } from 'lucide-react'
import { toast } from 'sonner'

export function AdsManager() {
    const { data: metrics, isLoading: loadingMetrics, refetch: refetchMetrics, error: metricsError } = useGoogleAdsMetrics()
    const { data: customersData, isLoading: loadingCustomers } = useGoogleAdsCustomers()
    const [selecting, setSelecting] = useState(false)

    const handleConnect = () => {
        window.location.href = '/api/auth/google/connect'
    }

    const handleSelectCustomer = async (cid: string) => {
        setSelecting(true)
        try {
            const res = await fetch('/api/ads/customers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ customerId: cid })
            })
            if (!res.ok) throw new Error('Error al seleccionar Customer ID')
            toast.success('Cuenta de Google Ads vinculada')
            refetchMetrics()
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setSelecting(false)
        }
    }

    if (metricsError && (metricsError as any).message?.includes('not connected')) {
        return (
            <Card className="border-dashed border-2 bg-muted/30">
                <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                        <Globe className="w-6 h-6" />
                    </div>
                    <CardTitle>Conecta Google Ads</CardTitle>
                    <CardDescription>
                        Gestiona tus campañas y presupuestos directamente desde InmoCMS.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center pb-8">
                    <Button onClick={handleConnect} className="gap-2 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                        <ExternalLink className="w-5 h-5" />
                        Vincular Cuenta de Google
                    </Button>
                </CardContent>
            </Card>
        )
    }

    if (metricsError && (metricsError as any).message?.includes('Customer ID')) {
        return (
            <Card className="border-blue-100 bg-blue-50/20">
                <CardHeader>
                    <CardTitle>Selecciona tu cuenta de Google Ads</CardTitle>
                    <CardDescription>
                        Hemos detectado tu conexión a Google, pero necesitas elegir qué Customer ID (CID) utilizar.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {loadingCustomers ? (
                        <div className="h-10 w-full bg-muted animate-pulse rounded" />
                    ) : (
                        <div className="flex items-center gap-4">
                            <Select onValueChange={handleSelectCustomer} disabled={selecting}>
                                <SelectTrigger className="w-full max-w-md bg-background">
                                    <SelectValue placeholder="Seleccionar CID" />
                                </SelectTrigger>
                                <SelectContent>
                                    {customersData?.customers?.map((cid: string) => (
                                        <SelectItem key={cid} value={cid}>{cid}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    )}
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight">Google Ads Dashboard</h2>
                    <p className="text-muted-foreground">Rendimiento de tus campañas en los últimos 30 días.</p>
                </div>
                
                {customersData?.customers?.length > 0 && (
                    <div className="flex items-center gap-2">
                        <Select onValueChange={handleSelectCustomer} disabled={selecting}>
                            <SelectTrigger className="w-[200px] bg-background">
                                <SelectValue placeholder="Seleccionar CID" />
                            </SelectTrigger>
                            <SelectContent>
                                {customersData.customers.map((cid: string) => (
                                    <SelectItem key={cid} value={cid}>{cid}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Button variant="outline" size="icon" onClick={() => refetchMetrics()} disabled={loadingMetrics}>
                            <RefreshCw className={`w-4 h-4 ${loadingMetrics ? 'animate-spin' : ''}`} />
                        </Button>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard 
                    title="Impresiones" 
                    value={metrics?.impressions || 0} 
                    icon={<Globe className="w-4 h-4 text-blue-500" />} 
                    loading={loadingMetrics}
                />
                <MetricCard 
                    title="Clics" 
                    value={metrics?.clicks || 0} 
                    icon={<MousePointer2 className="w-4 h-4 text-green-500" />} 
                    loading={loadingMetrics}
                />
                <MetricCard 
                    title="CPC Medio" 
                    value={`$${metrics?.cpc || '0.00'}`} 
                    icon={<BarChart3 className="w-4 h-4 text-purple-500" />} 
                    loading={loadingMetrics}
                />
                <MetricCard 
                    title="Inversión" 
                    value={`$${metrics?.cost || '0.00'}`} 
                    icon={<Sparkles className="w-4 h-4 text-amber-500" />} 
                    loading={loadingMetrics}
                />
            </div>
        </div>
    )
}

function MetricCard({ title, value, icon, loading }: { title: string, value: string | number, icon: React.ReactNode, loading: boolean }) {
    return (
        <Card className="relative overflow-hidden group hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <div className="p-2 bg-muted rounded-md group-hover:bg-primary/10 transition-colors">
                    {icon}
                </div>
            </CardHeader>
            <CardContent>
                {loading ? (
                    <div className="h-8 w-24 bg-muted animate-pulse rounded" />
                ) : (
                    <div className="text-2xl font-bold">{value.toLocaleString()}</div>
                )}
            </CardContent>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </Card>
    )
}
