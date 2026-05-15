const fs = require('fs');
let content = fs.readFileSync('apps/web/app/actions/subscriptions.ts', 'utf8');

const target = `    // 4. Update invite status and link invitee_id
    await supabase
        .from('subscription_invites')
        .update({
            status: 'accepted',
            invitee_id: user.id
        })
        .eq('id', invite.id)

    revalidatePath('/dashboard')
    revalidatePath('/cuenta/equipo')

    return { success: true }
}`;

const replacement = `    // 4. Update invite status and link invitee_id
    await supabase
        .from('subscription_invites')
        .update({
            status: 'accepted',
            invitee_id: user.id
        })
        .eq('id', invite.id)

    // 5. Add user to team group chats
    const { data: teamChats } = await supabase
        .from('conversations')
        .select('id')
        .eq('tenant_id', inviterProfile.tenant_id)
        .eq('is_group', true)
        .is('lead_id', null)

    if (teamChats && teamChats.length > 0) {
        const participants = teamChats.map(chat => ({
            conversation_id: chat.id,
            user_id: user.id
        }))
        // Insert ignoring duplicates if they somehow exist
        await supabase.from('conversation_participants').upsert(participants, { onConflict: 'conversation_id,user_id' })
    }

    // 6. Create a direct conversation with the inviter and send a welcome message
    const { data: existingParticipations } = await supabase
        .from('conversation_participants')
        .select('conversation_id')
        .eq('user_id', user.id)

    let directConversationId = null
    if (existingParticipations) {
        for (const participation of existingParticipations) {
            const { data: otherParticipation } = await supabase
                .from('conversation_participants')
                .select('user_id')
                .eq('conversation_id', participation.conversation_id)
                .eq('user_id', sub.user_id)
                .single()
            if (otherParticipation) {
                directConversationId = participation.conversation_id
                break
            }
        }
    }

    if (!directConversationId) {
        const { data: newConv } = await supabase
            .from('conversations')
            .insert({ tenant_id: inviterProfile.tenant_id, is_group: false })
            .select()
            .single()

        if (newConv) {
            directConversationId = newConv.id
            await supabase.from('conversation_participants').insert([
                { conversation_id: newConv.id, user_id: user.id },
                { conversation_id: newConv.id, user_id: sub.user_id }
            ])
            // Send welcome message from the inviter
            await supabase.from('messages').insert({
                conversation_id: newConv.id,
                sender_id: sub.user_id,
                content: '¡Hola! Te doy la bienvenida a nuestro equipo en InmoCMS. Aquí podremos comunicarnos directamente.'
            })
        }
    }

    revalidatePath('/dashboard')
    revalidatePath('/cuenta/equipo')
    revalidatePath('/mensajes')

    return { success: true }
}`;

content = content.replace(target, replacement);
content = content.replace(target.replace(/\n/g, '\r\n'), replacement);

fs.writeFileSync('apps/web/app/actions/subscriptions.ts', content);
