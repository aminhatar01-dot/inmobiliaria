-- Diagnostic Migration
DO $$
DECLARE
  profile_count int;
  tenant_count int;
  role_count int;
  branch_count int;
  auth_user_count int;
BEGIN
  SELECT count(*) INTO profile_count FROM public.profiles;
  SELECT count(*) INTO tenant_count FROM public.tenants;
  SELECT count(*) INTO role_count FROM public.roles;
  SELECT count(*) INTO branch_count FROM public.branches;
  
  -- auth.users might not be accessible if reset wipes everything but let's try
  BEGIN
    SELECT count(*) INTO auth_user_count FROM auth.users;
  EXCEPTION WHEN OTHERS THEN
    auth_user_count := -1;
  END;

  RAISE NOTICE 'DIAGNOSTIC - Tenants: %', tenant_count;
  RAISE NOTICE 'DIAGNOSTIC - Profiles: %', profile_count;
  RAISE NOTICE 'DIAGNOSTIC - Roles: %', role_count;
  RAISE NOTICE 'DIAGNOSTIC - Branches: %', branch_count;
  RAISE NOTICE 'DIAGNOSTIC - Auth Users: %', auth_user_count;

  -- Verify specific tenant for roles - 00000000-0000-0000-0000-000000000001
  RAISE NOTICE 'DIAGNOSTIC - Roles for Default Tenant: %', (SELECT count(*) FROM public.roles WHERE tenant_id = '00000000-0000-0000-0000-000000000001');
  RAISE NOTICE 'DIAGNOSTIC - Branches for Default Tenant: %', (SELECT count(*) FROM public.branches WHERE tenant_id = '00000000-0000-0000-0000-000000000001');
END;
$$;
