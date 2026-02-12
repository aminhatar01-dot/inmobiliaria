'use server';

import { createClient, getTenantId } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { Task } from '@inmocms/shared';

export async function getTasks(filters?: { assigned_to?: string; status?: string; lead_id?: string; property_id?: string }): Promise<Task[]> {
    const supabase = await createClient();
    const tenantId = await getTenantId(supabase);

    if (!tenantId) return [];

    let query = supabase
        .from('tasks')
        .select('*')
        .eq('tenant_id', tenantId)
        .order('due_date', { ascending: true });

    if (filters?.assigned_to) {
        query = query.eq('assigned_to', filters.assigned_to);
    }
    if (filters?.status) {
        query = query.eq('status', filters.status);
    }
    if (filters?.lead_id) {
        query = query.eq('lead_id', filters.lead_id);
    }
    if (filters?.property_id) {
        query = query.eq('property_id', filters.property_id);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching tasks:', error);
        return [];
    }

    return data;
}

export async function createTask(data: Partial<Task>) {
    const supabase = await createClient();
    const tenantId = await getTenantId(supabase);

    if (!tenantId) throw new Error('Unauthorized');

    const { data: task, error } = await supabase
        .from('tasks')
        .insert({
            ...data,
            tenant_id: tenantId,
            status: data.status || 'pending',
            priority: data.priority || 'medium'
        })
        .select()
        .single();

    if (error) {
        console.error('Error creating task:', error);
        throw new Error(error.message);
    }

    revalidatePath('/tasks');
    if (data.lead_id) revalidatePath(`/leads/${data.lead_id}`);
    if (data.property_id) revalidatePath(`/properties/${data.property_id}`);

    return task;
}

export async function updateTask(id: string, data: Partial<Task>) {
    const supabase = await createClient();
    const tenantId = await getTenantId(supabase);

    if (!tenantId) throw new Error('Unauthorized');

    const { data: task, error } = await supabase
        .from('tasks')
        .update({ ...data, updated_at: new Date().toISOString() })
        .eq('id', id)
        .eq('tenant_id', tenantId)
        .select()
        .single();

    if (error) {
        console.error('Error updating task:', error);
        throw new Error(error.message);
    }

    revalidatePath('/tasks');
    return task;
}

export async function completeTask(id: string) {
    return updateTask(id, { status: 'completed' });
}

export async function deleteTask(id: string) {
    const supabase = await createClient();
    const tenantId = await getTenantId(supabase);

    if (!tenantId) throw new Error('Unauthorized');

    const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id)
        .eq('tenant_id', tenantId);

    if (error) {
        console.error('Error deleting task:', error);
        throw new Error(error.message);
    }

    revalidatePath('/tasks');
}
