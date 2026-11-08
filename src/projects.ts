import { getCollection } from 'astro:content';

export async function getProjects() {
  return (await getCollection('projects', ({ data }) => !data.draft))
    .sort((a, b) => Number(a.data.status === '计划中') - Number(b.data.status === '计划中')
      || a.data.order - b.data.order || a.id.localeCompare(b.id));
}
