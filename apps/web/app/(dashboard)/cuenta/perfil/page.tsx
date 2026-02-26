import { getProfile } from "@/app/actions/account"
import { ProfileForm } from "@/components/account/profile-form"

export default async function ProfilePage() {
    const user = await getProfile()

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-black text-blue-950 tracking-tighter">Mi Perfil</h1>
                <p className="text-gray-500 font-medium">Gestiona tu información personal y preferencias</p>
            </div>

            <ProfileForm user={user} />
        </div>
    )
}
