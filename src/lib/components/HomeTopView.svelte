<script lang="ts">
  import { startAppleSignIn, startFacebookSignIn, startGoogleSignIn } from "$lib/utils/LoginUtils";
  import { onMount } from "svelte";

  export let data: any;

  let showExtraTxt = false;
  let showLoginData = false;

  onMount(() => {
    if (data.loggedIn == true) {
      showLoginData = true;
    } else {
      showLoginData = false;
    }

    setTimeout(() => {
      showExtraTxt = true;
    }, 500);
  });
</script>

<div class="z-20 h-[85vh] w-full bg-maincolor">
  <div class="flex flex-col h-screen items-center justify-center text-white">
    <div class="mb-24">
      <div class="flex items-center justify-center">
        <h1 class="antro-vectra text-8xl antro-vectra">Zene</h1>
      </div>
      <h2 class="transition-all duration-500 poppins-regular {showExtraTxt ? 'opacity-100' : 'opacity-0'} p-4 text-center">Immerse in ad-free bliss with 1B+ songs. Elevate your vibe. 🎶✨</h2>
    </div>

    {#if showLoginData}
      <div>
        <a href="/" class="{showExtraTxt ? 'opacity-100' : 'opacity-0'} flex flex-row mt-8 xl:mt-12 px-12 py-5 text-lg poppins-regular leading-tight bg-lightblue rounded-full shadow-xl border border-transparent hover-animation hover:bg-gray-950 text-black hover:text-white justify-center items-center">
          <img class="size-14 rounded-md" src={data.photo} alt={data.name.toString()} referrerpolicy="no-referrer" />

          <div class="flex flex-col ms-3">
            <h2 class="poppins-semi-bold text-left">{data.name}</h2>
            <h2 class="poppins-regular pt-2 text-left">{data.email}</h2>
          </div>
        </a>
        <button class="p-4 text-center poppins-thin {showExtraTxt ? 'opacity-100' : 'opacity-0'} cursor-pointer justify-center items-center w-full" on:click={() => showLoginData = false}>Switch Account</button>
      </div>
    {:else}
      <div class="flex flex-row justify-around items-center w-80 transition-all duration-500 {showExtraTxt ? 'opacity-100' : 'opacity-0'} mt-7">
        <button on:click={startGoogleSignIn}>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-10" viewBox="0 0 256 262">
            <path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
            <path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
            <path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" />
            <path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
          </svg>
        </button>

        <button on:click={startAppleSignIn}>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-12" viewBox="0 0 24 24">
            <path
              fill="white"
              d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11"
            />
          </svg>
        </button>

        <button on:click={startFacebookSignIn}>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-10" viewBox="0 0 256 256">
            <path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
            <path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" />
          </svg>
        </button>
      </div>

      <h2 class="p-4 text-center poppins-thin {showExtraTxt ? 'opacity-100' : 'opacity-0'}">Sign in to continue to Zene Web</h2>
    {/if}
  </div>
</div>
