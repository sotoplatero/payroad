import { readable } from 'svelte/store'
import { auth } from '$lib/supabase'
import { goto } from '$app/navigation';
import { setAuthCookie, unsetAuthCookie } from '$lib/utils/session';
import { ROUTE_AUTH, ROUTE_PROFILE } from '$lib/config/app'

export const user = readable(auth.user(), set => {
    auth.onAuthStateChange((event, session) => {
        if (event == 'SIGNED_IN') {
            set(session.user)
            await setAuthCookie(_session);
            goto(ROUTE_PROFILE)
        }
        if (event == 'SIGNED_OUT') {
            set({ user: { guest: true } })
            await unsetAuthCookie();
            goto(ROUTE_AUTH)
        }
    })
})
