-- Migration: 20260421000003_per_agent_portals.sql
-- Description: Enable per-agent portal connections for individual account linking.

-- 1. Update portal_connections
ALTER TABLE public.portal_connections ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES public.profiles(id) DEFAULT auth.uid();

-- 2. Update property_publications
ALTER TABLE public.property_publications ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES public.profiles(id) DEFAULT auth.uid();

-- 3. Update RLS Policies for portal_connections
DROP POLICY IF EXISTS "Users can view their tenant's portal connections" ON public.portal_connections;
CREATE POLICY "Agents can view their own portal connections"
ON public.portal_connections FOR SELECT
USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Users can manage their tenant's portal connections" ON public.portal_connections;
CREATE POLICY "Agents can manage their own portal connections"
ON public.portal_connections FOR ALL
USING (user_id = auth.uid());

-- 4. Update RLS Policies for property_publications
DROP POLICY IF EXISTS "Users can view their tenant's property publications" ON public.property_publications;
CREATE POLICY "Agents can view their own publications"
ON public.property_publications FOR SELECT
USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Users can manage their tenant's property publications" ON public.property_publications;
CREATE POLICY "Agents can manage their own publications"
ON public.property_publications FOR ALL
USING (user_id = auth.uid());

-- 5. Ensure tenant_id is still correct (for cross-tenant security)
ALTER TABLE public.portal_connections ALTER COLUMN tenant_id SET NOT NULL;
ALTER TABLE public.property_publications ALTER COLUMN tenant_id SET NOT NULL;
