'use server'

import { createClient } from '@/lib/supabase/server'
import { getGoogleAdsClient } from '@/lib/services/google-ads'
import { revalidatePath } from 'next/cache'

export async function createPropertyAd(propertyId: string) {
    try {
        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) throw new Error('Unauthorized')

        // 1. Get property details
        const { data: property, error: propertyError } = await supabase
            .from('properties')
            .select('*')
            .eq('id', propertyId)
            .single()

        if (propertyError || !property) throw new Error('Propiedad no encontrada')

        // 2. Get Google Ads Client
        const { customer, customerId } = await getGoogleAdsClient()
        if (!customerId) throw new Error('No has seleccionado una cuenta de Google Ads activa')

        // 3. Create Budget (Simplified)
        // Note: In real scenarios, you might want to reuse budgets or ask the user
        const budgetName = `InmoCMS - Budget - ${property.title}`
        
        // This is a simplified flow. Creating campaigns requires multiple steps:
        // Budget -> Campaign -> AdGroup -> AdGroupAd
        
        // Step A: Create Budget
        const budgetResult = await customer.campaignBudgets.create([
            {
                name: budgetName,
                amount_micros: 5000000, // $5.00
                delivery_method: 'STANDARD' as any,
            }
        ])
        const budgetResourceName = budgetResult.results[0].resource_name

        // Step B: Create Campaign
        const campaignResult = await customer.campaigns.create([
            {
                name: `InmoCMS - Campaign - ${property.title}`,
                advertising_channel_type: 'SEARCH' as any,
                status: 'PAUSED' as any, // Start paused for safety
                campaign_budget: budgetResourceName,
                manual_cpc: {
                    enhanced_cpc_enabled: true
                },
                network_settings: {
                    target_google_search: true,
                    target_search_network: true,
                    target_content_network: false,
                    target_partner_search_network: false,
                }
            }
        ])
        const campaignResourceName = campaignResult.results[0].resource_name

        // Step C: Create Ad Group
        const adGroupResult = await customer.adGroups.create([
            {
                name: `Ad Group - ${property.title}`,
                campaign: campaignResourceName,
                status: 'ENABLED' as any,
                type: 'SEARCH_STANDARD' as any,
                cpc_bid_micros: 1000000, // $1.00
            }
        ])
        const adGroupResourceName = adGroupResult.results[0].resource_name

        // Step D: Create Responsive Search Ad
        await customer.adGroupAds.create([
            {
                ad_group: adGroupResourceName,
                status: 'ENABLED' as any,
                ad: {
                    responsive_search_ad: {
                        headlines: [
                            { text: property.title.substring(0, 30) },
                            { text: `Oportunidad: $${property.price}` },
                            { text: 'Consulta hoy mismo' }
                        ],
                        descriptions: [
                            { text: property.description.substring(0, 90) },
                            { text: 'Contacta con nosotros para más información sobre esta propiedad.' }
                        ],
                        path1: 'inmueble',
                        path2: 'oferta'
                    },
                    final_urls: [`${process.env.NEXT_PUBLIC_SITE_URL}/propiedades/${property.id}`]
                }
            }
        ])

        revalidatePath('/propiedades')
        return { success: true, campaignId: campaignResourceName }

    } catch (error: any) {
        console.error('[CREATE-AD-ACTION] Error:', error.message)
        return { error: error.message }
    }
}
