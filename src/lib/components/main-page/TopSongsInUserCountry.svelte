<script lang="ts">
  import { DataIndexDS, indexDB, isAPICachedForADay, trendingSongsInCountryCache } from '$lib/utils/indexd'
  import { onMount } from 'svelte'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import type { IpDetails } from '../../../domain/local/entities/IpDetails'
  import type { MusicDataList } from '../../../domain/local/entities/MusicData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import { openSongDialog } from '$lib/utils/f'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'

  export let authKey: string
  export let ipDetails: IpDetails | null

  let response: ResponseData<MusicDataList> = { type: ResponseDataEnum.EMPTY }

  async function topSongs() {
    response = { type: ResponseDataEnum.LOADING }

    try {
      const cacheDB = new DataIndexDS<MusicDataList>(trendingSongsInCountryCache, indexDB)
      const cacheRecords: any = await cacheDB.retrieveFromIndexedDB()


      if (cacheRecords.length > 0){
        if (isAPICachedForADay((cacheRecords?.[0] as any)?.results.length, `t_c_s_l`)) {
          const records = cacheRecords?.[0] as MusicDataList
          response = { type: ResponseDataEnum.SUCCESS, data: records }
          return
        }
}
      const res = await axios.post(env.PUBLIC_TOP_SONGS_IN_COUNTRY, {
        timeout: 60000,
        headers: { AuthorizationKey: authKey },
      })
      const data = (await res.data) as MusicDataList
      response = { type: ResponseDataEnum.SUCCESS, data: data }
      localStorage.setItem(`t_c_s_l`, Date.now().toString())
      cacheDB.deleteAllRecordsAndSave(data)
      cacheDB.saveToIndexedDB(data)
    } catch (error) {
      console.log(error)
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    topSongs()
  })
</script>

{#if response.type == ResponseDataEnum.LOADING || response.type == ResponseDataEnum.SUCCESS}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Top Songs in {ipDetails?.country ?? 'your country'}</h3>
{/if}

<div class="mt-2">
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
    {#if response.type == ResponseDataEnum.LOADING}
      {#each Array(15) as _, index (index)}
        <div class="p-2">
          <div class="relative w-full h-[8rem] rounded-lg bg-gray-400 animate-pulse" />
        </div>
      {/each}
    {:else if response.type == ResponseDataEnum.SUCCESS}
      {#each response.data.results as songs}
        <div class="p-2">
          <div class="w-full h-[8rem] rounded-xl bg-lightblack flex justify-center items-center">
            <img src={songs.thumbnail} alt={songs.name} class="size-[7rem] ps-3 py-3" referrerpolicy="no-referrer" />
            <div class="w-full m-3">
              <p class="text-white urbanist-semibold text-base text-start">{songs.name}</p>
              <p class="text-white urbanist-thin text-base text-start">{songs.artists}</p>
            </div>
            <div class="p-2">
              <button on:click={() => openSongDialog(songs)}><img src={MenuIcon} class="size-9" alt="menu" /> </button>
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>
