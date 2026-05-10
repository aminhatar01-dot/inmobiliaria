-- Fix status check for network_invitations to include 'cancelled'
ALTER TABLE public.network_invitations 
DROP CONSTRAINT IF EXISTS network_invitations_status_check;

ALTER TABLE public.network_invitations 
ADD CONSTRAINT network_invitations_status_check 
CHECK (status IN ('pending', 'accepted', 'rejected', 'expired', 'cancelled'));

-- Add missing RLS policies for tenant_partnerships
-- Allow users to create partnerships (needed for accepting invitations)
CREATE POLICY "Users can create partnerships"
ON public.tenant_partnerships
FOR INSERT
TO authenticated
WITH CHECK (
  requester_tenant_id = public.get_auth_tenant_id() OR 
  responder_tenant_id = public.get_auth_tenant_id()
);

-- Allow users to update their partnerships (needed for blocking)
CREATE POLICY "Users can update their partnerships"
ON public.tenant_partnerships
FOR UPDATE
TO authenticated
USING (
  requester_tenant_id = public.get_auth_tenant_id() OR 
  responder_tenant_id = public.get_auth_tenant_id()
)
WITH CHECK (
  requester_tenant_id = public.get_auth_tenant_id() OR 
  responder_tenant_id = public.get_auth_tenant_id()
);

-- Ensure users can update their sent/received invitations
-- The existing "manage sent network invitations" (FOR ALL) already covers sent ones.
-- But we need a policy for RECIPIENTS to update status to 'accepted' or 'rejected'.
CREATE POLICY "Recipients can update invitation status"
ON public.network_invitations
FOR UPDATE
TO authenticated
USING (
  recipient_email = (SELECT email FROM auth.users WHERE id = auth.uid())
)
WITH CHECK (
  recipient_email = (SELECT email FROM auth.users WHERE id = auth.uid())
);
