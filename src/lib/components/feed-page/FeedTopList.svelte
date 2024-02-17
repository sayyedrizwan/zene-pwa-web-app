<script lang="ts">
  import { onMount } from 'svelte'
  import type { ArtistsPinData } from '../../../domain/local/entities/ArtistsPinData'
  import { addedPinLists } from '$lib/utils/p/pin'
  import PinIcon from '$lib/assets/img/ic_pin.svg'

  let pinLists: ArtistsPinData[] = []

  const pin = async (results: ArtistsPinData[]) => {
    pinLists = results
    console.log(pinLists)
  }

  onMount(async () => {
    await addedPinLists(pin)
  })
</script>

<div class="relative rounded-xl overflow-auto">
  <div class="w-full mx-auto shadow-xl">
    <div class="overflow-x-auto flex">
      {#each pinLists as item}
        <a class="flex-none py-6 px-3 first:pl-6 last:pr-6" href={`/a/${item.id}`}>
          <div class="flex flex-col items-center justify-center gap-3">
            <img class="size-[21vh] rounded-full object-cover" src={item.img} alt={item.n} />
            <img src={PinIcon} alt="pin" class="size-9 -translate-y-7 p-2 bg-maincolor rounded-full" />
            <strong class="text-white urbanist-bold text-base -translate-y-7">{item.n}</strong>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
