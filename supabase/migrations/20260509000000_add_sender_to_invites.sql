-- Add sender_id to network_invitations to know who started the connection
ALTER TABLE public.network_invitations ADD COLUMN IF NOT EXISTS sender_id uuid REFERENCES public.profiles(id);

-- Update RLS for network_invitations to include sender_id check
DROP POLICY IF EXISTS "Users can manage sent network invitations" ON public.network_invitations;
CREATE POLICY "Users can manage sent network invitations"
ON public.network_invitations
FOR ALL
TO authenticated
USING (sender_tenant_id = public.get_auth_tenant_id() OR sender_id = auth.uid())
WITH CHECK (sender_tenant_id = public.get_auth_tenant_id() OR sender_id = auth.uid());
