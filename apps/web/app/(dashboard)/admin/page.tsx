import { redirect } from "next/navigation"
import { isSuperadmin, getDemoSessions } from "@/app/actions/admin"
import AdminPanelClient from "./admin-panel-client"

export default async function AdminPage() {
    const superadmin = await isSuperadmin()
    if (!superadmin) {
        redirect("/dashboard")
    }

    const sessions = await getDemoSessions()

    return <AdminPanelClient initialSessions={sessions} />
}
