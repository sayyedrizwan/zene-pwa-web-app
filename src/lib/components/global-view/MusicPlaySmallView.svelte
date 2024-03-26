<script lang="ts">
  import { DataIndexDS, indexDB, musicPlayerInfoCache } from '$lib/utils/indexd'
  import PLAY_ICON from '$lib/assets/img/ic_play.svg'
  import PAUSE_ICON from '$lib/assets/img/ic_pause.svg'
  import NON_IMG from '$lib/assets/img/non_song_img.jpg'
  import { onDestroy, onMount } from 'svelte'
  import type { MusicPlayerData } from '../../../domain/local/entities/MusicPlayerData'
  import { APManager } from '../../utils/p/s'
  import { showMusicPlayer } from '$lib/utils/f'

  export let audioPlayer: APManager

  let thumbnail: string | null = null
  let isSongPlaying: boolean = false
  let isBuffering: boolean = false
  let interval: NodeJS.Timeout | null = null

  async function checkFunction() {
    const cacheDB = new DataIndexDS<MusicPlayerData>(musicPlayerInfoCache, indexDB)
    const records: any = await cacheDB.retrieveFromIndexedDB()

    if (records.length > 0) {
      const music = records[0] as MusicPlayerData
      thumbnail = music.m.thumbnail ?? ''
    }

    isSongPlaying = audioPlayer?.isPlaying() ?? false
    isBuffering = audioPlayer?.isBuffering() ?? false
  }

  function errorImage() {
    const img = document.getElementById('s-img') as HTMLImageElement
    img.src = NON_IMG
  }

  onMount(async () => {
    interval = setInterval(checkFunction, 500)
  })

  onDestroy(() => {
    if (interval != null) clearInterval(interval)
  })
</script>

{#if thumbnail != null}
  <button class="z-[49] fixed bottom-24 md:bottom-2 right-2 cursor-pointer bg-maincolor rounded-lg" on:click={() => showMusicPlayer(true)}>
    <img src={thumbnail} alt="music thumbnail" id="s-img" class="size-14 md:size-28" on:error={errorImage} />

    {#if isBuffering === true}
      <button type="button" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg class="animate-spin size-7 text-maincolor" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </button>
    {:else}
      <img src={isSongPlaying === true ? PAUSE_ICON : PLAY_ICON} alt="play" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-5 md:size-7" />
    {/if}
  </button>
{/if}
