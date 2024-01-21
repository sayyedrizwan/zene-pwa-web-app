<script lang="ts">
  import './tailwind.svelte'
  import TopListeningSongs from '$lib/components/main-page/TopListeningSongs.svelte'
  import { browser } from '$app/environment'
  import SongInfoSheet from '$lib/components/global-view/SongInfoSheet.svelte'
  import type { MusicData } from '../domain/local/entities/MusicData'
  import RadioStateLists from '$lib/components/main-page/radio/RadioStateLists.svelte'
  import TopGlobalTrendingArtists from '$lib/components/main-page/TopGlobalTrendingArtists.svelte'
  import TopMood from '$lib/components/main-page/TopMood.svelte'
  import FreshAddedSong from '$lib/components/main-page/FreshAddedSong.svelte'
  import GlobalTopTrendingSongs from '$lib/components/main-page/GlobalTopTrendingSongs.svelte'
  import TopSongsInUserCountry from '$lib/components/main-page/TopSongsInUserCountry.svelte'
  import type { IpDetails } from '../domain/local/entities/IpDetails'

  export let data: any

  let songMenuDialog: MusicData | null = null

  let key: string | null = null
  let ip: IpDetails | null
  
  if (browser) {
    key = window.atob(data.data)
    if(data.ip != undefined) ip = JSON.parse(data.ip)

    document.addEventListener('songdialog', (event: Event) => {
      songMenuDialog = (event as CustomEvent).detail.value
    })
  }
</script>

{#if key != null}
  <TopListeningSongs authKey={key} />
  <RadioStateLists authKey={key} ipDetails={ip}/>
  <TopGlobalTrendingArtists authKey={key} />
  <TopMood />
  <FreshAddedSong authKey={key} />
  <GlobalTopTrendingSongs authKey={key} />
  <TopSongsInUserCountry authKey={key} ipDetails={ip}/>

  <div class="h-60" />
{/if}

{#if songMenuDialog != null}
  <SongInfoSheet />
{/if}
