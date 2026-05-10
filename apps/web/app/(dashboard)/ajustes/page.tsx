import { getAgencySettings, getBranches, getNotificationSettings } from "@/app/actions/settings"
import { getCommunicationSettings } from "@/app/actions/settings-comm"
import { AgencyForm } from "@/components/settings/agency-form"
import { BranchesManager } from "@/components/settings/branches-manager"
import { SecurityForm } from "@/components/settings/security-form"
import { NotificationsForm } from "@/components/settings/notifications-form"
import { CommunicationForm } from "@/components/settings/communication-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, MapPin, ShieldCheck, Bell, MessageSquareQuote, Globe } from "lucide-react"
import { AdsManager } from "@/components/ads/ads-manager"

export default async function AjustesPage() {
    const [settings, branches, notificationPreferences, commSettings] = await Promise.all([
        getAgencySettings(),
        getBranches(),
        getNotificationSettings(),
        getCommunicationSettings()
    ])

    if (!settings) {
        return (
            <div className="p-8 text-center text-gray-500">
                Ocurrió un error al cargar la configuración.
            </div>
        )
    }

    return (
        <div className="p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">Configuración</h1>
                <p className="text-gray-500 font-medium font-serif mt-2 italic text-lg opacity-70">Personaliza la identidad y el funcionamiento de tu inmobiliaria</p>
            </div>

            <Tabs defaultValue="agency" className="space-y-8">
                <TabsList className="bg-gray-100/50 p-1.5 rounded-[2rem] h-16 w-full md:w-auto shadow-sm border border-gray-100 inline-flex overflow-x-auto no-scrollbar">
                    <TabsTrigger value="agency" className="rounded-3xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-lg text-gray-400 gap-2 h-full">
                        <Building2 className="h-4 w-4" /> Agencia
                    </TabsTrigger>
                    <TabsTrigger value="branches" className="rounded-3xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-lg text-gray-400 gap-2 h-full">
                        <MapPin className="h-4 w-4" /> Sucursales
                    </TabsTrigger>
                    <TabsTrigger value="comm" className="rounded-3xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-lg text-gray-400 gap-2 h-full">
                        <MessageSquareQuote className="h-4 w-4" /> Comunicaciones
                    </TabsTrigger>
                    <TabsTrigger value="security" className="rounded-3xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-lg text-gray-400 gap-2 h-full">
                        <ShieldCheck className="h-4 w-4" /> Seguridad
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="rounded-3xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-lg text-gray-400 gap-2 h-full">
                        <Bell className="h-4 w-4" /> Notificaciones
                    </TabsTrigger>
                    <TabsTrigger value="ads" className="rounded-3xl px-8 font-bold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-lg text-gray-400 gap-2 h-full">
                        <Globe className="h-4 w-4" /> Google Ads
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="agency" className="m-0 focus-visible:outline-none">
                    <AgencyForm initialData={settings} />
                </TabsContent>

                <TabsContent value="branches" className="m-0 focus-visible:outline-none">
                    <BranchesManager initialBranches={branches} />
                </TabsContent>

                <TabsContent value="comm" className="m-0 focus-visible:outline-none">
                    <CommunicationForm initialData={commSettings} />
                </TabsContent>

                <TabsContent value="security" className="m-0 focus-visible:outline-none">
                    <SecurityForm />
                </TabsContent>

                <TabsContent value="notifications" className="m-0 focus-visible:outline-none">
                    <NotificationsForm initialPreferences={notificationPreferences} />
                </TabsContent>

                <TabsContent value="ads" className="m-0 focus-visible:outline-none">
                    <AdsManager />
                </TabsContent>
            </Tabs>
        </div>
    )
}

