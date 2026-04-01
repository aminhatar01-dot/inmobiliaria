-- Migration: 20260307000005_ensure_dev_tenant.sql
-- Description: Ensure the default development tenant exists

INSERT INTO public.tenants (id, name, plan, default_currency)
VALUES ('00000000-0000-0000-0000-000000000001', 'Desarrollo / Sistema', 'enterprise', 'USD')
ON CONFLICT (id) DO NOTHING;
