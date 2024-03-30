<script lang="ts">
  import { browser } from '$app/environment'

  export let data: any

  let partyEmail: string | null = null

  if (browser) partyEmail = data.urlid
</script>

<svelte:head>
  <title>Song Party on Zene</title>
  <meta name="description" content="Start a sync-enabled song party, where everyone can seamlessly join, enjoy, and watch music videos together in perfect harmony" />
  <meta name="og:description" content="Start a sync-enabled song party, where everyone can seamlessly join, enjoy, and watch music videos together in perfect harmony" />
  <meta property="og:title" content="Song Party on Zene" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Song Party on Zene" />
</svelte:head>

<div class="h-60" />
