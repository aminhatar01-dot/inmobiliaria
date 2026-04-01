
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../apps/web/.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing env vars")
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function test() {
    console.log("Testing connection to:", supabaseUrl)
    const start = Date.now()
    try {
        const { data, error } = await supabase.from('profiles').select('id').limit(1)
        const duration = Date.now() - start
        if (error) {
            console.error("Query Error:", error)
        } else {
            console.log("Success! Data found. Duration:", duration, "ms")
        }
    } catch (err) {
        console.error("Exception:", err)
    }
}

test()
