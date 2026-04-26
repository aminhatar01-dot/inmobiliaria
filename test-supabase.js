const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env.production
const envConfig = dotenv.parse(fs.readFileSync('.env.production'));

const supabaseUrl = envConfig.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = envConfig.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  const { data, error } = await supabase.from('tenants').select('*').limit(1);
  if (error) {
    console.error('Error fetching tenants:', error);
  } else {
    console.log('Tenants:', data);
  }
}

test();
