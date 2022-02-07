<script>
	import {cryptocurrencies} from '$lib/constants' 
	import Modal from '$lib/ui/FullModal.svelte'
	import SelectCurrency from '$lib/ui/SelectCurrency.svelte'
	export let show = false
</script>

<Modal bind:show>
	<div class="card p-6 bg-white shadow-xl w-full max-w-sm mx-auto space-y-3 ">
		<div class="form-control">
			<label for="email" class="label-text">Email</label>
			<input type="email" name="email" class="input input-bordered">
		</div>		
		<div class="form-control">
			<label for="email" class="label-text">Currency</label>
			<SelectCurrency />
		</div>		
		<button class="btn btn-primary w-full">
			Pay
		</button>
	</div>
</Modal>