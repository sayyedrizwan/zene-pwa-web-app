<script lang="ts">
  import { gllg_in, llg_in } from '$lib/utils/Utils'
  import { wait } from '$lib/utils/indexd'
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
  import { onMount } from 'svelte'
  import EditProfileParty from '../dialog/EditProfileParty.svelte'

  let email: string | null = null
  let img: string | null = null
  let name: string | null = null
  let edit: boolean = false

  onMount(async () => {
    await wait(900)
    email = localStorage.getItem('usm') != null ? await gllg_in(localStorage.getItem('usm')!) : null
   
  })

  async function googleSignIn() {
    if (email != null) {
      return
    }
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      const enc = await llg_in(user.email?.trim()?.replaceAll('', '_')!)
      if (enc ?? null != null) {
        localStorage.setItem('usm', enc!)
        if(user.displayName) localStorage.setItem('zene-name', user.displayName)
        if(user.photoURL) localStorage.setItem('zene-img', user.photoURL)
        email = enc
        img = user.photoURL
        name = user.displayName
      }
    } catch (error) {
      console.log(error)
      alert('Error trying to login. Please try again....')
    }
  }
</script>

<div class="flex items-center justify-between mx-4 mb-3">
  <h3 class="text-white urbanist-semibold text-lg md:text-xl text-start">Music Group Party</h3>
  {#if email != null}
    <button on:click={() => (edit = true)}><p class="text-white urbanist-thin text-base break-words mt-1 text-center cursor-pointer">Edit Profile</p></button>
  {/if}
</div>

<div class="overflow-x-auto flex scrollbar-hide">
  <div class="bg-maincolor rounded-lg p-3 m-2 flex flex-col justify-center items-center">
    <p class="text-white urbanist-regular text-lg break-words mt-20 mx-12 line-clamp-2">Start a group Party 🎉</p>

    <button class="border border-white rounded-full my-20" on:click={googleSignIn}>
      {#if email == null}
        <p class="text-white urbanist-thin text-base break-words my-3 mx-3 line-clamp-2 text-center">Login to continue</p>
      {:else}
        <p class="text-white urbanist-thin text-base break-words my-3 mx-3 line-clamp-2 text-center">&nbsp; &nbsp; &nbsp; start &nbsp; &nbsp; &nbsp;</p>
      {/if}
    </button>
  </div>
</div>

{#if edit}
  <EditProfileParty close={() => (edit = false)} bind:email />
{/if}
