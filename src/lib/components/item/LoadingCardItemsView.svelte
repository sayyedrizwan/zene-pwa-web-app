{#each Array(12) as _, index (index)}
  <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
    <div class="flex flex-col items-center justify-center gap-3 w-64 animate-pulse">
      <div class="rounded-lg w-64 h-64 bg-gray-400" />
      <div class="flex flex-col justify-start items-start w-full px-2">
        <div class="w-32 h-2 rounded-lg bg-gray-400" />
        <div class="w-20 h-2 rounded-lg bg-gray-400 mt-3" />
      </div>
    </div>
  </div>
{/each}
