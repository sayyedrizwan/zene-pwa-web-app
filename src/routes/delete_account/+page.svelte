<script lang="ts">
  import Footer from "$lib/components/item/Footer.svelte";
  import { support_mail_server } from "$lib/utils/Utils";

  var showDeleteLoading = false;

  function isSubmit() {
    showDeleteLoading = true;
    location.href = "#the_form"

    setTimeout(()=> {
      showDeleteLoading = false
      window.location.reload()
      alert("We have registered your request, Please give us some time to work on it.")
    }, 4000)
  }
</script>

<svelte:head>
  <title>Data retention and account termination | Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Data retention and account termination | Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/delete_account" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>

<div class="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24 text-white">
  <h1 class="text-4xl tracking-tight text-slate-900 sm:text-5xl poppins-bold">Data retention and account termination</h1>
  <p class="mt-4 text-base leading-7 text-slate-600 poppins-thin">Last updated on Aug 12, 2024</p>
</div>

<div class="mx-auto max-w-7xl prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600 text-white poppins-regular">
  <p class="flex-1">
    We will remove all your data and history from your account profile, but we may retain information about you for the purposes authorized under this Privacy Policy unless prohibited by law. Thereafter, we will either delete your personal information or de-identify it so that it is anonymous and not attributed to your identity. For example, we may retain information to prevent, investigate, or identify possible wrongdoing in connection with the Service or to comply with
    legal obligations.
    <br /><br />
    <br />
    If you have any queries relating to the processing/ usage of information provided by you or Zene's Privacy Policy, you may email the Data Protection Officer (DPO) at <a href="mailto:{support_mail_server}" target="_blank" class="text-lightblue hover:text-blue-500 flex flex-row items-center mt-6">knocknock@zenemusic.co</a> or write to us at the following address.
    <br /><br />
  </p>
  <br /><br />
  <form on:submit={isSubmit} id="the_form">
    <h2 class="text-2xl">Delete Account Form</h2>
    <p class="text-sm">The process can take upto 7-10 days.</p>
    <div class="mb-5 mt-16">
      <label for="base-input" class="block mb-2 text-sm font-medium text-white">Email Address</label>
      <input required type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
    <div class="mb-5 mt-16">
      <label for="base-input" class="block mb-2 text-sm font-medium text-white">Latest song name that you have played now?</label>
      <input required type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
    <div class="mb-5 mt-16">
      <label for="base-input" class="block mb-2 text-sm font-medium text-white">Reason why you want to delete your account?</label>
      <input required type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
    <div class="mb-5 mt-16">
      {#if showDeleteLoading}
        <div role="status">
          <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin fill-maincolor" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      {:else}
        <button type="submit" class="text-white bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Proceed to Delete</button>
      {/if}
    </div>
  </form>
</div>

<Footer />
