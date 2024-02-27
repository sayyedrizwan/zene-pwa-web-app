<script lang="ts">
  import { openSongDialog, playSongZene } from '$lib/utils/f'
  import 'animate.css'
  import PlayIcon from '$lib/assets/img/ic_play.svg'
  import InfoButtonItems from './items/InfoButtonItems.svelte'
  import type { MusicData } from '../../../domain/local/entities/MusicData'

  export let songMenuDialog: MusicData | null

  function close() {
    openSongDialog(null)
  }

  function play() {
    playSongZene(songMenuDialog)
    songMenuDialog = null
  }
</script>

<button on:touchmove|stopPropagation={close} on:touchstart|stopPropagation={close} on:click|stopPropagation={close} class="fixed top-0 left-0 right-0 h-full w-full z-50 bg-black bg-opacity-70 p-7 animate__animated animate__fadeIn">
  
  <div class="absolute w-screen left-0 top-24 flex flex-col justify-center items-center animate__animated animate__fadeIn animate__slow">
    <img src={songMenuDialog?.thumbnail} alt={songMenuDialog?.name} class="size-6/12 md:size-4/12 lg:size-2/12 self-center" />   
    <p class="text-white urbanist-semibold text-xl mt-3 text-start">{songMenuDialog?.name}</p>
    <p class="text-white urbanist-thin text-sm mt-1 text-start">{songMenuDialog?.artists}</p>
  </div>

  <div class="fixed top-0 left-0 right-0 h-full w-full animate__animated animate__fadeInUp">
    <div class="absolute left-3 bottom-7 right-3 md:left-1/2 md:bottom-7 md:transform md:-translate-x-1/2 h-40 md:h-52 w-auto md:w-2/4 bg-maincolor z-50 rounded-xl overflow-x-auto flex items-center">
      <div class="overflow-x-auto flex scrollbar-hide">
        <InfoButtonItems title="Play" img={PlayIcon} click={play} />
      </div>
    </div>
  </div>
</button>
