// this page is for generating sitemap.xml

import { getProjects } from '../app/projects/utils';

export const baseUrl = 'https://alexdphan.com';

export default async function sitemap() {
  let projects = getProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    description: project.metadata.description,
    // lastModified: project.metadata.publishedAt,
  }));

  let routes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...projects];
}
