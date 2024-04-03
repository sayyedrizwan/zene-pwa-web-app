<script lang="ts">
  import type { ZeneAdsListsData } from '../../../domain/local/entities/ZeneAdsListsData'

  export let ads: ZeneAdsListsData
</script>

<div class="mt-20 mb-20">
  <p class="text-white urbanist-regular text-sm ms-3">Sponsor</p>
  <p class="text-white urbanist-semibold text-lg ms-3 mt-4 break-words">{ads.title}</p>

  <div class="relative rounded-xl overflow-auto scrollbar-hide">
    <div class="w-full mx-auto shadow-xl">
      <div class="overflow-x-auto flex">
        {#each ads.homeGridTop as ad}
          <div class="flex-none">
            <button class="flex flex-col items-center justify-center gap-3" on:click={() => window.open(ad.link, '_blank')}>
              <img src={ad.img} alt={ad.link} class="h-80  md:h-96 m-3 rounded-md object-cover cursor-pointer" />
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
