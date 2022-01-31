import { writable } from 'svelte/store';
import auth from '$lib/services/auth0'

export const isAuthenticated = writable(false,()=>{});

export const user = writable({});

export const popupOpen = writable(false);
export const error = writable();