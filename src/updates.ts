import { getCollection } from 'astro:content';

export async function getUpdates() {
  return (await getCollection('updates', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id));
}
