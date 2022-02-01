import { sequence } from '@sveltejs/kit/hooks';
import { useUpdateAuthCookie } from './useUpdateAuthCookie'

async function endHandle({ event, resolve }) {
  return await resolve(event);
}

export const handle = sequence( useUpdateAuthCookie, endHandle );

/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession(request: Request) {
    return request.locals
}