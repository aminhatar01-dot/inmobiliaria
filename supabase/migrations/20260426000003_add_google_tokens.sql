-- Migration: 20260426000003_add_google_tokens.sql
-- Description: Adds Google OAuth tokens to tenant_communication_settings for Gmail and Calendar integration

ALTER TABLE public.tenant_communication_settings
ADD COLUMN IF NOT EXISTS google_access_token text,
ADD COLUMN IF NOT EXISTS google_refresh_token text;
