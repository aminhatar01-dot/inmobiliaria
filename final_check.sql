


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE EXTENSION IF NOT EXISTS "pg_net" WITH SCHEMA "extensions";






COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";






CREATE OR REPLACE FUNCTION "public"."are_tenants_partners"("tenant_a" "uuid", "tenant_b" "uuid") RETURNS boolean
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 
    FROM public.tenant_partnerships
    WHERE (requester_tenant_id = tenant_a AND responder_tenant_id = tenant_b AND status = 'active')
       OR (requester_tenant_id = tenant_b AND responder_tenant_id = tenant_a AND status = 'active')
  );
END;
$$;


ALTER FUNCTION "public"."are_tenants_partners"("tenant_a" "uuid", "tenant_b" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_auth_tenant_id"() RETURNS "uuid"
    LANGUAGE "plpgsql" STABLE SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
BEGIN
  RETURN (SELECT tenant_id FROM public.profiles WHERE id = auth.uid());
END;
$$;


ALTER FUNCTION "public"."get_auth_tenant_id"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."handle_new_tenant"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
  -- Default Roles
  INSERT INTO public.roles (tenant_id, name) VALUES (NEW.id, 'Administrador');
  INSERT INTO public.roles (tenant_id, name) VALUES (NEW.id, 'Agente');

  -- Default Branch
  INSERT INTO public.branches (tenant_id, name, address) VALUES (NEW.id, 'Casa Central', 'Oficina Principal');

  RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."handle_new_tenant"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."handle_new_user"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
DECLARE
  target_tenant_id uuid;
  target_role_id uuid;
  target_branch_id uuid;
  agency_name text;
  user_full_name text;
  is_invitation boolean := false;
BEGIN
  -- Extract metadata safely
  BEGIN
    target_tenant_id := (new.raw_user_meta_data->>'tenant_id')::uuid;
    target_role_id := (new.raw_user_meta_data->>'role_id')::uuid;
    target_branch_id := (new.raw_user_meta_data->>'branch_id')::uuid;
    user_full_name := new.raw_user_meta_data->>'full_name';
    
    IF target_tenant_id IS NOT NULL THEN
      is_invitation := true;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    is_invitation := false;
  END;

  IF is_invitation THEN
    -- 1. Create User Profile linked to the invited tenant
    INSERT INTO public.profiles (id, tenant_id, name, email)
    VALUES (new.id, target_tenant_id, COALESCE(user_full_name, 'Usuario'), new.email)
    ON CONFLICT (id) DO UPDATE SET
      tenant_id = excluded.tenant_id,
      name = excluded.name,
      email = excluded.email;

    -- 2. Assign Invited Role
    IF target_role_id IS NOT NULL THEN
      INSERT INTO public.user_role_assignments (user_id, role_id)
      VALUES (new.id, target_role_id)
      ON CONFLICT DO NOTHING;
    END IF;

    -- 3. Link User to Invited Branch
    IF target_branch_id IS NOT NULL THEN
      INSERT INTO public.user_branches (user_id, branch_id)
      VALUES (new.id, target_branch_id)
      ON CONFLICT DO NOTHING;
    END IF;

    -- 4. Mark invitation as accepted if it exists
    UPDATE public.invitations
    SET status = 'accepted', accepted_at = now()
    WHERE email = new.email AND tenant_id = target_tenant_id;

  ELSE
    -- Original Signup Flow (Create New Tenant)
    BEGIN
      agency_name := new.raw_user_meta_data->>'agency_name';
      user_full_name := new.raw_user_meta_data->>'full_name';
    EXCEPTION WHEN OTHERS THEN
      agency_name := 'Mi Inmobiliaria';
      user_full_name := 'Usuario';
    END;

    IF agency_name IS NULL OR agency_name = '' THEN
      agency_name := 'Mi Inmobiliaria';
    END IF;

    -- 1. Create Tenant
    INSERT INTO public.tenants (name, plan, default_currency)
    VALUES (agency_name, 'free', 'USD')
    RETURNING id INTO target_tenant_id;

    -- 2. Create User Profile
    INSERT INTO public.profiles (id, tenant_id, name, email)
    VALUES (new.id, target_tenant_id, COALESCE(user_full_name, 'Usuario'), new.email)
    ON CONFLICT (id) DO UPDATE SET
      tenant_id = excluded.tenant_id,
      name = excluded.name,
      email = excluded.email;

    -- 3. Create Default Roles & Assign Admin
    INSERT INTO public.roles (tenant_id, name)
    VALUES (target_tenant_id, 'Administrador')
    RETURNING id INTO target_role_id;

    INSERT INTO public.roles (tenant_id, name)
    VALUES (target_tenant_id, 'Agente')
    ON CONFLICT DO NOTHING;

    INSERT INTO public.user_role_assignments (user_id, role_id)
    VALUES (new.id, target_role_id)
    ON CONFLICT DO NOTHING;

    -- 4. Create Default Branch & Link
    INSERT INTO public.branches (tenant_id, name, address)
    VALUES (target_tenant_id, 'Casa Central', 'Dirección Principal')
    RETURNING id INTO target_branch_id;

    INSERT INTO public.user_branches (user_id, branch_id)
    VALUES (new.id, target_branch_id)
    ON CONFLICT DO NOTHING;
  END IF;

  RETURN new;
EXCEPTION WHEN OTHERS THEN
  RAISE WARNING 'Error in handle_new_user trigger: %', SQLERRM;
  RETURN new;
END;
$$;


ALTER FUNCTION "public"."handle_new_user"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_conversation_timestamp"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
    UPDATE conversations
    SET updated_at = NOW()
    WHERE id = NEW.conversation_id;
    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."update_conversation_timestamp"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_marketing_updated_at"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."update_marketing_updated_at"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_updated_at_column"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;


ALTER FUNCTION "public"."update_updated_at_column"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."automation_rules" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "trigger_type" "text" NOT NULL,
    "trigger_condition" "jsonb",
    "action_type" "text" NOT NULL,
    "action_config" "jsonb",
    "is_active" boolean DEFAULT true,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "automation_rules_action_type_check" CHECK (("action_type" = ANY (ARRAY['send_email'::"text", 'create_task'::"text", 'send_notification'::"text", 'update_lead_field'::"text"]))),
    CONSTRAINT "automation_rules_trigger_type_check" CHECK (("trigger_type" = ANY (ARRAY['lead_status_change'::"text", 'lead_created'::"text", 'visit_scheduled'::"text", 'property_status_change'::"text"])))
);


ALTER TABLE "public"."automation_rules" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."branches" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "address" "text",
    "created_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."branches" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."campaign_executions" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "campaign_id" "uuid" NOT NULL,
    "lead_id" "uuid",
    "status" "text" DEFAULT 'pending'::"text",
    "sent_at" timestamp with time zone,
    "metadata" "jsonb",
    "created_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "campaign_executions_status_check" CHECK (("status" = ANY (ARRAY['pending'::"text", 'sent'::"text", 'delivered'::"text", 'failed'::"text", 'opened'::"text", 'clicked'::"text"])))
);


ALTER TABLE "public"."campaign_executions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."campaigns" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "type" "text" NOT NULL,
    "status" "text" DEFAULT 'draft'::"text",
    "content" "jsonb",
    "target_audience" "jsonb",
    "scheduled_at" timestamp with time zone,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "campaigns_status_check" CHECK (("status" = ANY (ARRAY['draft'::"text", 'scheduled'::"text", 'active'::"text", 'completed'::"text", 'paused'::"text"]))),
    CONSTRAINT "campaigns_type_check" CHECK (("type" = ANY (ARRAY['email'::"text", 'social_media'::"text", 'sms'::"text", 'whatsapp'::"text"])))
);


ALTER TABLE "public"."campaigns" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."contracts" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "title" "text" NOT NULL,
    "type" "text" NOT NULL,
    "status" "text" DEFAULT 'draft'::"text" NOT NULL,
    "file_url" "text",
    "property_id" "uuid",
    "lead_id" "uuid",
    "content" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "contracts_status_check" CHECK (("status" = ANY (ARRAY['draft'::"text", 'generated'::"text", 'signed'::"text", 'archived'::"text"]))),
    CONSTRAINT "contracts_type_check" CHECK (("type" = ANY (ARRAY['reservation'::"text", 'rental'::"text", 'sale'::"text", 'other'::"text"])))
);


ALTER TABLE "public"."contracts" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."conversation_participants" (
    "conversation_id" "uuid" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "joined_at" timestamp with time zone DEFAULT "now"(),
    "last_read_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."conversation_participants" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."conversations" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."conversations" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."invitations" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "email" "text" NOT NULL,
    "name" "text",
    "role_id" "uuid",
    "branch_id" "uuid",
    "status" "text" DEFAULT 'pending'::"text",
    "invited_at" timestamp with time zone DEFAULT "now"(),
    "accepted_at" timestamp with time zone
);


ALTER TABLE "public"."invitations" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."leads" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "branch_id" "uuid",
    "name" "text" NOT NULL,
    "email" "text",
    "phone" "text",
    "source" "text",
    "interest_type" "text",
    "budget" numeric,
    "status" "text" DEFAULT 'new'::"text",
    "scoring" integer DEFAULT 0,
    "assigned_to" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "interested_property_id" "uuid",
    "property_preferences" "jsonb" DEFAULT '{}'::"jsonb",
    "communication_channels" "jsonb" DEFAULT '{"email": true, "phone": true, "social": false, "whatsapp": true}'::"jsonb",
    "tracking_enabled" boolean DEFAULT false
);


ALTER TABLE "public"."leads" OWNER TO "postgres";


COMMENT ON COLUMN "public"."leads"."interested_property_id" IS 'Reference to a specific property the lead is interested in';



COMMENT ON COLUMN "public"."leads"."property_preferences" IS 'JSON object storing property preferences like type, location, price range, etc. Example: {"property_type": "apartment", "min_price": 100000, "max_price": 200000}';



COMMENT ON COLUMN "public"."leads"."communication_channels" IS 'JSON object storing enabled communication channels. Example: {"whatsapp": true, "email": true, "phone": false, "social": false}';



COMMENT ON COLUMN "public"."leads"."tracking_enabled" IS 'Master switch to enable/disable automated tracking and follow-up for this lead';



CREATE TABLE IF NOT EXISTS "public"."messages" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "conversation_id" "uuid" NOT NULL,
    "sender_id" "uuid" NOT NULL,
    "content" "text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."messages" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."network_invitations" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "sender_tenant_id" "uuid" NOT NULL,
    "recipient_email" "text" NOT NULL,
    "status" "text" DEFAULT 'pending'::"text",
    "token" "uuid" DEFAULT "extensions"."uuid_generate_v4"(),
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "network_invitations_status_check" CHECK (("status" = ANY (ARRAY['pending'::"text", 'accepted'::"text", 'rejected'::"text", 'expired'::"text"])))
);


ALTER TABLE "public"."network_invitations" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."permissions" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "key" "text" NOT NULL,
    "description" "text"
);


ALTER TABLE "public"."permissions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."pipeline_leads" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "lead_id" "uuid" NOT NULL,
    "stage_id" "uuid" NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."pipeline_leads" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."pipeline_stages" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "order" integer NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."pipeline_stages" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."portal_connections" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "portal_name" "text" NOT NULL,
    "account_email" "text",
    "status" "text" NOT NULL,
    "credentials" "jsonb" DEFAULT '{}'::"jsonb",
    "last_sync_at" timestamp with time zone,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "portal_connections_portal_name_check" CHECK (("portal_name" = ANY (ARRAY['mercadolibre'::"text", 'argenprop'::"text", 'zonaprop'::"text"]))),
    CONSTRAINT "portal_connections_status_check" CHECK (("status" = ANY (ARRAY['connected'::"text", 'disconnected'::"text", 'error'::"text", 'expired'::"text"])))
);


ALTER TABLE "public"."portal_connections" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "id" "uuid" NOT NULL,
    "tenant_id" "uuid",
    "name" "text",
    "email" "text",
    "created_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."profiles" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."properties" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "branch_id" "uuid",
    "title" "text" NOT NULL,
    "operation_type" "text",
    "property_type" "text",
    "price" numeric,
    "currency" "text" DEFAULT 'USD'::"text",
    "address" "text",
    "description" "text",
    "surface_total" numeric,
    "surface_covered" numeric,
    "rooms" integer,
    "bedrooms" integer,
    "bathrooms" integer,
    "garages" integer,
    "amenities" "jsonb" DEFAULT '[]'::"jsonb",
    "status" "text" DEFAULT 'available'::"text",
    "published_on_portal" boolean DEFAULT false,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "owner_id" "uuid",
    "is_shared" boolean DEFAULT false,
    "latitude" numeric,
    "longitude" numeric,
    CONSTRAINT "properties_operation_type_check" CHECK (("operation_type" = ANY (ARRAY['sale'::"text", 'rent'::"text", 'temporary_rent'::"text"])))
);


ALTER TABLE "public"."properties" OWNER TO "postgres";


COMMENT ON COLUMN "public"."properties"."latitude" IS 'GPS latitude coordinate for property location';



COMMENT ON COLUMN "public"."properties"."longitude" IS 'GPS longitude coordinate for property location';



CREATE TABLE IF NOT EXISTS "public"."property_media" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "property_id" "uuid" NOT NULL,
    "url" "text" NOT NULL,
    "type" "text",
    "order" integer DEFAULT 0,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "tenant_id" "uuid" NOT NULL,
    CONSTRAINT "property_media_type_check" CHECK (("type" = ANY (ARRAY['image'::"text", 'video'::"text"])))
);


ALTER TABLE "public"."property_media" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."property_publications" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "property_id" "uuid" NOT NULL,
    "portal_connection_id" "uuid" NOT NULL,
    "external_id" "text",
    "external_url" "text",
    "status" "text" NOT NULL,
    "error_message" "text",
    "last_published_at" timestamp with time zone,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "property_publications_status_check" CHECK (("status" = ANY (ARRAY['pending'::"text", 'published'::"text", 'error'::"text", 'withdrawn'::"text"])))
);


ALTER TABLE "public"."property_publications" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."role_permissions" (
    "role_id" "uuid" NOT NULL,
    "permission_id" "uuid" NOT NULL
);


ALTER TABLE "public"."role_permissions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."roles" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."roles" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tasks" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "assigned_to" "uuid" NOT NULL,
    "title" "text" NOT NULL,
    "description" "text",
    "due_date" timestamp with time zone,
    "status" "text" DEFAULT 'pending'::"text",
    "category" "text",
    "priority" "text" DEFAULT 'medium'::"text",
    "property_id" "uuid",
    "lead_id" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."tasks" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tenant_partnerships" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "requester_tenant_id" "uuid" NOT NULL,
    "responder_tenant_id" "uuid" NOT NULL,
    "status" "text" DEFAULT 'active'::"text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "tenant_partnerships_status_check" CHECK (("status" = ANY (ARRAY['active'::"text", 'blocked'::"text"])))
);


ALTER TABLE "public"."tenant_partnerships" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."tenants" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "name" "text" NOT NULL,
    "plan" "text" DEFAULT 'free'::"text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "default_currency" "text" DEFAULT 'USD'::"text"
);


ALTER TABLE "public"."tenants" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."user_branches" (
    "user_id" "uuid" NOT NULL,
    "branch_id" "uuid" NOT NULL
);


ALTER TABLE "public"."user_branches" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."user_role_assignments" (
    "user_id" "uuid" NOT NULL,
    "role_id" "uuid" NOT NULL
);


ALTER TABLE "public"."user_role_assignments" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."visits" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "tenant_id" "uuid" NOT NULL,
    "lead_id" "uuid" NOT NULL,
    "property_id" "uuid" NOT NULL,
    "agent_id" "uuid",
    "scheduled_at" timestamp with time zone NOT NULL,
    "status" "text" DEFAULT 'scheduled'::"text",
    "notes" "text",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"()
);


ALTER TABLE "public"."visits" OWNER TO "postgres";


ALTER TABLE ONLY "public"."automation_rules"
    ADD CONSTRAINT "automation_rules_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."branches"
    ADD CONSTRAINT "branches_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."campaign_executions"
    ADD CONSTRAINT "campaign_executions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."campaigns"
    ADD CONSTRAINT "campaigns_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."contracts"
    ADD CONSTRAINT "contracts_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."conversation_participants"
    ADD CONSTRAINT "conversation_participants_pkey" PRIMARY KEY ("conversation_id", "user_id");



ALTER TABLE ONLY "public"."conversations"
    ADD CONSTRAINT "conversations_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."invitations"
    ADD CONSTRAINT "invitations_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."invitations"
    ADD CONSTRAINT "invitations_tenant_id_email_key" UNIQUE ("tenant_id", "email");



ALTER TABLE ONLY "public"."leads"
    ADD CONSTRAINT "leads_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."messages"
    ADD CONSTRAINT "messages_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."network_invitations"
    ADD CONSTRAINT "network_invitations_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."network_invitations"
    ADD CONSTRAINT "network_invitations_sender_tenant_id_recipient_email_key" UNIQUE ("sender_tenant_id", "recipient_email");



ALTER TABLE ONLY "public"."permissions"
    ADD CONSTRAINT "permissions_key_key" UNIQUE ("key");



ALTER TABLE ONLY "public"."permissions"
    ADD CONSTRAINT "permissions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."pipeline_leads"
    ADD CONSTRAINT "pipeline_leads_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."pipeline_stages"
    ADD CONSTRAINT "pipeline_stages_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."portal_connections"
    ADD CONSTRAINT "portal_connections_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."properties"
    ADD CONSTRAINT "properties_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."property_media"
    ADD CONSTRAINT "property_media_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."property_publications"
    ADD CONSTRAINT "property_publications_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."property_publications"
    ADD CONSTRAINT "property_publications_property_id_portal_connection_id_key" UNIQUE ("property_id", "portal_connection_id");



ALTER TABLE ONLY "public"."role_permissions"
    ADD CONSTRAINT "role_permissions_pkey" PRIMARY KEY ("role_id", "permission_id");



ALTER TABLE ONLY "public"."roles"
    ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."tenant_partnerships"
    ADD CONSTRAINT "tenant_partnerships_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."tenant_partnerships"
    ADD CONSTRAINT "tenant_partnerships_requester_tenant_id_responder_tenant_id_key" UNIQUE ("requester_tenant_id", "responder_tenant_id");



ALTER TABLE ONLY "public"."tenants"
    ADD CONSTRAINT "tenants_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."user_branches"
    ADD CONSTRAINT "user_branches_pkey" PRIMARY KEY ("user_id", "branch_id");



ALTER TABLE ONLY "public"."user_role_assignments"
    ADD CONSTRAINT "user_role_assignments_pkey" PRIMARY KEY ("user_id", "role_id");



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."visits"
    ADD CONSTRAINT "visits_pkey" PRIMARY KEY ("id");



CREATE INDEX "automation_rules_tenant_id_idx" ON "public"."automation_rules" USING "btree" ("tenant_id");



CREATE INDEX "automation_rules_trigger_type_idx" ON "public"."automation_rules" USING "btree" ("trigger_type");



CREATE INDEX "campaign_executions_campaign_id_idx" ON "public"."campaign_executions" USING "btree" ("campaign_id");



CREATE INDEX "campaign_executions_lead_id_idx" ON "public"."campaign_executions" USING "btree" ("lead_id");



CREATE INDEX "campaigns_status_idx" ON "public"."campaigns" USING "btree" ("status");



CREATE INDEX "campaigns_tenant_id_idx" ON "public"."campaigns" USING "btree" ("tenant_id");



CREATE INDEX "idx_automation_rules_tenant" ON "public"."automation_rules" USING "btree" ("tenant_id");



CREATE INDEX "idx_campaign_executions_campaign" ON "public"."campaign_executions" USING "btree" ("campaign_id");



CREATE INDEX "idx_campaigns_tenant" ON "public"."campaigns" USING "btree" ("tenant_id");



CREATE INDEX "idx_conversation_participants_conversation" ON "public"."conversation_participants" USING "btree" ("conversation_id");



CREATE INDEX "idx_conversation_participants_user" ON "public"."conversation_participants" USING "btree" ("user_id");



CREATE INDEX "idx_conversations_tenant" ON "public"."conversations" USING "btree" ("tenant_id");



CREATE INDEX "idx_messages_conversation_created" ON "public"."messages" USING "btree" ("conversation_id", "created_at" DESC);



CREATE INDEX "idx_network_invitations_email" ON "public"."network_invitations" USING "btree" ("recipient_email");



CREATE INDEX "idx_network_invitations_token" ON "public"."network_invitations" USING "btree" ("token");



CREATE INDEX "idx_partnerships_requester" ON "public"."tenant_partnerships" USING "btree" ("requester_tenant_id");



CREATE INDEX "idx_partnerships_responder" ON "public"."tenant_partnerships" USING "btree" ("responder_tenant_id");



CREATE INDEX "idx_properties_location" ON "public"."properties" USING "btree" ("latitude", "longitude");



CREATE INDEX "idx_properties_owner_id" ON "public"."properties" USING "btree" ("owner_id");



CREATE INDEX "idx_visits_lead" ON "public"."visits" USING "btree" ("lead_id");



CREATE INDEX "idx_visits_property" ON "public"."visits" USING "btree" ("property_id");



CREATE INDEX "idx_visits_scheduled" ON "public"."visits" USING "btree" ("scheduled_at");



CREATE INDEX "idx_visits_tenant" ON "public"."visits" USING "btree" ("tenant_id");



CREATE INDEX "leads_interested_property_id_idx" ON "public"."leads" USING "btree" ("interested_property_id");



CREATE INDEX "leads_tracking_enabled_idx" ON "public"."leads" USING "btree" ("tracking_enabled") WHERE ("tracking_enabled" = true);



CREATE OR REPLACE TRIGGER "on_tenant_created" AFTER INSERT ON "public"."tenants" FOR EACH ROW EXECUTE FUNCTION "public"."handle_new_tenant"();



CREATE OR REPLACE TRIGGER "trigger_update_automation_rules_updated_at" BEFORE UPDATE ON "public"."automation_rules" FOR EACH ROW EXECUTE FUNCTION "public"."update_marketing_updated_at"();



CREATE OR REPLACE TRIGGER "trigger_update_campaigns_updated_at" BEFORE UPDATE ON "public"."campaigns" FOR EACH ROW EXECUTE FUNCTION "public"."update_marketing_updated_at"();



CREATE OR REPLACE TRIGGER "trigger_update_conversation_timestamp" AFTER INSERT ON "public"."messages" FOR EACH ROW EXECUTE FUNCTION "public"."update_conversation_timestamp"();



CREATE OR REPLACE TRIGGER "update_portal_connections_updated_at" BEFORE UPDATE ON "public"."portal_connections" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



CREATE OR REPLACE TRIGGER "update_property_publications_updated_at" BEFORE UPDATE ON "public"."property_publications" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();



ALTER TABLE ONLY "public"."automation_rules"
    ADD CONSTRAINT "automation_rules_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."branches"
    ADD CONSTRAINT "branches_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."campaign_executions"
    ADD CONSTRAINT "campaign_executions_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "public"."campaigns"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."campaign_executions"
    ADD CONSTRAINT "campaign_executions_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "public"."leads"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."campaigns"
    ADD CONSTRAINT "campaigns_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."contracts"
    ADD CONSTRAINT "contracts_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "public"."leads"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."contracts"
    ADD CONSTRAINT "contracts_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "public"."properties"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."contracts"
    ADD CONSTRAINT "contracts_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."conversation_participants"
    ADD CONSTRAINT "conversation_participants_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "public"."conversations"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."conversation_participants"
    ADD CONSTRAINT "conversation_participants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."conversations"
    ADD CONSTRAINT "conversations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."invitations"
    ADD CONSTRAINT "invitations_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "public"."branches"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."invitations"
    ADD CONSTRAINT "invitations_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."invitations"
    ADD CONSTRAINT "invitations_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."leads"
    ADD CONSTRAINT "leads_assigned_to_fkey" FOREIGN KEY ("assigned_to") REFERENCES "public"."profiles"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."leads"
    ADD CONSTRAINT "leads_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "public"."branches"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."leads"
    ADD CONSTRAINT "leads_interested_property_id_fkey" FOREIGN KEY ("interested_property_id") REFERENCES "public"."properties"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."leads"
    ADD CONSTRAINT "leads_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."messages"
    ADD CONSTRAINT "messages_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "public"."conversations"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."messages"
    ADD CONSTRAINT "messages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."network_invitations"
    ADD CONSTRAINT "network_invitations_sender_tenant_id_fkey" FOREIGN KEY ("sender_tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."pipeline_leads"
    ADD CONSTRAINT "pipeline_leads_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "public"."leads"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."pipeline_leads"
    ADD CONSTRAINT "pipeline_leads_stage_id_fkey" FOREIGN KEY ("stage_id") REFERENCES "public"."pipeline_stages"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."pipeline_leads"
    ADD CONSTRAINT "pipeline_leads_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."pipeline_stages"
    ADD CONSTRAINT "pipeline_stages_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."portal_connections"
    ADD CONSTRAINT "portal_connections_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."properties"
    ADD CONSTRAINT "properties_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "public"."branches"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."properties"
    ADD CONSTRAINT "properties_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "public"."leads"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."properties"
    ADD CONSTRAINT "properties_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."property_media"
    ADD CONSTRAINT "property_media_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "public"."properties"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."property_media"
    ADD CONSTRAINT "property_media_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."property_publications"
    ADD CONSTRAINT "property_publications_portal_connection_id_fkey" FOREIGN KEY ("portal_connection_id") REFERENCES "public"."portal_connections"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."property_publications"
    ADD CONSTRAINT "property_publications_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "public"."properties"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."property_publications"
    ADD CONSTRAINT "property_publications_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."role_permissions"
    ADD CONSTRAINT "role_permissions_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "public"."permissions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."role_permissions"
    ADD CONSTRAINT "role_permissions_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."roles"
    ADD CONSTRAINT "roles_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_assigned_to_fkey" FOREIGN KEY ("assigned_to") REFERENCES "public"."profiles"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "public"."leads"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "public"."properties"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."tasks"
    ADD CONSTRAINT "tasks_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tenant_partnerships"
    ADD CONSTRAINT "tenant_partnerships_requester_tenant_id_fkey" FOREIGN KEY ("requester_tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."tenant_partnerships"
    ADD CONSTRAINT "tenant_partnerships_responder_tenant_id_fkey" FOREIGN KEY ("responder_tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_branches"
    ADD CONSTRAINT "user_branches_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "public"."branches"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_branches"
    ADD CONSTRAINT "user_branches_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_role_assignments"
    ADD CONSTRAINT "user_role_assignments_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_role_assignments"
    ADD CONSTRAINT "user_role_assignments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "users_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "users_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."visits"
    ADD CONSTRAINT "visits_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "public"."profiles"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."visits"
    ADD CONSTRAINT "visits_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "public"."leads"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."visits"
    ADD CONSTRAINT "visits_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "public"."properties"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."visits"
    ADD CONSTRAINT "visits_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE;



CREATE POLICY "Admins can manage branches of their tenant" ON "public"."branches" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Admins can manage stages of their tenant" ON "public"."pipeline_stages" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Anyone can view default tenant" ON "public"."tenants" FOR SELECT USING (("id" = '00000000-0000-0000-0000-000000000001'::"uuid"));



CREATE POLICY "Authenticated users can view permissions" ON "public"."permissions" FOR SELECT USING (("auth"."role"() = 'authenticated'::"text"));



CREATE POLICY "Partners can view shared properties" ON "public"."properties" FOR SELECT TO "authenticated" USING ((("is_shared" = true) AND "public"."are_tenants_partners"("tenant_id", "public"."get_auth_tenant_id"())));



CREATE POLICY "Users can add participants to conversations they're in" ON "public"."conversation_participants" FOR INSERT WITH CHECK (("conversation_id" IN ( SELECT "conversation_participants_1"."conversation_id"
   FROM "public"."conversation_participants" "conversation_participants_1"
  WHERE ("conversation_participants_1"."user_id" = "auth"."uid"()))));



CREATE POLICY "Users can create conversations in their tenant" ON "public"."conversations" FOR INSERT WITH CHECK (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can delete automation rules from their tenant" ON "public"."automation_rules" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can delete campaigns from their tenant" ON "public"."campaigns" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can delete media" ON "public"."property_media" FOR DELETE TO "authenticated" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can delete properties" ON "public"."properties" FOR DELETE TO "authenticated" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can delete their tenant's contracts" ON "public"."contracts" FOR DELETE USING (("tenant_id" IN ( SELECT "profiles"."tenant_id"
   FROM "public"."profiles"
  WHERE ("profiles"."id" = "auth"."uid"()))));



CREATE POLICY "Users can insert automation rules for their tenant" ON "public"."automation_rules" WITH CHECK (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can insert campaign executions for their campaigns" ON "public"."campaign_executions" WITH CHECK (("campaign_id" IN ( SELECT "campaigns"."id"
   FROM "public"."campaigns"
  WHERE ("campaigns"."tenant_id" = "public"."get_auth_tenant_id"()))));



CREATE POLICY "Users can insert campaigns for their tenant" ON "public"."campaigns" WITH CHECK (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can insert contracts for their tenant" ON "public"."contracts" FOR INSERT WITH CHECK (("tenant_id" IN ( SELECT "profiles"."tenant_id"
   FROM "public"."profiles"
  WHERE ("profiles"."id" = "auth"."uid"()))));



CREATE POLICY "Users can insert media" ON "public"."property_media" FOR INSERT TO "authenticated" WITH CHECK (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can insert properties" ON "public"."properties" FOR INSERT TO "authenticated" WITH CHECK (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can manage invitations of their tenant" ON "public"."invitations" TO "authenticated" USING (("tenant_id" = "public"."get_auth_tenant_id"())) WITH CHECK (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can manage leads" ON "public"."leads" TO "authenticated" USING (("tenant_id" = "public"."get_auth_tenant_id"())) WITH CHECK (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can manage own tenant automation rules" ON "public"."automation_rules" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can manage own tenant campaign executions" ON "public"."campaign_executions" USING (("campaign_id" IN ( SELECT "campaigns"."id"
   FROM "public"."campaigns"
  WHERE ("campaigns"."tenant_id" = "public"."get_auth_tenant_id"()))));



CREATE POLICY "Users can manage own tenant campaigns" ON "public"."campaigns" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can manage pipeline assignments of their tenant" ON "public"."pipeline_leads" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can manage role assignments" ON "public"."user_role_assignments" TO "authenticated" USING (("user_id" IN ( SELECT "profiles"."id"
   FROM "public"."profiles"
  WHERE ("profiles"."tenant_id" = "public"."get_auth_tenant_id"())))) WITH CHECK ((("user_id" IN ( SELECT "profiles"."id"
   FROM "public"."profiles"
  WHERE ("profiles"."tenant_id" = "public"."get_auth_tenant_id"()))) AND ("role_id" IN ( SELECT "roles"."id"
   FROM "public"."roles"
  WHERE ("roles"."tenant_id" = "public"."get_auth_tenant_id"())))));



CREATE POLICY "Users can manage sent network invitations" ON "public"."network_invitations" TO "authenticated" USING (("sender_tenant_id" = "public"."get_auth_tenant_id"())) WITH CHECK (("sender_tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can manage tasks of their tenant" ON "public"."tasks" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can manage their tenant's portal connections" ON "public"."portal_connections" USING (("tenant_id" = ( SELECT "profiles"."tenant_id"
   FROM "public"."profiles"
  WHERE ("profiles"."id" = "auth"."uid"()))));



CREATE POLICY "Users can manage their tenant's property publications" ON "public"."property_publications" USING (("tenant_id" = ( SELECT "profiles"."tenant_id"
   FROM "public"."profiles"
  WHERE ("profiles"."id" = "auth"."uid"()))));



CREATE POLICY "Users can manage user branches" ON "public"."user_branches" TO "authenticated" USING (("user_id" IN ( SELECT "profiles"."id"
   FROM "public"."profiles"
  WHERE ("profiles"."tenant_id" = "public"."get_auth_tenant_id"())))) WITH CHECK ((("user_id" IN ( SELECT "profiles"."id"
   FROM "public"."profiles"
  WHERE ("profiles"."tenant_id" = "public"."get_auth_tenant_id"()))) AND ("branch_id" IN ( SELECT "branches"."id"
   FROM "public"."branches"
  WHERE ("branches"."tenant_id" = "public"."get_auth_tenant_id"())))));



CREATE POLICY "Users can manage visits of their tenant" ON "public"."visits" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can see leads" ON "public"."leads" FOR SELECT TO "authenticated" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can see media" ON "public"."property_media" FOR SELECT TO "authenticated" USING ((("tenant_id" = "public"."get_auth_tenant_id"()) OR (EXISTS ( SELECT 1
   FROM "public"."properties"
  WHERE (("properties"."id" = "property_media"."property_id") AND ("properties"."is_shared" = true))))));



CREATE POLICY "Users can see properties" ON "public"."properties" FOR SELECT TO "authenticated" USING ((("tenant_id" = "public"."get_auth_tenant_id"()) OR ("is_shared" = true)));



CREATE POLICY "Users can see role assignments" ON "public"."user_role_assignments" FOR SELECT TO "authenticated" USING (("user_id" IN ( SELECT "profiles"."id"
   FROM "public"."profiles"
  WHERE ("profiles"."tenant_id" = "public"."get_auth_tenant_id"()))));



CREATE POLICY "Users can see user branches" ON "public"."user_branches" FOR SELECT TO "authenticated" USING (("user_id" IN ( SELECT "profiles"."id"
   FROM "public"."profiles"
  WHERE ("profiles"."tenant_id" = "public"."get_auth_tenant_id"()))));



CREATE POLICY "Users can send messages to their conversations" ON "public"."messages" FOR INSERT WITH CHECK ((("conversation_id" IN ( SELECT "conversation_participants"."conversation_id"
   FROM "public"."conversation_participants"
  WHERE ("conversation_participants"."user_id" = "auth"."uid"()))) AND ("sender_id" = "auth"."uid"())));



CREATE POLICY "Users can update automation rules from their tenant" ON "public"."automation_rules" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can update campaign executions for their campaigns" ON "public"."campaign_executions" USING (("campaign_id" IN ( SELECT "campaigns"."id"
   FROM "public"."campaigns"
  WHERE ("campaigns"."tenant_id" = "public"."get_auth_tenant_id"()))));



CREATE POLICY "Users can update campaigns from their tenant" ON "public"."campaigns" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can update media" ON "public"."property_media" FOR UPDATE TO "authenticated" USING (("tenant_id" = "public"."get_auth_tenant_id"())) WITH CHECK (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can update properties" ON "public"."properties" FOR UPDATE TO "authenticated" USING (("tenant_id" = "public"."get_auth_tenant_id"())) WITH CHECK (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can update their own profile" ON "public"."profiles" FOR UPDATE USING (("id" = "auth"."uid"()));



CREATE POLICY "Users can update their tenant's contracts" ON "public"."contracts" FOR UPDATE USING (("tenant_id" IN ( SELECT "profiles"."tenant_id"
   FROM "public"."profiles"
  WHERE ("profiles"."id" = "auth"."uid"()))));



CREATE POLICY "Users can view automation rules from their tenant" ON "public"."automation_rules" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can view basic tenant info" ON "public"."tenants" FOR SELECT TO "authenticated" USING (true);



CREATE POLICY "Users can view branches of their tenant" ON "public"."branches" FOR SELECT USING (((("auth"."role"() = 'authenticated'::"text") AND ("tenant_id" = "public"."get_auth_tenant_id"())) OR ("tenant_id" = '00000000-0000-0000-0000-000000000001'::"uuid")));



CREATE POLICY "Users can view campaign executions from their tenant" ON "public"."campaign_executions" USING (("campaign_id" IN ( SELECT "campaigns"."id"
   FROM "public"."campaigns"
  WHERE ("campaigns"."tenant_id" = "public"."get_auth_tenant_id"()))));



CREATE POLICY "Users can view campaigns from their tenant" ON "public"."campaigns" USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can view invitations to their email" ON "public"."network_invitations" FOR SELECT TO "authenticated" USING (("recipient_email" = (( SELECT "users"."email"
   FROM "auth"."users"
  WHERE ("users"."id" = "auth"."uid"())))::"text"));



CREATE POLICY "Users can view messages in their conversations" ON "public"."messages" FOR SELECT USING (("conversation_id" IN ( SELECT "conversation_participants"."conversation_id"
   FROM "public"."conversation_participants"
  WHERE ("conversation_participants"."user_id" = "auth"."uid"()))));



CREATE POLICY "Users can view own tenant conversations" ON "public"."conversations" FOR SELECT USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can view participants of their conversations" ON "public"."conversation_participants" FOR SELECT USING (("conversation_id" IN ( SELECT "conversation_participants_1"."conversation_id"
   FROM "public"."conversation_participants" "conversation_participants_1"
  WHERE ("conversation_participants_1"."user_id" = "auth"."uid"()))));



CREATE POLICY "Users can view pipeline assignments of their tenant" ON "public"."pipeline_leads" FOR SELECT USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can view profiles in their tenant" ON "public"."profiles" FOR SELECT USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can view role permissions" ON "public"."role_permissions" FOR SELECT USING (("role_id" IN ( SELECT "roles"."id"
   FROM "public"."roles"
  WHERE ("roles"."tenant_id" = "public"."get_auth_tenant_id"()))));



CREATE POLICY "Users can view roles of their tenant" ON "public"."roles" FOR SELECT USING (((("auth"."role"() = 'authenticated'::"text") AND ("tenant_id" = "public"."get_auth_tenant_id"())) OR ("tenant_id" = '00000000-0000-0000-0000-000000000001'::"uuid")));



CREATE POLICY "Users can view stages of their tenant" ON "public"."pipeline_stages" FOR SELECT USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can view tasks of their tenant" ON "public"."tasks" FOR SELECT USING (("tenant_id" = "public"."get_auth_tenant_id"()));



CREATE POLICY "Users can view their partnerships" ON "public"."tenant_partnerships" FOR SELECT TO "authenticated" USING ((("requester_tenant_id" = "public"."get_auth_tenant_id"()) OR ("responder_tenant_id" = "public"."get_auth_tenant_id"())));



CREATE POLICY "Users can view their tenant's contracts" ON "public"."contracts" FOR SELECT USING (("tenant_id" IN ( SELECT "profiles"."tenant_id"
   FROM "public"."profiles"
  WHERE ("profiles"."id" = "auth"."uid"()))));



CREATE POLICY "Users can view their tenant's portal connections" ON "public"."portal_connections" FOR SELECT USING (("tenant_id" = ( SELECT "profiles"."tenant_id"
   FROM "public"."profiles"
  WHERE ("profiles"."id" = "auth"."uid"()))));



CREATE POLICY "Users can view their tenant's property publications" ON "public"."property_publications" FOR SELECT USING (("tenant_id" = ( SELECT "profiles"."tenant_id"
   FROM "public"."profiles"
  WHERE ("profiles"."id" = "auth"."uid"()))));



CREATE POLICY "Users can view visits of their tenant" ON "public"."visits" FOR SELECT USING (("tenant_id" = "public"."get_auth_tenant_id"()));



ALTER TABLE "public"."automation_rules" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."branches" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."campaign_executions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."campaigns" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."contracts" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."conversation_participants" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."conversations" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."invitations" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."leads" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."messages" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."network_invitations" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."permissions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."pipeline_leads" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."pipeline_stages" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."portal_connections" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."properties" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."property_media" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."property_publications" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."role_permissions" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."roles" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tasks" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tenant_partnerships" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."tenants" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."user_branches" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."user_role_assignments" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."visits" ENABLE ROW LEVEL SECURITY;




ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";





GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";































































































































































GRANT ALL ON FUNCTION "public"."are_tenants_partners"("tenant_a" "uuid", "tenant_b" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."are_tenants_partners"("tenant_a" "uuid", "tenant_b" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."are_tenants_partners"("tenant_a" "uuid", "tenant_b" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."get_auth_tenant_id"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_auth_tenant_id"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_auth_tenant_id"() TO "service_role";



GRANT ALL ON FUNCTION "public"."handle_new_tenant"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_tenant"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_tenant"() TO "service_role";



GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_conversation_timestamp"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_conversation_timestamp"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_conversation_timestamp"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_marketing_updated_at"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_marketing_updated_at"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_marketing_updated_at"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_updated_at_column"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_updated_at_column"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_updated_at_column"() TO "service_role";


















GRANT ALL ON TABLE "public"."automation_rules" TO "anon";
GRANT ALL ON TABLE "public"."automation_rules" TO "authenticated";
GRANT ALL ON TABLE "public"."automation_rules" TO "service_role";



GRANT ALL ON TABLE "public"."branches" TO "anon";
GRANT ALL ON TABLE "public"."branches" TO "authenticated";
GRANT ALL ON TABLE "public"."branches" TO "service_role";



GRANT ALL ON TABLE "public"."campaign_executions" TO "anon";
GRANT ALL ON TABLE "public"."campaign_executions" TO "authenticated";
GRANT ALL ON TABLE "public"."campaign_executions" TO "service_role";



GRANT ALL ON TABLE "public"."campaigns" TO "anon";
GRANT ALL ON TABLE "public"."campaigns" TO "authenticated";
GRANT ALL ON TABLE "public"."campaigns" TO "service_role";



GRANT ALL ON TABLE "public"."contracts" TO "anon";
GRANT ALL ON TABLE "public"."contracts" TO "authenticated";
GRANT ALL ON TABLE "public"."contracts" TO "service_role";



GRANT ALL ON TABLE "public"."conversation_participants" TO "anon";
GRANT ALL ON TABLE "public"."conversation_participants" TO "authenticated";
GRANT ALL ON TABLE "public"."conversation_participants" TO "service_role";



GRANT ALL ON TABLE "public"."conversations" TO "anon";
GRANT ALL ON TABLE "public"."conversations" TO "authenticated";
GRANT ALL ON TABLE "public"."conversations" TO "service_role";



GRANT ALL ON TABLE "public"."invitations" TO "anon";
GRANT ALL ON TABLE "public"."invitations" TO "authenticated";
GRANT ALL ON TABLE "public"."invitations" TO "service_role";



GRANT ALL ON TABLE "public"."leads" TO "anon";
GRANT ALL ON TABLE "public"."leads" TO "authenticated";
GRANT ALL ON TABLE "public"."leads" TO "service_role";



GRANT ALL ON TABLE "public"."messages" TO "anon";
GRANT ALL ON TABLE "public"."messages" TO "authenticated";
GRANT ALL ON TABLE "public"."messages" TO "service_role";



GRANT ALL ON TABLE "public"."network_invitations" TO "anon";
GRANT ALL ON TABLE "public"."network_invitations" TO "authenticated";
GRANT ALL ON TABLE "public"."network_invitations" TO "service_role";



GRANT ALL ON TABLE "public"."permissions" TO "anon";
GRANT ALL ON TABLE "public"."permissions" TO "authenticated";
GRANT ALL ON TABLE "public"."permissions" TO "service_role";



GRANT ALL ON TABLE "public"."pipeline_leads" TO "anon";
GRANT ALL ON TABLE "public"."pipeline_leads" TO "authenticated";
GRANT ALL ON TABLE "public"."pipeline_leads" TO "service_role";



GRANT ALL ON TABLE "public"."pipeline_stages" TO "anon";
GRANT ALL ON TABLE "public"."pipeline_stages" TO "authenticated";
GRANT ALL ON TABLE "public"."pipeline_stages" TO "service_role";



GRANT ALL ON TABLE "public"."portal_connections" TO "anon";
GRANT ALL ON TABLE "public"."portal_connections" TO "authenticated";
GRANT ALL ON TABLE "public"."portal_connections" TO "service_role";



GRANT ALL ON TABLE "public"."profiles" TO "anon";
GRANT ALL ON TABLE "public"."profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."profiles" TO "service_role";



GRANT ALL ON TABLE "public"."properties" TO "anon";
GRANT ALL ON TABLE "public"."properties" TO "authenticated";
GRANT ALL ON TABLE "public"."properties" TO "service_role";



GRANT ALL ON TABLE "public"."property_media" TO "anon";
GRANT ALL ON TABLE "public"."property_media" TO "authenticated";
GRANT ALL ON TABLE "public"."property_media" TO "service_role";



GRANT ALL ON TABLE "public"."property_publications" TO "anon";
GRANT ALL ON TABLE "public"."property_publications" TO "authenticated";
GRANT ALL ON TABLE "public"."property_publications" TO "service_role";



GRANT ALL ON TABLE "public"."role_permissions" TO "anon";
GRANT ALL ON TABLE "public"."role_permissions" TO "authenticated";
GRANT ALL ON TABLE "public"."role_permissions" TO "service_role";



GRANT ALL ON TABLE "public"."roles" TO "anon";
GRANT ALL ON TABLE "public"."roles" TO "authenticated";
GRANT ALL ON TABLE "public"."roles" TO "service_role";



GRANT ALL ON TABLE "public"."tasks" TO "anon";
GRANT ALL ON TABLE "public"."tasks" TO "authenticated";
GRANT ALL ON TABLE "public"."tasks" TO "service_role";



GRANT ALL ON TABLE "public"."tenant_partnerships" TO "anon";
GRANT ALL ON TABLE "public"."tenant_partnerships" TO "authenticated";
GRANT ALL ON TABLE "public"."tenant_partnerships" TO "service_role";



GRANT ALL ON TABLE "public"."tenants" TO "anon";
GRANT ALL ON TABLE "public"."tenants" TO "authenticated";
GRANT ALL ON TABLE "public"."tenants" TO "service_role";



GRANT ALL ON TABLE "public"."user_branches" TO "anon";
GRANT ALL ON TABLE "public"."user_branches" TO "authenticated";
GRANT ALL ON TABLE "public"."user_branches" TO "service_role";



GRANT ALL ON TABLE "public"."user_role_assignments" TO "anon";
GRANT ALL ON TABLE "public"."user_role_assignments" TO "authenticated";
GRANT ALL ON TABLE "public"."user_role_assignments" TO "service_role";



GRANT ALL ON TABLE "public"."visits" TO "anon";
GRANT ALL ON TABLE "public"."visits" TO "authenticated";
GRANT ALL ON TABLE "public"."visits" TO "service_role";









ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "service_role";































