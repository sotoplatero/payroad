export const constructCookies = (session) => {
  let cookieOptions = `Path=/;HttpOnly;Secure;SameSite=Strict;Expires=${new Date(session.expires_at * 1000).toUTCString()};`

  return {
    refresh_token: `refresh_token=${session.refresh_token};${cookieOptions}`,
    access_token: `access_token=${session.access_token};${cookieOptions}`,
    expires_at: `expires_at=${session.expires_at};${cookieOptions}`
  }
}