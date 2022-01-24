<script lang="ts">
    import { page, session } from '$app/stores'
    import {user} from '$lib/stores/user'

    // $: { user } = session
</script>
<nav class=" h-14 w-screen mx-auto max-w-screen-lg mx-auto px-2" >
    <ul class="list-none h-full flex items-center justify-end gap-3 font-bold space-x-4">
        {#if $user }

            <li class="nav__item">
                <a rel="prefetch" href="/settings" class:active={$page.url.pathname === '/settings'}>
						<i class="ion-gear-a" />
				</a>
            </li>
            <li class="nav__item">
                <a href="/products">
                    Products
                </a>
            </li>
            <li class="nav__item">
                <a href="/settings">
                    <!-- <img class="w-7 h-7 rounded-full" src="https://unavatar.io/{$user.email}" alt="avatar"> -->
                    Account
                </a>
            </li>
            <!-- <button class="" on:click={() => signOut()}>Sign Out</button> -->

        {:else}


            {#if $page.url.pathname !== '/auth'}
                <li class="nav__item">
                    <a rel="prefetch" href="/auth" title="Sign In" class="btn">
                        Sign In
                    </a>
                </li>
            {/if}
<!--             <li class="nav__item">
                <a rel="prefetch" href="/auth?reg=true" title="Sign Up">
                    Sign Up
                </a>
            </li> -->
        {/if}
    </ul>
</nav>

