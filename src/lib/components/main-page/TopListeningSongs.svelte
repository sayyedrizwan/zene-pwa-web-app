<script lang="ts">
  import { onMount } from 'svelte'
  import { env } from '$env/dynamic/public'
  import PlayIcon from '$lib/assets/img/ic_play.svg'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'
  import { type ResponseData, ResponseDataEnum } from '../../../domain/RequestEnumClass'
  import type { TopSongsMusicResults } from '../../../domain/local/entities/TopSongsMusic'

  export let authKey: string

  let response: ResponseData<TopSongsMusicResults> = { type: ResponseDataEnum.EMPTY }

  async function topSongs() {
    response = { type: ResponseDataEnum.LOADING }

    try {
      const res = await fetch(env.PUBLIC_TOP_LISITING_SONGS, {
        method: 'POST',
        headers: { AuthorizationKey: authKey, 'cache-control': 'public, max-age=31536000, immutable, no-store' },
      })
      const data = await res.json()
      response = { type: ResponseDataEnum.SUCCESS, data: data }
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    topSongs()
  })
</script>

<div class="md:bg-maincolor rounded-ss-lg w-full md:w-1/3 md:h-full md:fixed md:overflow-y-auto">
  <h3 class="text-white urbanist-semibold text-3xl ms-4 mt-7">Discover the Currently <br />Most Playing Songs on Zene</h3>

  <div class="overflow-x-auto flex scrollbar-hide">
    {#if response.type == ResponseDataEnum.LOADING}
      {#each Array(5) as _, index (index)}
        <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
          <div class="flex flex-col items-center justify-center gap-2">
            <div class="w-[16rem] h-[22rem] bg-gray-400 animate-pulse rounded-lg" />
          </div>
        </div>
      {/each}
    {:else if response.type == ResponseDataEnum.ERROR}
      <h1>{response.type}</h1>
    {:else if response.type == ResponseDataEnum.SUCCESS}
      {#each response.data.music as item}
        <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
          <div class="flex flex-col items-center justify-center gap-2 cursor-pointer">
            <div class={`relative w-[16rem] h-[22rem] bg-black rounded-lg`}>
              <img src={item.artistsImg} alt={item.music?.artists} class="absolute top-0 left-0 w-full h-full object-cover rounded-lg"/>
              <div class="absolute top-0 left-0 w-full h-full rounded-lg bg-opacity-60 md:bg-opacity-30 bg-maincolor hover-animation"/>
              <div class="absolute top-0 left-0 w-full h-full rounded-lg md:bg-opacity-10 md:bg-maincolor md:hover:bg-opacity-50 hover-animation">
                <p class="text-white urbanist-thin text-sm mt-2 ms-2">{item.music?.artists}</p>
                <p class="text-white urbanist-semibold text-xl ms-1.5">{item.music?.name}</p>
                <div class="flex items-center mt-2 ms-1">
                  <img src={PlayIcon} class="size-5" alt="play"/>
                  <p class="text-white urbanist-regular text-sm">{item.listeners} Listeners</p>
                </div>
              
                <div class="absolute bottom-0 left-0 flex p-3 w-full">
                <button><img src={MenuIcon} class="size-9" alt="menu"/></button>
                <div class="w-full" />
                <img src={item.music?.thumbnail} alt={item.music?.artists} referrerpolicy="no-referrer" class="rounded-full size-10 object-cover"/>
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
</div>
