<script lang="ts">
  import { latestFifteenSongsListener, topTenSongsListener } from '$lib/utils/p/shistory'
  import { onMount } from 'svelte'
  import type { MusicData } from '../../../domain/local/entities/MusicData'
  import { openSongDialog, playSongZene } from '$lib/utils/f'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import { SongsYouMayLikeCache, type SongsYouMayLike } from '../../../domain/local/entities/SongsYouMayLike'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import { splitArrayIntoChunks } from '$lib/utils/Utils'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'
  import { DataIndexDS, indexDB, songMayLikeSuggestionCache } from '$lib/utils/indexd'

  export let authKey: string
  export let topSongsCountry: MusicData[]
  export let youMayLike: SongsYouMayLike | null
  let interval: NodeJS.Timeout | null = null

  let response: ResponseData<SongsYouMayLike> = { type: ResponseDataEnum.EMPTY }

  async function intervalLike(music: string[]) {
    if (topSongsCountry.length == 0) return
    if(interval != null) clearInterval(interval)
    response = { type: ResponseDataEnum.LOADING }
     
    const cacheDB = new DataIndexDS<SongsYouMayLikeCache<SongsYouMayLike>>(songMayLikeSuggestionCache, indexDB)
    const cacheRecords: any = await cacheDB.retrieveFromIndexedDB()

    try {
     const list = music.length > 0 ? music : topSongsCountry.length > 8 ? topSongsCountry.slice(0, 8).map((m) => m.songId!) : topSongsCountry.map((m) => m.songId!) ?? []

      if (cacheRecords.length > 0) {
        const records = cacheRecords[0] as SongsYouMayLikeCache<SongsYouMayLike>
        if (JSON.stringify(records.cache) == JSON.stringify(list) && records.response.like.length > 0) {
          youMayLike = records.response
          response = { type: ResponseDataEnum.SUCCESS, data: records.response }
          return
        }
      }
      const res = await axios.post(env.PUBLIC_S_Y_M_L, list, { headers: { AuthorizationKey: authKey } })
      const data = (await res.data) as SongsYouMayLike
      youMayLike = data
      response = { type: ResponseDataEnum.SUCCESS, data: data }

      cacheDB.deleteAllRecords()
      cacheDB.saveToIndexedDB(new SongsYouMayLikeCache(list, data))
    } catch (error) {
      cacheDB.deleteAllRecords()
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  async function readMusic(music: string[]) {
    interval = setInterval(()=> intervalLike(music), 800)
  }

  document.addEventListener('onstartedapp', async () => {
    const lists = await latestFifteenSongsListener()
    readMusic(lists)
  })

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
  {#if (response?.data?.like ?? []).length > 0}
    <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Songs you may like</h3>

    <div class="flex overflow-x-auto w-full scrollbar-hide">
      {#each splitArrayIntoChunks(response.data.like, 2) as topItem}
        <div>
          {#each topItem as item}
            <button class="p-3 cursor-pointer" on:click|stopPropagation={() => playSongZene(item, response.type == ResponseDataEnum.SUCCESS ? response.data.like ?? null : null)}>
              <div class="relative size-[13rem] md:size-[15rem] bg-black rounded-lg">
                <img class="absolute top-0 left-0 size-[13rem] md:size-[15rem] object-contain rounded-lg" src={item.thumbnail} alt={item.name} referrerpolicy="no-referrer" />
                <div class="absolute top-0 left-0 size-[13rem] md:size-[15rem] bg-maincolor rounded-lg bg-opacity-50"></div>
                <button on:click|stopPropagation={() => openSongDialog(item)} class="absolute top-2 right-2 size-6 cursor-pointer"><img src={MenuIcon} alt="menu" /></button>

                <div class="absolute bottom-2 left-2">
                  <p class="text-white urbanist-semibold text-base ms-1.5 text-left w-[12rem] md:w-[14rem] line-clamp-2">{item.name}</p>
                  <p class="text-white urbanist-thin text-base ms-1.5 text-left w-[12rem] md:w-[14rem] line-clamp-2">{item.artists}</p>
                </div>
              </div>
            </button>
          {/each}
        </div>
      {/each}
    </div>
  {/if}
{/if}
