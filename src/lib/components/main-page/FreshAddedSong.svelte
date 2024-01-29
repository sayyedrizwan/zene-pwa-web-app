<script lang="ts">
  import { env } from '$env/dynamic/public'
  import { onMount } from 'svelte'
  import type { MusicDataList } from '../../../domain/local/entities/MusicData'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import { DataIndexDS, freshAddedCache, indexDB, isAPICached } from '$lib/utils/indexd'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'
  import { openSongDialog, playSongZene } from '$lib/utils/f'
  import axios from 'axios'

  export let authKey: string

  let response: ResponseData<MusicDataList> = { type: ResponseDataEnum.EMPTY }

  async function releaseSongs() {
    response = { type: ResponseDataEnum.LOADING }
    try {
      const cacheDB = new DataIndexDS<MusicDataList>(freshAddedCache, indexDB)
      const cacheRecords: any = await cacheDB.retrieveFromIndexedDB()

      if (cacheRecords.length > 0)
        if (isAPICached(cacheRecords[0].length, `f_a_s_l`)) {
          const records = cacheRecords[0] as MusicDataList
          response = { type: ResponseDataEnum.SUCCESS, data: records }
          return
        }

      const res = await axios.post(env.PUBLIC_NEW_RELEASE, {}, { timeout: 120000, headers: { AuthorizationKey: authKey } })
      const data = (await res.data) as MusicDataList
      response = { type: ResponseDataEnum.SUCCESS, data: data }
      localStorage.setItem(`f_a_s_l`, Date.now().toString())
      cacheDB.deleteAllRecords()
      cacheDB.saveToIndexedDB(data)
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    releaseSongs()
  })
</script>

{#if response.type == ResponseDataEnum.LOADING}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Fresh Added Songs</h3>
  <div class="flex overflow-x-auto w-full scrollbar-hide mt-2">
    {#each Array(15) as _, index (index)}
      <div class="p-2">
        <div class="relative w-80 h-[11rem] rounded-lg bg-gray-400 animate-pulse" />
      </div>
    {/each}
  </div>
{:else if response.type == ResponseDataEnum.SUCCESS}
  {#if (response.data.results ?? []).length > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Fresh Added Songs</h3>
    <div class="flex overflow-x-auto w-full scrollbar-hide mt-2">
      {#each response.data.results ?? [] as item}
        <button class="p-2" on:click|stopPropagation={() => playSongZene(item)}>
          <div class="w-80 h-[11rem] rounded-lg bg-lightblack flex">
            <div class="relative w-3/4 h-[11rem]">
              <p class={`text-white urbanist-semibold text-start ${String(item?.name).length > 15 ? 'text-sm' : 'text-2xl'} m-3`}>{item.name}</p>
              <p class="text-white urbanist-thin text-sm ms-3 text-start">{item.artists}</p>

              <button on:click|stopPropagation={() => openSongDialog(item)}><img src={MenuIcon} class="absolute bottom-3 left-2 size-6" alt="menu" /></button>
            </div>

            <img src={item.thumbnail} alt={item.name} class="s-1/4 p-4" referrerpolicy="no-referrer" />
          </div>
        </button>
      {/each}
    </div>
  {/if}
{/if}
