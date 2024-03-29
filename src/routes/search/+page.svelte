<script lang="ts">
  import { onMount } from 'svelte'
  import { wait } from '$lib/utils/indexd'
  import SearchTopBar from '$lib/components/seach-page/SearchTopBar.svelte'
  import SearchResults from '$lib/components/seach-page/SearchResults.svelte'
  import type { APManager } from '$lib/utils/p/s'

  export let audioPlayer: APManager
  export let searchParam = ''

  onMount(async () => {
    await wait(1000)
    console.log(audioPlayer.ctId())
  })
</script>

<svelte:head>
  <title>Search | Zene: A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Search | Zene: A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/search" />
</svelte:head>

{#if searchParam.length > 2}
  <SearchResults bind:searchParam />
{:else}
  <SearchTopBar bind:searchParam />
{/if}

<div class="h-60" />
