-- Migration: 20260202000002_finalize_schema_naming.sql
-- Description: Rename public.users to public.profiles and update related dependencies

-- 1. Rename table
ALTER TABLE public.users RENAME TO profiles;

-- 2. Update helper function to use the new name
CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
  -- Using SECURITY DEFINER to bypass RLS on public.profiles table for the lookup
  SELECT tenant_id FROM public.profiles WHERE id = auth.uid();
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public;

-- 3. Update Signup Trigger function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  new_tenant_id uuid;
  admin_role_id uuid;
  agency_name text;
  user_full_name text;
BEGIN
  -- Extract metadata
  agency_name := new.raw_user_meta_data->>'agency_name';
  user_full_name := new.raw_user_meta_data->>'full_name';

  -- Default agency name if missing
  IF agency_name IS NULL OR agency_name = '' THEN
    agency_name := 'Mi Inmobiliaria';
  END IF;

  -- 1. Create Tenant
  INSERT INTO public.tenants (name, plan, default_currency)
  VALUES (agency_name, 'free', 'USD')
  RETURNING id INTO new_tenant_id;

  -- 2. Create User Profile (Updated to use profiles table)
  INSERT INTO public.profiles (id, tenant_id, name, email)
  VALUES (new.id, new_tenant_id, user_full_name, new.email);

  -- 3. Create Default Roles
  INSERT INTO public.roles (tenant_id, name)
  VALUES (new_tenant_id, 'Admin')
  RETURNING id INTO admin_role_id;

  INSERT INTO public.roles (tenant_id, name)
  VALUES (new_tenant_id, 'Agente');

  -- 4. Assign Admin Role to new user
  INSERT INTO public.user_role_assignments (user_id, role_id)
  VALUES (new.id, admin_role_id);

  -- 5. Create Default Branch
  INSERT INTO public.branches (tenant_id, name, address)
  VALUES (new_tenant_id, 'Casa Central', 'Dirección Principal');

  -- 6. Link User to Branch 
  INSERT INTO public.user_branches (user_id, branch_id)
  SELECT new.id, id FROM public.branches WHERE tenant_id = new_tenant_id LIMIT 1;

  RETURN new;
END;
$$;
