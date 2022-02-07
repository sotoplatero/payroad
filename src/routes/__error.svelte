<script context="module">
	export function load({ error, status }) {
		return {
			props: {
                error,
                status
            }
		};
	}
</script>

<script>
	import { dev } from '$app/env';
	export let error, status;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="text-center">
	<h1>{status}</h1>

	<p>{error.message}</p>

</div>
{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
