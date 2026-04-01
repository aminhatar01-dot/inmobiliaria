-- Add token and email support to subscription invites
ALTER TABLE public.subscription_invites 
ADD COLUMN IF NOT EXISTS invitee_email TEXT,
ADD COLUMN IF NOT EXISTS token UUID DEFAULT gen_random_uuid(),
ADD COLUMN IF NOT EXISTS expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '7 days');

-- Make invitee_id nullable so we can invite by email first
ALTER TABLE public.subscription_invites 
ALTER COLUMN invitee_id DROP NOT NULL;

-- Add index for token lookup
CREATE INDEX IF NOT EXISTS idx_subscription_invites_token ON public.subscription_invites(token);
