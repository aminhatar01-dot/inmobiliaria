-- Migration: 20260502142200_whatsapp_service_integration.sql
-- Description: Add WhatsApp as a Service fields to profiles and update webhook logic

-- 1. Add fields to profiles
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS whatsapp_token text,
ADD COLUMN IF NOT EXISTS whatsapp_session_id text,
ADD COLUMN IF NOT EXISTS n8n_webhook_url text;

-- 2. Update the handle_lead_whatsapp_webhook function to use n8n
-- This function is triggered after a new lead is inserted.
-- It now looks for the n8n_webhook_url in the profile of the agent assigned or the tenant owner.

CREATE OR REPLACE FUNCTION public.handle_lead_whatsapp_webhook()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_n8n_url text;
    v_whatsapp_token text;
    v_agent_id uuid;
    v_payload jsonb;
    v_req_id bigint;
BEGIN
    -- Get the agent assigned to the lead (if any) or the first admin of the tenant
    -- For now, let's assume we use the tenant's communication settings or a specific agent's settings.
    -- The user requested to send it using 'whatsapp_token' saved for the user.
    
    -- Let's find a user from this tenant that has a whatsapp_token and n8n_webhook_url configured.
    -- Priority: Agent assigned -> Tenant Admin
    
    SELECT n8n_webhook_url, whatsapp_token 
    INTO v_n8n_url, v_whatsapp_token
    FROM public.profiles
    WHERE (id = NEW.agent_id OR tenant_id = NEW.tenant_id)
      AND n8n_webhook_url IS NOT NULL 
      AND whatsapp_token IS NOT NULL
    ORDER BY (id = NEW.agent_id) DESC -- Prefer the assigned agent
    LIMIT 1;

    IF v_n8n_url IS NOT NULL AND v_n8n_url != '' THEN
        -- Build the payload for n8n
        -- n8n will then use the whatsapp_token to call the WhatsApp provider (Whapi/WPPConnect)
        v_payload := jsonb_build_object(
            'lead_id', NEW.id,
            'phone', NEW.phone,
            'name', NEW.name,
            'message', 'Hola ' || COALESCE(NEW.name, 'allí') || '. Gracias por tu consulta. En breve nos comunicaremos contigo.',
            'whatsapp_token', v_whatsapp_token,
            'property_id', NEW.interested_property_id,
            'tenant_id', NEW.tenant_id
        );

        -- Send to n8n
        SELECT net.http_post(
            url := v_n8n_url,
            headers := '{"Content-Type": "application/json"}'::jsonb,
            body := v_payload
        ) INTO v_req_id;
    END IF;

    RETURN NEW;
EXCEPTION
    WHEN OTHERS THEN
        RAISE WARNING 'Error in handle_lead_whatsapp_webhook: %', SQLERRM;
        RETURN NEW;
END;
$$;
