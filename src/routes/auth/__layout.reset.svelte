<script>
	import AuthLayout from '$lib/layouts/AuthLayout.svelte'
	import {user} from '$lib/stores/user'
</script>
<AuthLayout>
	<slot/>
</AuthLayout>