<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  let showDescText = false;

  let content: string = "Zene";
  let typedChar: string = "";

  $: if (!content) typedChar = "";

  let interval: NodeJS.Timeout;

  onMount(() => {
    interval = setInterval(() => {
      if (typedChar.length < content.length) {
        typedChar += content[typedChar.length];
      } else {
        showDescText = true;
        clearInterval(interval);
      }
    }, 250);
  });

  onDestroy(() => clearInterval(interval));
</script>

<div class="absolute left-0 top-0 z-30 bg-maincolor">
  <div class="mx-2 mt-5 md:mx-4 flex flex-wrap items-center justify-between px-2 md:px-5 z-30">
    <a href="/" class="relative flex items-center">
      <img src="/logo820.png" alt="zene" class="w-14" />
      <div class="ml-auto flex items-center ms-4">
        <p class="text-white urbanist-bold text-xl" data-svelte-h="svelte-15t1ev0">Zene</p>
      </div>
    </a>
  </div>
</div>

<div class="absolute left-0 top-0 z-20 h-[85vh] w-full bg-maincolor">
  <div class="flex h-screen items-center justify-center text-white">
    <div class="mb-24">
      <div class="flex items-center justify-center">
        <h1 class="antro-vectra text-8xl">{typedChar}</h1>
      </div>
      <h2 class="{showDescText ? 'fade-in' : 'hidden'} p-4 text-center">Immerse in ad-free bliss with 1B+ songs. Elevate your vibe. 🎶✨</h2>
    </div>
  </div>
</div>
