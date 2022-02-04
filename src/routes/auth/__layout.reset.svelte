<script>
	import Header from '$lib/components/Header.svelte'
	import Logo from '$lib/components/Logo.svelte'
	// import AuthLayout from '$lib/layouts/AuthLayout.svelte'
	import AlertList from '$lib/alert/AlertList.svelte'
</script>

<div class="flex flex-col h-screen">
	<Header/>
	<AlertList/>
	<div class="grow flex items-center">
	    <div class="w-full max-w-sm mx-auto">
			<slot/>
		</div>
	</div>
</div>
