<script lang="ts">
  import { durationToTime, notificationAlertListener, playSongZene } from '$lib/utils/f'
  import type { APManager } from '$lib/utils/p/s'
  import PLAY_ICON from '$lib/assets/img/ic_play.svg'
  import PAUSE_ICON from '$lib/assets/img/ic_pause.svg'
  import NEXT_ICON from '$lib/assets/img/ic_next.svg'
  import PREVIOUS_ICON from '$lib/assets/img/ic_previous.svg'
  import DURATION_FORWARD_ICON from '$lib/assets/img/go-forward-5sec.svg'
  import DURATION_BACKWORDS_ICON from '$lib/assets/img/go-backward-5sec.svg'
  import { MusicType } from '../../../../domain/local/entities/MusicData'
  import type { MusicPlayerData } from '../../../../domain/local/entities/MusicPlayerData'
    import { wait } from '$lib/utils/indexd'

  export let musicData: MusicPlayerData | null
  export let audioPlayer: APManager
  export let currentDuration: number
  export let totalDuration: number
  export let isPlaying: Boolean
  export let isBuffering: Boolean

  function inputHandler(e: Event) {
    audioPlayer.changeSongDuration((e.target as any)?.value)
  }

  function playPause() {
    audioPlayer.playOrPause()
  }

  function seekBack() {
    audioPlayer.seekBackward(5)
  }

  function seekForward() {
    audioPlayer.seekForward(5)
  }

  async function goToNextSong() {
    const musicDataItem = musicData?.lists.findIndex(v => musicData?.m.songId == v.songId)
    
    try {
      playSongZene(musicData?.lists[musicDataItem! + 1]!, [])
      await wait(500)
      playSongZene(musicData?.lists[musicDataItem! + 1]!, musicData?.lists)
    } catch (error) {
      notificationAlertListener('No Song', 'No Next Song Found in List.', null)
    }
  }

  async function goToPreviousSong() {
    const musicDataItem = musicData?.lists.findIndex(v => musicData?.m.songId == v.songId)
    
    try {
      playSongZene(musicData?.lists[musicDataItem! - 1]!, [])
      await wait(500)
      playSongZene(musicData?.lists[musicDataItem! - 1]!, musicData?.lists)
    } catch (error) {
      notificationAlertListener('No Song', 'No Previous Song Found in List.', null)
    }
  }
</script>

<div>
  <div class="flex mt-6">
    {#if musicData?.m?.type == MusicType.MUSIC}
      <div class="w-full mx-2 md:mx-8 flex">
        <p class="text-white urbanist-regular text-base md:text-lg">{durationToTime(currentDuration)}</p>
        <div class="w-full mx-3 cursor-pointer md:m-0.5 md:mx-3">
          <input type="range" min={`${0}`} max={`${totalDuration}`} value={`${currentDuration}`} on:input={inputHandler} />
        </div>

        <p class="text-white urbanist-regular text-base md:text-lg">{durationToTime(totalDuration)}</p>
      </div>
    {/if}
  </div>

  <div class="flex justify-center mt-6 w-full px-2 md:px-8 items-center">
    <div class="w-9/12 md:w-2/4 flex {musicData?.m?.type == MusicType.MUSIC ? 'justify-between' : 'justify-center'}">
      {#if musicData?.m?.type == MusicType.MUSIC}
        <button on:click|stopPropagation={goToPreviousSong}><img src={PREVIOUS_ICON} alt="PREVIOUS" class="size-7" /></button>
        <button on:click|stopPropagation={seekBack}><img src={DURATION_BACKWORDS_ICON} alt="PREVIOUS DURATION" class="size-8" /></button>
      {/if}

      {#if isBuffering === true}
        <svg class="animate-spin size-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      {:else}
        <button on:click|stopPropagation={playPause}><img src={isPlaying ? PAUSE_ICON : PLAY_ICON} alt="state" class="size-10" /> </button>
      {/if}

      {#if musicData?.m?.type == MusicType.MUSIC}
        <button on:click|stopPropagation={seekForward}> <img src={DURATION_FORWARD_ICON} alt="FORWARDS DURATION" class="size-8" /></button>

        <button on:click|stopPropagation={goToNextSong}><img src={NEXT_ICON} alt="PREVIOUS" class="size-7" /></button>
      {/if}
    </div>
  </div>
</div>
