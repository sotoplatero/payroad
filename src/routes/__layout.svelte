<script lang="ts">
	import '../global.css';
    import { session, navigating } from '$app/stores'
    import PageNavIndicator from '$lib/components/PageNavIndicator.svelte'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import AlertList from '$lib/alert/AlertList.svelte'
</script>

{#if $navigating}
	<PageNavIndicator />
{/if}
<div class="min-h-screen">
	<Header/>
	<AlertList/>
	<main class="py-20 px-2 mx-auto w-full max-w-prose grow">
	    <slot></slot>
	</main>
</div>
<!-- <ModalBackdrop/> -->
<Footer/>

