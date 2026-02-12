-- Migration: 20260129000001_visits_schema.sql
-- Description: Create visits table and RLS policies

CREATE TABLE IF NOT EXISTS public.visits (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
    lead_id uuid REFERENCES public.leads(id) ON DELETE CASCADE NOT NULL,
    property_id uuid REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
    agent_id uuid REFERENCES public.users(id) ON DELETE SET NULL,
    scheduled_at timestamptz NOT NULL,
    status text DEFAULT 'scheduled', -- 'scheduled', 'completed', 'cancelled', 'no_show'
    notes text,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.visits ENABLE ROW LEVEL SECURITY;

-- RLS Policies
DROP POLICY IF EXISTS "Users can view visits of their tenant" ON public.visits;
CREATE POLICY "Users can view visits of their tenant" ON public.visits FOR SELECT USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can manage visits of their tenant" ON public.visits;
CREATE POLICY "Users can manage visits of their tenant" ON public.visits FOR ALL USING (tenant_id = public.get_auth_tenant_id());

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_visits_tenant ON public.visits(tenant_id);
CREATE INDEX IF NOT EXISTS idx_visits_lead ON public.visits(lead_id);
CREATE INDEX IF NOT EXISTS idx_visits_property ON public.visits(property_id);
CREATE INDEX IF NOT EXISTS idx_visits_scheduled ON public.visits(scheduled_at);
