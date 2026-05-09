"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, ArrowLeft } from "lucide-react"

export function MercadoLibreWizard({ 
    propertyData, 
    onCancel, 
    onPublish 
}: { 
    propertyData: any, 
    onCancel: () => void, 
    onPublish: (mlData: any) => void 
}) {
    const [states, setStates] = useState<any[]>([])
    const [cities, setCities] = useState<any[]>([])
    const [neighborhoods, setNeighborhoods] = useState<any[]>([])

    const [selectedState, setSelectedState] = useState("")
    const [selectedCity, setSelectedCity] = useState("")
    const [selectedNeighborhood, setSelectedNeighborhood] = useState("")
    
    const [attributes, setAttributes] = useState({
        TOTAL_AREA: propertyData?.surface_total?.toString() || "50",
        COVERED_AREA: propertyData?.surface_covered?.toString() || "45",
        ROOMS: propertyData?.rooms?.toString() || "2",
        BEDROOMS: propertyData?.bedrooms?.toString() || "1",
        FULL_BATHROOMS: propertyData?.bathrooms?.toString() || "1",
        PARKING_LOTS: "0"
    })

    const [categoryId, setCategoryId] = useState("MLA401686") // Default

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Cargar Provincias
        fetch('https://api.mercadolibre.com/classified_locations/countries/AR')
            .then(res => res.json())
            .then(data => {
                setStates(data.states || [])
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        if (!selectedState) return
        setCities([])
        setNeighborhoods([])
        setSelectedCity("")
        setSelectedNeighborhood("")
        fetch(`https://api.mercadolibre.com/classified_locations/states/${selectedState}`)
            .then(res => res.json())
            .then(data => setCities(data.cities || []))
    }, [selectedState])

    useEffect(() => {
        if (!selectedCity) return
        setNeighborhoods([])
        setSelectedNeighborhood("")
        fetch(`https://api.mercadolibre.com/classified_locations/cities/${selectedCity}`)
            .then(res => res.json())
            .then(data => setNeighborhoods(data.neighborhoods || []))
    }, [selectedCity])

    const handleSubmit = () => {
        onPublish({
            categoryId,
            location: {
                country: { id: "AR" },
                state: { id: selectedState },
                city: { id: selectedCity },
                neighborhood: selectedNeighborhood ? { id: selectedNeighborhood } : undefined
            },
            attributes: [
                { id: "TOTAL_AREA", value_name: `${attributes.TOTAL_AREA} m²` },
                { id: "COVERED_AREA", value_name: `${attributes.COVERED_AREA} m²` },
                { id: "ROOMS", value_name: attributes.ROOMS },
                { id: "BEDROOMS", value_name: attributes.BEDROOMS },
                { id: "FULL_BATHROOMS", value_name: attributes.FULL_BATHROOMS },
                { id: "PARKING_LOTS", value_name: attributes.PARKING_LOTS }
            ]
        })
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" onClick={onCancel} className="rounded-full h-8 w-8">
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <h3 className="font-bold text-lg">Mapeo de Mercado Libre</h3>
            </div>

            <div className="space-y-4">
                <div>
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Categoría de Mercado Libre</Label>
                    <select 
                        className="w-full border-gray-200 rounded-xl text-sm h-10 px-3 border focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                    >
                        <option value="MLA401686">Departamentos - Venta</option>
                        <option value="MLA401685">Casas - Venta</option>
                        <option value="MLA1473">Departamentos - Alquiler</option>
                        <option value="MLA1467">Casas - Alquiler</option>
                    </select>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Ubicación Geográfica (Obligatorio)</Label>
                    
                    {loading ? (
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Loader2 className="h-4 w-4 animate-spin" /> Cargando base geográfica de ML...
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <select 
                                className="w-full border-gray-200 rounded-xl text-sm h-10 px-3 border outline-none bg-white"
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                            >
                                <option value="">Provincia...</option>
                                {states.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                            </select>
                            
                            <select 
                                className="w-full border-gray-200 rounded-xl text-sm h-10 px-3 border outline-none bg-white disabled:opacity-50"
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                disabled={!selectedState || cities.length === 0}
                            >
                                <option value="">Ciudad / Partido...</option>
                                {cities.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>

                            <select 
                                className="w-full border-gray-200 rounded-xl text-sm h-10 px-3 border outline-none bg-white disabled:opacity-50"
                                value={selectedNeighborhood}
                                onChange={(e) => setSelectedNeighborhood(e.target.value)}
                                disabled={!selectedCity || neighborhoods.length === 0}
                            >
                                <option value="">Barrio...</option>
                                {neighborhoods.map(n => <option key={n.id} value={n.id}>{n.name}</option>)}
                            </select>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                    <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Atributos del Inmueble</Label>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div>
                            <Label className="text-xs text-gray-600">Sup. Total (m²)</Label>
                            <Input 
                                type="number" 
                                className="h-9 rounded-xl mt-1" 
                                value={attributes.TOTAL_AREA}
                                onChange={e => setAttributes({...attributes, TOTAL_AREA: e.target.value})}
                            />
                        </div>
                        <div>
                            <Label className="text-xs text-gray-600">Sup. Cubierta (m²)</Label>
                            <Input 
                                type="number" 
                                className="h-9 rounded-xl mt-1" 
                                value={attributes.COVERED_AREA}
                                onChange={e => setAttributes({...attributes, COVERED_AREA: e.target.value})}
                            />
                        </div>
                        <div>
                            <Label className="text-xs text-gray-600">Ambientes</Label>
                            <Input 
                                type="number" 
                                className="h-9 rounded-xl mt-1" 
                                value={attributes.ROOMS}
                                onChange={e => setAttributes({...attributes, ROOMS: e.target.value})}
                            />
                        </div>
                        <div>
                            <Label className="text-xs text-gray-600">Dormitorios</Label>
                            <Input 
                                type="number" 
                                className="h-9 rounded-xl mt-1" 
                                value={attributes.BEDROOMS}
                                onChange={e => setAttributes({...attributes, BEDROOMS: e.target.value})}
                            />
                        </div>
                        <div>
                            <Label className="text-xs text-gray-600">Baños</Label>
                            <Input 
                                type="number" 
                                className="h-9 rounded-xl mt-1" 
                                value={attributes.FULL_BATHROOMS}
                                onChange={e => setAttributes({...attributes, FULL_BATHROOMS: e.target.value})}
                            />
                        </div>
                        <div>
                            <Label className="text-xs text-gray-600">Cocheras</Label>
                            <Input 
                                type="number" 
                                className="h-9 rounded-xl mt-1" 
                                value={attributes.PARKING_LOTS}
                                onChange={e => setAttributes({...attributes, PARKING_LOTS: e.target.value})}
                            />
                        </div>
                    </div>
                </div>

                <Button 
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black rounded-xl h-12 shadow-sm"
                    disabled={!selectedState || !selectedCity}
                    onClick={handleSubmit}
                >
                    Confirmar y Publicar en ML
                </Button>
            </div>
        </div>
    )
}
