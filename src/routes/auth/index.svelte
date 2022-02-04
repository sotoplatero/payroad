<script context="module">
    import { redirectToProfile } from '$lib/config/app'

    /** @type {import('@sveltejs/kit').Load} */
    export async function load({  url, fetch, session }) {
        const { user } = session
        if (user) return redirectToProfile
        return { }
    }   
</script>
<script lang="ts">
    // import { tick } from 'svelte'
    import { auth } from '$lib/supabase'
    import Seo from '$lib/components/SEO.svelte'
    import { handleAlert } from '$lib/alert'
    import Spinner from '$lib/components/Spinner.svelte'

    let loading = false
    let email = ''
    const SITE_URL = import.meta.env.VITE_SITE_URL


    async function signIn() {
        loading = true

        const { error, user } = await auth.signIn({ email })
        if (error) {
            handleAlert({ type: "error", text: error.message})
        } else {
            handleAlert({ type: "success", text: "Signed in successfully"})
        }

        loading = false
    }

</script>

<Seo title={`Auth - Send me a Magic Link'}`} />

<h1>Join to Sell in Crypto</h1>
<p class="text-center mt-4 text-stone-500">Receive an access link, goodbye to passwords</p>
<form class="mt-10" on:submit|preventDefault={signIn} >

    <div class="form-control">
        <input
            id="email"
            name="email"
            type="email"
            class="input input-bordered text-gray-600 text-center"
            placeholder="Your Email"
            required
            bind:value={email}
        />
    </div>

    <div class="mt-6">
        <button type="submit" class="btn w-full flex items-center ">
            {#if loading}
                <Spinner class="mr-2"/>
            {/if}
            {'Send me a Magic Link'}
        </button>
    </div>
</form>
