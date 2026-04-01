const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = "http://127.0.0.1:54331"
const supabaseKey = "eyJhbGciOiJFUzI1NiIsImtpZCI6ImI4MTI2OWYxLTIxZDgtNGYyZS1iNzE5LWMyMjQwYTg0MGQ5MCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MjA4NDA0ODc2OH0.nVfFzUoZjk-U65LqLy0cr-rg4Es6fT16Gul9TKrcg5wXRNCe6y8xbUHgwesCnEoCxRdin0_PuBiKkXDUKO7-pA"
const supabase = createClient(supabaseUrl, supabaseKey)

async function debug() {
    console.log("Listing tables...")
    const { data: tables, error } = await supabase
        .rpc('get_tables') // I'll try to find a way to list tables, or just query information_schema

    if (error) {
        console.log("RPC get_tables failed, trying direct query on information_schema...")
        const { data: schemaTables, error: schemaError } = await supabase
            .from('information_schema.tables')
            .select('table_name')
            .eq('table_schema', 'public')

        if (schemaError) {
            console.error("Error fetching from information_schema:", schemaError)
        } else {
            console.log("Tables in public schema:", schemaTables.map(t => t.table_name).join(', '))
        }
    } else {
        console.log("Tables:", tables)
    }
}

debug()
