import { Link } from 'react-router-dom';
import styles from './Tours.module.css';
import Card from '../ui/Card/Card';
import { tourGroups, getToursByGroup } from '../../data/tours';

export default function Tours() {
  return (
    <section id="tours" className={styles.tours}>
      <div className="container">
        <h2 className="section-title">Экскурсии</h2>
        <p className="section-subtitle">Выберите маршрут или закажите индивидуальную программу</p>

        {tourGroups.map((group) => (
          <div key={group.id} id={group.id} className={styles.group}>
            <div className={styles.groupHeader}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              {group.subtitle && <p className={styles.groupSubtitle}>{group.subtitle}</p>}
            </div>

            <div className={styles.list}>
              {getToursByGroup(group.id).map((tour) => (
                <Link key={tour.slug} to={`/tours/${tour.slug}`} className={styles.rowLink}>
                  <Card as="article" variant="media" className={styles.row}>
                    <img
                      className={styles.image}
                      src={tour.image}
                      alt={tour.name}
                      loading="lazy"
                    />
                    <div className={styles.body}>
                      <h4 className={styles.name}>{tour.name}</h4>
                      <p className={styles.description}>{tour.shortDescription}</p>
                      <div className={styles.meta}>
                        <span className={styles.duration}>{tour.duration}</span>
                        <span className={styles.more}>Подробнее →</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
