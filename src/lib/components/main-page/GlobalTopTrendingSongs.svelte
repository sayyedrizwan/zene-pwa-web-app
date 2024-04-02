<script lang="ts">
  import { splitArrayIntoChunks } from '$lib/utils/Utils'
  import { DataIndexDS, globalTrendingSongsArtists, indexDB, isAPICachedForADay } from '$lib/utils/indexd'
  import axios from 'axios'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import type { MusicData, MusicDataList } from '../../../domain/local/entities/MusicData'
  import { env } from '$env/dynamic/public'
  import { onMount } from 'svelte'
  import { openSongDialog, playSongZene } from '$lib/utils/f'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'

  export let authKey: string
  export let topSongsCountry: MusicData[]

  let response: ResponseData<MusicData[] | null> = { type: ResponseDataEnum.EMPTY }

  async function topGlobalSongs() {
    response = { type: ResponseDataEnum.LOADING }

    const cacheDB = new DataIndexDS<MusicDataList>(globalTrendingSongsArtists, indexDB)
    const cacheRecords: any = await cacheDB.retrieveFromIndexedDB()

    try {
      if (cacheRecords.length > 0)
        if (isAPICachedForADay(cacheRecords[0].length, `t_s_l`)) {
          const records = cacheRecords[0] as MusicDataList
          if (records.results?.length ?? 0 > 0) {
            topSongsCountry = records?.results ?? []
            response = { type: ResponseDataEnum.SUCCESS, data: records?.results ?? [] }
            return
          }
        }

      const res = await axios.post(env.PUBLIC_TOP_GLOBAL_SONGS, {}, { headers: { AuthorizationKey: authKey } })
      const data = (await res.data) as MusicDataList
      topSongsCountry = data?.results ?? []
      response = { type: ResponseDataEnum.SUCCESS, data: data?.results ?? [] }
      localStorage.setItem(`t_s_l`, Date.now().toString())
      cacheDB.deleteAllRecords()
      cacheDB.saveToIndexedDB(data)
    } catch (error) {
      cacheDB.deleteAllRecords()
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    topGlobalSongs()
  })
</script>

{#if response.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Global top trending songs</h3>
  <div class="flex overflow-x-auto w-full scrollbar-hide mt-2">
    {#each Array(15) as _, index (index)}
      <div class="p-2">
        <div class="relative w-80 h-[8rem] rounded-lg bg-gray-400 animate-pulse" />
      </div>
    {/each}
  </div>
{:else if response.type == ResponseDataEnum.SUCCESS}
  {#if response.data?.length ?? 0 > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Global top trending songs</h3>
    <div class="flex overflow-x-auto w-full scrollbar-hide mt-2">
      {#each splitArrayIntoChunks(response?.data ?? [], 3) as item}
        <div>
          {#each item as songs}
            <button class="p-2" on:click|stopPropagation={() => playSongZene(songs, response.type == ResponseDataEnum.SUCCESS ? response?.data ?? null : null)}>
              <div class="w-80 h-[8rem] rounded-xl bg-lightblack flex justify-center items-center">
                <img src={songs?.thumbnail} alt={songs?.name} class="size-[7rem] ps-3 py-3" referrerpolicy="no-referrer" />
                <div class="w-full m-3">
                  <p class="text-white urbanist-semibold text-base text-start line-clamp-2">{songs?.name}</p>
                  <p class="text-white urbanist-thin text-base text-start line-clamp-2">{songs?.artists}</p>
                </div>
                <div class="p-2">
                  <button on:click|stopPropagation={() => openSongDialog(songs)}><img src={MenuIcon} class="size-9" alt="menu" /> </button>
                </div>
              </div>
            </button>
          {/each}
        </div>
      {/each}
    </div>
  {/if}
{/if}
