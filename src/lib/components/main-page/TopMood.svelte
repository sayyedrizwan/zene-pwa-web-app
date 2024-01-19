<script lang="ts">
  const moodsList: string[] = [
    '\uD83D\uDE0A Happy',
    '\uD83D\uDE24 Angry',
    '\uD83E\uDD18 Rock',
    '\uD83D\uDE2C Stressed',
    '\uD83C\uDF8A Pop',
    '\uD83C\uDFAF Focused',
    '\uD83C\uDFCB️ Workout',
    '\uD83D\uDE29 Sleepy',
    '\uD83D\uDE0C Feel Good',
    '\uD83C\uDFB7 Jazz',
    '\uD83E\uDD70 Romance',
    '\uD83D\uDE14 Sad',
  ]
</script>

<h3 class="text-white urbanist-semibold text-sm md:text-xl ms-2 md:ms-4 mt-16">Mood</h3>

<div class="flex flex-wrap mt-2">
  {#each moodsList as mood}
    <a href="/" class="text-white bg-maincolor px-4 py-2 m-2 rounded-xl md:hover:px-5 hover-animation">
      {mood}
    </a>
  {/each}
</div>
