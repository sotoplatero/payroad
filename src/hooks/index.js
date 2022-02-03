import { sequence } from '@sveltejs/kit/hooks';
import {useUpdateAuthCookie} from './useUpdateAuthCookie'
import { auth } from '$lib/supabase'
import * as cookie from 'cookie'

async function end({ event, resolve }) {

	const { access_token } = cookie.parse(event.request.headers.get('cookie') || '')

	// if (access_token) {
	// }
	console.log(event.request)
	event.locals.user = access_token ? (await auth.api.getUser(access_token)).user : false
	console.log('hook ->' + JSON.stringify(event.locals.user))
	return await resolve(event);
}

export const handle = sequence(end);

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	console.log('getSession ->' + JSON.stringify(event.locals.user))
	return event.locals
}