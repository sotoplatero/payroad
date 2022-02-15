<script>
    import {onMount, createEventDispatcher} from 'svelte'  
    import { slide } from 'svelte/transition';
    // import {cryptocurrencies} from '$lib/constants'
    import {clickOutside} from '$lib/utils/clickoutside'
    import {memoize} from 'lodash'

    export let selected = 'bitcoin'
    export let  min = 0

    const dispatch = createEventDispatcher();
    let open = false
    let currentCurrency
    let cryptocurrencies = []

    $: currentCurrency = cryptocurrencies.find(el=>el==selected)

    onMount(async () => {
      const urlLimits = 'https://www.alfacoins.com/api/limits.json?base=USD'
      const limits = await fetch(urlLimits).then(res=>res.json())
      cryptocurrencies = Object.keys(limits)
        .filter( currency => parseFloat(limits[currency].min_fiat_amount) <= parseFloat(min) )
    })

    const select = (type) => {
      selected = type
      open = false
      dispatch('change', type)
    }

</script>
<!-- This example requires Tailwind CSS v2.0+ -->
<div>
  <div class="relative">
    <button 
      use:clickOutside={ () => open=false } 
      on:click={ () => open=!open } 
      type="button" class="btn btn-outline border-stone-300 w-full !justify-start " aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
      <div class="flex items-center ">
        <img src="/logo/{currentCurrency}.svg" alt={currentCurrency} class="flex-shrink-0 h-5 w-5 rounded-full">
        <span class="font-normal ml-3 block truncate">
          {currentCurrency}
        </span>
      </div>
      <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <!-- Heroicon name: solid/selector -->
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </span>
    </button>

    {#if open}
      
      <ul transition:slide class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">

        {#each cryptocurrencies as type, index}
          
          <li on:click={ () => select(type) } class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
            <div class="flex items-center">
              <img src="/logo/{type}.svg" alt={type} class="flex-shrink-0 h-6 w-6 rounded-full">
              <span class="{ selected === type ? 'font-semibold' : 'font-normal'} ml-3 block truncate">{type}</span>
            </div>

            {#if selected === type}

              <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                <!-- Heroicon name: solid/check -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>

            {/if}

          </li>
        {/each}
      </ul>

    {/if}
  </div>
</div>
