<script lang="ts">
  import { DataIndexDS, indexDB, isAPICachedForADay, trendingSongsInCountryCache } from '$lib/utils/indexd'
  import { onMount } from 'svelte'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import type { IpDetails } from '../../../domain/local/entities/IpDetails'
  import { MusicData, ExtraDataMusicData, MusicDataList } from '../../../domain/local/entities/MusicData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import { openSongDialog, playSongZene } from '$lib/utils/f'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'
  import { splitArrayIntoChunks } from '$lib/utils/Utils'

  export let authKey: string
  export let ipDetails: IpDetails | null

  let responseSongs: ResponseData<MusicDataList> = { type: ResponseDataEnum.EMPTY }
  let responseArtists: ResponseData<MusicData[][]> = { type: ResponseDataEnum.EMPTY }

  async function topSongsAndArtists() {
    responseSongs = { type: ResponseDataEnum.LOADING }
    responseArtists = { type: ResponseDataEnum.LOADING }

    try {
      const cacheDB = new DataIndexDS<ExtraDataMusicData>(trendingSongsInCountryCache, indexDB)
      const cacheRecords: any = await cacheDB.retrieveFromIndexedDB()

      if (cacheRecords.length > 0)
        if (isAPICachedForADay((cacheRecords?.[0] as any)?.resultOne.length, `t_c_s_l`)) {
          const records = cacheRecords?.[0] as ExtraDataMusicData
          responseSongs = { type: ResponseDataEnum.SUCCESS, data: new MusicDataList(records.resultOne) }
          responseArtists = { type: ResponseDataEnum.SUCCESS, data: splitArrayIntoChunks<MusicData>(records.resultTwo, 2) }
          return
        }

      const res = await axios.post(env.PUBLIC_TOP_SONGS_IN_COUNTRY, {}, { timeout: 60000, headers: { AuthorizationKey: authKey } })
      const data = (await res.data) as ExtraDataMusicData

      responseSongs = { type: ResponseDataEnum.SUCCESS, data: new MusicDataList(data.resultOne) }
      responseArtists = { type: ResponseDataEnum.SUCCESS, data: splitArrayIntoChunks<MusicData>(data.resultTwo, 2) }
      localStorage.setItem(`t_c_s_l`, Date.now().toString())
      cacheDB.deleteAllRecordsAndSave(data)
      cacheDB.saveToIndexedDB(data)
    } catch (error) {
      responseSongs = { type: ResponseDataEnum.ERROR }
      responseArtists = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    topSongsAndArtists()
  })
</script>

<div class="mt-2">
  {#if responseSongs.type == ResponseDataEnum.LOADING}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Top Songs in {ipDetails?.country ?? 'your country'}</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
      {#each Array(15) as _, index (index)}
        <div class="p-2">
          <div class="relative w-full h-[8rem] rounded-lg bg-gray-400 animate-pulse" />
        </div>
      {/each}
    </div>
  {:else if responseSongs.type == ResponseDataEnum.SUCCESS}
    {#if responseSongs.data.results.length > 0}
      <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Top Songs in {ipDetails?.country ?? 'your country'}</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
        {#each responseSongs.data.results as songs}
          <button class="p-2" on:click={() => playSongZene(songs)}>
            <div class="w-full h-[8rem] rounded-xl bg-maincolor bg-opacity-60 flex justify-center items-center">
              <img src={songs.thumbnail} alt={songs.name} class="size-[7rem] ps-3 py-3" referrerpolicy="no-referrer" />
              <div class="w-full m-3">
                <p class="text-white urbanist-semibold text-base text-start">{songs.name}</p>
                <p class="text-white urbanist-thin text-base text-start">{songs.artists}</p>
              </div>
              <div class="p-2">
                <button on:click={() => openSongDialog(songs)}><img src={MenuIcon} class="size-9" alt="menu" /> </button>
              </div>
            </div>
          </button>
        {/each}
      </div>
    {/if}
  {/if}
</div>
{#if responseArtists.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Top Artists in {ipDetails?.country ?? 'your country'}</h3>

  <div class="flex overflow-x-auto w-full scrollbar-hide">
    {#each Array(15) as _, index (index)}
      <div>
        <div class="p-3">
          <div class="relative w-[11rem] h-[11rem] rounded-lg bg-gray-400 animate-pulse" />
        </div>

        <div class="p-3">
          <div class="relative w-[11rem] h-[11rem] rounded-lg bg-gray-400 animate-pulse" />
        </div>
      </div>
    {/each}
  </div>
{:else if responseArtists.type == ResponseDataEnum.SUCCESS}
  {#if responseArtists.data.length > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Top Artists in {ipDetails?.country ?? 'your country'}</h3>

    <div class="flex overflow-x-auto w-full scrollbar-hide">
      {#each responseArtists.data as topItem}
        <div>
          {#each topItem as item}
            <div class="p-3">
              <a href="/">
                <div class="relative size-[11rem] md:size-[15rem] bg-black rounded-lg">
                  <img class="absolute top-0 left-0 size-[11rem] md:size-[15rem] object-contain rounded-lg" src={item.thumbnail} alt={item.name} referrerpolicy="no-referrer" />
                  <div class="absolute top-0 left-0 size-[11rem] md:size-[15rem] bg-gradient-to-bl from-transparent to-maincolor"></div>
                  <p class="absolute bottom-2 left-2 text-white urbanist-semibold text-base ms-1.5">{item.name}</p>
                </div>
              </a>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  {/if}
{/if}
