<script lang="ts">
  import { onMount } from 'svelte'
  import { env } from '$env/dynamic/public'
  import { type ResponseData, ResponseDataEnum } from '../../../domain/RequestEnumClass'
  import { DataIndexDS, indexDB, isAPICached, radioTableCache } from '$lib/utils/indexd'
  import type { ExtraDataMusicData } from '../../../domain/local/entities/MusicData'
  import RadioStationItems from './RadioStationItems.svelte'

  export let authKey: string

  let response: ResponseData<ExtraDataMusicData> = { type: ResponseDataEnum.EMPTY }

  async function radioList() {
    response = { type: ResponseDataEnum.LOADING }

    try {
      const cacheDB = new DataIndexDS<ExtraDataMusicData>(radioTableCache, indexDB)
      const cacheRecords: any = await cacheDB.retrieveFromIndexedDB()
      if (cacheRecords.length > 0)
        if (isAPICached(cacheRecords[0].length, `r_i_l`)) {
          const records = cacheRecords[0] as ExtraDataMusicData
          response = { type: ResponseDataEnum.SUCCESS, data: records }
          return
        }

      const res = await fetch(env.PUBLIC_RADIO_LIST, {
        method: 'POST',
        headers: { AuthorizationKey: authKey },
      })
      const data = await res.json() as ExtraDataMusicData
      response = { type: ResponseDataEnum.SUCCESS, data: data }
      localStorage.setItem(`r_i_l`, Date.now().toString())
      cacheDB.deleteAllRecordsAndSave(data)
      cacheDB.saveToIndexedDB(data)
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    radioList()
  })
</script>

{#if response.type == ResponseDataEnum.LOADING || response.type == ResponseDataEnum.SUCCESS}
  <h3 class="text-white urbanist-semibold text-sm md:text-xl ms-2 md:ms-4 mt-16">Radio Stations in your city</h3>
{/if}

<div class="overflow-x-auto flex scrollbar-hide">
  {#if response.type == ResponseDataEnum.LOADING}
    {#each Array(15) as _, index (index)}
      <div class="flex-none py-6 px-1 first:pl-2 last:pr-3">
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="w-[16rem] h-[14rem] bg-gray-400 animate-pulse rounded-lg" />
        </div>
      </div>
    {/each}
  {:else if response.type == ResponseDataEnum.SUCCESS}
    {#if response.data.resultOne.length > 0}
      {#each response.data.resultOne as item}
        <RadioStationItems musicData={item} />
      {/each}
    {:else}
      <center class="w-full">
        <h3 class="text-white urbanist-light text-sm md:text-xl mx-2 md:mx-4 mt-4">No Radio Stations found in your city</h3>
      </center>
    {/if}
  {:else}
    <div></div>
  {/if}
</div>

{#if response.type == ResponseDataEnum.LOADING || response.type == ResponseDataEnum.SUCCESS}
  <h3 class="text-white urbanist-semibold text-sm md:text-xl ms-2 md:ms-4 mt-16">Radio Stations in your country</h3>
{/if}

<div class="overflow-x-auto flex scrollbar-hide">
  {#if response.type == ResponseDataEnum.LOADING}
    {#each Array(15) as _, index (index)}
      <div class="flex-none py-6 px-1 first:pl-2 last:pr-3">
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="w-[16rem] h-[14rem] bg-gray-400 animate-pulse rounded-lg" />
        </div>
      </div>
    {/each}
  {:else if response.type == ResponseDataEnum.SUCCESS}
    {#if response.data.resultOne.length > 0}
      {#each response.data.resultTwo as item}
        <RadioStationItems musicData={item} />
      {/each}
    {:else}
      <center class="w-full">
        <h3 class="text-white urbanist-light text-sm md:text-xl mx-2 md:mx-4 mt-4">No Radio Stations found in your country</h3>
      </center>
    {/if}
  {:else}
    <div></div>
  {/if}
</div>
