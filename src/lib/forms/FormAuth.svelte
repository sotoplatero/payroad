<script>
    import {page} from '$app/stores'
    import Spinner from '$lib/components/Spinner.svelte'    
    export let email
    export let password
    export let loading

    $: path = $page.url.pathname
    $: isRegisterForm =  /register/.test(path)
    
</script>
<form on:submit|preventDefault class="space-y-6">

    <div class="form-control">
        <input
            id="email"
            name="email"
            type="email"
            class="input input-bordered text-gray-600"
            placeholder="Your Email"
            required
            bind:value={email}
        />
    </div>

    <div class="form-control">
        <input
            id="password"
            name="password"
            type="password"
            class="input input-bordered text-gray-600"
            placeholder="Your Password"
            required
            bind:value={password}
        />
    </div>

    <div class=" grid grid-cols-2">

        <button type="submit" class="btn btn-primary flex items-center ">
            {#if loading}
                <Spinner class="mr-2"/>
            {/if}
            { isRegisterForm ? 'Register' : 'Login' }
        </button>

        <a sveltekit:prefetch href="{ isRegisterForm ? '/login' : '/register' }" class="btn btn-link ">
            { isRegisterForm ? 'Login' : 'Register' }
        </a>

    </div>
    
</form>
