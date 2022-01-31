<script lang="ts">
	import '../global.css';
    import { navigating, page } from '$app/stores'
    import PageNavIndicator from '$lib/components/PageNavIndicator.svelte'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import AlertList from '$lib/alert/AlertList.svelte'
    // import {user} from '$lib/stores/user'	

	// $:console.log( $page )
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

