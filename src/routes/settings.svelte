<script lang="ts">
    import { page, session } from '$app/stores'
    import { auth } from '$lib/supabase'

    async function signOut(){
        await auth.signOut()
    }
</script>
<div>
    <h1>Settings</h1>
    <div class="text-center">
        <button class="btn btn-error btn-outline btn-lg w-full" on:click={signOut}>
        	Exit
        </button>
    </div>
</div>