<script lang="ts">
  import Footer from '$lib/components/Footer.svelte'

  export let data: any
</script>

<div class="bg-gray-950 w-full">
  <h3 class="text-white">{data.data}</h3>
</div>
