<script lang="ts">
  import { onMount } from 'svelte'
  import { getDataOnMusicData, type MusicHistoryData } from '../../../domain/local/entities/MusicHistoryData'
  import { wait } from '$lib/utils/indexd'
  import { getAllPlayHistory } from '$lib/utils/p/shistory'
  import { openSongDialog, playSongZene } from '$lib/utils/f'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'
  import ArrowLeft from '$lib/assets/img/ic_arrow_left.svg'

  let isLoadingMoreBtn = false
  let page = 0
  let limit = 200
  let items: MusicHistoryData[] = []

  async function startPaging() {
    try {
      const data = await getAllPlayHistory(page * limit, limit)
      items = [...items, ...data]
      page += 1
      if (data.length < limit) isLoadingMoreBtn = false
      else isLoadingMoreBtn = true
    } catch (error) {
      alert('Error Reading the songs history')
    }
  }

  onMount(async () => {
    await wait(500)
    startPaging()
  })
</script>

{#if items.length > 0}
  {#each items as history}
    <button on:click|stopPropagation={() => playSongZene(getDataOnMusicData(history))}>
      <div class="flex-none px-1 first:pl-5 last:pr-5 overflow-y-hidden">
        <div class="flex flex-col items-center justify-center gap-2 cursor-pointer">
          <div class={`relative w-[16rem] h-[17rem] bg-maincolor rounded-lg p-3`}>
            <button on:click|stopPropagation={() => openSongDialog(getDataOnMusicData(history))}><img src={MenuIcon} class="absolute top-3 left-3 size-6" alt="menu" /></button>
            <div class="flex flex-1 h-[17rem] justify-center items-center">
              <div class="m-auto flex-col justify-center items-center h-[17rem] mt-4">
                <center>
                  <img src={getDataOnMusicData(history).thumbnail} alt={getDataOnMusicData(history).name} class="size-28 rounded-md" />
                  <p class="text-white urbanist-semibold text-base break-words w-[16rem] mt-2 line-clamp-2">{getDataOnMusicData(history).name}</p>
                  <p class="text-white urbanist-thin text-sm mt-2 line-clamp-1">{getDataOnMusicData(history).artists}</p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  {/each}
  {#if isLoadingMoreBtn === true}
    <button on:click|stopPropagation={startPaging}>
      <div class="flex-none px-1 first:pl-5 last:pr-5">
        <div class="flex flex-col items-center justify-center gap-2 cursor-pointer">
          <div class={`relative w-[16rem] h-[17rem] bg-maincolor rounded-lg p-3`}>
            <div class="flex flex-1 h-[17rem] justify-center items-center">
              <div class="m-auto flex-col justify-center items-center">
                <center>
                  <p class="text-white urbanist-semibold text-base break-words w-[16rem] line-clamp-2">Load More</p>
                  <img src={ArrowLeft} alt="search back arrow" class="w-6 rotate-180" />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  {/if}
{:else}
  <h3 class="text-center w-full text-white top-6">No song in your history</h3>
{/if}
