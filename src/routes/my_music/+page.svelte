<script lang="ts">
  import NavIcon from "$lib/components/NavIcon.svelte";
  import INFORMATION_ICON from "$lib/assets/img/ic_information.svg";
  import { PageMusicType } from "./PageMusicType";
  import { MusicData, MUSICTYPE } from "../-api-/ApiService/model/MusicData";
  import axios from "axios";
  import { z_playlists, z_song_history } from "$lib/utils/Utils";
  import { gKEnc } from "$lib/utils/ads";
  import type { DBPlaylists } from "../-api-/ApiService/dbmongo/model/DBPlaylistInfo";
  import { browser } from "$app/environment";
  import CardInfoView from "$lib/components/item/CardInfoView.svelte";

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
            <div class="border border-white rounded-3xl bg-charcoal cursor-pointer m-2 p-2.5">
              <img src={INFORMATION_ICON} alt="search" class="size-6 text-white" />
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {#each lists as m}
      <CardInfoView dynamicList={true} {m} />
    {/each}
  </div>

  {#if isLoading}
    <div role="status" class="flex justify-center items-center mt-8 w-full">
      <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin fill-maincolor" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
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
