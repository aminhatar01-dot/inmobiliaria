const fs = require('fs');
let content = fs.readFileSync('apps/web/app/actions/subscriptions.ts', 'utf8');

const target = `export async function getSubscriptionStatus(): Promise<SubscriptionStatus> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error("Not authenticated")

    const { data: subscription } = await supabase
        .from('user_subscriptions')
        .select(\`
            id,
            status,
            current_period_start,
            current_period_end,
            plan_id,
            subscription_plans (
                name,
                price_ars
            )
        \`)
        .eq('user_id', user.id)
        .single()`;

const replacement = `export async function getSubscriptionStatus(): Promise<SubscriptionStatus> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error("Not authenticated")

    const { data: invite } = await supabase
        .from('subscription_invites')
        .select('subscription_id')
        .eq('invitee_id', user.id)
        .single()

    const subscriptionQuery = supabase
        .from('user_subscriptions')
        .select(\`
            id,
            status,
            current_period_start,
            current_period_end,
            plan_id,
            subscription_plans (
                name,
                price_ars
            )
        \`)

    if (invite) {
        subscriptionQuery.eq('id', invite.subscription_id)
    } else {
        subscriptionQuery.eq('user_id', user.id)
    }

    const { data: subscription } = await subscriptionQuery.single()`;

content = content.replace(target, replacement);
content = content.replace(target.replace(/\n/g, '\r\n'), replacement);

fs.writeFileSync('apps/web/app/actions/subscriptions.ts', content);
