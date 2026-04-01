-- Migration: 20260228000004_settings_rls_policies.sql
-- Description: Add RLS policies for tenants and branches

-- 1. Tenants Policies
DROP POLICY IF EXISTS "Users can see their own tenant" ON public.tenants;
CREATE POLICY "Users can see their own tenant" 
ON public.tenants FOR SELECT 
TO authenticated 
USING (id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can update their own tenant" ON public.tenants;
CREATE POLICY "Users can update their own tenant" 
ON public.tenants FOR UPDATE 
TO authenticated 
USING (id = public.get_auth_tenant_id())
WITH CHECK (id = public.get_auth_tenant_id());

-- 2. Branches Policies
DROP POLICY IF EXISTS "Users can see their own branches" ON public.branches;
CREATE POLICY "Users can see their own branches" 
ON public.branches FOR SELECT 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can manage their own branches" ON public.branches;
CREATE POLICY "Users can manage their own branches" 
ON public.branches FOR ALL 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id())
WITH CHECK (tenant_id = public.get_auth_tenant_id());
