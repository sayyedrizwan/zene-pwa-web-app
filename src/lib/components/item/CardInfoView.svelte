<script lang="ts">
  import { sendMusicData } from "$lib/utils/Utils";
  import { MUSICTYPE, type MusicData } from "../../../routes/-api-/ApiService/model/MusicData";

  export let dynamicList: Boolean = false;
  export let m: MusicData;
</script>

<div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
  <button on:click={() => sendMusicData(m)} class="group flex flex-col items-center justify-center gap-3 {dynamicList ? `` : `w-64`}">
    <img class="w-full h-64 object-cover rounded-lg group-hover:p-4 hover-animation cursor-pointer" src={m.thumbnail.toString()} alt={m.name.toString()} referrerpolicy="no-referrer" />
    <p class="text-slate-900 text-lg text-white poppins-regular text-left w-full px-2 pt-1 line-clamp-1">{m.name}</p>
    {#if m.type != MUSICTYPE.PLAYLIST}
      <p class="text-slate-900 text-base text-white poppins-thin w-full px-2 -translate-y-2 line-clamp-1 text-left">{m.artists}</p>
    {/if}
  </button>
</div>
