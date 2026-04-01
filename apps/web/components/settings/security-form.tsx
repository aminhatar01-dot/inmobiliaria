"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"
import { ShieldCheck, Lock, Eye, EyeOff, Loader2, KeyRound } from "lucide-react"

const securitySchema = z.object({
    password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
})

export function SecurityForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const supabase = createClient()

    const form = useForm<z.infer<typeof securitySchema>>({
        resolver: zodResolver(securitySchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    })

    async function onSubmit(values: z.infer<typeof securitySchema>) {
        setIsLoading(true)
        try {
            const { error } = await supabase.auth.updateUser({
                password: values.password
            })

            if (error) throw error

            toast.success("Contraseña actualizada correctamente")
            form.reset()
        } catch (error: any) {
            console.error(error)
            toast.error(error.message || "Error al actualizar la contraseña")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-8 bg-gray-50/50">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                        <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-black text-gray-900">Seguridad</CardTitle>
                        <CardDescription className="text-gray-500 font-medium font-serif">Protege tu cuenta y gestiona tus accesos</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md">
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-400">Nueva Contraseña</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                <Input
                                                    {...field}
                                                    type={showPassword ? "text" : "password"}
                                                    className="pl-10 pr-10 h-12 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all font-medium"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                </button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-black uppercase tracking-widest text-gray-400">Confirmar Contraseña</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                <Input
                                                    {...field}
                                                    type={showPassword ? "text" : "password"}
                                                    className="pl-10 h-12 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-blue-100 transition-all font-medium"
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="pt-4">
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="h-12 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
                            >
                                {isLoading ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    <KeyRound className="h-5 w-5" />
                                )}
                                Actualizar Contraseña
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
