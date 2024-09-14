<script lang="ts">
  import { goto, invalidate, invalidateAll } from "$app/navigation";
  import { encsMainUp } from "$lib/utils/ad_ss";
  import { redirect } from "@sveltejs/kit";
  import { MUSICTYPE, type MusicData } from "../../../routes/-api-/ApiService/model/MusicData";

  export let m: MusicData;
  
  async function managePageDestination() {
    if (m.type == MUSICTYPE.ARTISTS) {
      const artistsPath = `/a/${await encsMainUp(m.name.toString())}`;

      const thisPage = window.location.pathname;

      console.log("goto " + thisPage);

      const nextURL = artistsPath;
      const nextTitle = 'My new page title';
      const nextState = { additionalInformation: 'Updated the URL with JS' };

      const redirect = (url: string, asLink = true) =>
        asLink ? (window.location.href = url) : window.location.replace(url);

      // This will create a new entry in the browser's history, without reloading
      // window.history.pushState(nextState, nextTitle, nextURL);
      // invalidateAll()

      // This will replace the current entry in the browser's history, without reloading
      // window.history.replaceState(nextState, nextTitle, nextURL);

      // goto(artistsPath).then(() => goto(thisPage));

      // goto(artistsPath, { replaceState: true });
      // invalidate(artistsPath)
      // setTimeout(() => goto(artistsPath), 0);
      // goto(artistsPath);

      // const url = new URL(`/a/${await encsMainUp(m.name.toString())}`);

      // goto(url.href);
      // goto(url.href, { replaceState: true });
    }
  }
</script>

<div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
  <button on:click={managePageDestination} class="group flex flex-col items-center justify-center gap-3 w-64">
    <img class="w-full h-64 object-cover rounded-full group-hover:p-4 hover-animation cursor-pointer" src={m.thumbnail.toString()} alt={m.name.toString()} referrerpolicy="no-referrer" loading="lazy" />
    <p class="text-slate-900 text-lg text-white poppins-regular text-center w-full px-2 pt-1 line-clamp-1">{m.name}</p>
  </button>
</div>
