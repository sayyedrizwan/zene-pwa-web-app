<script lang="ts">
  import type { MusicData } from '../../../domain/local/entities/MusicData'
  import ARROW_DOWN from '$lib/assets/img/ic_arrow_down.svg'
  import { shareATxt } from '$lib/utils/f'

  export let albumInfo: MusicData

  let isDescriptionFull: Boolean = true

  function shareAlbum() {
    const title = `${albumInfo?.name ?? 'Album'} Album on Zene`
    shareATxt(title, window.location.href, albumInfo.thumbnail)
  }
</script>

<div class="flex-none lg:flex w-full mt-16">
  <img src={albumInfo.thumbnail} alt={albumInfo.name} class="size-96 ms-7 rounded-xl shadow-sm shadow-gray-400" />
  <div class="h-96 lg:flex lg:justify-center lg:items-center mx-7">
    <div class="mt-11 lg:mt-0">
      <h2 class="text-white urbanist-semibold text-3xl lg:text-6xl">{albumInfo.name}</h2>
      <h4 class="text-white urbanist-semibold text-xl mt-2">{albumInfo.artists}</h4>
      <h6 class={`text-white urbanist-thin text-base mt-4 ${isDescriptionFull === true ? `line-clamp-4` : ``}`}>{albumInfo.songId}</h6>
      <div class="w-full flex justify-center items-center">
        {#if (albumInfo?.songId?.length ?? 0) > 4 === true}
          <button on:click={() => (isDescriptionFull = !isDescriptionFull)} class={`${isDescriptionFull === true ? `rotate-0` : `rotate-180`}`}>
            <img src={ARROW_DOWN} alt="arrow" class="size-6 md:size-8 m-5 translate-y-1" />
          </button>
        {/if}
      </div>

      <button class="p-4 rounded-lg shadow-lg bg-maincolor flex justify-center cursor-pointer col-span-full md:col-auto" on:click={shareAlbum}>
        <p class="text-white urbanist-semibold text-base mx-5">Share</p>
      </button>
    </div>
  </div>
</div>
