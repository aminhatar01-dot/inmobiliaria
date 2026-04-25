require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to create a new lead
async function createLead(leadData) {
    const { data, error } = await supabase.from('leads').insert(leadData);
    if (error) {
        console.error('Error creating lead:', error, { timestamp: new Date().toISOString() });
        throw new Error(error.message);
    }
    return data;
}

// Example usage
(async () => {
    try {
        const lead = await createLead({
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '123456789',
            campaign: 'Spring Promotion'
        });
        console.log('Lead created:', lead);
    } catch (err) {
        console.error('Failed to create lead:', err.message);
    }
})();
