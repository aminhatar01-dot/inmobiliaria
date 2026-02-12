-- Consolidated Fixes for Properties and Media RLS

-- 1. Ensure the helper function is correct and robust
CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
BEGIN
  RETURN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid());
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public;

GRANT EXECUTE ON FUNCTION public.get_auth_tenant_id() TO authenticated;

-- 2. Robust Policies for Properties
DROP POLICY IF EXISTS "Users can see properties of their tenant" ON public.properties;
DROP POLICY IF EXISTS "Users can manage properties of their tenant" ON public.properties;

CREATE POLICY "Users can see properties" 
ON public.properties FOR SELECT 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can insert properties" 
ON public.properties FOR INSERT 
TO authenticated 
WITH CHECK (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can update properties" 
ON public.properties FOR UPDATE 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id())
WITH CHECK (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can delete properties" 
ON public.properties FOR DELETE 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id());

-- 3. Robust Policies for Property Media
DROP POLICY IF EXISTS "Users can see media of their tenant" ON public.property_media;
DROP POLICY IF EXISTS "Users can manage media of their tenant" ON public.property_media;

CREATE POLICY "Users can see media" 
ON public.property_media FOR SELECT 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can insert media" 
ON public.property_media FOR INSERT 
TO authenticated 
WITH CHECK (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can update media" 
ON public.property_media FOR UPDATE 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id())
WITH CHECK (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can delete media" 
ON public.property_media FOR DELETE 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id());

-- 4. Ensure Leads policies are also explicit (fixes OwnerSelector)
DROP POLICY IF EXISTS "Users can view leads of their tenant" ON public.leads;
DROP POLICY IF EXISTS "Users can manage leads of their tenant" ON public.leads;

CREATE POLICY "Users can see leads" 
ON public.leads FOR SELECT 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can manage leads" 
ON public.leads FOR ALL 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id())
WITH CHECK (tenant_id = public.get_auth_tenant_id());
