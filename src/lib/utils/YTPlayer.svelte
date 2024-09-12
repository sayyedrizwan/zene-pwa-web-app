<script lang="ts">
  import { onMount } from "svelte";
  import type { MusicData } from "../../routes/-api-/ApiService/model/MusicData";
  import { sendMusicData } from "./Utils";
  import { AnalyticsEvents, registerFirebaseEvents } from "$lib/firebase/registerAnalytics";

  export let music: MusicData;

  $: music.id, changedInfo();
  let player: any;
  let isPlaying = false;
  let isBuffering = false;
  let showPlayerView = false;
  let songDuration = 0;
  let songTotalDuration = 0;
  let myTimeout: NodeJS.Timeout;

  function onYouTubeIframeAPIReady() {
    clearInterval(myTimeout);
    myTimeout = setInterval(() => {
      songDuration = player.getCurrentTime();
      songTotalDuration = player.getDuration();
    }, 1000);

    const YT = (window as any).YT;
    player = new YT.Player("player", {
      height: "0",
      width: "0",
      videoId: music.id,
      playerVars: {
        playsinline: 1,
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
    } else if (event.data == 3) {
      isBuffering = true;
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
    } else if (music.type == "VIDEO") {
      registerFirebaseEvents(AnalyticsEvents.STREAMING_WEB_VIDEO_PLAYING);
      pauseVideo();
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

  <div class="fixed bottom-28 right-3 z-50">
    <img src={music.thumbnail.toString()} alt={music.name.toString()} class="size-24" />
  </div>

  <!-- <button type="button" on:click={() => (showPlayerView = true)} class="fixed bottom-3 right-3 z-[1000] text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-lg ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
    <img src={music.thumbnail.toString()} alt={music.name.toString()} class="size-24 fixed bottom-3 right-3 z-10" />

    {#if isBuffering}
      <div role="status">
        <svg aria-hidden="true" class="size-7 fixed bottom-5 right-4 z-20 fill-white text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    {:else if isPlaying}
      <svg class="size-8 fixed bottom-4 right-3 z-20 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#141B34" stroke-width="1.5" />
        <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#141B34" stroke-width="1.5" />
      </svg>
    {:else}
      <svg class="size-8 fixed bottom-4 right-3 z-20 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
      </svg>
    {/if}
  </button> -->
{/if}

{#if showPlayerView}
  <div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed bottom-0 right-0 left-0 z-[4000] justify-center items-center w-full h-full bg-black bg-opacity-30">
    <div class="fixed bottom-0 p-4 w-full max-w-2xl max-h-full">
      <div class="relative w-screen pe-8">
        <div class="bg-maincolor rounded-lg shadow">
          <div class="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-white urbanist-regular">Zene Music Player</h3>
            <button on:click={() => (showPlayerView = false)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <div class="flex flex-col justify-around items-center">
            <img src={music.thumbnail.toString()} alt={music.name.toString()} class="size-52" />
            <h3 class="text-xl text-white urbanist-regular mt-5">{music.name}</h3>
            <h3 class="text-sm text-white urbanist-regular mt-1">{music.artists}</h3>

            <div class="flex flex-row justify-around items-center mt-5">
              <h3 class="text-sm text-white urbanist-regular mt-1 me-3">{durationToTimestamp(songDuration)}</h3>

              <div class="slidecontainer">
                <input type="range" min="0" max={songTotalDuration} value={songDuration} class="slider sm:w-52 md:w-80 translate-y-1" on:change={updateDuration} />
              </div>

              <h3 class="text-sm text-white urbanist-regular mt-1 ms-2">{durationToTimestamp(songTotalDuration)}</h3>
            </div>
          </div>

          <div class="flex flex-row justify-center items-center mt-5 pb-9">
            {#if isBuffering}
              <button on:click={playVideo}>
                <svg aria-hidden="true" class="size-12 fill-white text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </button>
            {:else if isPlaying}
              <button on:click={pauseVideo}>
                <svg class="size-12 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="#141B34" stroke-width="1.5" />
                  <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="#141B34" stroke-width="1.5" />
                </svg>
              </button>
            {:else}
              <button on:click={playVideo}>
                <svg class="size-12 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
