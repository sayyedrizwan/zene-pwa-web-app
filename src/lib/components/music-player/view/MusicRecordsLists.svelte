<script lang="ts">
  import { deepListCompare } from '$lib/utils/Utils'
  import { artistsSplitToHTMLString, notificationAlertListener, playSongZene } from '$lib/utils/f'
  import { wait } from '$lib/utils/indexd'
  import { MusicType, type MusicData } from '../../../../domain/local/entities/MusicData'
  import { MusicPlayerPlayingStatus, type MusicPlayerData, type ResponseMusicPlayerPlayingStatus } from '../../../../domain/local/entities/MusicPlayerData'

  export let musicData: MusicPlayerData | null
  export let musicPlayerPlayingStatus: ResponseMusicPlayerPlayingStatus

  let tempMusicDataList: MusicData[] = []
  let currentSongPostion: number = 0

  function listsChanges() {
    if (deepListCompare(tempMusicDataList, musicData?.lists ?? [])) return
    tempMusicDataList = musicData?.lists ?? []

    musicData?.lists?.forEach((item, i) => {
      if (item.songId == musicData?.m.songId) currentSongPostion = i
    })
  }

  async function playSong(m: MusicData) {
    try {
      playSongZene(m, [])
      await wait(500)
      playSongZene(m, musicData?.lists)
    } catch (error) {
      notificationAlertListener('Error playing song.', 'Try again later..', null)
    }
  }

  $: musicData?.lists, listsChanges()
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
      {#if musicData?.m?.type == MusicType.RADIO}
        <h2 class="text-white urbanist-regular text-base md:text-xl mt-1">RADIO</h2>
      {:else}
        {@html artistsSplitToHTMLString(musicData?.m?.artists ?? '')}
      {/if}
    </div>
  </center>
</div>

{#if (musicData?.lists ?? []).length > 1}
  <div class="overflow-x-auto flex mt-5 scrollbar-hide">
    {#each musicData?.lists ?? [] as list, i}
      <button class="flex-none py-6 px-3 first:pl-6 last:pr-6 cursor-pointer" on:click={() => (list.songId != musicData?.m?.songId ? playSong(list) : null)}>
        <div class="flex flex-col items-center justify-center">
          <div class="container mx-auto size-28 relative">
            <img class="size-28 rounded-md" src={list.thumbnail} alt={list.name} />
            {#if currentSongPostion - 1 == i}
              <img src="/src/lib/assets/img/ic_next.svg" alt="PREVIOUS" class="bg-gray-600 rounded-md p-1.5 size-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-180" />
            {:else if currentSongPostion + 1 == i}
              <img src="/src/lib/assets/img/ic_next.svg" alt="PREVIOUS" class="bg-gray-600 rounded-md p-1.5 size-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            {/if}
          </div>

          {#if list.songId == musicData?.m?.songId}
            <div class="wave">
              <div class="boxContainer">
                <div class="box box1"></div>
                <div class="box box2"></div>
                <div class="box box3"></div>
                <div class="box box4"></div>
                <div class="box box5"></div>
              </div>
            </div>
          {:else}
            <p class="urbanist-regular w-28 text-base text-center text-white line-clamp-1 mt-3">{list.name}</p>
            <p class="urbanist-thin w-28 text-sm text-center text-white line-clamp-1">{list.artists}</p>
          {/if}
        </div>
      </button>
    {/each}
  </div>
{/if}
