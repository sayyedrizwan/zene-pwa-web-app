<script lang="ts">
  import { browser } from '$app/environment'
  import type { IpDetails } from '../../../domain/local/entities/IpDetails'

  export let data: any

  let key: string | null = null
  let ip: IpDetails | null

  if (browser) {
    key = window.atob(data.data)
    if (data.ip != undefined) ip = JSON.parse(data.ip)
  }
</script>

<div class="bg-gray-950 w-full">
  <!-- <h3 class="text-white">{key}</h3> -->
  <!-- <h3 class="text-white">{data.name}</h3> -->

  <iframe class="w-full h-[80vh]" src="https://www.youtube.com/embed/Jp212EoQFuc?playlist=Jp212EoQFuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
