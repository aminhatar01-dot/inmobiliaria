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
