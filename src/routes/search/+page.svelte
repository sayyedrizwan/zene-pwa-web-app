<script lang="ts">
  import { browser } from '$app/environment'
  import SearchTopBar from '$lib/components/seach-page/SearchTopBar.svelte'
    import SearchResults from '$lib/components/seach-page/SearchResults.svelte'

  export let data: any
  let key: string | null = null
  export let searchParam = 'taylor swift'

  if (browser) key = window.atob(data.data)

</script>

{#if key != null}
  {#if searchParam.length > 3}
    <SearchResults {key} {searchParam}/>
  {:else}
    <SearchTopBar {key} bind:searchParam />
  {/if}

  <div class="h-60" />
{/if}
