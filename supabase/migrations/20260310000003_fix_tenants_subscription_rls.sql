-- Migration: 20260310000003_fix_tenants_subscription_rls.sql
-- Description: Allow authenticated users to create their own tenant (agency) and update it.

-- 1. Allow authenticated users to insert a new tenant
-- This is needed for the onboarding flow when a user doesn't have an agency yet.
DROP POLICY IF EXISTS "Users can insert their own tenant" ON public.tenants;
CREATE POLICY "Users can insert their own tenant"
ON public.tenants
FOR INSERT
TO authenticated
WITH CHECK (true); -- We rely on the server action and trigger to link it to the user

-- 2. Allow users to update their own tenant
-- This is needed to change subscription plans.
DROP POLICY IF EXISTS "Users can update their own tenant" ON public.tenants;
CREATE POLICY "Users can update their own tenant"
ON public.tenants
FOR UPDATE
TO authenticated
USING (id = public.get_auth_tenant_id())
WITH CHECK (id = public.get_auth_tenant_id());
