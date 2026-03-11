import { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, '');
  const routes = [
    '',
    '/courses',
    '/pricing',
    '/community',
    '/about',
    '/for-teams',
    '/scholarships',
    '/help',
    '/success-stories',
    '/contact',
    '/legal/terms',
    '/legal/privacy',
    '/legal/cookies',
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' || path === '/courses' ? 'weekly' as const : 'monthly' as const,
    priority: path === '' ? 1 : path === '/courses' || path === '/pricing' ? 0.9 : 0.7,
  }));
}
