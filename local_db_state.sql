SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict HlaLZERil7KUh24QKxDyLNpgd1ABs1ay2BErozW8NXwNySTrXXJMQJlRsthsn8Z

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenants" ("id", "name", "plan", "created_at", "default_currency") VALUES
	('00000000-0000-0000-0000-000000000001', 'Agencia InmoDefault', 'premium', '2026-02-16 20:54:48.124239+00', 'USD'),
	('9c8b9548-5ba9-41af-874a-cb300a629f3f', 'amin si', 'free', '2026-02-16 20:56:15.980138+00', 'USD');


--
-- Data for Name: automation_rules; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: branches; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."branches" ("id", "tenant_id", "name", "address", "created_at") VALUES
	('e4856d50-17c3-4b90-885b-c73f850f0ff5', '00000000-0000-0000-0000-000000000001', 'Casa Central', 'Oficina Principal', '2026-02-16 20:54:48.124239+00'),
	('0804039c-1616-497f-b836-74e653ab423f', '00000000-0000-0000-0000-000000000001', 'Casa Central', 'Oficina Principal', '2026-02-16 20:54:48.124239+00'),
	('8cea1b21-ad98-44b2-8cba-ee601f7335f2', '9c8b9548-5ba9-41af-874a-cb300a629f3f', 'Casa Central', 'Oficina Principal', '2026-02-16 20:56:15.980138+00'),
	('695de220-6117-45db-a9b1-d717d4ab99d6', '9c8b9548-5ba9-41af-874a-cb300a629f3f', 'Casa Central', 'Dirección Principal', '2026-02-16 20:56:15.980138+00');


--
-- Data for Name: campaigns; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("id", "tenant_id", "name", "email", "created_at") VALUES
	('3edf6db2-e927-4f86-8f95-8335398cec65', '9c8b9548-5ba9-41af-874a-cb300a629f3f', 'amin', 'aminhatar01@gmail.com', '2026-02-16 20:56:15.980138+00');


--
-- Data for Name: properties; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."properties" ("id", "tenant_id", "branch_id", "title", "operation_type", "property_type", "price", "currency", "address", "description", "surface_total", "surface_covered", "rooms", "bedrooms", "bathrooms", "garages", "amenities", "status", "published_on_portal", "created_at", "updated_at", "owner_id", "is_shared", "latitude", "longitude") VALUES
	('11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000001', NULL, 'Studio Palermo Soho', 'rent', 'departamento', 850, 'USD', 'Honduras 4800, CABA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '[]', 'available', false, '2026-02-16 20:54:48.124239+00', '2026-02-16 20:54:48.124239+00', NULL, false, NULL, NULL),
	('22222222-2222-2222-2222-222222222222', '00000000-0000-0000-0000-000000000001', NULL, 'Piso Recoleta Exclusive', 'sale', 'departamento', 450000, 'USD', 'Av. Alvear 1800, CABA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '[]', 'available', false, '2026-02-16 20:54:48.124239+00', '2026-02-16 20:54:48.124239+00', NULL, false, NULL, NULL);


--
-- Data for Name: leads; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."leads" ("id", "tenant_id", "branch_id", "name", "email", "phone", "source", "interest_type", "budget", "status", "scoring", "assigned_to", "created_at", "updated_at", "interested_property_id", "property_preferences", "communication_channels", "tracking_enabled") VALUES
	('33333333-3333-3333-3333-333333333333', '00000000-0000-0000-0000-000000000001', NULL, 'Carlos Martinez', 'carlos@email.com', NULL, NULL, NULL, NULL, 'new', 85, NULL, '2026-02-16 20:54:48.124239+00', '2026-02-16 20:54:48.124239+00', NULL, '{}', '{"email": true, "phone": true, "social": false, "whatsapp": true}', false),
	('44444444-4444-4444-4444-444444444444', '00000000-0000-0000-0000-000000000001', NULL, 'Laura Gomez', 'laura@email.com', NULL, NULL, NULL, NULL, 'contacted', 40, NULL, '2026-02-16 20:54:48.124239+00', '2026-02-16 20:54:48.124239+00', NULL, '{}', '{"email": true, "phone": true, "social": false, "whatsapp": true}', false);


--
-- Data for Name: campaign_executions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: contracts; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: conversations; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: conversation_participants; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."roles" ("id", "tenant_id", "name", "created_at") VALUES
	('d4cbbe53-445c-4908-a3f3-4b14afcfc6b5', '00000000-0000-0000-0000-000000000001', 'Administrador', '2026-02-16 20:54:48.124239+00'),
	('5d96cd4a-e370-4627-98e7-29aa7d94c5ab', '00000000-0000-0000-0000-000000000001', 'Agente', '2026-02-16 20:54:48.124239+00'),
	('cc92847d-edc8-4058-a873-57f402f9ecb1', '00000000-0000-0000-0000-000000000001', 'Administrador', '2026-02-16 20:54:48.124239+00'),
	('e8251143-050c-436a-a9d4-a393056779d7', '00000000-0000-0000-0000-000000000001', 'Agente', '2026-02-16 20:54:48.124239+00'),
	('2a93b177-01e9-4338-ac57-712af50d8e6a', '9c8b9548-5ba9-41af-874a-cb300a629f3f', 'Administrador', '2026-02-16 20:56:15.980138+00'),
	('0dd1da6a-419d-4fd7-94a2-add873f5ac67', '9c8b9548-5ba9-41af-874a-cb300a629f3f', 'Agente', '2026-02-16 20:56:15.980138+00'),
	('86b56da2-34c1-41b0-baf0-480f0e7bbb59', '9c8b9548-5ba9-41af-874a-cb300a629f3f', 'Administrador', '2026-02-16 20:56:15.980138+00'),
	('027812c0-a414-4cc2-8733-8cd1c07eb0de', '9c8b9548-5ba9-41af-874a-cb300a629f3f', 'Agente', '2026-02-16 20:56:15.980138+00');


--
-- Data for Name: invitations; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: network_invitations; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: pipeline_stages; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: pipeline_leads; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: portal_connections; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: property_media; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: property_publications; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: role_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: tasks; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: tenant_partnerships; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: user_branches; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_branches" ("user_id", "branch_id") VALUES
	('3edf6db2-e927-4f86-8f95-8335398cec65', '695de220-6117-45db-a9b1-d717d4ab99d6');


--
-- Data for Name: user_role_assignments; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_role_assignments" ("user_id", "role_id") VALUES
	('3edf6db2-e927-4f86-8f95-8335398cec65', '86b56da2-34c1-41b0-baf0-480f0e7bbb59');


--
-- Data for Name: visits; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- PostgreSQL database dump complete
--

-- \unrestrict HlaLZERil7KUh24QKxDyLNpgd1ABs1ay2BErozW8NXwNySTrXXJMQJlRsthsn8Z

RESET ALL;
