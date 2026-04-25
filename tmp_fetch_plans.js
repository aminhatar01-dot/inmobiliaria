const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = "http://127.0.0.1:54331"
const supabaseKey = "eyJhbGciOiJFUzI1NiIsImtpZCI6ImI4MTI2OWYxLTIxZDgtNGYyZS1iNzE5LWMyMjQwYTg0MGQ5MCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MjA4NDA0ODc2OH0.nVfFzUoZjk-U65LqLy0cr-rg4Es6fT16Gul9TKrcg5wXRNCe6y8xbUHgwesCnEoCxRdin0_PuBiKkXDUKO7-pA"
const supabase = createClient(supabaseUrl, supabaseKey)

async function debug() {
    console.log("Fetching ALL plans...")
    const { data: plans, error } = await supabase.from('subscription_plans').select('id, name')

    if (error) {
        console.error("Error fetching subscription plans:", error.message, { timestamp: new Date().toISOString() });
    } else {
        console.log("Plans found in DB:", JSON.stringify(plans, null, 2))
    }
}

debug()
