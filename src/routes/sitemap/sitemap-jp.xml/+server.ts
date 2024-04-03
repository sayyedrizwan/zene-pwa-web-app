import { YtMusicAPIImpl } from '../../api/api_impl/yt_music/YtMusicImpl.js'

export async function GET({ setHeaders }) {
  const songPlaylists = ["PL2HEDIx6Li8j_jT8JI90WmXeQ657UUKSH", "PL7PzVd63GwbJlssKH2V7Hx5GmF3dnFPqM", "PLj3yHoINc17ve9DMQpyU_clEGETrKSrbD"]

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
