import { serialize } from 'cookie';

export async function post({ request }) {

  const { expires_at, access_token } = await request.json()


  const expires = expires_at ? new Date(expires_at * 1000).toUTCString() : 0
  const expiresOrMaxAge = expires ? `Expires=${expires}` : `Max-Age=0`
  const secure = process.env.NODE_ENV === 'production' ? 'Secure;', ''

  return {
    headers: {
			'set-cookie':  serialize('access_token', {
          path: '/',
          HttpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          SameSite: 'Strict',
          expires: expires_at  ? new Date(expires_at * 1000).toUTCString() : false,
          maxAge: !!expires_at ? false : '0',
      })
  }


}