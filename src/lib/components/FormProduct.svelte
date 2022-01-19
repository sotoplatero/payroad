<script>
	export let product = { title:'', price:'', description:'' }
	$: product = product
</script>

<form on:submit|preventDefault class="space-y-4">

	<div class="form-control">
		<label for="title" class="label">title</label>
		<input 
			type="text" 
			name="title" 
			class="input input-bordered" 
			bind:value={product.data.title}
		>
	</div>

	<div class="form-control">
		<label for="price" class="label">price</label>
		<input bind:value={product.data.price} type="text" name="price" class="input input-bordered">
	</div>

	<div class="form-control">
		<label for="description" class="label">description</label>
		<textarea bind:value={product.data.description} name="description" class="textarea h-40 textarea-bordered" rows="10"></textarea>
	</div>

	<div class="!mt-12">
		<button class="btn btn-primary btn-lg">
			Save
		</button>
		<a href="/products" class="btn btn-link btn-lg ">
			Products
		</a>
	</div>

</form>