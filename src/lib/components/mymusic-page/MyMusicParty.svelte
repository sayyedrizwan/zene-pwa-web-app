<script lang="ts">
    import { gllg_in, llg_in } from '$lib/utils/Utils'
    import { wait } from '$lib/utils/indexd'
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
    import { onMount } from 'svelte'

  onMount(async ()=> {
    await wait(500)
    const mail = localStorage.getItem('usm') != null ? await gllg_in(localStorage.getItem('usm')!) : null
    // console.log(mail)
  })

  async function googleSignIn() {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      const enc = await llg_in(user.email?.trim()?.replaceAll("", "_")!)
      if(enc ?? null != null) localStorage.setItem('usm', enc!)
    } catch (error) {
      alert('Error trying to login. Please try again....')
    }
  }
</script>

<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16 text-start">Music Group Party</h3>

<div class="overflow-x-auto flex scrollbar-hide">
  <div class="bg-maincolor rounded-lg p-3 m-2 flex flex-col justify-center items-center">
    <p class="text-white urbanist-regular text-lg break-words mt-20 mx-12 line-clamp-2">Start a group Party</p>

    <button class="border border-white rounded-full my-20" on:click={googleSignIn}>
      <p class="text-white urbanist-thin text-base break-words my-3 mx-3 line-clamp-2 text-center">Login to continue</p>
    </button>
  </div>
</div>
