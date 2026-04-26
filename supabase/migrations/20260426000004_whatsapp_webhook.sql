-- Asegurar que pg_net esté habilitado
CREATE EXTENSION IF NOT EXISTS "pg_net" WITH SCHEMA "extensions";

-- Función del Webhook Automático de WhatsApp
CREATE OR REPLACE FUNCTION public.handle_lead_whatsapp_webhook()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
    v_whatsapp_mode text;
    v_url text;
    v_api_key text;
    v_prop_title text := '';
    v_message text;
    v_payload jsonb;
    v_req_id bigint;
BEGIN
    -- Verificar si el tenant tiene configurado el modo webhook para WhatsApp
    SELECT whatsapp_mode INTO v_whatsapp_mode
    FROM public.tenant_communication_settings
    WHERE tenant_id = NEW.tenant_id;

    IF v_whatsapp_mode = 'webhook' AND NEW.phone IS NOT NULL THEN
        -- Obtener variables de entorno (configuradas vía ALTER DATABASE postgres SET ...)
        -- Usamos current_setting con true para que devuelva NULL si no existe en lugar de fallar
        v_url := current_setting('app.evolution_api_url', true);
        v_api_key := current_setting('app.evolution_api_key', true);

        IF v_url IS NOT NULL AND v_url != '' THEN
            -- Obtener el título de la propiedad si existe
            IF NEW.interested_property_id IS NOT NULL THEN
                SELECT title INTO v_prop_title FROM public.properties WHERE id = NEW.interested_property_id;
            END IF;

            -- Construir el mensaje dinámico
            v_message := 'Hola ' || COALESCE(NEW.name, '') || '. Hemos recibido tu consulta';
            IF v_prop_title IS NOT NULL AND v_prop_title != '' THEN
                v_message := v_message || ' por la propiedad "' || v_prop_title || '"';
            END IF;
            v_message := v_message || '. En breve un asesor se pondrá en contacto contigo.';

            -- Construir el payload adaptado para Evolution API o APIs similares
            -- Formato Evolution API: {"number": "...", "textMessage": {"text": "..."}}
            v_payload := jsonb_build_object(
                'number', NEW.phone,
                'textMessage', jsonb_build_object('text', v_message),
                'options', jsonb_build_object('delay', 1200)
            );

            -- Enviar el POST asíncrono usando pg_net
            SELECT net.http_post(
                url := v_url,
                headers := jsonb_build_object(
                    'Content-Type', 'application/json',
                    'apikey', COALESCE(v_api_key, '')
                ),
                body := v_payload
            ) INTO v_req_id;
        END IF;
    END IF;

    RETURN NEW;
EXCEPTION
    WHEN OTHERS THEN
        -- No bloquear la creación del lead si falla el webhook
        RAISE WARNING 'Error sending WhatsApp Webhook: %', SQLERRM;
        RETURN NEW;
END;
$$;

-- Crear el Trigger para la tabla de Leads
DROP TRIGGER IF EXISTS lead_whatsapp_webhook_trigger ON public.leads;

CREATE TRIGGER lead_whatsapp_webhook_trigger
    AFTER INSERT ON public.leads
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_lead_whatsapp_webhook();
