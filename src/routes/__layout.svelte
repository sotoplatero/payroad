<script lang="ts">
	import '../global.css';
 //    import { navigating } from '$app/stores'
 //    import PageNavIndicator from '$lib/components/PageNavIndicator.svelte'
	// import Header from '$lib/components/Header.svelte'
	// import Footer from '$lib/components/Footer.svelte'
	// import AlertList from '$lib/alert/AlertList.svelte'
</script>

<!-- {#if $navigating}
	<PageNavIndicator />
{/if} -->
<!-- <Header/> -->
<!-- <AlertList/> -->
<main class="px-2 mx-auto  max-w-7xl">
    <slot></slot>
</main>
<!-- <ModalBackdrop/> -->
<!-- <Footer/> -->

