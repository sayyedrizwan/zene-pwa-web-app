<script>
  import { support_mail_server } from "$lib/utils/Utils";

  $: d = new Date()
</script>

<footer class="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-maincolor text-white">
  <div class="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
    <h2 class="font-bold text-3xl xl:text-4xl leading-snug">
      Are you Ready?<br />To Dive into some fresh tunes.
    </h2>
    <a class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-lightblue rounded-full shadow-xl border border-transparent hover-animation hover:bg-gray-950 text-black hover:text-white" href="/#download">Download Zene Now</a>
    <div class="mt-14 xl:mt-20">
      <nav class="flex flex-wrap justify-center text-lg font-medium">
        <div class="px-5 py-2"><a href="/privacy-policy">Policy</a></div>
        <div class="px-5 py-2"><a href="/about-us">About</a></div>
        <div class="px-5 py-2"><a href="/faq">FAQ</a></div>
        <div class="px-5 py-2"><a href="/#download">Download</a></div>
        <div class="px-5 py-2"><a href="mailto:{support_mail_server}?subject=Feedback">Feedback</a></div>
        <div class="px-5 py-2"><a href="/adswithus">Advertise With Us</a></div>
      </nav>
      <nav class="flex flex-wrap justify-center mt-5">
        <a href="https://www.instagram.com/zene__music/" target="_blank"><i class="fa fa-instagram text-white hover:text-peach hover-animation" style="font-size: 24px"></i></a>
      </nav>
      <p class="mt-7 text-base">© 2022-{d.getFullYear()} Zene</p>
    </div>
  </div>
</footer>
