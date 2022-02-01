<script>
	import { page } from '$app/stores'
	import { goto } from '$app/navigation';	

	$: $page && setCookie()

	async function setCookie() {
		const searchParams = $page.url.hash.replace(/^\#/,'')
		const params = new URLSearchParams( searchParams )

		try {
			const res = await fetch('http://localhost:3000/login.json', {
				method: 'POST',
				body: JSON.stringify({
				    refresh_token: params.get('refresh_token'),
				    access_token: params.get('access_token'),
				    expires_in: params.get('expires_in')				
				})
			})
			goto('/')
		} catch(e) {
			console.log(e)
		}

	}
</script>