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
