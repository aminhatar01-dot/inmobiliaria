-- Migration: 20260502143000_n8n_global_settings.sql
-- Description: Add n8n configuration to tenant_communication_settings

ALTER TABLE public.tenant_communication_settings
ADD COLUMN IF NOT EXISTS n8n_api_url text,
ADD COLUMN IF NOT EXISTS n8n_api_key text,
ADD COLUMN IF NOT EXISTS n8n_master_flow_id text,
ADD COLUMN IF NOT EXISTS n8n_webhook_base_url text;

-- Asegurar que los perfiles tengan permisos para ver esto si son admins
-- O mejor, solo permitir que el admin del tenant lo actualice.
