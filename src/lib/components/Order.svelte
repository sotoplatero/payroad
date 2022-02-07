<script>
	import {cryptocurrencies} from '$lib/constants' 
	import Modal from '$lib/ui/FullModal.svelte'
	import SelectCurrency from '$lib/ui/SelectCurrency.svelte'

	export let product = {}
	export let show = false

	let email

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
	<div class="h-screen flex items-center">
		<div class="rounded-xl p-8 bg-white w-full max-w-sm mx-auto space-y-3 shadow">
			<div class="form-control">
				<label for="email" class="label-text">Email</label>
				<input type="email" name="email" class="input input-bordered" bind:value={email}>
			</div>		
<!-- 				<div class="form-control">
				<label for="email" class="label-text">Currency</label>
				<SelectCurrency />
			</div>	 -->	
			<button on:click={handleOrder} class="btn btn-primary w-full">
				Pay
			</button>
		</div>
	</div>
</Modal>