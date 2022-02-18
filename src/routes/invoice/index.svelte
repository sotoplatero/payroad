<script>
	import {onMount} from 'svelte'
	import {cryptocurrencies} from '$lib/constants' 
	import Modal from '$lib/ui/FullModal.svelte'
	import SelectCurrency from '$lib/ui/SelectCurrency.svelte'

	export let product = {}
	export let show = false

	let email
	let types = []
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
			body: JSON.stringify({ email, price, title	})
		})

		const order = await res.json()
		console.log(order)
	}

</script>

<Modal bind:show>
	<div class="h-screen flex items-center overflow-y-auto">
		<div class="rounded-xl p-8 bg-white w-full max-w-sm mx-auto space-y-3 shadow">
			<div class="form-control">
				<label for="email" class="label-text">Email</label>
				<input type="email" name="email" class="input input-bordered" bind:value={email}>
			</div>		
<!-- 			<div class="form-control">
				<label for="email" class="label-text">Currency</label>
				<SelectCurrency />
			</div>	 -->
			<div class="dropdown w-full">
			  <div tabindex="0" class="m-1 btn btn-primary w-full">Pay with</div> 
			  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-full">
			  	{#each types as type, index}
				    <li >
				      <a class="flex items-center space-x-4">
			              <img src="/logo-{type}.svg" alt={product.title} class="flex-shrink-0 h-6 w-6 rounded-full">
					      <span class="uppercase">{type}</span>
					  </a>
				    </li> 
			  	{/each}
			  </ul>
			</div>				
			<button on:click={handleOrder} class="btn btn-primary w-full">
				Pay
			</button>
		</div>
	</div>
</Modal>