require('dotenv').config({ path: './scratch_env/.env.prod' });
const { createClient } = require('@supabase/supabase-js');

async function run() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const adminClient = createClient(supabaseUrl, serviceRoleKey);

    // List of tables to check
    const tables = ['tenants', 'branches', 'roles', 'permissions', 'role_permissions', 'profiles', 'user_role_assignments', 'user_branches', 'properties', 'leads', 'invitations'];

    for (const table of tables) {
        const { error } = await adminClient.from(table).select('id').limit(1);
        if (error) {
            console.error(`Table ${table} Error:`, error.message, error.code);
        } else {
            console.log(`Table ${table} exists and is accessible.`);
        }
    }
}

run();
