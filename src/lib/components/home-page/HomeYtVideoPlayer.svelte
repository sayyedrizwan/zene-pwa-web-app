<script lang="ts">
  let desktopcontent: string = ""
  let mobilecontent: string = ""

  const desktopVideoList: string[] = [
    "TQYwytwhyrU",
    "mgtBQ6A3u4U",
    "tPZ7rTFsdxc",
    "MhykLzLt9p8",
    "rBry1fjs1Xc",
    "oIanKG5VWi0",
    "9v1n8vLzqOA",
  ]

  const mobileVideoList: string[] = [
    "oPOYhIISEdc",
    "DFGiKrYqMkc",
    "Vi_fbMRoYxU",
    "FMfpL2Gv95k",
    "RtDwfsBS0U4",
    "MR6xRgpAPX4",
    "zoCmwA9lyc4",
  ]

  const i = Math.floor(Math.random() * desktopVideoList.length)
  desktopcontent = desktopVideoList[i]

  const j = Math.floor(Math.random() * mobileVideoList.length)
  mobilecontent = mobileVideoList[j]
</script>

<iframe
  class="absolute left-0 top-0 z-10 hidden h-[95vh] w-full md:block"
  src="https://www.youtube.com/embed/{desktopcontent}?autohide=1&mute=1&controls=0&autoplay=1&enablejsapi=1&loop=1&rel=0&showinfo=0&showinfo=0&color=white&iv_load_policy=3&playlist={desktopcontent}"
  title="Zene youtube Player"
  frameborder="0"
  allowfullscreen
/>

<iframe
  class="absolute left-0 top-0 z-10 block h-[95vh] w-full md:hidden"
  src="https://www.youtube.com/embed/{mobilecontent}?autohide=1&mute=1&controls=0&autoplay=1&enablejsapi=1&loop=1&rel=0&showinfo=0&showinfo=0&color=white&iv_load_policy=3&playlist={mobilecontent}"
  title="Zene youtube Player"
  frameborder="0"
  allowfullscreen
/>
