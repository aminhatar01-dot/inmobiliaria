import { Search, Bell, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"

export function DashboardHeader({ user }: { user?: { email?: string, user_metadata?: { full_name?: string, avatar_url?: string } } | null }) {
    const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || "Usuario"
    const userAvatar = user?.user_metadata?.avatar_url || ""

    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-gray-200 px-6 bg-white sticky top-0 z-10 transition-shadow hover:shadow-sm">
            <div className="flex items-center gap-2 px-0">
                <SidebarTrigger className="-ml-1 h-9 w-9 rounded-xl hover:bg-gray-50" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <h1 className="font-medium text-gray-500">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative hidden md:block group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    <Input placeholder="Buscar..." className="h-10 w-64 rounded-full bg-gray-50 border-transparent pl-10 focus:bg-white focus:border-blue-100 transition-all font-medium text-sm" />
                </div>
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-gray-400 hover:text-blue-600 hover:bg-blue-50 relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
                </Button>
                <div className="h-10 w-10 rounded-full border border-gray-200 overflow-hidden relative">
                    <Image
                        src={userAvatar || "/avatars/laura.jpg"}
                        alt={userName}
                        fill
                        className="object-cover"
                    />
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
        </header>
    )
}
