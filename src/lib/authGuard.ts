import type { LoadInput, LoadOutput } from '@sveltejs/kit/types.internal';
import { API_AUTH } from '$lib/config/app'
// import { session } from '$app/stores'

export async function authGuard( { url, session }: LoadInput ): Promise<LoadOutput> {
  // const res = await fetch(API_AUTH);
  // if (!res.ok) return { status: 404 };            

  // const { user } = await res.json();   
  console.log(session)
  const loggedIn = !session.user?.guest
  const loginPath = '/auth'

  if ( loggedIn && url.pathname === loginPath) {
    return { status: 302, redirect: '/' };
  } 

  if ( !loggedIn || url.pathname !== loginPath) {
    return { status: 302, redirect: loginPath }
  }

  return false
}