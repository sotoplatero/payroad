<script lang="ts">
    import { slide } from 'svelte/transition'
    export let show = false
</script>

{#if show}
    <aside 
        class="fixed left-0 right-0 bottom-0 top-0 bg-gray-100 border-b z-10" 
        transition:slide
    >

        <button on:click={ () => show = false } class="btn btn-ghost absolute right-0 mr-6 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <slot/>
    </aside>
{/if}