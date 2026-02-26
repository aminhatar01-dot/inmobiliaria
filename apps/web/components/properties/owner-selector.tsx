'use client';

import { useState, useEffect } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { getLeads } from '@/app/actions/leads';
import { Lead } from '@inmocms/shared';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

interface OwnerSelectorProps {
    value?: string;
    onChange: (value: string) => void;
}

export function OwnerSelector({ value, onChange }: OwnerSelectorProps) {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLeads() {
            try {
                const data = await getLeads();
                setLeads(data);
            } catch (error) {
                console.error("Error fetching leads:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchLeads();
    }, []);

    if (loading) {
        return <div className="h-12 w-full bg-gray-50 rounded-xl animate-pulse" />;
    }

    return (
        <div className="space-y-3">
            <Label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Propietario / Lead Asociado</Label>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="h-12 bg-gray-50 border-gray-100 rounded-xl">
                    <SelectValue placeholder="Seleccionar propietario" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                    {leads.map((lead) => (
                        <SelectItem key={lead.id} value={lead.id}>
                            {lead.name} {lead.email ? `(${lead.email})` : ''}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <p className="text-[10px] text-gray-400 font-medium ml-1">
                Selecciona un lead existente como propietario. {leads.length === 0 && (
                    <span className="text-blue-600 font-bold">
                        <Link href="/leads" className="hover:underline">Crea un lead primero</Link>
                    </span>
                )}
            </p>
        </div>
    );
}
