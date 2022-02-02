
export async function post({ request }) {

  const { expires_at, access_token } = await request.json()


  const expires = expires_at ? new Date(expires_at * 1000).toUTCString() : 0
  const expiresOrMaxAge = expires ? `Expires=${expires}` : `Max-Age=0`

  return {
    headers: {
			'set-cookie': `access_token=${access_token};Path=/;HttpOnly;Secure;SameSite=Strict;${expiresOrMaxAge};`,
    }
  }


}