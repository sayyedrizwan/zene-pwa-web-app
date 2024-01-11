<script lang="ts">
  import { ad_free_experience, ad_free_experience_desc } from '$lib/assets/string/en';
  import ImageAndInfoSideBySide from '$lib/components/ImageAndInfoSideBySide.svelte';
  import adFree from '$lib/assets/img/ad_free_img.png';
</script>

<ImageAndInfoSideBySide title={ad_free_experience} desc={ad_free_experience_desc} img={adFree} isImgRight={true} />
<ImageAndInfoSideBySide title={ad_free_experience} desc={ad_free_experience_desc} img={adFree} isImgRight={false} />
