<script lang="ts">
  import { browser } from "$app/environment";
  import Footer from "$lib/components/item/Footer.svelte";
  import { openAppOrRedirect, playlistsapi, z_my_playlists } from "$lib/utils/Utils";
  import { MUSICTYPE, type MusicData } from "../../-api-/ApiService/model/MusicData";
  import axios from "axios";
  import { gKEnc } from "$lib/utils/ad_ss";
  import TextStyleView from "$lib/components/item/TextStyleView.svelte";
  import { TextType } from "$lib/utils/model/TextType";
  import CardInfoView from "$lib/components/item/CardInfoView.svelte";
  import LoadingView from "$lib/components/item/LoadingView.svelte";

  export let data: any;
  let dataInfo: MusicData | undefined = JSON.parse(data.data);
  let songLists: MusicData[] = [];
  let showMoreButton = false;
  let isLoading = false;
  let pageData = 0;

  $: data.url, newValue();

  async function newValue() {
    if (browser) {
      if (dataInfo?.id != undefined) {
        if (String(data.id).includes("zene_p_")) {
          await moreLoadSongs();
        } else {
          const res = await axios.get(`/-api-/${playlistsapi}`, { params: { id: data.id, email: data.email }, headers: { auth: gKEnc() } });
          songLists = (await res.data).songs;
        }
      }
    }
  }

  function openURLApp(noFound: Boolean) {
    if (noFound) openAppOrRedirect(window.location.origin);
    else openAppOrRedirect(window.location.href);
  }

  async function moreLoadSongs() {
    try {
      isLoading = true;
      const res = await axios.get(`/-api-/${z_my_playlists}`, { params: { playlistID: data.id, page: pageData }, headers: { auth: gKEnc() } });
      const response = (await res.data) as MusicData[];
      showMoreButton = response.length > 25;
      pageData = +1;
      songLists = [...songLists, ...response];
      isLoading = false;
    } catch (error) {
      isLoading = false;
    }
  }
</script>

<svelte:head>
  {#if dataInfo?.id == undefined}
    <title>No Playlist Found on Zene</title>
    <meta name="description" content="No Found" />
    <meta name="og:description" content="No Found" />
    <meta property="og:title" content="No Song Found on Zene" />
    <meta property="og:image" content="https://zenemusic.co/logo820.png" />
    <meta property="og:image:alt" content="Zene a Music app" />
    <link rel="canonical" href="https://zenemusic.co/s/{data.url}" />
    <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android" />
  {:else}
    <title>{dataInfo.name} on Zene a Music app</title>
    {#if dataInfo.type == MUSICTYPE.ALBUMS}
      <meta name="description" content="{dataInfo.artists} • Enjoy it on Zene" />
      <meta name="description" content="{dataInfo.artists} • Enjoy it on Zene" />
    {:else}
      <meta name="description" content="Enjoy it on Zene" />
      <meta name="description" content="Enjoy it on Zene" />
    {/if}
    <meta property="og:title" content="{dataInfo.name} on Zene a Music app" />
    <meta property="og:image" content={dataInfo.thumbnail.toString()} />
    <meta property="og:image:alt" content="{dataInfo.name} on Zene a Music app" />
    <link rel="canonical" href="https://zenemusic.co/s/{data.url}" />
    <meta name="keywords" content="{dataInfo.name} zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android" />
  {/if}
</svelte:head>

{#if dataInfo?.id == undefined}
  <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <h2 class="text-center text-white text-3xl xl:text-5xl leading-snug poppins-semi-bold mt-6 mb-4">No Playlist Found</h2>
      <h2 class="text-center text-white text-sm xl:text-xl leading-snug poppins-regular lg:mt-2 mb-7">visit zene app on Android and IOS to stream music.</h2>

      <button class="border-solid border rounded-md text-base border-sky-500 bg-maincolor text-white px-5 py-3 hover:px-7 hover:py-4 hover-animation" on:click={() => openURLApp(true)}>Open Zene App</button>
    </div>
  </main>
{:else}
  <div class="flex flex-col justify-center items-center mt-24 mx-4 mb-20">
    <img src={dataInfo.thumbnail.toString()} alt={dataInfo.name.toString()} class="object-cover" />
    <h2 class="text-center text-white text-3xl xl:text-5xl leading-snug poppins-semi-bold mt-6 mb-2">{dataInfo.name}</h2>
    {#if dataInfo.type == MUSICTYPE.ALBUMS}
      <h2 class="text-center text-white text-sm xl:text-xl leading-snug poppins-regular lg:mt-2 mb-4">{dataInfo.artists}</h2>
    {:else if dataInfo.artists == "Playlist By User"}
      <h2 class="text-center text-white text-sm xl:text-xl leading-snug poppins-regular lg:mt-2 mb-4">{dataInfo.artists}</h2>
    {/if}
  </div>
  <div class="my-10 flex justify-center items-center">
    <button class="border-solid border rounded-md text-base border-sky-500 bg-maincolor text-white px-5 py-3 hover:px-7 hover:py-4 hover-animation mt-7" on:click={() => openURLApp(false)}>Open in App</button>
  </div>
{/if}
<TextStyleView textType={TextType.SMALL} title={"Songs"} />

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {#each songLists as m}
    <CardInfoView dynamicList={true} {m} />
  {/each}
</div>

<div class="w-full flex justify-center items-center">
  {#if String(data.id).includes("zene_p_")}
    {#if isLoading}
      <LoadingView />
    {/if}

    {#if showMoreButton && !isLoading}
      <div class="flex flex-row poppins-regular mt-4 text-white justify-center items-center">
        <button on:click={moreLoadSongs} class="border border-white rounded-3xl bg-charcoal cursor-pointer m-2">
          <h2 class="poppins-regular px-6 py-3 text-left">Load More</h2>
        </button>
      </div>
    {/if}
  {/if}
</div>

<Footer />
