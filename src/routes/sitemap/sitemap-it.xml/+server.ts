import { YtMusicAPIImpl } from '../../api/api_impl/yt_music/YtMusicImpl.js'

export async function GET({ setHeaders }) {
  const songPlaylists = ["PLvJG6wQJQ6yR1kInJpbkP9SAdgdVOs0w7", "PL5afZumWHcWxGAMWGknfo1c3osuRXabM7"]

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
      const musicD = await music.songsSearch(mm)
      musicD.forEach(md => {
        if (md.songId != null && !sitemap.includes(`https://zenemusic.co/s/${md.songId}`)) {
          sitemap += `<url>
          <loc>https://www.zenemusic.co/s/${md.songId}</loc>
          <changefreq>yearly</changefreq>
          <priority>0.44</priority>
          </url>`
        }
      })

        
      // const artistsD = await music.artistsSearch(mm)
      // artistsD.forEach(md => {
      //   if (md.songId != null && !sitemap.includes(`https://zenemusic.co/a/${md.songId}`)) {
      //     sitemap += `<url>
      //     <loc>https://www.zenemusic.co/a/${md.songId}</loc>
      //     <changefreq>yearly</changefreq>
      //     <priority>0.44</priority>
      //     </url>`
      //   }
      // })
    })
  )

  const response = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http:www.w3.org/1999/xhtml">
    ${sitemap}
  </urlset>`

  return new Response(response)
}