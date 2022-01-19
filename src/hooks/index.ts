import { sequence } from '@sveltejs/kit/hooks';
import { useUpdateAuthCookie } from './useUpdateAuthCookie'

async function endHandle({ request, resolve }) {
  return await resolve(request);
}

export const handle = sequence( useUpdateAuthCookie, endHandle );

/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession(request: Request) {
    const { user } = request.locals
    // only include the properties that are needed client-side — exclude anything else attached to the user like access tokens etc
    // we know that the `user` object won't have anything sensitive so we're making the entire `user` object available
    // Note: `getSession` runs only when SvelteKit server-renders a page, not for the API handlers.
  return {
    user
  };
}