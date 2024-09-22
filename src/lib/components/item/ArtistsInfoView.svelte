<script lang="ts">
  import { goto, invalidate, invalidateAll } from "$app/navigation";
  import { encsMainUp, genRan } from "$lib/utils/ad_ss";
  import { MUSICTYPE, type MusicData } from "../../../routes/-api-/ApiService/model/MusicData";

  export let m: MusicData;
  
  async function managePageDestination() {
    if (m.type == MUSICTYPE.ARTISTS) {
      const artistsPath = `/a/${(await encsMainUp(m.name.toString())).trim()}`;
      goto(artistsPath, { replaceState: true });
    }
  }
</script>

<div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
  <button on:click={managePageDestination} class="group flex flex-col items-center justify-center gap-3 w-64">
    <img class="w-full h-64 object-cover rounded-full group-hover:p-4 hover-animation cursor-pointer" src={m.thumbnail.toString()} alt={m.name.toString()} referrerpolicy="no-referrer" loading="lazy" />
    <p class="text-slate-900 text-lg text-white poppins-regular text-center w-full px-2 pt-1 line-clamp-1">{m.name}</p>
  </button>
</div>
