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
	import {goto} from '$app/navigation'
	import Order from '$lib/components/Order.svelte'
	export let product
	let showOrder = false

	async function handleInvoice(){
		const { price, title} = product
		const res = await fetch('/invoice/alfacoins.json', {
			method: 'POST',
		    headers: {'Content-Type': 'application/json' },			
			body: JSON.stringify({ price, title })
		})

		const order = await res.json()
		// goto(order)
	}
</script>

<article class="bg-white">
	<picture>
		<img src="#" alt={product.title}>
	</picture>
	<div  >
		<h1 class="mt-16">{product.title}</h1>
		<div class="text-center">
			<button class="btn btn-primary text-xl" on:click={handleInvoice}>
				<span class="font-black mr-4">$ {product.price}</span >
				I want it
			</button>
		</div>
		<div class="prose prose-lg mx-auto">
			{@html product.content}
			
		</div>
	</div>
</article>
