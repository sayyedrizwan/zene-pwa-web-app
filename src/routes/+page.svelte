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
  import AlbumsForYou from '$lib/components/main-page/AlbumsForYou.svelte'
  import type { MusicData } from '../domain/local/entities/MusicData'
  import SongsYouMayLinkToListen from '$lib/components/main-page/SongsYouMayLinkToListen.svelte'
  import type { SongsYouMayLike } from '../domain/local/entities/SongsYouMayLike'
  import ArtistsCards from '$lib/components/global-view/items/ArtistsCards.svelte'
  import CardWithTopMenuIcon from '$lib/components/global-view/items/CardWithTopMenuIcon.svelte'
  import SuggestSongsYouMayLike from '$lib/components/main-page/SuggestSongsYouMayLike.svelte'

  export let data: any

  let authKey: string | null = null
  let ipDetails: IpDetails | null

  let youMayLike: SongsYouMayLike | null = null
  let topSongsCountry: MusicData[] = []

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
  <GlobalTopTrendingSongs {authKey} bind:topSongsCountry />
  <TopSongsInUserCountry {authKey} {ipDetails} />
  <SuggestSongsYouMayLike {authKey} bind:topSongsCountry bind:youMayLike />
  <SongsYouMayLink {authKey} bind:youMayLike />
  <AlbumsForYou {authKey} />
  <SongsYouMayLinkToListen bind:youMayLike />

  {#if (youMayLike?.artists?.length ?? 0) > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Similar Artists</h3>
    <div class="overflow-x-auto flex scrollbar-hide">
      {#each youMayLike?.artists ?? [] as artists}
        <ArtistsCards {artists} />
      {/each}
    </div>
  {/if}

  {#if (youMayLike?.explore.length ?? 0) > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Songs</h3>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 leading-6 rounded-lg">
      {#each youMayLike?.explore ?? [] as musicData}
        <CardWithTopMenuIcon {musicData} />
      {/each}
    </div>
  {/if}

  <div class="h-60" />
{/if}
