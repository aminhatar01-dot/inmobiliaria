"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Leaflet icons need window to be defined
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"
import { Button } from "@/components/ui/button"
import { Search, Loader2, MapPin } from "lucide-react"
import "leaflet/dist/leaflet.css"

// Global L to be initialized on client
let L: any;
if (typeof window !== "undefined") {
    L = require("leaflet");
    // Fix Leaflet default icon issue in Next.js
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    })
}

interface LocationPickerProps {
    address: string
    latitude?: number
    longitude?: number
    onAddressChange: (address: string) => void
    onLocationChange: (lat: number, lng: number) => void
}

function MapUpdater({ center }: { center: [number, number] }) {
    const map = useMap()
    useEffect(() => {
        map.setView(center, map.getZoom())
    }, [center, map])
    return null
}

function DraggableMarker({
    position,
    onPositionChange,
}: {
    position: [number, number]
    onPositionChange: (lat: number, lng: number) => void
}) {
    const eventHandlers = {
        dragend: (e: any) => {
            const marker = e.target
            const pos = marker.getLatLng()
            onPositionChange(pos.lat, pos.lng)
        },
    }

    return (
        <Marker
            position={position}
            draggable={true}
            eventHandlers={eventHandlers}
        />
    )
}

function InnerLocationPicker({
    address,
    latitude,
    longitude,
    onAddressChange,
    onLocationChange,
}: LocationPickerProps) {
    // Default to Buenos Aires, Argentina center
    const defaultCenter: [number, number] = [-34.6037, -58.3816]
    const [center, setCenter] = useState<[number, number]>(
        latitude && longitude ? [latitude, longitude] : defaultCenter
    )
    const [markerPosition, setMarkerPosition] = useState<[number, number]>(center)
    const [searchAddress, setSearchAddress] = useState(address)
    const [isGeocoding, setIsGeocoding] = useState(false)

    // Update center when lat/lng props change externally
    useEffect(() => {
        if (latitude && longitude) {
            const newPos: [number, number] = [latitude, longitude]
            setCenter(newPos)
            setMarkerPosition(newPos)
        }
    }, [latitude, longitude])

    // Geocoding function using Nominatim (OpenStreetMap)
    const geocodeAddress = async () => {
        if (!searchAddress.trim()) return

        setIsGeocoding(true)
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                    searchAddress + ", Argentina"
                )}&limit=1`
            )
            const data = await response.json()

            if (data && data.length > 0) {
                const lat = parseFloat(data[0].lat)
                const lng = parseFloat(data[0].lon)
                const newPos: [number, number] = [lat, lng]

                setCenter(newPos)
                setMarkerPosition(newPos)
                onLocationChange(lat, lng)
                onAddressChange(searchAddress)
            }
        } catch (error) {
            console.error("Geocoding error:", error)
        } finally {
            setIsGeocoding(false)
        }
    }

    const handleMarkerDrag = (lat: number, lng: number) => {
        setMarkerPosition([lat, lng])
        onLocationChange(lat, lng)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault()
            geocodeAddress()
        }
    }

    return (
        <div className="space-y-4">
            {/* Address Search Input */}
            <div className="space-y-3">
                <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Dirección Completa
                </Label>
                <div className="flex gap-2">
                    <Input
                        placeholder="Calle, Número, Piso, Depto, Ciudad..."
                        value={searchAddress}
                        onChange={(e) => setSearchAddress(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:bg-white transition-all flex-1"
                    />
                    <Button
                        type="button"
                        onClick={geocodeAddress}
                        disabled={isGeocoding}
                        className="h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl"
                    >
                        {isGeocoding ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            <Search className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Coordinates Display */}
            <div className="flex gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span className="font-mono">
                        Lat: {markerPosition[0].toFixed(6)}
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="font-mono">
                        Lng: {markerPosition[1].toFixed(6)}
                    </span>
                </div>
            </div>

            {/* Map Container */}
            <div className="h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <MapContainer
                    center={center}
                    zoom={13}
                    scrollWheelZoom={true}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapUpdater center={center} />
                    <DraggableMarker
                        position={markerPosition}
                        onPositionChange={handleMarkerDrag}
                    />
                </MapContainer>
            </div>

            <p className="text-xs text-gray-400 italic">
                💡 Puedes buscar la dirección o arrastrar el marcador para ajustar la ubicación exacta
            </p>
        </div>
    )
}

export default dynamic(() => Promise.resolve(InnerLocationPicker), {
    ssr: false,
    loading: () => (
        <div className="h-[400px] w-full bg-gray-50 animate-pulse rounded-xl flex items-center justify-center">
            <Loader2 className="h-8 w-8 text-gray-200 animate-spin" />
        </div>
    )
})
