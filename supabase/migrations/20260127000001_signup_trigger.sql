-- Migration: 20260127000001_signup_trigger.sql
-- Description: Automate Tenant, Profile, Role, and Branch creation on user signup

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

  -- 2. Create User Profile
  INSERT INTO public.users (id, tenant_id, name, email)
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
  -- Assuming user_branches logic allows it or requires it. 
  -- Based on schema: user_branches (user_id, branch_id)
  INSERT INTO public.user_branches (user_id, branch_id)
  SELECT new.id, id FROM public.branches WHERE tenant_id = new_tenant_id LIMIT 1;

  RETURN new;
END;
$$;

-- Trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
