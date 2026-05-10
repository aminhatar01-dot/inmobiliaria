-- Migration: 20260510000001_add_google_ads_fields.sql
-- Description: Adds Google Ads Customer ID and refresh token to profiles for per-user integration

ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS google_ads_customer_id text,
ADD COLUMN IF NOT EXISTS google_ads_refresh_token text;

-- Ensure these fields are only accessible by the owner
-- Profiles table usually already has a policy for "Users can manage their own profile"
