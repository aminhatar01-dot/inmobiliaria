-- Migration: 20260307000003_fix_contract_types.sql
-- Description: Add 'receipt' to the contracts table type check constraint

-- 1. Drop the existing constraint
ALTER TABLE public.contracts DROP CONSTRAINT IF EXISTS contracts_type_check;

-- 2. Add the updated constraint including 'receipt'
ALTER TABLE public.contracts ADD CONSTRAINT contracts_type_check 
CHECK (type IN ('reservation', 'rental', 'sale', 'receipt', 'other'));
