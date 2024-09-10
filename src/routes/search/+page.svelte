<script lang="ts">
  import { onMount } from "svelte";
  import type { MusicData } from "../-api-/ApiService/model/MusicData";
  import { sendMusicData } from "$lib/utils/Utils";

  export let data: any

  let videosLists: MusicData[] = [];
  let songsLists: MusicData[] = [];

  onMount(() => {
    try {
      videosLists = data.videos as MusicData[];
      songsLists = data.songs as MusicData[];
    } catch (error) {
      error;
    }
  })

</script>

<svelte:head>
  <title>Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>

<br/><br/><br/><br/>
<center>
  <p class="mt-4 text-2xl leading-7 text-white ms-4 urbanist-bold">{data.search}</p>
</center>


{#if videosLists.length > 0}
<p class="mt-4 text-xl leading-7 text-white ms-4 urbanist-semibold">Videos you may like</p>

<div class="relative rounded-xl overflow-auto">
  <div class="mx-auto shadow-xl min-w-0">
    <div class="overflow-x-auto flex">
      {#each videosLists as videos}
        <button class="flex-none py-6 px-3 first:pl-6 last:pr-6 cursor-pointer" on:click={() => sendMusicData(videos)}>
          <div class="flex flex-col items-center justify-center gap-3 w-[40vh]">
            <img class="w-[37vh] h-15 rounded-md" src={`https://i.ytimg.com/vi/${videos.extra}/hq720.jpg`} alt={videos.name.toString()} />
            <p class="text-white text-base font-medium urbanist-regular line-clamp-1 text-center">{videos.name}</p>
            <p class="text-white text-sm font-medium -translate-y-2 line-clamp-1 text-center">{videos.artists}</p>
          </div>
        </button>
      {/each}
    </div>
  </div>
</div>
{/if}

<br/>
<br/>


<br /><br /><br /><br />

{#if songsLists.length > 0}
  <p class="mt-4 text-xl leading-7 text-white ms-4 urbanist-semibold">Songs</p>

  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
    {#each songsLists as songs}
      <button class="flex-none py-6 px-3 first:pl-6 last:pr-6 cursor-pointer" on:click={() => sendMusicData(songs)}>
        <div class="flex flex-col items-center justify-center gap-3">
          <img class="rounded-md" src={songs.thumbnail.toString()} alt={songs.name.toString()} referrerpolicy="no-referrer" />
          <p class="text-white text-base font-medium urbanist-regular line-clamp-1 text-center">{songs.name}</p>
          <p class="text-white text-sm font-medium -translate-y-2 line-clamp-1 text-center">{songs.artists}</p>
        </div>
      </button>
    {/each}
  </div>
{/if}
