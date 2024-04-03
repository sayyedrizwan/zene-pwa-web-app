import { YtMusicAPIImpl } from '../../api/api_impl/yt_music/YtMusicImpl.js'

export async function GET({ setHeaders }) {
  const songPlaylists = ["PLMmqTuUsDkRLRQrF7S4HGinPCRmlYRjQu", "PLI_7Mg2Z_-4Lfo7Eo2jxrFAWR5KbBBjWP", "PLuGLRdhm0mFrn9W_RzeeUVO3k71521645"]

  setHeaders({ 'Content-Type': 'application/xml' })

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
