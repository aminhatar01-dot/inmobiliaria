-- Create subscription plans table
CREATE TABLE IF NOT EXISTS subscription_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    price_ars DECIMAL(12, 2) NOT NULL,
    max_properties INTEGER NOT NULL,
    max_leads INTEGER NOT NULL,
    max_content_creations_per_month INTEGER NOT NULL,
    max_automations INTEGER NOT NULL,
    max_responses_per_automation INTEGER NOT NULL,
    allows_team_invites BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert fixed plans as per requirements
INSERT INTO subscription_plans (name, price_ars, max_properties, max_leads, max_content_creations_per_month, max_automations, max_responses_per_automation, allows_team_invites)
VALUES 
('Gratuito', 0.00, 5, 10, 3, 3, 5, FALSE),
('Profesional', 50000.00, 999999, 999999, 999999, 999999, 999999, FALSE),
('Agencia', 150000.00, 999999, 999999, 999999, 999999, 999999, TRUE)
ON CONFLICT (name) DO UPDATE SET
    price_ars = EXCLUDED.price_ars,
    max_properties = EXCLUDED.max_properties,
    max_leads = EXCLUDED.max_leads,
    max_content_creations_per_month = EXCLUDED.max_content_creations_per_month,
    max_automations = EXCLUDED.max_automations,
    max_responses_per_automation = EXCLUDED.max_responses_per_automation,
    allows_team_invites = EXCLUDED.allows_team_invites;

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS user_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    plan_id UUID REFERENCES subscription_plans(id),
    status TEXT NOT NULL DEFAULT 'active', -- 'active', 'past_due', 'canceled', 'expired'
    current_period_start TIMESTAMPTZ DEFAULT NOW(),
    current_period_end TIMESTAMPTZ DEFAULT NOW() + INTERVAL '1 month',
    payment_method_id TEXT, -- Reference to MercadoPago payment token if applicable
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Create subscription invitations table (Tier 3)
CREATE TABLE IF NOT EXISTS subscription_invites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inviter_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    invitee_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    subscription_id UUID REFERENCES user_subscriptions(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'accepted', -- For now we auto-accept based on requirement "invitados"
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(invitee_id) -- A user can only be invited to one team at a time
);

-- RLS Policies
ALTER TABLE subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_invites ENABLE ROW LEVEL SECURITY;

-- Everyone can view plans
CREATE POLICY "Public plans access" ON subscription_plans FOR SELECT TO public USING (true);

-- Users can only view their own subscription
CREATE POLICY "Users view own subscription" ON user_subscriptions FOR SELECT TO authenticated
USING (auth.uid() = user_id OR id IN (SELECT subscription_id FROM subscription_invites WHERE invitee_id = auth.uid()));

-- Users can manage their own subscription (placeholder for actual payment system)
CREATE POLICY "Users manage own subscription" ON user_subscriptions FOR ALL TO authenticated
USING (auth.uid() = user_id);

-- Agency owners can manage invites
CREATE POLICY "Agency owners manage invites" ON subscription_invites FOR ALL TO authenticated
USING (inviter_id = auth.uid());

-- Invitees can view their invites
CREATE POLICY "Invitees view invites" ON subscription_invites FOR SELECT TO authenticated
USING (invitee_id = auth.uid());

-- Function to handle monthly content tracking
CREATE TABLE IF NOT EXISTS usage_tracking (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    feature TEXT NOT NULL,
    count INTEGER DEFAULT 1,
    period_start TIMESTAMPTZ NOT NULL,
    period_end TIMESTAMPTZ NOT NULL,
    UNIQUE(user_id, feature, period_start)
);

ALTER TABLE usage_tracking ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users view own usage" ON usage_tracking FOR SELECT TO authenticated USING (auth.uid() = user_id);
