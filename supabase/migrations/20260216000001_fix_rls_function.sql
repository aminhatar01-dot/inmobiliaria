-- Revert get_auth_tenant_id function to use 'profiles'
-- The system uses 'profiles' as the consolidated user table name.

CREATE OR REPLACE FUNCTION public.get_auth_tenant_id()
RETURNS uuid AS $$
BEGIN
  RETURN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid());
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public;

GRANT EXECUTE ON FUNCTION public.get_auth_tenant_id() TO authenticated;
