-- Migration: 20260226000001_fix_portals_rls.sql
-- Description: Fix portal RLS policies that incorrectly reference the old 'users' table

-- 1. Portal Connections
DROP POLICY IF EXISTS "Users can view their tenant's portal connections" ON portal_connections;
CREATE POLICY "Users can view their tenant's portal connections"
    ON portal_connections FOR SELECT
    USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can manage their tenant's portal connections" ON portal_connections;
CREATE POLICY "Users can manage their tenant's portal connections"
    ON portal_connections FOR ALL
    USING (tenant_id = public.get_auth_tenant_id());

-- 2. Property Publications
DROP POLICY IF EXISTS "Users can view their tenant's property publications" ON property_publications;
CREATE POLICY "Users can view their tenant's property publications"
    ON property_publications FOR SELECT
    USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can manage their tenant's property publications" ON property_publications;
CREATE POLICY "Users can manage their tenant's property publications"
    ON property_publications FOR ALL
    USING (tenant_id = public.get_auth_tenant_id());
