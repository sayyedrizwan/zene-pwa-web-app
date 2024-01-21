<script lang="ts">
  import { onMount } from 'svelte'
  import { env } from '$env/dynamic/public'
  import { type ResponseData, ResponseDataEnum } from '../../../../domain/RequestEnumClass'
  import { DataIndexDS, indexDB, isAPICached, radioTableCache } from '$lib/utils/indexd'
  import type { ExtraDataMusicData } from '../../../../domain/local/entities/MusicData'
  import RadioStationItems from './RadioStationItems.svelte'
  import axios from 'axios'
  import type { IpDetails } from '../../../../domain/local/entities/IpDetails'

  export let authKey: string
  export let ipDetails: IpDetails | null

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

      const res = await axios.post(
        env.PUBLIC_RADIO_LIST, {}, { timeout: 120000, headers: { AuthorizationKey: authKey } }
      )
      const data = (await res.data) as ExtraDataMusicData
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

{#if response.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Radio Stations in {ipDetails?.city ?? 'your city'}</h3>

  <div class="overflow-x-auto flex scrollbar-hide">
    {#each Array(15) as _, index (index)}
      <div class="flex-none py-6 px-1 first:pl-2 last:pr-3">
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="w-[16rem] h-[14rem] bg-gray-400 animate-pulse rounded-lg" />
        </div>
      </div>
    {/each}
  </div>
{:else if response.type == ResponseDataEnum.SUCCESS}
  {#if response.data.resultOne.length > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Radio Stations in {ipDetails?.city ?? 'your city'}</h3>
    <div class="overflow-x-auto flex scrollbar-hide">
      {#each response.data.resultOne as item}
        <RadioStationItems musicData={item} />
      {/each}
    </div>
  {:else}
    <center class="w-full">
      <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Radio Stations in {ipDetails?.city ?? 'your city'}</h3>
      <h3 class="text-white urbanist-light text-sm md:text-xl mx-2 md:mx-4 mt-4">No Radio Stations found in your city</h3>
    </center>
  {/if}
{:else}
  <div></div>
{/if}

{#if response.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Radio Stations in {ipDetails?.country ?? 'your country'}</h3>
  <div class="overflow-x-auto flex scrollbar-hide">
    {#each Array(15) as _, index (index)}
      <div class="flex-none py-6 px-1 first:pl-2 last:pr-3">
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="w-[16rem] h-[14rem] bg-gray-400 animate-pulse rounded-lg" />
        </div>
      </div>
    {/each}
  </div>
{:else if response.type == ResponseDataEnum.SUCCESS}
  {#if response.data.resultTwo.length > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Radio Stations in {ipDetails?.country ?? 'your country'}</h3>
    <div class="overflow-x-auto flex scrollbar-hide">
      {#each response.data.resultTwo as item}
        <RadioStationItems musicData={item} />
      {/each}
    </div>
  {:else}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Radio Stations in {ipDetails?.country ?? 'your country'}</h3>

    <center class="w-full">
      <h3 class="text-white urbanist-light text-sm md:text-xl mx-2 md:mx-4 mt-4">No Radio Stations found in your country</h3>
    </center>
  {/if}
{:else}
  <div></div>
{/if}
