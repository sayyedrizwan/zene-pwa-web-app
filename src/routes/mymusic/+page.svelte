<script lang="ts">
  import MyMusicHistory from '$lib/components/mymusic-page/MyMusicHistory.svelte'
  import ImportMyMusic from '$lib/components/mymusic-page/ImportMyMusic.svelte'
</script>

<svelte:head>
  <title>My Music | Zene: A Free Muic App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="My Music | Zene: A Free Muic App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/mymusic" />
</svelte:head>

<h3 class="text-white urbanist-semibold text-4xl md:text-6xl ms-4 md:ms-7 mt-11">My Music</h3>

<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-4 md:ms-7 mt-16">History</h3>

<div class="overflow-x-auto flex scrollbar-hide mt-3">
  <MyMusicHistory />
</div>

<div class="h-44 md:h-72" />

<ImportMyMusic />

<div class="h-64" />