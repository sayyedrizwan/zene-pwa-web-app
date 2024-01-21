<script lang="ts">
  import { ResponseDataEnum, type ResponseData } from '../../../domain/RequestEnumClass'
    import type { IpDetails } from '../../../domain/local/entities/IpDetails'
  import type { MusicDataList } from '../../../domain/local/entities/MusicData'

  export let authKey: string
  export let ipDetails: IpDetails | null

  let response: ResponseData<MusicDataList> = { type: ResponseDataEnum.EMPTY }
</script>

<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Top Songs in {ipDetails?.country ?? "your country"}</h3>
<h3 class="text-white urbanist-semibold text-lg md:text-xl ms-2 md:ms-4 mt-16">Top Songs in {authKey}</h3>
