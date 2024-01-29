<script lang="ts">
  import { DataIndexDS, indexDB, musicPlayerInfoCache } from '$lib/utils/indexd'
  import PLAY_ICON from '$lib/assets/img/ic_play.svg'
  import PAUSE_ICON from '$lib/assets/img/ic_pause.svg'
  import { onDestroy, onMount } from 'svelte'
  import type { MusicPlayerData } from '../../../domain/local/entities/MusicPlayerData'
  import { APManager } from '../../../routes/api/utils/s'

  export let audioPlayer: APManager

  let showAudio: boolean = false

  let thumbnail: string | null = null
  let isSongPlaying: boolean = false
  let interval: NodeJS.Timeout | null = null

  async function checkFunction() {
    const cacheDB = new DataIndexDS<MusicPlayerData>(musicPlayerInfoCache, indexDB)
    const records: any = await cacheDB.retrieveFromIndexedDB()

    if (records.length > 0) {
      const music = records[0] as MusicPlayerData
      thumbnail = music.m.thumbnail
    }

    isSongPlaying = audioPlayer?.isPlaying() ?? false
  }

  onMount(async () => {
    showAudio = true
    interval = setInterval(checkFunction, 500)
  })

  onDestroy(() => {
    if (interval != null) clearInterval(interval)
  })
</script>

{#if thumbnail != null}
  <button class="z-[49] fixed bottom-24 md:bottom-2 right-2 cursor-pointer">
    <img src={thumbnail} alt="music thumbnail" class="size-14 md:size-28" />

    {#if isSongPlaying === true}
      <img src={PAUSE_ICON} alt="play" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-5 md:size-7" />
    {:else}
      <img src={PLAY_ICON} alt="play" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-5 md:size-7" />
    {/if}
  </button>
{/if}
