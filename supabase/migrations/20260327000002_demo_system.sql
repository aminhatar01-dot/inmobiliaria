-- Migration: 20260327000002_demo_system.sql
-- Adds superadmin flag to profiles and creates the demo_sessions table

-- Add superadmin flag to profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_superadmin boolean DEFAULT false;

-- Create demo_sessions table
CREATE TABLE IF NOT EXISTS public.demo_sessions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text NOT NULL UNIQUE,
    password_code text NOT NULL,
    expires_at timestamptz NOT NULL,
    used_at timestamptz,
    auth_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.demo_sessions ENABLE ROW LEVEL SECURITY;

-- Only superadmins can view/manage demo sessions (via service role from server actions)
-- Regular users cannot access this table at all
CREATE POLICY "Superadmins can manage demo sessions" ON public.demo_sessions
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND is_superadmin = true
        )
    );

-- Index for fast lookups by email
CREATE INDEX IF NOT EXISTS idx_demo_sessions_email ON public.demo_sessions(email);
CREATE INDEX IF NOT EXISTS idx_demo_sessions_expires ON public.demo_sessions(expires_at);
