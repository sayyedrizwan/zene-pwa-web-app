<script lang="ts">
  import SettingsViewSelect from '$lib/components/global-view/SettingsViewSelect.svelte'
  import { getCookie } from '$lib/utils/c'
  import { onMount } from 'svelte'

  let songQuality: string
  let songSpeed: string
  let songLoop: string
  let songAutoplay: string

  onMount(() => {
    songQuality = getCookie('song_quality') == 'Low Quality' ? 'Low Quality' : 'High Quality'
    songLoop = getCookie('should_loop') == 'should' ? 'Enable' : 'Disable'
    songSpeed =
      getCookie('song_speed') == '0.25x'
        ? '0.25x'
        : getCookie('song_speed') == '0.5x'
          ? '0.5x'
          : getCookie('song_speed') == '0.75x'
            ? '0.75x'
            : getCookie('song_speed') == '1.25x'
              ? '1.25x'
              : getCookie('song_speed') == '1.5x'
                ? '1.5x'
                : getCookie('song_speed') == '1.75x'
                  ? '1.75x'
                  : getCookie('song_speed') == '2.0x'
                    ? '2.0x'
                    : '1.0x (Normal)'

    songAutoplay = getCookie('autoplay_next_song').trim() == '' ? 'Enable' : 'Disable'
  })

  function speedFunction() {
    try {
      const customEvent = new CustomEvent('changeplaybackspeed', {})
      document.dispatchEvent(customEvent)
    } catch (error) {
      error
    }
  }

  $: songSpeed, speedFunction()
</script>

<svelte:head>
  <title>Settings | Zene: A Free Muic App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Settings | Zene: A Free Muic App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/settings" />
</svelte:head>

<div class="relative mx-auto px-6 pt-20 text-center pb-24 text-white">
  <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl w-full text-start">Settings</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-9">
    <SettingsViewSelect
      txt={'Audio Quality'}
      list={[
        ['Low Quality', ''],
        ['High Quality', ''],
      ]}
      cookies_name={'song_quality'}
      bind:selected={songQuality}
    />
    <SettingsViewSelect
      txt={'Song Playback Speed'}
      list={[
        ['0.25x', ''],
        ['0.5x', ''],
        ['0.75x', ''],
        ['1.0x (Normal)', ''],
        ['1.25x', ''],
        ['1.5x', ''],
        ['1.75x', ''],
        ['2.0x', ''],
      ]}
      cookies_name={'song_speed'}
      bind:selected={songSpeed}
    />
    <SettingsViewSelect
      txt={'Play Song On Loop'}
      list={[
        ['Enable', 'should'],
        ['Disable', 'no'],
      ]}
      cookies_name={'should_loop'}
      bind:selected={songLoop}
    />
    <SettingsViewSelect
      txt={'Autoplay Next Song'}
      list={[
        ['Enable', '  '],
        ['Disable', 'no'],
      ]}
      cookies_name={'autoplay_next_song'}
      bind:selected={songAutoplay}
    />
  </div>

  <div class="h-40" />
</div>
