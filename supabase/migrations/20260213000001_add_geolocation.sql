-- Add geolocation fields to properties table
-- Adds latitude and longitude for satellite/GPS coordinates

ALTER TABLE public.properties
ADD COLUMN IF NOT EXISTS latitude numeric,
ADD COLUMN IF NOT EXISTS longitude numeric;

-- Add comments for documentation
COMMENT ON COLUMN public.properties.latitude IS 'GPS latitude coordinate for property location';
COMMENT ON COLUMN public.properties.longitude IS 'GPS longitude coordinate for property location';

-- Create index for future geospatial queries
CREATE INDEX IF NOT EXISTS idx_properties_location ON public.properties (latitude, longitude);
