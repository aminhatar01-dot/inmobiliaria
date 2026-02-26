-- Create Network Invitations table
-- Used for inviting other agencies/tenants to connect
CREATE TABLE IF NOT EXISTS public.network_invitations (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
  recipient_email text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'expired')),
  token uuid DEFAULT uuid_generate_v4(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(sender_tenant_id, recipient_email)
);

ALTER TABLE public.network_invitations ENABLE ROW LEVEL SECURITY;

-- Create Tenant Partnerships table
-- Represents an active connection between two tenants (agencies)
CREATE TABLE IF NOT EXISTS public.tenant_partnerships (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  requester_tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
  responder_tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
  status text DEFAULT 'active' CHECK (status IN ('active', 'blocked')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  -- Ensure unique partnership direction doesn't matter for uniqueness, but we enforce order for index
  UNIQUE(requester_tenant_id, responder_tenant_id)
);

ALTER TABLE public.tenant_partnerships ENABLE ROW LEVEL SECURITY;

-- Creating indexes
CREATE INDEX idx_network_invitations_token ON public.network_invitations(token);
CREATE INDEX idx_network_invitations_email ON public.network_invitations(recipient_email);
CREATE INDEX idx_partnerships_requester ON public.tenant_partnerships(requester_tenant_id);
CREATE INDEX idx_partnerships_responder ON public.tenant_partnerships(responder_tenant_id);

-- RLS Policies

-- Network Invitations:
-- Senders can manage their sent invitations
CREATE POLICY "Users can manage sent network invitations"
ON public.network_invitations
FOR ALL
TO authenticated
USING (sender_tenant_id = public.get_auth_tenant_id())
WITH CHECK (sender_tenant_id = public.get_auth_tenant_id());

-- Unauthenticated users needs to read by token to accept invitation (middleware wil handle this context usually, 
-- but for simplicity we might keep it restricted and use a secure function)
-- For now, authenticated users can view invitations sent to their email
CREATE POLICY "Users can view invitations to their email"
ON public.network_invitations
FOR SELECT
TO authenticated
USING (recipient_email = (SELECT email FROM auth.users WHERE id = auth.uid()));

-- Tenant Partnerships:
-- Users can view partnerships where their tenant is involved
CREATE POLICY "Users can view their partnerships"
ON public.tenant_partnerships
FOR SELECT
TO authenticated
USING (
  requester_tenant_id = public.get_auth_tenant_id() OR 
  responder_tenant_id = public.get_auth_tenant_id()
);

-- Helper function to check if two tenants are partners
CREATE OR REPLACE FUNCTION public.are_tenants_partners(tenant_a uuid, tenant_b uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 
    FROM public.tenant_partnerships
    WHERE (requester_tenant_id = tenant_a AND responder_tenant_id = tenant_b AND status = 'active')
       OR (requester_tenant_id = tenant_b AND responder_tenant_id = tenant_a AND status = 'active')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update Property RLS to allow partners to see shared properties
-- We create a NEW policy for this specific case to avoid complexity in existing ones
CREATE POLICY "Partners can view shared properties"
ON public.properties
FOR SELECT
TO authenticated
USING (
  is_shared = true AND
  public.are_tenants_partners(tenant_id, public.get_auth_tenant_id())
);
