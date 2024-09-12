<script lang="ts">
  import LoadingCardItemsView from "$lib/components/item/LoadingCardItemsView.svelte";
  import NavIcon from "$lib/components/NavIcon.svelte";
  import { gKEnc } from "$lib/utils/ads";
  import { feeds_s } from "$lib/utils/Utils";
  import axios from "axios";
  import { onMount } from "svelte";
  import { type MusicData } from "../-api-/ApiService/model/MusicData";
  import { TextType } from "$lib/utils/model/TextType";
  import ArtistsInfoView from "$lib/components/item/ArtistsInfoView.svelte";
  import TextStyleView from "$lib/components/item/TextStyleView.svelte";
  import { convertEpochTime, FEEDTYPE, type ZenePostsData } from "../-api-/ApiService/model/ZenePostsData";

  export let data: any;

  let isLoading = false;
  let responseArtists: MusicData[] = [];
  let responseFeeds: ZenePostsData[] = [];

  onMount(async () => {
    try {
      isLoading = true;
      const res = await axios.post(`/-api-/${feeds_s}`, { email: data.email }, { headers: { auth: gKEnc() } });
      const response = (await res.data) as any;
      responseArtists = response.artists;
      responseFeeds = response.posts;
      isLoading = false;
    } catch (error) {
      isLoading = false;
    }
  });
</script>

<svelte:head>
  <title>Feed | Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Feed | Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/feed" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>

<div class="bg-black w-full mt-32">
  <NavIcon />

  {#if isLoading}
    <TextStyleView textType={TextType.SMALL} title={"Feeds"} />
    <div class="relative rounded-xl overflow-auto no-scrollbar">
      <div class="w-full bg- shadow-xl">
        <div class="overflow-x-auto flex no-scrollbar">
          <LoadingCardItemsView />
        </div>
      </div>
    </div>
  {:else}
    <div class="mt-14" />
    {#if responseArtists.length > 0}
      <TextStyleView textType={TextType.SMALL} title={"Following"} />
      <div class="relative rounded-xl overflow-auto no-scrollbar">
        <div class="w-full bg- shadow-xl">
          <div class="overflow-x-auto flex no-scrollbar">
            {#each responseArtists as m}
              <ArtistsInfoView {m} />
            {/each}
          </div>
        </div>
      </div>
    {:else}
      <p class="text-slate-900 text-base text-white poppins-regular text-center w-full px-2 pt-1 mt-40">You are not following any artists so you get their info in the feeds list.</p>
    {/if}

    <div class="mt-14" />
    <TextStyleView textType={TextType.SMALL} title={"Feeds"} />
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each responseFeeds as m}
        {#if m.type == FEEDTYPE.NEWS}
          <a target="_blank" href={m.url?.toString()} class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src={m.thumbnail?.toString()} alt={m.name?.toString()} class="object-contain" />
            </div>
            <div class="p-4">
              <h6 class="text-black text-base poppins-thin line-clamp-1">{m.name}'s News</h6>
              <h6 class="text-black text-base poppins-regular line-clamp-3">{m.caption}</h6>
              <h6 class="text-black text-sm poppins-regular line-clamp-1 mt-4">{convertEpochTime(m.timestamp)}</h6>
            </div>
          </a>
        {/if}
      {/each}
    </div>
  {/if}
</div>
