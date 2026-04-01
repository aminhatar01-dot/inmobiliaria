-- Comprehensive Diagnostic Script
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
  SELECT count(*) INTO auth_user_count FROM auth.users;

  RAISE NOTICE 'Diagnostic Results:';
  RAISE NOTICE '- Tenants: %', tenant_count;
  RAISE NOTICE '- Profiles: %', profile_count;
  RAISE NOTICE '- Roles: %', role_count;
  RAISE NOTICE '- Branches: %', branch_count;
  RAISE NOTICE '- Auth Users: %', auth_user_count;

  -- Check if any profile has no tenant
  IF EXISTS (SELECT 1 FROM public.profiles WHERE tenant_id IS NULL) THEN
    RAISE NOTICE 'WARNING: Profiles with NULL tenant_id found!';
  END IF;

  -- Check if roles/branches exist for the tenants found in profiles
  RAISE NOTICE 'Tenant Check:';
  FOR u IN (SELECT DISTINCT tenant_id FROM public.profiles WHERE tenant_id IS NOT NULL) LOOP
    RAISE NOTICE '  Tenant % has % roles and % branches', 
      u.tenant_id, 
      (SELECT count(*) FROM public.roles WHERE tenant_id = u.tenant_id),
      (SELECT count(*) FROM public.branches WHERE tenant_id = u.tenant_id);
  END LOOP;
END;
$$;
