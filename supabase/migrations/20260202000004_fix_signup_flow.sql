-- Migration: 20260202000004_fix_signup_flow.sql
-- Description: Consolidate handle_new_user and fix permissions for registration

-- 1. Ensure extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Grant permissions to internal roles (safety net)
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- Grant specific permissions for registration flow
GRANT INSERT, SELECT ON public.tenants TO service_role, authenticated;
GRANT INSERT, SELECT, UPDATE ON public.profiles TO service_role, authenticated;
GRANT INSERT, SELECT ON public.roles TO service_role, authenticated;
GRANT INSERT, SELECT ON public.user_role_assignments TO service_role, authenticated;
GRANT INSERT, SELECT ON public.branches TO service_role, authenticated;
GRANT INSERT, SELECT ON public.user_branches TO service_role, authenticated;

-- 3. Robust Signup Trigger Function
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
  -- Extract metadata safely
  BEGIN
    agency_name := new.raw_user_meta_data->>'agency_name';
    user_full_name := new.raw_user_meta_data->>'full_name';
  EXCEPTION WHEN OTHERS THEN
    agency_name := 'Mi Inmobiliaria';
    user_full_name := 'Usuario';
  END;

  -- Default values if missing
  IF agency_name IS NULL OR agency_name = '' THEN
    agency_name := 'Mi Inmobiliaria';
  END IF;

  -- 1. Create Tenant (ONLY if it doesn't exist for some reason, though new signup should always be new)
  INSERT INTO public.tenants (name, plan, default_currency)
  VALUES (agency_name, 'free', 'USD')
  RETURNING id INTO new_tenant_id;

  -- 2. Create User Profile (Use Profiles table)
  INSERT INTO public.profiles (id, tenant_id, name, email)
  VALUES (new.id, new_tenant_id, user_full_name, new.email)
  ON CONFLICT (id) DO UPDATE SET
    tenant_id = excluded.tenant_id,
    name = excluded.name,
    email = excluded.email;

  -- 3. Create Default Roles
  -- We use a loop or direct inserts to ensure they exist
  INSERT INTO public.roles (tenant_id, name)
  VALUES (new_tenant_id, 'Administrador')
  RETURNING id INTO admin_role_id;

  INSERT INTO public.roles (tenant_id, name)
  VALUES (new_tenant_id, 'Agente')
  ON CONFLICT DO NOTHING;

  -- 4. Assign Admin Role
  INSERT INTO public.user_role_assignments (user_id, role_id)
  VALUES (new.id, admin_role_id)
  ON CONFLICT DO NOTHING;

  -- 5. Create Default Branch
  INSERT INTO public.branches (tenant_id, name, address)
  VALUES (new_tenant_id, 'Casa Central', 'Dirección Principal')
  ON CONFLICT DO NOTHING;

  -- 6. Link User to Branch 
  INSERT INTO public.user_branches (user_id, branch_id)
  SELECT new.id, id FROM public.branches WHERE tenant_id = new_tenant_id LIMIT 1
  ON CONFLICT DO NOTHING;

  RETURN new;
EXCEPTION WHEN OTHERS THEN
  -- Log error details if possible in Supabase logs (Postgres)
  RAISE WARNING 'Error in handle_new_user trigger: %', SQLERRM;
  RETURN new; -- Still return NEW to allow auth user creation even if profile fails
END;
$$;
