<script lang="ts">
  import { getMusicLyrics, setMusicLyrics } from '$lib/utils/pid'
  import { ResponseDataEnum, type ResponseData } from '../../../../domain/RequestEnumClass'
  import type { MusicPlayerData } from '../../../../domain/local/entities/MusicPlayerData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import type { LyricsResponseData } from '../../../../domain/local/entities/LyricsResponseData'
  import { wait } from '$lib/utils/indexd'
  import { durationToTime } from '$lib/utils/f'

  export let musicData: MusicPlayerData | null
  export let currentDuration: number

  let firstLyricsText = '🎶 🎶 🎶'
  let middleLyricsText = ''
  let lastLyricsText = '🎶 🎶 🎶'

  let songLyrics: ResponseData<LyricsResponseData> = { type: ResponseDataEnum.EMPTY }

  let isEverRunned = false

  async function loadSongLyrics() {
    await wait(500)
    if (isEverRunned == true) return
    if (musicData?.m?.songId == undefined) return
    const v = getMusicLyrics(musicData?.m?.songId ?? '')
    if (v != null) {
      songLyrics = { type: ResponseDataEnum.SUCCESS, data: v }
      return
    }

    isEverRunned = true
    try {
      songLyrics = { type: ResponseDataEnum.LOADING }
      const res = await axios.post(env.PUBLIC_LYRICS, { id: musicData?.m?.songId })
      const response = (await res.data) as LyricsResponseData
      songLyrics = { type: ResponseDataEnum.SUCCESS, data: response }
      setMusicLyrics(musicData?.m?.songId ?? '', response)
    } catch (error) {
      songLyrics = { type: ResponseDataEnum.ERROR }
    }
  }

  async function songSync() {
    if (songLyrics.type == ResponseDataEnum.SUCCESS) {
      if (songLyrics.data.sync === false) return

      const txt = songLyrics.data.lyrics?.textAfterKeyword(durationToTime(currentDuration))?.textAfterKeyword(']')?.textBeforeKeyword('[') ?? ''

      if (songLyrics.data.lyrics?.includes(durationToTime(currentDuration)) == true) {
        if(middleLyricsText != txt) firstLyricsText = middleLyricsText
        middleLyricsText = txt
        lastLyricsText = songLyrics.data.lyrics?.textAfterKeyword(durationToTime(currentDuration))?.textAfterKeyword(']')?.textAfterKeyword(']')?.textBeforeKeyword('[') ?? ''
      } else if (middleLyricsText == '') {
        middleLyricsText = txt
      }
    }
  }

  $: musicData, loadSongLyrics()
  $: currentDuration, songSync()
</script>

{#if songLyrics.type == ResponseDataEnum.SUCCESS}
  <div class="bg-gray-500 bg-opacity-20 mx-3 rounded-md pb-5">
    <h3 class="text-white urbanist-semibold text-3xl md:text-xl ms-2 md:ms-4 pt-7 text-start">Lyrics</h3>
    {#if songLyrics.data.sync}
      <p class="mt-3 px-2 text-gray-500 urbanist-semibold w-full text-center text-sm">{firstLyricsText}</p>
      <p class="mt-3 px-2 text-white urbanist-semibold w-full text-center text-xl">{middleLyricsText}</p>
      <p class="mt-3 px-2 text-gray-500 urbanist-semibold w-full text-center text-sm">{lastLyricsText}</p>
      <div class="mt-3 px-2 text-white urbanist-regular"></div>
    {:else}
      <h3>nijyjbh</h3>
    {/if}
  </div>
{:else if songLyrics.type == ResponseDataEnum.LOADING}
  <div class="bg-gray-500 bg-opacity-20 mx-3 rounded-md pb-5">
    <h3 class="text-white urbanist-semibold text-3xl md:text-xl ms-2 md:ms-4 pt-7 text-start">Lyrics</h3>

    <div class="px-6">
      <div class="grid grid-cols-3 gap-4 mt-4 mb-3">
        <div class="h-2 bg-gray-300 rounded col-span-2 animate-pulse"></div>
        <div class="h-2 bg-gray-300 rounded col-span-1 animate-pulse"></div>
      </div>
      <div class="h-2 bg-gray-300 rounded mt-4 animate-pulse"></div>
    </div>
  </div>
{/if}

<div class="h-11" />
