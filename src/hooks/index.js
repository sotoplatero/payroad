import { sequence } from '@sveltejs/kit/hooks';
import {useUpdateAuthCookie} from './useUpdateAuthCookie'
import { auth } from '$lib/supabase'
import * as cookie from 'cookie'

async function end({ event, resolve }) {
	const { access_token } = cookie.parse(event.request.headers.get('cookie') || '')
	if (access_token) {
		const {user} = await auth.api.getUser(access_token)
		event.locals.user = user 
	}
	return await resolve(event);
}

export const handle = sequence(end);

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	return event.locals
}