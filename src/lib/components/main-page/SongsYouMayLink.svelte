<script lang="ts">
  import { onMount } from 'svelte'
  import { latestFifteenSongsListener, topTenSongsListener } from '$lib/utils/p/shistory'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import { SongsYouMayLikeCache, type SongsYouMayLike } from '../../../domain/local/entities/SongsYouMayLike'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import { DataIndexDS, indexDB, songMayLikeCache } from '$lib/utils/indexd'
  import { splitArrayIntoChunks } from '$lib/utils/Utils'
  import CardsWithFullColor from '../global-view/items/CardsWithFullColor.svelte'

  export let authKey: string
  export let youMayLike: SongsYouMayLike | null

  let response: ResponseData<SongsYouMayLike> = { type: ResponseDataEnum.EMPTY }

  async function readMusic(music: string[]) {
    const cacheDB = new DataIndexDS<SongsYouMayLikeCache<SongsYouMayLike>>(songMayLikeCache, indexDB)
    const cacheRecords: any = await cacheDB.retrieveFromIndexedDB()

    if (music.length <= 0) {
      response = { type: ResponseDataEnum.ERROR }
      return
    }

    try {
      response = { type: ResponseDataEnum.LOADING }

      if (cacheRecords.length > 0) {
        const records = cacheRecords[0] as SongsYouMayLikeCache<SongsYouMayLike>
        if (JSON.stringify(records.cache) == JSON.stringify(music) && records.response.like.length > 0) {
          youMayLike = records.response
          response = { type: ResponseDataEnum.SUCCESS, data: records.response }
          return
        }
      }

      const res = await axios.post(env.PUBLIC_S_Y_M_L, music, { timeout: 60000, headers: { AuthorizationKey: authKey } })
      const data = (await res.data) as SongsYouMayLike
      response = { type: ResponseDataEnum.SUCCESS, data: data }
      youMayLike = data

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

{#if response.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Songs you may like</h3>

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
{:else if response.type == ResponseDataEnum.SUCCESS}
  {#if response.data.like.length > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Songs you may like</h3>

    <div class="flex overflow-x-auto w-full scrollbar-hide">
      {#each splitArrayIntoChunks(response.data.like, 2) as topItem}
        <div>
          {#each topItem as item}
            <CardsWithFullColor {item} />
          {/each}
        </div>
      {/each}
    </div>
  {/if}
{/if}
