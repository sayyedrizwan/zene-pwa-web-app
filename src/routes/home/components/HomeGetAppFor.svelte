<script lang="ts">
    import { get_it_for_android, get_it_for_ios } from "$lib/assets/string/en";
    import { play_store_url } from "$lib/utils/UtilsPaths";

    function openPlayStore(){
        open(play_store_url, '_blank')
    }
</script>

<div class="relative rounded-xl overflow-auto p-8 mt-80">
  <div class="grid grid-cols-2 divide-x text-sm text-center leading-6 rounded-lg shadow-lg overflow-hidden dark:divide-slate-700">
    <div class="p-4 text-slate-400 bg-white text-gray-950 text-lg pt-14 pb-14 tracking-widest urbanist-light hover:bg-gray-400 cursor-pointer flex justify-center items-center">
      <center>
        <h2 class="text-center">{get_it_for_ios}</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" alt="android" class="h-28 pt-5" />
      </center>
    </div>
    <button on:click={openPlayStore} class="p-4 text-slate-400 bg-white text-gray-950 text-lg pt-14 pb-14 tracking-widest urbanist-light hover:bg-gray-400 cursor-pointer flex justify-center items-center">
      <center>
        <h2 class="text-center">{get_it_for_android}</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/888/888839.png" alt="ios" class="h-28 pt-5" />
      </center>
    </button>
  </div>
</div>
