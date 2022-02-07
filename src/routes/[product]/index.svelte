<script context="module">
	import {from} from '$lib/supabase'

	export async function load({ params, fetch, session }) {

 		const slug = params.product

        const { data: product, error} = await from('products')
		    .select('*')
		    .eq('slug',slug)
		    .single()

        if (error) return { fallthrough: true }

        return { props: { product }}        	
	}
</script>

<script>
	import Order from '$lib/components/Order.svelte'
	export let product
	let showOrder = false
</script>

<div class="prose prose-lg mx-auto" >
	<h1 class="">{product.title}</h1>
	<button class="btn btn-primary text-xl" on:click={()=>showOrder=!showOrder}>
		<span class="font-black mr-4">$ {product.price}</span >
		I want it
	</button>
	{@html product.content}
</div>
<Order bind:show={showOrder}/>