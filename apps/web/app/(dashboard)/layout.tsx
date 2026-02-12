import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/nav/app-sidebar"
import { DashboardHeader } from "@/components/nav/dashboard-header"
import { createClient } from "@/lib/supabase/server"

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-[#f8f9fa]">
                <AppSidebar user={user} />
                <SidebarInset className="flex flex-col flex-1 min-w-0 overflow-hidden">
                    <DashboardHeader user={user} />
                    <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                        {children}
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}
