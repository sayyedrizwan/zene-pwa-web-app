export async function GET({ setHeaders }) {
  setHeaders({
    'Content-Type': 'application/xml'
  })


  const response = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http:www.w3.org/1999/xhtml">
  <sitemap>
    <loc>https://www.zenemusic.co/sitemap/sitemap.xml</loc>
    <changefreq>weekly</changefreq>
  </sitemap>
  <sitemap>
    <loc>https://www.zenemusic.co/sitemap/sitemap-h.xml</loc>
    <changefreq>weekly</changefreq>
  </sitemap>
  </sitemapindex>`

  return new Response(response)
}
