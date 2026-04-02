const accessToken = 'APP_USR-3084357364371106-040118-4dfaba3475f31c27636dd9029ccd6b4f-814682618';

async function verifyToken() {
    try {
        const response = await fetch('https://api.mercadopago.com/v1/me', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        if (response.ok) {
            console.log('Token is valid for user:', data.id, data.nickname);
        } else {
            console.error('Token verification failed:', data);
        }
    } catch (error) {
        console.error('Error verifying token:', error);
    }
}

verifyToken();
