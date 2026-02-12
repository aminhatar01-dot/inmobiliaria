-- Fix for Shared Properties Media Visibility
-- Allow authenticated users to see media of shared properties, even from other tenants

DROP POLICY IF EXISTS "Users can see media" ON public.property_media;

CREATE POLICY "Users can see media"
ON public.property_media FOR SELECT
TO authenticated
USING (
  tenant_id = public.get_auth_tenant_id()
  OR
  EXISTS (
    SELECT 1 FROM public.properties
    WHERE public.properties.id = public.property_media.property_id
    AND public.properties.is_shared = true
  )
);
