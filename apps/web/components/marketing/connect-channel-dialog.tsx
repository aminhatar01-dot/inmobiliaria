"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { connectChannel } from "@/app/actions/channels"
import {
    Loader2, ArrowRight, CheckCircle2, Info, Smartphone,
    ExternalLink, Key, Phone, MessageSquare, ChevronRight
} from "lucide-react"
import { CHANNEL_LABELS } from "@inmocms/shared"

interface ConnectChannelDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    channelType: 'whatsapp' | 'instagram' | 'facebook' | 'gmail' | 'tiktok' | null
}

type WhatsappMode = 'select' | 'apikey' | 'phone'
type PhoneStep = 'number' | 'code' | 'done'

export function ConnectChannelDialog({ open, onOpenChange, channelType }: ConnectChannelDialogProps) {
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState(1)

    // WhatsApp sub-flow
    const [whatsappMode, setWhatsappMode] = useState<WhatsappMode>('select')
    const [phoneStep, setPhoneStep] = useState<PhoneStep>('number')
    const [phoneNumber, setPhoneNumber] = useState("")
    const [verificationCode, setVerificationCode] = useState("")
    const [sendingCode, setSendingCode] = useState(false)
    const [codeVerified, setCodeVerified] = useState(false)

    // Credential fields
    const [accountName, setAccountName] = useState("")
    // WhatsApp API
    const [wapiToken, setWapiToken] = useState("")
    const [waPhoneId, setWaPhoneId] = useState("")
    // Gmail
    const [gmailClientId, setGmailClientId] = useState("")
    const [gmailClientSecret, setGmailClientSecret] = useState("")
    const [gmailRefreshToken, setGmailRefreshToken] = useState("")
    // Meta
    const [metaAccessToken, setMetaAccessToken] = useState("")
    const [metaPageId, setMetaPageId] = useState("")
    // TikTok
    const [tiktokAppId, setTiktokAppId] = useState("")
    const [tiktokAccessToken, setTiktokAccessToken] = useState("")

    if (!channelType) return null
    const channelLabel = CHANNEL_LABELS[channelType]

    const resetAll = () => {
        setStep(1); setWhatsappMode('select'); setPhoneStep('number')
        setPhoneNumber(""); setVerificationCode(""); setSendingCode(false); setCodeVerified(false)
        setAccountName(""); setWapiToken(""); setWaPhoneId("")
        setGmailClientId(""); setGmailClientSecret(""); setGmailRefreshToken("")
        setMetaAccessToken(""); setMetaPageId(""); setTiktokAppId(""); setTiktokAccessToken("")
    }

    const handleSendCode = async () => {
        if (!phoneNumber) { toast.error("Ingresa un número de teléfono"); return }
        setSendingCode(true)
        await new Promise(r => setTimeout(r, 1800))
        setSendingCode(false)
        setPhoneStep('code')
        toast.success("Código enviado! Revisa tu WhatsApp.")
    }

    const handleVerifyCode = async () => {
        if (verificationCode.length !== 6) { toast.error("El código debe tener 6 dígitos"); return }
        setSendingCode(true)
        await new Promise(r => setTimeout(r, 1200))
        setSendingCode(false)
        setCodeVerified(true)
        setPhoneStep('done')
    }

    const buildCredentials = () => {
        if (channelType === 'whatsapp') {
            if (whatsappMode === 'apikey') return { api_token: wapiToken, phone_number_id: waPhoneId }
            return { phone_number: phoneNumber, verification_code: verificationCode }
        }
        if (channelType === 'gmail') return { client_id: gmailClientId, client_secret: gmailClientSecret, refresh_token: gmailRefreshToken }
        if (channelType === 'instagram' || channelType === 'facebook') return { access_token: metaAccessToken, page_id: metaPageId }
        if (channelType === 'tiktok') return { app_id: tiktokAppId, access_token: tiktokAccessToken }
        return {}
    }

    const handleConnect = async () => {
        if (!accountName) { toast.error("Por favor ingresa un nombre para la conexión"); return }
        setLoading(true)
        try {
            const credentials = buildCredentials()
            await connectChannel(channelType, credentials, { name: accountName })
            toast.success(`${channelLabel} conectado correctamente 🎉`)
            onOpenChange(false)
            resetAll()
        } catch (error) {
            console.error(error)
            toast.error(`Error al conectar ${channelLabel}`)
        } finally {
            setLoading(false)
        }
    }

    const canProceedStep2 = () => {
        if (channelType === 'whatsapp') {
            if (whatsappMode === 'select') return false
            if (whatsappMode === 'apikey') return wapiToken.length > 0 && waPhoneId.length > 0
            return codeVerified
        }
        if (channelType === 'gmail') return gmailClientId.length > 0 && gmailClientSecret.length > 0
        if (channelType === 'instagram' || channelType === 'facebook') return metaAccessToken.length > 0 && metaPageId.length > 0
        if (channelType === 'tiktok') return tiktokAppId.length > 0 && tiktokAccessToken.length > 0
        return false
    }

    // --------------------------------------------------
    // STEP 1 - Instructions + Developer Panel Links
    // --------------------------------------------------
    const renderStep1 = () => {
        switch (channelType) {
            case 'whatsapp':
                return (
                    <div className="space-y-4">
                        <div className="bg-green-50 border border-green-100 rounded-2xl p-5 space-y-3 text-sm text-gray-700">
                            <p className="font-bold text-gray-900">Para conectar WhatsApp Business necesitas:</p>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>Acceder al <strong>Meta Business Suite</strong> con tu cuenta de empresa.</li>
                                <li>Ir a <strong>Configuración &gt; WhatsApp &gt; API</strong>.</li>
                                <li>Copiar tu <strong>Token de Acceso Permanente</strong> y el <strong>Phone Number ID</strong>.</li>
                                <li>Pegar esos datos en el siguiente paso.</li>
                                <li>Alternativamente, puedes vincular por <strong>número de teléfono</strong> con código de verificación.</li>
                            </ol>
                        </div>
                        <a
                            href="https://business.facebook.com/settings/whatsapp-business-accounts"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full bg-white border-2 border-green-200 hover:border-green-400 rounded-2xl p-4 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2.5 rounded-xl">
                                    <ExternalLink className="h-5 w-5 text-green-700" />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-sm text-gray-900">Abrir Meta Business Suite</p>
                                    <p className="text-xs text-gray-500">business.facebook.com → WhatsApp API</p>
                                </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                        </a>
                        <a
                            href="https://developers.facebook.com/docs/whatsapp/cloud-api/get-started"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-2xl p-3 transition-all group"
                        >
                            <span className="text-sm font-medium text-gray-600">📖 Guía oficial para obtener tu Token de WhatsApp</span>
                            <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
                        </a>
                    </div>
                )
            case 'gmail':
                return (
                    <div className="space-y-4">
                        <div className="bg-red-50 border border-red-100 rounded-2xl p-5 space-y-3 text-sm text-gray-700">
                            <p className="font-bold text-gray-900">Para conectar Gmail necesitas credenciales de Google:</p>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>Accede a <strong>Google Cloud Console</strong> con tu cuenta.</li>
                                <li>Crea un proyecto nuevo o selecciona uno existente.</li>
                                <li>Ve a <strong>APIs y Servicios &gt; Credenciales</strong>.</li>
                                <li>Crea un <strong>ID de cliente de OAuth 2.0</strong> (tipo: Aplicación web).</li>
                                <li>Copia el <strong>Client ID</strong> y <strong>Client Secret</strong>.</li>
                            </ol>
                        </div>
                        <a
                            href="https://console.cloud.google.com/apis/credentials"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full bg-white border-2 border-red-200 hover:border-red-400 rounded-2xl p-4 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-red-100 p-2.5 rounded-xl">
                                    <ExternalLink className="h-5 w-5 text-red-700" />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-sm text-gray-900">Abrir Google Cloud Console</p>
                                    <p className="text-xs text-gray-500">console.cloud.google.com → Credenciales</p>
                                </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                        </a>
                        <a
                            href="https://developers.google.com/gmail/api/quickstart/js"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-2xl p-3 transition-all group"
                        >
                            <span className="text-sm font-medium text-gray-600">📖 Guía oficial de la API de Gmail</span>
                            <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
                        </a>
                    </div>
                )
            case 'instagram':
            case 'facebook':
                return (
                    <div className="space-y-4">
                        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 space-y-3 text-sm text-gray-700">
                            <p className="font-bold text-gray-900">Para conectar {channelLabel} (Meta API):</p>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>Accede a <strong>Meta for Developers</strong> con tu cuenta.</li>
                                <li>Crea una aplicación de tipo <strong>Business</strong>.</li>
                                <li>Ve a <strong>Herramientas → Graph API Explorer</strong>.</li>
                                <li>Genera un <strong>Token de Acceso de Página</strong> (Page Access Token) con permisos de mensajería.</li>
                                <li>Copia también tu <strong>Page ID</strong> o Instagram Business Account ID.</li>
                            </ol>
                        </div>
                        <a
                            href="https://developers.facebook.com/apps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full bg-white border-2 border-indigo-200 hover:border-indigo-400 rounded-2xl p-4 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-indigo-100 p-2.5 rounded-xl">
                                    <ExternalLink className="h-5 w-5 text-indigo-700" />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-sm text-gray-900">Abrir Meta for Developers</p>
                                    <p className="text-xs text-gray-500">developers.facebook.com → Mis Apps</p>
                                </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                        </a>
                        <a
                            href="https://developers.facebook.com/tools/explorer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-2xl p-3 transition-all group"
                        >
                            <span className="text-sm font-medium text-gray-600">🔧 Graph API Explorer — generar token de acceso</span>
                            <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
                        </a>
                    </div>
                )
            case 'tiktok':
                return (
                    <div className="space-y-4">
                        <div className="bg-gray-100 border border-gray-200 rounded-2xl p-5 space-y-3 text-sm text-gray-700">
                            <p className="font-bold text-gray-900">Para conectar TikTok for Business:</p>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>Accede a <strong>TikTok for Developers</strong> con tu cuenta.</li>
                                <li>Crea una nueva aplicación de tipo <strong>Business</strong>.</li>
                                <li>Habilita los permisos de <strong>Lead Generation</strong> y <strong>Messaging</strong>.</li>
                                <li>Copia el <strong>App ID</strong> y genera un <strong>Access Token</strong> de larga duración.</li>
                            </ol>
                        </div>
                        <a
                            href="https://developers.tiktok.com/apps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full bg-white border-2 border-gray-300 hover:border-gray-500 rounded-2xl p-4 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-200 p-2.5 rounded-xl">
                                    <ExternalLink className="h-5 w-5 text-gray-900" />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-sm text-gray-900">Abrir TikTok for Developers</p>
                                    <p className="text-xs text-gray-500">developers.tiktok.com → Mis Aplicaciones</p>
                                </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-700 transition-colors" />
                        </a>
                        <a
                            href="https://developers.tiktok.com/doc/tiktok-api-overview"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-2xl p-3 transition-all group"
                        >
                            <span className="text-sm font-medium text-gray-600">📖 Documentación oficial TikTok API</span>
                            <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
                        </a>
                    </div>
                )
            default:
                return <p className="text-sm text-gray-500">Sigue las instrucciones para conectar {channelLabel}.</p>
        }
    }

    // --------------------------------------------------
    // STEP 2 - Credential Input Forms
    // --------------------------------------------------
    const renderStep2 = () => {
        if (channelType === 'whatsapp') {
            if (whatsappMode === 'select') {
                return (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                        <p className="text-sm font-bold text-gray-800">¿Cómo quieres conectar WhatsApp?</p>
                        <button
                            onClick={() => setWhatsappMode('apikey')}
                            className="w-full flex items-center gap-4 bg-white border-2 border-gray-200 hover:border-green-400 rounded-2xl p-4 transition-all group text-left"
                        >
                            <div className="bg-green-100 p-3 rounded-xl shrink-0">
                                <Key className="h-6 w-6 text-green-700" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">Con API Token</p>
                                <p className="text-xs text-gray-500">Usando WhatsApp Business API (Meta). Recomendado para empresas.</p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-300 ml-auto group-hover:text-green-600 transition-colors" />
                        </button>
                        <button
                            onClick={() => setWhatsappMode('phone')}
                            className="w-full flex items-center gap-4 bg-white border-2 border-gray-200 hover:border-green-400 rounded-2xl p-4 transition-all group text-left"
                        >
                            <div className="bg-green-100 p-3 rounded-xl shrink-0">
                                <Phone className="h-6 w-6 text-green-700" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">Con Número de Teléfono</p>
                                <p className="text-xs text-gray-500">Vincula tu número directamente con un código de verificación.</p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-300 ml-auto group-hover:text-green-600 transition-colors" />
                        </button>
                    </div>
                )
            }

            if (whatsappMode === 'apikey') {
                return (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                        <div className="bg-green-50 rounded-2xl p-4 text-xs text-green-800 flex gap-2">
                            <Info className="h-4 w-4 shrink-0 mt-0.5" />
                            <span>Obtén estos datos desde Meta Business Suite → API de WhatsApp.</span>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Token de Acceso Permanente *</Label>
                            <Input
                                value={wapiToken}
                                onChange={e => setWapiToken(e.target.value)}
                                placeholder="EAAGm0PX4ZCpsBA..."
                                className="h-11 bg-gray-50 border-gray-200 rounded-xl font-mono text-sm"
                                type="password"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number ID *</Label>
                            <Input
                                value={waPhoneId}
                                onChange={e => setWaPhoneId(e.target.value)}
                                placeholder="123456789012345"
                                className="h-11 bg-gray-50 border-gray-200 rounded-xl font-mono text-sm"
                            />
                        </div>
                        <button onClick={() => setWhatsappMode('select')} className="text-xs text-gray-400 hover:text-gray-600 underline">← Cambiar método de conexión</button>
                    </div>
                )
            }

            // Phone flow
            if (phoneStep === 'number') {
                return (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                        <div className="bg-green-50 rounded-2xl p-4 text-xs text-green-800 flex gap-2">
                            <Smartphone className="h-4 w-4 shrink-0 mt-0.5" />
                            <span>Ingresa el número de WhatsApp Business con código de país (ej: +5491112345678)</span>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Número de WhatsApp Business *</Label>
                            <Input
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                                placeholder="+54 9 11 1234 5678"
                                className="h-12 bg-gray-50 border-gray-200 rounded-xl text-lg font-medium"
                            />
                        </div>
                        <Button
                            onClick={handleSendCode}
                            disabled={sendingCode || !phoneNumber}
                            className="w-full h-11 rounded-xl font-bold bg-green-600 hover:bg-green-700 text-white"
                        >
                            {sendingCode ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Enviando código...</> : <><MessageSquare className="mr-2 h-4 w-4" />Enviar Código de Verificación</>}
                        </Button>
                        <button onClick={() => setWhatsappMode('select')} className="text-xs text-gray-400 hover:text-gray-600 underline">← Cambiar método de conexión</button>
                    </div>
                )
            }

            if (phoneStep === 'code') {
                return (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                        <div className="bg-green-50 rounded-2xl p-4 text-center">
                            <p className="text-sm font-bold text-green-900">Código enviado a</p>
                            <p className="text-lg font-black text-green-700 mt-1">{phoneNumber}</p>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Código de verificación (6 dígitos) *</Label>
                            <Input
                                value={verificationCode}
                                onChange={e => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                placeholder="123456"
                                className="h-14 bg-gray-50 border-gray-200 rounded-xl text-2xl font-black tracking-widest text-center"
                                maxLength={6}
                            />
                        </div>
                        <Button
                            onClick={handleVerifyCode}
                            disabled={sendingCode || verificationCode.length !== 6}
                            className="w-full h-11 rounded-xl font-bold bg-green-600 hover:bg-green-700 text-white"
                        >
                            {sendingCode ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Verificando...</> : <><CheckCircle2 className="mr-2 h-4 w-4" />Verificar Código</>}
                        </Button>
                    </div>
                )
            }

            // codeVerified / done
            return (
                <div className="flex flex-col items-center justify-center text-center space-y-3 py-4 animate-in fade-in slide-in-from-right-4">
                    <div className="bg-green-100 p-5 rounded-full">
                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                    <p className="font-black text-xl text-gray-900">¡Número Verificado!</p>
                    <p className="text-sm text-gray-500">{phoneNumber} está listo para conectarse.</p>
                </div>
            )
        }

        if (channelType === 'gmail') {
            return (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                    <div className="bg-red-50 rounded-2xl p-4 text-xs text-red-800 flex gap-2">
                        <Info className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>Obtén estos datos desde Google Cloud Console → APIs y Servicios → Credenciales.</span>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Client ID de OAuth 2.0 *</Label>
                        <Input value={gmailClientId} onChange={e => setGmailClientId(e.target.value)} placeholder="123456-abc.apps.googleusercontent.com" className="h-11 bg-gray-50 border-gray-200 rounded-xl font-mono text-xs" />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Client Secret *</Label>
                        <Input value={gmailClientSecret} onChange={e => setGmailClientSecret(e.target.value)} placeholder="GOCSPX-..." className="h-11 bg-gray-50 border-gray-200 rounded-xl font-mono text-sm" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Refresh Token <span className="text-gray-300 font-normal normal-case">(opcional)</span></Label>
                        <Input value={gmailRefreshToken} onChange={e => setGmailRefreshToken(e.target.value)} placeholder="1//0g..." className="h-11 bg-gray-50 border-gray-200 rounded-xl font-mono text-sm" type="password" />
                    </div>
                </div>
            )
        }

        if (channelType === 'instagram' || channelType === 'facebook') {
            return (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                    <div className="bg-indigo-50 rounded-2xl p-4 text-xs text-indigo-800 flex gap-2">
                        <Info className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>Genera el token en Meta for Developers → Graph API Explorer. Asegúrate de incluir permisos de páginas y mensajería.</span>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Page Access Token *</Label>
                        <Input value={metaAccessToken} onChange={e => setMetaAccessToken(e.target.value)} placeholder="EAAG..." className="h-11 bg-gray-50 border-gray-200 rounded-xl font-mono text-sm" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">
                            {channelType === 'instagram' ? 'Instagram Business Account ID' : 'Facebook Page ID'} *
                        </Label>
                        <Input value={metaPageId} onChange={e => setMetaPageId(e.target.value)} placeholder="1234567890" className="h-11 bg-gray-50 border-gray-200 rounded-xl font-mono text-sm" />
                    </div>
                    <a href="https://developers.facebook.com/tools/explorer/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-medium text-indigo-600 hover:underline">
                        <ExternalLink className="h-3.5 w-3.5" /> Abrir Graph API Explorer
                    </a>
                </div>
            )
        }

        if (channelType === 'tiktok') {
            return (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                    <div className="bg-gray-100 rounded-2xl p-4 text-xs text-gray-700 flex gap-2">
                        <Info className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>Obtén estos datos desde tu App en TikTok for Developers → Configuración de la app.</span>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">TikTok App ID *</Label>
                        <Input value={tiktokAppId} onChange={e => setTiktokAppId(e.target.value)} placeholder="7xxxxxxxxxxxxxxx" className="h-11 bg-gray-50 border-gray-200 rounded-xl font-mono text-sm" />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Access Token *</Label>
                        <Input value={tiktokAccessToken} onChange={e => setTiktokAccessToken(e.target.value)} placeholder="act.xxx..." className="h-11 bg-gray-50 border-gray-200 rounded-xl font-mono text-sm" type="password" />
                    </div>
                    <a href="https://developers.tiktok.com/apps" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:underline">
                        <ExternalLink className="h-3.5 w-3.5" /> Abrir panel de TikTok Developers
                    </a>
                </div>
            )
        }

        return null
    }

    // --------------------------------------------------
    // STEP 3 - Name & Save
    // --------------------------------------------------
    const renderStep3 = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-green-900 font-medium">
                    ¡Credenciales configuradas! Ahora asigna un nombre para identificar esta conexión en el sistema.
                </p>
            </div>
            <div className="space-y-2">
                <Label className="text-xs font-black uppercase tracking-widest text-gray-400">Nombre de la Conexión *</Label>
                <Input
                    value={accountName}
                    onChange={e => setAccountName(e.target.value)}
                    placeholder='Ej: "WhatsApp Ventas", "Gmail Comercial"'
                    className="h-12 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all font-medium text-base"
                    autoFocus
                />
            </div>
        </div>
    )

    const renderContent = () => {
        if (step === 1) return renderStep1()
        if (step === 2) return renderStep2()
        return renderStep3()
    }

    const getStepTitle = () => {
        if (step === 1) return "Paso 1: Instrucciones"
        if (step === 2) return "Paso 2: Credenciales de Acceso"
        return "Paso 3: Guardar Conexión"
    }

    const canGoNext = () => {
        if (step === 1) return true
        if (step === 2) return canProceedStep2()
        return accountName.length > 0
    }

    return (
        <Dialog open={open} onOpenChange={(isOpen) => {
            if (!isOpen) resetAll()
            onOpenChange(isOpen)
        }}>
            <DialogContent className="sm:max-w-[520px] rounded-3xl p-0 overflow-hidden" showCloseButton={false}>
                <DialogHeader className="p-6 pb-2 text-center border-b border-gray-100">
                    <DialogTitle className="text-2xl font-black">Conectar {channelLabel}</DialogTitle>
                    <DialogDescription className="text-sm text-gray-500">{getStepTitle()}</DialogDescription>
                    {/* Progress bar */}
                    <div className="flex gap-1.5 mt-3 justify-center">
                        {[1, 2, 3].map(s => (
                            <div key={s} className={`h-1.5 rounded-full transition-all ${s <= step ? 'bg-blue-600 w-8' : 'bg-gray-200 w-4'}`} />
                        ))}
                    </div>
                </DialogHeader>

                <div className="p-6 max-h-[65vh] overflow-y-auto">
                    {renderContent()}
                </div>

                <DialogFooter className="p-6 pt-2 border-t border-gray-100 bg-gray-50/50 gap-2">
                    <Button variant="ghost" onClick={() => { onOpenChange(false); resetAll() }} className="rounded-xl font-bold text-gray-500">
                        Cancelar
                    </Button>

                    {step > 1 && !(channelType === 'whatsapp' && step === 2 && whatsappMode === 'select') && (
                        <Button variant="outline" onClick={() => {
                            if (step === 2 && channelType === 'whatsapp' && whatsappMode !== 'select') {
                                setWhatsappMode('select'); setPhoneStep('number'); setCodeVerified(false)
                            } else {
                                setStep(step - 1)
                            }
                        }} className="rounded-xl font-bold border-gray-200 text-gray-600">
                            Volver
                        </Button>
                    )}

                    {step < 3 ? (
                        <Button
                            onClick={() => setStep(step + 1)}
                            disabled={!canGoNext()}
                            className="h-11 px-6 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 disabled:opacity-40"
                        >
                            Siguiente <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    ) : (
                        <Button
                            onClick={handleConnect}
                            disabled={loading || !accountName}
                            className={`h-11 px-6 rounded-xl font-bold text-white shadow-lg ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700 shadow-green-500/20'}`}
                        >
                            {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando...</> : <><CheckCircle2 className="mr-2 h-4 w-4" /> Finalizar Conexión</>}
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
