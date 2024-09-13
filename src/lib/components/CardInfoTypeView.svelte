<script lang="ts">
  import { onMount } from "svelte";
  import { MusicData, MUSICTYPE } from "../../routes/-api-/ApiService/model/MusicData";
  import axios from "axios";
  import { gKEnc } from "$lib/utils/ads";
  import LoadingCardItemsView from "./item/LoadingCardItemsView.svelte";
  import type { TextType } from "$lib/utils/model/TextType";
  import TextStyleView from "./item/TextStyleView.svelte";
  import CardInfoView from "./item/CardInfoView.svelte";
  import VideoInfoView from "./item/VideoInfoView.svelte";
  import ArtistsInfoView from "./item/ArtistsInfoView.svelte";

  export let email: String;
  export let url: String;
  export let textType: TextType;
  export let title: String;
  export let isGet: Boolean = false;
  export let dynamicList: Boolean = false;

  let isLoading = false;
  let response: MusicData[] = [];

  onMount(async () => {
    isLoading = true;
    try {
      if (isGet) {
        const res = await axios.get(`/-api-/${url}`, { headers: { auth: gKEnc() } });
        response = (await res.data) as MusicData[];
      } else {
        const res = await axios.post(`/-api-/${url}`, { email: email }, { headers: { auth: gKEnc() } });
        response = (await res.data) as MusicData[];
      }
      isLoading = false;
    } catch (error) {
      console.log(error);
      isLoading = false;
    }
  });
</script>

{#if isLoading}
  <TextStyleView {textType} {title} />
  <div class="relative rounded-xl overflow-auto no-scrollbar">
    <div class="w-full bg- shadow-xl">
      <div class="overflow-x-auto flex no-scrollbar">
        <LoadingCardItemsView />
      </div>
    </div>
  </div>
{:else if response.length > 0}
  <TextStyleView {textType} {title} />

  {#if dynamicList}
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each response as m}
        <CardInfoView {dynamicList} {m} />
      {/each}
    </div>
  {:else}
    <div class="relative rounded-xl overflow-auto no-scrollbar">
      <div class="w-full shadow-xl">
        <div class="overflow-x-auto flex no-scrollbar">
          {#each response as m}
            {#if m.type == MUSICTYPE.VIDEO}
              <VideoInfoView {m} />
            {:else if m.type == MUSICTYPE.ARTISTS}
              <ArtistsInfoView {m} />
            {:else}
              <CardInfoView {dynamicList} {m} />
            {/if}
          {/each}
        </div>
      </div>
    </div>
  {/if}
{/if}

{#if title == "Songs you may like" && response.length <= 0}
  <h3 class="text-xl font-semibold text-white urbanist-regular text-center">You currently have no listening history. Start playing some songs, and we'll be able to suggest playlists, songs, albums, and artists tailored to your preferences from the Web or App.</h3>
{/if}
