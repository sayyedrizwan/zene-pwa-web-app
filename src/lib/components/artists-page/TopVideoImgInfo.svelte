<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import { env } from '$env/dynamic/public'
  import axios from 'axios'

  export let key: string
  export let artistsInfo: ArtistsInfoData

  let videoTime: NodeJS.Timeout | null = null

  let response: ResponseData<string | null> = { type: ResponseDataEnum.EMPTY }

  function keepCheckingVideo() {
    const video = document.getElementById('artistsVid') as HTMLVideoElement
    if (video == null) return

    if (video.controls == true) window.location.reload()

    const currentTime = video.currentTime
    const duration = video.duration

    if (duration > 0) {
      const quarterDuration = duration * 0.25

      if (currentTime < quarterDuration) {
        const targetTime = duration * 0.3
        video.currentTime = targetTime
      }

      const remainingSeconds = video.duration - video.currentTime
      if (remainingSeconds - 10 <= 0) {
        const targetTime = duration * 0.3
        video.currentTime = targetTime
      }
    }
  }

  async function artistsVideo() {
    response = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios.get(env.PUBLIC_SEARCH_ARTISTS_TOP_VIDEO, { headers: { AuthorizationKey: key, name: artistsInfo.name } })
      const videoId = await res.data
      if (String(videoId).trim() === '') response = { type: ResponseDataEnum.SUCCESS, data: null }
      else response = { type: ResponseDataEnum.SUCCESS, data: videoId }

      // videoTime = setInterval(keepCheckingVideo, 1000)
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    artistsVideo()
  })

  onDestroy(() => {
    if (videoTime != undefined) clearInterval(videoTime)
  })
</script>

<div class="relative">
  {#if response.type == ResponseDataEnum.SUCCESS}
    {#if response?.data != null}
      <div class="video-background relative">
        <iframe
          class="w-screen h-[80vh]"
          src={`https://www.youtube.com/embed/${response.data}?autoplay=1&mute=1&showinfo=1&autohide=1&rel=0&controls=0&modestbranding=1&loop=1`}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="artists video"
          referrerPolicy="origin"
        >
        </iframe>
        <div class="absolute top-0 left-0 w-screen h-[100vh] bg-gray-600 bg-opacity-5 cursor-pointer"></div>
      </div>
    {:else}
      <img class="absolute top-0 left-0 w-full object-cover h-[60vh] md:h-[80vh]" src={artistsInfo.image} alt={artistsInfo.name} />
    {/if}
  {:else}
    <img class="absolute top-0 left-0 w-full object-cover h-[60vh] md:h-[80vh]" src={artistsInfo.image} alt={artistsInfo.name} />
  {/if}
</div>
