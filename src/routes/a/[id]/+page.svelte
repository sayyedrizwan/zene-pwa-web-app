<script lang="ts">
  import { browser } from '$app/environment'
  import type { ArtistsInfoData } from '../../../domain/local/entities/ArtistsInfoData'
  import type { IpDetails } from '../../../domain/local/entities/IpDetails'

  export let data: any

  const artistsInfo = data.info as ArtistsInfoData

  let key: string | null = null
  let ip: IpDetails | null

  if (browser) {
    key = window.atob(data.data)
    if (data.ip != undefined) ip = JSON.parse(data.ip)
  }
</script>


<svelte:head>
  <title>{artistsInfo.name} on Zene: A free music app</title>
  <meta name="description" content={artistsInfo.description.length > 140 ? `${artistsInfo.description.substring(0, 139)}....` : artistsInfo.description} />
  <meta name="og:description" content={artistsInfo.description.length > 140 ? `${artistsInfo.description.substring(0, 139)}....` : artistsInfo.description} />
  <meta property="og:title" content="{artistsInfo.name} on Zene" />
  <meta property="og:image" content={artistsInfo.image} />
  <meta property="og:image:alt" content={`${artistsInfo.name} on Zene`} />
  <link rel="canonical" href={`https://zenemusic.co/a/${data.url}`} />
</svelte:head>



<div class="bg-gray-950 w-full">
  <!-- <h3 class="text-white">{key}</h3> -->
  <h3 class="text-white">{artistsInfo.name}</h3>

  <video class="w-[190vh] object-cover h-[60vh] md:h-[80vh] bg-white" style="line-height: 0" controls={true} autoplay={true} muted={true}>
    <source
      class="w-[190vh] object-cover h-[60vh] md:h-[80vh] bg-white"
      src="https://rr3---sn-h5576nsl.googlevideo.com/videoplayback?expire=1706295106&ei=4qqzZb_oDa-K4t4P3Y6WyAo&ip=2401%3A4900%3A1c00%3A6855%3A15c5%3Ae225%3A8f20%3A2aee&id=o-AO3rrJBisXU5PR9gpVla57TdtRhzYLt1v7kjtbZUoTxG&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&gcr=in&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=272.486&lmt=1706158323708344&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgduoDhMDPeCBr6dIkpqDole8-xXFRlGu1sWpCsPDAQhMCIEYuYlGFj3fkahDPwy0Ir5pQW4nSNvhYdJTWyBqPcEZi&title=Taylor%20Swift%20-%20Blank%20Space&rm=sn-ci5gup-jj0s7e,sn-ci5gup-qxaed7s&req_id=25d8963d3990a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=68&mm=30&mn=sn-h5576nsl&ms=nxu&mt=1706273307&mv=m&mvi=3&pl=51&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgR7EuweQgPbhWxC9lVsmZ8Zopy1i_gAb6IXRs9Ci4t_4CIAVPEfRdEAjxmb6dRWBKGeWyqyGfd6u1DKhlThYuLfgc"
    />
    <track src="" kind="captions" srclang="en" label="" />
  </video>
</div>
