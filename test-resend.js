// Let's just fetch it directly

// Let's just fetch it directly
const resendApiKey = 're_ZwiyGafC_29AZxYwt8xHPBNwL9Lrv7sFs';
const fromEmail = 'aminhatar01@gmail.com';

async function test() {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        from: `Test <${fromEmail}>`,
        to: ['aminhatar01@gmail.com'], 
        subject: 'InmoCMS: Prueba',
        html: '<strong>Prueba</strong>'
    })
  });
  const data = await response.json();
  console.log('Resend Response:', data);
}

test();
