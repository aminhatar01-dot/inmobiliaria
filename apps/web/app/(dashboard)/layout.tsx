import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/nav/app-sidebar"
import { DashboardHeader } from "@/components/nav/dashboard-header"
import { createClient } from "@/lib/supabase/server"
import { processPendingReminders } from "@/app/actions/reminders"
import AiSupportChat from "@/components/support/ai-support-chat"

const SUPERADMIN_EMAIL = 'aminhatar01@gmail.com'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // Process pending reminders in the background (fire-and-forget, never throws)
    processPendingReminders().catch(console.error)

    // Determine if current user is a superadmin
    let superadmin = false
    if (user) {
        if (user.email === SUPERADMIN_EMAIL) {
            superadmin = true
        } else {
            const { data: profile } = await supabase
                .from('profiles')
                .select('is_superadmin')
                .eq('id', user.id)
                .single()
            superadmin = profile?.is_superadmin === true
        }
    }

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-[#f8f9fa] relative">
                <AppSidebar user={user} isSuperadmin={superadmin} />
                <SidebarInset className="flex flex-col flex-1 min-w-0 overflow-hidden">
                    <DashboardHeader user={user} />
                    <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                        {children}
                    </main>
                </SidebarInset>
                
                {/* Global AI Floating Widget */}
                {user && <AiSupportChat />}
            </div>
        </SidebarProvider>
    )
}
