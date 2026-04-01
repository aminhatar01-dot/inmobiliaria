-- Migration: 20260301000001_add_channel_connections.sql
-- Description: Create table for communication channel connections

-- 1. Create channel_connections table
CREATE TABLE IF NOT EXISTS public.channel_connections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
    channel_name TEXT CHECK (channel_name IN ('whatsapp', 'instagram', 'facebook', 'gmail', 'tiktok')) NOT NULL,
    status TEXT CHECK (status IN ('connected', 'disconnected', 'error', 'pending')) DEFAULT 'disconnected',
    credentials JSONB, -- Stores tokens, API keys, etc.
    account_info JSONB, -- Stores public account info (name, handle, avatar)
    last_sync_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create unique index to ensure one connection per channel per tenant
CREATE UNIQUE INDEX IF NOT EXISTS channel_connections_tenant_channel_idx ON public.channel_connections(tenant_id, channel_name);

-- 3. Enable RLS
ALTER TABLE public.channel_connections ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS Policies
CREATE POLICY "Users can view their tenant's channel connections"
    ON public.channel_connections FOR SELECT
    USING (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can insert their tenant's channel connections"
    ON public.channel_connections FOR INSERT
    WITH CHECK (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can update their tenant's channel connections"
    ON public.channel_connections FOR UPDATE
    USING (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can delete their tenant's channel connections"
    ON public.channel_connections FOR DELETE
    USING (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

-- 5. Trigger for updated_at
CREATE OR REPLACE FUNCTION update_channel_connections_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS tr_channel_connections_updated_at ON public.channel_connections;
CREATE TRIGGER tr_channel_connections_updated_at
    BEFORE UPDATE ON public.channel_connections
    FOR EACH ROW
    EXECUTE FUNCTION update_channel_connections_updated_at();

