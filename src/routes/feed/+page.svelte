<script lang="ts">
  import { browser } from '$app/environment'
  import FeedItemsLists from '$lib/components/feed-page/FeedItemsLists.svelte'
  import FeedTopList from '$lib/components/feed-page/FeedTopList.svelte'

  export let data: any
  let key: string | null = null

  if (browser) key = window.atob(data.data)
</script>

<svelte:head>
  <title>Feed | Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Feed | Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/search" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />

</svelte:head>

{#if key != null}
  <h3 class="text-white urbanist-semibold text-2xl md:text-3xl pl-9 mt-14 mb-6">Feed</h3>

  <FeedTopList />
  <FeedItemsLists authKey={key} />

  <div class="h-60" />
{/if}
