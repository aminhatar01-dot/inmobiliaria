import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

async function debug() {
    console.log("Checking subscription_plans...")
    const { data: plans, error: plansError } = await supabase
        .from('subscription_plans')
        .select('*')

    if (plansError) {
        console.error("Error fetching plans:", plansError)
    } else {
        console.log("Plans found:", plans.map(p => p.name))
    }

    console.log("\nChecking user profile for a sample user if needed...")
}

debug()
