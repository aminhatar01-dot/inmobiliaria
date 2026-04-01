import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Cloud } from "lucide-react"

export default function PortalesLoading() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-8">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-400">
                            <Cloud className="h-5 w-5" />
                        </div>
                        <div className="h-10 w-64 bg-gray-100 rounded-xl animate-pulse" />
                    </div>
                    <div className="h-6 w-96 bg-gray-50 rounded-lg animate-pulse ml-13" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                    <Card key={i} className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] overflow-hidden">
                        <CardHeader className="bg-gray-100 h-32 animate-pulse" />
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-2">
                                <div className="h-8 w-40 bg-gray-100 rounded-lg animate-pulse" />
                                <div className="h-4 w-full bg-gray-50 rounded-md animate-pulse" />
                            </div>
                            <div className="h-24 bg-gray-50 rounded-2xl animate-pulse" />
                            <div className="h-14 bg-gray-100 rounded-2xl animate-pulse" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
