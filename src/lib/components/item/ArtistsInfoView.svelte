<script lang="ts">
  import { MUSICTYPE, type MusicData } from "../../../routes/-api-/ApiService/model/MusicData";

  export let m: MusicData;
</script>

<div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
  <div class="flex flex-col items-center justify-center gap-3 w-64 hover:w-56 hover:m-4 hover-animation cursor-pointer">
    <img class="w-full h-64 rounded-full object-cover" src={m.thumbnail.toString()} alt={m.name.toString()} referrerpolicy="no-referrer" />
    <p class="text-slate-900 text-lg text-white poppins-regular text-center w-full px-2 pt-1 line-clamp-1">{m.name}</p>
  </div>
</div>
