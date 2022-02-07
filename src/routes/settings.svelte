
<script lang="ts">
    import { page, session } from '$app/stores'
    import { goto } from '$app/navigation'
    import { auth } from '$lib/supabase'
    // import { user } from '$lib/stores/user'

    async function signOut(){
        await auth.signOut()
    }

    // $: console.log($user)
</script>
<div>
    <h1>Settings</h1>
    <div class="text-center">
        <!-- {$user.email} -->
        <button class="btn btn-error btn-outline btn-lg w-full" on:click={signOut}>
        	Exit
        </button>
    </div>

</div>