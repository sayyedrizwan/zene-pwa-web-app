import { YtMusicAPIImpl } from '../../api/api_impl/yt_music/YtMusicImpl.js'

// const songPlaylists = [
//   "PLO7-VO1D0_6N2ePPlPE9NKCgUBA15aOk2", "PLO7-VO1D0_6NmK47v6tpOcxurcxdW-hZa", "PLPSCssPYXhWTTcpNZwYoEQWt8Wc8KO0NV", "PLOHoVaTp8R7dfrJW5pumS0iD_dhlXKv17", "PLOHoVaTp8R7dfrJW5pumS0iD_dhlXKv17", "PL_bKAgO9uCN3eYafod8pYAJAkVJmBa4K6", "PL2TRGyKhDQRwZWVuV1fto3ADZW6h27_QQ", "PLj3yHoINc17ve9DMQpyU_clEGETrKSrbD", "PL3oW2tjiIxvSk0WKXaEiDY78KKbKghOOo", "PLhtH0-zayx4jzkmyft_CVmXVYzC_G-n7Y", "PLy_wKxVmWb4awLwIktp2HWzj82rJAZqmp", "PLEBX04z4REEaQBRD1jYea4VmKD87sdMee", "PLMmqTuUsDkRLRQrF7S4HGinPCRmlYRjQu"
// ]

export async function GET({ setHeaders }) {
  const songPlaylists = ["PLO7-VO1D0_6N2ePPlPE9NKCgUBA15aOk2", "PLPSCssPYXhWTTcpNZwYoEQWt8Wc8KO0NV"]

  setHeaders({
    'Content-Type': 'application/xml'
  })

  let sitemap = ""
  const songsPlaylists: string[] = []
  const music = new YtMusicAPIImpl()

  await Promise.all(
    songPlaylists.map(async (pId) => {
      const lists = await music.searchPlaylists(null, `VL${pId}`)
      lists.forEach(i => {
        songsPlaylists.push(i)
      })
    })
  )

  await Promise.all(
    songsPlaylists.map(async (mm) => {
      const md = await music.musicSearchSingle(mm, false)
      if (md.songId != null && !sitemap.includes(`https://zenemusic.co/s/${md.songId}`)) {
        sitemap += `<url>
      <loc>https://www.zenemusic.co/s/${md.songId}</loc>
      <priority>0.44</priority>
      </url>`
      }
    })
  )

  const response = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http:www.w3.org/1999/xhtml">
    ${sitemap}
  </urlset>`

  return new Response(response)
}
