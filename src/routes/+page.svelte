<script lang="ts">
  import Footer from "$lib/components/item/Footer.svelte";
  import { decTheData, getCookie } from "$lib/utils/EncDec";
  import { onMount } from "svelte";
  import type { MusicData } from "./-api-/ApiService/model/MusicData";
  import { sendMusicData } from "$lib/utils/Utils";
  import { AnalyticsEvents, registerFirebaseEvents } from "$lib/firebase/registerAnalytics";
  import { goto } from "$app/navigation";

  export let data: any;
  let videos: MusicData[] = [];
  let songsYouMayLike: MusicData[] = [];
  let songsForYou: MusicData[] = [];

  onMount(async () => {
    try {
      videos = data.video as MusicData[];
      songsYouMayLike = data.songsYouMayLike as MusicData[];
      songsForYou = data.songsForYou as MusicData[];
    } catch (error) {
      error;
    }

    const email = await decTheData(getCookie("u_id") ?? "", getCookie("i_s") ?? "");
    if (email == null) {
      window.location.href = "/home";
    } else {
      registerFirebaseEvents(AnalyticsEvents.STREAMING_WEB_LOGGED_IN);
    }
  });

</script>

<svelte:head>
  <title>Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Zene : A Music App" />
  <meta property="og:image" content="/logo820.png" />
  <link rel="icon" type="image/x-icon" href="/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>

<div class="bg-black w-full mt-24">
  <center>
    <p class="mt-4 text-base leading-7 text-white ms-4">Zene Web is currently in beta and is intended for a testing use only.</p>
  </center>

  <br /><br /><br /><br />

  <form class="max-w-md mx-auto" method="GET" action="/search">
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input name="s" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Music and Video on Zene.." required/>
      <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-maincolor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
  </form>

  <br /><br /><br /><br />

  {#if songsYouMayLike.length <= 0}
    <p class="mt-4 text-xl leading-7 text-white mx-4 urbanist-semibold text-center">
      Look's like you are new here and Zene Web is in beta. So there is no song history so on that we can suggest you songs and video. Please listen to some songs in Zene app to generate history so we can suggest you.
      <br /> <a href="/home#download" class="text-lightblue mt-6">Download it now</a>
    </p>
  {/if}

  {#if videos.length > 0}
    <p class="mt-4 text-xl leading-7 text-white ms-4 urbanist-semibold">Videos you may like</p>

    <div class="relative rounded-xl overflow-auto">
      <div class="mx-auto shadow-xl min-w-0">
        <div class="overflow-x-auto flex">
          {#each videos as videos}
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

  <br /><br /><br /><br />
  {#if songsYouMayLike.length > 0}
    <p class="mt-4 text-xl leading-7 text-white ms-4 urbanist-semibold">Songs you may like</p>

    <div class="relative rounded-xl overflow-auto">
      <div class="mx-auto shadow-xl min-w-0">
        <div class="overflow-x-auto flex">
          {#each songsYouMayLike as songs}
            <button class="flex-none py-6 px-3 first:pl-6 last:pr-6 cursor-pointer" on:click={() => sendMusicData(songs)}>
              <div class="flex flex-col items-center justify-center gap-3 w-[40vh]">
                <img class="w-15 h-15 rounded-md" src={songs.thumbnail.toString()} alt={songs.name.toString()} referrerpolicy="no-referrer" />
                <p class="text-white text-base font-medium urbanist-regular line-clamp-1 text-center">{songs.name}</p>
                <p class="text-white text-sm font-medium -translate-y-2 line-clamp-1 text-center">{songs.artists}</p>
              </div>
            </button>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <br /><br /><br /><br />

  {#if songsForYou.length > 0}
    <p class="mt-4 text-xl leading-7 text-white ms-4 urbanist-semibold">Songs for you</p>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
      {#each songsForYou as songs}
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

  <Footer />
</div>
