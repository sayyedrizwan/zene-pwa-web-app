<script lang="ts">
  import RoundCardsIconsButton from '$lib/components/global-view/items/RoundCardsIconsButton.svelte'
  import IconFilmIcon from '$lib/assets/img/ic_flim_slate.svg'
  import ShareIcon from '$lib/assets/img/ic_share.svg'
  import CaptionIcon from '$lib/assets/img/ic_closed_caption.svg'
  import RepeatIcon from '$lib/assets/img/ic_repeat.svg'
  import LoopIcon from '$lib/assets/img/ic_loop.svg'
  import DownloadIcon from '$lib/assets/img/ic_download.svg'
</script>

<div class="overflow-x-auto flex mt-9 scrollbar-hide mb-9">
    <RoundCardsIconsButton img={IconFilmIcon} title={'Switch to Video'} />
    <RoundCardsIconsButton img={CaptionIcon} title={'Switch to Lyrics Video'} />
    <RoundCardsIconsButton img={RepeatIcon} title={'Play in Loop'} />
    <RoundCardsIconsButton img={LoopIcon} title={'Autoplay is on'} />
    <RoundCardsIconsButton img={ShareIcon} title={'Share'} />
    <RoundCardsIconsButton img={DownloadIcon} title={'Offline Download'} />
</div>

<!-- // switch to video
//switch to lyrics video
//play in loop
//autoplay is on/off
//share
//add to playlist
//offline download
// -->
