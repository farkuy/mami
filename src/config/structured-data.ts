import type { StaticImageData } from 'next/image';
import { contacts } from './contacts';
import { absoluteUrl, seoImageUrl, siteDescription, siteName } from './seo';
import type { Tour } from '@/data/tours';

type BreadcrumbItem = {
  name: string;
  path: string;
};

function imageUrl(image: string | StaticImageData): string {
  return seoImageUrl(image);
}

function buildBreadcrumbNode(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function buildTourNode(tour: Tour) {
  const url = absoluteUrl(`/tours/${tour.slug}`);
  const touristTypeByGroup: Record<Tour['group'], string> = {
    city: 'Гости Нижнего Новгорода',
    region: 'Гости Нижегородской области',
    children: 'Дети и школьные группы',
  };

  return {
    '@type': 'TouristTrip',
    '@id': `${url}#tour`,
    name: tour.name,
    description: tour.shortDescription,
    url,
    image: imageUrl(tour.image),
    provider: {
      '@id': absoluteUrl('/#local-business'),
    },
    touristType: touristTypeByGroup[tour.group],
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Формат',
        value: tour.format,
      },
      {
        '@type': 'PropertyValue',
        name: 'Продолжительность',
        value: tour.duration,
      },
      {
        '@type': 'PropertyValue',
        name: 'Стоимость',
        value: tour.price,
      },
    ].filter((property) => property.value),
  };
}

export function buildSiteStructuredData() {
  const businessId = absoluteUrl('/#local-business');
  const websiteId = absoluteUrl('/#website');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: absoluteUrl('/'),
        name: siteName,
        description: siteDescription,
        inLanguage: 'ru-RU',
        publisher: {
          '@id': businessId,
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: siteName,
        description: siteDescription,
        url: absoluteUrl('/'),
        telephone: contacts.phone.tel,
        email: contacts.email,
        sameAs: [contacts.messengers.telegram.href],
        areaServed: {
          '@type': 'City',
          name: 'Нижний Новгород',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Нижний Новгород',
          addressCountry: 'RU',
        },
      },
    ],
  };
}

export function buildBreadcrumbStructuredData(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    ...buildBreadcrumbNode(items),
  };
}

export function buildTourStructuredData(tour: Tour) {
  return {
    '@context': 'https://schema.org',
    ...buildTourNode(tour),
  };
}

export function buildTourPageStructuredData(tour: Tour) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbNode([
        { name: 'Главная', path: '/' },
        { name: 'Экскурсии', path: '/tours' },
        { name: tour.name, path: `/tours/${tour.slug}` },
      ]),
      buildTourNode(tour),
    ],
  };
}
