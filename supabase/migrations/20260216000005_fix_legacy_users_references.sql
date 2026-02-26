-- Comprehensive Fix for 'public.users' -> 'public.profiles' references
-- This script updates the helper function and RLS policies that might still be using the old table name

--------------------------------------------------------------------------------
-- 1. Fix the helper function get_auth_tenant_id
--------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
BEGIN
  RETURN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid());
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public;

--------------------------------------------------------------------------------
-- 2. Fix RLS Policies across key tables
-- We will DROP and RECREATE policies to ensure they use the correct table 'profiles'
--------------------------------------------------------------------------------

-- Table: public.tenants
DROP POLICY IF EXISTS "Users can view their own tenant" ON public.tenants;
CREATE POLICY "Users can view their own tenant" ON public.tenants
FOR SELECT USING (
  id IN (
    SELECT tenant_id FROM public.profiles WHERE id = auth.uid()
  )
);

-- Table: public.profiles
DROP POLICY IF EXISTS "Users can view profiles in their tenant" ON public.profiles;
CREATE POLICY "Users can view profiles in their tenant" ON public.profiles
FOR SELECT USING (
  tenant_id IN (
    SELECT tenant_id FROM public.profiles WHERE id = auth.uid()
  )
);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" ON public.profiles
FOR UPDATE USING (
  id = auth.uid()
);

-- Table: public.roles
DROP POLICY IF EXISTS "Users can view roles in their tenant" ON public.roles;
CREATE POLICY "Users can view roles in their tenant" ON public.roles
FOR SELECT USING (
  tenant_id IN (
    SELECT tenant_id FROM public.profiles WHERE id = auth.uid()
  )
);

-- Table: public.branches
DROP POLICY IF EXISTS "Users can view branches in their tenant" ON public.branches;
CREATE POLICY "Users can view branches in their tenant" ON public.branches
FOR SELECT USING (
  tenant_id IN (
    SELECT tenant_id FROM public.profiles WHERE id = auth.uid()
  )
);

--------------------------------------------------------------------------------
-- 3. Fix Properties RLS (The one causing the "relation does not exist" error)
--------------------------------------------------------------------------------

-- Table: public.properties
-- Policy for viewing properties in same tenant
DROP POLICY IF EXISTS "Users can view properties in their tenant" ON public.properties;
CREATE POLICY "Users can view properties in their tenant" ON public.properties
FOR SELECT USING (
  tenant_id IN (
    SELECT tenant_id FROM public.profiles WHERE id = auth.uid()
  )
);

-- Policy for viewing SHARED properties (Network Logic)
-- Original logic might have used public.users or get_auth_tenant_id() which was broken
DROP POLICY IF EXISTS "Partners can view shared properties" ON public.properties;
CREATE POLICY "Partners can view shared properties" ON public.properties
FOR SELECT USING (
  is_shared = true 
  AND 
  EXISTS (
    SELECT 1 FROM public.tenant_partnerships tp
    WHERE tp.status = 'active'
    AND (
      (tp.requester_tenant_id = properties.tenant_id AND tp.responder_tenant_id = (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()))
      OR
      (tp.responder_tenant_id = properties.tenant_id AND tp.requester_tenant_id = (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()))
    )
  )
);

--------------------------------------------------------------------------------
-- 4. Fix Automation Rules (if applicable)
--------------------------------------------------------------------------------
DROP POLICY IF EXISTS "Users can view automation rules" ON public.automation_rules;
CREATE POLICY "Users can view automation rules" ON public.automation_rules
FOR SELECT USING (
  tenant_id IN (
    SELECT tenant_id FROM public.profiles WHERE id = auth.uid()
  )
);
