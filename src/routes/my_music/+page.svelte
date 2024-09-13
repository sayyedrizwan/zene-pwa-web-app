<script lang="ts">
  import NavIcon from "$lib/components/NavIcon.svelte";
  import INFORMATION_ICON from "$lib/assets/img/ic_information.svg";
  import { PageMusicType } from "./PageMusicType";
  import { MusicData, MUSICTYPE } from "../-api-/ApiService/model/MusicData";
  import axios from "axios";
  import { z_playlists, z_song_history } from "$lib/utils/Utils";
  import { gKEnc } from "$lib/utils/ad_ss";
  import type { DBPlaylists } from "../-api-/ApiService/dbmongo/model/DBPlaylistInfo";
  import { browser } from "$app/environment";
  import CardInfoView from "$lib/components/item/CardInfoView.svelte";
  import LoadingView from "$lib/components/item/LoadingView.svelte";

  export let data: any;

  let isLoading = false;
  let lists: MusicData[] = [];
  let type: PageMusicType = PageMusicType.PLAYLISTS;
  let page = 0;
  let showMoreButton = false;

  if (browser) {
    setPlaylists(PageMusicType.PLAYLISTS);
  }

  async function setPlaylists(v: PageMusicType) {
    type = v;
    page = 0;
    if (v == PageMusicType.PLAYLISTS) getPlaylists();
    else getHistory();
  }

  async function loadMore() {
    if (type == PageMusicType.PLAYLISTS) getPlaylists();
    else getHistory();
  }

  async function getPlaylists() {
    try {
      if (page == 0) {
        lists = [];
      }

      isLoading = true;
      const res = await axios.get(`/-api-/${z_playlists}`, { params: { email: data.email, page: page }, headers: { auth: gKEnc() } });
      const response = (await res.data) as DBPlaylists[];
      const newList = response.map((p) => new MusicData(p.name, p.timestamp.toString(), p.id, p.img, MUSICTYPE.PLAYLIST));
      lists = [...lists, ...newList];
      page += 1;
      isLoading = false;
      showMoreButton = response.length > 25;
    } catch (error) {
      isLoading = false;
    }
  }

  async function getHistory() {
    try {
      if (page == 0) {
        lists = [];
      }

      isLoading = true;
      const res = await axios.get(`/-api-/${z_song_history}`, { params: { email: data.email, page: page }, headers: { auth: gKEnc() } });
      const response = (await res.data) as MusicData[];

      lists = [...lists, ...response];

      page += 1;
      isLoading = false;
      showMoreButton = response.length > 25;
    } catch (error) {
      isLoading = false;
    }
  }

  function showHistoryAlert() {
    alert("Zene saves your song history from the last two weeks and also keep history of your top listened songs. By storing only the most recent listening data, Zene reduces database costs, allowing us to offer the app for free. This doesn't impact your song suggestions or overall experience.");
  }
</script>

<svelte:head>
  <title>My Music | Zene : A Music App</title>
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

  <div class="flex flex-row px-9 poppins-regular text-white justify-center items-center">
    <img class="size-20 rounded-md" src={data.photo} alt={(data.name ?? "").toString()} referrerpolicy="no-referrer" />

    <div class="flex flex-col ms-2">
      <h2 class="poppins-semi-bold text-left">{data.name}</h2>
      <h2 class="poppins-regular pt-2 text-left">{data.email}</h2>
    </div>
  </div>

  <div class="relative rounded-xl overflow-auto no-scrollbar mt-10">
    <div class="w-full shadow-xl">
      <div class="overflow-x-auto flex no-scrollbar justify-center items-center">
        <div class="flex flex-row poppins-regular leading-tight text-white justify-center items-center">
          <button on:click={() => setPlaylists(PageMusicType.PLAYLISTS)} class="{type == PageMusicType.PLAYLISTS ? `border border-white` : ``}  rounded-3xl bg-charcoal cursor-pointer m-2">
            <h2 class="poppins-regular px-6 py-3 text-left">Playlists</h2>
          </button>
          <button on:click={() => setPlaylists(PageMusicType.HISTORY)} class="{type == PageMusicType.HISTORY ? `border border-white` : ``} rounded-3xl bg-charcoal cursor-pointer m-2">
            <h2 class="poppins-regular px-6 py-3 text-left">History</h2>
          </button>
          {#if type == PageMusicType.HISTORY}
            <button class="border border-white rounded-3xl bg-charcoal cursor-pointer m-2 p-2.5"  on:click={showHistoryAlert}>
              <img src={INFORMATION_ICON} alt="search" class="size-6 text-white" />
            </button>
          {/if}
        </div>
      </div>
    </div>
  </div>

  {#if lists.length <= 0 && !isLoading}
    <h2 class="poppins-regular px-6 py-3 text-left">{type == PageMusicType.HISTORY ? `You have no song history.` : `No playlists are saved or created. :)`}</h2>
  {/if}

  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {#each lists as m}
      <CardInfoView dynamicList={true} {m} />
    {/each}
  </div>

  {#if isLoading}
    <div role="status" class="flex justify-center items-center mt-8 w-full">
      <LoadingView />
    </div>
  {/if}

  {#if showMoreButton && !isLoading}
    <div class="flex flex-row poppins-regular mt-4 text-white justify-center items-center">
      <button on:click={loadMore} class="border border-white rounded-3xl bg-charcoal cursor-pointer m-2">
        <h2 class="poppins-regular px-6 py-3 text-left">Load More</h2>
      </button>
    </div>
  {/if}
  <div class="my-52" />
</div>
