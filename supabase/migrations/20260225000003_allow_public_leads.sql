-- Migration: 20260225000003_allow_public_leads.sql
-- Description: Allow anon users to create leads via public portal.

-- 1. Allow public insert for leads
DROP POLICY IF EXISTS "Public can create leads" ON public.leads;
CREATE POLICY "Public can create leads" 
ON public.leads FOR INSERT 
TO anon 
WITH CHECK (true);

-- 2. Grant insert permission
GRANT INSERT ON public.leads TO anon;

-- 3. Ensure sequences are accessible (if any, though UUIDs are used mostly)
-- No serial columns in leads based on previous inspections.
