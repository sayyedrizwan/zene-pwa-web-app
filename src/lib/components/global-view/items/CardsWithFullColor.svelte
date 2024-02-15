<script lang="ts">
  import { openSongDialog } from '$lib/utils/f'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'
  import type { MusicData } from '../../../../domain/local/entities/MusicData'

  export let item: MusicData
</script>

<button class="p-3 cursor-pointer">
  <div class="relative size-[13rem] md:size-[15rem] bg-black rounded-lg">
    <img class="absolute top-0 left-0 size-[13rem] md:size-[15rem] object-contain rounded-lg" src={item.thumbnail} alt={item.name} referrerpolicy="no-referrer" />
    <div class="absolute top-0 left-0 size-[13rem] md:size-[15rem] bg-maincolor rounded-lg bg-opacity-50"></div>
    <button on:click|stopPropagation={() => openSongDialog(item)} class="absolute top-2 right-2 size-6 cursor-pointer"><img src={MenuIcon} alt="menu" /></button>

    <div class="absolute bottom-2 left-2">
      <p class="text-white urbanist-semibold text-base ms-1.5 truncate text-left w-[12rem] md:w-[14rem]">{item.name}</p>
      <p class="text-white urbanist-thin text-base ms-1.5 truncate text-left w-[12rem] md:w-[14rem]">{item.artists}</p>
    </div>
  </div>
</button>
