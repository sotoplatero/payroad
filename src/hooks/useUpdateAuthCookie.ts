// src/hooks.js
import { toExpressRequest, toExpressResponse, toSvelteKitResponse } from '$lib/utils/expressify'
import {auth} from '$lib/supabase'

export const useUpdateAuthCookie = async ({ event, resolve }) => {
  let { request } =  event
  // Parses `req.headers.cookie` adding them as attribute `req.cookies, as `auth.api.getUserByCookie` expects parsed cookies on attribute `req.cookies`
  const expressStyleRequest = toExpressRequest(request);
  // We can then fetch the authenticated user using this cookie
  const { user } = await auth.api.getUserByCookie(expressStyleRequest);
  // console.log(await auth.api.getUserByCookie(expressStyleRequest))
  // Add the user and the token to our locals so they are available on all SSR pages
  event.locals.user = user || null;
  event.locals.token = expressStyleRequest.cookies['sb:token'] || undefined;

  // If we have a token, set the supabase client to use it so we can make authorized requests as that user
  if (event.locals.token) { 
    auth.setAuth(event.locals.token);
  }

  // console.log(expressStyleRequest)
  let response = await resolve(event);

  // if auth request - set cookie in response headers
  if (request.method == 'POST' && request.url.pathname === '/api/auth.json') {
    auth.api.setAuthCookie(request, toExpressResponse(response));
    response = toSvelteKitResponse(response);
    console.log(reponse)
  }

  return response;
};
