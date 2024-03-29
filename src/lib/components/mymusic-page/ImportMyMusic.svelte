<script lang="ts">
  import SpotifyIcon from '$lib/assets/img/ic_spotify_icon.svg'
  import YTMusicIcon from '$lib/assets/img/ic_youtube_music.svg'
  import AppleMusicIcon from '$lib/assets/img/ic_apple_music.svg'
  import ArrowIcon from '$lib/assets/img/ic_arrow_left.svg'
  import { spotifyAuthURL } from '../../../routes/api/utils/utils'
  import { notificationAlertListener } from '$lib/utils/f'

  async function startSpotify() {
    window.open(spotifyAuthURL(), '_blank')
  }

  async function startYtMusic() {
    notificationAlertListener('Coming soon....', 'Youtube Music playlist syncing is currently being developed and can only be used in Android App.', YTMusicIcon)
  }

  async function startAppleMusic() {
    notificationAlertListener('Coming soon....', 'Apple Music playlist syncing is currently being developed and can only be used in Android App.', AppleMusicIcon)
  }
</script>

<div>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
    {#each Array(3) as _, index (index)}
      <button class="w-full bg-maincolor rounded-lg py-12 md:py-20 px-4 flex flex-col justify-center" on:click|stopPropagation={index == 0 ? startSpotify : index == 1 ? startYtMusic : startAppleMusic}>
        <img src={index == 0 ? SpotifyIcon : index == 1 ? YTMusicIcon : AppleMusicIcon} alt="icon" class="size-11 md:size-16 self-center" />
        <h3 class="text-white w-full text-center urbanist-semibold text-sm md:text-base mt-5">Import playlists from <br />{index == 0 ? `Spotify` : index == 1 ? `Youtube Music (Coming Soon)` : `Apple Music (Coming Soon)`}</h3>
        <img src={ArrowIcon} alt="arrow" class="size-6 mt-3 self-center -rotate-45" />
      </button>
    {/each}
  </div>
</div>
