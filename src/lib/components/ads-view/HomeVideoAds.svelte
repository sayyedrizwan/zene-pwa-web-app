<script lang="ts">
  import type { ZeneAdsListsData } from '../../../domain/local/entities/ZeneAdsListsData'

  export let ads: ZeneAdsListsData
</script>

{#if ads.homeMiddleView.img.trim().length > 2}
  <div class="mt-20 mb-20">
      <p class="text-white urbanist-regular text-sm ms-1">Sponsor</p>

      <button class="w-full flex justify-center items-center" on:click={() => window.open(ads.homeMiddleView.link, '_blank')}>
        {#if ads.homeMiddleView.img.includes('.mp4')}
          <video class="w-full md:w-4/5" controls={false} muted={true} autoplay={true} loop={true} playsinline>
            <track kind="captions" />
            <source src={ads.homeMiddleView.img} type="video/mp4" />
            <source src={ads.homeMiddleView.img} type="video/ogg" />
          </video>
        {:else}
          <img src={ads.homeMiddleView.img} alt={ads.homeMiddleView.link} class="w-full m-3 rounded-md object-cover cursor-pointer" />
        {/if}
      </button>
  </div>
{/if}
