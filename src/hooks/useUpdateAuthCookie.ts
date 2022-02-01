// src/hooks.js
import { toExpressRequest, toExpressResponse, toSvelteKitResponse } from '$lib/utils/expressify'
import {auth} from '$lib/supabase'

export const useUpdateAuthCookie = async ({ event, resolve }) => {

  const { request } = event
  // We can then fetch the authenticated user using this cookie
  expressRequest = toExpressRequest(request)
  const { user } = await auth.api.getUserByCookie( expressRequest );
  // Add the user and the token to our locals so they are available on all SSR pages
  event.locals.user = user;
  event.locals.token = expressRequest.cookies['sb:token']

  // If we have a token, set the supabase client to use it so we can make authorized requests as that user
  if (event.locals.token) {
    auth.setAuth(event.locals.token);
  }

  let response = await resolve(event);

  // if auth request - set cookie in response headers
  if (request.method == 'POST' && request.url.pathname === '/api/auth.json') {
    auth.api.setAuthCookie(request, toExpressResponse(response));
    response = toSvelteKitResponse(response);
  }

  return response;
};
