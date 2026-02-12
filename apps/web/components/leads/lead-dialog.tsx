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
import { createLead, updateLead } from '@/app/actions/leads';
import { useState } from 'react';
import { Lead } from '@inmocms/shared';
import { toast } from 'sonner';
import { Loader2, Plus } from 'lucide-react';

interface LeadDialogProps {
    lead?: Lead;
    mode?: 'create' | 'edit';
    children?: React.ReactNode;
    trigger?: React.ReactNode;
}

export function LeadDialog({ lead, mode = 'create', children, trigger }: LeadDialogProps) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        try {
            const data = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                phone: formData.get('phone') as string,
                interest_type: formData.get('interest_type') as any,
                source: formData.get('source') as any,
                budget: parseFloat(formData.get('budget') as string) || 0,
            };

            if (mode === 'create') {
                await createLead(data);
                toast.success('Lead creado correctamente');
            } else {
                if (!lead?.id) throw new Error('No lead ID provided');
                await updateLead(lead.id, data);
                toast.success('Lead actualizado correctamente');
            }
            setOpen(false);
        } catch (error) {
            console.error(error);
            toast.error('Error al guardar el lead');
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || (
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 py-6 px-6 h-fit">
                        <Plus className="h-5 w-5 mr-2" /> Nuevo Lead
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] rounded-2xl border-gray-100">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-black text-gray-800">
                        {mode === 'create' ? 'Nuevo Prospecto' : 'Editar Prospecto'}
                    </DialogTitle>
                    <DialogDescription className="text-gray-500">
                        {mode === 'create' ? 'Ingresa los datos del nuevo contacto.' : 'Modifica la información del lead.'}
                    </DialogDescription>
                </DialogHeader>
                <form action={handleSubmit} className="space-y-6 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 col-span-2">
                            <Label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nombre Completo</Label>
                            <Input id="name" name="name" defaultValue={lead?.name} placeholder="Ej: Juan Perez" required className="bg-gray-50 border-gray-100 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</Label>
                            <Input id="email" name="email" type="email" defaultValue={lead?.email} placeholder="juan@ejemplo.com" className="bg-gray-50 border-gray-100 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Teléfono</Label>
                            <Input id="phone" name="phone" defaultValue={lead?.phone} placeholder="+54 9 11..." className="bg-gray-50 border-gray-100 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="interest_type" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Interés</Label>
                            <Select name="interest_type" defaultValue={lead?.interest_type || 'buy'}>
                                <SelectTrigger className="bg-gray-50 border-gray-100 rounded-xl">
                                    <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="buy">Compra</SelectItem>
                                    <SelectItem value="rent">Alquiler</SelectItem>
                                    <SelectItem value="temporary_rent">Temporal</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="source" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Origen</Label>
                            <Select name="source" defaultValue={lead?.source || 'manual'}>
                                <SelectTrigger className="bg-gray-50 border-gray-100 rounded-xl">
                                    <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="manual">Manual / Preventa</SelectItem>
                                    <SelectItem value="web">Web</SelectItem>
                                    <SelectItem value="portal">Portal</SelectItem>
                                    <SelectItem value="referral">Referido</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2 col-span-2">
                            <Label htmlFor="budget" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Presupuesto Estimado</Label>
                            <Input id="budget" name="budget" type="number" defaultValue={lead?.budget || ''} placeholder="0.00" className="bg-gray-50 border-gray-100 rounded-xl" />
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <Button type="button" variant="ghost" onClick={() => setOpen(false)} className="rounded-xl font-bold text-gray-500">Cancelar</Button>
                        <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6">
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {mode === 'create' ? 'Crear Lead' : 'Guardar Cambios'}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
