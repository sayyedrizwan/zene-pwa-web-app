<script lang="ts">
  import DONATE_ICON from '$lib/assets/img/ic_donate.svg'
  import CROWN_ICON from '$lib/assets/img/ic_crown.svg'
  import SHARE_ICON from '$lib/assets/img/ic_share.svg'
  import RoundCardsIconsButton from '$lib/components/global-view/items/RoundCardsIconsButton.svelte'
  import { shareATxt } from '$lib/utils/f'

  function shareWebsite() {
    const title = 'Discover Zene 🎶 an Ad-free music app \n🆓 Enjoy free music for life and many more amazing features. Get now https://zenemusic.co/download'
    shareATxt(title, title, null)
  }
</script>

<div class="px-4">
  <div class="w-full bg-maincolor rounded-md flex flex-col justify-center items-center">
    <div class="h-6" />
    <p class="text-white urbanist-semibold text-xl ms-1.5 text-center">Help us by Donating <br />or<br />Become a part of Zene inner community.</p>
    <p class="text-white urbanist-regular text-base mt-7 text-center mx-3">
      Hey there! Have you tried Zene yet? It's an awesome music app that's completely free, with no annoying popup or audio ads to disrupt your listening experience. We've put a lot of effort and money into making it great, but we do need a little help. <br />If you can donate it
      will really help us to maintain or server or join the Zene inner community where you will start to get paid once the app is profitable or at least share Zene with-in your friends and family, you can help us build the Zene family and give free music to everyone.
    </p>

    <div class="overflow-x-auto flex mt-9 scrollbar-hide">
      <RoundCardsIconsButton title={'Donate'} img={DONATE_ICON} functions={() => window.open('bit.ly/3XphmuL', '_blank')} />
      <RoundCardsIconsButton title={'Become a member'} img={CROWN_ICON} functions={() => window.open('bit.ly/3wQav2B', '_blank')} />
    </div>

    <RoundCardsIconsButton title={'Share Zene with your friend and family'} img={SHARE_ICON} functions={shareWebsite} />

    <div class="h-6" />
  </div>
</div>
