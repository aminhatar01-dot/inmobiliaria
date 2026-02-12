import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), 'apps/web/.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role to list/create

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function debug() {
    console.log('--- Checking Storage Buckets ---')
    const { data: buckets, error: bucketError } = await supabase.storage.listBuckets()
    if (bucketError) {
        console.error('Error listing buckets:', bucketError)
    } else {
        console.log('Buckets:', buckets.map(b => b.name))
        if (!buckets.find(b => b.name === 'properties')) {
            console.log('Bucket "properties" missing. Attempting to create...')
            const { data, error } = await supabase.storage.createBucket('properties', {
                public: true,
                fileSizeLimit: 10485760, // 10MB
                allowedMimeTypes: ['image/*']
            })
            if (error) console.error('Error creating bucket:', error)
            else console.log('Bucket "properties" created.')
        }
    }

    console.log('\n--- Checking Leads ---')
    const { data: leads, error: leadsError } = await supabase.from('leads').select('id, name')
    if (leadsError) {
        console.error('Error fetching leads:', leadsError)
    } else {
        console.log('Leads found:', leads.length)
        if (leads.length === 0) {
            console.log('No leads found. User needs to create a lead first to assign it as an owner.')
        }
    }
}

debug()
