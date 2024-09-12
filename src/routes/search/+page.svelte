<script lang="ts">
  import NavIcon from "$lib/components/NavIcon.svelte";
  import axios from "axios";
  import { MUSICTYPE, type MusicData } from "../-api-/ApiService/model/MusicData";
  import { gKEnc } from "$lib/utils/ads";
  import { search_s } from "$lib/utils/Utils";
  import ToastsView from "$lib/components/ToastsView.svelte";
  import TextStyleView from "$lib/components/item/TextStyleView.svelte";
  import LoadingCardItemsView from "$lib/components/item/LoadingCardItemsView.svelte";
  import { TextType } from "$lib/utils/model/TextType";
  import type { MusicDataSearch } from "../-api-/ApiService/model/MusicDataSearch";
  import VideoInfoView from "$lib/components/item/VideoInfoView.svelte";
  import ArtistsInfoView from "$lib/components/item/ArtistsInfoView.svelte";
  import CardInfoView from "$lib/components/item/CardInfoView.svelte";

  let showToast = false;
  let isLoading = false;
  let response: MusicDataSearch | undefined = undefined;

  async function searchInput() {
    let value = (document.getElementById("default-search") as HTMLInputElement).value;
    if (value.length <= 3) {
      showToast = true;
      return;
    }
    showToast = false;
    try {
      isLoading = true;
      const res = await axios.get(`/-api-/${search_s}`, { headers: { auth: gKEnc() }, params: { s: value } });
      response = (await res.data) as MusicDataSearch;
      isLoading = false;
    } catch (error) {
      isLoading = false;
    }
  }
</script>

<svelte:head>
  <title>Search | Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Search | Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>

<div class="bg-black w-full mt-32">
  <NavIcon />

  <div class="relative max-w-md mx-auto mt-10">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
    </div>
    <input name="s" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Music and Video on Zene.." />
    <button on:click={searchInput} type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-maincolor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
  </div>

  {#if isLoading}
    <div class="relative rounded-xl overflow-auto no-scrollbar">
      <div class="w-full bg- shadow-xl">
        <div class="overflow-x-auto flex no-scrollbar">
          <LoadingCardItemsView />
        </div>
      </div>
    </div>
  {:else}
    <div class="mt-14" />
    {#if (response?.artists?.length ?? 0) > 0}
      <TextStyleView textType={TextType.SMALL} title={"Artists"} />
      <div class="relative rounded-xl overflow-auto no-scrollbar">
        <div class="w-full bg- shadow-xl">
          <div class="overflow-x-auto flex no-scrollbar">
            {#each response?.artists ?? [] as m}
              {#if m.type == MUSICTYPE.VIDEO}
                <VideoInfoView {m} />
              {:else if m.type == MUSICTYPE.ARTISTS}
                <ArtistsInfoView {m} />
              {:else}
                <CardInfoView dynamicList={false} {m} />
              {/if}
            {/each}
          </div>
        </div>
        </div>
      {/if}

    <div class="mt-14" />
    {#if (response?.playlists?.length ?? 0) > 0}
      <TextStyleView textType={TextType.SMALL} title={"Playlists"} />
      <div class="relative rounded-xl overflow-auto no-scrollbar">
        <div class="w-full bg- shadow-xl">
          <div class="overflow-x-auto flex no-scrollbar">
            {#each response?.playlists ?? [] as m}
              {#if m.type == MUSICTYPE.VIDEO}
                <VideoInfoView {m} />
              {:else if m.type == MUSICTYPE.ARTISTS}
                <ArtistsInfoView {m} />
              {:else}
                <CardInfoView dynamicList={false} {m} />
              {/if}
            {/each}
          </div>
        </div>
      </div>
    {/if}

    <div class="mt-14" />
    {#if (response?.albums?.length ?? 0) > 0}
      <TextStyleView textType={TextType.SMALL} title={"Albums"} />
      <div class="relative rounded-xl overflow-auto no-scrollbar">
        <div class="w-full bg- shadow-xl">
          <div class="overflow-x-auto flex no-scrollbar">
            {#each response?.albums ?? [] as m}
              {#if m.type == MUSICTYPE.VIDEO}
                <VideoInfoView {m} />
              {:else if m.type == MUSICTYPE.ARTISTS}
                <ArtistsInfoView {m} />
              {:else}
                <CardInfoView dynamicList={false} {m} />
              {/if}
            {/each}
          </div>
        </div>
      </div>
    {/if}

    <div class="mt-14" />
    {#if (response?.videos?.length ?? 0) > 0}
      <TextStyleView textType={TextType.SMALL} title={"Videos"} />
      <div class="relative rounded-xl overflow-auto no-scrollbar">
        <div class="w-full bg- shadow-xl">
          <div class="overflow-x-auto flex no-scrollbar">
            {#each response?.videos ?? [] as m}
              {#if m.type == MUSICTYPE.VIDEO}
                <VideoInfoView {m} />
              {:else if m.type == MUSICTYPE.ARTISTS}
                <ArtistsInfoView {m} />
              {:else}
                <CardInfoView dynamicList={false} {m} />
              {/if}
            {/each}
          </div>
        </div>
      </div>
    {/if}

    <div class="mt-14" />
    {#if (response?.videos?.length ?? 0) > 0}
      <TextStyleView textType={TextType.SMALL} title={"Videos"} />
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each response?.songs ?? [] as m}
          <CardInfoView dynamicList={true} {m} />
        {/each}
      </div>
    {/if}

    <div class="my-80" />
  {/if}
</div>

{#if showToast}
  <ToastsView text={"Enter a valid search.."} />
{/if}
