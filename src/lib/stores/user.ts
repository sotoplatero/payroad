import { readable } from 'svelte/store'
import { auth } from '$lib/supabase'
import { goto } from '$app/navigation';
import type{ AuthChangeEvent, Session } from '@supabase/supabase-js'
import { setAuthCookie, unsetAuthCookie } from '$lib/utils/session';
import { ROUTE_AUTH, ROUTE_PROFILE } from '$lib/config/app'

export const user = readable(auth.user(), set => {
    auth.onAuthStateChange(async (event: AuthChangeEvent, session: Session) => {
        console.log(event +' - '+ session)
        await setServerSession(event, session);
        set(session?.user || { guest: true } )
        
        if (event == 'SIGNED_IN') {
            goto(ROUTE_PROFILE)
        }
        if (event == 'SIGNED_OUT') {
            // set({ user: { guest: true } })
            goto(ROUTE_AUTH)
        }
    })
})

async function setServerSession(event: AuthChangeEvent, session: Session) {
    await fetch('/api/auth.json', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify({ event, session }),
    })
}
