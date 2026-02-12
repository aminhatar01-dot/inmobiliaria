-- Portal Connections (Store credentials/tokens for external portals)
CREATE TABLE IF NOT EXISTS portal_connections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    portal_name TEXT NOT NULL CHECK (portal_name IN ('mercadolibre', 'argenprop', 'zonaprop')),
    account_email TEXT,
    status TEXT NOT NULL CHECK (status IN ('connected', 'disconnected', 'error', 'expired')),
    credentials JSONB DEFAULT '{}', -- Store tokens, client_id, etc.
    last_sync_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Property Publications (Track status of properties in each portal)
CREATE TABLE IF NOT EXISTS property_publications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
    portal_connection_id UUID NOT NULL REFERENCES portal_connections(id) ON DELETE CASCADE,
    external_id TEXT, -- ID of the property in the external portal
    external_url TEXT, -- Link to the live publication
    status TEXT NOT NULL CHECK (status IN ('pending', 'published', 'error', 'withdrawn')),
    error_message TEXT,
    last_published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(property_id, portal_connection_id)
);

-- RLS Policies
ALTER TABLE portal_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_publications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their tenant's portal connections"
    ON portal_connections FOR SELECT
    USING (tenant_id = (SELECT tenant_id FROM users WHERE id = auth.uid()));

CREATE POLICY "Users can manage their tenant's portal connections"
    ON portal_connections FOR ALL
    USING (tenant_id = (SELECT tenant_id FROM users WHERE id = auth.uid()));

CREATE POLICY "Users can view their tenant's property publications"
    ON property_publications FOR SELECT
    USING (tenant_id = (SELECT tenant_id FROM users WHERE id = auth.uid()));

CREATE POLICY "Users can manage their tenant's property publications"
    ON property_publications FOR ALL
    USING (tenant_id = (SELECT tenant_id FROM users WHERE id = auth.uid()));

-- Update triggers
CREATE TRIGGER update_portal_connections_updated_at
    BEFORE UPDATE ON portal_connections
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_property_publications_updated_at
    BEFORE UPDATE ON property_publications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
