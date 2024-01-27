<script lang="ts">
  import { openSongDialog } from '$lib/utils/f'


  function close(){
    openSongDialog(null)
  }
</script>

<button on:touchmove={close} on:touchstart={close} on:click|stopPropagation={close} class="fixed top-0 left-0 right-0 h-full w-full z-50 bg-black bg-opacity-70 p-7">
  <div class="absolute left-3 bottom-7 right-3 md:left-1/2 md:bottom-7 md:transform md:-translate-x-1/2 h-40 md:h-52 w-auto md:w-2/4 bg-maincolor z-50 rounded-xl"></div>
</button>
