<script lang="ts">
    import { page, session } from '$app/stores'
    import Logo from '$lib/components/Logo.svelte'

    $: user = $session.user
    $: pathname = $page.url.pathname

</script>
<nav class="flex items-center justify-between h-14 w-screen mx-auto max-w-screen-lg mx-auto px-2 bg-stone-100" >
    <Logo class="h-6"/>
    <ul class="list-none h-full flex items-center justify-end gap-3 font-bold space-x-4">
        {#if user }

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
                <a href="/auth">
                    Sign In
                </a>
            </li>
        {/if}
    </ul>
</nav>