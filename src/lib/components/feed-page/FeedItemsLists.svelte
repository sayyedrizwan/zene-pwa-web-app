<script lang="ts">
  import { onMount } from 'svelte'
  import type { ArtistsPinData } from '../../../domain/local/entities/ArtistsPinData'
  import { addedPinLists } from '$lib/utils/p/pin'
  import axios from 'axios'
  import { env } from '$env/dynamic/public'
  import { FeedType, type FeedData } from '../../../domain/local/entities/FeedData'
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
  import YoutubeIcon from '$lib/assets/img/ic_youtube_color.svg'

  export let authKey: string

  let response: ResponseData<FeedData[]> = { type: ResponseDataEnum.EMPTY }

  const pin = async (results: ArtistsPinData[]) => {
    response = { type: ResponseDataEnum.LOADING }
    try {
      const res = await axios.post(env.PUBLIC_FEEDS, results, { headers: { AuthorizationKey: authKey } })
      const data = (await res.data) as FeedData[]
      response = { type: ResponseDataEnum.SUCCESS, data: data }
    } catch (error) {
      response = { type: ResponseDataEnum.ERROR }
    }
  }

  onMount(async () => {
    await addedPinLists(pin)
  })

  function timeAgoFromTimestamp(timestamp: number | undefined): string {
    if (timestamp == undefined) return ''
    const now = new Date().getTime()
    const difference = now - timestamp

    if (difference < 0) {
      return 'Not yet'
    }

    const seconds = Math.floor(difference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(months / 12)

    if (years > 0) return new Date(timestamp).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })
    else if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`
    else if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
    else if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    else if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    else return `${seconds} second${seconds > 1 ? 's' : ''} ago`
  }
</script>

{#if response.type == ResponseDataEnum.LOADING}
  <div role="status" class="flex w-full justify-center">
    <svg aria-hidden="true" class="size-12 text-gray-200 animate-spin fill-maincolor" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
{:else if response.type == ResponseDataEnum.SUCCESS}
  {#if response.data.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each response.data as items}
        <a class="bg-gray-900 rounded-lg p-3 cursor-pointer justify-start relative" href={items.link} target="_blank">
          <p class="text-white urbanist-thin w-full text-start">{items.name} {items.type == FeedType.NEWS ? 'News' : 'youtube channel video'}</p>

          <div class="flex pt-3">
            <div class="relative">
              <img src={items.thumbnail} alt={items.name} class="h-36 w-36 object-cover rounded-sm" />
              {#if items.type == FeedType.YOUTUBE}
                <img src={YoutubeIcon} alt="yt" class="absolute size-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              {/if}
            </div>
            <div class="ms-3">
              <h1 class="text-white urbanist-bold line-clamp-2 truncate text-start">{items.title}</h1>
              <h1 class="text-white urbanist-light line-clamp-4 truncate mt-2 text-sm text-start">{items.desc}</h1>
            </div>
          </div>

          <p class="text-white urbanist-thin text-sm absolute bottom-2 right-2">{timeAgoFromTimestamp(items.ts)}</p>
        </a>
      {/each}
    </div>
  {/if}
{/if}
