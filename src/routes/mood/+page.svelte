<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte'
  import { moodsList } from '$lib/utils/Utils'

  onMount(() => {
    console.log($page.url.searchParams.get('v'))
  })

</script>

<svelte:head>
  <title>Zene: A Free Muic App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Zene: A Free Muic App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co" />
</svelte:head>

<div class="bg-black w-full" />
