<script lang="ts">
  import type { MusicData } from '../../../domain/local/entities/MusicData'
  import { openSongDialog } from '$lib/utils/f'
  import MenuIcon from '$lib/assets/img/ic_menu.svg'

  export let musicData: MusicData
</script>

<div class="flex-none py-6 px-1 first:pl-2 last:pr-3">
  <div class="flex flex-col items-center justify-center gap-2 cursor-pointer">
    <div class={`relative w-[16rem] h-[14rem] bg-maincolor rounded-lg p-3`}>
      <button on:click={() => openSongDialog(musicData)}><img src={MenuIcon} class="size-6" alt="menu" /></button>
      <div class="flex flex-1 h-[10rem] justify-center items-center">
        <div class="m-auto flex-col justify-center items-center">
          <center>
            <p class="text-white urbanist-semibold text-base ms-1.5">{musicData.name}</p>
            <p class="text-white urbanist-thin text-sm ms-1.5">{musicData.artists}</p>
          </center>
        </div>
      </div>
    </div>
  </div>
</div>
