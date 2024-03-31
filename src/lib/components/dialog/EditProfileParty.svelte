<script lang="ts">
  import { wait } from '$lib/utils/indexd'
  import { onMount } from 'svelte'
  import MusicPersonIcon from '$lib/assets/img/ic_music_listener.png'
  import { env } from '$env/dynamic/public'
    import { gK } from '$lib/utils/Utils'

  export let close: () => void
  export let email: string | null
  let img: string | null
  let name: string | null
  let loading: boolean = false

  onMount(() => {
    img = localStorage.getItem('zene-img')
    name = localStorage.getItem('zene-name')
  })

  function signinOut(){
    localStorage.removeItem('usm')
    window.location.reload()
  }

  async function nameChange(e: any) {
    await wait(100)
    const v = document.getElementById('uname') as HTMLInputElement
    if (v.value.length > 3) localStorage.setItem('zene-name', v.value)
  }

  async function uploadImage() {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = 'image/*'

    fileInput.onchange = async (e: any) => {
      if (!e.target.files || !e.target.files[0]) return
      loading = true

      try {
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        const r = await fetch(env.PUBLIC_UPLOAD_IMG, { method: 'POST', body: formData, headers: { AuthorizationKey: gK() } })
        const response = (await r.json()) as any
        if(response.status){
            img = response.path
            localStorage.setItem('zene-img', response.path)
        } else 
          alert('Error uploading image. Please try again.')
       
      } catch (error) {
        alert('Error uploading image. Please try again.')
      }
      loading = false
    }

    fileInput.click()
  }
</script>

<div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full h-full bg-black bg-opacity-70">
  <div id="default-modal" tabindex="-1" aria-hidden="true" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div class="relative p-4 w-full">
      <div class="relative bg-white rounded-lg w-full">
        <div class="flex items-center justify-between p-4 md:p-5">
          <div>
            <h3 class="text-xl text-black urbanist-bold">Edit Profile</h3>
            <p>{email}</p>
          </div>

          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" on:click|stopPropagation={close}>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        <div class="p-4 md:p-5 space-y-4 flex flex-col justify-center items-center">
          <div class="relative">
            <img src={img} alt="srk" class="size-48 object-cover mx-10 lg:mx-32 rounded-full" on:error={() => (img = MusicPersonIcon)} />

            {#if loading}
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg aria-hidden="true" class="size-12 text-gray-200 animate-spin fill-maincolor" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            {/if}
          </div>
          <button on:click={uploadImage}><p class="text-maincolor urbanist-thin text-base break-words my-3 mx-3 line-clamp-2 text-center">update profile picture</p></button>

          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input on:input={nameChange} type="text" value={name} id="uname" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="name" maxlength="30" />
          </div>
        </div>

        <button data-modal-hide="static-modal" type="button" class="text-white bg-maincolor font-medium rounded-lg text-sm px-5 py-2.5 text-center urbanist-regular m-6" on:click|stopPropagation={close}>Done</button>
        <button data-modal-hide="static-modal" type="button" class="text-white bg-maincolor font-medium rounded-lg text-sm px-5 py-2.5 text-center urbanist-regular m-6" on:click|stopPropagation={signinOut}>Sign-Out</button>
      </div>
    </div>
  </div>
</div>
