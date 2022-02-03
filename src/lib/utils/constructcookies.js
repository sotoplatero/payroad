export const constructCookies = ({
    refresh_token,
    access_token,
    expires_in
  }) => {
  const expire = new Date( new Date().getTime() + expires_in ).toUTCString()
  let cookieOptions = `Path=/;HttpOnly;Secure;SameSite=Strict;Expires=${expire};`

  return {
    refresh_token: `refresh_token=${refresh_token};${cookieOptions}`,
    access_token: `access_token=${access_token};${cookieOptions}`,
    expires_in: `expires_in=${expires_in};${cookieOptions}`
  }
}