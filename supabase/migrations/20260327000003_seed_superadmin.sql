-- Seed: Set superadmin flag for the system owner
-- Run this script ONCE to initialize the superadmin account.
-- The user MUST have logged in at least once before running this.

DO $$
DECLARE
    v_user_id uuid;
BEGIN
    -- Find the user by email in auth.users
    SELECT id INTO v_user_id
    FROM auth.users
    WHERE email = 'aminhatar01@gmail.com'
    LIMIT 1;

    IF v_user_id IS NULL THEN
        RAISE NOTICE 'User not found. Please log in first to create the account, then run this script.';
    ELSE
        -- Update their profile to mark as superadmin
        UPDATE public.profiles
        SET is_superadmin = true
        WHERE id = v_user_id;

        RAISE NOTICE 'Superadmin flag set for user: %', v_user_id;
    END IF;
END $$;
