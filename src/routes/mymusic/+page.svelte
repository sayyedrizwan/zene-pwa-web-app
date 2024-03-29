<script lang="ts">
  import MyMusicHistory from '$lib/components/mymusic-page/MyMusicHistory.svelte'
  import ImportMyMusic from '$lib/components/mymusic-page/ImportMyMusic.svelte'
  import { onMount } from 'svelte'
  import SettingsIcon from '$lib/assets/img/ic_setting.svg'
  import Footer from '$lib/components/global-view/Footer.svelte'
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

  onMount(async () => {
    // window.performance.getEntries().map(e => console.log(e.name) )
  })

  async function googleSignIn() {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const user = result.user
        alert(`Welcome ${user.displayName}`)
      })
      .catch((error) => {
        const errorMessage = error.message
        alert(errorMessage)
      })
  }
</script>

<svelte:head>
  <title>My Music | Zene: A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="My Music | Zene: A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/mymusic" />
</svelte:head>

<div class="relative md:ms-7 mt-11 mb-11">
  <h3 class="absolute top-2 text-white urbanist-semibold text-4xl md:text-6xl">My Music</h3>
  <a href="/settings"><img class="absolute top-2 right-4 size-8" src={SettingsIcon} alt="settings" /></a>
</div>

<br /><br />

<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-4 md:ms-7 mt-20">History</h3>

<div class="overflow-x-auto flex scrollbar-hide mt-3">
  <MyMusicHistory />
</div>

<div class="h-44 md:h-72" />

<ImportMyMusic />

<div class="h-44 md:h-72" />

<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16 text-start">Music Group Party</h3>

<div class="overflow-x-auto flex scrollbar-hide">
  <div class="bg-maincolor rounded-lg p-3 m-2 flex flex-col justify-center items-center">
    <p class="text-white urbanist-regular text-lg break-words mt-20 mx-12 line-clamp-2">Start a group Party</p>

    <button class="border border-white rounded-full my-20" on:click={googleSignIn}>
      <p class="text-white urbanist-thin text-base break-words my-3 mx-3 line-clamp-2 text-center">Login to continue</p>
    </button>
  </div>
</div>

<div class="h-64" />

<Footer />
