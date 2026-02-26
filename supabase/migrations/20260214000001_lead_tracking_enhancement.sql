-- Lead Tracking Enhancement Migration
-- Add columns for property interest, preferences, communication channels, and tracking

-- Add new columns to leads table
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS interested_property_id uuid REFERENCES public.properties(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS property_preferences jsonb DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS communication_channels jsonb DEFAULT '{"whatsapp": true, "email": true, "phone": true, "social": false}'::jsonb,
  ADD COLUMN IF NOT EXISTS tracking_enabled boolean DEFAULT false;

-- Add index for better query performance
CREATE INDEX IF NOT EXISTS leads_interested_property_id_idx ON public.leads(interested_property_id);
CREATE INDEX IF NOT EXISTS leads_tracking_enabled_idx ON public.leads(tracking_enabled) WHERE tracking_enabled = true;

-- Add comment to document the schema
COMMENT ON COLUMN public.leads.interested_property_id IS 'Reference to a specific property the lead is interested in';
COMMENT ON COLUMN public.leads.property_preferences IS 'JSON object storing property preferences like type, location, price range, etc. Example: {"property_type": "apartment", "min_price": 100000, "max_price": 200000}';
COMMENT ON COLUMN public.leads.communication_channels IS 'JSON object storing enabled communication channels. Example: {"whatsapp": true, "email": true, "phone": false, "social": false}';
COMMENT ON COLUMN public.leads.tracking_enabled IS 'Master switch to enable/disable automated tracking and follow-up for this lead';
