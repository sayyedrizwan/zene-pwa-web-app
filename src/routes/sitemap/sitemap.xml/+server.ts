import { YtMusicAPIImpl } from '../../api/api_impl/yt_music/YtMusicImpl.js'

const allPages = [
  ["", ["1.00"]], ["search", ["1.00"]], ["adswithus", ["1.00"]], ["download", ["1.00"]], ["faq", ["0.80"]], ["feed", ["0.80"]], ["mymusic", ["0.80"]], ["privacy-policy", ["0.80"]]
]

const artistsViaCountry = [
  "hollywood", "bollywood", "korean", "brazil", "hong kong", "japanese", "chinese", "italian", "pakistani", "germany", "french", "russian"
]

export async function GET({ setHeaders }) {
  setHeaders({
    'Content-Type': 'application/xml'
  })

  let sitemap = ""
  const music = new YtMusicAPIImpl()

  allPages.forEach(n => {
    sitemap += `<url>
      <loc>https://www.zenemusic.co/${n[0]}</loc>
      <changefreq>monthly</changefreq>
      <priority>${n[1]}</priority>
      </url>`
  })

  await Promise.all(
    artistsViaCountry.map(async (m) => {
      const artists = await music.artistsSearch(`latest ${m} song`)
      artists.forEach(s => {
        if (!sitemap.includes(`https://www.zenemusic.co/a/${s.songId}`)) {
          sitemap += `<url>
          <loc>https://www.zenemusic.co/a/${s.songId}</loc>
          <priority>0.44</priority>
          </url>`
        }
      })
    })
  )

  const response = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http:www.w3.org/1999/xhtml">
    ${sitemap}
  </urlset>`

  return new Response(response)
}
