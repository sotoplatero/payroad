<script>
  import { createEventDispatcher } from 'svelte';
  import { bucket } from '$lib/supabase'

  export let path;
  export let size = "10em"
  export let bucket = 'files'

  let uploading = false
  let src;
  let files;

  const dispatch = createEventDispatcher();

  async function downloadImage() {
    try {
      const { data, error } = await bucket(bucket).download(path)
      if (error) throw error
      
      src = URL.createObjectURL(data)
    } catch (error) {
      console.error('Error downloading file: ', error.message)
    }
  }

  async function handleUpload() {
    try {
      uploading = true

      if (!files || files.length === 0) {
        throw new Error('You must select a file to upload.')
      }

      const file = files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let { error: uploadError } = await bucket(bucket).upload(filePath, file)

      if (uploadError) throw uploadError
      
      path = filePath
      dispatch('upload')
    } catch (error) {
      alert(error.message)
    } finally {
      uploading = false
    }
  }
</script>

<div>
<!--   {#if path}
    <img use:downloadImage
      {src}
      alt="Avatar"
      class="avatar image"
      style="height: {size}; width: {size};"
    />
  {:else}
    <div class="avatar no-image" style="height: {size}; width: {size};" />
  {/if} -->
  
  <div >
    <label class="button primary block" for="single">
      {uploading ? 'Uploading ...' : 'Upload'}
    </label>
    <input
      style="visibility: hidden; position:absolute;"
      type="file"
      id="single"
      bind:files
      on:change={handleUpload}
      disabled={uploading}
    />
  </div>
</div>