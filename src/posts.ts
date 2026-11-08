import { getCollection, type CollectionEntry } from 'astro:content';

export function isTechShare(post: CollectionEntry<'blog'>) {
  return post.data.techShare || /(?:^|\/)src\/content\/blog\/tech\//.test((post.filePath ?? '').replaceAll('\\', '/'));
}

export async function getTechPosts() {
  return (await getCollection('blog', post => !post.data.draft && isTechShare(post)))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime() || a.id.localeCompare(b.id));
}

// Multiple featured posts resolve to the newest; no selection falls back to newest.
export function selectFeatured(posts: CollectionEntry<'blog'>[]) {
  return posts.find(post => post.data.featured) ?? posts[0];
}
