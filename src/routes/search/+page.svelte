<script lang="ts">
  import { browser } from '$app/environment'

  export let data: any
  let key: string | null = null

  if (browser) {
    key = window.atob(data.data)
  }
</script>

{#if key != null}
  <div class="h-60" />
{/if}
