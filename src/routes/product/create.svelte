<script context="module">
    import { redirectToLogin } from '$lib/config/app'
	export async function load({ url, fetch, session }) {
        const { user } = session
        if (!user?.id) return redirectToLogin	
        return { props: { user}}        	
	}
</script>

<script>
	import {goto} from '$app/navigation'
	import {from} from '$lib/supabase'
	import {slugify} from '$lib/utils/slugify'
	import FormProduct from '$lib/components/FormProduct.svelte'


	export let user

	let title = ''
	let price = ''
	let description = ''

	$: product = { title, price, description }

	async function save() {
		const {error} = await from('products').insert({ 
			user_id: user.id, 
			slug: slugify(title), 
			data: { title, price, description } 
		})
		if (!error) {
			goto('/products')
		}
	}


</script>

<div class="max-w-screen-sm mx-auto">
	<h1>Create Product</h1>
	<FormProduct 
		bind:product 
		on:submit={save}
	/>
	
</div>