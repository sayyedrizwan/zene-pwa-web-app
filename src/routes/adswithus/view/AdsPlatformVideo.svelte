<script lang="ts">
  import AdsMockupOne from '$lib/assets/img/ads_mockup_one.png'
</script>

<h1 class="text-3xl urbanist-semibold tracking-tight text-slate-900 mt-56">Make Zene Platform all About <u>Your Brand story</u></h1>

<div class="flex flex-col md:flex-row justify-center items-center my-20 gap-4">
  <div class="flex flex-col justify-center items-center">
    <p class="text-lg text-white urbanist-regular mb-4">Zene Ads on Desktop, MacOS, Linux, Chrome extension</p>
    <video class="h-[32rem]" controls={true} muted={true} autoplay={true} loop={true} playsinline>
      <track kind="captions" />
      <source src="/ad/web-ads.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  <div class="flex flex-row justify-center items-center my-20 gap-4">
    <div class="flex flex-col justify-center items-center">
      <p class="text-lg text-white urbanist-regular mb-4">Zene Ads on IOS</p>

      <video class="h-[32rem]" controls={true} muted={true} autoplay={true} loop={true} playsinline>
        <track kind="captions" />
        <source src="/ad/ios-ads.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="flex flex-col justify-center items-center">
      <p class="text-lg text-white urbanist-regular mb-4">Zene Ads on Android</p>

      <video class="h-[32rem]" controls={true} muted={true} autoplay={true} loop={true} playsinline>
        <track kind="captions" />
        <source src="/ad/android-ads.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>

<br /><br /><br /><br /><br />
<p class=" text-white urbanist-regular text-center text-xl m-1">✔️ We Promote one Brand At a Time.</p>
<p class=" text-white urbanist-thin text-center text-xl m-3">
  Unlike mainstream ad platforms where countless brands clamor for attention, we're dedicated to showcasing in the spotlight at a time across all our platforms. We believe in building trust through storytelling, crafting a unique narrative for each brand we promote. Step into a
  world where your brand takes center stage, leaving a lasting impression on your audience.
</p>
<br /><br /><br /><br /><br /><br /><br /><br />

<section class="bg-white rounded-xl m-3">
  <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
    <div class="w-full lg:w-1/2">
      <div class="lg:max-w-lg">
        <h1 class="text-3xl tracking-wide text-black urbanist-regular lg:text-5xl">We Promote one Brand At a Time.</h1>

        <p class=" text-black urbanist-thin text-center text-xl m-3 mt-9">
          Unlike mainstream ad platforms where countless brands clamor for attention, we're dedicated to showcasing in the spotlight at a time across all our platforms. We believe in building trust through storytelling, crafting a unique narrative for each brand we promote. Step
          into a world where your brand takes center stage, leaving a lasting impression on your audience.
        </p>
      </div>
    </div>

    <div class="flex items-center justify-center w-full h-full lg:w-1/2">
      <img src={AdsMockupOne} alt="zene screenhot" class="object-contain w-full h-full" />
    </div>
  </div>
</section>

<div class="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
  <div class="lg:w-72 px-6 lg:px-0">
    <div class="p-2 bg-blue-600 rounded-lg shadow-lg sm:p-3">
      <div class="flex flex-wrap items-center justify-between">
        <a target="_blank" href="https://www.buymeacoffee.com/khatabwedaa" class="flex items-center flex-1 w-0">
          <span class="flex p-2 bg-blue-800 rounded-lg">
            <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.12954 3.00772C5.48563 2.38457 6.14831 2 6.86603 2H17.134C17.8517 2 18.5144 2.38457 18.8704 3.00772L20.0133 5.00772C20.6612 6.14163 20.0618 7.51107 18.9235 7.89532C18.9276 7.97661 18.9269 8.0591 18.9209 8.14249L18.0638 20.1425C17.989 21.1891 17.1181 22 16.0689 22H7.9311C6.88182 22 6.01094 21.1891 5.93618 20.1425L5.07904 8.14249C5.07308 8.0591 5.07231 7.97661 5.07645 7.89531C3.93813 7.51105 3.33874 6.14162 3.98668 5.00772L5.12954 3.00772ZM7.07396 8L7.28824 11H16.7117L16.926 8H7.07396ZM7.71681 17L7.9311 20H16.0689L16.2831 17H7.71681ZM18.2768 6L17.134 4L6.86603 4L5.72317 6H18.2768Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>

          <p class="ml-3 font-medium tracking-wide text-white truncate">By me a coffee</p>
        </a>
      </div>
    </div>
  </div>
</div>
