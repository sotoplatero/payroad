<script lang="ts">
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
    import { navigating, session } from '$app/stores'
    import PageNavIndicator from '$lib/components/PageNavIndicator.svelte'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import AlertList from '$lib/alert/AlertList.svelte'
	import { auth } from '$lib/supabase'

	import '../global.css';
    // import {user} from '$lib/stores/user'	

    onMount(async () => {

	    auth.onAuthStateChange( async (event, _session) => {
	    	console.log(event)
	        if (event == 'SIGNED_IN') {
	            $session.user = _session.user
	            await setServerSession(_session);
                goto('/products')
	        }

	        if (event == 'SIGNED_OUT') {
	            $session.user = null
	            await setServerSession({});
                goto('/auth')
	        }
	    })

    }) 

	async function setServerSession( session ) {
	    await fetch('/auth.json', {
	        method: 'POST',
	        body: JSON.stringify(session)
	    })
	}

</script>

{#if $navigating}
	<PageNavIndicator />
{/if}
<div class="min-h-screen">
	<Header/>
	<AlertList/>
	<main class="py-20 px-2 mx-auto w-full max-w-screen-md grow">
	    <slot></slot>
	</main>
</div>
<!-- <ModalBackdrop/> -->
<Footer/>

