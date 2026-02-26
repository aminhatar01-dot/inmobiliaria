-- Sync Auth Users to Profiles (Repair Script)
-- This is needed because db reset might wipe public.profiles but keep auth.users

DO $$
DECLARE
  u record;
  new_tenant_id uuid;
  admin_role_id uuid;
BEGIN
  FOR u IN SELECT * FROM auth.users LOOP
    -- Check if profile exists
    IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = u.id) THEN
      RAISE NOTICE 'Restoring profile for user %', u.email;

      -- Create Tenant
      INSERT INTO public.tenants (name, plan, default_currency)
      VALUES (COALESCE(u.raw_user_meta_data->>'agency_name', 'Mi Inmobiliaria'), 'free', 'USD')
      RETURNING id INTO new_tenant_id;

      -- Create Profile
      INSERT INTO public.profiles (id, tenant_id, name, email)
      VALUES (u.id, new_tenant_id, COALESCE(u.raw_user_meta_data->>'full_name', 'Usuario'), u.email);

      -- Create Roles
      INSERT INTO public.roles (tenant_id, name) VALUES (new_tenant_id, 'Administrador') RETURNING id INTO admin_role_id;
      INSERT INTO public.roles (tenant_id, name) VALUES (new_tenant_id, 'Agente');

      -- Create Branch
      INSERT INTO public.branches (tenant_id, name, address) VALUES (new_tenant_id, 'Casa Central', 'Oficina Principal');

      -- Assign Admin Role
      INSERT INTO public.user_role_assignments (user_id, role_id) VALUES (u.id, admin_role_id);

      -- Assign Branch
      INSERT INTO public.user_branches (user_id, branch_id)
      SELECT u.id, id FROM public.branches WHERE tenant_id = new_tenant_id LIMIT 1;
    END IF;
  END LOOP;
END;
$$;
