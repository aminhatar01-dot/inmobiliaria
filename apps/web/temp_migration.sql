ALTER TABLE public.network_invitations ADD COLUMN IF NOT EXISTS sender_id uuid REFERENCES public.profiles(id);
DROP POLICY IF EXISTS "Users can manage sent network invitations" ON public.network_invitations;
CREATE POLICY "Users can manage sent network invitations" ON public.network_invitations FOR ALL TO authenticated USING (sender_tenant_id = public.get_auth_tenant_id() OR sender_id = auth.uid()) WITH CHECK (sender_tenant_id = public.get_auth_tenant_id() OR sender_id = auth.uid());
