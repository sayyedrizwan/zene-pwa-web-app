<script lang="ts">
  import { ad_free_experience, ad_free_experience_desc, millions_of_artists, millions_of_artists_desc, music_for_all_tastes, music_for_all_tastes_desc, own_offline_music_records_tastes, own_offline_music_records_tastes_desc } from '$lib/assets/string/en'
  import ImageAndInfoSideBySide from '$lib/components/global-view/ImageAndInfoSideBySide.svelte'
  import adFree from '$lib/assets/img/ad_free_img.png'
  import daftPunk from '$lib/assets/img/daft_punk_ill.jpg'
  import sittingSmoker from '$lib/assets/img/sitting_smoker.png'
  import recordCollection from '$lib/assets/img/record_collection.png'
</script>

<ImageAndInfoSideBySide title={ad_free_experience} desc={ad_free_experience_desc} img={adFree} isImgRight={true} />
<ImageAndInfoSideBySide title={millions_of_artists} desc={millions_of_artists_desc} img={daftPunk} isImgRight={false} />
<ImageAndInfoSideBySide title={music_for_all_tastes} desc={music_for_all_tastes_desc} img={sittingSmoker} isImgRight={true} />
<ImageAndInfoSideBySide title={own_offline_music_records_tastes} desc={own_offline_music_records_tastes_desc} img={recordCollection} isImgRight={false} />
