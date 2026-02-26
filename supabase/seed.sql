-- Insert a default tenant
insert into public.tenants (id, name, plan)
values ('00000000-0000-0000-0000-000000000001', 'Agencia InmoDefault', 'premium')
on conflict (id) do nothing;

-- Add default roles for the default tenant
insert into public.roles (tenant_id, name)
values 
  ('00000000-0000-0000-0000-000000000001', 'Administrador'),
  ('00000000-0000-0000-0000-000000000001', 'Agente')
on conflict do nothing;

-- Add default branch for the default tenant
insert into public.branches (tenant_id, name, address)
values ('00000000-0000-0000-0000-000000000001', 'Casa Central', 'Oficina Principal')
on conflict do nothing;

-- Add some default properties for testing
insert into public.properties (id, tenant_id, title, operation_type, property_type, price, currency, address, status)
values 
  ('11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000001', 'Studio Palermo Soho', 'rent', 'departamento', 850, 'USD', 'Honduras 4800, CABA', 'available'),
  ('22222222-2222-2222-2222-222222222222', '00000000-0000-0000-0000-000000000001', 'Piso Recoleta Exclusive', 'sale', 'departamento', 450000, 'USD', 'Av. Alvear 1800, CABA', 'available')
on conflict (id) do nothing;

-- Add default leads
insert into public.leads (id, tenant_id, name, email, status, scoring)
values 
  ('33333333-3333-3333-3333-333333333333', '00000000-0000-0000-0000-000000000001', 'Carlos Martinez', 'carlos@email.com', 'new', 85),
  ('44444444-4444-4444-4444-444444444444', '00000000-0000-0000-0000-000000000001', 'Laura Gomez', 'laura@email.com', 'contacted', 40)
on conflict (id) do nothing;
