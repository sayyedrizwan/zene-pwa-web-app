<script lang="ts">
  import './tailwind.svelte'
  import TopListeningSongs from '$lib/components/main-page/TopListeningSongs.svelte'
  import { browser } from '$app/environment'
  import RadioStateLists from '$lib/components/main-page/radio/RadioStateLists.svelte'
  import TopGlobalTrendingArtists from '$lib/components/main-page/TopGlobalTrendingArtists.svelte'
  import TopMood from '$lib/components/main-page/TopMood.svelte'
  import FreshAddedSong from '$lib/components/main-page/FreshAddedSong.svelte'
  import GlobalTopTrendingSongs from '$lib/components/main-page/GlobalTopTrendingSongs.svelte'
  import TopSongsInUserCountry from '$lib/components/main-page/TopSongsArtistsInUserCountry.svelte'
  import type { IpDetails } from '../domain/local/entities/IpDetails'
    import SongsYouMayLink from '$lib/components/main-page/SongsYouMayLink.svelte'

  export let data: any

  let authKey: string | null = null
  let ipDetails: IpDetails | null

  if (browser) {
    authKey = window.atob(data.data)
    if (data.ip != undefined) ipDetails = JSON.parse(data.ip)
  }
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

{#if authKey != null}
  <TopListeningSongs {authKey} />
  <RadioStateLists {authKey} {ipDetails} />
  <TopGlobalTrendingArtists {authKey} />
  <TopMood />
  <FreshAddedSong {authKey} />
  <GlobalTopTrendingSongs {authKey} />
  <TopSongsInUserCountry {authKey} {ipDetails} />
  <SongsYouMayLink {authKey}/>

  <div class="h-60" />
{/if}
