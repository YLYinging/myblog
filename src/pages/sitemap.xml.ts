import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { path } from '../site';

export const GET: APIRoute = async ({ site }) => {
  const urls = [];
  if (site) {
    const posts = await getCollection('blog', ({ data }) => !data.draft);
    const tags = new Set(posts.flatMap(({ data }) => data.tags));
    const routes = [
      '/', '/blog/', '/projects/', '/about/',
      ...posts.map(({ id }) => `/blog/${id}/`),
      ...Array.from(tags, tag => `/tags/${encodeURIComponent(tag)}/`),
    ];
    for (const route of routes) {
      const location = new URL(path(route), site).href.replaceAll('&', '&amp;');
      urls.push(`  <url><loc>${location}</loc></url>`);
    }
  }
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
