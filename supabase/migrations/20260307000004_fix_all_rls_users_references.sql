-- Migration: 20260307000004_fix_all_rls_users_references.sql
-- Description: Fix all remaining RLS policies that incorrectly refer to 'public.users' or 'users'

-- 1. Ensure the helper function exists (it should, but for robustness)
CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
BEGIN
  RETURN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid());
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public;

-- 2. Fix public.contracts
DROP POLICY IF EXISTS "Users can view their tenant's contracts" ON public.contracts;
CREATE POLICY "Users can view their tenant's contracts" 
ON public.contracts FOR SELECT 
USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can insert contracts for their tenant" ON public.contracts;
CREATE POLICY "Users can insert contracts for their tenant" 
ON public.contracts FOR INSERT 
WITH CHECK (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can update their tenant's contracts" ON public.contracts;
CREATE POLICY "Users can update their tenant's contracts" 
ON public.contracts FOR UPDATE 
USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can delete their tenant's contracts" ON public.contracts;
CREATE POLICY "Users can delete their tenant's contracts" 
ON public.contracts FOR DELETE 
USING (tenant_id = public.get_auth_tenant_id());

-- 3. Fix portal_connections
DROP POLICY IF EXISTS "Users can view their tenant's portal connections" ON public.portal_connections;
CREATE POLICY "Users can view their tenant's portal connections"
ON public.portal_connections FOR SELECT
USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can manage their tenant's portal connections" ON public.portal_connections;
CREATE POLICY "Users can manage their tenant's portal connections"
ON public.portal_connections FOR ALL
USING (tenant_id = public.get_auth_tenant_id());

-- 4. Fix property_publications
DROP POLICY IF EXISTS "Users can view their tenant's property publications" ON public.property_publications;
CREATE POLICY "Users can view their tenant's property publications"
ON public.property_publications FOR SELECT
USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can manage their tenant's property publications" ON public.property_publications;
CREATE POLICY "Users can manage their tenant's property publications"
ON public.property_publications FOR ALL
USING (tenant_id = public.get_auth_tenant_id());

-- 5. Fix campaigns
DROP POLICY IF EXISTS "Users can view campaigns from their tenant" ON public.campaigns;
CREATE POLICY "Users can view campaigns from their tenant"
ON public.campaigns FOR SELECT
USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can insert campaigns for their tenant" ON public.campaigns;
CREATE POLICY "Users can insert campaigns for their tenant"
ON public.campaigns FOR INSERT
WITH CHECK (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can update campaigns from their tenant" ON public.campaigns;
CREATE POLICY "Users can update campaigns from their tenant"
ON public.campaigns FOR UPDATE
USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can delete campaigns from their tenant" ON public.campaigns;
CREATE POLICY "Users can delete campaigns from their tenant"
ON public.campaigns FOR DELETE
USING (tenant_id = public.get_auth_tenant_id());

-- 6. Fix campaign_executions
-- Note: campaign_executions relates to campaigns, which has the tenant_id. 
-- For performance and consistency, we can use a join or check campaign ownership.
DROP POLICY IF EXISTS "Users can view campaign executions from their tenant" ON public.campaign_executions;
CREATE POLICY "Users can view campaign executions from their tenant"
ON public.campaign_executions FOR SELECT
USING (EXISTS (SELECT 1 FROM public.campaigns c WHERE c.id = campaign_id AND c.tenant_id = public.get_auth_tenant_id()));

DROP POLICY IF EXISTS "Users can insert campaign executions for their campaigns" ON public.campaign_executions;
CREATE POLICY "Users can insert campaign executions for their campaigns"
ON public.campaign_executions FOR INSERT
WITH CHECK (EXISTS (SELECT 1 FROM public.campaigns c WHERE c.id = campaign_id AND c.tenant_id = public.get_auth_tenant_id()));

DROP POLICY IF EXISTS "Users can update campaign executions for their campaigns" ON public.campaign_executions;
CREATE POLICY "Users can update campaign executions for their campaigns"
ON public.campaign_executions FOR UPDATE
USING (EXISTS (SELECT 1 FROM public.campaigns c WHERE c.id = campaign_id AND c.tenant_id = public.get_auth_tenant_id()));

-- 7. Fix automation_rules
DROP POLICY IF EXISTS "Users can view automation rules from their tenant" ON public.automation_rules;
CREATE POLICY "Users can view automation rules from their tenant"
ON public.automation_rules FOR SELECT
USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can insert automation rules for their tenant" ON public.automation_rules;
CREATE POLICY "Users can insert automation rules for their tenant"
ON public.automation_rules FOR INSERT
WITH CHECK (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can update automation rules from their tenant" ON public.automation_rules;
CREATE POLICY "Users can update automation_rules from their tenant"
ON public.automation_rules FOR UPDATE
USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can delete automation rules from their tenant" ON public.automation_rules;
CREATE POLICY "Users can delete automation rules from their tenant"
ON public.automation_rules FOR DELETE
USING (tenant_id = public.get_auth_tenant_id());
