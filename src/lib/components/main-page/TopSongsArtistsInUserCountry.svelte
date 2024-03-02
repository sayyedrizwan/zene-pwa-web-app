<script lang="ts">
  import { DataIndexDS, indexDB, isAPICachedForADay, trendingSongsInCountryCache } from '$lib/utils/indexd'
  import { onMount } from 'svelte'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import type { IpDetails } from '../../../domain/local/entities/IpDetails'
  import { MusicData, ExtraDataMusicData, MusicDataList } from '../../../domain/local/entities/MusicData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import { splitArrayIntoChunks } from '$lib/utils/Utils'
  import GridFullCardItem from '../global-view/items/GridFullCardItem.svelte'
  import DualArtistsItems from '../global-view/items/DualArtistsItems.svelte'

  export let authKey: string
  export let ipDetails: IpDetails | null

  let responseSongs: ResponseData<MusicDataList> = { type: ResponseDataEnum.EMPTY }
  let responseArtists: ResponseData<MusicData[][]> = { type: ResponseDataEnum.EMPTY }

  async function topSongsAndArtists() {
    responseSongs = { type: ResponseDataEnum.LOADING }
    responseArtists = { type: ResponseDataEnum.LOADING }

    const cacheDB = new DataIndexDS<ExtraDataMusicData>(trendingSongsInCountryCache, indexDB)
    const cacheRecords: any = await cacheDB.retrieveFromIndexedDB()

    try {
      if (cacheRecords.length > 0)
        if (isAPICachedForADay((cacheRecords?.[0] as any)?.resultOne.length, `t_c_s_l`)) {
          const records = cacheRecords?.[0] as ExtraDataMusicData
          if ((records?.resultOne?.length ?? 0 > 0) && (records?.resultTwo?.length ?? 0 > 0)) {
            responseSongs = { type: ResponseDataEnum.SUCCESS, data: new MusicDataList(records.resultOne ?? []) }
            responseArtists = { type: ResponseDataEnum.SUCCESS, data: splitArrayIntoChunks<MusicData>(records.resultTwo ?? [], 2) }
            return
          }
        }
      const res = await axios.post(env.PUBLIC_TOP_SONGS_IN_COUNTRY, {}, { timeout: 60000, headers: { AuthorizationKey: authKey } })
      const data = (await res.data) as ExtraDataMusicData

      responseSongs = { type: ResponseDataEnum.SUCCESS, data: new MusicDataList(data.resultOne ?? []) }
      responseArtists = { type: ResponseDataEnum.SUCCESS, data: splitArrayIntoChunks<MusicData>(data.resultTwo ?? [], 2) }
      localStorage.setItem(`t_c_s_l`, Date.now().toString())
      cacheDB.deleteAllRecords()
      cacheDB.saveToIndexedDB(data)
    } catch (error) {
      cacheDB.deleteAllRecords()
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
    {#if responseSongs.data.results?.length ?? 0 > 0}
      <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Top Songs in {ipDetails?.country ?? 'your country'}</h3>
      <GridFullCardItem results={responseSongs.data} bg={"bg-maincolor"}/>
    {/if}
  {/if}
</div>

{#if responseArtists.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Top Artists in {ipDetails?.country ?? 'your country'}</h3>

  <div class="flex overflow-x-auto w-full scrollbar-hide">
    {#each Array(15) as _, index (index)}
      <div>
        <div class="p-3">
          <div class="relative w-[13rem] h-[11rem] rounded-lg bg-gray-400 animate-pulse" />
        </div>

        <div class="p-3">
          <div class="relative w-[13rem] h-[11rem] rounded-lg bg-gray-400 animate-pulse" />
        </div>
      </div>
    {/each}
  </div>
{:else if responseArtists.type == ResponseDataEnum.SUCCESS}
  {#if responseArtists.data.length > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Top Artists in {ipDetails?.country ?? 'your country'}</h3>
    <DualArtistsItems list={responseArtists.data} />
  {/if}
{/if}
