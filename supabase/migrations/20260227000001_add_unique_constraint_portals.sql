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
