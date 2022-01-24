import { sequence } from '@sveltejs/kit/hooks';
import {useUpdateAuthCookie} from './useUpdateAuthCookie'

async function end({ event, resolve }) {
	return await resolve(event);
}

export const handle = sequence(useUpdateAuthCookie, end);

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
	return event.locals
}