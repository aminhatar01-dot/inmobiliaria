-- Migration: 20260228000006_enhance_automations.sql
-- Description: Add support for lead follow-up in automation rules

-- 1. Update action_type check constraint
-- We need to drop the existing constraint and add a new one including 'lead_follow_up'
DO $$ 
BEGIN
    ALTER TABLE public.automation_rules DROP CONSTRAINT IF EXISTS automation_rules_action_type_check;
    ALTER TABLE public.automation_rules ADD CONSTRAINT automation_rules_action_type_check 
    CHECK (action_type IN ('send_email', 'create_task', 'send_notification', 'update_lead_field', 'lead_follow_up'));
END $$;
