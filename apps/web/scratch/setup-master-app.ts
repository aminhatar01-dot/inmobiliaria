
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function setupMasterApp() {
  const appId = '3084357364371106'
  const secretKey = 'Dh5LLkcWPUTSi0LN77GSuUNoGZ9uw3Ip'

  // 1. Get the main tenant (assuming there's one for now or just get the first one)
  const { data: tenants } = await supabase.from('tenants').select('id').limit(1)
  
  if (!tenants || tenants.length === 0) {
    console.error('No tenant found')
    return
  }

  const tenantId = tenants[0].id
  console.log('Setting up Master App for tenant:', tenantId)

  // 2. Upsert the portal_connection as "Global Config"
  const { error } = await supabase
    .from('portal_connections')
    .upsert({
      tenant_id: tenantId,
      portal_name: 'mercadolibre',
      status: 'disconnected',
      credentials: {
        client_id: appId,
        client_secret: secretKey,
        is_platform_default: true,
        configured_at: new Date().toISOString()
      }
    }, { onConflict: 'tenant_id,portal_name' })

  if (error) {
    console.error('Error upserting config:', error)
  } else {
    console.log('Master App configured successfully!')
  }
}

setupMasterApp()
