<script lang="ts">
  import { onMount } from "svelte";
  import { MusicData, MUSICTYPE } from "../../routes/-api-/ApiService/model/MusicData";
  import axios from "axios";
  import { gKEnc } from "$lib/utils/ads";
  import LoadingCardItemsView from "./item/LoadingCardItemsView.svelte";
  import type { TextType } from "$lib/utils/model/TextType";
  import TextStyleView from "./item/TextStyleView.svelte";
  export let email: String;
  export let url: String;
  export let textType: TextType;
  export let title: String;
  export let isGrid: Boolean;

  let isLoading = false;
  let response: MusicData[] = [];

  onMount(async () => {
    isLoading = true;
    try {
      const res = await axios.post(`/-api-/${url}`, { email: email }, { headers: { auth: gKEnc() } });
      response = (await res.data) as MusicData[];
      isLoading = false;
    } catch (error) {
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

  <div class="relative rounded-xl overflow-auto no-scrollbar">
    <div class="w-full bg- shadow-xl">
      <div class="overflow-x-auto flex no-scrollbar">
        {#each response as m}
          <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
            <div class="flex flex-col items-center justify-center gap-3 w-64 hover:w-72 hover-animation cursor-pointer">
              <img class="w-full rounded-lg" src={m.thumbnail.toString()} alt={m.name.toString()} />
              <p class="text-slate-900 text-lg text-white poppins-regular text-left w-full px-2 pt-1 line-clamp-1">{m.name}</p>
              {#if m.type != MUSICTYPE.PLAYLIST}
                <p class="text-slate-900 text-base text-white poppins-thin w-full px-2 -translate-y-2 line-clamp-1">{m.artists}</p>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}
