<script>
	import AuthLayout from '$lib/layouts/AuthLayout.svelte'
	import AlertList from '$lib/alert/AlertList.svelte'
	import {user} from '$lib/stores/user'
</script>
<AuthLayout>
	<AlertList/>
	<slot/>
</AuthLayout>