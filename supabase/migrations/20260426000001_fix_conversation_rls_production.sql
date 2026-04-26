-- Migration: Fix conversation_participants infinite recursion on production
-- This addresses the PostgreSQL error code 42P17: "infinite recursion detected in policy for relation conversation_participants"
-- This migration is idempotent and safe to re-run.

-- 1. Create/update the helper function that breaks the recursion cycle
-- Using SECURITY DEFINER to bypass RLS checks within the function context
CREATE OR REPLACE FUNCTION public.check_is_conversation_participant(conv_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 
        FROM conversation_participants 
        WHERE conversation_id = conv_id 
        AND user_id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- 2. Drop any existing problematic policies and re-create them using the helper
DROP POLICY IF EXISTS "Users can view participants of their conversations" ON conversation_participants;
DROP POLICY IF EXISTS "Users can add participants to conversations they're in" ON conversation_participants;

CREATE POLICY "Users can view participants of their conversations"
    ON conversation_participants FOR SELECT
    USING (
        public.check_is_conversation_participant(conversation_id)
    );

CREATE POLICY "Users can add participants to conversations they're in"
    ON conversation_participants FOR INSERT
    WITH CHECK (
        public.check_is_conversation_participant(conversation_id)
        OR 
        -- Allow adding yourself to a conversation created for your tenant
        EXISTS (
            SELECT 1 FROM conversations 
            WHERE id = conversation_id 
            AND tenant_id = public.get_auth_tenant_id()
        )
    );

-- 3. Fix messages policies to also use the helper function
DROP POLICY IF EXISTS "Users can view messages in their conversations" ON messages;
DROP POLICY IF EXISTS "Users can send messages to their conversations" ON messages;

CREATE POLICY "Users can view messages in their conversations"
    ON messages FOR SELECT
    USING (
        public.check_is_conversation_participant(conversation_id)
    );

CREATE POLICY "Users can send messages to their conversations"
    ON messages FOR INSERT
    WITH CHECK (
        public.check_is_conversation_participant(conversation_id)
        AND sender_id = auth.uid()
    );

-- 4. Ensure the tenant_communication_settings table exists for the settings page
CREATE TABLE IF NOT EXISTS public.tenant_communication_settings (
    tenant_id UUID PRIMARY KEY REFERENCES public.tenants(id),
    smtp_host TEXT,
    smtp_port INTEGER DEFAULT 587,
    smtp_user TEXT,
    smtp_pass TEXT,
    smtp_from_name TEXT,
    smtp_from_email TEXT,
    resend_api_key TEXT,
    whatsapp_mode TEXT DEFAULT 'link',
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.tenant_communication_settings ENABLE ROW LEVEL SECURITY;

-- Allow tenants to manage their own communication settings
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'tenant_communication_settings' AND policyname = 'Tenants can manage their own communication settings') THEN
        CREATE POLICY "Tenants can manage their own communication settings"
            ON public.tenant_communication_settings FOR ALL
            USING (tenant_id = public.get_auth_tenant_id());
    END IF;
END $$;

-- 5. Ensure notifications table exists for reminders
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    tenant_id UUID NOT NULL REFERENCES public.tenants(id),
    user_id UUID NOT NULL REFERENCES public.profiles(id),
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT DEFAULT 'info',
    related_id TEXT,
    read BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'notifications' AND policyname = 'Users can view their own notifications') THEN
        CREATE POLICY "Users can view their own notifications"
            ON public.notifications FOR SELECT
            USING (user_id = auth.uid());
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'notifications' AND policyname = 'Users can update their own notifications') THEN
        CREATE POLICY "Users can update their own notifications"
            ON public.notifications FOR UPDATE
            USING (user_id = auth.uid());
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'notifications' AND policyname = 'System can insert notifications') THEN
        CREATE POLICY "System can insert notifications"
            ON public.notifications FOR INSERT
            WITH CHECK (tenant_id = public.get_auth_tenant_id());
    END IF;
END $$;

-- 6. Add phone column to profiles if missing (needed for WhatsApp reminders)
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS phone TEXT;
