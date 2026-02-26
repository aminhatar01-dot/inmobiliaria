-- Migration: 20260224000002_fix_rls_recursion.sql
-- Description: Fix infinite recursion in profiles and storage.objects RLS policies.

-- 1. Ensure get_auth_tenant_id is optimized and secure
CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
BEGIN
  -- We query the table using SECURITY DEFINER to bypass RLS and avoid recursion
  RETURN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid());
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public;

-- 2. Fix Profils RLS (The root of the recursion)
DROP POLICY IF EXISTS "Users can view profiles in their tenant" ON public.profiles;

CREATE POLICY "Users can view profiles in their tenant" 
ON public.profiles FOR SELECT 
TO authenticated 
USING (
    id = auth.uid() -- Always allow seeing your own profile
    OR 
    tenant_id = public.get_auth_tenant_id() -- Use the security definer function for others
);

-- 3. Fix Storage Policies (Remove subqueries that might trigger RLS elsewhere)
-- Properties Bucket
DROP POLICY IF EXISTS "Authenticated Upload" ON storage.objects;
CREATE POLICY "Authenticated Upload" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (
    bucket_id = 'properties' 
    AND (public.get_auth_tenant_id() IS NOT NULL) -- Ensure user belongs to a tenant
);

-- Documents Bucket (Cleanup)
DROP POLICY IF EXISTS "Tenant Isolated View Documents" ON storage.objects;
DROP POLICY IF EXISTS "Tenant Isolated Upload Documents" ON storage.objects;

CREATE POLICY "Tenant Isolated View Documents" 
ON storage.objects FOR SELECT 
TO authenticated 
USING (
    bucket_id = 'documents' 
    AND (
        (metadata->>'tenant_id')::uuid = public.get_auth_tenant_id()
    )
);

CREATE POLICY "Tenant Isolated Upload Documents" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (
    bucket_id = 'documents' 
    AND (
        (metadata->>'tenant_id')::uuid = public.get_auth_tenant_id()
    )
);
