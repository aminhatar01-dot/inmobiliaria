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
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { createLead, updateLead } from '@/app/actions/leads';
import { getProperties } from '@/app/actions/properties';
import { useState, useEffect } from 'react';
import { Lead, Property, PROPERTY_TYPES } from '@inmocms/shared';
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
    const [properties, setProperties] = useState<Property[]>([]);
    const [trackingEnabled, setTrackingEnabled] = useState(lead?.tracking_enabled || false);

    useEffect(() => {
        if (open) {
            loadProperties();
        }
    }, [open]);

    async function loadProperties() {
        try {
            const props = await getProperties();
            setProperties(props);
        } catch (error) {
            console.error('Error loading properties:', error);
        }
    }

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
                // Tracking enhancement fields
                interested_property_id: formData.get('interested_property_id') as string || null,
                property_preferences: {
                    property_type: formData.get('pref_property_type') as string || '',
                    min_price: parseFloat(formData.get('pref_min_price') as string) || undefined,
                    max_price: parseFloat(formData.get('pref_max_price') as string) || undefined,
                    location: formData.get('pref_location') as string || '',
                    rooms: parseInt(formData.get('pref_rooms') as string) || undefined,
                },
                communication_channels: {
                    whatsapp: formData.get('channel_whatsapp') === 'on',
                    email: formData.get('channel_email') === 'on',
                    phone: formData.get('channel_phone') === 'on',
                    social: formData.get('channel_social') === 'on',
                },
                tracking_enabled: formData.get('tracking_enabled') === 'on',
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

                    {/* Lead Tracking Section */}
                    <div className="border-t border-gray-100 pt-4 space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-bold text-gray-800">Seguimiento Personalizado</h3>
                                <p className="text-xs text-gray-500">Configura el seguimiento automático para este lead</p>
                            </div>
                            <Switch
                                name="tracking_enabled"
                                checked={trackingEnabled}
                                onCheckedChange={setTrackingEnabled}
                                className="data-[state=checked]:bg-blue-600"
                            />
                        </div>

                        {trackingEnabled && (
                            <>
                                {/* Property Interest */}
                                <div className="space-y-3 bg-blue-50/50 p-4 rounded-xl">
                                    <Label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Propiedad de Interés</Label>
                                    <Select name="interested_property_id" defaultValue={lead?.interested_property_id || ''}>
                                        <SelectTrigger className="bg-white border-gray-200 rounded-xl">
                                            <SelectValue placeholder="Seleccionar propiedad específica (opcional)" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="">Sin propiedad específica</SelectItem>
                                            {properties.map((prop) => (
                                                <SelectItem key={prop.id} value={prop.id}>
                                                    {prop.title} - {prop.property_type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Property Preferences */}
                                <div className="space-y-3 bg-purple-50/50 p-4 rounded-xl">
                                    <Label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Preferencias de Propiedad</Label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-2">
                                            <Label htmlFor="pref_property_type" className="text-xs text-gray-600">Tipo</Label>
                                            <Select name="pref_property_type" defaultValue={lead?.property_preferences?.property_type || ''}>
                                                <SelectTrigger className="bg-white border-gray-200 rounded-xl">
                                                    <SelectValue placeholder="Tipo de propiedad" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="">Cualquiera</SelectItem>
                                                    {Object.entries(PROPERTY_TYPES).map(([key, value]) => (
                                                        <SelectItem key={key} value={value}>{value}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pref_rooms" className="text-xs text-gray-600">Ambientes</Label>
                                            <Input id="pref_rooms" name="pref_rooms" type="number" min="0" defaultValue={lead?.property_preferences?.rooms || ''} placeholder="Ej: 3" className="bg-white border-gray-200 rounded-xl" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pref_min_price" className="text-xs text-gray-600">Precio Mín.</Label>
                                            <Input id="pref_min_price" name="pref_min_price" type="number" min="0" defaultValue={lead?.property_preferences?.min_price || ''} placeholder="0" className="bg-white border-gray-200 rounded-xl" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pref_max_price" className="text-xs text-gray-600">Precio Máx.</Label>
                                            <Input id="pref_max_price" name="pref_max_price" type="number" min="0" defaultValue={lead?.property_preferences?.max_price || ''} placeholder="0" className="bg-white border-gray-200 rounded-xl" />
                                        </div>
                                        <div className="space-y-2 col-span-2">
                                            <Label htmlFor="pref_location" className="text-xs text-gray-600">Ubicación Preferida</Label>
                                            <Input id="pref_location" name="pref_location" defaultValue={lead?.property_preferences?.location || ''} placeholder="Ej: Palermo, Belgrano" className="bg-white border-gray-200 rounded-xl" />
                                        </div>
                                    </div>
                                </div>

                                {/* Communication Channels */}
                                <div className="space-y-3 bg-green-50/50 p-4 rounded-xl">
                                    <Label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Canales de Comunicación</Label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="channel_whatsapp" name="channel_whatsapp" defaultChecked={lead?.communication_channels?.whatsapp !== false} />
                                            <Label htmlFor="channel_whatsapp" className="text-sm font-medium cursor-pointer">WhatsApp</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="channel_email" name="channel_email" defaultChecked={lead?.communication_channels?.email !== false} />
                                            <Label htmlFor="channel_email" className="text-sm font-medium cursor-pointer">Email</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="channel_phone" name="channel_phone" defaultChecked={lead?.communication_channels?.phone !== false} />
                                            <Label htmlFor="channel_phone" className="text-sm font-medium cursor-pointer">Teléfono</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="channel_social" name="channel_social" defaultChecked={lead?.communication_channels?.social === true} />
                                            <Label htmlFor="channel_social" className="text-sm font-medium cursor-pointer">Redes Sociales</Label>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
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
