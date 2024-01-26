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

  export let data: any

  let key: string | null = null
  let ip: IpDetails | null

  if (browser) {
    key = window.atob(data.data)
    if (data.ip != undefined) ip = JSON.parse(data.ip)
  }
</script>

{#if key != null}
  <TopListeningSongs authKey={key} />
  <RadioStateLists authKey={key} ipDetails={ip} />
  <TopGlobalTrendingArtists authKey={key} />
  <TopMood />
  <FreshAddedSong authKey={key} />
  <GlobalTopTrendingSongs authKey={key} />
  <TopSongsInUserCountry authKey={key} ipDetails={ip} />

  <div class="h-60" />
{/if}