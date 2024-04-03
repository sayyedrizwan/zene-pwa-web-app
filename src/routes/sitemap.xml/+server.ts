export async function GET({ setHeaders }) {
  setHeaders({ 'Content-Type': 'application/xml' })


  const response = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http:www.w3.org/1999/xhtml">
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>1.00</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-h.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-b.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>0.80</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-k.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>0.60</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-br.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>0.60</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-hgkg.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>0.60</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-ch.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>0.60</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-fn.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>0.60</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-gn.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>0.60</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-it.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>0.60</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-jp.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>0.60</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-pk.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>0.60</priority>
    </sitemap>
    <sitemap>
      <loc>https://www.zenemusic.co/sitemap/sitemap-ru.xml</loc>
      <changefreq>weekly</changefreq>
      <priority>0.60</priority>
    </sitemap>
  </sitemapindex>`

  return new Response(response)
}
