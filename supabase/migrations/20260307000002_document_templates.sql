-- Migration: 20260307000002_document_templates.sql
-- Description: Create table for document templates and improve contracts table

-- 1. Create document_templates table
CREATE TABLE IF NOT EXISTS public.document_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    content TEXT NOT NULL, -- HTML or markdown content
    type TEXT NOT NULL CHECK (type IN ('reservation', 'rental', 'sale', 'receipt', 'other')),
    is_system BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Add some initial system templates (optional, can be done via seed too)
INSERT INTO public.document_templates (name, type, is_system, content)
VALUES 
('Reserva Ad Referendum', 'reservation', true, 'RESERVA AD REFERENDUM\n\nEntre el Sr. {{lead_name}}...'),
('Contrato de Locación Vivienda', 'rental', true, 'CONTRATO DE LOCACIÓN\n\nEn la ciudad de...'),
('Recibo de Alquiler', 'receipt', true, 'RECIBO DE ALQUILER\n\nRecibí de {{lead_name}} la suma de...'),
('Boleto de Compraventa', 'sale', true, 'BOLETO DE COMPRAVENTA\n\nEntre el VENDEDOR...');

-- 3. Enable RLS
ALTER TABLE public.document_templates ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS Policies
CREATE POLICY "Users can view their tenant's templates and system templates"
    ON public.document_templates FOR SELECT
    USING (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()) OR is_system = true);

CREATE POLICY "Users can insert their tenant's templates"
    ON public.document_templates FOR INSERT
    WITH CHECK (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can update their tenant's templates"
    ON public.document_templates FOR UPDATE
    USING (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can delete their tenant's templates"
    ON public.document_templates FOR DELETE
    USING (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

-- 5. Trigger for updated_at
CREATE OR REPLACE FUNCTION update_document_templates_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS tr_document_templates_updated_at ON public.document_templates;
CREATE TRIGGER tr_document_templates_updated_at
    BEFORE UPDATE ON public.document_templates
    FOR EACH ROW
    EXECUTE FUNCTION update_document_templates_updated_at();

-- 6. Add metadata column to contracts if not exists
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='contracts' AND column_name='metadata') THEN
        ALTER TABLE public.contracts ADD COLUMN metadata JSONB DEFAULT '{}'::jsonb;
    END IF;
END $$;
