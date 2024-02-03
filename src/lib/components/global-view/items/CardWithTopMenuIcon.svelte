<script lang="ts">
  import { openSongDialog, playSongZene } from '$lib/utils/f'
  import type { MusicData } from '../../../../domain/local/entities/MusicData'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'

  export let musicData: MusicData
</script>

<button class="flex-none w-80 py-4 px-1 mx-3 justify-center items-center" on:click|stopPropagation={() => playSongZene(musicData)}>
  <div class="relative">
    <img src={musicData.thumbnail} alt={musicData.name} class="w-80 h-80 rounded-lg object-cover" />
    <div class="absolute top-0 left-0 w-80 h-80 rounded-lg bg-gradient-to-bl from-maincolor to-transparent"></div>
    <button on:click|stopPropagation={() => openSongDialog(musicData)}><img src={MenuIcon} class="absolute top-1 right-1 size-6" alt="menu" /> </button>
  </div>
  <p class="text-white urbanist-semibold text-base text-center w-full truncate">{musicData.name}</p>
  <p class="text-white urbanist-thin mt-1 text-center w-full truncate">{musicData.artists}</p>
</button>
