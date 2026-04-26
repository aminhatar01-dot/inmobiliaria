-- Description: Drops the old tenant-level unique constraint and creates a per-agent unique constraint for portal_connections

ALTER TABLE public.portal_connections
DROP CONSTRAINT IF EXISTS portal_connections_tenant_portal_key;

ALTER TABLE public.portal_connections
ADD CONSTRAINT portal_connections_tenant_user_portal_key UNIQUE (tenant_id, user_id, portal_name);
