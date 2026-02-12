import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), 'apps/web/.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY! // Using service key to check actual state

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function testLeadCreation() {
    console.log('--- Checking Database State ---')

    // 1. Check if 'profiles' exists and has the user
    const { data: profiles, error: profileError } = await supabase.from('profiles').select('*')
    if (profileError) {
        console.error('Error fetching profiles:', profileError)
    } else {
        console.log('Profiles found:', profiles.length)
        console.log('Sample profile:', profiles[0])
    }

    // 2. Try to insert a lead with service role (to see if it works at all)
    console.log('\n--- Testing Lead Insertion (Service Role) ---')
    if (profiles.length > 0) {
        const testTenantId = profiles[0].tenant_id
        const { data: newLead, error: insertError } = await supabase.from('leads').insert([{
            tenant_id: testTenantId,
            name: 'Test Lead ' + Date.now(),
            status: 'new',
            scoring: 0
        }]).select().single()

        if (insertError) {
            console.error('Insert error (Service Role):', insertError)
        } else {
            console.log('Lead created successfully (Service Role):', newLead.id)

            // Cleanup
            await supabase.from('leads').delete().eq('id', newLead.id)
        }
    } else {
        console.log('Skipping insert test: No profiles found.')
    }
}

testLeadCreation()
