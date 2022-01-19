<script context="module">
	import {from} from '$lib/supabase'

	export async function load({ params, fetch, session }) {

 		const id = params.product.match(/\d+/)[0]

        const {data:product, error} = await from('products')
		    .select('*')
		    .eq('id',id)
		    .single()

        // console.log(product)
        return { props: { product } }        	
	}
</script>

<script>
	export let product

</script>

<div class="prose prose-lg mx-auto" data-theme="retro">
	<h1 class="mt-10">{product.data.title}</h1>
</div>