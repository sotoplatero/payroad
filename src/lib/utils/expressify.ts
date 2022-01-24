import * as cookie from 'cookie';

/**
 * Converts a SvelteKit request to a Express compatible request.
 * Supabase expects the cookies to be parsed.
 * @param {SvelteKit.Request} req
 * @returns Express.Request
 */
export function toExpressRequest(req) {
  return {
    ...req,
    cookies: cookie.parse(req.headers.get('cookie') || '')
  };
}

/**
 * Converts a SvelteKit response into an Express compatible response.
 * @param {SvelteKit.Response} resp
 * @returns Express.Response
 */
export function toExpressResponse(resp) {
  return {
    ...resp,
    getHeader: (header) => resp.headers.get(header.toLowerCase()),
    setHeader: (header, value) => resp.headers.set( header.toLowerCase(), value ),
    status: (_) => ({ json: (_) => {} })
  };
}

/**
 * Converts an Express style response to a SvelteKit compatible response
 * @param {Express.Response} resp
 * @returns SvelteKit.Response
 */
export function toSvelteKitResponse(resp) {
  const { getHeader, setHeader, ...returnAbleResp } = resp;
  return returnAbleResp;
}