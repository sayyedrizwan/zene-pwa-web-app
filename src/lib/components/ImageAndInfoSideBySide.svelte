<script lang="ts">
  export let title: string;
  export let desc: string;
  export let img: string;
  export let isImgRight: boolean;
</script>

<div class="md:flex items-center w-full pt-32 {isImgRight ? "ms-10" : "me-10"}">
  {#if isImgRight}
    <div class="text-white flex-grow urbanist-light text-6xl">
      <h2>{title}</h2>
      <p class="text-white flex-grow urbanist-thin font-bold text-2xl">{desc}</p>
    </div>
    <img class="md:w-2/5 p-16 rounded-[72px]" src={img} alt={title} />
  {:else}
      <img class="md:w-2/5 p-16 rounded-[72px]" src={img} alt={title} />
      <div class="text-white flex-grow urbanist-light text-6xl">
        <h2>{title}</h2>
        <p class="text-white flex-grow urbanist-thin font-bold text-2xl">{desc}</p>
      </div>
  {/if}
</div>
