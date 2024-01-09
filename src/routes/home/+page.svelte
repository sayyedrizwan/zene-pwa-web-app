<script lang="ts">
  import "../tailwind.svelte";
</script>

<div class="text-white bg-black">
  <header class="text-white body-font">
    <div class="container mx-auto flex flex-wrap p-5 md:flex-row">
      <a
        class="flex title-font font-medium text-white mb-4 md:mb-0 pr-4"
        href="/"><span class="ml-3 text-3xl">Zene</span></a
      ><button
        class="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3"
        type="button"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
          ><line x1="3" y1="12" x2="21" y2="12"></line><line
            x1="3"
            y1="6"
            x2="21"
            y2="6"
          ></line><line x1="3" y1="18" x2="21" y2="18"></line></svg
        ></button
      >
      <div
        class="md:flex flex-grow items-center hidden"
        id="example-navbar-danger"
      >
        <nav
          class="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7"
        >
          <a class="mr-6 hover:text-white" href="/">Home</a>
        </nav>
        <a
          href="https://play.google.com/store/apps/details?id=com.rizwansayyed.zene"
          class="px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >Download</a
        >
      </div>
    </div>
  </header>
  <section class="text-black body-font lg:pt-20">
    <div class="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
      <div class="flex flex-col w-full mb-2 text-left md:text-center">
        <h1
          class="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl"
        >
          <span>Zene Web Player for </span><br class="hidden lg:block" /> IOS
          and Web is <br class="hidden lg:block" /> under development
        </h1>
        <br />
        <p
          class="mx-auto text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3"
        >
          Zene team is working and try to provide a free music expreience to all
          the user all accross the world.
        </p>
      </div>
    </div>
    <div
      class="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3"
    >
      <img
        class="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
        alt="hero"
        src="./images/placeholder.png"
      />
    </div>
    <section class="text-gray-600 body-font">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/3 w-1/2">
              <h2
                class="title-font font-medium sm:text-5xl text-3xl text-white"
              >
                <span>20,000+</span>
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/3 w-1/2">
              <h2
                class="title-font font-medium sm:text-5xl text-3xl text-white"
              >
                <span>6,000+</span>
              </h2>
              <p class="leading-relaxed">Listeners/s</p>
            </div>
            <div class="p-4 sm:w-1/3 w-1/2">
              <h2
                class="title-font font-medium sm:text-4xl text-3xl text-white"
              >
                <span>1B+</span>
              </h2>
              <p class="leading-relaxed">Song, Artists, Albums Library</p>
            </div>
          </div>
        </div>
      </section>
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            class="object-cover object-center h-full w-full"
            src="./images/placeholder.png"
          />
        </div>
        <div
          class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"
        >
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-white text-2xl title-font font-medium mb-3">
                Free
              </h2>
              <p class="leading-relaxed text-lg">Ad-Free Forever</p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-white text-2xl title-font font-medium mb-3">
                Responsive
              </h2>
              <p class="leading-relaxed text-lg">
                Work on all kind of devices.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-white text-2xl title-font font-medium mb-3">
                Fast
              </h2>
              <p class="leading-relaxed text-lg">
                Zene Web App and Song are cache all around the world
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-white text-2xl title-font font-medium mb-3">
                High Defination Music
              </h2>
              <p class="leading-relaxed text-lg">
                All Music on Zene is in HD and support 192kHz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container px-5 mx-auto">
        <div class="text-center mb-20">
          <h2 class="sm:text-5xl font-medium title-font text-white mb-4">
            Our Motto
          </h2>
          <p
            class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"
          >
            To Give Free Music to All Users
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
          </div>
        </div>
      </div>
    </section>
  </section>
  <footer class="text-white body-font">
    <div
      class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
    >
      <a
        class="flex title-font font-medium items-center md:justify-start justify-center"
        href="/"><span class="ml-3 text-xl">Zene</span></a
      ><span
        class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
        ><a class="ml-3" href="https://www.instagram.com/zene__music/"
          ><svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            ><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path
              d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
            ></path></svg
          ></a
        ></span
      >
    </div>
  </footer>
</div>
