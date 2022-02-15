import { sequence } from '@sveltejs/kit/hooks';
// import {useUpdateAuthCookie} from './useUpdateAuthCookie'
import { auth } from '$lib/supabase'
import * as cookie from 'cookie'
import jwt from 'jsonwebtoken';

async function end({ event, resolve }) {

	const { access_token } = cookie.parse(event.request.headers.get('cookie') || '')

	if (access_token) {
		const jwtPayload = jwt.decode(access_token)
		// const { user, error } = await auth.api.getUser(access_token)
		event.locals.user = {
			id: jwtPayload.sub,
			email: jwtPayload.email,
		}
		console.log('user =',event.locals.user)
	}

	const result = await resolve(event);

	// console.log(result)

	return result
}

export const handle = sequence(end);

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	// console.log('getSession ->' + JSON.stringify(event.locals.user))
	return event.locals
}

