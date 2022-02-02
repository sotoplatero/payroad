<script context="module">
    import { redirectToLogin } from '$lib/config/app'	
    import {from} from '$lib/supabase'

	export async function load({ url, fetch, session }) {
		
        const { user } = session
        if (!user) return redirectToLogin

        const { data: products, error } = await from('products')
		    .select('id,slug,data')
		    .eq('user_id', user.id)

	 	if (error) return { fallthrough: true }

        return { props: { products } }
	}
</script>

<script>
	import { Icon, Trash } from "svelte-hero-icons";
	export let products = []
	async function remove(id){
        const {error} = await from('products').delete().eq('id', id)	
        products = products.filter(p=>p.id!==id)
	}
</script>

<div >
	{#if products.length}

		<div>
			<a sveltekit:prefetch href="/product/create" class="btn btn-lg btn-primary w-92 ">
				Add Product
			</a>	
		</div>
		<div class="space-y-4 mt-8">
			{#each products as product, index}
				<div class="alert shadow flex items-center justify-between text-lg font-semibold">
					<a href="/product/edit/{product.id}-{product.slug}">
						{product.data.title}
					</a>
					<button on:click={remove(product.id)}>
						<Icon src="{Trash}" class="h-6 w-6" />
					</button>
				</div>
			{/each}
			
		</div>

	{:else}

		<div class="text-center">
			<a sveltekit:prefetch href="/product/create" class="btn btn-lg btn-accent w-92 ">
				Start Selling
			</a>
		</div>

	{/if}
</div>