<script lang="ts">
  import Footer from "$lib/components/item/Footer.svelte";
  import { getLastOrSecondLastPart, openAppOrRedirect } from "$lib/utils/Utils";
  import { onMount } from "svelte";
  import type { ArtistsDataInfo } from "../../-api-/ApiService/model/ArtistsData";
  import TextStyleView from "$lib/components/item/TextStyleView.svelte";
  import { TextType } from "$lib/utils/model/TextType";
  import ARROW_ICON from "$lib/assets/img/ic_arrow.svg";

  export let data: any;
  let info: ArtistsDataInfo | undefined = data.data;
  let showFullDesc = false;

  function openURLApp(noFound: Boolean) {
    if (noFound) openAppOrRedirect(window.location.origin);
    else openAppOrRedirect(window.location.href);
  }

  onMount(() => {});
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
            <img class="h-[65vh] w-[45vh] object-cover" src={img.toString()} alt={info.name.toString()} />
          </div>
        </div>
      {/each}
    </div>
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

  <div class="flex flex-row overflow-x-auto no-scrollbar mt-8">
    {#each info?.socialMedia ?? [] as social}
      <div class="flex-none px-2 first:pl-3 last:pr-3">
        <a href={social.url} target="_blank">
          <div class="bg-gray-700 rounded-lg p-4">
            <h3 class="text-base text-start text-white poppins-regular w-full">{social.title}</h3>
            <h3 class="text-base text-start text-white poppins-thin w-full mt-4">/{getLastOrSecondLastPart(social.url ?? "")}</h3>
          </div>
        </a>
      </div>
    {/each}
  </div>
{/if}

<Footer />
