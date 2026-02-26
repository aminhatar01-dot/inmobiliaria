-- Migration: 20260225000001_fix_public_visibility.sql
-- Description: Enable anon access to available properties and their media.

-- 1. Property Visibility for Anon
DROP POLICY IF EXISTS "Public can see shared properties" ON public.properties;
DROP POLICY IF EXISTS "Public can see available properties" ON public.properties;

CREATE POLICY "Public can see available properties" 
ON public.properties FOR SELECT 
TO anon 
USING (status = 'available');

-- 2. Media Visibility for Anon
DROP POLICY IF EXISTS "Public can see shared media" ON public.property_media;
DROP POLICY IF EXISTS "Public can see available media" ON public.property_media;

CREATE POLICY "Public can see available media" 
ON public.property_media FOR SELECT 
TO anon 
USING (
  EXISTS (
    SELECT 1 FROM public.properties p 
    WHERE p.id = property_media.property_id 
    AND p.status = 'available'
  )
);

-- 3. Tenant Info for Anon (Already exists but ensuring)
DROP POLICY IF EXISTS "Public can see tenants" ON public.tenants;
CREATE POLICY "Public can see tenants" 
ON public.tenants FOR SELECT 
TO anon 
USING (true);

-- 4. Grant Permissions (Ensuring)
GRANT SELECT ON public.properties TO anon;
GRANT SELECT ON public.property_media TO anon;
GRANT SELECT ON public.tenants TO anon;
