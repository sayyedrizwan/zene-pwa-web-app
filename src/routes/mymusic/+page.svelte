<script lang="ts">
  import { getAllPlayHistory, topTenSongsListener } from '$lib/utils/p/shistory'
  import { onMount } from 'svelte'
  import type { MusicHistoryData } from '../../domain/local/entities/MusicHistoryData'

  let page = 0
  let limit = 5
  let items: MusicHistoryData[] = []

  async function startPaging() {
    try {
      const data = await getAllPlayHistory(page * limit, limit)
      items = [...items, ...data]
      page += 1
    } catch (error) {
      alert('Error Reading the songs history')
    }
  }

  onMount(async () => {
    startPaging()
  })
</script>

<svelte:head>
  <title>My Music | Zene: A Free Muic App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="My Musi | Zene: A Free Muic App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/mymusic" />
</svelte:head>

<h3 class="text-white urbanist-semibold text-4xl md:text-6xl ms-4 md:ms-7 mt-11">My Music</h3>

<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-4 md:ms-7 mt-16">History</h3>

{#each items as history}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-4 md:ms-7 mt-16">{history.s}</h3>
{/each}

<div class="h-64" />

<!-- <iframe src="https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F" title="W3Schools Free Online Web Tutorials" class="size-60"></iframe> -->
