<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import { env } from '$env/dynamic/public'

  export let key: string
  export let artistsInfo: ArtistsInfoData

  let videoTime: NodeJS.Timeout | null = null

  let response: ResponseData<Blob | null> = { type: ResponseDataEnum.EMPTY }

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
      const res = await fetch(env.PUBLIC_SEARCH_ARTISTS_TOP_VIDEO, { headers: { AuthorizationKey: key, name: artistsInfo.name } })
      const audioBlob = await res.blob()
      response = { type: ResponseDataEnum.SUCCESS, data: audioBlob }

      videoTime = setInterval(keepCheckingVideo, 1000)
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

<div class="relative h-[80vh]">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/e-ORhEE9VVg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="runeed"> 
  </iframe>
  <!-- {#if response.type == ResponseDataEnum.SUCCESS}
    {#if response?.data != null}
      <video id="artistsVid" class="absolute top-0 left-0 w-full object-cover h-[60vh] md:h-[80vh] bg-white" style="line-height: 0" controls={false} autoplay={true} muted={true} loop={true} controlsList="nodownload">
        <source src={URL.createObjectURL(response?.data ?? '')} />
      </video>
    {:else}
      <img class="absolute top-0 left-0 w-full object-cover h-[60vh] md:h-[80vh]" src={artistsInfo.image} alt={artistsInfo.name} />
    {/if}
  {:else}
    <img class="absolute top-0 left-0 w-full object-cover h-[60vh] md:h-[80vh]" src={artistsInfo.image} alt={artistsInfo.name} />
  {/if} -->
</div>
