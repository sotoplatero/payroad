import {constructCookies} from '$lib/utils'
import {auth} from '$lib/supabase'

export async function post({request}) {

  const { email, password } = await request.json();

  const { session } = await auth.signIn({ email, password })
  console.log(session)
  // let {
  //   refresh_token,
  //   access_token,
  //   expires_at
  // } = constructCookies(session)

  return {
    status: 302,
    body: 'success',
    headers: {
			// 'set-cookie': [
			// 	refresh_token, 
			// 	access_token, 
			// 	expires_at
			// ],
      location: '/'
    }
  }
}