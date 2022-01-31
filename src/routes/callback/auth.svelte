<script>
	import {goto} from '$app/navigation'
	import {page} from '$app/stores'

	$: page && setCookie()

	async function setCookie(){
		const hash = $page.url.hash.replace(/^#/,'')
		console.log(hash)
	}

</script>