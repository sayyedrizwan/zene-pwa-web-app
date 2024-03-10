<script lang="ts">
  import ARROW_DOWN from '$lib/assets/img/ic_arrow_down.svg'
  import { onDestroy, onMount } from 'svelte'
  import { MusicPlayerPlayingStatus, type MusicPlayerData, type ResponseMusicPlayerPlayingStatus } from '../../../domain/local/entities/MusicPlayerData'
  import { DataIndexDS, indexDB, musicPlayerInfoCache, wait } from '$lib/utils/indexd'
  import MusicRecordsLists from './view/MusicRecordsLists.svelte'
  import PlayinSongsDurationAction from './view/PlayingSongsDurationAction.svelte'
  import type { APManager } from '$lib/utils/p/s'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import type { DURLResponse } from '../../../domain/local/entities/DURLResponse'
  import PlayerActionButton from './view/PlayerActionButton.svelte'
  import MusicRelatedSongs from './view/MusicRelatedSongs.svelte'
  import SongLyricsView from './view/SongLyricsView.svelte'

  export let songPlayer: Boolean
  export let audioPlayer: APManager

  let isPlaying: Boolean
  let currentDuration: number
  let totalDuration: number
  let isBuffering: boolean = false

  let musicData: MusicPlayerData | null = null
  let interval: NodeJS.Timeout | null = null

  let musicPlayerPlayingStatus: ResponseMusicPlayerPlayingStatus = { type: MusicPlayerPlayingStatus.SONG, data: '' }

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

  async function loadMusicUrl() {
    await wait(1000)
    if ((musicData?.m?.songId ?? '') == '') return
    audioPlayer.startBuffering()
    const response = await axios.get(`${env.PUBLIC_DOWNLOAD_URL}?id=${musicData?.m?.songId ?? ''}`, { timeout: 120000 })
    audioPlayer.playMusic(response.data as DURLResponse, musicData?.m!)
  }

  async function checkFunction() {
    const cacheDB = new DataIndexDS<MusicPlayerData>(musicPlayerInfoCache, indexDB)
    const records: any = await cacheDB.retrieveFromIndexedDB()

    if (records.length > 0) musicData = records[0] as MusicPlayerData
    else musicData = null

    currentDuration = audioPlayer.songCurrentDuration()
    totalDuration = audioPlayer.songDuration()
    isPlaying = audioPlayer.isPlaying()
    isBuffering = audioPlayer?.isBuffering() ?? false

    if (musicPlayerPlayingStatus.type != MusicPlayerPlayingStatus.SONG) audioPlayer.pause()
  }

  onMount(async () => {
    checkFunction()
    if (audioPlayer.songDuration() == 0 && (audioPlayer?.isBuffering() ?? false) === false) loadMusicUrl()
    interval = setInterval(checkFunction, 500)
  })

  onDestroy(() => {
    if (interval != null) clearInterval(interval)
  })

  function toMusicFunction() {
    musicPlayerPlayingStatus = { type: MusicPlayerPlayingStatus.SONG, data: '' }
    audioPlayer.play()
  }

  function scrollMusicToTop() {
    audioPlayer.startBuffering()
    const id = document.getElementById('scrollmusic') as HTMLElement
    if (id != null) id.scroll({ top: 0, behavior: 'smooth' })
  }
</script>

<div id="playerBackBg" class="fixed top-0 left-0 right-0 h-full w-full z-[1000] bg-black bg-opacity-70 p-7 animate__animated animate__fadeIn">
  <div id="playerMainBg" class="fixed top-0 left-0 right-0 h-full w-full animate__animated animate__fadeInUp animate__slow">
    <div class="absolute top-0 left-0 h-full w-full bg-maincolor overflow-auto" id="scrollmusic">
      <div class="mt-20" />
      <MusicRecordsLists bind:musicData bind:musicPlayerPlayingStatus />
      <PlayinSongsDurationAction bind:currentDuration bind:totalDuration bind:audioPlayer bind:isPlaying bind:isBuffering />
      <PlayerActionButton bind:musicData bind:musicPlayerPlayingStatus {toMusicFunction} />
      <SongLyricsView bind:musicData bind:currentDuration/>
      <!-- <MusicRelatedSongs bind:musicData {scrollMusicToTop} /> -->
    </div>

    <div class="relative bg-maincolor w-full">
      <button on:click={closePlayer}>
        <img src={ARROW_DOWN} alt="mic" class="size-6 md:size-8 m-5 translate-y-1" />
      </button>

      <h1 class="absolute top-5 md:top-8 left-1/2 transform -translate-x-1/2 text-white urbanist-bold text-base md:text-xl">Zene: Music Player</h1>
    </div>
  </div>
</div>
