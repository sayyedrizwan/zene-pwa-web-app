<script lang="ts">
  import RoundCardsIconsButton from '$lib/components/global-view/items/RoundCardsIconsButton.svelte'
  import IconFilmIcon from '$lib/assets/img/ic_flim_slate.svg'
  import ShareIcon from '$lib/assets/img/ic_share.svg'
  import CaptionIcon from '$lib/assets/img/ic_closed_caption.svg'
  import RepeatIcon from '$lib/assets/img/ic_repeat.svg'
  import LoopIcon from '$lib/assets/img/ic_loop.svg'
  import DownloadIcon from '$lib/assets/img/ic_download.svg'
  import { MusicPlayerPlayingStatus, type ResponseMusicPlayerPlayingStatus } from '../../../../domain/local/entities/MusicPlayerData'

  export let musicPlayerPlayingStatus: ResponseMusicPlayerPlayingStatus

  async function loadVideo() {
    musicPlayerPlayingStatus = { type: MusicPlayerPlayingStatus.VIDEO, data: '' }
  }

  async function loadLyricsVideo() {
    musicPlayerPlayingStatus = { type: MusicPlayerPlayingStatus.LYRICS_VIDEO, data: '' }
  }
</script>

<div class="overflow-x-auto flex mt-9 scrollbar-hide mb-9">
  <RoundCardsIconsButton img={IconFilmIcon} title={'Switch to Video'} functions={loadVideo} />
  <RoundCardsIconsButton img={CaptionIcon} title={'Switch to Lyrics Video'} functions={loadLyricsVideo} />
  <RoundCardsIconsButton img={RepeatIcon} title={'Play in Loop'} functions={loadVideo} />
  <RoundCardsIconsButton img={LoopIcon} title={'Autoplay is on'} functions={loadVideo} />
  <RoundCardsIconsButton img={ShareIcon} title={'Share'} functions={loadVideo} />
  <RoundCardsIconsButton img={DownloadIcon} title={'Offline Download'} functions={loadVideo} />
</div>

<!-- // switch to video
//switch to lyrics video
//play in loop
//autoplay is on/off
//share
//add to playlist
//offline download
// -->
