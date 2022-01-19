// Page Routes
export const ROUTE_HOME = '/products'
export const ROUTE_AUTH = '/auth'
export const ROUTE_PROFILE = '/products'

export const redirectToLogin = { 
    status: 302, redirect: '/auth' 
}
export const redirectToProfile = { 
    status: 302, redirect: '/products' 
}
export const redirecTo = (path) => {
    return { 
        status: 302, redirect: path 
    }
}

// API Routes
export const API_AUTH = '/api/auth.json'


// Default payload/responses
export const RESP_USER_GUEST = {
    guest: true
}

// 3rd Party Website/App URIs

export const URL_DICEBEAR = 'https://avatars.dicebear.com/api/avataaars/'
