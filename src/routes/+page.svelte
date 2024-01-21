<script lang="ts">
  import './tailwind.svelte'
  import TopListeningSongs from '$lib/components/main-page/TopListeningSongs.svelte'
  import { browser } from '$app/environment'
  import SongInfoSheet from '$lib/components/global-view/SongInfoSheet.svelte'
  import type { MusicData } from '../domain/local/entities/MusicData'
  import RadioStateLists from '$lib/components/main-page/radio/RadioStateLists.svelte'
  import TopGlobalTrendingArtists from '$lib/components/main-page/TopGlobalTrendingArtists.svelte'
  import TopMood from '$lib/components/main-page/TopMood.svelte'
  import FreshAddedSong from '$lib/components/main-page/FreshAddedSong.svelte'
  import GlobalTopTrendingSongs from '$lib/components/main-page/GlobalTopTrendingSongs.svelte'
  import TopSongsInUserCountry from '$lib/components/main-page/TopSongsInUserCountry.svelte'
  import type { IpDetails } from '../domain/local/entities/IpDetails'
    import { APManager } from './api/utils/s'

  export let data: any

  let songMenuDialog: MusicData | null = null

  let key: string | null = null
  let ip: IpDetails | null

  if (browser) {
    key = window.atob(data.data)
    if (data.ip != undefined) ip = JSON.parse(data.ip)

    document.addEventListener('songdialog', (event: Event) => {
      songMenuDialog = (event as CustomEvent).detail.value
    })

    function myStopFunction() {
      // const audioPlayer = new APManager()
      // const audioUrl = 'https://rr2---sn-qxa7snee.googlevideo.com/videoplayback?expire=1705845692&ei=XM-sZYWwI5uiz7sPgqij6AI&ip=103.83.145.75&id=o-AKrP2DVCBXP8MNkTBnOeen1BLSaSa6tefHwagByQdCDA&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&gcr=in&spc=UWF9f4hsrTfRwtWouOKcE0k36zcgqWDuoNh7&vprv=1&svpuc=1&mime=audio%2Fmp4&gir=yes&clen=3616953&dur=223.445&lmt=1705615445254116&keepalive=yes&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgFr-l6Jne0HZdslnLM6GP90PPXaHz2sfBotz6bHssVwUCIQDDvslaI_4iSlKCTbNTHumnA1qsSitfZPh_kk_763wcjQ%3D%3D&redirect_counter=1&rm=sn-1xvoxu-qxas7l&req_id=b99b66893998a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=Ie&mm=29&mn=sn-qxa7snee&ms=rdu&mt=1705823814&mv=m&mvi=2&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgDmuSV6Z4lwyX6o_rQOZTIZ_38lpQDleCe2nPzPC8mwQCIEj6fGW6218FbiJwLQX3piAvuaYrykf-Dmu1QnUQVv0O'

      // audioPlayer.playAudio(audioUrl)
    }
    const myTimeout = setTimeout(myStopFunction, 3000)
  }
</script>

{#if key != null}

<audio autoplay={true} controls={true}>
  <source src="https://rr2---sn-qxa7snee.googlevideo.com/videoplayback?expire=1705845692&ei=XM-sZYWwI5uiz7sPgqij6AI&ip=103.83.145.75&id=o-AKrP2DVCBXP8MNkTBnOeen1BLSaSa6tefHwagByQdCDA&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&gcr=in&spc=UWF9f4hsrTfRwtWouOKcE0k36zcgqWDuoNh7&vprv=1&svpuc=1&mime=audio%2Fmp4&gir=yes&clen=3616953&dur=223.445&lmt=1705615445254116&keepalive=yes&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgFr-l6Jne0HZdslnLM6GP90PPXaHz2sfBotz6bHssVwUCIQDDvslaI_4iSlKCTbNTHumnA1qsSitfZPh_kk_763wcjQ%3D%3D&redirect_counter=1&rm=sn-1xvoxu-qxas7l&req_id=b99b66893998a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=Ie&mm=29&mn=sn-qxa7snee&ms=rdu&mt=1705823814&mv=m&mvi=2&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgDmuSV6Z4lwyX6o_rQOZTIZ_38lpQDleCe2nPzPC8mwQCIEj6fGW6218FbiJwLQX3piAvuaYrykf-Dmu1QnUQVv0O" />     
</audio>


  <TopListeningSongs authKey={key} />
  <RadioStateLists authKey={key} ipDetails={ip} />
  <TopGlobalTrendingArtists authKey={key} />
  <TopMood />
  <FreshAddedSong authKey={key} />
  <GlobalTopTrendingSongs authKey={key} />
  <TopSongsInUserCountry authKey={key} ipDetails={ip} />

  <div class="h-60" />
{/if}

{#if songMenuDialog != null}
  <SongInfoSheet />
{/if}
