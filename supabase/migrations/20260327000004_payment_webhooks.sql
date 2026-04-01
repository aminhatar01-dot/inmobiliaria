-- Migration: 20260327000004_payment_webhooks.sql
-- Description: Adds idempotency table for Mercado Pago webhooks and hardens user_subscriptions RLS

-- 1. Create table for webhook idempotency
CREATE TABLE IF NOT EXISTS public.payment_events (
    id text PRIMARY KEY, -- Mercado Pago event ID or idempotency key
    type text NOT NULL,
    status text NOT NULL,
    payload jsonb NOT NULL,
    processed_at timestamptz DEFAULT now()
);

-- Protect internal table
ALTER TABLE public.payment_events ENABLE ROW LEVEL SECURITY;
-- No policies: completely locked out from client access. Only accessible by service role (webhooks).

-- 2. Ensure user_subscriptions can only be strictly modified by Service Role or Superadmin
-- Check if the table has RLS enabled
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;

-- Ensure users can only SEE their own subscriptions (and invites see theirs)
-- Note: We avoid modifying existing SELECT policies unless missing. Here we just add the lockdown for UPDATE/INSERT if needed.
-- In Supabase, if RLS is enabled, by default no access is granted without policies. 
-- Service role bypasses RLS entirely, which is how our webhook will update the `plan_id` and `current_period_end`.
