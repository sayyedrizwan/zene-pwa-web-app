<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  let showDescText = false

  let content: string = "Zene";
  let typedChar: string = '';

  $: if (!content) typedChar = '';

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

<div class="static h-[95vh] w-full">
  <div class="absolute left-0 top-0 z-20 h-[95vh] w-full bg-maincolor bg-opacity-85">
    <div class="flex h-screen items-center justify-center text-white">
      <div>
        <div class="flex items-center justify-center">
          <h1 class="antro-vectra text-8xl">{typedChar}</h1>
        </div>
        <h2 class="{showDescText ? 'fade-in' : 'hidden'} p-4 text-center">Immerse in ad-free bliss with 1B+ songs. Elevate your vibe. 🎶✨</h2>
      </div>
    </div>
  </div>
</div>
