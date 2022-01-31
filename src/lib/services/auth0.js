// src/lib/services/auth.js
import createAuth0Client from '@auth0/auth0-spa-js';
import { user, isAuthenticated, popupOpen,  } from '$lib/stores/auth0';
// import config from '$lib/config/auth_config';

const config = {
    domain: 'dev-rtwwzgp5.us.auth0.com',
    clientId: 'jHl3MPlyMoHWZaQGwV7vF9ZqKlPZoLTL'
};

async function createClient() {
    let auth0Client = await createAuth0Client({
        domain: config.domain,
        client_id: config.clientId,
        cacheLocation: 'localstorage',
    });

    return auth0Client;
}

async function loginWithPopup(client, options) {
    // popupOpen.set(true);
    try {
        // await client.loginWithPopup(options);
        await client.loginWithRedirect(options);

        user.set(await client.getUser());
        isAuthenticated.set(true);
    } catch (e) {
        // eslint-disable-next-line
        console.error(e);
    } finally {
        popupOpen.set(false);
    }
}

function logout(client) {
    return client.logout();
}

const auth = {
    createClient,
    loginWithPopup,
    logout
};

export default auth;
