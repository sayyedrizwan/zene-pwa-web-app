<script lang="ts">
  import PLAY_ICON from "$lib/assets/img/ic_play.svg";
  import ARROW_ICON from "$lib/assets/img/ic_arrow.svg";
  import PAUSE_ICON from "$lib/assets/img/ic_pause.svg";
  import type { MusicData } from "../../../routes/-api-/ApiService/model/MusicData";
  import { player_suggestedsongs, sendMusicData } from "../../utils/Utils";
  import { AnalyticsEvents, registerFirebaseEvents } from "../../firebase/registerAnalytics";
  import LoadingView from "../item/LoadingView.svelte";
  import { gKEnc } from "$lib/utils/ad_ss";
  import axios from "axios";
  import TextStyleView from "../item/TextStyleView.svelte";
  import { TextType } from "$lib/utils/model/TextType";
  import CardInfoView from "../item/CardInfoView.svelte";

  export let music: MusicData;
  export let isOldSong: Boolean;

  $: music.id, changedInfo();

  let player: any;
  let isPlaying = false;
  let isBuffering = false;
  let showPlayerView = false;
  let songDuration = 0;
  let songTotalDuration = 0;
  let myTimeout: NodeJS.Timeout;

  let similarSongs: MusicData[] | undefined | null = undefined;

  function onYouTubeIframeAPIReady() {
    clearInterval(myTimeout);
    myTimeout = setInterval(() => {
      songDuration = player.getCurrentTime();
      songTotalDuration = player.getDuration();
    }, 1000);

    const YT = (window as any).YT;
    player = new YT.Player("player", {
      height: "1",
      width: "1",
      videoId: music.id,
      playerVars: {
        playsinline: 1,
        loop: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }

  function onPlayerReady(event: any) {
    event.target.playVideo();
    setTimeout(() => {
      event.target.unMute();
    }, 800);
  }

  function onPlayerStateChange(event: any) {
    if (event.data == 1) {
      isBuffering = false;
      isPlaying = true;
      if (isOldSong) {
        pauseVideo();
        isOldSong = false;
      }
    } else if (event.data == 3) {
      isBuffering = true;
    } else if (event.data == 0) {
      player.seekTo(0);
      playVideo();
    } else {
      isPlaying = false;
      isBuffering = false;
    }
  }

  function playVideo() {
    player.playVideo();
  }

  function pauseVideo() {
    try {
      player.pauseVideo();
    } catch (error) {
      error;
    }
  }

  function updateDuration(event: any) {
    player.seekTo(event.target.value);
  }

  function changedInfo() {
    if (music.type == "SONGS") {
      registerFirebaseEvents(AnalyticsEvents.STREAMING_WEB_SONG_PLAYING);
      if (player == undefined) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag: any = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      } else {
        player.loadVideoById(music.id);
      }
      getSongReleatedSongs();
    } else if (music.type == "VIDEO") {
      registerFirebaseEvents(AnalyticsEvents.STREAMING_WEB_VIDEO_PLAYING);
      pauseVideo();
    }
  }

  async function getSongReleatedSongs() {
    try {
      similarSongs = null;
      const res = await axios.get(`/-api-/${player_suggestedsongs}`, { params: { s: music.id }, headers: { auth: gKEnc() } });
      similarSongs = (await res.data) as MusicData[];
    } catch (error) {
      similarSongs = undefined;
    }
  }

  function durationToTimestamp(seconds: number): String {
    const totalSeconds = Math.floor(seconds);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(secs).padStart(2, "0");

    if (hours > 0) {
      return `${hours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
      return `${formattedMinutes}:${formattedSeconds}`;
    }
  }
</script>

{#if music.type == "VIDEO"}
  <div class="h-full w-full bg-black fixed top-0 right-0 left-0 z-50 justify-center items-center bg-opacity-90">
    <div id="default-modal" tabindex="-1" aria-hidden="true" class="w-full h-[85vh] bg-black bg-opacity-30 p-3">
      <iframe class="z-20" width="100%" height="100%" src={`https://www.youtube.com/embed/${music.id.trim()}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <div class="fixed bottom-5 left-3 w-screen flex flex-row justify-center items-center z-10">
        <button on:click={() => sendMusicData(undefined)} class="mt-8 xl:mt-12 px-12 py-5 text-lg poppins-regular bg-lightblue rounded-full shadow-xl border border-transparent hover-animation hover:bg-gray-950 text-black hover:text-white">Close Player</button>
      </div>
    </div>
  </div>
{:else if music.type == "SONGS"}
  <div id="player" class="fixed top-0 right-0 left-0 z-50" />

  <button class="fixed bottom-28 right-3 z-50 cursor-pointer flex justify-center items-center" on:click={() => (showPlayerView = true)}>
    <div class="relative">
      <img src={music.thumbnail.toString()} alt={music.name.toString()} class="size-24" />

      <div role="status" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-4">
        {#if isBuffering}
          <LoadingView />
        {:else if isPlaying}
          <img src={PAUSE_ICON} alt="play" class="size-8" />
        {:else}
          <img src={PLAY_ICON} alt="play" class="size-8" />
        {/if}
      </div>
    </div>
  </button>
{/if}

{#if showPlayerView}
  <div class="fixed top-0 left-0 w-full h-full bg-maincolor z-[100000] overflow-x-auto">
    <div class="flex flex-row mt-10">
      <button on:click={() => (showPlayerView = false)}><img src={ARROW_ICON} alt="arrow" class="size-6 ms-5" /></button>
      <h2 class="poppins-semi-bold text-white w-screen text-center">Zene Music Player</h2>
    </div>

    <div class="flex flex-col lg:flex-row h-screen mx-6 mt-7 lg:mt-0">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="flex flex-col justify-center items-center">
          <img src={music.thumbnail.toString()} alt={music.name.toString()} class="w-80" />
          <h3 class="text-xl text-white poppins-regular mt-5">{music.name}</h3>
          <h3 class="text-sm text-white poppins-thin mt-1 text-center">{music.artists}</h3>

          <div class="mt-2 w-full mx-auto flex justify-center items-center">
            <h3 class="text-base text-white poppins-thin mt-2">{durationToTimestamp(songDuration)}</h3>
            <input id="range" type="range" min="0" max={songTotalDuration} value={songDuration} on:change={updateDuration} class=" mx-3 block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500" />
            <h3 class="text-base text-white poppins-thin mt-2">{durationToTimestamp(songTotalDuration)}</h3>
          </div>
          <button on:click={isPlaying ? pauseVideo : playVideo} class="flex flex-row justify-center items-center mt-2">
            {#if isBuffering}
              <LoadingView />
            {:else if isPlaying}
              <img src={PAUSE_ICON} alt="play" class="size-8" />
            {:else}
              <img src={PLAY_ICON} alt="play" class="size-8" />
            {/if}
          </button>
        </div>

        <div class="flex flex-col h-full overflow-x-auto">
          {#if similarSongs == null}
            <div class="mt-9">
              <TextStyleView textType={TextType.SMALL} title={"Similar songs you may like"} />
            </div>
            <LoadingView />
          {:else if similarSongs.length > 0}
            <div class="mt-9">
              <TextStyleView textType={TextType.SMALL} title={"Similar songs you may like"} />
            </div>
            <div class="grid grid-cols-2 gap-4">
              {#each similarSongs as m}
                <CardInfoView dynamicList={true} {m} />
              {/each}
              <div class="h-64" />
              <div class="h-64" />
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
