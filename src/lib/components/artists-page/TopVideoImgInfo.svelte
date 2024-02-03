<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import { env } from '$env/dynamic/public'
  import axios from 'axios'
  import ArrowLeft from '$lib/assets/img/ic_arrow_down.svg'
  import PinIcon from '$lib/assets/img/ic_pin.svg'
  import AirdropIcon from '$lib/assets/img/ic_airdrop.svg'
  import ShareIcon from '$lib/assets/img/ic_share.svg'
  import { playSongZene, shareATxt } from '$lib/utils/f'
  import { MusicData, MusicType } from '../../../domain/local/entities/MusicData'

  export let key: string
  export let artistsInfo: ArtistsInfoData

  let showFullDesc: Boolean = false
  let videoTime: NodeJS.Timeout | null = null
  let radioId: string | null = null
  let response: ResponseData<string | null> = { type: ResponseDataEnum.EMPTY }

  async function artistsVideo() {
    response = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios.get(env.PUBLIC_SEARCH_ARTISTS_TOP_VIDEO, { headers: { AuthorizationKey: key, name: artistsInfo.name } })
      const videoId = await res.data as string
      if (String(videoId).trim() === '') response = { type: ResponseDataEnum.SUCCESS, data: null }
      else response = { type: ResponseDataEnum.SUCCESS, data: videoId }
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  async function artistsRadio() {
    try {
      const res = await axios.post(env.PUBLIC_SEARCH_ARTISTS_RADIO, {}, { headers: { AuthorizationKey: key, name: artistsInfo.name } })
      const path = await res.data as string
      if (String(path).trim() === '') radioId = null
      else radioId = path
    } catch (error) {
      radioId = null
    }
  }

  onMount(async () => {
    artistsVideo()
    artistsRadio()
  })

  onDestroy(() => {
    if (videoTime != undefined) clearInterval(videoTime)
  })

  function shareArtists() {
    const title = `${artistsInfo?.name ?? 'Artists'} on Zene`
    shareATxt(title, window.location.href)
  }
  
  function startPlayingRadio() {
    if(radioId === null) {
      alert('No Radio Found')
      return
    }
    const m = new MusicData(`Radio for ${artistsInfo.name}`, artistsInfo.name ?? "", window.atob(radioId), artistsInfo.image ?? "", MusicType.MUSIC)
    playSongZene(m)
  }
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
      </div>
      <div class="absolute top-0 left-0 w-screen h-[100vh] bg-gray-950 bg-opacity-50 cursor-pointer"></div>
    {:else}
      <img class="object-cover w-screen h-[80vh]" src={artistsInfo.image} alt={artistsInfo.name} />
      <div class="absolute top-0 left-0 w-screen h-[80vh] bg-gray-950 bg-opacity-50 cursor-pointer"></div>
    {/if}
  {:else}
    <img class="object-cover w-screen h-[80vh]" src={artistsInfo.image} alt={artistsInfo.name} />
    <div class="absolute top-0 left-0 w-screen h-[80vh] bg-gray-950 bg-opacity-50 cursor-pointer"></div>
  {/if}
  <h3 class="text-white urbanist-semibold text-4xl md:text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{artistsInfo.name}</h3>
</div>

<p class={`text-white urbanist-semibold mt-28 mx-3 ${showFullDesc === true ? 'line-clamp-none' : 'line-clamp-4'} hover-animation`}>{artistsInfo.description}</p>

<center>
  <button on:click={() => (showFullDesc = !showFullDesc)}><img src={ArrowLeft} alt="arrow" class={`size-8 mt-2 ${showFullDesc === true ? 'rotate-180' : 'rotate-0'}`} /></button>
</center>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 leading-6 rounded-lg p-3 mt-7">
  <div class="p-4 rounded-lg shadow-lg bg-maincolor flex justify-center cursor-pointer">
    <img src={PinIcon} alt="pin" class="size-5" />
    <p class="text-white urbanist-semibold text-base ms-1">Pin</p>
  </div>
  <button class="p-4 rounded-lg shadow-lg bg-maincolor flex justify-center cursor-pointer" on:click={startPlayingRadio}>
    <img src={AirdropIcon} alt="pin" class="size-5" />
    <p class="text-white urbanist-semibold text-base ms-1">Radio</p>
  </button>
  <button class="p-4 rounded-lg shadow-lg bg-maincolor flex justify-center cursor-pointer col-span-full md:col-auto" on:click={shareArtists}>
    <img src={ShareIcon} alt="pin" class="size-5" />
    <p class="text-white urbanist-semibold text-base ms-1">Share</p>
  </button>
</div>
