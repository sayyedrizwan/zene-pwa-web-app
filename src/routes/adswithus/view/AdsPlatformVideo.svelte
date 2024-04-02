<script lang="ts">
  import AdsMockupOne from '$lib/assets/img/ads_mockup_one.png'
  import AdsMockupTwo from '$lib/assets/img/ads_mockup_two.png'
    import { ads_mail_server } from '../../api/utils/utils'
</script>

<h1 class="text-3xl urbanist-semibold tracking-tight text-slate-900 mt-56">Make Zene Platform all About <u>Your Brand story</u></h1>

<div class="flex flex-col md:flex-row justify-center items-center my-20 gap-4">
  <div class="flex flex-col justify-center items-center">
    <p class="text-lg text-white urbanist-regular mb-4">Zene Ads on Desktop, MacOS, Linux, Chrome extension</p>
    <video class="h-[32rem]" controls={true} muted={true} autoplay={true} loop={true} playsinline>
      <track kind="captions" />
      <source src="/ad/videos/web-ads.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  <div class="flex flex-row justify-center items-center my-20 gap-4">
    <div class="flex flex-col justify-center items-center">
      <p class="text-lg text-white urbanist-regular mb-4">Zene Ads on IOS</p>

      <video class="h-[32rem]" controls={true} muted={true} autoplay={true} loop={true} playsinline>
        <track kind="captions" />
        <source src="/ad/videos/ios-ads.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="flex flex-col justify-center items-center">
      <p class="text-lg text-white urbanist-regular mb-4">Zene Ads on Android</p>

      <video class="h-[32rem]" controls={true} muted={true} autoplay={true} loop={true} playsinline>
        <track kind="captions" />
        <source src="/ad/videos/android-ads.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>

<br /><br /><br /><br /><br /><br />

<section class="bg-white rounded-xl m-3">
  <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
    <div class="w-full lg:w-1/2">
      <h1 class="text-3xl tracking-wide text-black urbanist-semibold lg:text-5xl">We Promote one Brand At a Time.</h1>

      <p class=" text-black urbanist-regular text-center text-xl m-3 mt-9">
        Unlike mainstream ad platforms where countless brands clamor for attention, we're dedicated to showcasing in the spotlight at a time across all our platforms. <br /><br />
        We believe in building trust through storytelling, crafting a unique narrative for each brand we promote. <br /><br />
        Step into a world where your brand takes center stage, leaving a lasting impression on your audience.
      </p>
    </div>

    <div class="w-full lg:w-1/2">
      <div class="lg:max-w-lg lg:translate-x-24">
        <img src={AdsMockupOne} alt="zene screenhot" class="object-contain w-full h-full" />
      </div>
    </div>
  </div>
</section>

<div class="mt-36 pt-0 lg:mt-96 lg:pt-32" />

<section class="bg-white rounded-xl m-3">
  <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
    <div class="w-full lg:w-1/2">
      <div class="lg:max-w-lg">
        <img src={AdsMockupTwo} alt="zene screenhot" class="object-contain w-full h-full" />
      </div>
    </div>

    <div class="w-full lg:w-1/2">
      <h1 class="text-3xl tracking-wide text-black urbanist-semibold lg:text-5xl">Guide Users to Your Product with Style</h1>

      <p class=" text-black urbanist-regular text-center text-xl m-3 mt-9">
            Elevate Your Brand with Our Distinctive Approach. <br/><br/>
            Our innovative platform seamlessly directs users to your product, ensuring maximum visibility and engagement. <br/><br/>
            Experience the difference as we infuse style into every step of the journey, making your brand stand out effortlessly
      </p>
    </div>
  </div>
</section>


<h1 class="text-3xl urbanist-semibold tracking-tight text-slate-900 mt-56 lg:pt-52">Reach Out to Us at Zero Cost <a class="text-blue underline" href="mailto:{ads_mail_server}?subject=Rent Dynamic Ad Space">Connect</a> today and explore how you can amplify your sales strategy on Zene :)</h1>
