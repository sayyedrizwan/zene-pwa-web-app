<script lang="ts">
  import { getAuth, GoogleAuthProvider, signInWithPopup, OAuthProvider, FacebookAuthProvider } from "firebase/auth";
  import { onMount, onDestroy } from "svelte";
  import GOOGLE_ICON from "$lib/assets/img/icon/ic_google.svg";
  import APPLE_ICON from "$lib/assets/img/icon/ic_apple.svg";
  import FB_ICON from "$lib/assets/img/icon/ic_facebook.svg";
  let showDescText = false;

  let content: string = "Zene";
  let typedChar: string = "";

  $: if (!content) typedChar = "";

  let showLoginDialog = false;
  let interval: NodeJS.Timeout;

  onMount(() => {
    interval = setInterval(() => {
      if (typedChar.length < content.length) {
        typedChar += content[typedChar.length];
      } else {
        showDescText = true;
        clearInterval(interval);
      }
    }, 250);
  });

  onDestroy(() => clearInterval(interval));

  async function loginIn(email: String, name: String, photoURL: String) {
    // const key = genRdString(26)
    // setCookie('i_s', key)
    // setCookie('u_id', await enTheData(email.toString(), key))
    // window.location.href = "/";
  }

  async function googleSignIn() {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    const auth = getAuth();

    const result = await signInWithPopup(auth, provider);
    result.user.providerData.forEach((p) => {
      const email = p.email ?? "";
      const displayName = p.displayName ?? "";
      const photoURL = p.photoURL ?? "";
      loginIn(email, displayName, photoURL);
    });
  }

  async function appleSignIn() {
    const provider = new OAuthProvider("apple.com");
    provider.addScope("name");
    provider.addScope("email");
    const auth = getAuth();

    const result = await signInWithPopup(auth, provider);
    let displayName = result.user.displayName ?? "";
    let email = "";
    result.user.providerData.forEach((p) => {
      if (p?.email?.includes("@")) {
        email = p.email;
        if (p.displayName != null) displayName = p.displayName;
      }
    });

    loginIn(email, displayName, "");
  }

  async function fbSignIn() {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();

    const result = await signInWithPopup(auth, provider);

    const displayName = result.user.displayName ?? "";
    const photoURL = result.user.photoURL ?? "";
    let email = "";
    result.user.providerData.forEach((p) => {
      if (p?.email?.includes("@")) email = p.email;
    });
    loginIn(email, displayName, photoURL);
  }
</script>

<div class="z-20 h-[85vh] w-full bg-maincolor">
  <div class="flex flex-col h-screen items-center justify-center text-white">
    <div class="mb-24">
      <div class="flex items-center justify-center">
        <h1 class="antro-vectra text-8xl">{typedChar}</h1>
      </div>
      <h2 class="{showDescText ? 'fade-in' : 'hidden'} p-4 text-center">Immerse in ad-free bliss with 1B+ songs. Elevate your vibe. 🎶✨</h2>
    </div>
    {#if showDescText}
      <button on:click={() => (showLoginDialog = true)} class="mt-8 px-12 py-5 text-lg font-medium leading-tight inline-block bg-lightblue rounded-full shadow-xl border border-transparent hover-animation hover:bg-gray-950 text-black hover:text-white">Login to Zene Web</button>
    {/if}
  </div>
</div>

{#if showLoginDialog}
  <div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed bottom-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-30">
    <div class="fixed bottom-0 p-4 w-full max-w-2xl max-h-full">
      <div class="relative w-screen pe-8">
        <div class="bg-white rounded-lg shadow">
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white urbanist-regular">Login to continue</h3>
            <button on:click={() => (showLoginDialog = false)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <div class="flex flex-row justify-around items-center py-24">
            <button on:click={googleSignIn}><img src={GOOGLE_ICON} class="size-10 cursor-pointer" alt="google" /> </button>
            <button on:click={appleSignIn}><img src={APPLE_ICON} class="size-10 cursor-pointer" alt="apple" /> </button>
            <button on:click={fbSignIn}><img src={FB_ICON} class="size-10 cursor-pointer" alt="facebook" /> </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
