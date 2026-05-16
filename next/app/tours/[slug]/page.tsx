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
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}
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

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>В стоимость входит</h2>
            <ul className={styles.list}>
              {tour.included.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {tour.note && <p className={styles.note}>{tour.note}</p>}
          </section>

          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Формат</dt>
              <dd>{tour.format}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Продолжительность</dt>
              <dd>{tour.duration}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Стоимость</dt>
              <dd className={styles.price}>{tour.price}</dd>
            </div>
          </dl>

          <TourOrderCta tourName={tour.name} className={styles.cta} />
        </article>
      </div>
    </div>
  );
}
