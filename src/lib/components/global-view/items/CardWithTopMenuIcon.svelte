<script lang="ts">
  import { openSongDialog, playSongZene } from '$lib/utils/f'
  import type { MusicData } from '../../../../domain/local/entities/MusicData'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'

  export let musicData: MusicData
  export let list: MusicData[]
</script>

<button class="p-2 rounded-lg shadow-lg cursor-pointer" on:click|stopPropagation={() => playSongZene(musicData, list)}>
  <div class="relative cursor-pointer">
    <img src={musicData.thumbnail} alt={musicData.name} class="w-96 rounded-lg object-cover" />
    <div class="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-bl from-maincolor to-transparent"></div>
    <button on:click|stopPropagation={() => openSongDialog(musicData)} class="absolute top-2 right-2 size-6 cursor-pointer"><img src={MenuIcon} alt="menu" /></button>
  </div>
  <p class="text-white urbanist-semibold mt-3 text-base text-center w-full truncate line-clamp-2">{musicData.name}</p>
  <p class="text-white urbanist-thin mt-1 text-center w-full truncate line-clamp-2">{musicData.artists}</p>
</button>