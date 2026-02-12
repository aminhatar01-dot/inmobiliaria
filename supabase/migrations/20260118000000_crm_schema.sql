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
