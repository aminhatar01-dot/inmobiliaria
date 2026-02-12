-- Add owner_id to properties table
ALTER TABLE public.properties 
ADD COLUMN owner_id uuid REFERENCES public.leads(id) ON DELETE SET NULL;

-- Index for better performance
CREATE INDEX idx_properties_owner_id ON public.properties(owner_id);
