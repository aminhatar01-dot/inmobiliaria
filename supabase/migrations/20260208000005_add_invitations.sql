-- Create Invitations table for agent management
CREATE TABLE IF NOT EXISTS public.invitations (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
  email text NOT NULL,
  name text,
  role_id uuid REFERENCES public.roles(id) ON DELETE SET NULL,
  branch_id uuid REFERENCES public.branches(id) ON DELETE SET NULL,
  status text DEFAULT 'pending',
  invited_at timestamptz DEFAULT now(),
  accepted_at timestamptz,
  UNIQUE(tenant_id, email)
);

ALTER TABLE public.invitations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Invitations
CREATE POLICY "Users can manage invitations of their tenant"
ON public.invitations FOR ALL
TO authenticated
USING (tenant_id = public.get_auth_tenant_id())
WITH CHECK (tenant_id = public.get_auth_tenant_id());
