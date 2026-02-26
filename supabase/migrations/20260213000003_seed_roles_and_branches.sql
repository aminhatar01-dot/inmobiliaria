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
