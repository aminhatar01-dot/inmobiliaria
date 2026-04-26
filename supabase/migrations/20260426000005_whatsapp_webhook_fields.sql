-- Añadir campos para Evolution API en la tabla de configuración de comunicaciones
ALTER TABLE public.tenant_communication_settings
ADD COLUMN IF NOT EXISTS evolution_api_url text,
ADD COLUMN IF NOT EXISTS evolution_api_key text;

-- Actualizar la función del Webhook para que lea directamente desde la tabla por tenant
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
    -- Obtener la configuración de comunicación del tenant específico
    SELECT whatsapp_mode, evolution_api_url, evolution_api_key 
    INTO v_whatsapp_mode, v_url, v_api_key
    FROM public.tenant_communication_settings
    WHERE tenant_id = NEW.tenant_id;

    IF v_whatsapp_mode = 'webhook' AND NEW.phone IS NOT NULL THEN
        
        -- Si los campos están configurados en la interfaz
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
                    'apikey', COALESCE(v_api_key, ''),
                    'Authorization', 'Bearer ' || COALESCE(v_api_key, '') -- Soporte dual por si la API usa Bearer Token
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
