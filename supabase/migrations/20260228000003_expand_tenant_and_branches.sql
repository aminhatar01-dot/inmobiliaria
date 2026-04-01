-- Migration: 20260228000003_expand_tenant_and_branches.sql
-- Description: Add agency profile fields to tenants and contact fields to branches

-- 1. Expand Tenants
ALTER TABLE public.tenants 
ADD COLUMN IF NOT EXISTS logo_url TEXT,
ADD COLUMN IF NOT EXISTS phone TEXT,
ADD COLUMN IF NOT EXISTS email TEXT,
ADD COLUMN IF NOT EXISTS address TEXT,
ADD COLUMN IF NOT EXISTS website TEXT,
ADD COLUMN IF NOT EXISTS social_links JSONB DEFAULT '{}'::JSONB;

-- 2. Expand Branches
ALTER TABLE public.branches
ADD COLUMN IF NOT EXISTS phone TEXT,
ADD COLUMN IF NOT EXISTS email TEXT;
