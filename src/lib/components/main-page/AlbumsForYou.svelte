<script lang="ts">
  import { onMount } from 'svelte'
  import type { MusicDataList } from '../../../domain/local/entities/MusicData'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import { latestFifteenSongsListener, topTenSongsListener } from '$lib/utils/p/shistory'
  import { DataIndexDS, albumsForYouCache, indexDB } from '$lib/utils/indexd'
  import { SongsYouMayLikeCache } from '../../../domain/local/entities/SongsYouMayLike'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'

  export let authKey: string

  let response: ResponseData<MusicDataList> = { type: ResponseDataEnum.EMPTY }

  async function readMusic(music: string[]) {
    const cacheDB = new DataIndexDS<SongsYouMayLikeCache<MusicDataList>>(albumsForYouCache, indexDB)
    const cacheRecords: any = await cacheDB.retrieveFromIndexedDB()

    if (music.length <= 0) {
      response = { type: ResponseDataEnum.ERROR }
      return
    }

    try {
      response = { type: ResponseDataEnum.LOADING }

      if (cacheRecords.length > 0) {
        const records = cacheRecords[0] as SongsYouMayLikeCache<MusicDataList>
        if (JSON.stringify(records.cache) == JSON.stringify(music) && (records.response?.results?.length ?? 0) > 0) {
          response = { type: ResponseDataEnum.SUCCESS, data: records.response }
          return
        }
      }

      const res = await axios.post(env.PUBLIC_ALBUMS_YOU_MAY_LIKE, music, { timeout: 60000, headers: { AuthorizationKey: authKey } })
      const data = (await res.data) as MusicDataList
      response = { type: ResponseDataEnum.SUCCESS, data: data }

      cacheDB.deleteAllRecords()
      cacheDB.saveToIndexedDB(new SongsYouMayLikeCache(music, data))
    } catch (error) {
      cacheDB.deleteAllRecords()
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    const lists = await latestFifteenSongsListener()
    readMusic(lists)
  })
</script>

{#if response.type == ResponseDataEnum.SUCCESS}
  <div>
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Albums for you</h3>

    {#if (response.data?.results?.length ?? 0) > 0}
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
        {#each response.data?.results ?? [] as musicData}
          <a class="p-2 rounded-lg shadow-lg cursor-pointer" href={`album/${musicData.songId}`}>
            <img src={musicData.thumbnail} alt={musicData.name} class="w-full rounded-lg object-cover" />
            <p class="text-white urbanist-semibold mt-3 text-base text-center w-full truncate">{musicData.name}</p>
          </a>
        {/each}
      </div>
    {/if}
  </div>
{:else if response.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Albums for you</h3>
  <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-2 p-4">
    {#each Array(18) as _, index (index)}
      <div class="bg-gray-600 pl animate-pulse rounded-lg w-full h-48" />
    {/each}
  </div>
{/if}
