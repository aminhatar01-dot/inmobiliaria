"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ConnectChannelDialog } from "./connect-channel-dialog"
import { ChannelSettingsDialog } from "./channel-settings-dialog"
import { ChannelConnection, CHANNEL_LABELS, CHANNEL_NAMES } from "@inmocms/shared"
import {
    MessageCircle,
    Instagram,
    Facebook,
    Mail,
    Video,
    CheckCircle2,
    AlertCircle,
    Unplug,
    ExternalLink
} from "lucide-react"

interface ChannelListProps {
    connections: ChannelConnection[]
}

const CHANNEL_CARDS = [
    {
        id: CHANNEL_NAMES.instagram,
        title: CHANNEL_LABELS.instagram,
        description: "Captura mensajes directos y responde comentarios automáticamente.",
        icon: Instagram,
        bgIcon: "bg-pink-50 text-pink-600",
        hoverClass: "hover:border-pink-200 hover:shadow-pink-100",
        topLine: "bg-pink-500",
        buttonClass: "bg-pink-600 hover:bg-pink-700 shadow-pink-500/20"
    },
    {
        id: CHANNEL_NAMES.facebook,
        title: CHANNEL_LABELS.facebook,
        description: "Integra leads de Facebook Ads y Messenger directo a tu embudo.",
        icon: Facebook,
        bgIcon: "bg-blue-50 text-blue-600",
        hoverClass: "hover:border-blue-200 hover:shadow-blue-100",
        topLine: "bg-blue-500",
        buttonClass: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
    },
    {
        id: CHANNEL_NAMES.gmail,
        title: CHANNEL_LABELS.gmail,
        description: "Sincroniza correos y envía newsletters masivos desde tu propia dirección.",
        icon: Mail,
        bgIcon: "bg-red-50 text-red-600",
        hoverClass: "hover:border-red-200 hover:shadow-red-100",
        topLine: "bg-red-500",
        buttonClass: "bg-red-600 hover:bg-red-700 shadow-red-500/20"
    },
    {
        id: CHANNEL_NAMES.tiktok,
        title: CHANNEL_LABELS.tiktok,
        description: "Convierte visualizaciones en leads capturando los formularios nativos.",
        icon: Video,
        bgIcon: "bg-gray-100 text-gray-900",
        hoverClass: "hover:border-gray-200 hover:shadow-gray-200",
        topLine: "bg-gray-900",
        buttonClass: "bg-gray-800 hover:bg-gray-900 shadow-gray-500/20"
    }
]

export function ChannelList({ connections }: ChannelListProps) {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedChannel, setSelectedChannel] = useState<any>(null)

    // Settings Dialog State
    const [settingsOpen, setSettingsOpen] = useState(false)
    const [selectedConnection, setSelectedConnection] = useState<ChannelConnection | null>(null)

    const handleConnectClick = (channelId: string) => {
        setSelectedChannel(channelId)
        setDialogOpen(true)
    }

    const handleSettingsClick = (connection: ChannelConnection) => {
        setSelectedConnection(connection)
        setSettingsOpen(true)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHANNEL_CARDS.map((channel) => {
                const connection = connections.find(c => c.channel_name === channel.id)
                const isConnected = connection?.status === 'connected'

                return (
                    <Card
                        key={channel.id}
                        className={`border-2 shadow-sm rounded-3xl transition-all duration-300 relative overflow-hidden group ${isConnected ? 'border-gray-100 bg-white' : `border-transparent bg-white shadow-xl shadow-gray-200/40 ${channel.hoverClass}`
                            }`}
                    >
                        {/* Decorative Top Line */}
                        <div className={`absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity ${channel.topLine}`} />

                        <CardHeader className="p-6 pb-4">
                            <div className="flex items-start justify-between">
                                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${channel.bgIcon} transition-transform group-hover:scale-110`}>
                                    <channel.icon className="h-7 w-7" />
                                </div>
                                {isConnected ? (
                                    <Badge variant="outline" className="text-xs font-bold text-green-700 bg-green-50 border-green-200 flex items-center gap-1 py-1 px-2.5">
                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                        Conectado
                                    </Badge>
                                ) : (
                                    <Badge variant="outline" className="text-[10px] font-bold text-gray-400 bg-gray-50 border-gray-200 uppercase tracking-widest px-2.5">
                                        No Vinculado
                                    </Badge>
                                )}
                            </div>
                            <div className="mt-4 space-y-1">
                                <CardTitle className="text-xl font-black text-gray-900 group-hover:text-gray-800 transition-colors">
                                    {channel.title}
                                </CardTitle>
                                {isConnected && connection?.account_info?.name && (
                                    <p className="text-sm font-bold text-blue-600 truncate">
                                        @{connection.account_info.name}
                                    </p>
                                )}
                            </div>
                        </CardHeader>

                        <CardContent className="p-6 pt-0 space-y-6">
                            <CardDescription className="text-sm font-medium text-gray-500 leading-relaxed min-h-[40px]">
                                {channel.description}
                            </CardDescription>

                            <div className="pt-2">
                                {isConnected && connection ? (
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            className="w-full rounded-xl font-bold border-gray-200 text-gray-600 hover:bg-gray-50"
                                            onClick={() => handleSettingsClick(connection)}
                                        >
                                            Ajustes
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-10 w-10 shrink-0 rounded-xl text-gray-400 hover:text-red-600 hover:bg-red-50"
                                            onClick={() => handleSettingsClick(connection)}
                                        >
                                            <Unplug className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ) : (
                                    <Button
                                        onClick={() => handleConnectClick(channel.id)}
                                        className={`w-full h-11 rounded-xl font-bold shadow-lg text-white gap-2 transition-all ${channel.buttonClass}`}
                                    >
                                        Conectar Cuenta
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                )
            })}

            <ConnectChannelDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                channelType={selectedChannel}
            />

            <ChannelSettingsDialog
                open={settingsOpen}
                onOpenChange={setSettingsOpen}
                connection={selectedConnection}
            />
        </div>
    )
}
