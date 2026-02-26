-- Migration: Update handle_new_user to support metadata from invitations
-- Description: Allows linking users to an existing tenant and assigning roles/branches from metadata

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  target_tenant_id uuid;
  target_role_id uuid;
  target_branch_id uuid;
  agency_name text;
  user_full_name text;
  is_invitation boolean := false;
BEGIN
  -- Extract metadata safely
  BEGIN
    target_tenant_id := (new.raw_user_meta_data->>'tenant_id')::uuid;
    target_role_id := (new.raw_user_meta_data->>'role_id')::uuid;
    target_branch_id := (new.raw_user_meta_data->>'branch_id')::uuid;
    user_full_name := new.raw_user_meta_data->>'full_name';
    
    IF target_tenant_id IS NOT NULL THEN
      is_invitation := true;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    is_invitation := false;
  END;

  IF is_invitation THEN
    -- 1. Create User Profile linked to the invited tenant
    INSERT INTO public.profiles (id, tenant_id, name, email)
    VALUES (new.id, target_tenant_id, COALESCE(user_full_name, 'Usuario'), new.email)
    ON CONFLICT (id) DO UPDATE SET
      tenant_id = excluded.tenant_id,
      name = excluded.name,
      email = excluded.email;

    -- 2. Assign Invited Role
    IF target_role_id IS NOT NULL THEN
      INSERT INTO public.user_role_assignments (user_id, role_id)
      VALUES (new.id, target_role_id)
      ON CONFLICT DO NOTHING;
    END IF;

    -- 3. Link User to Invited Branch
    IF target_branch_id IS NOT NULL THEN
      INSERT INTO public.user_branches (user_id, branch_id)
      VALUES (new.id, target_branch_id)
      ON CONFLICT DO NOTHING;
    END IF;

    -- 4. Mark invitation as accepted if it exists
    UPDATE public.invitations
    SET status = 'accepted', accepted_at = now()
    WHERE email = new.email AND tenant_id = target_tenant_id;

  ELSE
    -- Original Signup Flow (Create New Tenant)
    BEGIN
      agency_name := new.raw_user_meta_data->>'agency_name';
      user_full_name := new.raw_user_meta_data->>'full_name';
    EXCEPTION WHEN OTHERS THEN
      agency_name := 'Mi Inmobiliaria';
      user_full_name := 'Usuario';
    END;

    IF agency_name IS NULL OR agency_name = '' THEN
      agency_name := 'Mi Inmobiliaria';
    END IF;

    -- 1. Create Tenant
    INSERT INTO public.tenants (name, plan, default_currency)
    VALUES (agency_name, 'free', 'USD')
    RETURNING id INTO target_tenant_id;

    -- 2. Create User Profile
    INSERT INTO public.profiles (id, tenant_id, name, email)
    VALUES (new.id, target_tenant_id, COALESCE(user_full_name, 'Usuario'), new.email)
    ON CONFLICT (id) DO UPDATE SET
      tenant_id = excluded.tenant_id,
      name = excluded.name,
      email = excluded.email;

    -- 3. Create Default Roles & Assign Admin
    INSERT INTO public.roles (tenant_id, name)
    VALUES (target_tenant_id, 'Administrador')
    RETURNING id INTO target_role_id;

    INSERT INTO public.roles (tenant_id, name)
    VALUES (target_tenant_id, 'Agente')
    ON CONFLICT DO NOTHING;

    INSERT INTO public.user_role_assignments (user_id, role_id)
    VALUES (new.id, target_role_id)
    ON CONFLICT DO NOTHING;

    -- 4. Create Default Branch & Link
    INSERT INTO public.branches (tenant_id, name, address)
    VALUES (target_tenant_id, 'Casa Central', 'Dirección Principal')
    RETURNING id INTO target_branch_id;

    INSERT INTO public.user_branches (user_id, branch_id)
    VALUES (new.id, target_branch_id)
    ON CONFLICT DO NOTHING;
  END IF;

  RETURN new;
EXCEPTION WHEN OTHERS THEN
  RAISE WARNING 'Error in handle_new_user trigger: %', SQLERRM;
  RETURN new;
END;
$$;
