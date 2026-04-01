-- Migration: 20260316000000_reminders.sql
-- Description: Add reminder fields and notifications table

-- Add fields to tasks
ALTER TABLE public.tasks 
ADD COLUMN IF NOT EXISTS reminder_hours integer DEFAULT 2,
ADD COLUMN IF NOT EXISTS reminder_channels text[] DEFAULT ARRAY['in-app'],
ADD COLUMN IF NOT EXISTS agent_reminder_sent boolean DEFAULT false;

-- Add fields to visits
ALTER TABLE public.visits
ADD COLUMN IF NOT EXISTS reminder_hours integer DEFAULT 2,
ADD COLUMN IF NOT EXISTS agent_reminder_channels text[] DEFAULT ARRAY['in-app'],
ADD COLUMN IF NOT EXISTS client_reminder_channels text[] DEFAULT ARRAY['email'],
ADD COLUMN IF NOT EXISTS agent_reminder_sent boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS client_reminder_sent boolean DEFAULT false;

-- Create notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title text NOT NULL,
    message text NOT NULL,
    type text, -- 'task_reminder', 'visit_reminder', 'system'
    read boolean DEFAULT false,
    related_id uuid, -- refers to task or visit
    created_at timestamptz DEFAULT now()
);

-- Enable RLS for notifications
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for notifications
DROP POLICY IF EXISTS "Users can view their own notifications" ON public.notifications;
CREATE POLICY "Users can view their own notifications" ON public.notifications 
FOR SELECT USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Users can update their own notifications" ON public.notifications;
CREATE POLICY "Users can update their own notifications" ON public.notifications 
FOR UPDATE USING (user_id = auth.uid());

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_notifications_user ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_tenant ON public.notifications(tenant_id);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON public.notifications(read);
