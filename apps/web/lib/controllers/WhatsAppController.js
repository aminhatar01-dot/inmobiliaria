const { createClient } = require('@supabase/supabase-js');

// Configuración de n8n y Supabase
const N8N_API_URL = process.env.N8N_API_URL;
const N8N_API_KEY = process.env.N8N_API_KEY;
const N8N_MASTER_FLOW_ID = process.env.N8N_MASTER_FLOW_ID;
const WHAPI_API_URL = process.env.WHAPI_API_URL || 'https://gate.whapi.cloud';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const WhatsAppController = {
  /**
   * Obtiene un QR para vincular al usuario con el proveedor de WhatsApp (Whapi/WPPConnect)
   */
  async vincularUsuario(req, res) {
    const { userId } = req.body;

    try {
      const response = await fetch(`${WHAPI_API_URL}/users/login`, {
        headers: { 'Authorization': `Bearer ${process.env.WHAPI_MASTER_TOKEN}` }
      });

      const data = await response.json();
      const qrCode = data.qr; 

      return res.status(200).json({
        success: true,
        qr: qrCode,
        status: 'pending'
      });
    } catch (error) {
      console.error('Error en vincularUsuario:', error);
      return res.status(500).json({ success: false, error: 'No se pudo generar el QR' });
    }
  },

  /**
   * Clona el flujo maestro de n8n para un usuario específico si no lo tiene
   */
  async provisionarFlujo(req, res) {
    const { userId } = req.body;

    try {
      const { data: user } = await supabase
        .from('profiles')
        .select('n8n_webhook_url')
        .eq('id', userId)
        .single();

      if (user?.n8n_webhook_url) {
        return res.status(200).json({ success: true, webhookUrl: user.n8n_webhook_url });
      }

      // Obtener el flujo maestro
      const masterResponse = await fetch(`${N8N_API_URL}/workflows/${N8N_MASTER_FLOW_ID}`, {
        headers: { 'X-N8N-API-KEY': N8N_API_KEY }
      });
      const masterFlow = await masterResponse.json();

      // Crear nuevo flujo
      const newFlowData = {
        ...masterFlow,
        name: `WhatsApp Flow - User ${userId}`,
        id: undefined,
        active: true
      };

      const createResponse = await fetch(`${N8N_API_URL}/workflows`, {
        method: 'POST',
        headers: {
          'X-N8N-API-KEY': N8N_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFlowData)
      });
      const newFlow = await createResponse.json();

      const webhookUrl = `${process.env.N8N_WEBHOOK_BASE_URL}/webhook/${newFlow.id}/whatsapp-webhook`;

      await supabase
        .from('profiles')
        .update({ n8n_webhook_url: webhookUrl })
        .eq('id', userId);

      return res.status(200).json({ success: true, webhookUrl });
    } catch (error) {
      console.error('Error en provisionarFlujo:', error);
      return res.status(500).json({ success: false, error: 'Error al provisionar el flujo' });
    }
  }
};

module.exports = WhatsAppController;
