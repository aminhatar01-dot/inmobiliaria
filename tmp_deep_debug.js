const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = "http://127.0.0.1:54331"
const supabaseKey = "eyJhbGciOiJFUzI1NiIsImtpZCI6ImI4MTI2OWYxLTIxZDgtNGYyZS1iNzE5LWMyMjQwYTg0MGQ5MCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MjA4NDA0ODc2OH0.nVfFzUoZjk-U65LqLy0cr-rg4Es6fT16Gul9TKrcg5wXRNCe6y8xbUHgwesCnEoCxRdin0_PuBiKkXDUKO7-pA"
const supabase = createClient(supabaseUrl, supabaseKey)

async function debug() {
    console.log("Checking 'tenants' table...")
    const { data: tenants, error: tError } = await supabase.from('tenants').select('*').limit(1)
    if (tError) {
        console.error("Error fetching tenants:", tError.message)
    } else {
        console.log("Tenants access: OK, found", tenants.length, "rows")
    }

    console.log("\nChecking 'subscription_plans' table with various methods...")

    const { data: p1, error: e1 } = await supabase.from('subscription_plans').select('*')
    console.log("Method 1 (select *):", e1 ? e1.message : `OK (${p1.length} rows)`)

    const { data: p2, error: e2 } = await supabase.from('subscription_plans').select('id, name')
    console.log("Method 2 (select id, name):", e2 ? e2.message : `OK (${p2.length} rows)`)

    if (!e1 && p1.length > 0) {
        console.log("Sample plan names:", p1.map(p => p.name).join(', '))
    }
}

debug()
