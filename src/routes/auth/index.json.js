import { serialize } from 'cookie'

export async function post({ request }) {

  const { expires_at, access_token = '', refresh_token } = await request.json()
  // const expires = expires_at ? new Date(expires_at * 1000).toUTCString() : 0
  // const expiresOrMaxAge = expires ? `Expires=${expires}` : `Max-Age=0`
  // const secure = process.env.NODE_ENV === 'production' ? 'Secure;', ''
  const cookie = serialize( 'access_token', access_token, {
          path: '/',
          httpOnly: true,
          secure: String(process.env.NODE_ENV) !== 'development',
          sameSite: 'Strict',
          expires: expires_at ? new Date(expires_at * 1000) : undefined,
          maxAge: !!expires_at ? undefined : 0,
      })
  
  return {
    headers: {
			'set-cookie': cookie  
    }
  }


}