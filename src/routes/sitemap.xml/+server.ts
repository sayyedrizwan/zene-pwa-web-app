export async function GET({ setHeaders }) {
  setHeaders({ 'Content-Type': 'application/xml' })


  const response = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap.xml</loc>
      <changefreq>daily</changefreq>
      <priority>1.00</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-h.xml</loc>
      <changefreq>daily</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-b.xml</loc>
      <changefreq>daily</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-k.xml</loc>
      <changefreq>daily</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-br.xml</loc>
      <changefreq>daily</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-hgkg.xml</loc>
      <changefreq>daily</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-ch.xml</loc>
      <changefreq>daily</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-fn.xml</loc>
      <changefreq>daily</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-gn.xml</loc>
      <changefreq>daily</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-it.xml</loc>
      <changefreq>daily</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-jp.xml</loc>
      <changefreq>daily</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-pk.xml</loc>
      <changefreq>daily</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-ru.xml</loc>
      <changefreq>daily</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-temp.xml</loc>
      <changefreq>hourly</changefreq>
      <priority>0.80</priority>
    </sitemap>
  </sitemapindex>`

  return new Response(response)
}