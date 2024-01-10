<script lang="ts">
let desktopcontent: string = "";
let mobilecontent: string = "";

const desktopVideoList: string[] = [
  'TQYwytwhyrU',
  'mgtBQ6A3u4U',
  'tPZ7rTFsdxc',
  'MhykLzLt9p8',
  'rBry1fjs1Xc',
  'oIanKG5VWi0',
  '9v1n8vLzqOA'
]


const mobileVideoList: string[] = [
  'oPOYhIISEdc'
]

const i = Math.floor(Math.random() * desktopVideoList.length);
desktopcontent = desktopVideoList[i];


const j = Math.floor(Math.random() * mobileVideoList.length);
mobilecontent = mobileVideoList[j];


</script>


<iframe
    class="h-[95vh] w-full z-10 absolute top-0 left-0 invisible md:visible"
    src="https://www.youtube.com/embed/{desktopcontent}?autohide=1&mute=1&controls=0&autoplay=1&enablejsapi=1&loop=1&rel=0&showinfo=0&showinfo=0&color=white&iv_load_policy=3&playlist={desktopcontent}"
    title="Zene youtube Player"
    frameborder="0"
    allowfullscreen
/>



<iframe
    class="h-[95vh] w-full z-10 absolute top-0 left-0 visible md:invisible"
    src="https://www.youtube.com/embed/{mobilecontent}?autohide=1&mute=1&controls=0&autoplay=1&enablejsapi=1&loop=1&rel=0&showinfo=0&showinfo=0&color=white&iv_load_policy=3&playlist={mobilecontent}"
    title="Zene youtube Player"
    frameborder="0"
    allowfullscreen
/>