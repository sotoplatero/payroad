
<script lang="ts">
    import { page, session } from '$app/stores'
    import {goto} from '$app/navigation'
    // import auth from '$lib/services/auth0'
    // import { user, isAuthenticated } from '$lib/stores/auth0';
    import { auth } from '$lib/supabase'

    async function signOut(){
        await auth.signOut()
        goto('/')
    }

    // $: console.log($user)
</script>
<div>
    <h1>Settings</h1>
    <div class="text-center">
        <button class="btn btn-error btn-outline btn-lg w-full" on:click={signOut}>
        	Exit
        </button>
    </div>

</div>