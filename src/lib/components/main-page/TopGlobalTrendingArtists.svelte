<script lang="ts">
  import { onMount } from 'svelte'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import type { MusicData } from '../../../domain/local/entities/MusicData'
  import { env } from '$env/dynamic/public'
  import { splitArrayIntoChunks } from '$lib/utils/Utils'
  import { DataIndexDS, indexDB, isAPICached, topArtistsCache } from '$lib/utils/indexd'
    import axios from 'axios'

  export let authKey: string

  let response: ResponseData<MusicData[][]> = { type: ResponseDataEnum.EMPTY }

  async function topArtists() {
    response = { type: ResponseDataEnum.LOADING }

    try {
      const cacheDB = new DataIndexDS<MusicData[]>(topArtistsCache, indexDB)
      const cacheRecords: any = await cacheDB.retrieveFromIndexedDB()
      if (cacheRecords.length > 0)
        if (isAPICached(cacheRecords[0].length, `t_a_l`)) {
          const records = cacheRecords[0] as MusicData[]
          response = { type: ResponseDataEnum.SUCCESS, data: splitArrayIntoChunks<MusicData>(records, 2) }
          return
        }

      const res = await axios.post(env.PUBLIC_TOP_ARTISTS_LIST, {
        timeout: 120000,
        headers: { AuthorizationKey: authKey }
      })
      const data = (await res.data) as MusicData[]
      response = { type: ResponseDataEnum.SUCCESS, data: splitArrayIntoChunks<MusicData>(data, 2) }
      localStorage.setItem(`t_a_l`, Date.now().toString())
      cacheDB.deleteAllRecordsAndSave(data)
      cacheDB.saveToIndexedDB(data)
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    topArtists()
  })
</script>

{#if response.type == ResponseDataEnum.LOADING || response.type == ResponseDataEnum.SUCCESS}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Global top trending artists</h3>
{/if}

<div class="flex overflow-x-auto w-full scrollbar-hide">
  {#if response.type == ResponseDataEnum.LOADING}
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
  {:else if response.type == ResponseDataEnum.SUCCESS}
    {#each response.data as topItem}
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
  {/if}
</div>
