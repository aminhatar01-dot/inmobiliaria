-- Ciclo 16: Campañas de Marketing y Automatización
-- Esquema para gestión de campañas omnicanal y reglas de automatización

-- Tabla de Campañas
CREATE TABLE IF NOT EXISTS campaigns (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('email', 'social_media', 'sms', 'whatsapp')),
    status TEXT NOT NULL CHECK (status IN ('draft', 'scheduled', 'active', 'completed', 'paused')),
    content JSONB DEFAULT '{}',
    target_audience JSONB DEFAULT '{}',
    scheduled_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de Ejecuciones de Campaña
CREATE TABLE IF NOT EXISTS campaign_executions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    campaign_id UUID NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
    lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
    status TEXT NOT NULL CHECK (status IN ('pending', 'sent', 'delivered', 'failed', 'opened', 'clicked')),
    sent_at TIMESTAMPTZ,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de Reglas de Automatización
CREATE TABLE IF NOT EXISTS automation_rules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    trigger_type TEXT NOT NULL CHECK (trigger_type IN ('lead_status_change', 'lead_created', 'visit_scheduled', 'property_status_change', 'incoming_message')),
    trigger_condition JSONB DEFAULT '{}',
    action_type TEXT NOT NULL CHECK (action_type IN ('send_email', 'create_task', 'send_notification', 'update_lead_field', 'send_whatsapp')),
    action_config JSONB DEFAULT '{}',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_executions ENABLE ROW LEVEL SECURITY;
ALTER TABLE automation_rules ENABLE ROW LEVEL SECURITY;

-- Políticas multi-tenant
CREATE POLICY "Users can manage own tenant campaigns" ON campaigns
    FOR ALL USING (tenant_id = public.get_auth_tenant_id());

CREATE POLICY "Users can manage own tenant campaign executions" ON campaign_executions
    FOR ALL USING (
        campaign_id IN (SELECT id FROM campaigns WHERE tenant_id = public.get_auth_tenant_id())
    );

CREATE POLICY "Users can manage own tenant automation rules" ON automation_rules
    FOR ALL USING (tenant_id = public.get_auth_tenant_id());

-- Índices
CREATE INDEX IF NOT EXISTS idx_campaigns_tenant ON campaigns(tenant_id);
CREATE INDEX IF NOT EXISTS idx_campaign_executions_campaign ON campaign_executions(campaign_id);
CREATE INDEX IF NOT EXISTS idx_automation_rules_tenant ON automation_rules(tenant_id);

-- Función para actualizar updated_at
CREATE OR REPLACE FUNCTION update_marketing_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers
CREATE TRIGGER trigger_update_campaigns_updated_at
    BEFORE UPDATE ON campaigns
    FOR EACH ROW EXECUTE FUNCTION update_marketing_updated_at();

CREATE TRIGGER trigger_update_automation_rules_updated_at
    BEFORE UPDATE ON automation_rules
    FOR EACH ROW EXECUTE FUNCTION update_marketing_updated_at();
