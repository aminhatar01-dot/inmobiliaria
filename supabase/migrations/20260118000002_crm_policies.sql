-- Migration: 20260118000002_crm_policies.sql
-- Description: Define RLS policies for CRM tables (leads, pipeline_stages, pipeline_leads, tasks)

-- 1. Leads Policies
DROP POLICY IF EXISTS "Users can view leads of their tenant" ON public.leads;
CREATE POLICY "Users can view leads of their tenant" ON public.leads FOR SELECT USING (tenant_id = public.get_auth_tenant_id());
DROP POLICY IF EXISTS "Users can manage leads of their tenant" ON public.leads;
CREATE POLICY "Users can manage leads of their tenant" ON public.leads FOR ALL USING (tenant_id = public.get_auth_tenant_id());

-- 2. Pipeline Stages Policies
DROP POLICY IF EXISTS "Users can view stages of their tenant" ON public.pipeline_stages;
CREATE POLICY "Users can view stages of their tenant" ON public.pipeline_stages FOR SELECT USING (tenant_id = public.get_auth_tenant_id());
DROP POLICY IF EXISTS "Admins can manage stages of their tenant" ON public.pipeline_stages;
CREATE POLICY "Admins can manage stages of their tenant" ON public.pipeline_stages FOR ALL USING (tenant_id = public.get_auth_tenant_id());

-- 3. Pipeline Leads Policies
DROP POLICY IF EXISTS "Users can view pipeline assignments of their tenant" ON public.pipeline_leads;
CREATE POLICY "Users can view pipeline assignments of their tenant" ON public.pipeline_leads FOR SELECT USING (tenant_id = public.get_auth_tenant_id());
DROP POLICY IF EXISTS "Users can manage pipeline assignments of their tenant" ON public.pipeline_leads;
CREATE POLICY "Users can manage pipeline assignments of their tenant" ON public.pipeline_leads FOR ALL USING (tenant_id = public.get_auth_tenant_id());

-- 4. Tasks Policies
DROP POLICY IF EXISTS "Users can view tasks of their tenant" ON public.tasks;
CREATE POLICY "Users can view tasks of their tenant" ON public.tasks FOR SELECT USING (tenant_id = public.get_auth_tenant_id());
DROP POLICY IF EXISTS "Users can manage tasks of their tenant" ON public.tasks;
CREATE POLICY "Users can manage tasks of their tenant" ON public.tasks FOR ALL USING (tenant_id = public.get_auth_tenant_id());
