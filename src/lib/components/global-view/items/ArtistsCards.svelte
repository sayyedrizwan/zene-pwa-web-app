<script lang="ts">
  import type { MusicData } from '../../../../domain/local/entities/MusicData'

  export let artists: MusicData | null
</script>

<a class="flex-none py-6 px-1 first:pl-2 last:pr-3 mx-3 justify-center items-center" href={`/a/${artists?.songId}`}>
  <img src={artists?.thumbnail} alt={artists?.name} class="size-44 rounded-full" />
  <p class="text-white urbanist-semibold text-base mt-2 text-center w-44 line-clamp-2">{artists?.name}</p>
</a>
