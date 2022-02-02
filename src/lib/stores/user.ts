import { readable } from 'svelte/store'
import { auth } from '$lib/supabase'
import { goto } from '$app/navigation';
import type{ AuthChangeEvent, Session } from '@supabase/supabase-js'
// import { setAuthCookie, unsetAuthCookie } from '$lib/utils/session';
import { ROUTE_AUTH, ROUTE_PROFILE } from '$lib/config/app'

export const user = readable( auth.user(), set => {
    console.log()
    auth.onAuthStateChange( async (event, session) => {
        if (event == 'SIGNED_IN') {
            set(session.user )
            await setServerSession(session);
            goto(ROUTE_PROFILE)
        }

        if (event == 'SIGNED_OUT') {
            set(null)
            await setServerSession({});
            goto(ROUTE_AUTH)
        }
    })
})

async function setServerSession( session ) {
    console.log(session)
    await fetch('/auth.json', {
        method: 'POST',
        body: JSON.stringify(session)
    })
}
// async function setServerSession(event: AuthChangeEvent, session: Session) {
//     await fetch('/api/auth.json', {
//         method: 'POST',
//         headers: new Headers({ 'Content-Type': 'application/json' }),
//         credentials: 'same-origin',
//         body: JSON.stringify({ event, session }),
//     })
// }
