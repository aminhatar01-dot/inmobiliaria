
-- Create communication settings table
CREATE TABLE IF NOT EXISTS public.tenant_communication_settings (
    tenant_id uuid PRIMARY KEY REFERENCES public.tenants(id) ON DELETE CASCADE,
    
    -- SMTP Configuration
    smtp_host text,
    smtp_port integer DEFAULT 587,
    smtp_user text,
    smtp_pass text,
    smtp_from_name text,
    smtp_from_email text,
    smtp_secure boolean DEFAULT true,
    
    -- Resend Configuration (Free default option)
    resend_api_key text,
    
    -- WhatsApp Configuration
    whatsapp_mode text DEFAULT 'link', -- 'link' for manual redirected links, 'api' for future automated integration
    
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.tenant_communication_settings ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Tenants can view their own communication settings" ON public.tenant_communication_settings
    FOR SELECT USING (tenant_id = get_auth_tenant_id());

CREATE POLICY "Tenants can insert their own communication settings" ON public.tenant_communication_settings
    FOR INSERT WITH CHECK (tenant_id = get_auth_tenant_id());

CREATE POLICY "Tenants can update their own communication settings" ON public.tenant_communication_settings
    FOR UPDATE USING (tenant_id = get_auth_tenant_id());

-- Grant access
GRANT ALL ON public.tenant_communication_settings TO authenticated;
GRANT ALL ON public.tenant_communication_settings TO service_role;
