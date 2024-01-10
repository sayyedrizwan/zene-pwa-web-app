<script lang="ts">
  import { pwaInfo } from "virtual:pwa-info";
  import "./tailwind.svelte";
  import { page } from "$app/stores";
  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
</script>

<svelte:head>
  {@html webManifest}
</svelte:head>

{#if $page.url.pathname === "home"}
  <slot />
{:else}
  <!-- <h1>Nav Bar</h1> -->
  <slot />
{/if}
