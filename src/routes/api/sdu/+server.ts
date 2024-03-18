import { json, type RequestEvent } from '@sveltejs/kit'
import { atob } from 'buffer'
import { RadioBrowserImpl } from '../api_impl/radio/RadioBrowserImpl'
import { downloadBlobInChunks, getFileSize, YTDownloaderImpl } from '../api_impl/yt_downloader/YtDownloaderImpl'
import { isFromZeneOrigin } from '../utils/EncryptionForAPI'
import { DURLResponse } from '../../../domain/local/entities/DURLResponse'
import { isSameServerIp } from '../utils/utils'
import got from 'got'

export const GET = async (req: RequestEvent) => {
  const ytDownloader = new YTDownloaderImpl()
  const url = await ytDownloader.videoYTDownloader('YALvuUpY_b0', false, false)

  const fileSize = await getFileSize(url!)
  const response = await downloadBlobInChunks(url!, 1000000, fileSize!)

  // const response = await fetch('https://rr1---sn-w2gqpbpu5a-cvhl.googlevideo.com/videoplayback?expire=1710806107&ei=-3_4ZaGKJba54t4P2PuNmAo&ip=183.87.181.110&id=o-AFX6TSDfp9X3Y0ZtZpGsBFxUuWgSzB3bkBm_9pMIP8FS&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=io&mm=31%2C29&mn=sn-w2gqpbpu5a-cvhl%2Csn-cvh7knzd&ms=au%2Crdu&mv=m&mvi=1&pl=24&gcr=in&initcwndbps=1073750&spc=UWF9f5RP25eXMr5i3D3r9uFTtDgL6ex0fFxeN8ijQDXel3I&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=rIfTqPX3iGRjpdwNKy3gEa0Q&gir=yes&clen=4237621&dur=261.702&lmt=1698926110625727&mt=1710784170&fvip=3&keepalive=yes&c=WEB&sefc=1&txp=2318224&n=KqUtaSk_4PCttA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ALClDIEwRQIhAOhWICtCkGN91XvTyc8fIgC0uilYcXYk6LVk7ZrzK_T-AiBFwoaD6s-xrCTD02bqOHCJbIuOItLaNmHB2y7USsJp7A%3D%3D&sig=AJfQdSswRQIgHiBImaJbgAkttGLlaiK_BFM-S-lf9x_fCDtoJ9hJLT4CIQDLD4y7e8enCTvoJcdWuJt90iE4UCYRC8w5ADWnUd8OEg%3D%3D');

  const blob = new Blob(response, { type: 'audio/mp3' })

  return new Response(blob, {
    status: 200,
    statusText: 'OK',
})

  // const isSafari = req.request.headers.get('isSafari') == '1' ? true : false
  // const video_url = new URL(req.url).searchParams.get('id') ?? ''
  // const videoId = video_url.length > 20 ? video_url : atob(video_url)
  // const isSameServer = await isSameServerIp(req.cookies.get('i') ?? ``)

  // if (isFromZeneOrigin(req) === false) json({})

  // try {
  //   if (videoId.length > 20 && videoId.split('-').length > 3) {
  //     const radio = new RadioBrowserImpl()
  //     const response = await radio.radioPlayURL(videoId)
  //     const url = response[0].url_resolved == null ? response[0].url : response[0].url_resolved
  //     return json(new DURLResponse(url ?? '', 3))
  //   }

  //   const ytDownloader = new YTDownloaderImpl()
  //   const path = await ytDownloader.videoYTDownloader(videoId, isSameServer, isSafari)

  //   const data  = got.stream(path!)

  //   return new Response(path, {
  //     headers: {
  //       'Content-Type': 'audio/mpeg'
  //     }
  //   })


  //   console.log('vdgbhd')
  //   return new Response(
  //     path, {
  //     status: 200,
  //     headers: {
  //       'Content-Type': 'application/octet-stream',
  //       'Content-Disposition':
  //         `attachment; filename*=UTF-8''${encodeURIComponent('mp3-player')}`,
  //     }
  //   }
  //   );


    // const url = await ytDownloader.videoURL(videoId, isSameServer, isSafari)

    // if (url === '') return json({})
    // let urlPoint = ''
    // let type = 0

    // if (url.includes('srvcdn7.2convert.me/dl?')) {
    //   urlPoint = url.textAfterKeyword('srvcdn7.2convert.me/dl?hash=') ?? ''
    //   type = 0
    // } else if (url.includes('wsnd.io/')) {
    //   urlPoint = url.textAfterKeyword('wsnd.io/')?.replaceAll('/videoplayback.mp4', '') ?? ''
    //   type = 1
    // } else if (url.includes('ca3.converter.app/')) {
    //   urlPoint = url.textAfterKeyword('jobid=')
    //   type = 2
    // } else {
    //   urlPoint = url
    //   type = 3
    // }

    // return json(new DURLResponse(urlPoint, type))
  // } catch (error) {
  //   return json({})
  // }
}
