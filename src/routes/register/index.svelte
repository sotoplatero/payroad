<script context="module">
    import { redirectToProfile } from '$lib/config/app'

    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ session }) {
        // console.log(session)
        if ( session?.user ) return redirectToProfile

        return { }
    }   
</script>

<script lang="ts">
    // import { tick } from 'svelte'
    import { auth } from '$lib/supabase'
    import { handleAlert } from '$lib/alert'
    import Seo from '$lib/components/SEO.svelte'
    import FormAuth from '$lib/forms/FormAuth.svelte'

    let loading = false
    let email = ''
    let password = ''

    async function register() {
        loading = true
        const res = await fetch('/register.json',{
            method: 'POST',
            body: JSON.stringify({email, password})
        })

        const data  = await res.json()

        // const { error, user } = await auth.signIn({ email })
        // if (error) {
        //     handleAlert({ type: "error", text: error.message})
        // } else {
        //     handleAlert({ type: "success", text: "Signed in successfully"})
        // }

        loading = false
    }

</script>

<Seo title={`Auth - Send me a Magic Link'}`} />

<FormAuth 
    {loading} 
    bind:email 
    bind:password 
    on:submit={register}
/>
