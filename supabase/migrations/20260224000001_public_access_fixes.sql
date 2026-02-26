-- Migration: 20260224000001_public_access_fixes.sql
-- Description: Enable public access for shared properties, tenants (by slug), and lead creation via public portal.

-- 1. Grant permissions to anon role
GRANT SELECT ON public.tenants TO anon;
GRANT INSERT ON public.leads TO anon;
GRANT SELECT ON public.property_media TO anon;
GRANT SELECT ON public.properties TO anon;

-- 2. Public Policies for Tenants
-- Anyone can see basic tenant info (needed for slug resolution)
DROP POLICY IF EXISTS "Public can see tenants" ON public.tenants;
CREATE POLICY "Public can see tenants" 
ON public.tenants FOR SELECT 
TO anon 
USING (true);

-- 3. Public Policies for Shared Properties
DROP POLICY IF EXISTS "Public can see shared properties" ON public.properties;
CREATE POLICY "Public can see shared properties" 
ON public.properties FOR SELECT 
TO anon 
USING (is_shared = true);

-- 4. Public Policies for Property Media
-- Media linked to shared properties should be visible
DROP POLICY IF EXISTS "Public can see shared media" ON public.property_media;
CREATE POLICY "Public can see shared media" 
ON public.property_media FOR SELECT 
TO anon 
USING (
  EXISTS (
    SELECT 1 FROM public.properties p 
    WHERE p.id = property_media.property_id 
    AND p.is_shared = true
  )
);

-- 5. Public Policies for Leads (Contact Form)
-- Allow public portal to create leads
DROP POLICY IF EXISTS "Public can create leads" ON public.leads;
CREATE POLICY "Public can create leads" 
ON public.leads FOR INSERT 
TO anon 
WITH CHECK (source = 'website');
