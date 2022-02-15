<script>
	import {onMount} from 'svelte'
	import { from } from '$lib/supabase'
	import {kebabCase,debounce} from 'lodash'
	// import { slugify } from '$lib/utils/slugify'
	import { session } from '$app/stores'
	import Tiptap from '$lib/components/Tiptap.svelte'	

	export let product = { }
	let fees = []

	$: product.user_id = $session.user.id
	$: product = product

	onMount(async () => {
        const res = await fetch('https://www.alfacoins.com/api/fees.json')
    	fees = await res.json()
	})

	const setSlug = debounce( 
		async e => {
			const slug = kebabCase(product.title)

			const { error, count } = await from('products')
			  .select('id', { count: 'exact', head: true  }) 	
			  .like('slug',`${slug}%`)

			product.slug = count ? slug + parseInt(count) + 1 : slug

		}, 100 )
</script>

<div class="card bg-white">
	
	<form on:submit|preventDefault class="card-body space-y-4">

		<div class="form-control">
			<label for="price" class="label-text">File</label>
			<input bind:value={product.file} type="text" name="file" class="input input-bordered">
		</div>

		<div class="form-control">
			<label for="title" class="label-text">Title</label>
			<input 
				type="text" 
				name="title" 
				class="input input-bordered" 
				bind:value={product.title}
				on:input={setSlug}
			>
			{#if product.slug}
				<div class="text-sm text-green-500">
					payroad.click/{product.slug}
				</div>
			{/if}
		</div>

		<div class="form-control">
			<label for="price" class="label-text">Price</label>
			<input bind:value={product.price} type="text" name="price" class="input input-bordered">
		</div>

		<div class="">
			<label for="content" class="label-text">Content</label>
			<Tiptap bind:content={product.content}/>
		</div>


		<div class="!mt-12">
			<button class="btn btn-primary btn-lg">
				&check; Save
			</button>
			<a href="/products" class="btn btn-link btn-lg ">
				Products &rarr;
			</a>
		</div>


	</form>
</div>