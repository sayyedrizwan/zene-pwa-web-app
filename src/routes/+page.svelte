<script lang="ts">
  import './tailwind.svelte'
  import LogoWithBrand from '$lib/components/LogoWithBrand.svelte'
  import TopListeningSongs from '$lib/components/main-page/TopListeningSongs.svelte'
  export let data: any
</script>

<h1>{data.key}</h1>
<LogoWithBrand />

<TopListeningSongs authKey={data.key}/>
