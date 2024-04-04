import { YtMusicAPIImpl } from '../../api/api_impl/yt_music/YtMusicImpl.js'

export async function GET({ setHeaders }) {
  const searchLists = []

  for (let i = 0; i < 20; i++) {
    searchLists.push(generateRandomLetters())
  }

  setHeaders({ 'Content-Type': 'application/xml' })

  let sitemap = ""

  const music = new YtMusicAPIImpl()

  await Promise.all(
    searchLists.map(async (n) => {
      const artists = await music.artistsSearch(n)
      artists.forEach(i => {
        if (i.songId != null && !sitemap.includes(`https://zenemusic.co/a/${i.songId}`)) {
          sitemap += `<url>
           <loc>https://www.zenemusic.co/a/${i.songId}</loc>
           <changefreq>yearly</changefreq>
           <priority>0.44</priority>
           </url>`
        }
      })
      
      const songs = await music.songsSearch(n)
      songs.forEach(i => {
        if (i.songId != null && !sitemap.includes(`https://zenemusic.co/s/${i.songId}`)) {
          sitemap += `<url>
           <loc>https://www.zenemusic.co/s/${i.songId}</loc>
           <changefreq>yearly</changefreq>
           <priority>0.44</priority>
           </url>`
        }
      })
    })
  )

  // await Promise.all(
  //   songsPlaylists.map(async (mm) => {
  //     const md = await music.musicSearchSingle(mm, false)
  //     if (md.songId != null && !sitemap.includes(`https://zenemusic.co/s/${md.songId}`)) {
  //       sitemap += `<url>
  //     <loc>https://www.zenemusic.co/s/${md.songId}</loc>
  //     <changefreq>yearly</changefreq>
  //     <priority>0.44</priority>
  //     </url>`
  //     }
  //   })
  // )

  const response = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http:www.w3.org/1999/xhtml">
    ${sitemap}
  </urlset>`

  return new Response(response)
}


function generateRandomLetters(): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const letter1 = alphabet[Math.floor(Math.random() * alphabet.length)];
  const letter2 = alphabet[Math.floor(Math.random() * alphabet.length)];
  return letter1 + letter2;
}