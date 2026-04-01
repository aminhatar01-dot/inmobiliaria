-- Combined Subscriptions Migration
BEGIN;

-- 1. Create subscription plans table
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

-- Insert fixed plans
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

-- 2. Create subscriptions table
CREATE TABLE IF NOT EXISTS user_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    plan_id UUID REFERENCES subscription_plans(id),
    status TEXT NOT NULL DEFAULT 'active',
    current_period_start TIMESTAMPTZ DEFAULT NOW(),
    current_period_end TIMESTAMPTZ DEFAULT NOW() + INTERVAL '1 month',
    payment_method_id TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id)
);

-- 3. Create subscription invitations table
CREATE TABLE IF NOT EXISTS subscription_invites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inviter_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    invitee_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    subscription_id UUID REFERENCES user_subscriptions(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'pending',
    token UUID DEFAULT gen_random_uuid(),
    invitee_email TEXT,
    expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '7 days'),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(invitee_id)
);

CREATE INDEX IF NOT EXISTS idx_subscription_invites_token ON public.subscription_invites(token);

-- 4. RLS Policies
ALTER TABLE subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_invites ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public plans access" ON subscription_plans;
CREATE POLICY "Public plans access" ON subscription_plans FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Users view own subscription" ON user_subscriptions;
CREATE POLICY "Users view own subscription" ON user_subscriptions FOR SELECT TO authenticated
USING (auth.uid() = user_id OR id IN (SELECT subscription_id FROM subscription_invites WHERE invitee_id = auth.uid()));

DROP POLICY IF EXISTS "Users manage own subscription" ON user_subscriptions;
CREATE POLICY "Users manage own subscription" ON user_subscriptions FOR ALL TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Agency owners manage invites" ON subscription_invites;
CREATE POLICY "Agency owners manage invites" ON subscription_invites FOR ALL TO authenticated
USING (inviter_id = auth.uid());

DROP POLICY IF EXISTS "Invitees view invites" ON subscription_invites;
CREATE POLICY "Invitees view invites" ON subscription_invites FOR SELECT TO authenticated
USING (invitee_id = auth.uid());

-- 5. Usage Tracking
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
DROP POLICY IF EXISTS "Users view own usage" ON usage_tracking;
CREATE POLICY "Users view own usage" ON usage_tracking FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- 6. Tenant RLS Fixes
DROP POLICY IF EXISTS "Users can insert their own tenant" ON public.tenants;
CREATE POLICY "Users can insert their own tenant"
ON public.tenants FOR INSERT TO authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Users can update their own tenant" ON public.tenants;
CREATE POLICY "Users can update their own tenant"
ON public.tenants FOR UPDATE TO authenticated
USING (id = public.get_auth_tenant_id())
WITH CHECK (id = public.get_auth_tenant_id());

COMMIT;
