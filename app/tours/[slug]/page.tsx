import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd/JsonLd';
import SmartImage from '@/components/ui/SmartImage/SmartImage';
import TourOrderCta from '@/components/TourOrderCta/TourOrderCta';
import { buildPageMetadata } from '@/config/seo';
import { buildTourPageStructuredData } from '@/config/structured-data';
import { getTourBySlug, tours } from '@/data/tours';
import styles from '@/components/TourPage.module.css';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function renderTextWithLinks(text: string) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const exactUrlPattern = /^https?:\/\/[^\s]+$/;
  const parts = text.split(urlPattern);

  return parts.map((part, index) => {
    if (!exactUrlPattern.test(part)) {
      return part;
    }

    return (
      <a
        key={`${part}-${index}`}
        className={styles.textLink}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
      >
        {part}
      </a>
    );
  });
}

export const dynamicParams = false;

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {};
  }

  return buildPageMetadata({
    title: tour.name,
    description: tour.shortDescription,
    path: `/tours/${tour.slug}`,
    image: tour.image,
    imageAlt: tour.name,
  });
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const facts = [
    { label: 'Формат', value: tour.format },
    { label: 'Продолжительность', value: tour.duration },
    { label: 'Стоимость', value: tour.price, className: styles.price },
  ].filter((fact) => fact.value);

  return (
    <div className={styles.page}>
      <JsonLd data={buildTourPageStructuredData(tour)} />
      <div className="container">
        <Link href="/tours" className={styles.back}>
          ← Все экскурсии
        </Link>

        <article className={styles.article}>
          <div className={styles.hero}>
            <SmartImage className={styles.image} src={tour.image} alt={tour.name} />
          </div>

          <header className={styles.header}>
            <h1 className={styles.title}>{tour.name}</h1>
            <p className={styles.lead}>{tour.shortDescription}</p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>О программе</h2>
            {tour.fullDescription.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                {renderTextWithLinks(p)}
              </p>
            ))}
            {tour.alternativeRoutes && tour.alternativeRoutes.length > 0 && (
              <div className={styles.routeBox}>
                {tour.alternativeRoutesTitle && (
                  <h3 className={styles.routeTitle}>{tour.alternativeRoutesTitle}</h3>
                )}
                <ol className={styles.routeList}>
                  {tour.alternativeRoutes.map((route, i) => (
                    <li key={i}>{route}</li>
                  ))}
                </ol>
              </div>
            )}
          </section>

          {tour.highlights && tour.highlights.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Что увидим</h2>
              <ul className={styles.list}>
                {tour.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </section>
          )}

          {(tour.included.length > 0 || tour.note) && (
            <section className={styles.section}>
              {tour.included.length > 0 && (
                <>
                  <h2 className={styles.sectionTitle}>В стоимость входит</h2>
                  <ul className={styles.list}>
                    {tour.included.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {tour.note && <p className={styles.note}>{tour.note}</p>}
            </section>
          )}

          {facts.length > 0 && (
            <dl className={styles.facts}>
              {facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>{fact.label}</dt>
                  <dd className={fact.className}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <TourOrderCta tourName={tour.name} className={styles.cta} />
        </article>
      </div>
    </div>
  );
}
