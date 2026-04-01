-- Migration: Add target scoping and template support to automation_rules
-- Date: 2026-03-07

ALTER TABLE public.automation_rules
    ADD COLUMN IF NOT EXISTS target_type TEXT NOT NULL DEFAULT 'all' 
        CHECK (target_type IN ('all', 'lead', 'property')),
    ADD COLUMN IF NOT EXISTS target_id UUID NULL,
    ADD COLUMN IF NOT EXISTS templates JSONB NULL DEFAULT '[]'::jsonb;

-- Index for fast lookups by target
CREATE INDEX IF NOT EXISTS idx_automation_rules_target_id
    ON public.automation_rules(target_id)
    WHERE target_id IS NOT NULL;

COMMENT ON COLUMN public.automation_rules.target_type IS 'Scope: all, lead, or property';
COMMENT ON COLUMN public.automation_rules.target_id IS 'UUID of the specific lead or property (NULL when target_type = all)';
COMMENT ON COLUMN public.automation_rules.templates IS 'Array of capture template file references (name, url, type)';
