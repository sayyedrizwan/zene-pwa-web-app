<script lang="ts">
  import { browser } from '$app/environment'

  export let data: any
  let key: string | null = null

  if (browser) key = window.atob(data.data)
</script>


<svelte:head>
  <title>Feed | Zene: A Free Muic App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Feed | Zene: A Free Muic App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/search" />
</svelte:head>

{#if key != null}
  

  <div class="h-60" />
{/if}
