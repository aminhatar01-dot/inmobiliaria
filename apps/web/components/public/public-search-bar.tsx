"use client"

import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function PublicSearchBar({ tenantSlug }: { tenantSlug: string }) {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("")
    const [operation, setOperation] = useState<string>("")
    const [propertyType, setPropertyType] = useState<string>("")

    const handleSearch = () => {
        const params = new URLSearchParams()
        if (searchQuery) params.set("search", searchQuery)
        if (operation) params.set("operation", operation)
        if (propertyType) params.set("type", propertyType)

        router.push(`/${tenantSlug}?${params.toString()}`)
    }

    return (
        <Card className="max-w-4xl mx-auto border-none shadow-2xl shadow-blue-900/5 rounded-[2.5rem] overflow-hidden bg-white p-2">
            <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="flex-1 w-full relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                    <Input
                        placeholder="¿En qué barrio buscás?"
                        className="h-16 pl-14 bg-transparent border-none text-lg font-medium ring-0 focus-visible:ring-0 placeholder:text-gray-400"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />
                </div>
                <div className="h-10 w-px bg-gray-100 hidden md:block" />
                <div className="w-full md:w-48 px-2">
                    <Select value={operation} onValueChange={setOperation}>
                        <SelectTrigger className="h-16 border-none bg-transparent">
                            <SelectValue placeholder="Tipo de Operación" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="sale">Venta</SelectItem>
                            <SelectItem value="rent">Alquiler</SelectItem>
                            <SelectItem value="temporary_rent">Alquiler Temporal</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button
                    onClick={handleSearch}
                    className="h-16 w-full md:w-auto md:aspect-square bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] shadow-xl shadow-blue-500/30"
                >
                    <Search className="h-6 w-6" />
                </Button>
            </div>
        </Card>
    )
}
