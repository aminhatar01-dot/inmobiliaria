-- Migration: 20260502150000_system_config.sql
-- Description: Table for global infrastructure settings (n8n, Evolution API, etc.)

CREATE TABLE IF NOT EXISTS public.system_config (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    key text UNIQUE NOT NULL,
    value text NOT NULL,
    description text,
    is_secret boolean DEFAULT true,
    updated_at timestamptz DEFAULT now(),
    updated_by uuid REFERENCES public.profiles(id)
);

-- RLS: Only SuperAdmins can read/write to system_config
ALTER TABLE public.system_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Superadmins can manage system_config" ON public.system_config
    USING (EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() AND is_superadmin = true
    ))
    WITH CHECK (EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE id = auth.uid() AND is_superadmin = true
    ));

-- Utility to get config value (internal only)
CREATE OR REPLACE FUNCTION public.get_system_config(p_key text)
RETURNS text AS $$
    SELECT value FROM public.system_config WHERE key = p_key;
$$ LANGUAGE sql SECURITY DEFINER;

-- Trigger for updated_at
CREATE TRIGGER update_system_config_updated_at
    BEFORE UPDATE ON public.system_config
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
