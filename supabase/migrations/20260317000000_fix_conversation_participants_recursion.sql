-- Fixes infinite recursion in conversation_participants RLS policies

-- 1. Drop the problematic policies
DROP POLICY IF EXISTS "Users can view participants of their conversations" ON conversation_participants;
DROP POLICY IF EXISTS "Users can add participants to conversations they're in" ON conversation_participants;

-- 2. Create a helper function to check participation without recursion
-- Using SECURITY DEFINER to bypass RLS checks within the function context
CREATE OR REPLACE FUNCTION public.check_is_conversation_participant(conv_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 
        FROM conversation_participants 
        WHERE conversation_id = conv_id 
        AND user_id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- 3. Re-create the policies using the helper function
CREATE POLICY "Users can view participants of their conversations"
    ON conversation_participants FOR SELECT
    USING (
        public.check_is_conversation_participant(conversation_id)
    );

CREATE POLICY "Users can add participants to conversations they're in"
    ON conversation_participants FOR INSERT
    WITH CHECK (
        public.check_is_conversation_participant(conversation_id)
        OR 
        -- Allow adding yourself to a conversation created for your tenant
        EXISTS (
            SELECT 1 FROM conversations 
            WHERE id = conversation_id 
            AND tenant_id = public.get_auth_tenant_id()
        )
    );

-- Also ensure messages policy is robust
DROP POLICY IF EXISTS "Users can view messages in their conversations" ON messages;
DROP POLICY IF EXISTS "Users can send messages to their conversations" ON messages;

CREATE POLICY "Users can view messages in their conversations"
    ON messages FOR SELECT
    USING (
        public.check_is_conversation_participant(conversation_id)
    );

CREATE POLICY "Users can send messages to their conversations"
    ON messages FOR INSERT
    WITH CHECK (
        public.check_is_conversation_participant(conversation_id)
        AND sender_id = auth.uid()
    );
