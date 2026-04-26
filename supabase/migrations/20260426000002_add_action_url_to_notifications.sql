-- Migration: 20260426000002_add_action_url_to_notifications.sql
-- Description: Adds an action_url column to the notifications table to allow clickable notifications (e.g. WhatsApp links)

ALTER TABLE public.notifications
ADD COLUMN IF NOT EXISTS action_url text;
