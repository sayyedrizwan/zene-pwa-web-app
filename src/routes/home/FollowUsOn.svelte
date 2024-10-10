<script>
  import INSTAGRAM_ICON from "$lib/assets/img/ic_instagram.svg";
  import { support_mail_server } from "$lib/utils/Utils";
</script>

<section class="py-36">
  <div class="max-w-screen-xl mx-auto px-4 text-white gap-12 md:px-8 lg:flex">
    <div class="max-w-lg">
      <h3 class="text-white text-3xl font-semibold sm:text-4xl">Let’s connect</h3>
      <p class="mt-3">We're here to help and answer any question you might have, We look forward to hearing from you.</p>
   
      <a href="mailto:{support_mail_server}?subject=<<<Feedback Web>>>" target="_blank" class="text-lightblue hover:text-blue-500 flex flex-row items-center mt-6">
        Send Feedback
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd"></path></svg>
      </a>
    </div>
    <div>
      <ul class="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
        <li class="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
          <div class="w-12 h-12 rounded-full border flex items-center justify-center text-white">
            <img src={INSTAGRAM_ICON} alt="instagram" class="size-7 mt-0.5" />
          </div>
          <h4 class="text-white text-lg font-medium xl:text-xl">Join our Community</h4>
          <p class="text-white">Join our community on Instagram! Follow us and be a part of something amazing as we grow together. Let's connect, share, and make this space better together!</p>
          <a href="https://www.instagram.com/zene__music/" target="_blank" class="text-lightblue hover:text-blue-500 flex flex-row items-center">
            Follow Us
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd"></path></svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>
