<script context="module">
    import { redirectToLogin } from '$lib/config/app'
	export async function load({ url, fetch, session }) {
        const { user } = session
        if (!user?.id) return redirectToLogin	
        return { props: { user } }        	
	}
</script>

<script>
	import {from} from '$lib/supabase'
	import {goto} from '$app/navigation'
	import { slugify } from '$lib/utils/slugify'
	import FormProduct from '$lib/forms/FormProduct.svelte'


	export let user
	let product = {}

	// let title = ''
	// let price = ''
	// let description = ''

	// $: product = { title, price, description }

	async function save() {
		const {error} = await from('products').insert({ 
			user_id: user.id, 
			slug: slugify(product.title), 
			data: product 
		})
		if (!error) {
			goto('/products')
		}
	}


</script>

<div class="max-w-screen-md mx-auto">
	<h1>Create Product</h1>
	<FormProduct 
		bind:product 
		on:submit={save}
	/>
	
</div>