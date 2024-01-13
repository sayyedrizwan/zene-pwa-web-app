<script lang="ts">
  import './tailwind.svelte'
  import LogoWithBrand from '$lib/components/LogoWithBrand.svelte'
  import TopListeningSongs from '$lib/components/main-page/TopListeningSongs.svelte'
    import { MusicData } from '../domain/local/entities/MusicData'

  // const m = new MusicData(null, "", "", "", "")

</script>

<LogoWithBrand />

<TopListeningSongs />
