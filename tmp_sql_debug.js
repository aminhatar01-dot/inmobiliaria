const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = "http://127.0.0.1:54331"
const supabaseKey = "eyJhbGciOiJFUzI1NiIsImtpZCI6ImI4MTI2OWYxLTIxZDgtNGYyZS1iNzE5LWMyMjQwYTg0MGQ5MCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MjA4NDA0ODc2OH0.nVfFzUoZjk-U65LqLy0cr-rg4Es6fT16Gul9TKrcg5wXRNCe6y8xbUHgwesCnEoCxRdin0_PuBiKkXDUKO7-pA"
const supabase = createClient(supabaseUrl, supabaseKey)

async function debug() {
    console.log("Checking tables via SQL...")
    // We try to query a system table that is usually accessible via RPC if it's there
    const { data, error } = await supabase.rpc('exec_sql', {
        sql_query: "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
    })

    if (error) {
        console.error("RPC exec_sql not found or failed:", error.message)
        console.log("Trying to find any other RPC that might help...")
    } else {
        console.log("Tables found:", data)
    }
}

debug()
