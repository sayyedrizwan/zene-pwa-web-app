<script lang="ts">
  import { onMount } from 'svelte'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import type { MusicData } from '../../../domain/local/entities/MusicData'

  export let authKey: string

  let response: ResponseData<MusicData> = { type: ResponseDataEnum.EMPTY }

  async function topArtists() {
    response = { type: ResponseDataEnum.LOADING }

    try {
    } catch (error) {
      
    }
  }

  onMount(async () => {
    topArtists()
  })
</script>

<h3 class="text-white urbanist-semibold text-2xl md:text-3xl ms-2 md:ms-4 mt-7">Global top trending artists</h3>

<div class="w-5/6 h-64 grid grid-cols-4 grid-rows-2 gap-4 overflow-y-auto">
  {#each Array(45) as _, index (index)}
    <h2 class="text-white col-span-2 row-span-1">djfnjfjnff</h2>
  {/each}
</div>

<div class="overflow-x-auto flex">
  <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
    <div class="flex flex-col items-center justify-center gap-3">
      <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
      <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Andrew</strong>
    </div>
  </div>
  <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
    <div class="flex flex-col items-center justify-center gap-3">
      <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
      <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Emily</strong>
    </div>
  </div>
  <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
    <div class="flex flex-col items-center justify-center gap-3">
      <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
      <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Whitney</strong>
    </div>
  </div>
  <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
    <div class="flex flex-col items-center justify-center gap-3">
      <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
      <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">David</strong>
    </div>
  </div>
  <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
    <div class="flex flex-col items-center justify-center gap-3">
      <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
      <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Kristin</strong>
    </div>
  </div>
  <div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
    <div class="flex flex-col items-center justify-center gap-3">
      <img class="w-18 h-18 rounded-full" src="https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
      <strong class="text-slate-900 text-xs font-medium dark:text-slate-200">Sarah</strong>
    </div>
  </div>
</div>
