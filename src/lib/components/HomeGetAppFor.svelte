<script lang="ts">
  const play_store = 'https://play.google.com/store/apps/details?id=com.rizwansayyed.zene'

  function openPlayStore() {
    open(play_store, '_blank')
  }
</script>

<div class="relative rounded-xl overflow-auto p-8 mt-80" id="download">
  <div class="grid grid-cols-2 divide-x text-sm text-center leading-6 rounded-lg shadow-lg overflow-hidden dark:divide-slate-700">
    <a href="https://apps.apple.com/us/app/zene-a-music-app/id6504202797" class="p-4 text-slate-400 bg-white text-gray-950 text-lg pt-14 pb-14 tracking-widest urbanist-light hover:bg-gray-400 cursor-pointer flex justify-center items-center">
      <center>
        <h2 class="text-center">Get it for IOS/Mac</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" alt="android" class="h-28 pt-5" />
      </center>
    </a>
    <!-- <a href="/download" class="p-4 text-slate-400 bg-white text-gray-950 text-lg pt-14 pb-14 tracking-widest urbanist-light hover:bg-gray-400 cursor-pointer flex justify-center items-center">
      <center>
        <h2 class="text-center">Get it fr</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/888/888882.png" alt="windows" class="h-28 pt-5" />
      </center>
    </a> -->
    <a href="https://play.google.com/store/apps/details?id=com.rizwansayyed.zene" class="p-4 text-slate-400 bg-white text-gray-950 text-lg pt-14 pb-14 tracking-widest urbanist-light hover:bg-gray-400 cursor-pointer flex justify-center items-center">
      <center>
        <h2 class="text-center">Get it for Android</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/888/888839.png" alt="ios" class="h-28 pt-5" />
      </center>
    </a>
  </div>
</div>
