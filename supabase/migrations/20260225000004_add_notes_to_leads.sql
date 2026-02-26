-- Migration: add_notes_to_leads.sql
-- Description: Add notes column to leads table for storing inquiry messages

ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS notes text;
