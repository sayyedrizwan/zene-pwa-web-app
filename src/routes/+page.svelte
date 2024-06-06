<script lang="ts">
  import './tailwind.svelte'
  import RoundCardsIconsButton from '$lib/components/global-view/items/RoundCardsIconsButton.svelte'
  import TopListeningSongs from '$lib/components/main-page/TopListeningSongs.svelte'
  import { browser } from '$app/environment'
  import DONATE_ICON from '$lib/assets/img/ic_donate.svg'
  import CROWN_ICON from '$lib/assets/img/ic_crown.svg'
  import SHARE_ICON from '$lib/assets/img/ic_share.svg'
  import RadioStateLists from '$lib/components/main-page/radio/RadioStateLists.svelte'
  import TopGlobalTrendingArtists from '$lib/components/main-page/TopGlobalTrendingArtists.svelte'
  import TopMood from '$lib/components/main-page/TopMood.svelte'
  import FreshAddedSong from '$lib/components/main-page/FreshAddedSong.svelte'
  import GlobalTopTrendingSongs from '$lib/components/main-page/GlobalTopTrendingSongs.svelte'
  import TopSongsInUserCountry from '$lib/components/main-page/TopSongsArtistsInUserCountry.svelte'
  import type { IpDetails } from '../domain/local/entities/IpDetails'
  import AlbumsForYou from '$lib/components/main-page/AlbumsForYou.svelte'
  import type { MusicData } from '../domain/local/entities/MusicData'
  import SongsYouMayLinkToListen from '$lib/components/main-page/SongsYouMayLinkToListen.svelte'
  import type { SongsYouMayLike } from '../domain/local/entities/SongsYouMayLike'
  import ArtistsCards from '$lib/components/global-view/items/ArtistsCards.svelte'
  import CardWithTopMenuIcon from '$lib/components/global-view/items/CardWithTopMenuIcon.svelte'
  import SuggestSongsYouMayLike from '$lib/components/main-page/SuggestSongsYouMayLike.svelte'
  import { onMount } from 'svelte'
  import type { ZeneAdsListsData } from '../domain/local/entities/ZeneAdsListsData'
  import { getZAds } from '$lib/firebase/firebase'
  import HomePageAds from '$lib/components/ads-view/HomePageAds.svelte'
  import HomeVideoAds from '$lib/components/ads-view/HomeVideoAds.svelte'
  import { shareATxt } from '$lib/utils/f'

  export let data: any

  let authKey: string | null = null
  let ipDetails: IpDetails | null

  let ads: ZeneAdsListsData | null = null

  let youMayLike: SongsYouMayLike | null = null
  let topSongsCountry: MusicData[] = []

  if (browser) {
    authKey = window.atob(data.data)
    if (data.ip != undefined) ipDetails = JSON.parse(data.ip)
  }

  onMount(async () => {
    ads = await getZAds()
  })

  function shareWebsite() {
    const title = 'Discover Zene 🎶 an Ad-free music app \n🆓 Enjoy free music for life and many more amazing features. Get now https://zenemusic.co/download'
    shareATxt(title, title, null)
  }
</script>

<svelte:head>
  <title>Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co" />
  <meta
    name="keywords"
    content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming"
  />
</svelte:head>

<div class="px-4">
  <div class="w-full bg-maincolor rounded-md flex flex-col justify-center items-center">
    <div class="h-6" />
    <p class="text-white urbanist-semibold text-xl ms-1.5 text-center">Help us by Donating <br />or<br />Become a part of Zene inner community.</p>
    <p class="text-white urbanist-regular text-base mt-7 text-center mx-3">
      Hey there! Have you tried Zene yet? It's an awesome music app that's completely free, with no annoying popup or audio ads to disrupt your listening experience. We've put a lot of effort and money into making it great, but we do need a little help. <br />If you can donate it
      will really help us to maintain or server or join the Zene inner community where you will start to get paid once the app is profitable or at least share Zene with-in your friends and family, you can help us build the Zene family and give free music to everyone.
    </p>

    <div class="overflow-x-auto flex mt-9 scrollbar-hide">
      <RoundCardsIconsButton title={"Donate"} img={DONATE_ICON} functions={() => window.open("bit.ly/3XphmuL", "_blank")} />
      <RoundCardsIconsButton title={"Become a member"} img={CROWN_ICON} functions={() => window.open("bit.ly/3wQav2B", "_blank")} />
    </div>

    <RoundCardsIconsButton title={"Share Zene with your friend and family"} img={SHARE_ICON} functions={shareWebsite} />

    <div class="h-6" />
  </div>
</div>

{#if authKey != null}
  <TopListeningSongs {authKey} />

  {#if ads != null && ads.doShow}
    <HomePageAds bind:ads />
  {:else}
    <amp-ad width="100vw" height="320" type="adsense" data-ad-client="ca-pub-2941808068005217" data-ad-slot="5350541122" data-auto-format="mcrspv" data-full-width="">
      <div></div>
    </amp-ad>
  {/if}

  <RadioStateLists {authKey} {ipDetails} />
  <TopGlobalTrendingArtists {authKey} />
  <TopMood />

  {#if ads != null && ads.doShow}
    <HomeVideoAds bind:ads />
  {/if}

  <FreshAddedSong {authKey} />
  <GlobalTopTrendingSongs {authKey} bind:topSongsCountry />
  <TopSongsInUserCountry {authKey} {ipDetails} />
  <AlbumsForYou {authKey} />
  <SuggestSongsYouMayLike {authKey} bind:topSongsCountry bind:youMayLike />
  <SongsYouMayLinkToListen bind:youMayLike />

  {#if (youMayLike?.artists?.length ?? 0) > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Similar Artists</h3>
    <div class="overflow-x-auto flex scrollbar-hide">
      {#each youMayLike?.artists ?? [] as artists}
        <ArtistsCards {artists} />
      {/each}
    </div>
  {/if}

  {#if (youMayLike?.explore?.length ?? 0) > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Songs</h3>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 leading-6 rounded-lg">
      {#each youMayLike?.explore ?? [] as musicData}
        <CardWithTopMenuIcon {musicData} list={youMayLike?.explore ?? [musicData]} />
      {/each}
    </div>
  {/if}

  <div class="h-60" />
{/if}
