<script>
	import Tiptap from '$lib/components/Tiptap.svelte'	
	export let product = { title:'', price:'', description:'' }
	$: product = product
</script>

<form on:submit|preventDefault class="space-y-4">

	<div class="form-control">
		<label for="title" class="label">Title</label>
		<input 
			type="text" 
			name="title" 
			class="input input-bordered" 
			bind:value={product.title}
		>
	</div>

	<div class="form-control">
		<label for="price" class="label">Price</label>
		<input bind:value={product.price} type="text" name="price" class="input input-bordered">
	</div>

	<div class="">
		<label for="description" class="label">Description</label>
		<Tiptap bind:content={product.description}/>
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