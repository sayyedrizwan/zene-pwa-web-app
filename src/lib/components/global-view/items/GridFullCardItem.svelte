<script lang="ts">
  import { openSongDialog, playSongZene } from '$lib/utils/f'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'
  import type { MusicDataList } from '../../../../domain/local/entities/MusicData'

  export let results: MusicDataList
  export let bg: string = "bg-maincolor"
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
  {#each results.results ?? [] as songs}
    <button class="p-2" on:click|stopPropagation={() => playSongZene(songs)}>
      <div class={`w-full h-[8rem] rounded-xl ${bg} bg-opacity-60 flex justify-center items-center`}>
        <img src={songs?.thumbnail} alt={songs?.name} class="size-[7rem] ps-3 py-3" referrerpolicy="no-referrer" />
        <div class="w-full m-3">
          <p class="text-white urbanist-semibold text-base text-start">{songs?.name}</p>
          <p class="text-white urbanist-thin text-base text-start">{songs?.artists}</p>
        </div>
        <div class="p-2">
          <button on:click|stopPropagation={() => openSongDialog(songs)}><img src={MenuIcon} class="size-9" alt="menu" /> </button>
        </div>
      </div>
    </button>
  {/each}
</div>
