export async function GET({ setHeaders }) {
  setHeaders({ 'Content-Type': 'application/xml' })

  const response = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap.xml</loc>
      <priority>1.00</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-h.xml</loc>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-b.xml</loc>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-k.xml</loc>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-br.xml</loc>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-hgkg.xml</loc>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-ch.xml</loc>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-fn.xml</loc>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-gn.xml</loc>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-it.xml</loc>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-jp.xml</loc>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-pk.xml</loc>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-ru.xml</loc>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-temp.xml</loc>
      <priority>0.80</priority>
    </sitemap>
  </sitemapindex>`

  return new Response(response)
}
