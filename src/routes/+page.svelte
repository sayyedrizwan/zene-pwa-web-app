<script lang="ts">
  import './tailwind.svelte'
  import TopListeningSongs from '$lib/components/main-page/TopListeningSongs.svelte'
  import { browser } from '$app/environment'
  import SongInfoSheet from '$lib/components/global-view/SongInfoSheet.svelte'
  import type { MusicData } from '../domain/local/entities/MusicData'
  import RadioStateLists from '$lib/components/main-page/radio/RadioStateLists.svelte'
  import TopGlobalTrendingArtists from '$lib/components/main-page/TopGlobalTrendingArtists.svelte'
    import TopMood from '$lib/components/main-page/TopMood.svelte'
  export let data: any

  let songMenuDialog: MusicData | null = null

  let key: string | null = null
  if (browser) {
    key = window.atob(data.data)

    document.addEventListener('songdialog', (event: Event) => {
      songMenuDialog = (event as CustomEvent).detail.value
    })
  }
</script>

{#if key != null}
  <TopListeningSongs authKey={key} />
  <RadioStateLists authKey={key} />
  <TopGlobalTrendingArtists authKey={key} />
  <TopMood />

  <div class="h-60" />
{/if}

{#if songMenuDialog != null}
  <SongInfoSheet />
{/if}
