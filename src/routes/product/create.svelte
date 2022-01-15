<script>
	import {from} from '$lib/supabase'
	import {user} from '$lib/user.store'

	let product = { title:'' , price:'', description: '', user_id: $user.id }

	async function save(){
		const {error} = await from('products').insert({ data: product })
		console.log(error)
	}
</script>
<div class="max-w-screen-sm mx-auto">
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
			<textarea bind:value={product.description} name="description" class="input input-bordered"></textarea>
		</div>
		<button class="btn">
			Create
		</button>
	</form>
	
</div>