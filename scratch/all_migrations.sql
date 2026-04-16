create extension if not exists "uuid-ossp";

-- Utility function for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Tenants
create table public.tenants (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  plan text default 'free',
  created_at timestamptz default now(),
  default_currency text default 'USD'
);
alter table public.tenants enable row level security;

-- Branches
create table public.branches (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references public.tenants(id) on delete cascade not null,
  name text not null,
  address text,
  created_at timestamptz default now()
);
alter table public.branches enable row level security;

-- Roles
create table public.roles (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references public.tenants(id) on delete cascade not null,
  name text not null,
  created_at timestamptz default now()
);
alter table public.roles enable row level security;

-- Permissions Catalog (Global)
create table public.permissions (
  id uuid primary key default uuid_generate_v4(),
  key text unique not null,
  description text
);
alter table public.permissions enable row level security;

-- Role Permissions
create table public.role_permissions (
  role_id uuid references public.roles(id) on delete cascade not null,
  permission_id uuid references public.permissions(id) on delete cascade not null,
  primary key (role_id, permission_id)
);
alter table public.role_permissions enable row level security;

-- Profiles / Users
create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  tenant_id uuid references public.tenants(id) on delete set null,
  name text,
  email text,
  created_at timestamptz default now()
);
alter table public.users enable row level security;

-- User Role Assignments
create table public.user_role_assignments (
  user_id uuid references public.users(id) on delete cascade not null,
  role_id uuid references public.roles(id) on delete cascade not null,
  primary key (user_id, role_id)
);
alter table public.user_role_assignments enable row level security;

-- User Branches
create table public.user_branches (
  user_id uuid references public.users(id) on delete cascade not null,
  branch_id uuid references public.branches(id) on delete cascade not null,
  primary key (user_id, branch_id)
);
alter table public.user_branches enable row level security;

-- Properties
create table public.properties (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references public.tenants(id) on delete cascade not null,
  branch_id uuid references public.branches(id) on delete set null,
  title text not null,
  operation_type text check (operation_type in ('sale', 'rent', 'temporary_rent')),
  property_type text,
  price numeric,
  currency text default 'USD',
  address text,
  description text,
  surface_total numeric,
  surface_covered numeric,
  rooms integer,
  bedrooms integer,
  bathrooms integer,
  garages integer,
  amenities jsonb default '[]'::jsonb,
  status text default 'available',
  published_on_portal boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table public.properties enable row level security;

-- Media
create table public.property_media (
  id uuid primary key default uuid_generate_v4(),
  property_id uuid references public.properties(id) on delete cascade not null,
  url text not null,
  type text check (type in ('image', 'video')),
  "order" integer default 0,
  created_at timestamptz default now()
);
alter table public.property_media enable row level security;
-- Leads
create table public.leads (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references public.tenants(id) on delete cascade not null,
  branch_id uuid references public.branches(id) on delete set null,
  name text not null,
  email text,
  phone text,
  source text, -- 'portal', 'web', 'manual', 'referral'
  interest_type text, -- 'buy', 'rent', 'sell'
  budget numeric,
  status text default 'new', -- 'new', 'contacted', 'visiting', 'negotiating', 'closed', 'lost'
  scoring integer default 0,
  assigned_to uuid references public.users(id) on delete set null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table public.leads enable row level security;

-- Pipeline Stages
create table public.pipeline_stages (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references public.tenants(id) on delete cascade not null,
  name text not null,
  "order" integer not null,
  created_at timestamptz default now()
);
alter table public.pipeline_stages enable row level security;

-- Pipeline Leads (Mapping leads to stages in a specific pipeline)
create table public.pipeline_leads (
  id uuid primary key default uuid_generate_v4(),
  lead_id uuid references public.leads(id) on delete cascade not null,
  stage_id uuid references public.pipeline_stages(id) on delete cascade not null,
  tenant_id uuid references public.tenants(id) on delete cascade not null,
  updated_at timestamptz default now()
);
alter table public.pipeline_leads enable row level security;

-- Tasks
create table public.tasks (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid references public.tenants(id) on delete cascade not null,
  assigned_to uuid references public.users(id) on delete cascade not null,
  title text not null,
  description text,
  due_date timestamptz,
  status text default 'pending', -- 'pending', 'completed', 'cancelled'
  category text, -- 'visit', 'call', 'meeting', 'admin'
  priority text default 'medium', -- 'low', 'medium', 'high', 'critical'
  property_id uuid references public.properties(id) on delete set null,
  lead_id uuid references public.leads(id) on delete set null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table public.tasks enable row level security;

-- Default Stages for new tenants
insert into public.pipeline_stages (tenant_id, name, "order")
select id, 'Nuevo', 1 from public.tenants
union all
select id, 'Contactado', 2 from public.tenants
union all
select id, 'Visita Programada', 3 from public.tenants
union all
select id, 'Negociación', 4 from public.tenants
union all
select id, 'Cierre', 5 from public.tenants;
-- Migration: 20260118000001_security_fixes.sql
-- Description: Resolve P0 (Missing RLS Policies) and P2 (Missing tenant_id in property_media)

-- 1. Fix property_media structure (P2)
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'property_media' AND column_name = 'tenant_id') THEN
        ALTER TABLE public.property_media ADD COLUMN tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE;
        
        -- Backfill existing data
        UPDATE public.property_media pm 
        SET tenant_id = p.tenant_id 
        FROM public.properties p 
        WHERE pm.property_id = p.id;
        
        -- Make it mandatory for future entries
        ALTER TABLE public.property_media ALTER COLUMN tenant_id SET NOT NULL;
    END IF;
END $$;

-- 2. Helper function for RLS
CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
  -- Using SECURITY DEFINER to bypass RLS on public.users table for the lookup
  SELECT tenant_id FROM public.users WHERE id = auth.uid();
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public;

-- 3. Apply RLS Policies (P0)

-- Helper to drop existing policies if they exist (to avoid errors on re-run)
-- tenants
DROP POLICY IF EXISTS "Users can view their own tenant" ON public.tenants;
CREATE POLICY "Users can view their own tenant" ON public.tenants FOR SELECT USING (id = public.get_auth_tenant_id());

-- branches
DROP POLICY IF EXISTS "Users can view branches of their tenant" ON public.branches;
CREATE POLICY "Users can view branches of their tenant" ON public.branches FOR SELECT USING (tenant_id = public.get_auth_tenant_id());
CREATE POLICY "Admins can manage branches of their tenant" ON public.branches FOR ALL USING (tenant_id = public.get_auth_tenant_id());

-- roles
DROP POLICY IF EXISTS "Users can view roles of their tenant" ON public.roles;
CREATE POLICY "Users can view roles of their tenant" ON public.roles FOR SELECT USING (tenant_id = public.get_auth_tenant_id());

-- permissions (Global catalog - read only for authenticated)
DROP POLICY IF EXISTS "Authenticated users can view permissions" ON public.permissions;
CREATE POLICY "Authenticated users can view permissions" ON public.permissions FOR SELECT USING (auth.role() = 'authenticated');

-- role_permissions
DROP POLICY IF EXISTS "Users can view role permissions" ON public.role_permissions;
CREATE POLICY "Users can view role permissions" ON public.role_permissions FOR SELECT USING (
    role_id IN (SELECT id FROM public.roles WHERE tenant_id = public.get_auth_tenant_id())
);

-- users (Profiles)
DROP POLICY IF EXISTS "Users can view profiles in their tenant" ON public.users;
CREATE POLICY "Users can view profiles in their tenant" ON public.users FOR SELECT USING (tenant_id = public.get_auth_tenant_id());
DROP POLICY IF EXISTS "Users can update their own profile" ON public.users;
CREATE POLICY "Users can update their own profile" ON public.users FOR UPDATE USING (id = auth.uid());

-- user_role_assignments
DROP POLICY IF EXISTS "Users can view role assignments in their tenant" ON public.user_role_assignments;
CREATE POLICY "Users can view role assignments in their tenant" ON public.user_role_assignments FOR SELECT USING (
    user_id IN (SELECT id FROM public.users WHERE tenant_id = public.get_auth_tenant_id())
);

-- properties
DROP POLICY IF EXISTS "Users can see properties of their tenant" ON public.properties;
CREATE POLICY "Users can see properties of their tenant" ON public.properties FOR SELECT USING (tenant_id = public.get_auth_tenant_id());
DROP POLICY IF EXISTS "Users can manage properties of their tenant" ON public.properties;
CREATE POLICY "Users can manage properties of their tenant" ON public.properties FOR ALL USING (tenant_id = public.get_auth_tenant_id());

-- property_media
DROP POLICY IF EXISTS "Users can see media of their tenant" ON public.property_media;
CREATE POLICY "Users can see media of their tenant" ON public.property_media FOR SELECT USING (tenant_id = public.get_auth_tenant_id());
DROP POLICY IF EXISTS "Users can manage media of their tenant" ON public.property_media;
CREATE POLICY "Users can manage media of their tenant" ON public.property_media FOR ALL USING (tenant_id = public.get_auth_tenant_id());
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
-- Create Contracts table
CREATE TABLE IF NOT EXISTS public.contracts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('reservation', 'rental', 'sale', 'other')),
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'generated', 'signed', 'archived')),
    file_url TEXT,
    property_id UUID REFERENCES public.properties(id) ON DELETE SET NULL,
    lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
    content TEXT, -- HTML content for the contract body
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contracts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Contracts
CREATE POLICY "Users can view their tenant's contracts" 
ON public.contracts FOR SELECT 
USING (tenant_id IN (
    SELECT tenant_id FROM public.users WHERE id = auth.uid()
));

CREATE POLICY "Users can insert contracts for their tenant" 
ON public.contracts FOR INSERT 
WITH CHECK (tenant_id IN (
    SELECT tenant_id FROM public.users WHERE id = auth.uid()
));

CREATE POLICY "Users can update their tenant's contracts" 
ON public.contracts FOR UPDATE 
USING (tenant_id IN (
    SELECT tenant_id FROM public.users WHERE id = auth.uid()
));

CREATE POLICY "Users can delete their tenant's contracts" 
ON public.contracts FOR DELETE 
USING (tenant_id IN (
    SELECT tenant_id FROM public.users WHERE id = auth.uid()
));

-- Create Storage Bucket for Documents if not exists
INSERT INTO storage.buckets (id, name, public) 
VALUES ('documents', 'documents', false)
ON CONFLICT (id) DO NOTHING;

-- RLS for Storage Objects "documents"
CREATE POLICY "Tenant Isolated View Documents"
ON storage.objects FOR SELECT
USING ( bucket_id = 'documents' AND (metadata->>'tenant_id')::uuid IN (
    SELECT tenant_id FROM public.users WHERE id = auth.uid()
));

CREATE POLICY "Tenant Isolated Upload Documents"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'documents' AND (metadata->>'tenant_id')::uuid IN (
    SELECT tenant_id FROM public.users WHERE id = auth.uid()
));
-- Migration: 20260127000001_signup_trigger.sql
-- Description: Automate Tenant, Profile, Role, and Branch creation on user signup

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  new_tenant_id uuid;
  admin_role_id uuid;
  agency_name text;
  user_full_name text;
BEGIN
  -- Extract metadata
  agency_name := new.raw_user_meta_data->>'agency_name';
  user_full_name := new.raw_user_meta_data->>'full_name';

  -- Default agency name if missing
  IF agency_name IS NULL OR agency_name = '' THEN
    agency_name := 'Mi Inmobiliaria';
  END IF;

  -- 1. Create Tenant
  INSERT INTO public.tenants (name, plan, default_currency)
  VALUES (agency_name, 'free', 'USD')
  RETURNING id INTO new_tenant_id;

  -- 2. Create User Profile
  INSERT INTO public.users (id, tenant_id, name, email)
  VALUES (new.id, new_tenant_id, user_full_name, new.email);

  -- 3. Create Default Roles
  INSERT INTO public.roles (tenant_id, name)
  VALUES (new_tenant_id, 'Admin')
  RETURNING id INTO admin_role_id;

  INSERT INTO public.roles (tenant_id, name)
  VALUES (new_tenant_id, 'Agente');

  -- 4. Assign Admin Role to new user
  INSERT INTO public.user_role_assignments (user_id, role_id)
  VALUES (new.id, admin_role_id);

  -- 5. Create Default Branch
  INSERT INTO public.branches (tenant_id, name, address)
  VALUES (new_tenant_id, 'Casa Central', 'Dirección Principal');

  -- 6. Link User to Branch 
  -- Assuming user_branches logic allows it or requires it. 
  -- Based on schema: user_branches (user_id, branch_id)
  INSERT INTO public.user_branches (user_id, branch_id)
  SELECT new.id, id FROM public.branches WHERE tenant_id = new_tenant_id LIMIT 1;

  RETURN new;
END;
$$;

-- Trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
-- Migration: 20260129000001_visits_schema.sql
-- Description: Create visits table and RLS policies

CREATE TABLE IF NOT EXISTS public.visits (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
    lead_id uuid REFERENCES public.leads(id) ON DELETE CASCADE NOT NULL,
    property_id uuid REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
    agent_id uuid REFERENCES public.users(id) ON DELETE SET NULL,
    scheduled_at timestamptz NOT NULL,
    status text DEFAULT 'scheduled', -- 'scheduled', 'completed', 'cancelled', 'no_show'
    notes text,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.visits ENABLE ROW LEVEL SECURITY;

-- RLS Policies
DROP POLICY IF EXISTS "Users can view visits of their tenant" ON public.visits;
CREATE POLICY "Users can view visits of their tenant" ON public.visits FOR SELECT USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can manage visits of their tenant" ON public.visits;
CREATE POLICY "Users can manage visits of their tenant" ON public.visits FOR ALL USING (tenant_id = public.get_auth_tenant_id());

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_visits_tenant ON public.visits(tenant_id);
CREATE INDEX IF NOT EXISTS idx_visits_lead ON public.visits(lead_id);
CREATE INDEX IF NOT EXISTS idx_visits_property ON public.visits(property_id);
CREATE INDEX IF NOT EXISTS idx_visits_scheduled ON public.visits(scheduled_at);
-- Tabla de campañas de marketing
create table campaigns (
    id uuid primary key default gen_random_uuid(),
    tenant_id uuid references tenants(id) on delete cascade not null,
    name text not null,
    type text check (type in ('email', 'social_media', 'sms', 'whatsapp')) not null,
    status text check (status in ('draft', 'scheduled', 'active', 'completed', 'paused')) default 'draft',
    content jsonb, -- Almacena título, cuerpo, imágenes, etc.
    target_audience jsonb, -- Filtros: status, scoring, tags
    scheduled_at timestamptz,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Tabla de envíos/publicaciones individuales
create table campaign_executions (
    id uuid primary key default gen_random_uuid(),
    campaign_id uuid references campaigns(id) on delete cascade not null,
    lead_id uuid references leads(id) on delete set null,
    status text check (status in ('pending', 'sent', 'delivered', 'failed', 'opened', 'clicked')) default 'pending',
    sent_at timestamptz,
    metadata jsonb, -- Tracking data
    created_at timestamptz default now()
);

-- Tabla de reglas de automatización
create table automation_rules (
    id uuid primary key default gen_random_uuid(),
    tenant_id uuid references tenants(id) on delete cascade not null,
    name text not null,
    trigger_type text check (trigger_type in ('lead_status_change', 'lead_created', 'visit_scheduled', 'property_status_change')) not null,
    trigger_condition jsonb, -- ej: {"from_status": "new", "to_status": "contacted"}
    action_type text check (action_type in ('send_email', 'create_task', 'send_notification', 'update_lead_field')) not null,
    action_config jsonb, -- Configuración de la acción (template_id, task_title, etc.)
    is_active boolean default true,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- Índices para mejorar el rendimiento
create index campaigns_tenant_id_idx on campaigns(tenant_id);
create index campaigns_status_idx on campaigns(status);
create index campaign_executions_campaign_id_idx on campaign_executions(campaign_id);
create index campaign_executions_lead_id_idx on campaign_executions(lead_id);
create index automation_rules_tenant_id_idx on automation_rules(tenant_id);
create index automation_rules_trigger_type_idx on automation_rules(trigger_type);

-- Políticas RLS para campaigns
alter table campaigns enable row level security;

create policy "Users can view campaigns from their tenant"
    on campaigns for select
    using (tenant_id in (select tenant_id from users where id = auth.uid()));

create policy "Users can insert campaigns for their tenant"
    on campaigns for insert
    with check (tenant_id in (select tenant_id from users where id = auth.uid()));

create policy "Users can update campaigns from their tenant"
    on campaigns for update
    using (tenant_id in (select tenant_id from users where id = auth.uid()));

create policy "Users can delete campaigns from their tenant"
    on campaigns for delete
    using (tenant_id in (select tenant_id from users where id = auth.uid()));

-- Políticas RLS para campaign_executions
alter table campaign_executions enable row level security;

create policy "Users can view campaign executions from their tenant"
    on campaign_executions for select
    using (campaign_id in (select id from campaigns where tenant_id in (select tenant_id from users where id = auth.uid())));

create policy "Users can insert campaign executions for their campaigns"
    on campaign_executions for insert
    with check (campaign_id in (select id from campaigns where tenant_id in (select tenant_id from users where id = auth.uid())));

create policy "Users can update campaign executions for their campaigns"
    on campaign_executions for update
    using (campaign_id in (select id from campaigns where tenant_id in (select tenant_id from users where id = auth.uid())));

-- Políticas RLS para automation_rules
alter table automation_rules enable row level security;

create policy "Users can view automation rules from their tenant"
    on automation_rules for select
    using (tenant_id in (select tenant_id from users where id = auth.uid()));

create policy "Users can insert automation rules for their tenant"
    on automation_rules for insert
    with check (tenant_id in (select tenant_id from users where id = auth.uid()));

create policy "Users can update automation rules from their tenant"
    on automation_rules for update
    using (tenant_id in (select tenant_id from users where id = auth.uid()));

create policy "Users can delete automation rules from their tenant"
    on automation_rules for delete
    using (tenant_id in (select tenant_id from users where id = auth.uid()));
-- Ciclo 16: Campañas de Marketing y Automatización
-- Esquema para gestión de campañas omnicanal y reglas de automatización

-- Tabla de Campañas
CREATE TABLE IF NOT EXISTS campaigns (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('email', 'social_media', 'sms', 'whatsapp')),
    status TEXT NOT NULL CHECK (status IN ('draft', 'scheduled', 'active', 'completed', 'paused')),
    content JSONB DEFAULT '{}',
    target_audience JSONB DEFAULT '{}',
    scheduled_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de Ejecuciones de Campaña
CREATE TABLE IF NOT EXISTS campaign_executions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    campaign_id UUID NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
    lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
    status TEXT NOT NULL CHECK (status IN ('pending', 'sent', 'delivered', 'failed', 'opened', 'clicked')),
    sent_at TIMESTAMPTZ,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de Reglas de Automatización
CREATE TABLE IF NOT EXISTS automation_rules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    trigger_type TEXT NOT NULL CHECK (trigger_type IN ('lead_status_change', 'lead_created', 'visit_scheduled', 'property_status_change', 'incoming_message')),
    trigger_condition JSONB DEFAULT '{}',
    action_type TEXT NOT NULL CHECK (action_type IN ('send_email', 'create_task', 'send_notification', 'update_lead_field', 'send_whatsapp')),
    action_config JSONB DEFAULT '{}',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_executions ENABLE ROW LEVEL SECURITY;
ALTER TABLE automation_rules ENABLE ROW LEVEL SECURITY;

-- Políticas multi-tenant
CREATE POLICY "Users can manage own tenant campaigns" ON campaigns
    FOR ALL USING (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can manage own tenant campaign executions" ON campaign_executions
    FOR ALL USING (
        campaign_id IN (SELECT id FROM campaigns WHERE tenant_id = public.get_auth_tenant_id())
    );

CREATE POLICY "Users can manage own tenant automation rules" ON automation_rules
    FOR ALL USING (tenant_id = public.get_auth_tenant_id());

-- Índices
CREATE INDEX IF NOT EXISTS idx_campaigns_tenant ON campaigns(tenant_id);
CREATE INDEX IF NOT EXISTS idx_campaign_executions_campaign ON campaign_executions(campaign_id);
CREATE INDEX IF NOT EXISTS idx_automation_rules_tenant ON automation_rules(tenant_id);

-- Función para actualizar updated_at
CREATE OR REPLACE FUNCTION update_marketing_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers
CREATE TRIGGER trigger_update_campaigns_updated_at
    BEFORE UPDATE ON campaigns
    FOR EACH ROW EXECUTE FUNCTION update_marketing_updated_at();

CREATE TRIGGER trigger_update_automation_rules_updated_at
    BEFORE UPDATE ON automation_rules
    FOR EACH ROW EXECUTE FUNCTION update_marketing_updated_at();
-- Ciclo 15: Sistema de Mensajería Interna
-- Migración para crear el esquema de mensajería entre agentes del mismo tenant

-- Tabla de conversaciones
CREATE TABLE IF NOT EXISTS conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Participantes de conversaciones (relación many-to-many)
CREATE TABLE IF NOT EXISTS conversation_participants (
    conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    joined_at TIMESTAMPTZ DEFAULT NOW(),
    last_read_at TIMESTAMPTZ DEFAULT NOW(),
    
    PRIMARY KEY (conversation_id, user_id)
);

-- Mensajes
CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
    sender_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para mejorar el rendimiento de consultas frecuentes
CREATE INDEX IF NOT EXISTS idx_messages_conversation_created 
    ON messages(conversation_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_conversations_tenant 
    ON conversations(tenant_id);

CREATE INDEX IF NOT EXISTS idx_conversation_participants_user 
    ON conversation_participants(user_id);

CREATE INDEX IF NOT EXISTS idx_conversation_participants_conversation 
    ON conversation_participants(conversation_id);

-- Habilitar RLS en todas las tablas
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversation_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para conversations
-- Solo usuarios del mismo tenant pueden ver las conversaciones
CREATE POLICY "Users can view own tenant conversations"
    ON conversations FOR SELECT
    USING (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can create conversations in their tenant"
    ON conversations FOR INSERT
    WITH CHECK (tenant_id = public.get_auth_tenant_id());

-- Políticas RLS para conversation_participants
-- Los usuarios pueden ver participantes de conversaciones en las que participan
CREATE POLICY "Users can view participants of their conversations"
    ON conversation_participants FOR SELECT
    USING (
        conversation_id IN (
            SELECT conversation_id FROM conversation_participants
            WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "Users can add participants to conversations they're in"
    ON conversation_participants FOR INSERT
    WITH CHECK (
        conversation_id IN (
            SELECT conversation_id FROM conversation_participants
            WHERE user_id = auth.uid()
        )
    );

-- Políticas RLS para messages
-- Los usuarios solo pueden ver mensajes de conversaciones en las que participan
CREATE POLICY "Users can view messages in their conversations"
    ON messages FOR SELECT
    USING (
        conversation_id IN (
            SELECT conversation_id FROM conversation_participants
            WHERE user_id = auth.uid()
        )
    );

-- Los usuarios solo pueden enviar mensajes a conversaciones en las que participan
-- y solo pueden identificarse como ellos mismos (sender_id debe ser auth.uid())
CREATE POLICY "Users can send messages to their conversations"
    ON messages FOR INSERT
    WITH CHECK (
        conversation_id IN (
            SELECT conversation_id FROM conversation_participants
            WHERE user_id = auth.uid()
        )
        AND sender_id = auth.uid()
    );

-- Función para actualizar el timestamp updated_at automáticamente
CREATE OR REPLACE FUNCTION update_conversation_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE conversations
    SET updated_at = NOW()
    WHERE id = NEW.conversation_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar updated_at cuando se envía un mensaje
DROP TRIGGER IF EXISTS trigger_update_conversation_timestamp ON messages;
CREATE TRIGGER trigger_update_conversation_timestamp
    AFTER INSERT ON messages
    FOR EACH ROW
    EXECUTE FUNCTION update_conversation_timestamp();
-- Portal Connections (Store credentials/tokens for external portals)
CREATE TABLE IF NOT EXISTS portal_connections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    portal_name TEXT NOT NULL CHECK (portal_name IN ('mercadolibre', 'argenprop', 'zonaprop')),
    account_email TEXT,
    status TEXT NOT NULL CHECK (status IN ('connected', 'disconnected', 'error', 'expired')),
    credentials JSONB DEFAULT '{}', -- Store tokens, client_id, etc.
    last_sync_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Property Publications (Track status of properties in each portal)
CREATE TABLE IF NOT EXISTS property_publications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    portal_connection_id UUID NOT NULL REFERENCES portal_connections(id) ON DELETE CASCADE,
    external_id TEXT, -- ID of the property in the external portal
    external_url TEXT, -- Link to the live publication
    status TEXT NOT NULL CHECK (status IN ('pending', 'published', 'error', 'withdrawn')),
    error_message TEXT,
    last_published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(property_id, portal_connection_id)
);

-- RLS Policies
ALTER TABLE portal_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_publications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their tenant's portal connections"
    ON portal_connections FOR SELECT
    USING (tenant_id = (SELECT tenant_id FROM users WHERE id = auth.uid()));

CREATE POLICY "Users can manage their tenant's portal connections"
    ON portal_connections FOR ALL
    USING (tenant_id = (SELECT tenant_id FROM users WHERE id = auth.uid()));

CREATE POLICY "Users can view their tenant's property publications"
    ON property_publications FOR SELECT
    USING (tenant_id = (SELECT tenant_id FROM users WHERE id = auth.uid()));

CREATE POLICY "Users can manage their tenant's property publications"
    ON property_publications FOR ALL
    USING (tenant_id = (SELECT tenant_id FROM users WHERE id = auth.uid()));

-- Update triggers
CREATE TRIGGER update_portal_connections_updated_at
    BEFORE UPDATE ON portal_connections
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_property_publications_updated_at
    BEFORE UPDATE ON property_publications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
-- Migration: 20260202000002_finalize_schema_naming.sql
-- Description: Rename public.users to public.profiles and update related dependencies

-- 1. Rename table
ALTER TABLE public.users RENAME TO profiles;

-- 2. Update helper function to use the new name
CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
  -- Using SECURITY DEFINER to bypass RLS on public.profiles table for the lookup
  SELECT tenant_id FROM public.profiles WHERE id = auth.uid();
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public;

-- 3. Update Signup Trigger function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  new_tenant_id uuid;
  admin_role_id uuid;
  agency_name text;
  user_full_name text;
BEGIN
  -- Extract metadata
  agency_name := new.raw_user_meta_data->>'agency_name';
  user_full_name := new.raw_user_meta_data->>'full_name';

  -- Default agency name if missing
  IF agency_name IS NULL OR agency_name = '' THEN
    agency_name := 'Mi Inmobiliaria';
  END IF;

  -- 1. Create Tenant
  INSERT INTO public.tenants (name, plan, default_currency)
  VALUES (agency_name, 'free', 'USD')
  RETURNING id INTO new_tenant_id;

  -- 2. Create User Profile (Updated to use profiles table)
  INSERT INTO public.profiles (id, tenant_id, name, email)
  VALUES (new.id, new_tenant_id, user_full_name, new.email);

  -- 3. Create Default Roles
  INSERT INTO public.roles (tenant_id, name)
  VALUES (new_tenant_id, 'Admin')
  RETURNING id INTO admin_role_id;

  INSERT INTO public.roles (tenant_id, name)
  VALUES (new_tenant_id, 'Agente');

  -- 4. Assign Admin Role to new user
  INSERT INTO public.user_role_assignments (user_id, role_id)
  VALUES (new.id, admin_role_id);

  -- 5. Create Default Branch
  INSERT INTO public.branches (tenant_id, name, address)
  VALUES (new_tenant_id, 'Casa Central', 'Dirección Principal');

  -- 6. Link User to Branch 
  INSERT INTO public.user_branches (user_id, branch_id)
  SELECT new.id, id FROM public.branches WHERE tenant_id = new_tenant_id LIMIT 1;

  RETURN new;
END;
$$;
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
-- Migration: 20260202000004_fix_signup_flow.sql
-- Description: Consolidate handle_new_user and fix permissions for registration

-- 1. Ensure extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Grant permissions to internal roles (safety net)
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- Grant specific permissions for registration flow
GRANT INSERT, SELECT ON public.tenants TO service_role, authenticated;
GRANT INSERT, SELECT, UPDATE ON public.profiles TO service_role, authenticated;
GRANT INSERT, SELECT ON public.roles TO service_role, authenticated;
GRANT INSERT, SELECT ON public.user_role_assignments TO service_role, authenticated;
GRANT INSERT, SELECT ON public.branches TO service_role, authenticated;
GRANT INSERT, SELECT ON public.user_branches TO service_role, authenticated;

-- 3. Robust Signup Trigger Function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  new_tenant_id uuid;
  admin_role_id uuid;
  agency_name text;
  user_full_name text;
BEGIN
  -- Extract metadata safely
  BEGIN
    agency_name := new.raw_user_meta_data->>'agency_name';
    user_full_name := new.raw_user_meta_data->>'full_name';
  EXCEPTION WHEN OTHERS THEN
    agency_name := 'Mi Inmobiliaria';
    user_full_name := 'Usuario';
  END;

  -- Default values if missing
  IF agency_name IS NULL OR agency_name = '' THEN
    agency_name := 'Mi Inmobiliaria';
  END IF;

  -- 1. Create Tenant (ONLY if it doesn't exist for some reason, though new signup should always be new)
  INSERT INTO public.tenants (name, plan, default_currency)
  VALUES (agency_name, 'free', 'USD')
  RETURNING id INTO new_tenant_id;

  -- 2. Create User Profile (Use Profiles table)
  INSERT INTO public.profiles (id, tenant_id, name, email)
  VALUES (new.id, new_tenant_id, user_full_name, new.email)
  ON CONFLICT (id) DO UPDATE SET
    tenant_id = excluded.tenant_id,
    name = excluded.name,
    email = excluded.email;

  -- 3. Create Default Roles
  -- We use a loop or direct inserts to ensure they exist
  INSERT INTO public.roles (tenant_id, name)
  VALUES (new_tenant_id, 'Administrador')
  RETURNING id INTO admin_role_id;

  INSERT INTO public.roles (tenant_id, name)
  VALUES (new_tenant_id, 'Agente')
  ON CONFLICT DO NOTHING;

  -- 4. Assign Admin Role
  INSERT INTO public.user_role_assignments (user_id, role_id)
  VALUES (new.id, admin_role_id)
  ON CONFLICT DO NOTHING;

  -- 5. Create Default Branch
  INSERT INTO public.branches (tenant_id, name, address)
  VALUES (new_tenant_id, 'Casa Central', 'Dirección Principal')
  ON CONFLICT DO NOTHING;

  -- 6. Link User to Branch 
  INSERT INTO public.user_branches (user_id, branch_id)
  SELECT new.id, id FROM public.branches WHERE tenant_id = new_tenant_id LIMIT 1
  ON CONFLICT DO NOTHING;

  RETURN new;
EXCEPTION WHEN OTHERS THEN
  -- Log error details if possible in Supabase logs (Postgres)
  RAISE WARNING 'Error in handle_new_user trigger: %', SQLERRM;
  RETURN new; -- Still return NEW to allow auth user creation even if profile fails
END;
$$;
-- Add owner_id to properties table
ALTER TABLE public.properties 
ADD COLUMN owner_id uuid REFERENCES public.leads(id) ON DELETE SET NULL;

-- Index for better performance
CREATE INDEX idx_properties_owner_id ON public.properties(owner_id);
-- Create storage bucket for properties
INSERT INTO storage.buckets (id, name, public) 
VALUES ('properties', 'properties', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for properties
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING ( bucket_id = 'properties' );

CREATE POLICY "Authenticated Upload" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK ( bucket_id = 'properties' );

CREATE POLICY "Authenticated Update" 
On storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'properties' );

CREATE POLICY "Authenticated Delete" 
ON storage.objects FOR DELETE 
TO authenticated 
USING ( bucket_id = 'properties' );
-- Consolidated Fixes for Properties and Media RLS

-- 1. Ensure the helper function is correct and robust
CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
BEGIN
  RETURN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid());
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public;

GRANT EXECUTE ON FUNCTION public.get_auth_tenant_id() TO authenticated;

-- 2. Robust Policies for Properties
DROP POLICY IF EXISTS "Users can see properties of their tenant" ON public.properties;
DROP POLICY IF EXISTS "Users can manage properties of their tenant" ON public.properties;

CREATE POLICY "Users can see properties" 
ON public.properties FOR SELECT 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can insert properties" 
ON public.properties FOR INSERT 
TO authenticated 
WITH CHECK (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can update properties" 
ON public.properties FOR UPDATE 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id())
WITH CHECK (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can delete properties" 
ON public.properties FOR DELETE 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id());

-- 3. Robust Policies for Property Media
DROP POLICY IF EXISTS "Users can see media of their tenant" ON public.property_media;
DROP POLICY IF EXISTS "Users can manage media of their tenant" ON public.property_media;

CREATE POLICY "Users can see media" 
ON public.property_media FOR SELECT 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can insert media" 
ON public.property_media FOR INSERT 
TO authenticated 
WITH CHECK (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can update media" 
ON public.property_media FOR UPDATE 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id())
WITH CHECK (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can delete media" 
ON public.property_media FOR DELETE 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id());

-- 4. Ensure Leads policies are also explicit (fixes OwnerSelector)
DROP POLICY IF EXISTS "Users can view leads of their tenant" ON public.leads;
DROP POLICY IF EXISTS "Users can manage leads of their tenant" ON public.leads;

CREATE POLICY "Users can see leads" 
ON public.leads FOR SELECT 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can manage leads" 
ON public.leads FOR ALL 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id())
WITH CHECK (tenant_id = public.get_auth_tenant_id());
-- Migration history placeholder
-- Fix for Shared Properties Migration
-- This migration ensures correct column existence and policy updates

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='properties' AND column_name='is_shared') THEN
        ALTER TABLE public.properties ADD COLUMN is_shared BOOLEAN DEFAULT FALSE;
    END IF;
END $$;

-- Drop existing policies with the correct names found in 20260207000003_consolidated_rls_fixes.sql
DROP POLICY IF EXISTS "Users can see properties" ON public.properties;
DROP POLICY IF EXISTS "Users can update properties" ON public.properties;
DROP POLICY IF EXISTS "Users can view their own or shared properties" ON public.properties;
DROP POLICY IF EXISTS "Users can update their own properties" ON public.properties;

-- 1. SELECT Policy: Allow own properties OR shared properties
CREATE POLICY "Users can see properties"
ON public.properties FOR SELECT
TO authenticated
USING (
  tenant_id = public.get_auth_tenant_id()
  OR
  is_shared = true
);

-- 2. UPDATE Policy: Allow own properties
CREATE POLICY "Users can update properties"
ON public.properties FOR UPDATE
TO authenticated
USING (tenant_id = public.get_auth_tenant_id())
WITH CHECK (tenant_id = public.get_auth_tenant_id());
-- Fix for Shared Properties Media Visibility
-- Allow authenticated users to see media of shared properties, even from other tenants

DROP POLICY IF EXISTS "Users can see media" ON public.property_media;

CREATE POLICY "Users can see media"
ON public.property_media FOR SELECT
TO authenticated
USING (
  tenant_id = public.get_auth_tenant_id()
  OR
  EXISTS (
    SELECT 1 FROM public.properties
    WHERE public.properties.id = public.property_media.property_id
    AND public.properties.is_shared = true
  )
);
-- Create Invitations table for agent management
CREATE TABLE IF NOT EXISTS public.invitations (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
  email text NOT NULL,
  name text,
  role_id uuid REFERENCES public.roles(id) ON DELETE SET NULL,
  branch_id uuid REFERENCES public.branches(id) ON DELETE SET NULL,
  status text DEFAULT 'pending',
  invited_at timestamptz DEFAULT now(),
  accepted_at timestamptz,
  UNIQUE(tenant_id, email)
);

ALTER TABLE public.invitations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Invitations
CREATE POLICY "Users can manage invitations of their tenant"
ON public.invitations FOR ALL
TO authenticated
USING (tenant_id = public.get_auth_tenant_id())
WITH CHECK (tenant_id = public.get_auth_tenant_id());
-- Migration: 20260208000006_fix_agent_management_rls.sql
-- Description: Allow management of team roles and branch assignments

-- user_role_assignments
DROP POLICY IF EXISTS "Users can view role assignments in their tenant" ON public.user_role_assignments;
DROP POLICY IF EXISTS "Users can manage role assignments" ON public.user_role_assignments;

CREATE POLICY "Users can see role assignments"
ON public.user_role_assignments FOR SELECT
TO authenticated
USING (
  user_id IN (SELECT id FROM public.profiles WHERE tenant_id = public.get_auth_tenant_id())
);

CREATE POLICY "Users can manage role assignments"
ON public.user_role_assignments FOR ALL
TO authenticated
USING (
  user_id IN (SELECT id FROM public.profiles WHERE tenant_id = public.get_auth_tenant_id())
)
WITH CHECK (
  user_id IN (SELECT id FROM public.profiles WHERE tenant_id = public.get_auth_tenant_id())
  AND
  role_id IN (SELECT id FROM public.roles WHERE tenant_id = public.get_auth_tenant_id())
);

-- user_branches
DROP POLICY IF EXISTS "Users can manage user branches" ON public.user_branches;

CREATE POLICY "Users can see user branches"
ON public.user_branches FOR SELECT
TO authenticated
USING (
  user_id IN (SELECT id FROM public.profiles WHERE tenant_id = public.get_auth_tenant_id())
);

CREATE POLICY "Users can manage user branches"
ON public.user_branches FOR ALL
TO authenticated
USING (
  user_id IN (SELECT id FROM public.profiles WHERE tenant_id = public.get_auth_tenant_id())
)
WITH CHECK (
  user_id IN (SELECT id FROM public.profiles WHERE tenant_id = public.get_auth_tenant_id())
  AND
  branch_id IN (SELECT id FROM public.branches WHERE tenant_id = public.get_auth_tenant_id())
);
-- Add geolocation fields to properties table
-- Adds latitude and longitude for satellite/GPS coordinates

ALTER TABLE public.properties
ADD COLUMN IF NOT EXISTS latitude numeric,
ADD COLUMN IF NOT EXISTS longitude numeric;

-- Add comments for documentation
COMMENT ON COLUMN public.properties.latitude IS 'GPS latitude coordinate for property location';
COMMENT ON COLUMN public.properties.longitude IS 'GPS longitude coordinate for property location';

-- Create index for future geospatial queries
CREATE INDEX IF NOT EXISTS idx_properties_location ON public.properties (latitude, longitude);
-- Create Network Invitations table
-- Used for inviting other agencies/tenants to connect
CREATE TABLE IF NOT EXISTS public.network_invitations (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
  recipient_email text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'expired')),
  token uuid DEFAULT uuid_generate_v4(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(sender_tenant_id, recipient_email)
);

ALTER TABLE public.network_invitations ENABLE ROW LEVEL SECURITY;

-- Create Tenant Partnerships table
-- Represents an active connection between two tenants (agencies)
CREATE TABLE IF NOT EXISTS public.tenant_partnerships (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  requester_tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
  responder_tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
  status text DEFAULT 'active' CHECK (status IN ('active', 'blocked')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  -- Ensure unique partnership direction doesn't matter for uniqueness, but we enforce order for index
  UNIQUE(requester_tenant_id, responder_tenant_id)
);

ALTER TABLE public.tenant_partnerships ENABLE ROW LEVEL SECURITY;

-- Creating indexes
CREATE INDEX idx_network_invitations_token ON public.network_invitations(token);
CREATE INDEX idx_network_invitations_email ON public.network_invitations(recipient_email);
CREATE INDEX idx_partnerships_requester ON public.tenant_partnerships(requester_tenant_id);
CREATE INDEX idx_partnerships_responder ON public.tenant_partnerships(responder_tenant_id);

-- RLS Policies

-- Network Invitations:
-- Senders can manage their sent invitations
CREATE POLICY "Users can manage sent network invitations"
ON public.network_invitations
FOR ALL
TO authenticated
USING (sender_tenant_id = public.get_auth_tenant_id())
WITH CHECK (sender_tenant_id = public.get_auth_tenant_id());

-- Unauthenticated users needs to read by token to accept invitation (middleware wil handle this context usually, 
-- but for simplicity we might keep it restricted and use a secure function)
-- For now, authenticated users can view invitations sent to their email
CREATE POLICY "Users can view invitations to their email"
ON public.network_invitations
FOR SELECT
TO authenticated
USING (recipient_email = (SELECT email FROM auth.users WHERE id = auth.uid()));

-- Tenant Partnerships:
-- Users can view partnerships where their tenant is involved
CREATE POLICY "Users can view their partnerships"
ON public.tenant_partnerships
FOR SELECT
TO authenticated
USING (
  requester_tenant_id = public.get_auth_tenant_id() OR 
  responder_tenant_id = public.get_auth_tenant_id()
);

-- Helper function to check if two tenants are partners
CREATE OR REPLACE FUNCTION public.are_tenants_partners(tenant_a uuid, tenant_b uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 
    FROM public.tenant_partnerships
    WHERE (requester_tenant_id = tenant_a AND responder_tenant_id = tenant_b AND status = 'active')
       OR (requester_tenant_id = tenant_b AND responder_tenant_id = tenant_a AND status = 'active')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update Property RLS to allow partners to see shared properties
-- We create a NEW policy for this specific case to avoid complexity in existing ones
CREATE POLICY "Partners can view shared properties"
ON public.properties
FOR SELECT
TO authenticated
USING (
  is_shared = true AND
  public.are_tenants_partners(tenant_id, public.get_auth_tenant_id())
);
-- Seed default roles and branches for existing tenants
DO $$
DECLARE
  t record;
BEGIN
  FOR t IN SELECT id FROM public.tenants LOOP
    -- Insert default roles if they don't exist
    INSERT INTO public.roles (tenant_id, name)
    SELECT t.id, 'Administrador'
    WHERE NOT EXISTS (
      SELECT 1 FROM public.roles WHERE tenant_id = t.id AND name = 'Administrador'
    );

    INSERT INTO public.roles (tenant_id, name)
    SELECT t.id, 'Agente'
    WHERE NOT EXISTS (
      SELECT 1 FROM public.roles WHERE tenant_id = t.id AND name = 'Agente'
    );

    -- Insert default branch if it doesn't exist
    INSERT INTO public.branches (tenant_id, name, address)
    SELECT t.id, 'Casa Central', 'Oficina Principal'
    WHERE NOT EXISTS (
      SELECT 1 FROM public.branches WHERE tenant_id = t.id
    );
  END LOOP;
END;
$$;

-- Create trigger to automatically add defaults for new tenants
CREATE OR REPLACE FUNCTION public.handle_new_tenant()
RETURNS TRIGGER AS $$
BEGIN
  -- Default Roles
  INSERT INTO public.roles (tenant_id, name) VALUES (NEW.id, 'Administrador');
  INSERT INTO public.roles (tenant_id, name) VALUES (NEW.id, 'Agente');

  -- Default Branch
  INSERT INTO public.branches (tenant_id, name, address) VALUES (NEW.id, 'Casa Central', 'Oficina Principal');

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Check if trigger exists before creating it (idempotency)
DROP TRIGGER IF EXISTS on_tenant_created ON public.tenants;

CREATE TRIGGER on_tenant_created
AFTER INSERT ON public.tenants
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_tenant();
-- Fix RLS Policies for Roles and Branches
-- authenticated users need to be able to read roles and branches of their tenant
-- also allow anon for default tenant as demo fallback

-- Roles
DROP POLICY IF EXISTS "Users can view roles of their tenant" ON public.roles;

CREATE POLICY "Users can view roles of their tenant"
ON public.roles
FOR SELECT
USING (
  (auth.role() = 'authenticated' AND tenant_id = public.get_auth_tenant_id())
  OR 
  (tenant_id = '00000000-0000-0000-0000-000000000001')
);

-- Branches
DROP POLICY IF EXISTS "Users can view branches of their tenant" ON public.branches;

CREATE POLICY "Users can view branches of their tenant"
ON public.branches
FOR SELECT
USING (
  (auth.role() = 'authenticated' AND tenant_id = public.get_auth_tenant_id())
  OR 
  (tenant_id = '00000000-0000-0000-0000-000000000001')
);
-- Sync Auth Users to Profiles (Repair Script)
-- This is needed because db reset might wipe public.profiles but keep auth.users

DO $$
DECLARE
  u record;
  new_tenant_id uuid;
  admin_role_id uuid;
BEGIN
  FOR u IN SELECT * FROM auth.users LOOP
    -- Check if profile exists
    IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = u.id) THEN
      RAISE NOTICE 'Restoring profile for user %', u.email;

      -- Create Tenant
      INSERT INTO public.tenants (name, plan, default_currency)
      VALUES (COALESCE(u.raw_user_meta_data->>'agency_name', 'Mi Inmobiliaria'), 'free', 'USD')
      RETURNING id INTO new_tenant_id;

      -- Create Profile
      INSERT INTO public.profiles (id, tenant_id, name, email)
      VALUES (u.id, new_tenant_id, COALESCE(u.raw_user_meta_data->>'full_name', 'Usuario'), u.email);

      -- Create Roles
      INSERT INTO public.roles (tenant_id, name) VALUES (new_tenant_id, 'Administrador') RETURNING id INTO admin_role_id;
      INSERT INTO public.roles (tenant_id, name) VALUES (new_tenant_id, 'Agente');

      -- Create Branch
      INSERT INTO public.branches (tenant_id, name, address) VALUES (new_tenant_id, 'Casa Central', 'Oficina Principal');

      -- Assign Admin Role
      INSERT INTO public.user_role_assignments (user_id, role_id) VALUES (u.id, admin_role_id);

      -- Assign Branch
      INSERT INTO public.user_branches (user_id, branch_id)
      SELECT u.id, id FROM public.branches WHERE tenant_id = new_tenant_id LIMIT 1;
    END IF;
  END LOOP;
END;
$$;
-- Diagnostic Migration
DO $$
DECLARE
  profile_count int;
  tenant_count int;
  role_count int;
  branch_count int;
  auth_user_count int;
BEGIN
  SELECT count(*) INTO profile_count FROM public.profiles;
  SELECT count(*) INTO tenant_count FROM public.tenants;
  SELECT count(*) INTO role_count FROM public.roles;
  SELECT count(*) INTO branch_count FROM public.branches;
  
  -- auth.users might not be accessible if reset wipes everything but let's try
  BEGIN
    SELECT count(*) INTO auth_user_count FROM auth.users;
  EXCEPTION WHEN OTHERS THEN
    auth_user_count := -1;
  END;

  RAISE NOTICE 'DIAGNOSTIC - Tenants: %', tenant_count;
  RAISE NOTICE 'DIAGNOSTIC - Profiles: %', profile_count;
  RAISE NOTICE 'DIAGNOSTIC - Roles: %', role_count;
  RAISE NOTICE 'DIAGNOSTIC - Branches: %', branch_count;
  RAISE NOTICE 'DIAGNOSTIC - Auth Users: %', auth_user_count;

  -- Verify specific tenant for roles - 00000000-0000-0000-0000-000000000001
  RAISE NOTICE 'DIAGNOSTIC - Roles for Default Tenant: %', (SELECT count(*) FROM public.roles WHERE tenant_id = '00000000-0000-0000-0000-000000000001');
  RAISE NOTICE 'DIAGNOSTIC - Branches for Default Tenant: %', (SELECT count(*) FROM public.branches WHERE tenant_id = '00000000-0000-0000-0000-000000000001');
END;
$$;
-- Relax Tenants RLS for Network Discovery
-- Allow all authenticated users to see basic tenant info (id, name)
-- This is necessary for partnerships and invitations to show who they are from/to

DROP POLICY IF EXISTS "Users can view their own tenant" ON public.tenants;

CREATE POLICY "Users can view basic tenant info"
ON public.tenants
FOR SELECT
TO authenticated
USING (true); -- We only select id and name in code, but RLS allows the row

-- Also ensure the handle_new_user trigger in previous migrations is working
-- The previous reset showed 0 everything, which is suspicious if I am logged in.
-- I will add a policy to allow anyone to see the default tenant even if not logged in for local dev ease.
DROP POLICY IF EXISTS "Anyone can view default tenant" ON public.tenants;
CREATE POLICY "Anyone can view default tenant"
ON public.tenants
FOR SELECT
USING (id = '00000000-0000-0000-0000-000000000001');
-- Migration: Update handle_new_user to support metadata from invitations
-- Description: Allows linking users to an existing tenant and assigning roles/branches from metadata

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  target_tenant_id uuid;
  target_role_id uuid;
  target_branch_id uuid;
  agency_name text;
  user_full_name text;
  is_invitation boolean := false;
BEGIN
  -- Extract metadata safely
  BEGIN
    target_tenant_id := (new.raw_user_meta_data->>'tenant_id')::uuid;
    target_role_id := (new.raw_user_meta_data->>'role_id')::uuid;
    target_branch_id := (new.raw_user_meta_data->>'branch_id')::uuid;
    user_full_name := new.raw_user_meta_data->>'full_name';
    
    IF target_tenant_id IS NOT NULL THEN
      is_invitation := true;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    is_invitation := false;
  END;

  IF is_invitation THEN
    -- 1. Create User Profile linked to the invited tenant
    INSERT INTO public.profiles (id, tenant_id, name, email)
    VALUES (new.id, target_tenant_id, COALESCE(user_full_name, 'Usuario'), new.email)
    ON CONFLICT (id) DO UPDATE SET
      tenant_id = excluded.tenant_id,
      name = excluded.name,
      email = excluded.email;

    -- 2. Assign Invited Role
    IF target_role_id IS NOT NULL THEN
      INSERT INTO public.user_role_assignments (user_id, role_id)
      VALUES (new.id, target_role_id)
      ON CONFLICT DO NOTHING;
    END IF;

    -- 3. Link User to Invited Branch
    IF target_branch_id IS NOT NULL THEN
      INSERT INTO public.user_branches (user_id, branch_id)
      VALUES (new.id, target_branch_id)
      ON CONFLICT DO NOTHING;
    END IF;

    -- 4. Mark invitation as accepted if it exists
    UPDATE public.invitations
    SET status = 'accepted', accepted_at = now()
    WHERE email = new.email AND tenant_id = target_tenant_id;

  ELSE
    -- Original Signup Flow (Create New Tenant)
    BEGIN
      agency_name := new.raw_user_meta_data->>'agency_name';
      user_full_name := new.raw_user_meta_data->>'full_name';
    EXCEPTION WHEN OTHERS THEN
      agency_name := 'Mi Inmobiliaria';
      user_full_name := 'Usuario';
    END;

    IF agency_name IS NULL OR agency_name = '' THEN
      agency_name := 'Mi Inmobiliaria';
    END IF;

    -- 1. Create Tenant
    INSERT INTO public.tenants (name, plan, default_currency)
    VALUES (agency_name, 'free', 'USD')
    RETURNING id INTO target_tenant_id;

    -- 2. Create User Profile
    INSERT INTO public.profiles (id, tenant_id, name, email)
    VALUES (new.id, target_tenant_id, COALESCE(user_full_name, 'Usuario'), new.email)
    ON CONFLICT (id) DO UPDATE SET
      tenant_id = excluded.tenant_id,
      name = excluded.name,
      email = excluded.email;

    -- 3. Create Default Roles & Assign Admin
    INSERT INTO public.roles (tenant_id, name)
    VALUES (target_tenant_id, 'Administrador')
    RETURNING id INTO target_role_id;

    INSERT INTO public.roles (tenant_id, name)
    VALUES (target_tenant_id, 'Agente')
    ON CONFLICT DO NOTHING;

    INSERT INTO public.user_role_assignments (user_id, role_id)
    VALUES (new.id, target_role_id)
    ON CONFLICT DO NOTHING;

    -- 4. Create Default Branch & Link
    INSERT INTO public.branches (tenant_id, name, address)
    VALUES (target_tenant_id, 'Casa Central', 'Dirección Principal')
    RETURNING id INTO target_branch_id;

    INSERT INTO public.user_branches (user_id, branch_id)
    VALUES (new.id, target_branch_id)
    ON CONFLICT DO NOTHING;
  END IF;

  RETURN new;
EXCEPTION WHEN OTHERS THEN
  RAISE WARNING 'Error in handle_new_user trigger: %', SQLERRM;
  RETURN new;
END;
$$;
-- Lead Tracking Enhancement Migration
-- Add columns for property interest, preferences, communication channels, and tracking

-- Add new columns to leads table
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS interested_property_id uuid REFERENCES public.properties(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS property_preferences jsonb DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS communication_channels jsonb DEFAULT '{"whatsapp": true, "email": true, "phone": true, "social": false}'::jsonb,
  ADD COLUMN IF NOT EXISTS tracking_enabled boolean DEFAULT false;

-- Add index for better query performance
CREATE INDEX IF NOT EXISTS leads_interested_property_id_idx ON public.leads(interested_property_id);
CREATE INDEX IF NOT EXISTS leads_tracking_enabled_idx ON public.leads(tracking_enabled) WHERE tracking_enabled = true;

-- Add comment to document the schema
COMMENT ON COLUMN public.leads.interested_property_id IS 'Reference to a specific property the lead is interested in';
COMMENT ON COLUMN public.leads.property_preferences IS 'JSON object storing property preferences like type, location, price range, etc. Example: {"property_type": "apartment", "min_price": 100000, "max_price": 200000}';
COMMENT ON COLUMN public.leads.communication_channels IS 'JSON object storing enabled communication channels. Example: {"whatsapp": true, "email": true, "phone": false, "social": false}';
COMMENT ON COLUMN public.leads.tracking_enabled IS 'Master switch to enable/disable automated tracking and follow-up for this lead';
-- Revert get_auth_tenant_id function to use 'profiles'
-- The system uses 'profiles' as the consolidated user table name.

CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
BEGIN
  RETURN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid());
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public;

GRANT EXECUTE ON FUNCTION public.get_auth_tenant_id() TO authenticated;
-- Comprehensive Fix for 'public.users' -> 'public.profiles' references
-- This script updates the helper function and RLS policies that might still be using the old table name

--------------------------------------------------------------------------------
-- 1. Fix the helper function get_auth_tenant_id
--------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
BEGIN
  RETURN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid());
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public;

--------------------------------------------------------------------------------
-- 2. Fix RLS Policies across key tables
-- We will DROP and RECREATE policies to ensure they use the correct table 'profiles'
--------------------------------------------------------------------------------

-- Table: public.tenants
DROP POLICY IF EXISTS "Users can view their own tenant" ON public.tenants;
CREATE POLICY "Users can view their own tenant" ON public.tenants
FOR SELECT USING (
  id IN (
    SELECT tenant_id FROM public.profiles WHERE id = auth.uid()
  )
);

-- Table: public.profiles
DROP POLICY IF EXISTS "Users can view profiles in their tenant" ON public.profiles;
CREATE POLICY "Users can view profiles in their tenant" ON public.profiles
FOR SELECT USING (
  tenant_id IN (
    SELECT tenant_id FROM public.profiles WHERE id = auth.uid()
  )
);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" ON public.profiles
FOR UPDATE USING (
  id = auth.uid()
);

-- Table: public.roles
DROP POLICY IF EXISTS "Users can view roles in their tenant" ON public.roles;
CREATE POLICY "Users can view roles in their tenant" ON public.roles
FOR SELECT USING (
  tenant_id IN (
    SELECT tenant_id FROM public.profiles WHERE id = auth.uid()
  )
);

-- Table: public.branches
DROP POLICY IF EXISTS "Users can view branches in their tenant" ON public.branches;
CREATE POLICY "Users can view branches in their tenant" ON public.branches
FOR SELECT USING (
  tenant_id IN (
    SELECT tenant_id FROM public.profiles WHERE id = auth.uid()
  )
);

--------------------------------------------------------------------------------
-- 3. Fix Properties RLS (The one causing the "relation does not exist" error)
--------------------------------------------------------------------------------

-- Table: public.properties
-- Policy for viewing properties in same tenant
DROP POLICY IF EXISTS "Users can view properties in their tenant" ON public.properties;
CREATE POLICY "Users can view properties in their tenant" ON public.properties
FOR SELECT USING (
  tenant_id IN (
    SELECT tenant_id FROM public.profiles WHERE id = auth.uid()
  )
);

-- Policy for viewing SHARED properties (Network Logic)
-- Original logic might have used public.users or get_auth_tenant_id() which was broken
DROP POLICY IF EXISTS "Partners can view shared properties" ON public.properties;
CREATE POLICY "Partners can view shared properties" ON public.properties
FOR SELECT USING (
  is_shared = true 
  AND 
  EXISTS (
    SELECT 1 FROM public.tenant_partnerships tp
    WHERE tp.status = 'active'
    AND (
      (tp.requester_tenant_id = properties.tenant_id AND tp.responder_tenant_id = (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()))
      OR
      (tp.responder_tenant_id = properties.tenant_id AND tp.requester_tenant_id = (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()))
    )
  )
);

--------------------------------------------------------------------------------
-- 4. Fix Automation Rules (if applicable)
--------------------------------------------------------------------------------
DROP POLICY IF EXISTS "Users can view automation rules" ON public.automation_rules;
CREATE POLICY "Users can view automation rules" ON public.automation_rules
FOR SELECT USING (
  tenant_id IN (
    SELECT tenant_id FROM public.profiles WHERE id = auth.uid()
  )
);
-- Migration: 20260224000001_public_access_fixes.sql
-- Description: Enable public access for shared properties, tenants (by slug), and lead creation via public portal.

-- 1. Grant permissions to anon role
GRANT SELECT ON public.tenants TO anon;
GRANT INSERT ON public.leads TO anon;
GRANT SELECT ON public.property_media TO anon;
GRANT SELECT ON public.properties TO anon;

-- 2. Public Policies for Tenants
-- Anyone can see basic tenant info (needed for slug resolution)
DROP POLICY IF EXISTS "Public can see tenants" ON public.tenants;
CREATE POLICY "Public can see tenants" 
ON public.tenants FOR SELECT 
TO anon 
USING (true);

-- 3. Public Policies for Shared Properties
DROP POLICY IF EXISTS "Public can see shared properties" ON public.properties;
CREATE POLICY "Public can see shared properties" 
ON public.properties FOR SELECT 
TO anon 
USING (is_shared = true);

-- 4. Public Policies for Property Media
-- Media linked to shared properties should be visible
DROP POLICY IF EXISTS "Public can see shared media" ON public.property_media;
CREATE POLICY "Public can see shared media" 
ON public.property_media FOR SELECT 
TO anon 
USING (
  EXISTS (
    SELECT 1 FROM public.properties p 
    WHERE p.id = property_media.property_id 
    AND p.is_shared = true
  )
);

-- 5. Public Policies for Leads (Contact Form)
-- Allow public portal to create leads
DROP POLICY IF EXISTS "Public can create leads" ON public.leads;
CREATE POLICY "Public can create leads" 
ON public.leads FOR INSERT 
TO anon 
WITH CHECK (source = 'website');
-- Migration: 20260224000002_fix_rls_recursion.sql
-- Description: Fix infinite recursion in profiles and storage.objects RLS policies.

-- 1. Ensure get_auth_tenant_id is optimized and secure
CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
BEGIN
  -- We query the table using SECURITY DEFINER to bypass RLS and avoid recursion
  RETURN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid());
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public;

-- 2. Fix Profils RLS (The root of the recursion)
DROP POLICY IF EXISTS "Users can view profiles in their tenant" ON public.profiles;

CREATE POLICY "Users can view profiles in their tenant" 
ON public.profiles FOR SELECT 
TO authenticated 
USING (
    id = auth.uid() -- Always allow seeing your own profile
    OR 
    tenant_id = public.get_auth_tenant_id() -- Use the security definer function for others
);

-- 3. Fix Storage Policies (Remove subqueries that might trigger RLS elsewhere)
-- Properties Bucket
DROP POLICY IF EXISTS "Authenticated Upload" ON storage.objects;
CREATE POLICY "Authenticated Upload" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (
    bucket_id = 'properties' 
    AND (public.get_auth_tenant_id() IS NOT NULL) -- Ensure user belongs to a tenant
);

-- Documents Bucket (Cleanup)
DROP POLICY IF EXISTS "Tenant Isolated View Documents" ON storage.objects;
DROP POLICY IF EXISTS "Tenant Isolated Upload Documents" ON storage.objects;

CREATE POLICY "Tenant Isolated View Documents" 
ON storage.objects FOR SELECT 
TO authenticated 
USING (
    bucket_id = 'documents' 
    AND (
        (metadata->>'tenant_id')::uuid = public.get_auth_tenant_id()
    )
);

CREATE POLICY "Tenant Isolated Upload Documents" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (
    bucket_id = 'documents' 
    AND (
        (metadata->>'tenant_id')::uuid = public.get_auth_tenant_id()
    )
);
-- Migration: 20260225000001_fix_public_visibility.sql
-- Description: Enable anon access to available properties and their media.

-- 1. Property Visibility for Anon
DROP POLICY IF EXISTS "Public can see shared properties" ON public.properties;
DROP POLICY IF EXISTS "Public can see available properties" ON public.properties;

CREATE POLICY "Public can see available properties" 
ON public.properties FOR SELECT 
TO anon 
USING (status = 'available');

-- 2. Media Visibility for Anon
DROP POLICY IF EXISTS "Public can see shared media" ON public.property_media;
DROP POLICY IF EXISTS "Public can see available media" ON public.property_media;

CREATE POLICY "Public can see available media" 
ON public.property_media FOR SELECT 
TO anon 
USING (
  EXISTS (
    SELECT 1 FROM public.properties p 
    WHERE p.id = property_media.property_id 
    AND p.status = 'available'
  )
);

-- 3. Tenant Info for Anon (Already exists but ensuring)
DROP POLICY IF EXISTS "Public can see tenants" ON public.tenants;
CREATE POLICY "Public can see tenants" 
ON public.tenants FOR SELECT 
TO anon 
USING (true);

-- 4. Grant Permissions (Ensuring)
GRANT SELECT ON public.properties TO anon;
GRANT SELECT ON public.property_media TO anon;
GRANT SELECT ON public.tenants TO anon;
-- Migration: 20260225000002_add_tenant_slug.sql
-- Description: Add slug column to tenants for readable URLs.

-- 1. Add slug column
ALTER TABLE public.tenants ADD COLUMN IF NOT EXISTS slug text UNIQUE;

-- 2. Function to generate slug
CREATE OR REPLACE FUNCTION generate_slug(name text) RETURNS text AS $$
BEGIN
  RETURN lower(regexp_replace(name, '[^a-zA-Z0-9]+', '-', 'g'));
END;
$$ LANGUAGE plpgsql;

-- 3. Backfill existing slugs
UPDATE public.tenants 
SET slug = generate_slug(name) 
WHERE slug IS NULL;

-- 4. Make it NOT NULL after backfill
ALTER TABLE public.tenants ALTER COLUMN slug SET NOT NULL;

-- 5. Trigger to generate slug on insert
CREATE OR REPLACE FUNCTION handle_new_tenant_slug() 
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL THEN
    NEW.slug := generate_slug(NEW.name);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tr_generate_tenant_slug ON public.tenants;
CREATE TRIGGER tr_generate_tenant_slug
BEFORE INSERT ON public.tenants
FOR EACH ROW
EXECUTE FUNCTION handle_new_tenant_slug();
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
-- Migration: add_notes_to_leads.sql
-- Description: Add notes column to leads table for storing inquiry messages

ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS notes text;
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
-- Migration: 20260227000001_add_unique_constraint_portals.sql
-- Description: Adds a unique constraint to portal_connections to support upsert operations

-- Clean up any potential duplicates before adding the constraint (keeping the most recent)
DELETE FROM public.portal_connections
WHERE id IN (
  SELECT id
  FROM (
    SELECT id, ROW_NUMBER() OVER(
      PARTITION BY tenant_id, portal_name
      ORDER BY updated_at DESC, created_at DESC
    ) AS rn
    FROM public.portal_connections
  ) t
  WHERE t.rn > 1
);

-- Add the unique constraint
ALTER TABLE public.portal_connections
ADD CONSTRAINT portal_connections_tenant_portal_key UNIQUE (tenant_id, portal_name);
-- Migration: 20260228000002_add_lead_to_conversations.sql
-- Description: Add lead_id to conversations table to support messaging with clients

ALTER TABLE public.conversations 
ADD COLUMN IF NOT EXISTS lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE;

-- Add index for performance
CREATE INDEX IF NOT EXISTS idx_conversations_lead ON public.conversations(lead_id);

-- Update RLS for conversations to ensure agents can only see conversations linked to leads if they belong to the same tenant (already covered by existing tenant_id check)
-- But we might want to add a specific policy for agents assigned to the lead?
-- For now, the tenant-level policy is sufficient for a first version.
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
-- Migration: 20260228000004_settings_rls_policies.sql
-- Description: Add RLS policies for tenants and branches

-- 1. Tenants Policies
DROP POLICY IF EXISTS "Users can see their own tenant" ON public.tenants;
CREATE POLICY "Users can see their own tenant" 
ON public.tenants FOR SELECT 
TO authenticated 
USING (id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can update their own tenant" ON public.tenants;
CREATE POLICY "Users can update their own tenant" 
ON public.tenants FOR UPDATE 
TO authenticated 
USING (id = public.get_auth_tenant_id())
WITH CHECK (id = public.get_auth_tenant_id());

-- 2. Branches Policies
DROP POLICY IF EXISTS "Users can see their own branches" ON public.branches;
CREATE POLICY "Users can see their own branches" 
ON public.branches FOR SELECT 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id());

DROP POLICY IF EXISTS "Users can manage their own branches" ON public.branches;
CREATE POLICY "Users can manage their own branches" 
ON public.branches FOR ALL 
TO authenticated 
USING (tenant_id = public.get_auth_tenant_id())
WITH CHECK (tenant_id = public.get_auth_tenant_id());
-- Migration: 20260228000005_add_notification_preferences.sql
-- Description: Add notification preferences to profiles

ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS notification_preferences JSONB DEFAULT '{
    "email": {
        "new_lead": true,
        "new_task": true,
        "new_message": true,
        "property_published": true
    },
    "push": {
        "new_lead": true,
        "new_task": true,
        "new_message": true
    },
    "whatsapp": {
        "new_lead": false
    }
}'::JSONB;
-- Migration: 20260228000006_enhance_automations.sql
-- Description: Add support for lead follow-up in automation rules

-- 1. Update action_type check constraint
-- We need to drop the existing constraint and add a new one including 'lead_follow_up'
DO $$ 
BEGIN
    ALTER TABLE public.automation_rules DROP CONSTRAINT IF EXISTS automation_rules_action_type_check;
    ALTER TABLE public.automation_rules ADD CONSTRAINT automation_rules_action_type_check 
    CHECK (action_type IN ('send_email', 'create_task', 'send_notification', 'update_lead_field', 'lead_follow_up'));
END $$;
-- Migration: 20260301000001_add_channel_connections.sql
-- Description: Create table for communication channel connections

-- 1. Create channel_connections table
CREATE TABLE IF NOT EXISTS public.channel_connections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
    channel_name TEXT CHECK (channel_name IN ('whatsapp', 'instagram', 'facebook', 'gmail', 'tiktok')) NOT NULL,
    status TEXT CHECK (status IN ('connected', 'disconnected', 'error', 'pending')) DEFAULT 'disconnected',
    credentials JSONB, -- Stores tokens, API keys, etc.
    account_info JSONB, -- Stores public account info (name, handle, avatar)
    last_sync_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create unique index to ensure one connection per channel per tenant
CREATE UNIQUE INDEX IF NOT EXISTS channel_connections_tenant_channel_idx ON public.channel_connections(tenant_id, channel_name);

-- 3. Enable RLS
ALTER TABLE public.channel_connections ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS Policies
CREATE POLICY "Users can view their tenant's channel connections"
    ON public.channel_connections FOR SELECT
    USING (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can insert their tenant's channel connections"
    ON public.channel_connections FOR INSERT
    WITH CHECK (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can update their tenant's channel connections"
    ON public.channel_connections FOR UPDATE
    USING (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can delete their tenant's channel connections"
    ON public.channel_connections FOR DELETE
    USING (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

-- 5. Trigger for updated_at
CREATE OR REPLACE FUNCTION update_channel_connections_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS tr_channel_connections_updated_at ON public.channel_connections;
CREATE TRIGGER tr_channel_connections_updated_at
    BEFORE UPDATE ON public.channel_connections
    FOR EACH ROW
    EXECUTE FUNCTION update_channel_connections_updated_at();

-- Migration: Add target scoping and template support to automation_rules
-- Date: 2026-03-07

ALTER TABLE public.automation_rules
    ADD COLUMN IF NOT EXISTS target_type TEXT NOT NULL DEFAULT 'all' 
        CHECK (target_type IN ('all', 'lead', 'property')),
    ADD COLUMN IF NOT EXISTS target_id UUID NULL,
    ADD COLUMN IF NOT EXISTS templates JSONB NULL DEFAULT '[]'::jsonb;

-- Index for fast lookups by target
CREATE INDEX IF NOT EXISTS idx_automation_rules_target_id
    ON public.automation_rules(target_id)
    WHERE target_id IS NOT NULL;

COMMENT ON COLUMN public.automation_rules.target_type IS 'Scope: all, lead, or property';
COMMENT ON COLUMN public.automation_rules.target_id IS 'UUID of the specific lead or property (NULL when target_type = all)';
COMMENT ON COLUMN public.automation_rules.templates IS 'Array of capture template file references (name, url, type)';
-- Migration: 20260307000002_document_templates.sql
-- Description: Create table for document templates and improve contracts table

-- 1. Create document_templates table
CREATE TABLE IF NOT EXISTS public.document_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    content TEXT NOT NULL, -- HTML or markdown content
    type TEXT NOT NULL CHECK (type IN ('reservation', 'rental', 'sale', 'receipt', 'other')),
    is_system BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Add some initial system templates (optional, can be done via seed too)
INSERT INTO public.document_templates (name, type, is_system, content)
VALUES 
('Reserva Ad Referendum', 'reservation', true, 'RESERVA AD REFERENDUM\n\nEntre el Sr. {{lead_name}}...'),
('Contrato de Locación Vivienda', 'rental', true, 'CONTRATO DE LOCACIÓN\n\nEn la ciudad de...'),
('Recibo de Alquiler', 'receipt', true, 'RECIBO DE ALQUILER\n\nRecibí de {{lead_name}} la suma de...'),
('Boleto de Compraventa', 'sale', true, 'BOLETO DE COMPRAVENTA\n\nEntre el VENDEDOR...');

-- 3. Enable RLS
ALTER TABLE public.document_templates ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS Policies
CREATE POLICY "Users can view their tenant's templates and system templates"
    ON public.document_templates FOR SELECT
    USING (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()) OR is_system = true);

CREATE POLICY "Users can insert their tenant's templates"
    ON public.document_templates FOR INSERT
    WITH CHECK (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can update their tenant's templates"
    ON public.document_templates FOR UPDATE
    USING (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

CREATE POLICY "Users can delete their tenant's templates"
    ON public.document_templates FOR DELETE
    USING (tenant_id IN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid()));

-- 5. Trigger for updated_at
CREATE OR REPLACE FUNCTION update_document_templates_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS tr_document_templates_updated_at ON public.document_templates;
CREATE TRIGGER tr_document_templates_updated_at
    BEFORE UPDATE ON public.document_templates
    FOR EACH ROW
    EXECUTE FUNCTION update_document_templates_updated_at();

-- 6. Add metadata column to contracts if not exists
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='contracts' AND column_name='metadata') THEN
        ALTER TABLE public.contracts ADD COLUMN metadata JSONB DEFAULT '{}'::jsonb;
    END IF;
END $$;
-- Migration: 20260307000003_fix_contract_types.sql
-- Description: Add 'receipt' to the contracts table type check constraint

-- 1. Drop the existing constraint
ALTER TABLE public.contracts DROP CONSTRAINT IF EXISTS contracts_type_check;

-- 2. Add the updated constraint including 'receipt'
ALTER TABLE public.contracts ADD CONSTRAINT contracts_type_check 
CHECK (type IN ('reservation', 'rental', 'sale', 'receipt', 'other'));
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
-- Migration: 20260307000005_ensure_dev_tenant.sql
-- Description: Ensure the default development tenant exists

INSERT INTO public.tenants (id, name, plan, default_currency)
VALUES ('00000000-0000-0000-0000-000000000001', 'Desarrollo / Sistema', 'enterprise', 'USD')
ON CONFLICT (id) DO NOTHING;
-- Migration: 20260309000000_add_dni_to_leads.sql
-- Description: Add DNI column to leads table for better legal documentation support

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='leads' AND column_name='dni') THEN
        ALTER TABLE public.leads ADD COLUMN dni TEXT;
    END IF;
END $$;
-- Migration: 20260309000001_update_contract_types.sql
-- Description: Add 'property_doc' and 'lead_doc' to the contracts table type check constraint

-- 1. Drop the existing constraint
ALTER TABLE public.contracts DROP CONSTRAINT IF EXISTS contracts_type_check;

-- 2. Add the updated constraint including new document types
ALTER TABLE public.contracts ADD CONSTRAINT contracts_type_check 
CHECK (type IN ('reservation', 'rental', 'sale', 'receipt', 'property_doc', 'lead_doc', 'other'));
-- Create subscription plans table
CREATE TABLE IF NOT EXISTS subscription_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    price_ars DECIMAL(12, 2) NOT NULL,
    max_properties INTEGER NOT NULL,
    max_leads INTEGER NOT NULL,
    max_content_creations_per_month INTEGER NOT NULL,
    max_automations INTEGER NOT NULL,
    max_responses_per_automation INTEGER NOT NULL,
    allows_team_invites BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert fixed plans as per requirements
INSERT INTO subscription_plans (name, price_ars, max_properties, max_leads, max_content_creations_per_month, max_automations, max_responses_per_automation, allows_team_invites)
VALUES 
('Gratuito', 0.00, 5, 10, 3, 3, 5, FALSE),
('Profesional', 50000.00, 999999, 999999, 999999, 999999, 999999, FALSE),
('Agencia', 150000.00, 999999, 999999, 999999, 999999, 999999, TRUE)
ON CONFLICT (name) DO UPDATE SET
    price_ars = EXCLUDED.price_ars,
    max_properties = EXCLUDED.max_properties,
    max_leads = EXCLUDED.max_leads,
    max_content_creations_per_month = EXCLUDED.max_content_creations_per_month,
    max_automations = EXCLUDED.max_automations,
    max_responses_per_automation = EXCLUDED.max_responses_per_automation,
    allows_team_invites = EXCLUDED.allows_team_invites;

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS user_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    plan_id UUID REFERENCES subscription_plans(id),
    status TEXT NOT NULL DEFAULT 'active', -- 'active', 'past_due', 'canceled', 'expired'
    current_period_start TIMESTAMPTZ DEFAULT NOW(),
    current_period_end TIMESTAMPTZ DEFAULT NOW() + INTERVAL '1 month',
    payment_method_id TEXT, -- Reference to MercadoPago payment token if applicable
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Create subscription invitations table (Tier 3)
CREATE TABLE IF NOT EXISTS subscription_invites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inviter_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    invitee_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    subscription_id UUID REFERENCES user_subscriptions(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'accepted', -- For now we auto-accept based on requirement "invitados"
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(invitee_id) -- A user can only be invited to one team at a time
);

-- RLS Policies
ALTER TABLE subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_invites ENABLE ROW LEVEL SECURITY;

-- Everyone can view plans
CREATE POLICY "Public plans access" ON subscription_plans FOR SELECT TO public USING (true);

-- Users can only view their own subscription
CREATE POLICY "Users view own subscription" ON user_subscriptions FOR SELECT TO authenticated
USING (auth.uid() = user_id OR id IN (SELECT subscription_id FROM subscription_invites WHERE invitee_id = auth.uid()));

-- Users can manage their own subscription (placeholder for actual payment system)
CREATE POLICY "Users manage own subscription" ON user_subscriptions FOR ALL TO authenticated
USING (auth.uid() = user_id);

-- Agency owners can manage invites
CREATE POLICY "Agency owners manage invites" ON subscription_invites FOR ALL TO authenticated
USING (inviter_id = auth.uid());

-- Invitees can view their invites
CREATE POLICY "Invitees view invites" ON subscription_invites FOR SELECT TO authenticated
USING (invitee_id = auth.uid());

-- Function to handle monthly content tracking
CREATE TABLE IF NOT EXISTS usage_tracking (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    feature TEXT NOT NULL,
    count INTEGER DEFAULT 1,
    period_start TIMESTAMPTZ NOT NULL,
    period_end TIMESTAMPTZ NOT NULL,
    UNIQUE(user_id, feature, period_start)
);

ALTER TABLE usage_tracking ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users view own usage" ON usage_tracking FOR SELECT TO authenticated USING (auth.uid() = user_id);
-- Add token and email support to subscription invites
ALTER TABLE public.subscription_invites 
ADD COLUMN IF NOT EXISTS invitee_email TEXT,
ADD COLUMN IF NOT EXISTS token UUID DEFAULT gen_random_uuid(),
ADD COLUMN IF NOT EXISTS expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '7 days');

-- Make invitee_id nullable so we can invite by email first
ALTER TABLE public.subscription_invites 
ALTER COLUMN invitee_id DROP NOT NULL;

-- Add index for token lookup
CREATE INDEX IF NOT EXISTS idx_subscription_invites_token ON public.subscription_invites(token);
-- Migration: 20260310000003_fix_tenants_subscription_rls.sql
-- Description: Allow authenticated users to create their own tenant (agency) and update it.

-- 1. Allow authenticated users to insert a new tenant
-- This is needed for the onboarding flow when a user doesn't have an agency yet.
DROP POLICY IF EXISTS "Users can insert their own tenant" ON public.tenants;
CREATE POLICY "Users can insert their own tenant"
ON public.tenants
FOR INSERT
TO authenticated
WITH CHECK (true); -- We rely on the server action and trigger to link it to the user

-- 2. Allow users to update their own tenant
-- This is needed to change subscription plans.
DROP POLICY IF EXISTS "Users can update their own tenant" ON public.tenants;
CREATE POLICY "Users can update their own tenant"
ON public.tenants
FOR UPDATE
TO authenticated
USING (id = public.get_auth_tenant_id())
WITH CHECK (id = public.get_auth_tenant_id());
-- Migration: 20260316000000_reminders.sql
-- Description: Add reminder fields and notifications table

-- Add fields to tasks
ALTER TABLE public.tasks 
ADD COLUMN IF NOT EXISTS reminder_hours integer DEFAULT 2,
ADD COLUMN IF NOT EXISTS reminder_channels text[] DEFAULT ARRAY['in-app'],
ADD COLUMN IF NOT EXISTS agent_reminder_sent boolean DEFAULT false;

-- Add fields to visits
ALTER TABLE public.visits
ADD COLUMN IF NOT EXISTS reminder_hours integer DEFAULT 2,
ADD COLUMN IF NOT EXISTS agent_reminder_channels text[] DEFAULT ARRAY['in-app'],
ADD COLUMN IF NOT EXISTS client_reminder_channels text[] DEFAULT ARRAY['email'],
ADD COLUMN IF NOT EXISTS agent_reminder_sent boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS client_reminder_sent boolean DEFAULT false;

-- Create notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title text NOT NULL,
    message text NOT NULL,
    type text, -- 'task_reminder', 'visit_reminder', 'system'
    read boolean DEFAULT false,
    related_id uuid, -- refers to task or visit
    created_at timestamptz DEFAULT now()
);

-- Enable RLS for notifications
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for notifications
DROP POLICY IF EXISTS "Users can view their own notifications" ON public.notifications;
CREATE POLICY "Users can view their own notifications" ON public.notifications 
FOR SELECT USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Users can update their own notifications" ON public.notifications;
CREATE POLICY "Users can update their own notifications" ON public.notifications 
FOR UPDATE USING (user_id = auth.uid());

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_notifications_user ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_tenant ON public.notifications(tenant_id);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON public.notifications(read);
-- Fixes infinite recursion in conversation_participants RLS policies

-- 1. Drop the problematic policies
DROP POLICY IF EXISTS "Users can view participants of their conversations" ON conversation_participants;
DROP POLICY IF EXISTS "Users can add participants to conversations they're in" ON conversation_participants;

-- 2. Create a helper function to check participation without recursion
-- Using SECURITY DEFINER to bypass RLS checks within the function context
CREATE OR REPLACE FUNCTION public.check_is_conversation_participant(conv_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 
        FROM conversation_participants 
        WHERE conversation_id = conv_id 
        AND user_id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- 3. Re-create the policies using the helper function
CREATE POLICY "Users can view participants of their conversations"
    ON conversation_participants FOR SELECT
    USING (
        public.check_is_conversation_participant(conversation_id)
    );

CREATE POLICY "Users can add participants to conversations they're in"
    ON conversation_participants FOR INSERT
    WITH CHECK (
        public.check_is_conversation_participant(conversation_id)
        OR 
        -- Allow adding yourself to a conversation created for your tenant
        EXISTS (
            SELECT 1 FROM conversations 
            WHERE id = conversation_id 
            AND tenant_id = public.get_auth_tenant_id()
        )
    );

-- Also ensure messages policy is robust
DROP POLICY IF EXISTS "Users can view messages in their conversations" ON messages;
DROP POLICY IF EXISTS "Users can send messages to their conversations" ON messages;

CREATE POLICY "Users can view messages in their conversations"
    ON messages FOR SELECT
    USING (
        public.check_is_conversation_participant(conversation_id)
    );

CREATE POLICY "Users can send messages to their conversations"
    ON messages FOR INSERT
    WITH CHECK (
        public.check_is_conversation_participant(conversation_id)
        AND sender_id = auth.uid()
    );
-- Migration: 20260327000001_create_notifications_table.sql
-- Description: Creates the notifications table (idempotent - safe to run multiple times)
-- This migration ensures the notifications table exists with proper RLS policies.

-- Create notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title text NOT NULL,
    message text NOT NULL,
    type text, -- 'task_reminder', 'visit_reminder', 'system'
    read boolean DEFAULT false,
    related_id uuid,
    created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Policies (idempotent)
DROP POLICY IF EXISTS "Users can view their own notifications" ON public.notifications;
CREATE POLICY "Users can view their own notifications" ON public.notifications 
    FOR SELECT USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Users can update their own notifications" ON public.notifications;
CREATE POLICY "Users can update their own notifications" ON public.notifications 
    FOR UPDATE USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Service can insert notifications" ON public.notifications;
CREATE POLICY "Service can insert notifications" ON public.notifications 
    FOR INSERT WITH CHECK (tenant_id = public.get_auth_tenant_id());

-- Indices
CREATE INDEX IF NOT EXISTS idx_notifications_user ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_tenant ON public.notifications(tenant_id);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON public.notifications(read);
CREATE INDEX IF NOT EXISTS idx_notifications_created ON public.notifications(created_at DESC);
-- Migration: 20260327000002_demo_system.sql
-- Adds superadmin flag to profiles and creates the demo_sessions table

-- Add superadmin flag to profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_superadmin boolean DEFAULT false;

-- Create demo_sessions table
CREATE TABLE IF NOT EXISTS public.demo_sessions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text NOT NULL UNIQUE,
    password_code text NOT NULL,
    expires_at timestamptz NOT NULL,
    used_at timestamptz,
    auth_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.demo_sessions ENABLE ROW LEVEL SECURITY;

-- Only superadmins can view/manage demo sessions (via service role from server actions)
-- Regular users cannot access this table at all
CREATE POLICY "Superadmins can manage demo sessions" ON public.demo_sessions
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND is_superadmin = true
        )
    );

-- Index for fast lookups by email
CREATE INDEX IF NOT EXISTS idx_demo_sessions_email ON public.demo_sessions(email);
CREATE INDEX IF NOT EXISTS idx_demo_sessions_expires ON public.demo_sessions(expires_at);
-- Seed: Set superadmin flag for the system owner
-- Run this script ONCE to initialize the superadmin account.
-- The user MUST have logged in at least once before running this.

DO $$
DECLARE
    v_user_id uuid;
BEGIN
    -- Find the user by email in auth.users
    SELECT id INTO v_user_id
    FROM auth.users
    WHERE email = 'aminhatar01@gmail.com'
    LIMIT 1;

    IF v_user_id IS NULL THEN
        RAISE NOTICE 'User not found. Please log in first to create the account, then run this script.';
    ELSE
        -- Update their profile to mark as superadmin
        UPDATE public.profiles
        SET is_superadmin = true
        WHERE id = v_user_id;

        RAISE NOTICE 'Superadmin flag set for user: %', v_user_id;
    END IF;
END $$;
-- Migration: 20260327000004_payment_webhooks.sql
-- Description: Adds idempotency table for Mercado Pago webhooks and hardens user_subscriptions RLS

-- 1. Create table for webhook idempotency
CREATE TABLE IF NOT EXISTS public.payment_events (
    id text PRIMARY KEY, -- Mercado Pago event ID or idempotency key
    type text NOT NULL,
    status text NOT NULL,
    payload jsonb NOT NULL,
    processed_at timestamptz DEFAULT now()
);

-- Protect internal table
ALTER TABLE public.payment_events ENABLE ROW LEVEL SECURITY;
-- No policies: completely locked out from client access. Only accessible by service role (webhooks).

-- 2. Ensure user_subscriptions can only be strictly modified by Service Role or Superadmin
-- Check if the table has RLS enabled
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;

-- Ensure users can only SEE their own subscriptions (and invites see theirs)
-- Note: We avoid modifying existing SELECT policies unless missing. Here we just add the lockdown for UPDATE/INSERT if needed.
-- In Supabase, if RLS is enabled, by default no access is granted without policies. 
-- Service role bypasses RLS entirely, which is how our webhook will update the `plan_id` and `current_period_end`.
