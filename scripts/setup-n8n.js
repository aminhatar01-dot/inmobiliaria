const fs = require('fs');
const path = require('path');
require('dotenv').config();

const N8N_API_URL = process.env.N8N_API_URL || 'http://localhost:5678/api/v1';
const N8N_API_KEY = process.env.N8N_API_KEY;

async function setupN8n() {
  if (!N8N_API_KEY) {
    console.error('N8N_API_KEY is not defined in .env');
    return;
  }

  const flowPath = path.join(__dirname, 'n8n', 'whatsapp_master_flow.json');
  if (!fs.existsSync(flowPath)) {
    console.error(`Flow file not found at ${flowPath}`);
    return;
  }

  const flowData = JSON.parse(fs.readFileSync(flowPath, 'utf8'));

  try {
    console.log('Importing master flow to n8n...');
    
    const response = await fetch(`${N8N_API_URL}/workflows`, {
      method: 'POST',
      headers: {
        'X-N8N-API-KEY': N8N_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(flowData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    const workflowId = data.id;
    console.log(`Flow imported successfully! Workflow ID: ${workflowId}`);

    // Activate the flow
    console.log('Activating flow...');
    const activateResponse = await fetch(`${N8N_API_URL}/workflows/${workflowId}/activate`, {
      method: 'POST',
      headers: {
        'X-N8N-API-KEY': N8N_API_KEY
      }
    });

    if (activateResponse.ok) {
      console.log('Flow activated.');
    } else {
      console.warn('Could not activate flow automatically. Please activate it manually in n8n.');
    }

    console.log('N8N setup complete.');
    console.log('--------------------------------------------------');
    console.log(`MASTER_FLOW_ID=${workflowId}`);
    console.log('Add this ID to your .env to use in the backend.');
    console.log('--------------------------------------------------');
  } catch (error) {
    console.error('Error setting up n8n:', error.message);
  }
}

setupN8n();
