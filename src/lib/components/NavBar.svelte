<script lang="ts">
    import { page, session } from '$app/stores'
    import {user} from '$lib/stores/user'

    // $: console.log($user)
    $: pathname = $page.url.pathname
</script>
<nav class=" h-14 w-screen mx-auto max-w-screen-lg mx-auto px-2 bg-white" >
    <ul class="list-none h-full flex items-center justify-end gap-3 font-bold space-x-4">
        {#if $user }

            <li class="nav__item">
                <a sveltekit:prefetch href="/settings" class:active={pathname === '/settings'}>
					Settings
				</a>
            </li>
            <li class="nav__item">
                <a sveltekit:prefetch href="/products" class:active={pathname === '/products'}>
                    Products
                </a>
            </li>

        {:else}
            <li>
                <a sveltekit:prefetch href="/auth">
                    Sign In
                </a>
            </li>
        {/if}
    </ul>
</nav>