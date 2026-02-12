-- Create Contracts table
CREATE TABLE IF NOT EXISTS public.contracts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('reservation', 'rental', 'sale', 'other')),
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'generated', 'signed', 'archived')),
    file_url TEXT,
    property_id UUID REFERENCES public.properties(id) ON DELETE SET NULL,
    lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
    content TEXT, -- HTML content for the contract body
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contracts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Contracts
CREATE POLICY "Users can view their tenant's contracts" 
ON public.contracts FOR SELECT 
USING (tenant_id IN (
    SELECT tenant_id FROM public.users WHERE id = auth.uid()
));

CREATE POLICY "Users can insert contracts for their tenant" 
ON public.contracts FOR INSERT 
WITH CHECK (tenant_id IN (
    SELECT tenant_id FROM public.users WHERE id = auth.uid()
));

CREATE POLICY "Users can update their tenant's contracts" 
ON public.contracts FOR UPDATE 
USING (tenant_id IN (
    SELECT tenant_id FROM public.users WHERE id = auth.uid()
));

CREATE POLICY "Users can delete their tenant's contracts" 
ON public.contracts FOR DELETE 
USING (tenant_id IN (
    SELECT tenant_id FROM public.users WHERE id = auth.uid()
));

-- Create Storage Bucket for Documents if not exists
INSERT INTO storage.buckets (id, name, public) 
VALUES ('documents', 'documents', false)
ON CONFLICT (id) DO NOTHING;

-- RLS for Storage Objects "documents"
CREATE POLICY "Tenant Isolated View Documents"
ON storage.objects FOR SELECT
USING ( bucket_id = 'documents' AND (metadata->>'tenant_id')::uuid IN (
    SELECT tenant_id FROM public.users WHERE id = auth.uid()
));

CREATE POLICY "Tenant Isolated Upload Documents"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'documents' AND (metadata->>'tenant_id')::uuid IN (
    SELECT tenant_id FROM public.users WHERE id = auth.uid()
));
