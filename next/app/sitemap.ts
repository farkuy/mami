import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/config/seo';
import { tours } from '@/data/tours';

const staticRoutes = [
  {
    path: '/',
    priority: 1,
  },
  {
    path: '/tours',
    priority: 0.9,
  },
  {
    path: '/about',
    priority: 0.7,
  },
  {
    path: '/reviews',
    priority: 0.7,
  },
  {
    path: '/payment',
    priority: 0.5,
  },
  {
    path: '/privacy',
    priority: 0.3,
  },
  {
    path: '/data-policy',
    priority: 0.3,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency: 'monthly' as const,
    priority,
  }));

  const tourEntries = tours.map((tour) => ({
    url: absoluteUrl(`/tours/${tour.slug}`),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...tourEntries];
}
