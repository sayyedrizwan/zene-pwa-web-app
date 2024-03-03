<script lang="ts">
  import { openSongDialog, playSongZene, shareATxt } from '$lib/utils/f'
  import 'animate.css'
  import PlayIcon from '$lib/assets/img/ic_play.svg'
  import ShareIcon from '$lib/assets/img/ic_share.svg'
  import CloseIcon from '$lib/assets/img/ic_close.svg'
  import InfoButtonItems from './items/InfoButtonItems.svelte'
  import type { MusicData } from '../../../domain/local/entities/MusicData'

  export let songMenuDialog: MusicData | null

  function close() {
    openSongDialog(null)
  }

  function play() {
    playSongZene(songMenuDialog, null)
    songMenuDialog = null
  }

  function share() {
    const title = `${songMenuDialog?.name ?? ''} on Zene`
    shareATxt(title, `https://zenemusic.co/s/${songMenuDialog!.songId!}`, songMenuDialog?.thumbnail)
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
        <InfoButtonItems title="Share" img={ShareIcon} click={share} />
        <InfoButtonItems title="Close" img={CloseIcon} click={close} />
      </div>
    </div>
  </div>
</button>
