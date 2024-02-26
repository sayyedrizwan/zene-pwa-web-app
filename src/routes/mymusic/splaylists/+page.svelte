<script lang="ts">
  import { browser } from '$app/environment'
  import type { SpotifyPlaylistsMusicData } from '../../../domain/local/entities/SpotifyPlaylistsMusicData.js'

  export let data: any

  let lists: SpotifyPlaylistsMusicData[] = []

  if (browser) {
    lists = data.response as SpotifyPlaylistsMusicData[]
  }
</script>

<svelte:head>
  <title>Spotify Music Playlists | Zene: A Free Muic App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Spotify Music Playlists | Zene: A Free Muic App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/mymusic" />
</svelte:head>

<h3 class="text-white urbanist-semibold text-4xl md:text-6xl ms-4 md:ms-7 mt-11">Spotify Playlists</h3>

{#each lists as playlists}
  <p class="text-white">{playlists.name}</p>
{/each}

<div class="h-64" />
