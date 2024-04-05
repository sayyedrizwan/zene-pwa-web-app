<script lang="ts">
  import { splitArrayIntoChunks } from '$lib/utils/Utils'
  import { openSongDialog, playSongZene } from '$lib/utils/f'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'
  import type { SongsYouMayLike } from '../../../domain/local/entities/SongsYouMayLike'

  export let youMayLike: SongsYouMayLike | null
</script>

{#if (youMayLike?.listen?.length ?? 0) > 0}
  <h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Songs you may like to listen</h3>

  {#each splitArrayIntoChunks(youMayLike?.listen ?? [], 4) as topItem}
    <div class="flex overflow-x-auto w-full scrollbar-hide gap-4 mt-5">
      {#each topItem as musicData}
        <button class="p-2 rounded-lg shadow-lg cursor-pointer w-56 md:w-96 mb-8"  on:click|stopPropagation={() => playSongZene(musicData, youMayLike?.listen ?? null)}>
          <div class="relative bottom-2 left-2 w-56 md:w-96">
            <img src={musicData.thumbnail} alt={musicData.name} class="size-56 md:size-96 rounded-lg object-cover" />
            <div class="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-bl from-maincolor to-transparent"></div>
            <button on:click|stopPropagation={() => openSongDialog(musicData)} class="absolute top-2 right-2 size-6 cursor-pointer"><img src={MenuIcon} alt="menu" /></button>
          </div>
          <p class="text-white urbanist-semibold mt-2 ms-3 text-base text-start w-full line-clamp-2">{musicData.name}</p>
          <p class="text-white urbanist-thin mt-1 ms-3 text-base text-start w-full line-clamp-2">{musicData.artists}</p>
        </button>
      {/each}
    </div>
  {/each}
{/if}
