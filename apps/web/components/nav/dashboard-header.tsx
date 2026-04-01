"use client"

import { Search, Bell, ChevronDown, User, CreditCard, LogOut, CheckCircle2 } from "lucide-react"
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
import { GlobalSearch } from "./global-search"
import { useEffect, useState } from "react"
import { getNotifications, markNotificationAsRead } from "@/app/actions/reminders"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"

export function DashboardHeader({ user }: { user?: { email?: string, user_metadata?: { full_name?: string, avatar_url?: string } } | null }) {
    const [notifications, setNotifications] = useState<any[]>([])
    const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || "Usuario"
    const userAvatar = user?.user_metadata?.avatar_url || ""

    const unreadCount = notifications.filter(n => !n.read).length

    async function fetchNotifications() {
        try {
            const data = await getNotifications()
            setNotifications(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchNotifications()
        const interval = setInterval(fetchNotifications, 60000)
        return () => clearInterval(interval)
    }, [])

    const handleMarkAsRead = async (id: string) => {
        await markNotificationAsRead(id)
        fetchNotifications()
    }

    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-gray-200 px-6 bg-white sticky top-0 z-10 transition-shadow hover:shadow-sm">
            <div className="flex items-center gap-2 px-0">
                <SidebarTrigger className="-ml-1 h-9 w-9 rounded-xl hover:bg-gray-50" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <h1 className="font-medium text-gray-500">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
                <GlobalSearch />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-gray-400 hover:text-blue-600 hover:bg-blue-50 relative outline-none focus:ring-0">
                            <Bell className="h-5 w-5" />
                            {unreadCount > 0 && (
                                <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
                            )}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80 rounded-2xl p-0 shadow-2xl border-gray-100 mt-1 overflow-hidden">
                        <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center justify-between">
                            <h3 className="font-black text-gray-800">Notificaciones</h3>
                            {unreadCount > 0 && (
                                <button 
                                    onClick={async () => {
                                        for (const n of notifications.filter(n => !n.read)) {
                                            await markNotificationAsRead(n.id)
                                        }
                                        fetchNotifications()
                                    }}
                                    className="text-[10px] uppercase font-bold text-blue-600 hover:text-blue-700"
                                >
                                    Marcar leídas
                                </button>
                            )}
                        </div>
                        <div className="max-h-[400px] overflow-y-auto">
                            {notifications.length > 0 ? (
                                notifications.map((n) => (
                                    <div 
                                        key={n.id} 
                                        className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${!n.read ? 'bg-blue-50/30' : ''}`}
                                        onClick={() => handleMarkAsRead(n.id)}
                                    >
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-bold text-gray-800">{n.title}</span>
                                                {!n.read && <span className="h-2 w-2 rounded-full bg-blue-500"></span>}
                                            </div>
                                            <span className="text-[11px] text-gray-600 leading-tight">{n.message}</span>
                                            <span className="text-[9px] text-gray-400 mt-1">
                                                {formatDistanceToNow(new Date(n.created_at), { addSuffix: true, locale: es })}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-8 flex flex-col items-center justify-center text-center space-y-3">
                                    <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                                        <CheckCircle2 className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800 text-sm">Todo al día</p>
                                        <p className="text-xs text-gray-400 font-medium">No tienes notificaciones nuevas por ahora.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

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
                            className="rounded-xl focus:bg-red-50 focus:text-red-600 text-red-500 cursor-pointer p-3 outline-none"
                            onClick={async () => {
                                const result = await signOut()
                                if (result.success) {
                                    window.location.href = "/"
                                } else {
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
