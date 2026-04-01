-- Migration: 20260228000002_add_lead_to_conversations.sql
-- Description: Add lead_id to conversations table to support messaging with clients

ALTER TABLE public.conversations 
ADD COLUMN IF NOT EXISTS lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE;

-- Add index for performance
CREATE INDEX IF NOT EXISTS idx_conversations_lead ON public.conversations(lead_id);

-- Update RLS for conversations to ensure agents can only see conversations linked to leads if they belong to the same tenant (already covered by existing tenant_id check)
-- But we might want to add a specific policy for agents assigned to the lead?
-- For now, the tenant-level policy is sufficient for a first version.
