import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, path } from '../site';

const xml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = async ({ site, url }) => {
  const absolute = (route: string) => xml(new URL(path(route), site ?? url.origin).href);
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  const items = posts.map(({ id, data }) => {
    const link = absolute(`/blog/${id}/`);
    return `    <item>
      <title>${xml(data.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <description>${xml(data.description)}</description>
      <pubDate>${data.pubDate.toUTCString()}</pubDate>
      <category>${xml(data.category)}</category>
    </item>`;
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(SITE.title)}</title>
    <description>${xml(SITE.description)}</description>
    <link>${absolute('/')}</link>
    <language>zh-CN</language>
    <atom:link href="${absolute('/rss.xml')}" rel="self" type="application/rss+xml" />
${items.join('\n')}
  </channel>
</rss>
`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } },
  );
};
