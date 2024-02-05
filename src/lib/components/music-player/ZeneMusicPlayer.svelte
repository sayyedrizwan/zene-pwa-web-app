<script lang="ts">
  import ARROW_DOWN from '$lib/assets/img/ic_arrow_down.svg'
  import { onDestroy, onMount } from 'svelte'
  import type { MusicPlayerData } from '../../../domain/local/entities/MusicPlayerData'
  import { DataIndexDS, indexDB, musicPlayerInfoCache } from '$lib/utils/indexd'
  import MusicRecordsLists from './view/MusicRecordsLists.svelte'
  import PlayinSongsDurationAction from './view/PlayingSongsDurationAction.svelte'
  import type { APManager } from '$lib/utils/s'

  export let songPlayer: Boolean
  export let currentDuration: Boolean
  export let totalDuration: Boolean
  export let audioPlayer: APManager

  let musicData: MusicPlayerData | null = null
  let interval: NodeJS.Timeout | null = null

  function closePlayer() {
    const backBg = document.getElementById('playerBackBg') as HTMLElement
    const mainBg = document.getElementById('playerMainBg') as HTMLElement

    backBg.classList.remove('animate__fadeIn')
    backBg.classList.add('animate__fadeOut')

    mainBg.classList.remove('animate__fadeInUp')
    mainBg.classList.add('animate__fadeOutDown')

    setTimeout(() => {
      songPlayer = false
    }, 1000)
  }

  async function checkFunction() {
    const cacheDB = new DataIndexDS<MusicPlayerData>(musicPlayerInfoCache, indexDB)
    const records: any = await cacheDB.retrieveFromIndexedDB()

    if (records.length > 0) musicData = records[0] as MusicPlayerData
    else musicData = null

    console.log(audioPlayer.songDuration())
  }

  onMount(async () => {
    interval = setInterval(checkFunction, 500)
  })

  onDestroy(() => {
    if (interval != null) clearInterval(interval)
  })
</script>

<div id="playerBackBg" class="fixed top-0 left-0 right-0 h-full w-full z-[1000] bg-black bg-opacity-70 p-7 animate__animated animate__fadeIn">
  <div id="playerMainBg" class="fixed top-0 left-0 right-0 h-full w-full animate__animated animate__fadeInUp animate__slow">
    <div class="absolute top-0 left-0 h-full w-full bg-maincolor overflow-auto">
      <div class="mt-20" />
      <MusicRecordsLists bind:musicData />
      <PlayinSongsDurationAction bind:currentDuration bind:totalDuration />
    </div>

    <div class="relative bg-maincolor w-full">
      <button on:click={closePlayer}>
        <img src={ARROW_DOWN} alt="mic" class="size-6 md:size-8 m-5 translate-y-1" />
      </button>

      <h1 class="absolute top-5 md:top-8 left-1/2 transform -translate-x-1/2 text-white urbanist-bold text-base md:text-xl">Zene: Music Player</h1>
    </div>
  </div>
</div>
