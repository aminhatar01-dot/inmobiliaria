-- Fix RLS Policies for Roles and Branches
-- authenticated users need to be able to read roles and branches of their tenant
-- also allow anon for default tenant as demo fallback

-- Roles
DROP POLICY IF EXISTS "Users can view roles of their tenant" ON public.roles;

CREATE POLICY "Users can view roles of their tenant"
ON public.roles
FOR SELECT
USING (
  (auth.role() = 'authenticated' AND tenant_id = public.get_auth_tenant_id())
  OR 
  (tenant_id = '00000000-0000-0000-0000-000000000001')
);

-- Branches
DROP POLICY IF EXISTS "Users can view branches of their tenant" ON public.branches;

CREATE POLICY "Users can view branches of their tenant"
ON public.branches
FOR SELECT
USING (
  (auth.role() = 'authenticated' AND tenant_id = public.get_auth_tenant_id())
  OR 
  (tenant_id = '00000000-0000-0000-0000-000000000001')
);
