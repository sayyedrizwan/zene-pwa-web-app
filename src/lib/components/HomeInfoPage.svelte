<script lang="ts">
  import adFree from '$lib/assets/img/ad_free_img.png'
  import daftPunk from '$lib/assets/img/daft_punk_ill.jpg'
  import sittingSmoker from '$lib/assets/img/sitting_smoker.png'
  import recordCollection from '$lib/assets/img/record_collection.png'
  import ImageAndInfoSideBySide from './item/ImageAndInfoSideBySide.svelte';
</script>

<ImageAndInfoSideBySide title={"Ad free expreience"} desc={"ad-free streaming app lets you immerse yourself in the pure essence of sound, uninhibited by commercial breaks."} img={adFree} isImgRight={true} />
<ImageAndInfoSideBySide title={"10 Million+ Artists"} desc={"Sail the familiar shores of your favorite superstars, from pop icons to rock gods, from jazz giants to indie darlings. Lose yourself in the classics, relive the anthems, and rediscover the magic of familiar voices."} img={daftPunk} isImgRight={false} />
<ImageAndInfoSideBySide title={"Music for All Tastes"} desc={"Don't judge your vibe, just crank it up. Dive into a sonic tapestry woven with threads of every genre and mood."} img={sittingSmoker} isImgRight={true} />
<ImageAndInfoSideBySide title={"Your own offline music records"} desc={"Curated haven of tunes, ready to soundtrack your every mood and adventure, even when the Wi-Fi dips out"} img={recordCollection} isImgRight={false} />
