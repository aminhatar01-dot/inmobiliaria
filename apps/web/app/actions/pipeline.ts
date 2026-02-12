'use server';

import { createClient, getTenantId } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { PipelineStage } from '@inmocms/shared';

export async function getPipelineStages(): Promise<PipelineStage[]> {
    const supabase = await createClient();
    const tenantId = await getTenantId(supabase);

    if (!tenantId) return [];

    const { data, error } = await supabase
        .from('pipeline_stages')
        .select('*')
        .eq('tenant_id', tenantId)
        .order('order', { ascending: true });

    if (error) {
        console.error('Error fetching pipeline stages:', error);
        return [];
    }

    return data;
}

export async function moveLead(leadId: string, stageId: string) {
    const supabase = await createClient();
    const tenantId = await getTenantId(supabase);

    if (!tenantId) throw new Error('Unauthorized');

    // Verify stage belongs to tenant
    const { data: stage, error: stageError } = await supabase
        .from('pipeline_stages')
        .select('id')
        .eq('id', stageId)
        .eq('tenant_id', tenantId)
        .single();

    if (stageError || !stage) {
        throw new Error('Invalid stage or unauthorized');
    }

    // Update or Insert into pipeline_leads
    // Check if mapping exists
    const { data: existingMapping } = await supabase
        .from('pipeline_leads')
        .select('id')
        .eq('lead_id', leadId)
        .eq('tenant_id', tenantId)
        .single();

    let error;
    if (existingMapping) {
        const { error: updateError } = await supabase
            .from('pipeline_leads')
            .update({ stage_id: stageId, updated_at: new Date().toISOString() })
            .eq('id', existingMapping.id);
        error = updateError;
    } else {
        const { error: insertError } = await supabase
            .from('pipeline_leads')
            .insert({
                lead_id: leadId,
                stage_id: stageId,
                tenant_id: tenantId
            });
        error = insertError;
    }

    if (error) {
        console.error('Error moving lead:', error);
        throw new Error(error.message);
    }

    revalidatePath('/pipeline');
    return true;
}

export async function getPipelineLeads() {
    const supabase = await createClient();
    const tenantId = await getTenantId(supabase);

    if (!tenantId) return [];

    // We typically want leads with their current stage
    // But supabase join might be complex here depending on relations
    // Let's fetch all leads and their pipeline positions

    const { data: leads, error: leadsError } = await supabase
        .from('leads')
        .select('*')
        .eq('tenant_id', tenantId);

    if (leadsError) throw new Error(leadsError.message);

    const { data: positions, error: positionsError } = await supabase
        .from('pipeline_leads')
        .select('*')
        .eq('tenant_id', tenantId);

    if (positionsError) throw new Error(positionsError.message);

    // Merge
    return leads.map(lead => {
        const pos = positions.find(p => p.lead_id === lead.id);
        return {
            ...lead,
            stage_id: pos?.stage_id || null // leads might not be in pipeline yet
        };
    });
}
