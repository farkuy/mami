import Link from 'next/link';
import styles from './Tours.module.css';
import Card from '../ui/Card/Card';
import PageBanner from '../ui/PageBanner/PageBanner';
import SmartImage from '../ui/SmartImage/SmartImage';
import { tourGroups, getToursByGroup, tours } from '../../data/tours';
import { souvenirsPage } from '../../data/souvenirs';

export default function Tours() {
  return (
    <section id="tours" className={styles.tours}>
      <PageBanner
        image={tours[0].image}
        imageAlt={tours[0].name}
        kicker="Экскурсии"
        title="Маршруты по Нижнему Новгороду"
        lead="Выберите готовую программу или закажите индивидуальную - классические обзорные, тематические, детские и гастрономические экскурсии."
      />

      <div className="container">
        {tourGroups.map((group) => (
          <div key={group.id} id={group.id} className={styles.group}>
            <div className={styles.groupHeader}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              {group.subtitle && <p className={styles.groupSubtitle}>{group.subtitle}</p>}
            </div>

            <div className={styles.list}>
              {getToursByGroup(group.id).map((tour) => (
                <Link key={tour.slug} href={`/tours/${tour.slug}`} className={styles.rowLink}>
                  <Card as="article" variant="media" className={styles.row}>
                    <SmartImage
                      className={styles.image}
                      src={tour.image}
                      alt={tour.name}
                      loading="lazy"
                    />
                    <div className={styles.body}>
                      <h4 className={styles.name}>{tour.name}</h4>
                      <p className={styles.description}>{tour.shortDescription}</p>
                      <div className={styles.meta}>
                        {tour?.duration && <span className={styles.duration}>{tour.duration}</span>}
                        <span className={styles.more}>Подробнее →</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.souvenirs} id="souvenirs">
          <div className={styles.groupHeader}>
            <h3 className={styles.groupTitle}>Полезно перед поездкой</h3>
            <p className={styles.groupSubtitle}>
              Небольшая сводка для тех, кто хочет увезти из города не только фотографии.
            </p>
          </div>

          <Link href="/souvenirs" className={styles.rowLink}>
            <Card as="article" variant="media" className={styles.row}>
              <SmartImage
                className={styles.image}
                src={souvenirsPage.image}
                alt={souvenirsPage.title}
                loading="lazy"
              />
              <div className={styles.body}>
                <h4 className={styles.name}>{souvenirsPage.title}</h4>
                <p className={styles.description}>{souvenirsPage.description}</p>
                <div className={styles.meta}>
                  <span className={styles.duration}>Сувениры и подарки</span>
                  <span className={styles.more}>Открыть подборку →</span>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
