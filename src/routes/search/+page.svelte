<script lang="ts">
  import { browser } from '$app/environment'
  import SearchTopBar from '$lib/components/seach-page/SearchTopBar.svelte'

  export let data: any
  let key: string | null = null
  export let searchParam = ''

  if (browser) key = window.atob(data.data)
</script>

{#if key != null}
  <p class="text-white">{searchParam}</p>

  {#if searchParam.length > 3}
    <div>dgdd</div>
  {:else}
    <SearchTopBar {key} bind:searchParam />
  {/if}

  <div class="h-60" />
{/if}
