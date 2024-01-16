<script lang="ts">
  import { onMount } from 'svelte'
  import { env } from '$env/dynamic/public'
  import PlayIcon from '$lib/assets/img/ic_play.svg'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'
  import { type ResponseData, ResponseDataEnum } from '../../../domain/RequestEnumClass'
  import type { TopSongsMusicResults } from '../../../domain/local/entities/TopSongsMusic'
  import { openSongDialog } from '$lib/utils/f'
  import { DataIndexDS, dbName, isAPICached, tableNameIndexedDB } from '$lib/utils/indexd'

  export let authKey: string

  let response: ResponseData<TopSongsMusicResults> = { type: ResponseDataEnum.EMPTY }

  async function topSongs() {
    response = { type: ResponseDataEnum.LOADING }

    try {
      const cacheDB = new DataIndexDS<TopSongsMusicResults>(dbName, tableNameIndexedDB)
      const cacheRecords : any =  await cacheDB.retrieveFromIndexedDB()
      console.log(cacheRecords)
      if(cacheRecords.length > 0) if (isAPICached((cacheRecords?.[0] as any)?.music.length, `t_l_s_t`)) {
        const records = cacheRecords?.[0] as TopSongsMusicResults
        response = { type: ResponseDataEnum.SUCCESS, data: records }
        return
      }

      const res = await fetch(env.PUBLIC_TOP_LISITING_SONGS, {
        method: 'POST',
        headers: { AuthorizationKey: authKey },
      })
      const data = await res.json()
      response = { type: ResponseDataEnum.SUCCESS, data: data }
      localStorage.setItem(`t_l_s_t`, Date.now().toString())
      cacheDB.deleteAllRecordsAndSave(data)
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    topSongs()
  })
</script>

<h3 class="text-white urbanist-semibold text-2xl md:text-3xl ms-2 md:ms-4 mt-7">Discover the Currently <br />Most Playing Songs on Zene</h3>

<div class="overflow-x-auto flex scrollbar-hide">
  {#if response.type == ResponseDataEnum.LOADING}
    {#each Array(6) as _, index (index)}
      <div class="flex-none py-6 px-1 first:pl-2 last:pr-3">
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="w-[16rem] h-[22rem] bg-gray-400 animate-pulse rounded-lg" />
        </div>
      </div>
    {/each}
  {:else if response.type == ResponseDataEnum.ERROR}
    <h1>{response.type}</h1>
  {:else if response.type == ResponseDataEnum.SUCCESS}
    {#each response.data.music as item}
      <div class="flex-none py-6 px-1 first:pl-2 last:pr-3">
        <div class="flex flex-col items-center justify-center gap-2 cursor-pointer">
          <div class={`relative w-[16rem] h-[22rem] bg-black rounded-lg`}>
            <img src={item.artistsImg} alt={item.music?.artists} class="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
            <div class="absolute top-0 left-0 w-full h-full rounded-lg bg-opacity-60 md:bg-opacity-30 bg-maincolor hover-animation" />
            <div class="absolute top-0 left-0 w-full h-full rounded-lg md:bg-opacity-10 md:bg-maincolor md:hover:bg-opacity-50 hover-animation">
              <p class="text-white urbanist-thin text-sm mt-2 ms-2">{item.music?.artists}</p>
              <p class="text-white urbanist-semibold text-xl ms-1.5">{item.music?.name}</p>
              <div class="flex items-center mt-2 ms-1">
                <img src={PlayIcon} class="size-5" alt="play" />
                <p class="text-white urbanist-regular text-sm">{item.listeners} Listeners</p>
              </div>

              <div class="absolute bottom-0 left-0 flex p-3 w-full">
                <button on:click={() => openSongDialog(item?.music)}><img src={MenuIcon} class="size-9" alt="menu" /></button>
                <div class="w-full" />
                <img src={item.music?.thumbnail} alt={item.music?.artists} referrerpolicy="no-referrer" class="rounded-full size-10 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  {:else}
    <div></div>
  {/if}
</div>
