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
	export let user
	let product = { title:'' , price:'', description: ''}
	$:console.log(product)
	async function save(){
		const {error} = await from('products').insert({ user_id: user.id, data: product })
		if (!error) {
			goto('/products')
		}
	}
</script>

<div class="max-w-screen-sm mx-auto">
	<h1>Create Product</h1>
	<form on:submit|preventDefault={save}>
		<div class="form-control">
			<label for="title" class="label">title</label>
			<input 
				type="text" 
				name="title" 
				class="input input-bordered" 
				bind:value={product.title}
			>
		</div>
		<div class="form-control">
			<label for="price" class="label">price</label>
			<input bind:value={product.price} type="text" name="price" class="input input-bordered">
		</div>
		<div class="form-control">
			<label for="description" class="label">description</label>
			<textarea bind:value={product.description} name="description" class="input input-bordered" rows="5"></textarea>
		</div>
		<button class="btn btn-primary mt-4">
			Create
		</button>
	</form>
	
</div>