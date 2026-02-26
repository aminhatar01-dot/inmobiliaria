import { Search, Bell, ChevronDown, User, CreditCard, LogOut } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "@/app/actions/auth"
import { toast } from "sonner"

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

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 hover:bg-gray-50 p-1 pr-2 rounded-full transition-colors group">
                            <div className="h-9 w-9 rounded-full border border-gray-200 overflow-hidden relative shadow-sm">
                                <Image
                                    src={userAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=random&format=png`}
                                    alt={userName}
                                    fill
                                    sizes="36px"
                                    unoptimized
                                    className="object-cover"
                                />
                            </div>
                            <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-2xl border-gray-100 mt-1">
                        <DropdownMenuLabel className="px-3 py-2">
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-800">{userName}</span>
                                <span className="text-[10px] text-gray-400 font-medium truncate">{user?.email}</span>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-gray-50" />
                        <DropdownMenuItem asChild className="rounded-xl focus:bg-blue-50 focus:text-blue-600 cursor-pointer p-3">
                            <Link href="/cuenta/perfil" className="flex w-full items-center gap-3">
                                <User className="h-4 w-4" />
                                <span className="font-bold text-sm">Mi Perfil</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="rounded-xl focus:bg-blue-50 focus:text-blue-600 cursor-pointer p-3">
                            <Link href="/cuenta/plan" className="flex w-full items-center gap-3">
                                <CreditCard className="h-4 w-4" />
                                <span className="font-bold text-sm">Suscripción</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-gray-50" />
                        <DropdownMenuItem
                            className="rounded-xl focus:bg-red-50 focus:text-red-600 text-red-500 cursor-pointer p-3"
                            onClick={async () => {
                                try {
                                    await signOut()
                                    toast.success("Sesión cerrada")
                                } catch (e) {
                                    toast.error("Error al cerrar sesión")
                                }
                            }}
                        >
                            <div className="flex w-full items-center gap-3">
                                <LogOut className="h-4 w-4" />
                                <span className="font-bold text-sm">Cerrar Sesión</span>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
