import { getProfile } from "@/app/actions/account"
import { ProfileForm } from "@/components/account/profile-form"
import { SecurityForm } from "@/components/settings/security-form"

export default async function ProfilePage() {
    const user = await getProfile()

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-black text-blue-950 tracking-tighter">Mi Perfil</h1>
                <p className="text-gray-500 font-medium">Gestiona tu información personal y preferencias</p>
            </div>

            <ProfileForm user={user} />

            <div className="pt-8 border-t border-gray-100">
                <div className="mb-8">
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Seguridad de la Cuenta</h2>
                    <p className="text-gray-500 text-sm font-medium">Actualiza tu contraseña para mantener tu cuenta protegida</p>
                </div>
                <SecurityForm />
            </div>
        </div>
    )
}
