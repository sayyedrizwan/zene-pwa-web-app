<script lang="ts">
  import { artistsSplitToString, playSongZene } from '$lib/utils/f'
  import type { MusicData } from '../../../domain/local/entities/MusicData'

  export let data: any
  $: songInfo = data.info as MusicData
  $: artistsInfo = JSON.parse(data.artistsLists) as MusicData[]

  function playSong() {
    playSongZene(songInfo, null)
  }
</script>

<svelte:head>
  <title>{songInfo?.name == null ? 'No Song Found On Zene' : `${songInfo?.name} on Zene a Music app`}</title>
  <meta name="description" content={songInfo?.artists == null ? 'No Found' : `Listen to ${songInfo?.name} by ${songInfo?.artists} on Zene`} />
  <meta name="og:description" content={songInfo?.artists == null ? 'No Found' : `Listen to ${songInfo?.name} by ${songInfo?.artists} on Zene`} />
  <meta property="og:title" content={songInfo?.name == null ? 'No Song Found On Zene' : `${songInfo?.name} on Zene a Music app`} />
  <meta property="og:image" content={songInfo?.thumbnail == null ? '/logo820.png' : songInfo?.thumbnail} />
  <meta property="og:image:alt" content={`${songInfo?.name ?? ''} on Zene`} />
  <link rel="canonical" href={`https://zenemusic.co/s/${data.url}`} />
</svelte:head>

<div class="w-screen flex flex-col justify-center items-center">
  <img class="size-11/12 lg:size-1/3 object-contain rounded-lg" src={songInfo?.thumbnail == null ? '/logo820.png' : songInfo?.thumbnail} alt={songInfo?.name == null ? 'No Song Found' : songInfo?.name} />
  <h1 class="text-white urbanist-bold text-start text-2xl lg:text-5xl mt-11">{songInfo?.name == null ? 'No Song Found On Zene' : songInfo?.name}</h1>
  <div class="w-screen flex flex-wrap justify-center mt-3">
    {#each artistsSplitToString(artistsInfo) as artists}
      {#if artists.name == ',' || artists.name == '&'}
        <h3 class="text-white urbanist-regular text-base md:text-xl mr-2 {artists.name == '&' ? 'ml-2' : ''}">{artists.name}</h3>
      {:else}
        <a href="/a/{artists.songId}" class="text-white urbanist-thin text-sm md:text-base">
          <h3 class="text-white urbanist-regular text-base md:text-xl">{artists.name}</h3>
        </a>
      {/if}
    {/each}
  </div>

  {#if songInfo?.songId != null}
    <button class="p-4 rounded-lg shadow-lg bg-maincolor flex justify-center cursor-pointer col-span-full md:col-auto mt-8" on:click|stopPropagation={playSong}>
      <p class="text-white urbanist-semibold text-base mx-5">Play Song</p>
    </button>
  {/if}

  <div class="h-60" />
</div>
