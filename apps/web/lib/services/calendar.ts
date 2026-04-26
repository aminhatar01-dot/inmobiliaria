/**
 * Google Calendar Service
 * 
 * Sincroniza tareas y visitas desde InmoCMS hacia Google Calendar usando la API de Google (OAuth2).
 */

export interface GoogleCalendarEvent {
    summary: string;
    description?: string;
    location?: string;
    start: {
        dateTime: string; // ISO string
        timeZone: string;
    };
    end: {
        dateTime: string; // ISO string
        timeZone: string;
    };
    attendees?: Array<{email: string}>;
}

export async function createGoogleCalendarEvent(
    accessToken: string, 
    event: GoogleCalendarEvent
): Promise<{ success: boolean; eventId?: string; error?: string }> {
    try {
        const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('[GOOGLE-CALENDAR] Error response:', data);
            throw new Error(data.error?.message || `Google API Error: ${response.status}`);
        }

        console.log(`[GOOGLE-CALENDAR] ✅ Evento creado. ID: ${data.id}`);
        return { success: true, eventId: data.id };
    } catch (error: any) {
        console.error('[GOOGLE-CALENDAR] Error creating event:', error);
        return { success: false, error: error.message };
    }
}
