<script lang="ts">
    import type { APManager } from "$lib/utils/p/s"

  export let audioPlayer: APManager
  export let currentDuration: number
  export let totalDuration: number

  function inputHandler(e: Event) {
    audioPlayer.changeSongDuration((e.target as any)?.value)
  }
</script>

<div>
  <div class="flex mt-6">
    <div class="w-full mx-2 md:mx-8 flex">
      <p class="text-white urbanist-regular text-base md:text-lg">0:00</p>
      <div class="w-full mx-3 cursor-pointer md:m-0.5 md:mx-3">
          <input type="range" min={`${0}`} max={`${totalDuration}`} value={`${currentDuration}`} on:input={inputHandler} />
      </div>

      <p class="text-white urbanist-regular text-base md:text-lg">3:34</p>
    </div>
  </div>
</div>
