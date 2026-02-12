-- Migration: 20260208000006_fix_agent_management_rls.sql
-- Description: Allow management of team roles and branch assignments

-- user_role_assignments
DROP POLICY IF EXISTS "Users can view role assignments in their tenant" ON public.user_role_assignments;
DROP POLICY IF EXISTS "Users can manage role assignments" ON public.user_role_assignments;

CREATE POLICY "Users can see role assignments"
ON public.user_role_assignments FOR SELECT
TO authenticated
USING (
  user_id IN (SELECT id FROM public.profiles WHERE tenant_id = public.get_auth_tenant_id())
);

CREATE POLICY "Users can manage role assignments"
ON public.user_role_assignments FOR ALL
TO authenticated
USING (
  user_id IN (SELECT id FROM public.profiles WHERE tenant_id = public.get_auth_tenant_id())
)
WITH CHECK (
  user_id IN (SELECT id FROM public.profiles WHERE tenant_id = public.get_auth_tenant_id())
  AND
  role_id IN (SELECT id FROM public.roles WHERE tenant_id = public.get_auth_tenant_id())
);

-- user_branches
DROP POLICY IF EXISTS "Users can manage user branches" ON public.user_branches;

CREATE POLICY "Users can see user branches"
ON public.user_branches FOR SELECT
TO authenticated
USING (
  user_id IN (SELECT id FROM public.profiles WHERE tenant_id = public.get_auth_tenant_id())
);

CREATE POLICY "Users can manage user branches"
ON public.user_branches FOR ALL
TO authenticated
USING (
  user_id IN (SELECT id FROM public.profiles WHERE tenant_id = public.get_auth_tenant_id())
)
WITH CHECK (
  user_id IN (SELECT id FROM public.profiles WHERE tenant_id = public.get_auth_tenant_id())
  AND
  branch_id IN (SELECT id FROM public.branches WHERE tenant_id = public.get_auth_tenant_id())
);
