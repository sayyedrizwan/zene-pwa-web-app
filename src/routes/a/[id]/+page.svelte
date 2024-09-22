<script lang="ts">
  import Footer from "$lib/components/item/Footer.svelte";
  import TextStyleView from "$lib/components/item/TextStyleView.svelte";
  import { TextType } from "$lib/utils/model/TextType";
  import ARROW_ICON from "$lib/assets/img/ic_arrow.svg";
  import { artistsdataapi, formatNumber, getLastOrSecondLastPart, openAppOrRedirect, sendMusicData } from "$lib/utils/Utils";
  import { ArtistsData, type ArtistsDataInfo } from "../../-api-/ApiService/model/ArtistsData";
  import { MusicData, MUSICTYPE } from "../../-api-/ApiService/model/MusicData";
  import CardInfoView from "$lib/components/item/CardInfoView.svelte";
  import { onMount } from "svelte";
  import axios from "axios";
  import { gKEnc } from "$lib/utils/ad_ss";
  import LoadingView from "$lib/components/item/LoadingView.svelte";
  import NewsViewItems from "$lib/components/item/NewsViewItems.svelte";
  import VideoInfoView from "$lib/components/item/VideoInfoView.svelte";
  import ArtistsInfoView from "$lib/components/item/ArtistsInfoView.svelte";
  import { browser } from "$app/environment";

  export let data: any;
  let info: ArtistsDataInfo | undefined = undefined;
  let infoData: ArtistsData | undefined = undefined;
  let showFullDesc = false;

  $: data.name, newValue();

  async function newValue() {
    if (browser) {
      info = JSON.parse(data.data);

      try {
        const res = await axios.post(`/-api-/${artistsdataapi}`, { name: info?.name }, { headers: { auth: gKEnc() } });
        infoData = await res.data;
      } catch (error) {
        infoData = new ArtistsData([], [], [], [], [], []);
      }
    }
  }

  function openURLApp(noFound: Boolean) {
    if (noFound) openAppOrRedirect(window.location.origin);
    else openAppOrRedirect(window.location.href);
  }

  function startRadio() {
    if (info?.radioID != null) {
      const randomIndex = Math.floor(Math.random() * info?.img.length);
      let music = new MusicData(`${info?.name}`, info?.name ?? "", info?.radioID, info?.img[randomIndex], MUSICTYPE.SONGS, "_radio_");
      sendMusicData(music);
    }
  }
</script>

<svelte:head>
  {#if info?.name == undefined}
    <title>No Artist Found on Zene</title>
    <meta name="description" content="No Found" />
    <meta name="og:description" content="No Found" />
    <meta property="og:title" content="No Song Found on Zene" />
    <meta property="og:image" content="https://zenemusic.co/logo820.png" />
    <meta property="og:image:alt" content="Zene a Music app" />
    <link rel="canonical" href="https://zenemusic.co/s/{data.url}" />
    <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android" />
  {:else}
    <title>{info?.name} on Zene a Music app</title>
    <meta name="description" content={(info.desc?.length ?? 0) > 120 ? info?.desc?.slice(0, 120) : info?.desc?.toString()} />
    <meta name="og:description" content={(info.desc?.length ?? 0) > 120 ? info?.desc?.slice(0, 120) : info?.desc?.toString()} />
    <meta property="og:title" content="{info?.name} on Zene a Music app" />
    <meta property="og:image" content={(info?.img.length ?? 0) > 0 ? info?.img[0].toString() : `https://www.zenemusic.co/logo820.png`} />
    <meta property="og:image:alt" content="{info?.name} on Zene a Music app" />
    <link rel="canonical" href="https://zenemusic.co/s/{data.url}" />
    <meta name="keywords" content="{data.name} zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android" />
  {/if}
</svelte:head>

{#if info?.name == undefined}
  <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <h2 class="text-center text-white text-3xl xl:text-5xl leading-snug poppins-semi-bold mt-6 mb-4">No Artists Found</h2>
      <h2 class="text-center text-white text-sm xl:text-xl leading-snug poppins-regular lg:mt-2 mb-7">visit zene app on Android and IOS or Zene Web to stream music.</h2>

      <a href="/" class="border-solid border rounded-md text-base border-sky-500 bg-maincolor text-white px-5 py-3 hover:px-7 hover:py-4 hover-animation">Go to Zene Web</a>
    </div>
  </main>
{:else}
  <div class="relative rounded-xl overflow-auto pt-32 w-full no-scrollbar">
    <div class="overflow-x-auto flex no-scrollbar">
      {#each info?.img ?? [] as img}
        <div class="flex-none px-2 first:pl-3 last:pr-3">
          <div class="flex flex-col items-center justify-center">
            <img class="h-[65vh] w-[45vh] object-cover" src={img.toString()} alt={info.name.toString()} referrerpolicy="no-referrer" loading="lazy" />
          </div>
        </div>
      {/each}
    </div>
  </div>


  <div class="my-10 flex justify-center items-center">
    <button class="border-solid border rounded-md text-base border-sky-500 bg-maincolor text-white px-5 py-3 hover:px-7 hover:py-4 hover-animation mt-7" on:click={() => openURLApp(false)}>Open in App</button>
  </div>

  <div class="pt-9">
    <TextStyleView textType={TextType.LARGE} title={info.name.toString()} />
  </div>

  <div class="pt-9 flex flex-col w-full justify-center items-center">
    <h3 class="px-3 text-base text-start text-white poppins-thin w-screen {showFullDesc ? `` : `line-clamp-5`}">{info.desc}</h3>

    <button on:click={() => (showFullDesc = !showFullDesc)}>
      <img src={ARROW_ICON} alt="arrow" class="size-7 mt-3 {showFullDesc ? `rotate-180` : `rotate-0`}" />
    </button>
  </div>

  <h3 class="text-base text-center text-white poppins-thin w-full my-11">Followed by {formatNumber(info.followers)}</h3>

  <div class="w-full flex justify-center items-center">
    <button on:click={startRadio} class="mt-8 xl:mt-12 px-12 py-5 hover:px-16 hover-animation text-lg poppins-regular text-white inline-block bg-maincolor rounded-xl">Start Radio</button>
  </div>

  <div class="flex flex-row overflow-x-auto no-scrollbar mt-14">
    {#each info?.socialMedia ?? [] as social}
      <div class="flex-none px-2 first:pl-3 last:pr-3">
        <a href={social.url} target="_blank">
          {#if !social.url?.toString().includes("or the url to your profile")}
            <div class="bg-gray-700 rounded-lg p-4">
              <h3 class="text-base text-start text-white poppins-regular w-full">{social.title == undefined || social.title == "" ? social.network : social.title}</h3>
              <h3 class="text-base text-start text-white poppins-thin w-full mt-4">/{getLastOrSecondLastPart(social.url ?? "")}</h3>
            </div>
          {/if}
        </a>
      </div>
    {/each}
  </div>

  {#if info?.topSongs.length ?? 0 > 0}
    <div class="h-28" />
    <TextStyleView textType={TextType.SMALL} title={"Top Songs"} />
    <div class="relative rounded-xl overflow-auto no-scrollbar">
      <div class="w-full shadow-xl">
        <div class="overflow-x-auto flex no-scrollbar">
          {#each info?.topSongs ?? [] as m}
            <CardInfoView dynamicList={false} {m} />
          {/each}
        </div>
      </div>
    </div>
  {/if}
{/if}

{#if infoData == undefined}
  <div class="w-full flex justify-center items-center">
    <LoadingView />
  </div>
{:else}
  {#if infoData.news.length > 0}
    <div class="h-28" />
    <TextStyleView textType={TextType.SMALL} title={"News"} />

    <div class="rounded-xl overflow-auto no-scrollbar">
      <div class="w-full shadow-xl">
        <div class="overflow-x-auto flex no-scrollbar gap-3">
          {#each infoData.news as m}
            <NewsViewItems {m} />
          {/each}
        </div>
      </div>
    </div>
  {/if}

  {#if infoData.videos.length > 0}
    <div class="h-28" />
    <TextStyleView textType={TextType.SMALL} title={"Videos"} />

    <div class="rounded-xl overflow-auto no-scrollbar">
      <div class="w-full shadow-xl">
        <div class="overflow-x-auto flex no-scrollbar gap-3">
          {#each infoData.videos as m}
            {#if m.type == MUSICTYPE.VIDEO}
              <VideoInfoView {m} />
            {/if}
          {/each}
        </div>
      </div>
    </div>
  {/if}

  {#if infoData.playlists.length > 0}
    <div class="h-28" />
    <TextStyleView textType={TextType.SMALL} title={"Playlists"} />

    <div class="rounded-xl overflow-auto no-scrollbar">
      <div class="w-full shadow-xl">
        <div class="overflow-x-auto flex no-scrollbar gap-3">
          {#each infoData.playlists as m}
            <CardInfoView dynamicList={false} {m} />
          {/each}
        </div>
      </div>
    </div>
  {/if}

  {#if infoData.albums.length > 0}
    <div class="h-28" />
    <TextStyleView textType={TextType.SMALL} title={"Albums"} />

    <div class="rounded-xl overflow-auto no-scrollbar">
      <div class="w-full shadow-xl">
        <div class="overflow-x-auto flex no-scrollbar gap-3">
          {#each infoData.albums as m}
            <CardInfoView dynamicList={false} {m} />
          {/each}
        </div>
      </div>
    </div>
  {/if}

  {#if infoData.songs.length > 0}
    <div class="h-28" />
    <TextStyleView textType={TextType.SMALL} title={"Songs"} />

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each infoData.songs as m}
        <CardInfoView dynamicList={true} {m} />
      {/each}
    </div>
  {/if}

  {#if infoData.artists.length > 0}
    <div class="h-28" />
    <TextStyleView textType={TextType.SMALL} title={"Similar Artists"} />

    <div class="rounded-xl overflow-auto no-scrollbar">
      <div class="w-full shadow-xl">
        <div class="overflow-x-auto flex no-scrollbar gap-3">
          {#each infoData.artists as m}
            <ArtistsInfoView {m} />
          {/each}
        </div>
      </div>
    </div>
  {/if}
{/if}

<div class="h-44" />

<Footer />
