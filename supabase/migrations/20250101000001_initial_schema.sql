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
