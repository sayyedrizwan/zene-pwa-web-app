<script lang="ts">
  import Footer from "$lib/components/item/Footer.svelte";
  import { openAppOrRedirect, sendMusicData } from "$lib/utils/Utils";
  import type { MusicData } from "../../-api-/ApiService/model/MusicData";

  export let data: any;
  let songInfo: MusicData | undefined = JSON.parse(data.data)

  function openURLApp(noFound : Boolean) {
    if(noFound) openAppOrRedirect(window.location.origin)
    else openAppOrRedirect(window.location.href)
  }
</script>

<svelte:head>
  {#if songInfo?.id == undefined}
    <title>No Song Found on Zene</title>
    <meta name="description" content="No Found" />
    <meta name="og:description" content="No Found" />
    <meta property="og:title" content="No Song Found on Zene" />
    <meta property="og:image" content="https://zenemusic.co/logo820.png" />
    <meta property="og:image:alt" content="Zene a Music app" />
    <link rel="canonical" href="https://zenemusic.co/s/{data.url}" />
    <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android" />
  {:else}
    <title>{songInfo.name} on Zene a Music app</title>
    <meta name="description" content="Song by {songInfo.artists}" />
    <meta name="og:description" content="Song by {songInfo.artists}" />
    <meta property="og:title" content="{songInfo.name} on Zene a Music app" />
    <meta property="og:image" content={songInfo.thumbnail.toString()} />
    <meta property="og:image:alt" content="{songInfo.name} on Zene a Music app" />
    <link rel="canonical" href="https://zenemusic.co/s/{data.url}" />
    <meta name="keywords" content="{songInfo.name}, {songInfo.artists} zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android" />
  {/if}
</svelte:head>

{#if songInfo?.id == undefined}
  <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <h2 class="text-center text-white text-3xl xl:text-5xl leading-snug poppins-semi-bold mt-6 mb-4">No Song Found</h2>
      <h2 class="text-center text-white text-sm xl:text-xl leading-snug poppins-regular lg:mt-2 mb-7">visit zene app on Android and IOS or Zene Web to stream music.</h2>

      <a href="/" class="border-solid border rounded-md text-base border-sky-500 bg-maincolor text-white px-5 py-3 hover:px-7 hover:py-4 hover-animation">Go to Zene Web</a>
    </div>
  </main>
{:else}
  <div class="flex flex-col justify-center items-center mt-24 mx-4 mb-72">
    <img src={songInfo.thumbnail.toString()} alt={songInfo.name.toString()} class="object-cover" />
    <h2 class="text-center text-white text-3xl xl:text-5xl leading-snug poppins-semibold mt-6 mb-2">{songInfo.name}</h2>
    <h2 class="text-center text-white text-sm xl:text-xl leading-snug poppins-regular lg:mt-2 mb-4">{songInfo.artists}</h2>

    <button class="border-solid border rounded-md text-base border-sky-500 bg-maincolor text-white px-5 py-3 hover:px-7 hover:py-4 hover-animation mt-7" on:click={() => sendMusicData(songInfo)}>Play</button>
  </div>

  <div class="my-10 flex justify-center items-center">
    <button class="border-solid border rounded-md text-base border-sky-500 bg-maincolor text-white px-5 py-3 hover:px-7 hover:py-4 hover-animation mt-7" on:click={() => openURLApp(false)}>Open in App</button>
  </div>
{/if}

<Footer />
