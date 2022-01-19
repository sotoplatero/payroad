<script context="module">
    import { redirectToProfile } from '$lib/config/app'

    /** @type {import('@sveltejs/kit').Load} */
    export async function load({  fetch, session }) {
        const { user } = session
        // console.log(session)
        if (!!user?.id) return redirectToProfile
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

<div class="flex justify-center">
    <div class="w-full max-w-sm mx-auto">
        
        <div class="w-full text-center mb-4 place-items-center">
            <h3 class="text-4xl text-blue-500 font-bold uppercase">
                <a href="/">PayRoad<span class="text-red-500">&bull;</span>click</a>
            </h3>
        </div>

        <form class="" on:submit|preventDefault={signIn} >

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

            <div class="mt-4">
                <button type="submit" class="btn w-full flex items-center ">
                    {#if loading}
                        <Spinner class="mr-2"/>
                    {/if}
                    {'Send me a Magic Link'}
                </button>
            </div>
        </form>
    </div>
</div>
