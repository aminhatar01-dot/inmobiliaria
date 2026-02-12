'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { createTask } from '@/app/actions/tasks';
import { useState } from 'react';
import { toast } from 'sonner';
import { Loader2, Plus } from 'lucide-react';

export function NewTaskDialog() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        try {
            const data = {
                title: formData.get('title') as string,
                description: formData.get('description') as string,
                priority: formData.get('priority') as any,
                category: formData.get('category') as any,
                due_date: formData.get('due_date') ? new Date(formData.get('due_date') as string).toISOString() : undefined,
            };

            await createTask(data);
            toast.success('Tarea creada correctamente');
            setOpen(false);
        } catch (error) {
            console.error(error);
            toast.error('Error al crear tarea');
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 py-2 px-4 h-9 text-xs">
                    <Plus className="h-4 w-4 mr-2" /> Nueva Tarea
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] rounded-2xl border-gray-100">
                <DialogHeader>
                    <DialogTitle className="text-xl font-black text-gray-800">
                        Nueva Tarea
                    </DialogTitle>
                    <DialogDescription className="text-gray-500">
                        Agenda una nueva actividad.
                    </DialogDescription>
                </DialogHeader>
                <form action={handleSubmit} className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="title" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Título</Label>
                        <Input id="title" name="title" placeholder="Ej: Llamar a cliente..." required className="bg-gray-50 border-gray-100 rounded-xl" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="category" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Categoría</Label>
                            <Select name="category" defaultValue="call">
                                <SelectTrigger className="bg-gray-50 border-gray-100 rounded-xl">
                                    <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="visit">Visita</SelectItem>
                                    <SelectItem value="call">Llamada</SelectItem>
                                    <SelectItem value="email">Email</SelectItem>
                                    <SelectItem value="meeting">Reunión</SelectItem>
                                    <SelectItem value="admin">Admin</SelectItem>
                                    <SelectItem value="other">Otro</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="priority" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Prioridad</Label>
                            <Select name="priority" defaultValue="medium">
                                <SelectTrigger className="bg-gray-50 border-gray-100 rounded-xl">
                                    <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="low">Baja</SelectItem>
                                    <SelectItem value="medium">Media</SelectItem>
                                    <SelectItem value="high">Alta</SelectItem>
                                    <SelectItem value="critical">Crítica</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="due_date" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Fecha y Hora</Label>
                        <Input id="due_date" name="due_date" type="datetime-local" className="bg-gray-50 border-gray-100 rounded-xl" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Descripción (Opcional)</Label>
                        <Textarea id="description" name="description" placeholder="Detalles adicionales..." className="bg-gray-50 border-gray-100 rounded-xl min-h-[80px]" />
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="rounded-xl font-bold text-gray-500">Cancelar</Button>
                        <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6">
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Crear Tarea
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
