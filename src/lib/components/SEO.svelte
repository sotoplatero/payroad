
<script lang="ts">
    import {page} from '$app/stores' 
    import SvelteSeo from 'svelte-seo'

    let url = $page.url
    export let title: string = 'PayRoad - Earn bitcoins by selling digital products'
    export let image: string = 'https://mugshotbot.com/m/SN9wI7eC'
    export let description: string = 'The easiest way to sell, just drag and drop your ebook, photo, tutorial, guides, podcast, templates'
    export let canonical: string = `${url.protocol}//${url.hostname}${url.pathname}`

</script>
<SvelteSeo
    { title }
    { description }
    { canonical }
    openGraph={{
        title,
        description,
        url: canonical,
        images: [{
            url: image,
            width: 1200,
            height: 630,
            alt: title
        }]    
    }}
    twitter={{
        title, 
        description, 
        image,
        url: canonical,
   }}
/>
