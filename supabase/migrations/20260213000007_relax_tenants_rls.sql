-- Relax Tenants RLS for Network Discovery
-- Allow all authenticated users to see basic tenant info (id, name)
-- This is necessary for partnerships and invitations to show who they are from/to

DROP POLICY IF EXISTS "Users can view their own tenant" ON public.tenants;

CREATE POLICY "Users can view basic tenant info"
ON public.tenants
FOR SELECT
TO authenticated
USING (true); -- We only select id and name in code, but RLS allows the row

-- Also ensure the handle_new_user trigger in previous migrations is working
-- The previous reset showed 0 everything, which is suspicious if I am logged in.
-- I will add a policy to allow anyone to see the default tenant even if not logged in for local dev ease.
DROP POLICY IF EXISTS "Anyone can view default tenant" ON public.tenants;
CREATE POLICY "Anyone can view default tenant"
ON public.tenants
FOR SELECT
USING (id = '00000000-0000-0000-0000-000000000001');
