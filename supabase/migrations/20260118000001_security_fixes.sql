-- Migration: 20260118000001_security_fixes.sql
-- Description: Resolve P0 (Missing RLS Policies) and P2 (Missing tenant_id in property_media)

-- 1. Fix property_media structure (P2)
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'property_media' AND column_name = 'tenant_id') THEN
        ALTER TABLE public.property_media ADD COLUMN tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE;
        
        -- Backfill existing data
        UPDATE public.property_media pm 
        SET tenant_id = p.tenant_id 
        FROM public.properties p 
        WHERE pm.property_id = p.id;
        
        -- Make it mandatory for future entries
        ALTER TABLE public.property_media ALTER COLUMN tenant_id SET NOT NULL;
    END IF;
END $$;

-- 2. Helper function for RLS
CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
  -- Using SECURITY DEFINER to bypass RLS on public.users table for the lookup
  SELECT tenant_id FROM public.users WHERE id = auth.uid();
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public;

-- 3. Apply RLS Policies (P0)

-- Helper to drop existing policies if they exist (to avoid errors on re-run)
-- tenants
DROP POLICY IF EXISTS "Users can view their own tenant" ON public.tenants;
CREATE POLICY "Users can view their own tenant" ON public.tenants FOR SELECT USING (id = public.get_auth_tenant_id());

-- branches
DROP POLICY IF EXISTS "Users can view branches of their tenant" ON public.branches;
CREATE POLICY "Users can view branches of their tenant" ON public.branches FOR SELECT USING (tenant_id = public.get_auth_tenant_id());
CREATE POLICY "Admins can manage branches of their tenant" ON public.branches FOR ALL USING (tenant_id = public.get_auth_tenant_id());

-- roles
DROP POLICY IF EXISTS "Users can view roles of their tenant" ON public.roles;
CREATE POLICY "Users can view roles of their tenant" ON public.roles FOR SELECT USING (tenant_id = public.get_auth_tenant_id());

-- permissions (Global catalog - read only for authenticated)
DROP POLICY IF EXISTS "Authenticated users can view permissions" ON public.permissions;
CREATE POLICY "Authenticated users can view permissions" ON public.permissions FOR SELECT USING (auth.role() = 'authenticated');

-- role_permissions
DROP POLICY IF EXISTS "Users can view role permissions" ON public.role_permissions;
CREATE POLICY "Users can view role permissions" ON public.role_permissions FOR SELECT USING (
    role_id IN (SELECT id FROM public.roles WHERE tenant_id = public.get_auth_tenant_id())
);

-- users (Profiles)
DROP POLICY IF EXISTS "Users can view profiles in their tenant" ON public.users;
CREATE POLICY "Users can view profiles in their tenant" ON public.users FOR SELECT USING (tenant_id = public.get_auth_tenant_id());
DROP POLICY IF EXISTS "Users can update their own profile" ON public.users;
CREATE POLICY "Users can update their own profile" ON public.users FOR UPDATE USING (id = auth.uid());

-- user_role_assignments
DROP POLICY IF EXISTS "Users can view role assignments in their tenant" ON public.user_role_assignments;
CREATE POLICY "Users can view role assignments in their tenant" ON public.user_role_assignments FOR SELECT USING (
    user_id IN (SELECT id FROM public.users WHERE tenant_id = public.get_auth_tenant_id())
);

-- properties
DROP POLICY IF EXISTS "Users can see properties of their tenant" ON public.properties;
CREATE POLICY "Users can see properties of their tenant" ON public.properties FOR SELECT USING (tenant_id = public.get_auth_tenant_id());
DROP POLICY IF EXISTS "Users can manage properties of their tenant" ON public.properties;
CREATE POLICY "Users can manage properties of their tenant" ON public.properties FOR ALL USING (tenant_id = public.get_auth_tenant_id());

-- property_media
DROP POLICY IF EXISTS "Users can see media of their tenant" ON public.property_media;
CREATE POLICY "Users can see media of their tenant" ON public.property_media FOR SELECT USING (tenant_id = public.get_auth_tenant_id());
DROP POLICY IF EXISTS "Users can manage media of their tenant" ON public.property_media;
CREATE POLICY "Users can manage media of their tenant" ON public.property_media FOR ALL USING (tenant_id = public.get_auth_tenant_id());
