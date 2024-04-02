<script lang="ts">
  import type { ZeneAdsListsData } from '../../../domain/local/entities/ZeneAdsListsData'

  export let ads: ZeneAdsListsData
</script>

<div class="mt-20 mb-20">
  <p class="text-white urbanist-regular text-sm ms-1">Sponsor</p>
  <button class="w-full flex justify-center items-center" on:click={() => window.open(ads.homeMiddleView.link, '_blank')} >
    <video class="w-full md:w-4/5" controls={false} muted={true} autoplay={true} loop={true}>
      <track kind="captions" />
      <source src={ads.homeMiddleView.img} type="video/mp4" />
      <source src={ads.homeMiddleView.img} type="video/ogg" />
    </video>
  </button>
</div>
