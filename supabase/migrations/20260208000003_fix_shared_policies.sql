-- Fix for Shared Properties Migration
-- This migration ensures correct column existence and policy updates

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='properties' AND column_name='is_shared') THEN
        ALTER TABLE public.properties ADD COLUMN is_shared BOOLEAN DEFAULT FALSE;
    END IF;
END $$;

-- Drop existing policies with the correct names found in 20260207000003_consolidated_rls_fixes.sql
DROP POLICY IF EXISTS "Users can see properties" ON public.properties;
DROP POLICY IF EXISTS "Users can update properties" ON public.properties;
DROP POLICY IF EXISTS "Users can view their own or shared properties" ON public.properties;
DROP POLICY IF EXISTS "Users can update their own properties" ON public.properties;

-- 1. SELECT Policy: Allow own properties OR shared properties
CREATE POLICY "Users can see properties"
ON public.properties FOR SELECT
TO authenticated
USING (
  tenant_id = public.get_auth_tenant_id()
  OR
  is_shared = true
);

-- 2. UPDATE Policy: Allow own properties
CREATE POLICY "Users can update properties"
ON public.properties FOR UPDATE
TO authenticated
USING (tenant_id = public.get_auth_tenant_id())
WITH CHECK (tenant_id = public.get_auth_tenant_id());
