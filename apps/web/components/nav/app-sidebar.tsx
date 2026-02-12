"use client"

import * as React from "react"
import {
    LayoutDashboard,
    Home,
    Users,
    Calendar,
    Settings,
    PlusCircle,
    FileText,
    Megaphone,
    Globe,
    Bell,
    MessageSquare,
    Sparkles,
    ChevronRight,
    ListTodo,
    Mail,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarGroup,
    SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const data = {
    user: {
        name: "Laura Gomez",
        email: "laura@inmocms.com",
        avatar: "/avatars/laura.jpg",
    },
    navMain: [
        {
            title: "Menú principal",
            items: [
                {
                    title: "Vista general",
                    url: "/dashboard",
                    icon: LayoutDashboard,
                    isActive: true,
                },
                {
                    title: "Añadir inmueble",
                    url: "/propiedades/nuevo",
                    icon: PlusCircle,
                },
                {
                    title: "Inmuebles",
                    url: "/propiedades",
                    icon: Home,
                    children: [
                        { title: "Lista de inmuebles", url: "/propiedades" },
                        { title: "Publicados", url: "/propiedades?status=active" },
                    ]
                },
                {
                    title: "Leads",
                    url: "/leads",
                    icon: Users,
                },
                {
                    title: "Pipeline / Kanban",
                    url: "/pipeline",
                    icon: LayoutDashboard,
                },
                {
                    title: "Mensajería",
                    url: "/mensajes",
                    icon: MessageSquare,
                    badge: "2",
                },
                {
                    title: "Importar Datos",
                    url: "/propiedades/importar",
                    icon: FileText,
                },
                {
                    title: "Inmuebles compartidos",
                    url: "/propiedades/compartidas",
                    icon: Globe,
                },
                {
                    title: "Portales inmobiliarios",
                    url: "/marketing/portales",
                    icon: Megaphone,
                },
                {
                    title: "Agentes inmobiliarios",
                    url: "/agentes",
                    icon: Users,
                },
                {
                    title: "Clientes",
                    url: "/clientes",
                    icon: Users,
                },
                {
                    title: "Mis Tareas",
                    url: "/tareas",
                    icon: ListTodo,
                    badge: "6",
                },
                {
                    title: "Documentos",
                    url: "/documentos",
                    icon: FileText,
                    badge: "1",
                },
                {
                    title: "Marketing",
                    url: "/marketing",
                    icon: Megaphone,
                },
                {
                    title: "Citas",
                    url: "/visitas",
                    icon: Calendar,
                    badge: "27",
                },
                {
                    title: "Mis facturas",
                    url: "/facturas",
                    icon: FileText,
                },
                {
                    title: "Editar página web",
                    url: "/web",
                    icon: Globe,
                },
                {
                    title: "Ver Mejoras",
                    url: "/mejoras",
                    icon: LayoutDashboard,
                    isAction: true,
                },
            ],
        },
        {
            title: "Configuración",
            items: [
                {
                    title: "Mi cuenta",
                    url: "/cuenta",
                    icon: Users,
                    children: [
                        { title: "Perfil", url: "/cuenta/perfil" },
                        { title: "Suscripción", url: "/cuenta/plan" },
                    ]
                },
                {
                    title: "Consultas",
                    url: "/consultas",
                    icon: MessageSquare,
                    badge: "6",
                },
                {
                    title: "Notificaciones",
                    url: "/notificaciones",
                    icon: Bell,
                    badge: "3",
                },
                {
                    title: "Ajustes",
                    url: "/ajustes",
                    icon: Settings,
                },
            ],
        },
    ],
}

export function AppSidebar({ user, ...props }: React.ComponentProps<typeof Sidebar> & { user?: any }) {
    const userData = {
        name: user?.user_metadata?.full_name || user?.email?.split('@')[0] || "Usuario",
        email: user?.email || "",
        avatar: user?.user_metadata?.avatar_url || "",
    }

    return (
        <Sidebar collapsible="icon" {...props} className="border-r border-gray-200">
            <SidebarHeader className="p-4 flex flex-row items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Sparkles className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none group-data-[collapsible=icon]:hidden">
                    <span className="font-bold text-lg text-blue-900">InmoCMS</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                {data.navMain.map((group) => (
                    <SidebarGroup key={group.title}>
                        <SidebarGroupLabel className="px-4 text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-2">
                            {group.title}
                        </SidebarGroupLabel>
                        <SidebarMenu>
                            {group.items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    {item.children ? (
                                        <>
                                            <SidebarMenuButton tooltip={item.title}>
                                                {item.icon && <item.icon />}
                                                <span>{item.title}</span>
                                            </SidebarMenuButton>
                                            <SidebarMenuSub>
                                                {item.children.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title}>
                                                        <SidebarMenuSubButton asChild>
                                                            <a href={subItem.url}>
                                                                <span>{subItem.title}</span>
                                                            </a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </>
                                    ) : (
                                        <SidebarMenuButton
                                            asChild
                                            tooltip={item.title}
                                            className={item.isActive ? "bg-blue-600 text-white hover:bg-blue-700" : item.isAction ? "bg-green-500 text-white hover:bg-green-600" : ""}
                                        >
                                            <a href={item.url} className="flex items-center justify-between w-full">
                                                <div className="flex items-center gap-2">
                                                    {item.icon && <item.icon />}
                                                    <span>{item.title}</span>
                                                </div>
                                                {item.badge && (
                                                    <span className="ml-auto bg-blue-100 text-blue-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full group-data-[collapsible=icon]:hidden">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </a>
                                        </SidebarMenuButton>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter className="p-4 border-t border-gray-100 group-data-[collapsible=icon]:hidden">
                <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-gray-200">
                        <AvatarImage src={userData.avatar} />
                        <AvatarFallback className="uppercase">{userData.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-700">{userData.name}</span>
                        <span className="text-[10px] text-gray-400 truncate max-w-[150px]">{userData.email}</span>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
