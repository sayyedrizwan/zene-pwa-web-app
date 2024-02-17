<script lang="ts">
  import { onMount } from 'svelte'
  import type { ArtistsPinData } from '../../../domain/local/entities/ArtistsPinData'
  import { addedPinLists } from '$lib/utils/p/pin'
  import PinIcon from '$lib/assets/img/ic_pin.svg'

  let isLoading: Boolean = true
  let pinLists: ArtistsPinData[] = []

  const pin = async (results: ArtistsPinData[]) => {
    isLoading = false
    pinLists = results
  }

  onMount(async () => {
    await addedPinLists(pin)
  })
</script>

{#if isLoading === true}
  <div class="overflow-x-auto flex w-full mx-auto shadow-xl scrollbar-hide">
    {#each Array(15) as _, index (index)}
      <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
        <div class="size-44 rounded-full bg-gray-400 animate-pulse m-3" />
      </div>
    {/each}
  </div>
{:else if pinLists.length > 0}
  <div class="relative rounded-xl overflow-auto">
    <div class="overflow-x-auto flex w-full mx-auto shadow-xl scrollbar-hide">
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
{:else}
    <h3 class="text-white urbanist-regular text-base md:text-xl pl-9 mt-24 mb-6 w-full text-center">No pinned artists yet! Pin artists by going to their profile to see their latest, music, projects and new in your feed.</h3>
{/if}
