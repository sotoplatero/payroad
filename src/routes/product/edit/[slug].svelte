<script context="module">
	import {from} from '$lib/supabase'
    import { redirectToLogin } from '$lib/config/app'

	export async function load({ params, fetch, session }) {

        const { user } = session
        if (!user?.id) return redirectToLogin	

 		const id = params.slug.match(/\d+/)[0]

        const {data:product, error} = await from('products')
		    .select('*')
		    .eq('user_id',user.id)
		    .eq('id',id)
		    .single()

        // console.log(product)
        return { props: { user, product}}        	
	}
</script>

<script>
	import {slugify} from '$lib/utils/slugify'
	import FormProduct from '$lib/components/FormProduct.svelte'

	export let product
	export let user
	let slug = product.id + '-' + product.slug

	async function save() {

		const {error} = await from('products').update({ 
			slug: slugify(product.data.title), 
			data: product
		})
	}

</script>

<div class="max-w-screen-sm mx-auto">
	<header class="mb-8 text-center">
		<h1>Edit Product</h1>
		<a href="/{slug}" target="_blank" class="btn btn-outline btn-primary">View</a>
	</header>
	<FormProduct 
		bind:product 
		on:submit={save}
	/>
	
</div>