<script>
  import { moodsList } from '$lib/utils/Utils'
</script>

<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Mood</h3>

<div class="flex flex-wrap mt-2">
  {#each moodsList as mood}
    <a href="/mood?v={mood.textAfterKeyword(' ')}" class="text-white bg-maincolor px-4 py-2 m-2 rounded-xl md:hover:px-5 hover-animation">
      {mood}
    </a>
  {/each}
</div>
