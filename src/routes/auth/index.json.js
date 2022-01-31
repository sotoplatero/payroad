
export async function post({ request }) {

  const { expires_at, access_token } = await request.json()
  if (access_token) {
    const expires = new Date(expires_at * 1000).toUTCString()

    return {
      headers: {
  			'set-cookie': `access_token=${access_token};Path=/;HttpOnly;Secure;SameSite=Strict;Expires=${expires};`,
      }
    }

  }
  return {}
}