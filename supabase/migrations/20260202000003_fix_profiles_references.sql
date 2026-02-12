-- Migration: 20260202000003_fix_profiles_references.sql
-- Description: Fix remaining references to the old 'users' table in RLS policies and foreign keys

-- 1. Fix Visits table agent_id reference
ALTER TABLE public.visits DROP CONSTRAINT IF EXISTS visits_agent_id_fkey;
ALTER TABLE public.visits ADD CONSTRAINT visits_agent_id_fkey FOREIGN KEY (agent_id) REFERENCES public.profiles(id) ON DELETE SET NULL;

-- 2. Fix Marketing Automation Policies (they used subqueries to 'users')
DROP POLICY IF EXISTS "Users can view campaigns from their tenant" ON campaigns;
CREATE POLICY "Users can view campaigns from their tenant" ON campaigns
    USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can insert campaigns for their tenant" ON campaigns;
CREATE POLICY "Users can insert campaigns for their tenant" ON campaigns
    WITH CHECK (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can update campaigns from their tenant" ON campaigns;
CREATE POLICY "Users can update campaigns from their tenant" ON campaigns
    USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can delete campaigns from their tenant" ON campaigns;
CREATE POLICY "Users can delete campaigns from their tenant" ON campaigns
    USING (tenant_id = public.get_auth_tenant_id());

-- Campaign Executions
DROP POLICY IF EXISTS "Users can view campaign executions from their tenant" ON campaign_executions;
CREATE POLICY "Users can view campaign executions from their tenant" ON campaign_executions
    USING (campaign_id IN (SELECT id FROM campaigns WHERE tenant_id = public.get_auth_tenant_id()));

DROP POLICY IF EXISTS "Users can insert campaign executions for their campaigns" ON campaign_executions;
CREATE POLICY "Users can insert campaign executions for their campaigns" ON campaign_executions
    WITH CHECK (campaign_id IN (SELECT id FROM campaigns WHERE tenant_id = public.get_auth_tenant_id()));

DROP POLICY IF EXISTS "Users can update campaign executions for their campaigns" ON campaign_executions;
CREATE POLICY "Users can update campaign executions for their campaigns" ON campaign_executions
    USING (campaign_id IN (SELECT id FROM campaigns WHERE tenant_id = public.get_auth_tenant_id()));

-- Automation Rules
DROP POLICY IF EXISTS "Users can view automation rules from their tenant" ON automation_rules;
CREATE POLICY "Users can view automation rules from their tenant" ON automation_rules
    USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can insert automation rules for their tenant" ON automation_rules;
CREATE POLICY "Users can insert automation rules for their tenant" ON automation_rules
    WITH CHECK (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can update automation rules from their tenant" ON automation_rules;
CREATE POLICY "Users can update automation rules from their tenant" ON automation_rules
    USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can delete automation rules from their tenant" ON automation_rules;
CREATE POLICY "Users can delete automation rules from their tenant" ON automation_rules
    USING (tenant_id = public.get_auth_tenant_id());
