<script>
	import {onMount} from 'svelte'
	import {cryptocurrencies} from '$lib/constants' 
	import Modal from '$lib/ui/FullModal.svelte'
	import SelectCurrency from '$lib/ui/SelectCurrency.svelte'

	export let product = {}
	export let show = false

	let email
	let order
	let types = []
	let currency = 'bitcoin'

	onMount(async ()=>{
		const urlLimits = 'https://www.alfacoins.com/api/limits.json?base=USD'
		const limits = await fetch(urlLimits).then(res=>res.json())
		types = Object.keys(limits)
			.filter( currency => limits[currency].min_fiat_amount <= product.price )
	})

	async function handleOrder(){
		const { price, title} = product
		const res = await fetch('/order/alfacoins.json', {
			method: 'POST',
		    headers: {'Content-Type': 'application/json' },			
			body: JSON.stringify({ email, price, title, currency })
		})

		order = await res.json()
		console.log(order)
	}

</script>

<Modal bind:show>
	<div class="min-h-screen flex items-center">
		<div class="rounded-xl py-6 px-8 bg-white w-full max-w-md mx-auto space-y-3 shadow">
			<h2 class="text-center text-xl sm:text-2xl font-bold">{product.title}</h2>
			{#if order}
				<iframe 
					src={order.iframe} 
					sandbox="allow-scripts allow-forms" 
					allowfullscreen
					class="w-full h-96"></iframe>
			{:else}
				<div class="form-control">
					<label for="email" class="label-text">Email</label>
					<input type="email" name="email" class="input input-bordered" bind:value={email}>
				</div>		
				<div class="form-control">
					<label for="email" class="label-text">Currency</label>
					<SelectCurrency 
						min={product.price} 
						bind:selected={currency}
					/>
				</div>
				<button class="btn btn-primary w-full" on:click="{handleOrder}">Take the File</button>
			{/if}	
		</div>
	</div>
</Modal>