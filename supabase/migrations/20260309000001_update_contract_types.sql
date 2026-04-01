-- Migration: 20260309000001_update_contract_types.sql
-- Description: Add 'property_doc' and 'lead_doc' to the contracts table type check constraint

-- 1. Drop the existing constraint
ALTER TABLE public.contracts DROP CONSTRAINT IF EXISTS contracts_type_check;

-- 2. Add the updated constraint including new document types
ALTER TABLE public.contracts ADD CONSTRAINT contracts_type_check 
CHECK (type IN ('reservation', 'rental', 'sale', 'receipt', 'property_doc', 'lead_doc', 'other'));
