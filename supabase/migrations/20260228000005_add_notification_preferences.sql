-- Migration: 20260228000005_add_notification_preferences.sql
-- Description: Add notification preferences to profiles

ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS notification_preferences JSONB DEFAULT '{
    "email": {
        "new_lead": true,
        "new_task": true,
        "new_message": true,
        "property_published": true
    },
    "push": {
        "new_lead": true,
        "new_task": true,
        "new_message": true
    },
    "whatsapp": {
        "new_lead": false
    }
}'::JSONB;
