<script lang="ts">
  import Footer from "$lib/components/item/Footer.svelte";
  import { decTheData, getCookie } from "$lib/utils/EncDec";
  import { onMount } from "svelte";
  import type { MusicData } from "./-api-/ApiService/model/MusicData";
  import { sendMusicData } from "$lib/utils/Utils";
  import { AnalyticsEvents, registerFirebaseEvents } from "$lib/firebase/registerAnalytics";

  export let data: any;
  let videos: MusicData[] = [];
  let songsYouMayLike: MusicData[] = [];
  let songsForYou: MusicData[] = [];

  onMount(async () => {
    videos = JSON.parse(data.video) as MusicData[];
    songsYouMayLike = JSON.parse(data.songsYouMayLike) as MusicData[];
    songsForYou = JSON.parse(data.songsForYou) as MusicData[];
    const email = await decTheData(getCookie("u_id") ?? "", getCookie("i_s") ?? "");
    if (email == null) {
      window.location.href = "/home";
    } else {
      registerFirebaseEvents(AnalyticsEvents.STREAMING_WEB_LOGGED_IN)
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

  {#if videos.length <= 0}
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
  {#if videos.length > 0}
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

  {#if videos.length > 0}
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
