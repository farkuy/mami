import type { Metadata } from 'next';
import type { StaticImageData } from 'next/image';

export const siteName = 'Нижний Новгород: Открой Свой';

export const siteDescription =
  'Персональные экскурсии по Нижнему Новгороду с частным гидом.';

export const siteBaseUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.test.ru',
);

type SeoImage = string | StaticImageData;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: SeoImage;
  imageAlt?: string;
};

export function absoluteUrl(path: string): string {
  return new URL(path, siteBaseUrl).toString();
}

export function seoImageUrl(image?: SeoImage): string {
  if (!image) {
    return absoluteUrl('/favicon.svg');
  }

  return typeof image === 'string' ? absoluteUrl(image) : absoluteUrl(image.src);
}

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt = title,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = seoImageUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: 'ru_RU',
      type: 'website',
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
