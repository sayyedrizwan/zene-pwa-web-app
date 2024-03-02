<script lang="ts">
  import { artistsSplitToHTMLString } from '$lib/utils/f'
  import { MusicPlayerPlayingStatus, type MusicPlayerData, type ResponseMusicPlayerPlayingStatus } from '../../../../domain/local/entities/MusicPlayerData'

  export let musicData: MusicPlayerData | null
  export let musicPlayerPlayingStatus: ResponseMusicPlayerPlayingStatus
</script>

<div class="w-full flex justify-center items-center mt-32">
  <center>
    {#if musicPlayerPlayingStatus.type == MusicPlayerPlayingStatus.LYRICS_VIDEO}
      <iframe
        class="size-72 md:size-96"
        src={`https://www.youtube.com/embed/${musicPlayerPlayingStatus.data}?autoplay=1&mute=0&showinfo=1&autohide=1&rel=0&controls=1&modestbranding=1&loop=1`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="song video"
        referrerPolicy="origin"
      >
      </iframe>
    {:else if musicPlayerPlayingStatus.type == MusicPlayerPlayingStatus.VIDEO}
      <iframe
        class="size-72 md:size-96"
        src={`https://www.youtube.com/embed/${musicPlayerPlayingStatus.data}?autoplay=1&mute=0&showinfo=1&autohide=1&rel=0&controls=1&modestbranding=1&loop=1`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="song video"
        referrerPolicy="origin"
      >
      </iframe>
    {:else}
      <img src={musicData?.m.thumbnail} alt={musicData?.m.name} class="size-72 md:size-96" />
    {/if}

    <h2 class="text-white urbanist-bold text-base md:text-xl mt-5">{musicData?.m.name}</h2>

    <div class="flex flex-wrap justify-center items-center w-full">
      {@html artistsSplitToHTMLString(musicData?.m?.artists ?? '')}
    </div>
  </center>
</div>
