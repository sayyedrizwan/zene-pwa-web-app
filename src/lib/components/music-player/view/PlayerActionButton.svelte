<script lang="ts">
  import RoundCardsIconsButton from '$lib/components/global-view/items/RoundCardsIconsButton.svelte'
  import IconFilmIcon from '$lib/assets/img/ic_flim_slate.svg'
  import ShareIcon from '$lib/assets/img/ic_share.svg'
  import CaptionIcon from '$lib/assets/img/ic_closed_caption.svg'
  import RepeatIcon from '$lib/assets/img/ic_repeat.svg'
  import LoopIcon from '$lib/assets/img/ic_loop.svg'
  import DownloadIcon from '$lib/assets/img/ic_download.svg'
  import HeadphoneIcon from '$lib/assets/img/ic_headphones.svg'
  import { MusicPlayerData, MusicPlayerPlayingStatus, type ResponseMusicPlayerPlayingStatus } from '../../../../domain/local/entities/MusicPlayerData'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import type { MusicPlayerVideos } from '../../../../domain/local/entities/MusicPlayerVideos'
  import { getMusicVideoIdData, setMusicVideoIdData } from '$lib/utils/pid'

  export let musicData: MusicPlayerData | null
  export let musicPlayerPlayingStatus: ResponseMusicPlayerPlayingStatus
  export let toMusicFunction: () => void

  async function loadVideo() {
    const v = getMusicVideoIdData(musicData?.m?.songId ?? '')
    if (v?.video != null) {
      musicPlayerPlayingStatus = { type: MusicPlayerPlayingStatus.VIDEO, data: v.video }
      return
    }
    const res = await axios.post(env.PUBLIC_MUSIC_VIDEO, { id: musicData?.m?.songId })
    const response = res.data as MusicPlayerVideos
    setMusicVideoIdData(response)
    musicPlayerPlayingStatus = { type: MusicPlayerPlayingStatus.VIDEO, data: response.video }
  }

  async function loadLyricsVideo() {
    const v = getMusicVideoIdData(musicData?.m?.songId ?? '')
    if (v?.video != null) {
      musicPlayerPlayingStatus = { type: MusicPlayerPlayingStatus.VIDEO, data: v.lyrics }
      return
    }
    const res = await axios.post(env.PUBLIC_MUSIC_VIDEO, { id: musicData?.m?.songId })
    const response = res.data as MusicPlayerVideos
    setMusicVideoIdData(response)
    musicPlayerPlayingStatus = { type: MusicPlayerPlayingStatus.LYRICS_VIDEO, data: response.lyrics }
  }
</script>

<div class="overflow-x-auto flex mt-9 scrollbar-hide mb-9">
  {#if musicPlayerPlayingStatus.type == MusicPlayerPlayingStatus.VIDEO}
    <RoundCardsIconsButton img={HeadphoneIcon} title={'Switch to Music'} functions={toMusicFunction} />
  {:else}
    <RoundCardsIconsButton img={IconFilmIcon} title={'Switch to Video'} functions={loadVideo} />
  {/if}

  {#if musicPlayerPlayingStatus.type == MusicPlayerPlayingStatus.LYRICS_VIDEO}
    <RoundCardsIconsButton img={HeadphoneIcon} title={'Switch to Music'} functions={toMusicFunction} />
  {:else}
    <RoundCardsIconsButton img={CaptionIcon} title={'Switch to Lyrics Video'} functions={loadLyricsVideo} />
  {/if}

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
