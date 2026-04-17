import { useState } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import Button from '../components/ui/Button/Button';
import Modal from '../components/ui/Modal/Modal';
import OrderForm from '../components/OrderForm/OrderForm';
import { getTourBySlug } from '../data/tours';
import styles from './TourPage.module.css';

export default function TourPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const tour = getTourBySlug(slug);
  const [orderOpen, setOrderOpen] = useState(false);

  if (!tour) return <Navigate to="/tours" replace />;

  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/tours" className={styles.back}>
          ← Все экскурсии
        </Link>

        <article className={styles.article}>
          <div className={styles.hero}>
            <img className={styles.image} src={tour.image} alt={tour.name} />
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

          <div className={styles.cta}>
            <Button
              type="button"
              variant="accent"
              size="lg"
              onClick={() => setOrderOpen(true)}
            >
              Заказать экскурсию
            </Button>
          </div>
        </article>
      </div>

      <Modal
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
        title="Заявка на экскурсию"
        subtitle="Оставьте контакты — свяжусь с вами и согласуем дату"
      >
        <OrderForm tourName={tour.name} autoFocusFirst />
      </Modal>
    </div>
  );
}
