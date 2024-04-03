<script lang="ts">
  import SearchTopBar from '$lib/components/seach-page/SearchTopBar.svelte'
  import SearchResults from '$lib/components/seach-page/SearchResults.svelte'

  export let searchParam = ''
</script>

<svelte:head>
  <title>Search | Zene a Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Search | Zene a Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/search" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>

{#if searchParam.length > 2}
  <SearchResults bind:searchParam />
{:else}
  <SearchTopBar bind:searchParam />
{/if}

<div class="h-60" />
