-- Migration: 20260309000000_add_dni_to_leads.sql
-- Description: Add DNI column to leads table for better legal documentation support

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='leads' AND column_name='dni') THEN
        ALTER TABLE public.leads ADD COLUMN dni TEXT;
    END IF;
END $$;
