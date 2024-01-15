<script lang="ts">
  import { pwaInfo } from "virtual:pwa-info";
  import "./tailwind.svelte";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { onBrowser } from "../lib/utils/Utils";

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
  $: browser ? onBrowser() : "";
  
</script>

<svelte:head>
  {@html webManifest}
</svelte:head>

{#if $page.url.pathname === "home"}
  <slot />
{:else}
  <slot />
{/if}
