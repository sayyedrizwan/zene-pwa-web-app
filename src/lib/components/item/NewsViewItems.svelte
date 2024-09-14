<script lang="ts">
  import { getDomainFromUrl } from "$lib/utils/Utils";
  import type { MusicData } from "../../../routes/-api-/ApiService/model/MusicData";

  export let m: MusicData;
</script>

<div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
  <a href={m.id.toString()} target="_blank" class="group flex flex-col items-center justify-center gap-3 w-60 md:w-72">
    <img class="w-full h-60 md:h-72 object-cover rounded-lg" src={m.thumbnail.toString()} alt={m.name.toString()} referrerpolicy="no-referrer" />
    <p class="text-slate-900 text-sm text-white poppins-regular text-left w-full px-2 pt-1 line-clamp-3">{m.name}</p>
    <p class="text-slate-900 text-base text-white poppins-thin w-full px-2 -translate-y-2 line-clamp-1 text-left">{getDomainFromUrl(m.id.toString())} • {m.extra}</p>
  </a>
</div>
