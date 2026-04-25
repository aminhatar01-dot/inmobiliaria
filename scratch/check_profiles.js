require('dotenv').config({ path: './scratch_env/.env.prod' });
const { createClient } = require('@supabase/supabase-js');

async function run() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const adminClient = createClient(supabaseUrl, serviceRoleKey);

    const { data, error } = await adminClient.from('profiles').select().limit(1);
    if (error) {
         console.error('Error fetching profiles:', error.message, { timestamp: new Date().toISOString() });
    } else {
         console.log('Columns:', Object.keys(data[0] || {}));
    }
}
run();
